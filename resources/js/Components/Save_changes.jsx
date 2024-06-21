import axios from "axios";
import React, { useContext,useEffect } from 'react';
import { DataContext } from '@/Context/DataContext';
export default function Save_changes({name,re_url}){
    const { data,url,open_Modal } = useContext(DataContext);
    const send_data = async ()=>{
        var title = data.title;
        var components = JSON.stringify(data.components);
          try {
            const response = await axios.post(url+'/save_components', {
              name,
              title,
              components
            });
            alert(response.data.message);
        } catch(error) {
            if (error.response && error.response.status === 409) {
                alert(error.response.data.message);
            }
          }
      };
    return(
        <>
            <div className="col-md-2 fixed-bottom fixed-rigth mb-1">
                <div className="col-10 row">
                    <a onClick={send_data} className="col-6 col-md-auto col-lg-10 btn btn-success btn-circle p-3 m-1">ذخیره</a>
                    <a href={url+"/Admin_panel"} className="col-6 col-md-auto col-lg-10 btn btn-primary btn-circle p-3 m-1">پنل ادمین</a>
                </div>
            </div>
            <div className="col-12 mt-5">
            <a onClick={()=>{open_Modal("list_component")}} className="col btn btn-success btn-circle p-3 m-1 mt-3">افزودن</a>
            </div>
        </>
    )
}