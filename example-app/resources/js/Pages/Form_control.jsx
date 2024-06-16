import { Link, Head } from '@inertiajs/react';
import axios from 'axios';
import React, { useContext,useEffect } from 'react';
import { DataProvider,DataContext } from '@/Context/DataContext';
import Swal from 'sweetalert2';

function Constructor({re_data,re_url,id_form,name_url}){
  const { data, setData,changeValue_Data } = useContext(DataContext);
  const data_input = JSON.parse(re_data);
  useEffect(() => {
    const list = Array.from({ length: data_input.data.length }, () => "");
    setData({data:{list}});
    }, []);
    useEffect(() => {
      const forms = document.querySelectorAll('.needs-validation');
      Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
  
      // Clean up the event listeners on unmount
      return () => {
        Array.from(forms).forEach(form => {
          form.removeEventListener('submit', event => {
            if (!form.checkValidity()) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add('was-validated');
          }, false);
        });
      };
    }, []);
    const send_data = async (event)=>{
      event.preventDefault();
      try {
        const result = await Swal.fire({
          title: 'آیا از صحت این اطلاعات اطمینان دارید؟',
          icon: 'question',
          showCancelButton: true,
          confirmButtonText: 'Yes',
          cancelButtonText: 'No',
        });
  
        if (result.isConfirmed) {
          
            try {
              var data_forms = data.data.list;
              const response = await axios.post(re_url+'/form_get', {
                data_forms,
                id_form,
                name_url
              });
              if(response.data.data == 1){
                const list = Array.from({ length: data_input.data.length }, () => "");
                setData({data:{list}});
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "اطلاعات شما با موفقیت ذخیره شد",
                  showConfirmButton: false,
                  timer: 1500
                });
              }
              else if(response.data.data == 3){
                const list = Array.from({ length: data_input.data.length }, () => "");
                setData({data:{list}});
                Swal.fire({
                  position: "top-end",
                  icon: "error",
                  title: "برای پر کردن مجدد فرم لطفا یک دقیقه صبر کنید",
                  showConfirmButton: false,
                  timer: 2500
                });
              }
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
  return(
    <>
      <div className="container col-lg-6 mt-5">
        <div className="card bg-white text-black">
          <div className="card-header row">
            <p className='col-8'>ثبت نام</p>
            <img src={re_url+"/asset/img/logo_2.png"} alt="لوگو" className="img-fluid col-4" />
          </div>
          <div className="card-body rtl">
            <form className="needs-validation" noValidate onSubmit={(event)=>{send_data(event)}}>

                  {data_input.data.map((item,index) =>
                    <div key={index} className="row mb-3">
                        <label htmlFor={"input"+item[0]} className="col-sm-2 col-form-label">{item[0]}</label>
                        <div className="col-sm-10">
                            <input type={item[1]} className="form-control" name={"input"+item[0]} id={"input"+item[0]} value={data.data?.list[index]} onChange={(event)=>{changeValue_Data(["data","list",index],event.target.value,"change");}} required/>
                            <div className="invalid-feedback">
                            لطفا این قسمت را پر کنید
                            </div>
                        </div>
                    </div>
                )}
                <div className='col-12 text-center'>
                  <button type="submit" className="col-3 btn btn-primary">ارسال</button>
                </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default function Forms({ name,re_url ,re_data,id_form,name_url }) {
    return (
        <>
        <DataProvider>
        <Head title={name}/>
        <Constructor re_data={re_data} re_url={re_url} id_form={id_form} name_url={name_url}></Constructor>
        </DataProvider>
        </>
    );
}