import React, { useContext,useEffect  } from 'react';
import { DataContext } from '@/Context/DataContext';
import { Modal, Button } from 'react-bootstrap';

export default function single_Slider({ index_Component, name_Component }) {
    const { edit_text,url, token, data, changeValue_Data,open_Context_Menu } = useContext(DataContext);
    const id_Modal = String(name_Component+"_"+index_Component);
    return (
        <>
                <section className="shop-page-section pt-120 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9">
                        <div className="shop-wrapper">
                            <div className="product-filter mb-40">
                                <div className="row align-items-center justify-content-between">
                                    <div className="col-lg-3 col-md-4">
                                        <div className="shop-text">
                                            <p>Showing 1 - 1 of 12  Results</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4">
                                    </div>
                                </div>
                            </div>
                            <div className="row">


                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="product-item mb-40">
                                        <div className="product-img">
                                            <img src="assets/images/shop/product_1.jpg" className="img-fluid" alt=""/>
                                            <a href="#" className="wishlist-btn"><i className="far fa-heart"></i></a>
                                            <div className="product-overlay">
                                                <div className="product-content">
                                                    <a href="#" className="icon-btn cart-btn"><i className="far fa-shopping-cart"></i></a>
                                                    <a href="#" className="icon-btn view-btn"><i className="far fa-search"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-info">
                                            <div className="product-holder">
                                                <h3 className="title"><a href="shop_details.html">Yellow Light Kit</a></h3>
                                                <p className="category"><a href="#">Essentials</a>,<a href="#">Furniture</a></p>
                                            </div>
                                            <span className="price">$124</span>
                                        </div>
                                    </div>
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