import { Modal, Button } from 'react-bootstrap';
import React, { useContext,useEffect } from 'react';
import { DataContext } from '@/Context/DataContext';
import { LazyLoadImage } from 'react-lazy-load-image-component';
export default function Management_Modal(){
    const { isModalOpen, close_Modal,add_Modal,open_Modal,image_list,isSetImage, setImage } = useContext(DataContext);
    const show_list_image = "list_image";
    useEffect(() => {
      if (isModalOpen[show_list_image]) {
        // Disable body scroll when modal is open
        document.body.style.overflow = 'hidden';
      } else {
        // Re-enable body scroll when modal is closed
        document.body.style.overflow = '';
      }
    }, [isModalOpen[show_list_image]]);
    return(
        <>
      <Modal show={isModalOpen[show_list_image]?.status} onHide={()=>{close_Modal(show_list_image)}} centered size="xl">
        <Modal.Header closeButton>
          <Modal.Title>تنظیمات</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="row">
                {image_list?.Image.map((name,index) =>
                    <div key={index} className="col-2">
                        <LazyLoadImage style={{height:"170px",width:"170px", objectFit:"cover",objectPosition:"center"}} src={"http://127.0.0.1:8000/asset/img/"+name} alt="" onClick={()=>{setImage([isSetImage[0],"http://127.0.0.1:8000/asset/img/"+name]);close_Modal(show_list_image);}} />
                    </div>
                )}
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>{close_Modal(show_list_image)}}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    );
}