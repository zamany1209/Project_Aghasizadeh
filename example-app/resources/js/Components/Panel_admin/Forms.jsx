import React, { useContext,useEffect,useState  } from 'react';
import { DataContext } from '@/Context/DataContext';
import { Modal, Button,Dropdown  } from 'react-bootstrap';
import moment from 'moment-jalaali';
import Swal from 'sweetalert2';
import { saveAs } from 'file-saver';
import ExcelJS from 'exceljs';

export default function Forms() {
    const { active_component,url } = useContext(DataContext);
    const id_Modal = "add_url";
    return(
        <>
            {active_component == 'Froms' && <Constructor id_Modal={id_Modal} />}
            <ModalComponentForm id_Modal={id_Modal}></ModalComponentForm>
            <ModalComponentDetails_Form id_Modal={"ModalComponentDetails_Form"}></ModalComponentDetails_Form>
            <ModalComponentCreate_Form id_Modal={"ModalComponentCreate_Form"}></ModalComponentCreate_Form>
            <ModalComponentList_Form id_Modal={"ModalComponentList_Form"}></ModalComponentList_Form>
        </>
    );
}
const Constructor =({id_Modal}) =>{
    const { data, url,open_Modal,add_Modal,changeValue_Data} = useContext(DataContext);
      const delete_form = async (index,id,event)=>{
        event.preventDefault();
        try {
            const response = await axios.post(url+'/delete_form', {
                id
            });
            changeValue_Data(["list_forms"],null,"delete", index);
        } catch(error) {
            if (error.response && error.response.status === 409) {
                alert(error.response.data.message);
            }
          }
      }
      const access_form = async (id,index,event) => {
        event.preventDefault();
        var data_checked = event.target.checked;
        try {
            const response = await axios.post(url+'/access_form', {
                id,data_checked
            });
            changeValue_Data(["list_forms",index,"status"],data_checked,"change");
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "تغییرات اعمال شد",
              showConfirmButton: false,
              timer: 1500
            });
        } catch(error) {
            if (error.response && error.response.status === 409) {
                alert(error.response.data.message);
            }
          }
      }

    return (
        <>
        <div className="container-fluid m-lg-3">

        <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">فرم ها</h1>
              <button type="button" onClick={()=>{open_Modal("ModalComponentCreate_Form",window.scrollY)}} className="btn btn-sm btn-success shadow-sm m-2">افزودن فرم</button>
          </div>
        <ul className="container list-group shadow p-0">
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-2 text-center">
                        نام
                        </div>
                        <div className="col-1 text-center text-truncate">
                        نمایش
                        </div>
                        <div className="col-3 text-center">
                        لیست
                        </div>
                        <div className="col-3 text-center text-truncate">
                        اطلاعات بیشتر
                        </div>
                        <div className="col-3 text-center text-truncate">
                        حذف
                        </div>
                    </div>
                </li>
            {data.list_forms.map((item,index) =>
                <li key={index} className="list-group-item">
                    <div className="row">
                        <div className="col-2 text-center text-truncate">
                        <a className='mt-2' href={url+"/form/"+item["url"]}>{item["name"]}</a>
                        </div>
                        <div className="col-1 text-center d-flex justify-content-center">
                        <input type="checkbox" className="form-check-input ml-1 mt-3" checked={item["status"]} id={"exampleCheck"+index} onChange={(event)=>{access_form(item["id"],index,event)}}/>
                        </div>
                        <div className="col-3 text-center">
                        <button onClick={(event)=>{open_Modal("ModalComponentList_Form",window.scrollY,index)}} className="btn col-auto col-sm-12 btn-primary mt-1" style={{"fontSize":"0.7rem"}}>لیست</button>
                        </div>
                        <div className="col-3 text-center">
                        <button onClick={(event)=>{open_Modal("ModalComponentDetails_Form",window.scrollY,index)}} className="btn col-auto col-sm-12 btn-primary mt-1" style={{"fontSize":"0.7rem"}}>نمایش</button>
                        </div>
                        <div className="col-3 text-center">
                            <button onClick={(event)=>{delete_form(index,item["id"],event)}} className="btn col-auto col-sm-12 btn-danger mt-1" style={{"fontSize":"0.7rem"}}>حذف</button>
                        </div>
                    </div>
                </li>
            )}
        </ul>
          </div>
        </>
    );
}
const ModalComponentForm = ({id_Modal}) => {
    const { data,url, isModalOpen, close_Modal,add_Modal,open_Modal,changeValue_Data } = useContext(DataContext);
    const [url_page, setUrl_page] = useState("");
    useEffect(() => {
        add_Modal(id_Modal);
    }, []);

    const add_url = async (e) => {
        e.preventDefault();
        const new_data_name = {"access": 1, "url": url_page, "visit": 0};
        try {
            const response = await axios.post(url+'/create_page', {
                url_page
            });
            alert(response.data.message);
            console.log(response);
            await new Promise((resolve) => changeValue_Data(["list_pages"],new_data_name,"add", null, resolve));
            setUrl_page("");
        } catch(error) {
            console.log(error);
            if (error.response && error.response.status === 409) {
                alert(error.response.data.message);
            }
            setUrl_page("");
          }
    };
    return (
        <>
      <Modal show={isModalOpen[id_Modal]?.status} onHide={()=>{close_Modal(id_Modal)}} scrollable centered size="md">
        <Modal.Header>
          <Modal.Title>لطفا آدرس خود را وارد کنید</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <input type="text" className='col-12 form-control' value={url_page} onChange={(event)=>{setUrl_page(event.target.value)}}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>{close_Modal(id_Modal)}}>
            خروج
          </Button>
          <Button variant="success" onClick={(event)=>{add_url(event)}}>
            درج
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    );
  };
