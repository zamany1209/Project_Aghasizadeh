import React, { useContext,useEffect,useState  } from 'react';
import { DataContext } from '@/Context/DataContext';
import { LazyLoadImage } from 'react-lazy-load-image-component';
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
            const response = await axios.post(url+'/upload_file', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data);
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
                        <input type="file" class="form-control" aria-label="file example" onChange={handleFileChange}  required/>
                        <div class="invalid-feedback">Example invalid form file feedback</div>
                    </div>

                    <div class="mb-3 text-center">
                        <button class="btn btn-primary" type="submit">Submit form</button>
                    </div>
                </form>
            </div>
        </div>
        <div className="col-12 d-flex justify-content-center">
        <div className="col-11 shadow rounded rounded-4 row">
                {data.list_img?.Image.map((name,index) =>
                    <div key={index} className="col-md-2 col-sm-12 text-center p-4">
                        <LazyLoadImage style={{height:"170px",width:"170px", objectFit:"cover",objectPosition:"center"}} src={url+"/asset/img/"+name} alt=""/>
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