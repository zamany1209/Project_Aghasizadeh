import React, { useState,useContext,useEffect  } from 'react';
import { DataContext } from '@/Context/DataContext';
import { Modal, Button } from 'react-bootstrap';

export default function single_Slider({ index_Component, name_Component }) {
    const { edit_text,url, token, data, changeValue_Data,open_Context_Menu } = useContext(DataContext);
    const id_Modal = String(name_Component+"_"+index_Component);
    const [ search,setSearch ] = useState("");
    return (
        <>
        <div className="container pt-70">
        <div className="sidebar-widget-area">
          <div className="widget search-widget">
                  <form action={url+"/search/"+search} method='GET'>
                      <div className="form_group row text-center" action>
                      <button type='submit' className="search_btn col-1" style={{position:"relative"}}>
                          <svg width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                          </svg>
                          </button>
                          <input type="search" className="form_control col-11 text-right rtl" onChange={()=>{setSearch(event.target.value)}} placeholder="متن خود را وارد کنید...."/>
                      </div>
                  </form>
              </div>
            </div>
        </div>
        <section className="shop-page-section pt-70 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10">
                        <div className="shop-wrapper">
                            <div className="product-filter mb-40">
                                <div className="row align-items-center justify-content-between rtl">
                                    <div className="col-lg-3 col-md-4">
                                        <div className="shop-text text-right">
                                            <p>Showing 1 - 1 of 12  Results</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4">
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                            {data.data_search.map((item, index) =>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="product-item mb-40">
                                        <div className="product-img">
                                            <img src={url+item["image"]} className="img-fluid" alt=""/>
                                            <a className="wishlist-btn"></a>
                                            <div className="product-overlay">
                                                <div className="product-content">
                                                    <a href={url+"/page/"+item["url"]} className="icon-btn cart-btn">
                                                    <svg width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                                                    </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-info">
                                            <div className="product-holder">
                                                <h3 className="title text-right"><a href={url+"/page/"+item["url"]}>{item["name"]}</a></h3>
                                                <p className="category text-right">{item["keywords"]}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

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
    </section>
        </>
    );
}
const ModalComponent = ({id_Modal,index_Component}) => {
    const { data, isModalOpen, close_Modal,add_Modal,open_Modal,changeValue_Data } = useContext(DataContext);
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
        {/* <div className='mb-3 col-12'>
          <p>ID: {data.components[index_Component].id}</p>
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">عنوان</label>
          <input type="text" style={{"fontSize":data.components[index_Component].id_1[1]+"px"}} className="form-control" id="formGroupExampleInput" placeholder="..." value={data.components[index_Component].id_1[0]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_1",0],event.target.value,"change")}}/>
          <label htmlFor="customRange2" className="form-label" style={{"fontSize":"10px"}}>{data.components[index_Component].id_1[1]}</label>
          <input type="range" className="form-range col-12" min="0" max="50" step="1" id="customRange2" value={data.components[index_Component].id_1[1]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_1",1],event.target.value,"change")}}/>
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">متن</label>
          <input type="text" style={{"fontSize":data.components[index_Component].id_2[1]+"px"}} className="form-control" id="formGroupExampleInput2" placeholder="..." value={data.components[index_Component].id_2[0]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_2",0],event.target.value,"change")}}/>
          <label htmlFor="customRange2" className="form-label" style={{"fontSize":"10px"}}>{data.components[index_Component].id_2[1]}</label>
          <input type="range" className="form-range col-12" min="0" max="50" step="1" id="customRange2" value={data.components[index_Component].id_2[1]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_2",1],event.target.value,"change")}}/>
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
              <input type='text'  className="form-control col-5" placeholder='..' value={item["name"]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_3",index,"name"],event.target.value,"change")}}/>
              <input type='text'  className="form-control col-3" placeholder='..' value={item["link"]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_3",index,"link"],event.target.value,"change")}}/>
              <input type="color" className="form-control form-control-color col-2" id="exampleColorInput" value={item["color"]} title="Choose your color" onChange={(event)=>{changeValue_Data(["components",index_Component,"id_3",index,"color"],event.target.value,"change")}}/>
              <input type='button'  className="form-control col-2 btn-danger" value="حذف" onClick={(event)=>{changeValue_Data(["components",index_Component,"id_3"],null,"delete",index)}}/>
            </div>
          </div>
          )}
        </div>
            <ul className="list-group list-group-horizontal">
                <li className="list-group-item btn" onClick={()=> {open_Modal("list_image",window.scrollY,["components",index_Component,"id_4"])}}>تغییر عکس پس زمنیه</li>
                <li className="list-group-item btn" onClick={(event)=>{changeValue_Data(["components",index_Component,"id_3"],addItem,"add")}}>افزودن دکمه</li>
            </ul> */}
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