const ModalComponentDetails_Form = ({id_Modal}) => {
  const { data,url, isModalOpen, close_Modal,add_Modal,open_Modal,changeValue_Data } = useContext(DataContext);
  const [name, setname] = useState(null);
  const [title, settitle] = useState(null);
  const [description, setdescription] = useState(null);
  const [JsonData, setJsonData] = useState([]);
  const Edit_form = async (event)=>{
      event.preventDefault();
      try {
        const result = await Swal.fire({
          title: 'آیا اطلاعات این فرم ویرایش شود؟',
          icon: 'question',
          showCancelButton: true,
          confirmButtonText: 'Yes',
          cancelButtonText: 'No',
        });
  
        if (result.isConfirmed) {
          var id = data.list_forms[isModalOpen[id_Modal]?.value]?.id;
          const json = {};
          json["data"] = JsonData;
          var json_data = JSON.stringify(json);
          
            try {
              const response = await axios.post(url+'/form_get', {
                  id,name,title,description,json_data
              });
              await new Promise((resolve) => changeValue_Data(["list_forms",isModalOpen[id_Modal]?.value,"name"],name,"change", null, resolve));
              await new Promise((resolve) => changeValue_Data(["list_forms",isModalOpen[id_Modal]?.value,"title"],title,"change", null, resolve));
              await new Promise((resolve) => changeValue_Data(["list_forms",isModalOpen[id_Modal]?.value,"description"],description,"change", null, resolve));
              await new Promise((resolve) => changeValue_Data(["list_forms",isModalOpen[id_Modal]?.value,"json_data"],json_data,"change", null, resolve));
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "تغییرات اعمال شد",
                showConfirmButton: false,
                timer: 1500
              });
              close_Modal(id_Modal);
          } catch(error) {
              if (error.response && error.response.status === 409) {
                  alert(error.response.data.message);
              }
            }
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          console.log('User did not agree.');
        }
      } catch (error) {
        console.error('Error showing dialog:', error);
      }
    }
  useEffect(() => {
      add_Modal(id_Modal);
  }, []);
  if(isModalOpen[id_Modal]?.status){
    var json_form = JSON.parse(data.list_forms[isModalOpen[id_Modal]?.value]?.json_data);
  }
  const options = [
    { value: 'email', label: 'Email', data: 'Data for Option 1' },
    { value: 'text', label: 'Text', data: 'Data for Option 2' },
    { value: 'number', label: 'Number', data: 'Data for Option 3' },
  ];
  const updateJson_data_type = (index, newValue) => {
    setJsonData(prevJsonData => {
      const newArray = [...prevJsonData];
      newArray[index] = [newArray[index][0],newValue];
      return newArray;
    });
  };
  const updateJson_data_name = (index, newValue) => {
    setJsonData(prevJsonData => {
      const newArray = [...prevJsonData];
      newArray[index] = [newValue,newArray[index][1]];
      return newArray;
    });
  };
  const addJson_data_name = (index, newValue) => {
    var data = ['value','text'];
    setJsonData(prevJsonData => {
      const newArray = [...prevJsonData,data];
      return newArray;
    });
  };
  const deleteJson_data_name = (index) => {
    setJsonData(prevJsonData => prevJsonData.filter((item, idx) => idx !== index));
  };
  useEffect(() => {
      setname(data.list_forms[isModalOpen[id_Modal]?.value]?.name);
      settitle(data.list_forms[isModalOpen[id_Modal]?.value]?.title);
      setdescription(data.list_forms[isModalOpen[id_Modal]?.value]?.description);
      setJsonData(json_form?.data);
  }, [isModalOpen[id_Modal]]);
  return (
      <>
    <Modal show={isModalOpen[id_Modal]?.status} onHide={()=>{close_Modal(id_Modal)}} scrollable centered size="md">
      <Modal.Header>
        <Modal.Title>ویرایش فرم</Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <div className='mb-3'>
          <p className=''>URL:{data.list_forms[isModalOpen[id_Modal]?.value]?.url}</p>
          </div>
          <div className="mb-3 text-right">
          <label htmlFor="formGroupExampleInput" className="form-label">نام</label>
              <input type="text" className='col-12 form-control text-right' value={name} onChange={(event)=>{setname(event.target.value)}}/>
          </div>
          <div className="mb-3 text-right">
          <label htmlFor="formGroupExampleInput" className="form-label">عنوان صفحه</label>
              <input type="text" className='col-12 form-control text-right' value={title} onChange={(event)=>{settitle(event.target.value)}}/>
          </div>
          <div className="mb-3 text-right">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">توضیحات</label>
          <textarea className="form-control col-12 rtl text-right" id="exampleFormControlTextarea1" rows="3" onChange={(event)=>{setdescription(event.target.value)}} defaultValue={description}></textarea>
          </div>
          <p className='rtl text-right'>:فیلد های فرم</p>
          <ul className="list-group list-group-horizontal">
              <li className="list-group-item btn col-4">نوع</li>
              <li className="list-group-item btn col-5">نام</li>
              <li className="list-group-item btn col-3">حذف</li>
          </ul>
          {JsonData?.map((item,index) =>
              <ul key={index} className="list-group list-group-horizontal">
                <li className="list-group-item btn col-4" >
                  <Dropdown onSelect={(event)=>{updateJson_data_type(index,event)}}>
                    <Dropdown.Toggle className='col-12' id={"dropdown-basic"+index}>
                      {item[1]}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      {options.map(option => (
                        <Dropdown.Item key={option.value} eventKey={option.value}>
                          {option.label}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                <li className="list-group-item btn col-5" ><input type='text'  className="form-control col-12 p-0 m-0" style={{"border":"0px"}} placeholder='..' value={item[0]} onChange={(event)=>{updateJson_data_name(index,event.target.value)}}/></li>
                <li className="list-group-item btn col-3" ><input type='button'  className="form-control col-12 btn-danger" value="حذف" onClick={()=>{deleteJson_data_name(index)}}/></li>
            </ul>
          )}
          <button className='btn col-12 btn-success mb-3 mt-1' onClick={addJson_data_name}>افزودن</button>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={()=>{close_Modal(id_Modal)}}>
          خروج
        </Button>
        <Button variant="success" onClick={(event)=>{Edit_form(event)}}>
          ذخیره
        </Button>
      </Modal.Footer>
    </Modal>
    </>
  );
};
const ModalComponentCreate_Form = ({id_Modal}) => {
  const { data,url, isModalOpen, close_Modal,add_Modal,open_Modal,changeValue_Data } = useContext(DataContext);
  const [name, setname] = useState(null);
  const [title, settitle] = useState(null);
  const [description, setdescription] = useState(null);
  const [JsonData, setJsonData] = useState([]);
  const Edit_form = async (event)=>{
      event.preventDefault();
      try {
        const result = await Swal.fire({
          title: 'این فرم ایجاد شود؟',
          icon: 'question',
          showCancelButton: true,
          confirmButtonText: 'Yes',
          cancelButtonText: 'No',
        });
  
        if (result.isConfirmed) {
          const json = {};
          json["data"] = JsonData;
          var json_data = JSON.stringify(json);
            try {
              const response = await axios.post(url+'/create_form', {
                  name,title,description,json_data
              });
              const res_data = {};
              res_data["id"] = response.data.id;
              res_data["url"] = response.data.url;
              res_data["name"] = name;
              res_data["title"] = title;
              res_data["description"] = description;
              res_data["json_data"] = json_data;
              res_data["duplicate"] = true;
              res_data["status"] = true;
              await new Promise((resolve) => changeValue_Data(["list_forms"],res_data,"add", null, resolve));
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "تغییرات اعمال شد",
                showConfirmButton: false,
                timer: 1500
              });
              close_Modal(id_Modal);
          } catch(error) {
              if (error.response && error.response.status === 409) {
                  alert(error.response.data.message);
              }
            }
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          console.log('User did not agree.');
        }
      } catch (error) {
        console.error('Error showing dialog:', error);
      }
    }
  useEffect(() => {
      add_Modal(id_Modal);
  }, []);
  const options = [
    { value: 'email', label: 'Email', data: 'Data for Option 1' },
    { value: 'text', label: 'Text', data: 'Data for Option 2' },
    { value: 'number', label: 'Number', data: 'Data for Option 3' },
  ];
  const updateJson_data_type = (index, newValue) => {
    setJsonData(prevJsonData => {
      const newArray = [...prevJsonData];
      newArray[index] = [newArray[index][0],newValue];
      return newArray;
    });
  };
  const updateJson_data_name = (index, newValue) => {
    setJsonData(prevJsonData => {
      const newArray = [...prevJsonData];
      newArray[index] = [newValue,newArray[index][1]];
      return newArray;
    });
  };
  const addJson_data_name = (index, newValue) => {
    var data = ['value','text'];
    setJsonData(prevJsonData => {
      const newArray = [...prevJsonData,data];
      return newArray;
    });
  };
  const deleteJson_data_name = (index) => {
    setJsonData(prevJsonData => prevJsonData.filter((item, idx) => idx !== index));
  };
  return (
      <>
    <Modal show={isModalOpen[id_Modal]?.status} onHide={()=>{close_Modal(id_Modal)}} scrollable centered size="md">
      <Modal.Header>
        <Modal.Title>ایجاد فرم</Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <div className='mb-3'>
          <p className=''>URL:{data.list_forms[isModalOpen[id_Modal]?.value]?.url}</p>
          </div>
          <div className="mb-3 text-right">
          <label htmlFor="formGroupExampleInput" className="form-label">نام</label>
              <input type="text" className='col-12 form-control text-right' value={name} onChange={(event)=>{setname(event.target.value)}}/>
          </div>
          <div className="mb-3 text-right">
          <label htmlFor="formGroupExampleInput" className="form-label">عنوان صفحه</label>
              <input type="text" className='col-12 form-control text-right' value={title} onChange={(event)=>{settitle(event.target.value)}}/>
          </div>
          <div className="mb-3 text-right">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">توضیحات</label>
          <textarea className="form-control col-12 rtl text-right" id="exampleFormControlTextarea1" rows="3" onChange={(event)=>{setdescription(event.target.value)}} defaultValue={description}></textarea>
          </div>
          <p className='rtl text-right'>:فیلد های فرم</p>
          <ul className="list-group list-group-horizontal">
              <li className="list-group-item btn col-4">نوع</li>
              <li className="list-group-item btn col-5">نام</li>
              <li className="list-group-item btn col-3">حذف</li>
          </ul>
          {JsonData?.map((item,index) =>
              <ul key={index} className="list-group list-group-horizontal">
                <li className="list-group-item btn col-4" >
                  <Dropdown onSelect={(event)=>{updateJson_data_type(index,event)}}>
                    <Dropdown.Toggle className='col-12' id={"dropdown-basic"+index}>
                      {item[1]}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      {options.map(option => (
                        <Dropdown.Item key={option.value} eventKey={option.value}>
                          {option.label}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                <li className="list-group-item btn col-5" ><input type='text'  className="form-control col-12 p-0 m-0" style={{"border":"0px"}} placeholder='..' value={item[0]} onChange={(event)=>{updateJson_data_name(index,event.target.value)}}/></li>
                <li className="list-group-item btn col-3" ><input type='button'  className="form-control col-12 btn-danger" value="حذف" onClick={()=>{deleteJson_data_name(index)}}/></li>
            </ul>
          )}
          <button className='btn col-12 btn-success mb-3 mt-1' onClick={addJson_data_name}>افزودن</button>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={()=>{close_Modal(id_Modal)}}>
          خروج
        </Button>
        <Button variant="success" onClick={(event)=>{Edit_form(event)}}>
          ذخیره
        </Button>
      </Modal.Footer>
    </Modal>
    </>
  );
};
const ModalComponentList_Form = ({id_Modal}) => {
  const { data,url, isModalOpen, close_Modal,add_Modal,open_Modal,changeValue_Data } = useContext(DataContext);
  const [List, setList] = useState([]);
  const [ListName, setListName] = useState([]);
  const List_form = async ()=>{
    var id = data.list_forms[isModalOpen[id_Modal]?.value].id;
    try {
      const response = await axios.post(url+'/list_form', {
          id
      });
      setList(response.data.list_form);
  } catch(error) {
      if (error.response && error.response.status === 409) {
          alert(error.response.data.message);
      }
    }
  }
  useEffect(() => {
      add_Modal(id_Modal);
  }, []);
  useEffect(() => {
    setListName(json_name?.data);
}, [isModalOpen[id_Modal]?.status]);

  if(isModalOpen[id_Modal]?.status){
    var json_name = JSON.parse(data.list_forms[isModalOpen[id_Modal]?.value].json_data);
    List_form();
  }

  // یافتن طولانی‌ترین لیست
  const maxListLength = Math.max(...List.map(item => JSON.parse(item.json_data).length));

  // تابع برای تبدیل داده‌ها به فایل Excel
  const exportToExcel = () => {
    // ساخت ورک بوک جدید
    const workbook = new ExcelJS.Workbook();
    
    // افزودن شیت جدید به ورک بوک
    const worksheet = workbook.addWorksheet('Sheet1');
  
    // تنظیم ستون‌ها بر اساس داده‌ها
    const columns = [
      { header: '#', key: '#' },
      { header: 'IP', key: 'IP' },
      { header: 'Date', key: 'Date' },
    ];
  
    ListName.forEach((name, index) => {
      columns.push({ header: name[0], key: name[0] });
    });
  
    worksheet.columns = columns;
  
    // تبدیل داده‌ها به فرمت مناسب برای اکسل
    const worksheetData = List.map((item, index) => {
      const listArray = JSON.parse(item.json_data);
      const rowData = {
        "#": index + 1,
        IP: item.ip,
        Date: moment(item.created_at, 'YYYY-MM-DD HH:mm:ss').format('jYYYY/jMM/jDD HH:mm:ss'),
      };
      
      listArray.forEach((val, idx) => {
        rowData[ListName[idx][0]] = val;
      });
  
      return rowData;
    });
  
    // افزودن داده‌ها به شیت
    worksheet.addRows(worksheetData);
  
    // تبدیل ورک بوک به باینری و ذخیره فایل
    workbook.xlsx.writeBuffer().then((buffer) => {
      const blob = new Blob([buffer], { type: 'application/octet-stream' });
      saveAs(blob, 'data.xlsx');
    });
  };
  return (
      <>
    <Modal show={isModalOpen[id_Modal]?.status} onHide={()=>{close_Modal(id_Modal)}} scrollable centered size="md">
      <Modal.Header>
        <Modal.Title>{data.list_forms[isModalOpen[id_Modal]?.value]?.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div className='table-responsive'>
      <table className='table table-bordered' border="1">
        <thead>
          <tr className='d-flex'>
            <th className='col-1 responsive-text'>#</th>
            <th className='col-4 responsive-text'>IP</th>
            <th className='col-4 responsive-text'>Date</th>
            {ListName?.map((item, index) =>
              <th className='col-4 responsive-text' key={index}>{item[0]}</th>
            )}
          </tr>
        </thead>
        <tbody>
          {List.map((item, index) => {
            const listArray = JSON.parse(item.json_data);
            return (
              <tr className='d-flex' key={index}>
                <td className='col-1 responsive-text'>{index+1}</td>
                <td className='col-4 responsive-text'>{item.ip}</td>
                <td className='col-4 responsive-text'>{moment(item.created_at, 'YYYY-MM-DD HH:mm:ss').format('jYYYY/jMM/jDD HH:mm:ss')}</td>
                {Array.from({ length: maxListLength }, (_, colIndex) => (
                  <td className='col-4 responsive-text' key={colIndex}>{listArray[colIndex] || ''}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    <button onClick={exportToExcel} className='btn btn-success m-2'>اکسل</button>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={()=>{close_Modal(id_Modal)}}>
          خروج
        </Button>
        <Button variant="success" onClick={(event)=>{Edit_form(event)}}>
          ذخیره
        </Button>
      </Modal.Footer>
    </Modal>
    </>
  );
};
  