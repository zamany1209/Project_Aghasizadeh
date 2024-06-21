import React, { useContext,useState,useEffect } from 'react';
import { DataContext } from '@/Context/DataContext';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Modal, Button } from 'react-bootstrap';

export default function Header({ index_Component, name_Component }) {
    const { edit_text,url, token,data,open_Context_Menu} = useContext(DataContext);
    const id_Modal = String(name_Component+"_"+index_Component);
    const width = window.innerWidth
    var isActive = false;
    const [menu, setmenu] = useState(false);
    if(width <= 1119){
        isActive = true;
    }
    const navbarToggler = ()=>{
        if(menu == true){
            setmenu(false);
        }
        else if(menu == false){
            setmenu(true);
        }
    }
    const closeIcon = ()=>{
        setmenu(false);
    }
    return (
        <>
    <header id={data.components[index_Component]?.id} className="header-area-two transparent-header mb-2" onContextMenu={(event)=>{open_Context_Menu(event,id_Modal,index_Component)}}>
            <div className={`header-navigation ${isActive ? 'breakpoint-on' : ''}`} style={{"backgroundColor":data.components[index_Component].id_4[0]}}>
                <div className="custom-container">
                    <div className="row align-items-center">
                        <div className="col-lg-2 col-4">
                            <div className="brand-logo">
                                <a href="#"><LazyLoadImage src={url+data.components[index_Component].id_2} className="img-fluid" alt=""/></a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-8">
                            <div className={`nav-menu ${menu ? 'menu-on' : ''}`}>
                                {/* <!-- Navbar Close Icon --> */}
                                <div onClick={closeIcon} className="navbar-close">
                                    <div className="cross-wrap"><span className="top"></span><span className="bottom"></span></div>
                                </div>
                                <nav className="main-menu">
                                    <ul className='text-center'>
                                    {data.components[index_Component].id_1.map((list_header,index) =>
                                            <li key={index} className="menu-item"><a style={{"color":data.components[index_Component].id_4[1]}} href={list_header[1]}>{list_header[0]}</a></li>
                                        )}
                                    </ul>
                                </nav>
                            </div>
                            {/* <!-- Navbar Toggler --> */}
                            <div onClick={navbarToggler} className={`navbar-toggler float-right ${menu ? 'active' : ''}`}>
                                <span style={{"backgroundColor":data.components[index_Component].id_4[1]}}></span><span style={{"backgroundColor":data.components[index_Component].id_4[1]}}></span><span style={{"backgroundColor":data.components[index_Component].id_4[1]}}></span>
                            </div>
                        </div>
                        <div className="col-lg-3">
                        <div className="header-right-nav">
                                <div className="get_btn_info">

                                    <i className="mt-2" style={{"color":data.components[index_Component].id_4[1]}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                                        </svg>
                                    </i>
                                    <h5 style={{"color":data.components[index_Component].id_4[1]}}>{data.components[index_Component].id_3[0]}</h5>
                                    <a href={data.components[index_Component].id_3[2]} style={{"color":data.components[index_Component].id_4[1]}}>{data.components[index_Component].id_3[1]}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {token ? (
          <ModalComponent id_Modal={id_Modal} index_Component={index_Component}></ModalComponent>
        ):(
          <div></div>
        )}
        </header>
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
        <div className='mb-3 col-12'>
          <p>ID: {data.components[index_Component].id}</p>
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">رنگ متن ها</label>
          <input type="color" className="form-control form-control-color col-2" id="formGroupExampleInput" value={data.components[index_Component].id_4[1]} title="Choose your color" onChange={(event)=>{changeValue_Data(["components",index_Component,"id_4",1],event.target.value,"change")}}/>
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">رنگ پس زمینه</label>
          <input type="color" className="form-control form-control-color col-2" id="formGroupExampleInput2" value={data.components[index_Component].id_4[0]} title="Choose your color" onChange={(event)=>{changeValue_Data(["components",index_Component,"id_4",0],event.target.value,"change")}}/>
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput3" className="form-label">عنوان</label>
          <input type="text" className="form-control" id="formGroupExampleInput3" placeholder="..." value={data.components[index_Component].id_3[0]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_3",0],event.target.value,"change")}}/>
          <label htmlFor="formGroupExampleInput4" className="form-label">عنوان لینک</label>
          <input type="text" className="form-control" id="formGroupExampleInput4" placeholder="..." value={data.components[index_Component].id_3[1]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_3",1],event.target.value,"change")}}/>
          <label htmlFor="formGroupExampleInput5" className="form-label">لینک</label>
          <input type="text" className="form-control" id="formGroupExampleInput5" placeholder="..." value={data.components[index_Component].id_3[2]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_3",2],event.target.value,"change")}}/>
        </div>
        <div className="col-12 p-0">
        <div className="col-12 mb-2">
            <div className="row">
              <div className="col-5">
                عنوان
              </div>
              <div className="col-5">
                لینک
              </div>
              <div className="col-2">
                حذف
              </div>
            </div>
        </div>
          {data.components[index_Component].id_1.map((item, index) =>
          <div key={index} className="col-12 mb-2">
            <div className="row">
              <input type='text'  className="form-control col-5" placeholder='..' value={item["0"]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_1",index,0],event.target.value,"change")}}/>
              <input type='text'  className="form-control col-5" placeholder='..' value={item["1"]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_1",index,1],event.target.value,"change")}}/>
              <input type='button'  className="form-control col-2 btn-danger" value="حذف" onClick={()=>{changeValue_Data(["components",index_Component,"id_1"],null,"delete",index)}}/>
            </div>
          </div>
          )}
        </div>
            <ul className="list-group list-group-horizontal">
                <li className="list-group-item btn" onClick={()=> {open_Modal("list_image",window.scrollY,["components",index_Component,"id_2"])}}>تغییر لوگو</li>
                <li className="list-group-item btn" onClick={()=>{changeValue_Data(["components",index_Component,"id_1"],add_item,"add")}}>افزودن دکمه</li>
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