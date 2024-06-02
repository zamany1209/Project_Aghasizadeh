import React, { useContext,useEffect,useState  } from 'react';
import { DataContext } from '@/Context/DataContext';
import { contextMenu } from 'react-contexify';
import { Modal, Button } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function single_slider({ index_Component, name_Component }) {
    const { edit_text,movement, token, setMovement,data, setData,state_admin,image_list, setImage_list, open_Modal,add_Modal,function_11 } = useContext(DataContext);
    const function1 = (event) => {
        console.log("drg");
        event.preventDefault();
        contextMenu.show({
          id: 'menu',
          event: event,
          props: {
            function_name:String(name_Component+"_"+index_Component)
          }
        });
      };
      const id_Modal = null;
    return (
        <>
        <section className="hero-area-one"  onContextMenu={function1}>
          <div className="hero-bg"><LazyLoadImage src={data.landing.components[index_Component].id_1} alt=""/></div>
            <div className="custom-container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="hero-content">
                            <mark className="text-center mb-3" suppressContentEditableWarning={true} contentEditable={edit_text} style={{color: data.landing.components[index_Component].id_2[1],backgroundColor: data.landing.components[index_Component].id_2[2]}}>{data.landing.components[index_Component].id_2[0]}</mark>
                            <h2 className="text-center mb-3" suppressContentEditableWarning={true} contentEditable={edit_text} style={{fontSize: data.landing.components[index_Component].id_3[1],color: data.landing.components[index_Component].id_3[2]}}>{data.landing.components[index_Component].id_3[0]}</h2>

                            <div className="box-wrap">
                                <div className="row" style={{direction:"rtl"}}>
                                {data.landing.components[index_Component].id_4.map((name, index) =>
                                    <div key={index} className="col-lg-6 mt-3">
                                        <div className="box-item wow fadeInUp" data-wow-duration="2s">
                                        <div className="icon ml-4 mr-0">
                                                <i className="pe-7s-diamond" style={{color:name["color"]}}></i>
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
                            <LazyLoadImage src={data.landing.components[index_Component].id_5} alt=""/>
                        </div>
                    </div>
                </div>
            </div>

        {token ? (
          <ModalComponent id_Modal={String(name_Component+"_"+index_Component)} index_Component={index_Component}></ModalComponent>
        ):(
          <div></div>
        )}
        </section>
        </>
    );
}
const ModalComponent = ({id_Modal,index_Component}) => {
    const { data, setData, isModalOpen, close_Modal,add_Modal,open_Modal,isSetImage, setImage,changeValue_Data } = useContext(DataContext);
    const add_item ={
      title: "",
      sub_title: "",
      color: "#0574ff"
    };
    useEffect(() => {
        add_Modal(id_Modal);
    }, []);
    useEffect(() => {
      if(isSetImage[0] == id_Modal & isSetImage[1] != null){
        setData((prevData) => {
          const newData = { ...prevData };
          newData.landing.components[index_Component] = {
            ...prevData.landing.components[index_Component],
            id_5: isSetImage[1]
          };
          return newData;
        });
      }
  }, [isSetImage]);
  const addItem_btn = () => {
    setData((prevData) => {
      const newData = { ...data };
      newData.landing.components[index_Component].id_4.push({
        title: "",
        sub_title: "",
        color: "#0574ff"
      });
      return newData;
    });
  };
  
  const deleteItem_Description = (id_btn) => {
    setData((prevData) => {
      const newData = { ...data };
      delete newData.landing.components[index_Component].id_4[id_btn];
      return newData;
    });
  };

  const handleChange_Title_Size = (event) => {
    const newData = { ...data };
    setData((prevData) => {
      newData.landing.components[index_Component].id_1[1] = event.target.value;
      return newData;
    });
  };

  const handleChange_Sub_Title_Size = (event) => {
    const newData = { ...data };
    setData((prevData) => {
      newData.landing.components[index_Component].id_2[1] = event.target.value;
      return newData;
    });
  };

  const handleChange_List_Description = (index,name,event) => {
    const newData = { ...data };
    if(name == "title"){
      setData((prevData) => {
        newData.landing.components[index_Component].id_4[index].title = event.target.value;
        return newData;
      });
    }
    if((name == "sub_title")){
      setData((prevData) => {
        newData.landing.components[index_Component].id_4[index].sub_title = event.target.value;
        return newData;
      });
    }
    if(name == "color"){
      setData((prevData) => {
        newData.landing.components[index_Component].id_4[index].color = event.target.value;
        return newData;
      });
    }
  };

  const handleChange_Title = (event) => {
    const newData = { ...data };
    setData((prevData) => {
      newData.landing.components[index_Component].id_1[0] = event.target.value;
      return newData;
    });
  }
  const handleChange_Sub_Title = (event) => {
    const newData = { ...data };
    setData((prevData) => {
      newData.landing.components[index_Component].id_2[0] = event.target.value;
      return newData;
    });
  }
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
          <input type="text" style={{"fontSize":data.landing.components[index_Component].id_1[1]+"px"}} className="form-control" id="formGroupExampleInput" placeholder="..." value={data.landing.components[index_Component].id_2[0]} onChange={(event)=>{changeValue_Data(["landing","components",index_Component,"id_2",0],event.target.value,"change")}}/>
          <label htmlFor="customRange2" className="form-label" style={{"fontSize":"10px"}}>{data.landing.components[index_Component].id_1[1]}</label>
          <input type="range" className="form-range col-12" min="0" max="50" step="1" id="customRange2" value={data.landing.components[index_Component].id_2[1]} onChange={handleChange_Title_Size}/>
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">متن</label>
          <input type="text" style={{"fontSize":data.landing.components[index_Component].id_2[1]+"px"}} className="form-control" id="formGroupExampleInput2" placeholder="..." value={data.landing.components[index_Component].id_3[0]} onChange={handleChange_Sub_Title}/>
          <label htmlFor="customRange2" className="form-label" style={{"fontSize":"10px"}}>{data.landing.components[index_Component].id_2[1]}</label>
          <input type="range" className="form-range col-12" min="0" max="50" step="1" id="customRange2" value={data.landing.components[index_Component].id_2[1]} onChange={handleChange_Sub_Title_Size}/>
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
          {data.landing.components[index_Component].id_4.map((item, index) =>
          <div key={index} className="col-12 mb-2">
            <div className="row">
              <input type='text'  className="form-control col-5" placeholder='..' value={item["title"]} onChange={(event)=>{changeValue_Data(["landing","components",index_Component,"id_4",index,"title"],event.target.value,"change")}}/>
              <input type='text'  className="form-control col-3" placeholder='..' value={item["sub_title"]} onChange={(event)=>{changeValue_Data(["landing","components",index_Component,"id_4",index,"sub_title"],event.target.value,"change")}}/>
              <input type="color" className="form-control form-control-color col-2" id="exampleColorInput" value={item["color"]} title="Choose your color" onChange={(event)=>{changeValue_Data(["landing","components",index_Component,"id_4",index,"color"],event.target.value,"change")}}/>
              <input type='button'  className="form-control col-2 btn-danger" value="حذف" onClick={()=>{changeValue_Data(["landing","components",index_Component,"id_4"],index,"delete")}}/>
            </div>
          </div>
          )}
        </div>
            <ul className="list-group list-group-horizontal">
                <li className="list-group-item btn" onClick={()=> {setImage([id_Modal,null]);open_Modal("list_image",window.scrollY)}}>تغییر عکس بنر</li>
                <li className="list-group-item btn" onClick={()=>{changeValue_Data(["landing","components",index_Component,"id_4"],add_item,"add")}}>افزودن دکمه</li>
            </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>{close_Modal(id_Modal)}}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{close_Modal(id_Modal)}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    );
  };