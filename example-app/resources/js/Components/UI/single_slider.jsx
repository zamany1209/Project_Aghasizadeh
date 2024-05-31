import React, { useContext,useEffect,useState  } from 'react';
import { DataContext } from '@/Context/DataContext';
import { contextMenu } from 'react-contexify';
import { Modal, Button } from 'react-bootstrap';

export default function single_slider({ index_Component, name_Component }) {
    const { edit_text,movement, setMovement,data, setData,state_admin,image_list, setImage_list, openModal,add_Modal,function_11 } = useContext(DataContext);
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
    <section className="hero-area-two" onContextMenu={function1}>
        <div className="hero-slider-one">
            <div className="single-slider bg-cover" style={{backgroundImage: 'url('+data.landing.components[index_Component].id_4+')'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="hero-content">
                                <span className="span text-right" suppressContentEditableWarning={true} contentEditable={edit_text} style={{fontSize: data.landing.components[index_Component].id_1[1]+"px"}}>{data.landing.components[index_Component].id_1[0]}</span>
                                <h2 className="text-light text-right p-1" suppressContentEditableWarning={true} contentEditable={edit_text} style={{fontSize: data.landing.components[index_Component].id_2[1]+"px"}}>{data.landing.components[index_Component].id_2[0]}</h2>
                                <ul className="button text-right mt-3">
                                {data.landing.components[index_Component].id_3.map((name, index) =>
                                    <li className='m-1' key={index}><a href={name["link"]} className="main-btn" style={{backgroundColor: name["color"]}} suppressContentEditableWarning={true} contentEditable={edit_text}>{name["name"]}</a></li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ModalComponent id_Modal={String(name_Component+"_"+index_Component)} index_Component={index_Component}></ModalComponent>
    </section>
        </>
    );
}
const ModalComponent = ({id_Modal,index_Component}) => {
    const { data, setData, isModalOpen, closeModal,add_Modal,openModal,isSetImage, setImage } = useContext(DataContext);
    useEffect(() => {
        add_Modal(id_Modal);
    }, []);
    useEffect(() => {
      if(isSetImage[0] == id_Modal & isSetImage[1] != null){
        setData((prevData) => {
          const newData = { ...prevData };
          newData.landing.components[index_Component] = {
            ...prevData.landing.components[1],
            id_4: isSetImage[1]
          };
          return newData;
        });
      }
  }, [isSetImage]);
  const addItem_btn = () => {
    setData((prevData) => {
      const newData = { ...data };
      newData.landing.components[index_Component].id_3.push({
        name: "",
        color: "#0574ff",
        link: "#"
      });
      return newData;
    });
  };
  
  const deleteItem_btn = (id_btn) => {
    setData((prevData) => {
      const newData = { ...data };
      delete newData.landing.components[index_Component].id_3[id_btn];
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

  const handleChange_List_Btn = (index,name,event) => {
    const newData = { ...data };
    if(name == "name"){
      setData((prevData) => {
        newData.landing.components[index_Component].id_3[index].name = event.target.value;
        return newData;
      });
    }
    if((name == "link")){
      setData((prevData) => {
        newData.landing.components[index_Component].id_3[index].link = event.target.value;
        return newData;
      });
    }
    if(name == "color"){
      setData((prevData) => {
        newData.landing.components[index_Component].id_3[index].color = event.target.value;
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
    return (
        <>
      <Modal show={isModalOpen[id_Modal]} onHide={()=>{closeModal(id_Modal)}} scrollable centered size="md">
        <Modal.Header closeButton>
          <Modal.Title>تنظیمات</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="mb-3">
          <label for="formGroupExampleInput" className="form-label">عنوان</label>
          <input type="text" style={{"fontSize":data.landing.components[index_Component].id_1[1]+"px"}} className="form-control" id="formGroupExampleInput" placeholder="..." value={data.landing.components[index_Component].id_1[0]} onChange={handleChange_Title}/>
          <label for="customRange2" className="form-label" style={{"fontSize":"10px"}}>{data.landing.components[index_Component].id_1[1]}</label>
          <input type="range" className="form-range col-12" min="0" max="50" step="1" id="customRange2" value={data.landing.components[index_Component].id_1[1]} onChange={handleChange_Title_Size}/>
        </div>
        <div className="mb-3">
          <label for="formGroupExampleInput2" className="form-label">متن</label>
          <input type="text" style={{"fontSize":data.landing.components[index_Component].id_2[1]+"px"}} className="form-control" id="formGroupExampleInput2" placeholder="..." value={data.landing.components[index_Component].id_2[0]} onChange={handleChange_Sub_Title}/>
          <label for="customRange2" className="form-label" style={{"fontSize":"10px"}}>{data.landing.components[index_Component].id_2[1]}</label>
          <input type="range" className="form-range col-12" min="0" max="50" step="1" id="customRange2" value={data.landing.components[index_Component].id_2[1]} onChange={handleChange_Sub_Title_Size}/>
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
          {data.landing.components[index_Component].id_3.map((item, index) =>
          <div key={index} className="col-12 mb-2">
            <div className="row">
              <input type='text'  className="form-control col-5" placeholder='..' value={item["name"]} onChange={(event) => handleChange_List_Btn(index,"name",event)}/>
              <input type='text'  className="form-control col-3" placeholder='..' value={item["link"]} onChange={(event) => handleChange_List_Btn(index,"link",event)}/>
              <input type="color" className="form-control form-control-color col-2" id="exampleColorInput" value={item["color"]} title="Choose your color" onChange={(event) => handleChange_List_Btn(index,"color",event)}/>
              <input type='button'  className="form-control col-2 btn-danger" value="حذف" onClick={()=> {deleteItem_btn(index)}}/>
            </div>
          </div>
          )}
        </div>
            <ul className="list-group list-group-horizontal">
                <li className="list-group-item btn" onClick={()=> {setImage([id_Modal,null]);openModal("list_image")}}>تغییر عکس پس زمنیه</li>
                <li className="list-group-item btn" onClick={addItem_btn}>افزودن دکمه</li>
            </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>{closeModal(id_Modal)}}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{closeModal(id_Modal)}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    );
  };