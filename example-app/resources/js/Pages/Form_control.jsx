import { Link, Head } from '@inertiajs/react';
import axios from 'axios';
import React, { useContext,useEffect } from 'react';
import { DataProvider,DataContext } from '@/Context/DataContext';

function Constructor({re_data,re_url,id_form}){
  const { data, setData,changeValue_Data } = useContext(DataContext);
  const data_input = JSON.parse(re_data);
  useEffect(() => {
    setData({data:{list:[]}});
    }, []);
  const send_data = ()=>{
    var data_forms = data.data.list;
    console.log(data_forms);
      axios.post(re_url+'/form_get', {
        data_forms,
        id_form
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        })
  };
  return(
    <>
      <div className="container col-lg-6 mt-5">
        <div className="card bg-white text-black">
          <div className="card-header row">
            <p className='col-9'>ثبت نام</p>
            <img src={re_url+"/asset/img/logo_2.png"} alt="لوگو" className="img-fluid col-3" style={{height:"28px"}}/>
          </div>
          <div className="card-body rtl">
            <form className='text-center'>

                  {data_input.data.map((item,index) =>
                    <div key={index} className="row mb-3">
                        <label htmlFor={"input"+item[0]} className="col-sm-2 col-form-label">{item[0]}</label>
                        <div className="col-sm-10">
                            <input type={item[1]} className="form-control" name={"input"+item[0]} id={"input"+item[0]} onChange={(event)=>{changeValue_Data(["data","list",index],event.target.value,"change");}}/>
                        </div>
                    </div>
                )}
              <button type="button" onClick={send_data} className="col-3 btn btn-primary">ارسال</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default function Forms({ name,re_url ,re_data,id_form }) {
    return (
        <>
        <DataProvider>
        <Head title={name}/>
        <Constructor re_data={re_data} re_url={re_url} id_form={id_form}></Constructor>
        </DataProvider>
        </>
    );
}