import { Modal, Button } from 'react-bootstrap';
import React, { useContext } from 'react';
import { DataContext } from '@/Context/DataContext';
export default function Management_Modal(){
    const { isModalOpen, closeModal,add_Modal,openModal,image_list,isSetImage, setImage } = useContext(DataContext);
    const show_list_image = "list_image";
    return(
        <>
      <Modal show={isModalOpen[show_list_image]} onHide={()=>{closeModal(show_list_image)}} centered size="xl">
        <Modal.Header closeButton>
          <Modal.Title>تنظیمات</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="row">
                {image_list?.Image.map((name,index) =>
                    <div key={index} className="col-2">
                        <img style={{height:"170px",width:"170px", objectFit:"cover",objectPosition:"center"}} src={"http://127.0.0.1:8000/asset/img/"+name} alt="" onClick={()=>{setImage([isSetImage[0],"http://127.0.0.1:8000/asset/img/"+name]);closeModal(show_list_image);}} />
                    </div>
                )}
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>{closeModal(show_list_image)}}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    );
}