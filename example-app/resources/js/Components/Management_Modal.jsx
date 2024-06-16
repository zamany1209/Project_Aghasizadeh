import { Modal, Button } from 'react-bootstrap';
import React, { useContext,useEffect } from 'react';
import { DataContext } from '@/Context/DataContext';
import { LazyLoadImage } from 'react-lazy-load-image-component';
export default function Management_Modal({name}){
    const { data,url,isModalOpen, close_Modal,add_Modal,open_Modal,image_list,component_list_img,component_list,isSetImage, setImage,changeValue_Data } = useContext(DataContext);
    const show_list_image = "list_image";
    const show_list_image_data_search = "list_image_data_search";
    const show_list_component = "list_component";
    const show_edit_title = "edit_title";
    const add_component = async (path,name)=>{
      var new_data = [component_list[name]];
      // console.log(new_data);
      await new Promise((resolve) => changeValue_Data(path,component_list[name],"add", null, resolve));
    };
    const save_data_search = async () => {
      var id = data.data_search.id;
      var name = data.data_search.name;
      var image = data.data_search.image;
      var keywords = data.data_search.keywords;
          try {
            const response = await axios.post(url+'/edit_data_search', {
                id,name,image,keywords
            });
            alert(response.data.message);
            close_Modal(show_edit_title);
        } catch(error) {
            if (error.response && error.response.status === 409) {
                alert(error.response.data.message);
            }
          }
    }
    useEffect(() => {
      if (isModalOpen[show_list_image]) {
        // Disable body scroll when modal is open
        document.body.style.overflow = 'hidden';
      } else {
        // Re-enable body scroll when modal is closed
        document.body.style.overflow = '';
      }
    }, [isModalOpen[show_list_image]]);
    return(
        <>
      <Modal show={isModalOpen[show_list_image]?.status} onHide={()=>{close_Modal(show_list_image)}} centered size="xl">
        <Modal.Header closeButton>
          <Modal.Title>تنظیمات</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="row">
                {image_list?.Image.map((name,index) =>
                    <div key={index} className="col-2">
                        <LazyLoadImage style={{height:"170px",width:"170px", objectFit:"cover",objectPosition:"center"}} src={url+"/asset/img/"+name} alt="" onClick={()=>{changeValue_Data(isModalOpen[show_list_image]?.value,"/asset/img/"+name,"change");close_Modal(show_list_image);}} />
                    </div>
                )}
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>{close_Modal(show_list_image)}}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={isModalOpen[show_list_component]?.status} onHide={()=>{close_Modal(show_list_component)}} centered size="xl">
        <Modal.Header closeButton>
          <Modal.Title>تنظیمات</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="row">
                {component_list_img?.Component.map((item,index) =>
                    <div key={index} className="col-12">
                        <LazyLoadImage className='col12' src={url+"/asset/img/component/"+item["img"]} alt="" onClick={()=>{add_component(["components"],item["name"]);close_Modal(show_list_component);}} />
                        <hr className='m-3'/>
                    </div>
                )}
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>{close_Modal(show_list_component)}}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {name === "landing" ? (
          <Modal show={isModalOpen[show_edit_title]?.status} onHide={()=>{close_Modal(show_edit_title)}} centered size="md">
            <Modal.Header closeButton>
              <Modal.Title>ویرایش اطلاعات جستجو</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">عنوان سایت</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="..." value={data.title} onChange={(event)=>{changeValue_Data(["title"],event.target.value,"change")}}/>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={()=>{close_Modal(show_edit_title)}}>
                خروج
              </Button>
            </Modal.Footer>
          </Modal>
      ):(
        <Modal show={isModalOpen[show_edit_title]?.status} onHide={()=>{close_Modal(show_edit_title)}} centered size="md">
          <Modal.Header closeButton>
            <Modal.Title>ویرایش اطلاعات جستجو</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className="mb-3 rtl text-right">
              <label htmlFor="formGroupExampleInput2" className="form-label">عنوان سایت</label>
              <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="..." value={data.data_search?.name} onChange={(event)=>{changeValue_Data(["data_search","name"],event.target.value,"change")}}/>
            </div>
            <div className="mb-3 rtl text-right">
              <label htmlFor="formGroupExampleInput2" className="form-label">عنوان سایت</label>
              <textarea type="text" className="form-control " id="formGroupExampleInput2" placeholder="..." value={data.data_search?.keywords} onChange={(event)=>{changeValue_Data(["data_search","keywords"],event.target.value,"change")}}></textarea>
            </div>
            <div className="col-12">
              <LazyLoadImage className="col-12" style={{objectFit:"cover",objectPosition:"center"}} src={url+data.data_search?.image}/>
            </div>
              <ul className="list-group list-group-horizontal">
                  <li className="list-group-item col-12 btn" onClick={()=> {open_Modal(show_list_image,window.scrollY,["data_search","image"])}}>تغییر عکس پس زمنیه</li>
              </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={()=>{close_Modal(show_edit_title)}}>
              خروج
            </Button>
            <Button variant="success" onClick={save_data_search}>
              ذخیره
            </Button>
          </Modal.Footer>
        </Modal>
      )}
        </>
    );
}