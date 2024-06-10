import React, { useContext,useEffect,useState  } from 'react';
import { DataContext } from '@/Context/DataContext';
import { Modal, Button } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function banner_Section({ index_Component, name_Component }) {
    const { edit_text,url, token,data,open_Context_Menu} = useContext(DataContext);
    const id_Modal = String(name_Component+"_"+index_Component);
    return (
        <>
        <section id={data.components[index_Component]?.id} className="hero-area-one"  onContextMenu={(event)=>{open_Context_Menu(event,id_Modal,index_Component)}}>
          <div className="hero-bg"><LazyLoadImage src={data.components[index_Component].id_1} alt=""/></div>
            <div className="custom-container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="hero-content">
                            <mark className="text-center mb-3" suppressContentEditableWarning={true} contentEditable={edit_text} style={{"color": data.components[index_Component].id_2[1],"backgroundColor": data.components[index_Component].id_2[2]}}>{data.components[index_Component].id_2[0]}</mark>
                            <h2 className="text-center mb-3" suppressContentEditableWarning={true} contentEditable={edit_text} style={{"fontSize":data.components[index_Component].id_3[1]+"px","color": data.components[index_Component].id_3[2]}}>{data.components[index_Component].id_3[0]}</h2>

                            <div className="box-wrap">
                                <div className="row" style={{direction:"rtl"}}>
                                {data.components[index_Component].id_4.map((name, index) =>
                                    <div key={index} className="col-lg-6 mt-3">
                                        <div className="box-item wow fadeInUp" data-wow-duration="2s">
                                        <div className="icon ml-4 mr-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={name["color"]} className="bi bi-stars" viewBox="0 0 16 16">
                                          <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
                                        </svg>
                                            </div>
                                            <div className="info">
                                                <h3 className="text-right">{name["title"]}</h3>
                                                <p className="text-right">{name["sub_title"]}</p>
                                            </div>
                                        </div>
                                    </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="hero-img text-right wow fadeInRight" data-wow-duration="1s">
                            <LazyLoadImage src={url+data.components[index_Component].id_5} alt=""/>
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
    const add_item ={
      title: "",
      sub_title: "",
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
          {data.components[index_Component].id_4.map((item, index) =>
          <div key={index} className="col-12 mb-2">
            <div className="row">
              <input type='text'  className="form-control col-5" placeholder='..' value={item["title"]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_4",index,"title"],event.target.value,"change")}}/>
              <input type='text'  className="form-control col-3" placeholder='..' value={item["sub_title"]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_4",index,"sub_title"],event.target.value,"change")}}/>
              <input type="color" className="form-control form-control-color col-2" id="exampleColorInput" value={item["color"]} title="Choose your color" onChange={(event)=>{changeValue_Data(["components",index_Component,"id_4",index,"color"],event.target.value,"change")}}/>
              <input type='button'  className="form-control col-2 btn-danger" value="حذف" onClick={()=>{changeValue_Data(["components",index_Component,"id_4"],null,"delete",index)}}/>
            </div>
          </div>
          )}
        </div>
            <ul className="list-group list-group-horizontal">
                <li className="list-group-item btn" onClick={()=> {open_Modal("list_image",window.scrollY,["components",index_Component,"id_5"])}}>تغییر عکس بنر</li>
                <li className="list-group-item btn" onClick={()=>{changeValue_Data(["components",index_Component,"id_4"],add_item,"add")}}>افزودن دکمه</li>
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