import React, { useContext,useEffect,useState  } from 'react';
import { DataContext } from '@/Context/DataContext';
import { Modal, Button } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function about_Wrapper({ index_Component, name_Component }) {
    const { edit_text,url, token,data,open_Context_Menu} = useContext(DataContext);
    const id_Modal = String(name_Component+"_"+index_Component);
    return (
        <>
        <section id={data.components[index_Component]?.id} className="about-area-v1 pt-120 pb-60" style={{"backgroundColor":data.components[index_Component].id_1}} onContextMenu={(event)=>{open_Context_Menu(event,id_Modal,index_Component)}}>
            <div className="about-wrapper">
                <div className="about_right left pb-60">
                    <div className="about-content-box text-right">
                        <span className="dot-about" style={{"background":data.components[index_Component].id_2[2]}}></span>
                        <span className="about_span" style={{color:data.components[index_Component].id_2[2],"fontSize":data.components[index_Component].id_2[1]}}>{data.components[index_Component].id_2[0]}</span>
                        <h2 style={{"color":data.components[index_Component].id_3[2],"fontSize":data.components[index_Component].id_3[1]+"px"}}>{data.components[index_Component].id_3[0]}</h2>
                        <h3 style={{"color":data.components[index_Component].id_4[2],"fontSize":data.components[index_Component].id_4[1]+"px"}}>{data.components[index_Component].id_4[0]}</h3>
                        <div className="content-box">
                        {data.components[index_Component].id_5.text.map((text, index) =>
                            <p key={index} style={{"color":data.components[index_Component].id_5.color,"fontSize":data.components[index_Component].id_5.size+"px"}}>{text}</p>
                        )}
                        </div>
                        <div className="col-12 row text-center">
                          {data.components[index_Component].id_6.map((btn, index) =>
                              <a key={index} href={btn["link"]} className="main-btn col-auto m-2" style={{"backgroundColor":btn["color"]}}>{btn["name"]}</a>
                          )}
                        </div>
                    </div>
                </div>
                <div className="about_left pb-60 wow fadeInRight" data-wow-duration="1s">
                    <LazyLoadImage src={url+data.components[index_Component].id_7} alt=""/>
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
    const add_item ={
      name: "",
      link: "#",
      color: "#0574ff"
    };
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
          <label htmlFor="formGroupExampleInput" className="form-label">عنوان</label>
          <input type="text" style={{"fontSize":data.components[index_Component].id_1[1]+"px"}} className="form-control" id="formGroupExampleInput" placeholder="..." value={data.components[index_Component].id_2[0]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_2",0],event.target.value,"change")}}/>
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">متن</label>
          <input type="text" style={{"fontSize":data.components[index_Component].id_3[1]+"px"}} className="form-control" id="formGroupExampleInput2" placeholder="..." value={data.components[index_Component].id_3[0]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_3",0],event.target.value,"change")}}/>
          <label htmlFor="customRange2" className="form-label" style={{"fontSize":"10px"}}>{data.components[index_Component].id_3[1]}</label>
          <input type="range" className="form-range col-12" min="0" max="50" step="1" id="customRange2" value={data.components[index_Component].id_3[1]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_3",1],event.target.value,"change")}}/>
        </div>
        <hr/>
        <div className="col-12 p-0">
        <div className="col-12 mb-2">
            <div className="row">
              <div className="col-5">
              توضیحات
              </div>
              <div className="col-3">
                
              </div>
              <div className="col-2">
                
              </div>
              <div className="col-2">
                حذف
              </div>
            </div>
        </div>
          {data.components[index_Component].id_5.text.map((item, index) =>
          <div key={index} className="col-12 mb-2">
            <div className="row">
            <textarea className="form-control col-9 m-3 rtl text-right" id="exampleFormControlTextarea1" rows="3" onChange={(event)=>{changeValue_Data(["components",index_Component,"id_5",'text',index],event.target.value,"change")}} defaultValue={item}></textarea>
              <input type='button'  className="form-control col-2 btn-danger" value="حذف" onClick={()=>{changeValue_Data(["components",index_Component,"id_5","text"],null,"delete",index)}}/>
            </div>
          </div>
          )}
        </div>
        <div className="col-12 row">
          <div className="mb-3 col-5">
            <label htmlFor="formGroupExampleInput" className="form-label">رنگ توضیحات</label>
            <input type="color" className="form-control form-control-color col-12" id="exampleColorInput" value={data.components[index_Component].id_5.color} title="Choose your color" onChange={(event)=>{changeValue_Data(["components",index_Component,"id_5","color"],event.target.value,"change")}}/>
          </div>
          <div className="mb-3 col-5">
            <label htmlFor="formGroupExampleInput" className="form-label">سایز توضیحات: {data.components[index_Component].id_5.size}</label>
            <input type="range" className="form-range col-12 mt-2" min="0" max="50" step="1" id="customRange2" value={data.components[index_Component].id_5.size} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_5","size"],event.target.value,"change")}}/>
          </div>
          <div className="mb-3 col-2">
            <button className='btn btn-success mt-4' onClick={()=>{changeValue_Data(["components",index_Component,"id_5",'text'],"...متن","add")}}> افزودن</button>
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
                رنگ
              </div>
              <div className="col-2">
                حذف
              </div>
            </div>
        </div>
          {data.components[index_Component].id_6.map((item, index) =>
          <div key={index} className="col-12 mb-2">
            <div className="row">
              <input type='text'  className="form-control col-5" placeholder='..' value={item["name"]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_6",index,"name"],event.target.value,"change")}}/>
              <input type='text'  className="form-control col-3" placeholder='..' value={item["link"]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_6",index,"link"],event.target.value,"change")}}/>
              <input type="color" className="form-control form-control-color col-2" id="exampleColorInput" value={item["color"]} title="Choose your color" onChange={(event)=>{changeValue_Data(["components",index_Component,"id_6",index,"color"],event.target.value,"change")}}/>
              <input type='button'  className="form-control col-2 btn-danger" value="حذف" onClick={()=>{changeValue_Data(["components",index_Component,"id_6"],null,"delete",index)}}/>
            </div>
          </div>
          )}
        </div>

        <hr/>

        <div className="mb-3 col-12">
            <label htmlFor="formGroupExampleInput" className="form-label">رنگ پس زمینه</label>
            <input type="color" className="form-control form-control-color col-6" id="exampleColorInput" value={data.components[index_Component].id_1} title="Choose your color" onChange={(event)=>{changeValue_Data(["components",index_Component,"id_1"],event.target.value,"change")}}/>
        </div>

            <ul className="list-group list-group-horizontal">
                <li className="list-group-item btn" onClick={()=> {open_Modal("list_image",window.scrollY,["components",index_Component,"id_7"])}}>تغییر عکس بنر</li>
                <li className="list-group-item btn" onClick={()=>{changeValue_Data(["components",index_Component,"id_6"],add_item,"add")}}>افزودن دکمه</li>
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