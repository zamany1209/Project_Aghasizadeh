import React, { useContext,useEffect  } from 'react';
import { DataContext } from '@/Context/DataContext';
import { Modal, Button } from 'react-bootstrap';

export default function cta_section({ index_Component, name_Component }) {
    const { edit_text,url, token, data, changeValue_Data,open_Context_Menu } = useContext(DataContext);
    const id_Modal = String(name_Component+"_"+index_Component);
    return (
        <>
        <section id={data.components[index_Component]?.id}  className="cta-area-v3 section_padding pt-110 pb-120" style={{backgroundColor:data.components[index_Component].id_4}} onContextMenu={(event)=>{open_Context_Menu(event,id_Modal,index_Component)}}>
            <div className="container">
                <div className="row align-items-center rtl">
                    <div className="col-lg-10">
                        <div className="section-title section-title-white text-right">
                            <span className="span" style={{color:data.components[index_Component].id_3[1]}}>{data.components[index_Component].id_3[0]}</span>
                            <h2 style={{"fontSize":data.components[index_Component].id_1[2]+"px","color":data.components[index_Component].id_1[1],lineHeight:1.6}}>{data.components[index_Component].id_1[0]}</h2>
                        </div>
                    </div>
                    <div className="col-lg-2 mt-5">
                        <div className="button">
                            <a href={data.components[index_Component].id_2[3]} className="main-btn" style={{"backgroundColor":data.components[index_Component].id_2[2],"color":data.components[index_Component].id_2[1]}}>{data.components[index_Component].id_2[0]}</a>
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
        <div className="mb-3 row">
          <div className="col-8 text-right">
          <label htmlFor="formGroupExampleInput" className="form-label">عنوان</label>
          <input type="text" className="form-control rtl text-right" id="formGroupExampleInput" placeholder="..." value={data.components[index_Component].id_3[0]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_3",0],event.target.value,"change")}}/>
          </div>
          <div className="col-4 text-right">
          <label htmlFor="formGroupExampleInput2">رنگ متن</label>
          <input type="color" className="form-control form-control-color col-12" id="exampleColorInput" value={data.components[index_Component].id_3[1]} title="Choose your color" onChange={(event)=>{changeValue_Data(["components",index_Component,"id_3",1],event.target.value,"change")}}/>
          </div>
        </div>


        <h5 className='text-dark p-2 text-right'>تنظیمات تیتر</h5>
        <div className="mb-3 row">
          <div className="col-9 text-right">
            <label htmlFor="formGroupExampleInput" className="form-label">عنوان </label>
            <input type="text" className="form-control rtl text-right" id="formGroupExampleInput" placeholder="..." value={data.components[index_Component].id_1[0]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_1",0],event.target.value,"change")}}/>
          </div>
          <div className="col-3 text-right">
            <label htmlFor="formGroupExampleInput2">رنگ متن</label>
            <input type="color" className="form-control form-control-color col-12" id="exampleColorInput" value={data.components[index_Component].id_1[1]} title="Choose your color" onChange={(event)=>{changeValue_Data(["components",index_Component,"id_1",1],event.target.value,"change")}}/>
          </div>
          <div className="col-12 text-right">
            <label htmlFor="formGroupExampleInput2">سایز</label>
            <input type="range" className="form-range col-12" min="0" max="60" step="1" id="formGroupExampleInput2" value={data.components[index_Component].id_1[2]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_1",2],event.target.value,"change")}}/>
          </div>
        </div>


        <h5 className='text-dark p-2 text-right'>تنظیمات دکمه</h5>
        <div className="mb-3 row">
          <div className="col-3 text-right">
            <label htmlFor="formGroupExampleInput" className="form-label">عنوان دکمه</label>
            <input type="text" className="form-control rtl text-right" id="formGroupExampleInput" placeholder="..." value={data.components[index_Component].id_2[0]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_2",0],event.target.value,"change")}}/>
          </div>
          <div className="col-3 text-right">
            <label htmlFor="formGroupExampleInput" className="form-label">لینک</label>
            <input type="text" className="form-control rtl text-right" id="formGroupExampleInput" placeholder="..." value={data.components[index_Component].id_2[3]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_2",3],event.target.value,"change")}}/>
          </div>
          <div className="col-3 text-right">
            <label htmlFor="formGroupExampleInput2">رنگ دکمه</label>
            <input type="color" className="form-control form-control-color col-12" id="exampleColorInput" value={data.components[index_Component].id_2[1]} title="Choose your color" onChange={(event)=>{changeValue_Data(["components",index_Component,"id_2",1],event.target.value,"change")}}/>
          </div>
          <div className="col-3 text-right">
            <label htmlFor="formGroupExampleInput2">رنگ متن</label>
            <input type="color" className="form-control form-control-color col-12" id="exampleColorInput" value={data.components[index_Component].id_2[2]} title="Choose your color" onChange={(event)=>{changeValue_Data(["components",index_Component,"id_2",2],event.target.value,"change")}}/>
          </div>
        </div>
        <div className="col-12 text-right">
            <label htmlFor="formGroupExampleInput2">رنگ پس زمینه</label>
            <input type="color" className="form-control form-control-color col-12" id="exampleColorInput" value={data.components[index_Component].id_4} title="Choose your color" onChange={(event)=>{changeValue_Data(["components",index_Component,"id_4"],event.target.value,"change")}}/>
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