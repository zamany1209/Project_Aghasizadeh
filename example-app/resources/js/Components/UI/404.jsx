import React, { useContext,useEffect  } from 'react';
import { DataContext } from '@/Context/DataContext';
import { Modal, Button } from 'react-bootstrap';

export default function single_Slider({ index_Component, name_Component }) {
    const { edit_text,url, token, data, changeValue_Data,open_Context_Menu } = useContext(DataContext);
    const id_Modal = String(name_Component+"_"+index_Component);
    return (
        <>
    <section id={data.components[index_Component]?.id} class="error-section pt-110 pb-120" onContextMenu={(event)=>{open_Context_Menu(event,id_Modal,index_Component)}}>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-10">
                        <div class="content-box text-center">
                            <img src="assets/images/404/404_text.png" class="text_png" alt=""/>
                            <span style={{color:data.components[index_Component].id_1[1]}}>{data.components[index_Component].id_1[0]}</span>
                            <h2>{data.components[index_Component].id_2}</h2>
                            <a href={data.components[index_Component].id_3[1]} style={{"backgroundColor":data.components[index_Component].id_3[2],color:data.components[index_Component].id_3[3]}} class="main-btn">{data.components[index_Component].id_3[0]}</a>
                            <a href={data.components[index_Component].id_4[1]}>
                            <img src={url+data.components[index_Component].id_4[0]} class="img-fluid" alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        {token ? (
          <ModalComponent id_Modal={id_Modal} index_Component={index_Component}></ModalComponent>
        ):(
          <div></div>
        )}
    </section>
        </>
    );
}
const ModalComponent = ({id_Modal,index_Component}) => {
    const { data, isModalOpen, close_Modal,add_Modal,open_Modal,changeValue_Data } = useContext(DataContext);
    useEffect(() => {
        add_Modal(id_Modal);
    }, []);
  const addItem = {
    name: "",
    color: "#0574ff",
    link: "#"
  };

  // not is chancge scrolle
  useEffect(() => {
    if(isModalOpen[id_Modal]?.status == true){
      window.scrollTo(0, isModalOpen[id_Modal]?.location);
    }else{
      window.scrollTo(0, isModalOpen[id_Modal]?.location);
    }
  }, [isModalOpen[id_Modal]?.status]);
    return (
        <>
      <Modal show={isModalOpen[id_Modal]?.status} onHide={()=>{close_Modal(id_Modal)}} scrollable centered size="md">
        <Modal.Header closeButton>
          <Modal.Title>تنظیمات</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='mb-3 col-12'>
          <p>ID: {data.components[index_Component].id}</p>
        </div>
        <div className="col-12 p-0">
        <div className="col-12 mb-2">
            <div className="row">
              <div className="col-8 text-right">
                عنوان
              </div>
              <div className="col-4 text-right">
                رنگ
              </div>
            </div>
        </div>
          <div className="col-12 mb-2">
            <div className="row">
              <input type='text'  className="form-control col-8 text-right" placeholder='..' value={data.components[index_Component].id_1[0]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_1",0],event.target.value,"change")}}/>
              <input type="color" className="form-control form-control-color col-4" id="exampleColorInput" value={data.components[index_Component].id_1[1]} title="Choose your color" onChange={(event)=>{changeValue_Data(["components",index_Component,"id_1",1],event.target.value,"change")}}/>
            </div>
          </div>
        </div>
        <div className="col-12 p-0">
        <div className="col-12 mb-2">
            <div className="row">
              <div className="col-12 text-right">
                تیتر
              </div>
            </div>
        </div>
          <div className="col-12 mb-2">
            <div className="row">
              <input type='text'  className="form-control col-12 text-right" placeholder='..' value={data.components[index_Component].id_2} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_2"],event.target.value,"change")}}/>
            </div>
          </div>
        </div>
        <div className="col-12 p-0">
        <div className="col-12 mb-2">
            <div className="row">
              <div className="col-4 text-right">
                عنوان
              </div>
              <div className="col-3 text-right">
                لینک
              </div>
              <div className="col-3 text-right" style={{fontSize:"14px"}}>
                رنگ پس زمینه
              </div>
              <div className="col-2 text-right" style={{fontSize:"14px"}}>
                رنگ متن
              </div>
            </div>
        </div>
          <div className="col-12 mb-2">
            <div className="row">
              <input type='text'  className="form-control col-4 text-right" placeholder='..' value={data.components[index_Component].id_3[0]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_3",0],event.target.value,"change")}}/>
              <input type='text'  className="form-control col-4" placeholder='..' value={data.components[index_Component].id_3[1]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_3",1],event.target.value,"change")}}/>
              <input type="color" className="form-control form-control-color col-2" id="exampleColorInput" value={data.components[index_Component].id_3[2]} title="Choose your color" onChange={(event)=>{changeValue_Data(["components",index_Component,"id_3",2],event.target.value,"change")}}/>
              <input type="color" className="form-control form-control-color col-2" id="exampleColorInput" value={data.components[index_Component].id_3[3]} title="Choose your color" onChange={(event)=>{changeValue_Data(["components",index_Component,"id_3",3],event.target.value,"change")}}/>
            </div>
          </div>
        </div>
        <div className="col-12 p-0">
        <div className="col-12 mb-2">
            <div className="row">
              <div className="col-4 text-right">
                عکس
              </div>
              <div className="col-8 text-right">
                لینک
              </div>
            </div>
        </div>
          <div className="col-12 mb-2">
            <div className="row">
              <input type='button'  className="form-control col-4 btn-primary" value="تغییر" onClick={()=>{open_Modal("list_image",window.scrollY,["components",index_Component,"id_4",0])}}/>
              <input type='text'  className="form-control col-8" placeholder='..' value={data.components[index_Component].id_4[1]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_4",1],event.target.value,"change")}}/>
            </div>
          </div>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>{close_Modal(id_Modal)}}>
            خروج
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    );
  };