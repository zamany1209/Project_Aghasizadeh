import React, { useContext,useEffect,useState  } from 'react';
import { DataContext } from '@/Context/DataContext';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Swal from 'sweetalert2';
function Constructor(){
    const { data,url,changeValue_Data } = useContext(DataContext);
    const [file, setFile] = useState(null);

    const Delete_File = async (event,name,index)=>{
        event.preventDefault();
        try {
          const result = await Swal.fire({
            title: 'آیا این فایل حذف شود؟',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
          });
    
          if (result.isConfirmed) {
            var file_name = name;
              try {
                const response = await axios.post(url+'/delete_file', {
                    file_name
                });
                await new Promise((resolve) => changeValue_Data(["list_img","Image"],null,"delete", index, resolve));
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "تغییرات اعمال شد",
                  showConfirmButton: false,
                  timer: 1500
                });
            } catch(error) {
                console.log(error);
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "تغییرات اعمال نشد",
                    showConfirmButton: false,
                    timer: 1500
                  });
              }
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            console.log('User did not agree.');
          }
        } catch (error) {
          console.error('Error showing dialog:', error);
        }
      }
    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post(url+'/upload_file', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "فایل باموفقیت ارسال شد",
                showConfirmButton: false,
                timer: 1500
              });
        } catch (error) {
            console.error('Error uploading file', error);
        }
    };
    return (
        <>
        <div className="col-12 d-flex justify-content-center">
            <div className="col-lg-5 col-sm-12">
                <form className='was-validated' onSubmit={handleSubmit}>
                    <div class="mb-3">
                        <input type="file" class="form-control" accept=".jpeg,.png,.gif,.jpg,.svg" aria-label="file example" onChange={handleFileChange}  required/>
                        <div class="invalid-feedback">Example invalid form file feedback</div>
                    </div>

                    <div class="mb-3 text-center">
                        <button class="btn btn-primary" type="submit">ارسال</button>
                    </div>
                </form>
            </div>
        </div>
        <div className="col-12 d-flex justify-content-center">
        <div className="col-11 shadow rounded rounded-4 row">
                {data.list_img?.Image.map((name,index) =>
                    <div key={index} className="col-md-2 col-sm-12 text-center p-4">
                        <LazyLoadImage style={{height:"170px",width:"170px", objectFit:"cover",objectPosition:"center"}} src={url+"/asset/img/"+name} alt=""/>
                        <div className="col-12 text-center d-flex justify-content-center">
                            <input type='button'  className="form-control col-6 btn-danger m-2" value="حذف" onClick={(event)=>{Delete_File(event,name,index)}}/>
                        </div>
                    </div>
                )}
            </div>
        </div>
        </>
    );
}
export default function upload_files() {
    const { active_component } = useContext(DataContext);
    return (
        <>
        {active_component === 'upload_files' && <Constructor />}
        </>
    );
}