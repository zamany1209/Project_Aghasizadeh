import React, { useContext,useEffect,useState  } from 'react';
import { DataContext } from '@/Context/DataContext';
import { Modal, Button } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function about_Wrapper({ index_Component, name_Component }) {
    const { edit_text,url, token,data,open_Context_Menu} = useContext(DataContext);
    const id_Modal = String(name_Component+"_"+index_Component);
    return (
        <>
        <section id={data.components[index_Component]?.id} className="about-area-v2 pt-110 pb-80" style={{"backgroundColor":data.components[index_Component].id_1}} onContextMenu={(event)=>{open_Context_Menu(event,id_Modal,index_Component)}}>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                    <div className="about-img-box wow fadeInLeft" data-wow-duration=".3ss">
                        <div className="about-img-1">
                            <img src={url+data.components[index_Component].id_6} className="img-fluid" alt=""/>
                            <div className="quote-icon" style={{"backgroundColor":data.components[index_Component].id_8[2]}}>
                                <i className="pe-7s-diamond"></i>
                            </div>
                        </div>
                        <div className="about-img-2">
                            <img src={url+data.components[index_Component].id_7}  className="img-fluid" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="about-content-box rtl ">
                        <div className="section-title mb-15 text-right">
                            <span className="span" style={{"color":data.components[index_Component].id_8[2]}}>{data.components[index_Component].id_2}</span>
                            <h2 style={{"color":data.components[index_Component].id_8[0]}}>{data.components[index_Component].id_3}</h2>
                        </div>
                        <h4 className='text-right' style={{"color":data.components[index_Component].id_8[1]}}>{data.components[index_Component].id_4}</h4>
                        <div className="box-wrap">
                            <div className="row">
                            {data.components[index_Component].id_5.map((text, index) =>
                                <div key={index} className="col-lg-12">
                                    <div className="box-item wow fadeInUp" data-wow-duration="2s">
                                        <div className="icon">
                                        <i className="pe-7s-diamond" style={{"color":data.components[index_Component].id_8[2]}}></i>
                                        </div>
                                        <div className="info text-right pr-4">
                                            <h3 style={{"color":data.components[index_Component].id_8[0]}}>{text[0]}</h3>
                                            <p style={{"color":data.components[index_Component].id_8[1]}}>{text[1]}</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                            </div>
                        </div>
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
    const add_item =["عنوان","توضیحات"];
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
        <div className='mb-3 col-12'>
          <p>ID: {data.components[index_Component].id}</p>
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">تیتر</label>
          <input type="text" className="form-control" id="formGroupExampleInput" placeholder="..." value={data.components[index_Component].id_2} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_2"],event.target.value,"change")}}/>
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">عنوان</label>
          <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="..." value={data.components[index_Component].id_3} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_3"],event.target.value,"change")}}/>
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">توضیحات</label>
          <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="..." value={data.components[index_Component].id_4} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_4"],event.target.value,"change")}}/>
        </div>
        <hr/>
        <div className="col-12 row">
          <div className="mb-3 col-6">
            <label htmlFor="formGroupExampleInput" className="form-label">رنگ عنوان</label>
            <input type="color" className="form-control form-control-color col-12" id="exampleColorInput" value={data.components[index_Component].id_8[0]} title="Choose your color" onChange={(event)=>{changeValue_Data(["components",index_Component,"id_8",0],event.target.value,"change")}}/>
          </div>
          <div className="mb-3 col-6">
            <label htmlFor="formGroupExampleInput" className="form-label">رنگ توضیحات</label>
            <input type="color" className="form-control form-control-color col-12" id="exampleColorInput" value={data.components[index_Component].id_8[1]} title="Choose your color" onChange={(event)=>{changeValue_Data(["components",index_Component,"id_8",1],event.target.value,"change")}}/>
          </div>
          <div className="mb-3 col-6">
            <label htmlFor="formGroupExampleInput" className="form-label">رنگ آیکن ها</label>
            <input type="color" className="form-control form-control-color col-12" id="exampleColorInput" value={data.components[index_Component].id_8[2]} title="Choose your color" onChange={(event)=>{changeValue_Data(["components",index_Component,"id_8",2],event.target.value,"change")}}/>
          </div>
          <div className="mb-3 col-6">
            <label htmlFor="formGroupExampleInput" className="form-label">رنگ پس زمینه</label>
            <input type="color" className="form-control form-control-color col-12" id="exampleColorInput" value={data.components[index_Component].id_1} title="Choose your color" onChange={(event)=>{changeValue_Data(["components",index_Component,"id_1"],event.target.value,"change")}}/>
          </div>
        </div>

        <hr/>

        <div className="col-12 p-0">
        <div className="col-12 mb-2">
            <div className="row">
              <div className="col-5">
                عنوان
              </div>
              <div className="col-3">
                توضیحات
              </div>
              <div className="col-2">
              </div>
              <div className="col-2">
                حذف
              </div>
            </div>
        </div>
          {data.components[index_Component].id_5.map((item, index) =>
          <div key={index} className="col-12 mb-2">
            <div className="row">
              <input type='text'  className="form-control col-5" placeholder='..' value={item[0]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_5",index,0],event.target.value,"change")}}/>
              <input type='text'  className="form-control col-5" placeholder='..' value={item[1]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_5",index,1],event.target.value,"change")}}/>
              <input type='button'  className="form-control col-2 btn-danger" value="حذف" onClick={()=>{changeValue_Data(["components",index_Component,"id_5"],null,"delete",index)}}/>
            </div>
          </div>
          )}
        </div>

            <ul className="list-group list-group-horizontal">
                <li className="list-group-item btn" onClick={()=> {open_Modal("list_image",window.scrollY,["components",index_Component,"id_6"])}}>تغییر عکس بنر اول</li>
                <li className="list-group-item btn" onClick={()=> {open_Modal("list_image",window.scrollY,["components",index_Component,"id_7"])}}>تغییر عکس بنر دوم</li>
                <li className="list-group-item btn" onClick={()=>{changeValue_Data(["components",index_Component,"id_5"],add_item,"add")}}>افزودن آیتم</li>
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