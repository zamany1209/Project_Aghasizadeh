import React, { useContext,useEffect,useState  } from 'react';
import { DataContext } from '@/Context/DataContext';
import { Modal, Button } from 'react-bootstrap';

export default function Page() {
    const { active_component } = useContext(DataContext);
    return(
        <>
            {active_component === 'Pages' && <Constructor />}
        </>
    );
}
const Constructor =() =>{
    const { data, url,open_Modal,add_Modal,changeValue_Data} = useContext(DataContext);
      const change_url = async (event,item,index)=>{
        var old_data_name = item;
        var old_data = data.list_pages.data.page[item];
        var new_data_name = event.target.innerText;
        var new_data = {
            [new_data_name]: {
                "access": old_data.access,
                "visit": old_data.visit
            }
        };
        if(event.target.innerText == ""){
            alert("آدرس نمی تواند خالی باشد");
            event.target.innerText = old_data_name;
        }else{
            if(event.target.innerText != old_data_name){
                if(data.list_pages.data.page[event.target.innerText]){
                    alert("آدرس نمی تواند تکراری باشد");
                    event.target.innerText = old_data_name;
                }
                else{
                        await new Promise((resolve) => changeValue_Data(["list_pages","data","page"],new_data,"add", null, resolve));
                        await new Promise((resolve) => changeValue_Data(["list_pages","data","page",old_data_name],null,"delete", null, resolve));
                        await new Promise((resolve) => changeValue_Data(["list_pages","data","list_page",index,"name"],event.target.innerText,"change", null, resolve));
                }
            }
        }
      }
      const delete_url = async (index,name)=>{
            await new Promise((resolve) => changeValue_Data(["list_pages","data","page",name],null,"delete", null, resolve));
            await new Promise((resolve) => changeValue_Data(["list_pages","data","list_page"],null,"delete", index, resolve));
      }
      const id_Modal = "add_url";

    return (
        <>
        <div className="container-fluid m-lg-3">

        <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Pages</h1>
              <button type="button" onClick={()=>{open_Modal(id_Modal)}} className="d-none d-sm-inline-block btn btn-sm btn-success shadow-sm m-2">افزودن صفحه</button>
          </div>
        <ul className="list-group shadow">
                <li className="list-group-item col-12">
                    <div className="row">
                        <div className="col-3 text-center">
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
                        <div className="col-2 text-center">
                        حذف
                        </div>
                    </div>
                </li>
            {data.list_pages.data.list_page.map((item,index) =>
                <li key={index} className="list-group-item col-12">
                    <div className="row">
                        <div className="col-3 text-center">
                        <p className='mt-2' suppressContentEditableWarning={true} contentEditable={true} onBlur={(event)=>{change_url(event,item["name"],index)}}>{item["name"]}</p>
                        </div>
                        <div className="col-3 text-center">
                        <p className='mt-2'><a href={url+"/page/"+item["name"]}>{url+"/page/"+item["name"]}</a></p>
                        </div>
                        <div className="col-2 text-center">
                        <p className='mt-2'>{data.list_pages.data.page[item["name"]].visit}</p>
                        </div>
                        <div className="col-2 text-center">
                        <input type="checkbox" className="form-check-input ml-1 mt-3" checked={data.list_pages.data.page[item["name"]].access} id={"exampleCheck"+index} onChange={(event)=>{changeValue_Data(["list_pages","data","page",item["name"],"access"],event.target.checked,"change");}}/>
                        </div>
                        <div className="col-2 text-center">
                            <button onClick={()=>{delete_url(index,item["name"])}} className="btn btn-danger mt-1">حذف</button>
                        </div>
                    </div>
                </li>
            )}
        </ul>
          </div>
          <ModalComponent id_Modal={id_Modal}></ModalComponent>
        </>
    );
}
const ModalComponent = ({id_Modal}) => {
    const { data, isModalOpen, close_Modal,add_Modal,open_Modal,changeValue_Data } = useContext(DataContext);
    const [url, seturl] = useState("");
    useEffect(() => {
        add_Modal(id_Modal);
    }, []);
    const add_url = async (event)=>{
        var new_data = {
            [url]: {
                "access": true,
                "visit": 0
            }
        };
        var new_data_name = {
            "name":url
        };
        if(url == ""){
            alert("آدرس نمی تواند خالی باشد");
        }else{
            if(data.list_pages.data.page[url]){
                alert("آدرس نمی تواند تکراری باشد");
            }
            else{
                    await new Promise((resolve) => changeValue_Data(["list_pages","data","page"],new_data,"add", null, resolve));
                    await new Promise((resolve) => changeValue_Data(["list_pages","data","list_page"],new_data_name,"add", null, resolve));

            }
        }
        seturl("");
      }
    return (
        <>
      <Modal show={isModalOpen[id_Modal]?.status} onHide={()=>{close_Modal(id_Modal)}} scrollable centered size="md">
        <Modal.Header>
          <Modal.Title>لطفا آدرس خود را وارد کنید</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <input type="text" className='col-12 form-control' value={url} onChange={()=>{seturl(event.target.value)}}/>
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