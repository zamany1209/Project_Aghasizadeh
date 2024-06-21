import React, { useContext,useEffect,useState  } from 'react';
import { DataContext } from '@/Context/DataContext';
import { Modal, Button } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function bredcumbs_Section({ index_Component, name_Component }) {
    const { edit_text,url, token,data,open_Context_Menu} = useContext(DataContext);
    const id_Modal = String(name_Component+"_"+index_Component);
    return (
        <>
        <section id={data.components[index_Component]?.id} onContextMenu={(event)=>{open_Context_Menu(event,id_Modal,index_Component)}} className="bredcumbs-area bg-cover" style={{"backgroundImage": "url("+url+data.components[index_Component].id_1+")"}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="page-title-inner text-right">
                            <div className="title">
                                <h2 style={{"fontSize":data.components[index_Component].id_2[1]+"px"}}>{data.components[index_Component].id_2[0]}</h2>
                            </div>
                            <ul className="bredcumbs-link">
                              {data.components[index_Component].id_3.map((item,index)=>
                                <li key={index}><a href={item[1]}>{item[0]}</a></li>
                              )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {token ? (
            <>
                <ModalComponent id_Modal={id_Modal} index_Component={index_Component}></ModalComponent>
                </>
              ):(
                <div></div>
              )}
        </section>
        </>
    );
}
const ModalComponent = ({id_Modal,index_Component}) => {
    const { data, isModalOpen, close_Modal,add_Modal,open_Modal,changeValue_Data } = useContext(DataContext);
    const add_item =["عنوان","#"];
    useEffect(() => {
        add_Modal(id_Modal);
    }, []);
  // not is chancge scrolle
  useEffect(() => {
    if(isModalOpen[id_Modal]?.status == true){
      window.scrollTo(0, isModalOpen[id_Modal]?.location);
    }else{
      window.scrollTo(0, isModalOpen[id_Modal]?.location);
    }
  }, [isModalOpen[id_Modal]?.status]);
  useEffect(() =>{
    if(isModalOpen[id_Modal]?.status == true){
      window.scrollTo(0, isModalOpen[id_Modal]?.location);
    }
  },[data]);
    return (
        <>
      <Modal show={isModalOpen[id_Modal]?.status} onHide={()=>{close_Modal(id_Modal)}} scrollable centered size="md">
        <Modal.Header closeButton>
          <Modal.Title>تنظیمات</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">عنوان</label>
          <input type="text" className="form-control" id="formGroupExampleInput" placeholder="..." value={data.components[index_Component].id_2[0]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_2",0],event.target.value,"change")}}/>
          <label htmlFor="customRange2" className="form-label" style={{"fontSize":"10px"}}>{data.components[index_Component].id_2[1]}</label>
          <input type="range" className="form-range col-12" min="0" max="70" step="1" id="customRange2" value={data.components[index_Component].id_2[1]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_2",1],event.target.value,"change")}}/>
        </div>
        <div className="col-12 p-0">
        <div className="col-12 mb-2">
            <div className="row">
              <div className="col-5">
                نام دکمه
              </div>
              <div className="col-3">
                لینک
              </div>
              <div className="col-2">
                رنگ
              </div>
              <div className="col-2">
                حذف
              </div>
            </div>
        </div>
          {data.components[index_Component].id_3.map((item, index) =>
          <div key={index} className="col-12 mb-2">
            <div className="row">
              <input type='text'  className="form-control col-5" placeholder='..' value={item[0]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_3",index,0],event.target.value,"change")}}/>
              <input type='text'  className="form-control col-3" placeholder='..' value={item[1]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_3",index,1],event.target.value,"change")}}/>
              <input type='button'  className="form-control col-2 btn-danger" value="حذف" onClick={(event)=>{changeValue_Data(["components",index_Component,"id_3"],null,"delete",index)}}/>
            </div>
          </div>
          )}
        </div>
        <ul className="list-group list-group-horizontal">
                <li className="list-group-item btn" onClick={()=> {open_Modal("list_image",window.scrollY,["components",index_Component,"id_1"])}}>تغییر عکس پس زمنیه</li>
                <li className="list-group-item btn" onClick={(event)=>{changeValue_Data(["components",index_Component,"id_3"],add_item,"add")}}>افزودن دکمه</li>
        </ul>
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