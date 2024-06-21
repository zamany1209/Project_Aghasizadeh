import React, { useContext,useEffect,useState  } from 'react';
import { DataContext } from '@/Context/DataContext';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Swal from 'sweetalert2';
function Constructor(){
    const { data,url } = useContext(DataContext);
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post(url+'/change_font', formData, {
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
                    <div className="mb-3">
                        <input type="file" className="form-control" aria-label="file example" accept=".woff2,.woff" onChange={handleFileChange}  required/>
                        <div className="invalid-feedback">Example invalid form file feedback</div>
                    </div>

                    <div className="mb-3 text-center">
                        <button className="btn btn-primary" type="submit">ارسال</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
}
export default function change_font() {
    const { active_component } = useContext(DataContext);
    return (
        <>
        {active_component === 'change_font' && <Constructor />}
        </>
    );
}