import React, { useContext,useEffect,useState  } from 'react';
import { DataContext } from '@/Context/DataContext';
import { Modal, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

export default function Page() {
    const { active_component,url } = useContext(DataContext);
    return(
        <>
            {active_component === 'Pages' && <Constructor />}
        </>
    );
}
const Constructor =() =>{
    const { data, url,open_Modal,add_Modal,changeValue_Data} = useContext(DataContext);
      const delete_url = async (index,id,url_page,event)=>{
        event.preventDefault();
        try {
          const result = await Swal.fire({
            title: '('+url_page+')'+'این صفحه حذف شود؟',
            text: 'بعد از حذف صفحه امکان بازیابی وجود ندارد',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
          });
    
          if (result.isConfirmed) {
              try {
                const response = await axios.post(url+'/delete_page', {
                    id,url_page
                });
                changeValue_Data(["list_pages"],null,"delete", index);
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "تغییرات اعمال شد",
                  showConfirmButton: false,
                  timer: 1500
                });
            } catch(error) {
                if (error.response && error.response.status === 409) {
                    alert(error.response.data.message);
                }
              }
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            console.log('User did not agree.');
          }
        } catch (error) {
          console.error('Error showing dialog:', error);
        }
      }
      const access_page = async (id,index,event) => {
        event.preventDefault();
        var data_checked = event.target.checked;
        try {
            const response = await axios.post(url+'/access_page', {
                id,data_checked
            });
            changeValue_Data(["list_pages",index,"access"],data_checked,"change");
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "تغییرات اعمال شد",
              showConfirmButton: false,
              timer: 1500
            });
        } catch(error) {
            if (error.response && error.response.status === 409) {
                alert(error.response.data.message);
            }
          }
      }
      const id_Modal = "add_url";

    return (
        <>
        <div className="container-fluid m-lg-3">

        <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">صفحه ها</h1>
              <button type="button" onClick={()=>{open_Modal(id_Modal)}} className="btn btn-sm btn-success shadow-sm m-2">افزودن صفحه</button>
          </div>
        <ul className="list-group shadow">
                <li className="list-group-item col-12">
                    <div className="row">
                        <div className="col-2 text-center">
                        نام
                        </div>
                        <div className="col-3 text-center">
                        لینک
                        </div>
                        <div className="col-2 text-center">
                        تعداد بازدید
                        </div>
                        <div className="col-2 text-center">
                        نمایش
                        </div>
                        <div className="col-3 text-center">
                        حذف
                        </div>
                    </div>
                </li>
            {data.list_pages.map((item,index) =>
                <li key={index} className="list-group-item col-12">
                    <div className="row">
                        <div className="col-2 text-center">
                        <p className='mt-2 text-truncate'>{item["url"]}</p>
                        </div>
                        <div className="col-3 text-center">
                        <p className='mt-2 text-truncate'><a href={url+"/page/"+item["url"]}>{url+"/page/"+item["url"]}</a></p>
                        </div>
                        <div className="col-2 text-center">
                        <p className='mt-2'>{item["visit"]}</p>
                        </div>
                        <div className="col-2 text-center">
                        <input type="checkbox" className="form-check-input ml-1 mt-3" checked={item["access"]} id={"exampleCheck"+index} onChange={(event)=>{access_page(item["id"],index,event)}}/>
                        </div>
                        <div className="col-3 text-center">
                            <button onClick={(event)=>{delete_url(index,item["id"],item["url"],event)}} className="btn btn-danger mt-1">حذف</button>
                        </div>
                    </div>
                </li>
            )}
        </ul>
          </div>
          <ModalComponentPage id_Modal={id_Modal}></ModalComponentPage>
        </>
    );
}
const ModalComponentPage = ({id_Modal}) => {
    const { data,url, isModalOpen, close_Modal,add_Modal,open_Modal,changeValue_Data } = useContext(DataContext);
    const [url_page, setUrl_page] = useState("");
    useEffect(() => {
        add_Modal(id_Modal);
    }, []);

    const add_url = async (e) => {
        e.preventDefault();
        const new_data_name = {"access": 1, "url": url_page, "visit": 0};
        try {
            const response = await axios.post(url+'/create_page', {
                url_page
            });
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "صفحه جدید ایجاد شد",
              showConfirmButton: false,
              timer: 1500
            });
            await new Promise((resolve) => changeValue_Data(["list_pages"],new_data_name,"add", null, resolve));
            setUrl_page("");
        } catch(error) {
            if (error.response && error.response.status === 409) {
                alert(error.response.data.message);
            }
            setUrl_page("");
          }
    };
    return (
        <>
      <Modal show={isModalOpen[id_Modal]?.status} onHide={()=>{close_Modal(id_Modal)}} scrollable centered size="md">
        <Modal.Header>
          <Modal.Title>لطفا آدرس خود را وارد کنید</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <input type="text" className='col-12 form-control' value={url_page} onChange={(event)=>{setUrl_page(event.target.value)}}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>{close_Modal(id_Modal)}}>
            خروج
          </Button>
          <Button variant="success" onClick={(event)=>{add_url(event)}}>
            درج
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    );
  };
