import axios from "axios";
import React, { useContext,useEffect } from 'react';
import { DataContext } from '@/Context/DataContext';
export default function Save_changes({name,re_url}){
    const { data,open_Modal } = useContext(DataContext);
    const send_data = ()=>{
        var title = data.title;
        var components = JSON.stringify(data.components);
          axios.post(re_url+'/save_components', {
            name,
            title,
            components
            })
            .then(function (response) {
              if(response.data.data == 1){
                alert("اطلاعات شما ذخیره شد");
              }
              else if(response.data == 3){
                console.log(response.data);
                alert("اطلاعات شما قبلا ذخیره شده است");
              }
              // console.log(response);
            })
            .catch(function (error) {
              // console.log(error);
            })
      };
    return(
        <>
            <div className="col-md-2 fixed-bottom fixed-rigth mb-1">
                <div className="col-10 row">
                    <a onClick={send_data} className="col btn btn-success btn-circle p-3 m-1">ذخیره</a>
                    <a href="http://127.0.0.1:8000/Admin_panel" className="col btn btn-primary btn-circle p-3 m-1">پنل ادمین</a>
                </div>
            </div>
            <div className="col-12 mt-5">
            <a onClick={()=>{open_Modal("list_component")}} className="col btn btn-success btn-circle p-3 m-1 mt-3">افزودن</a>
            </div>
        </>
    )
}