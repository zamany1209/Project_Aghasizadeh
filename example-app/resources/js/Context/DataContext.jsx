import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const function_11 = () =>{
  let Management_modalInstance = null;
  const openModal_List_Image = () => {
    alert("seg");
      Management_modalInstance = new window.bootstrap.Modal(document.getElementById('Core_Modal_List_Image'));
      Management_modalInstance.show();
  };
  openModal_List_Image();
  const closeModal = () => {
    if (Management_modalInstance) {
      Management_modalInstance.hide();
    }
  };
}
export const DataProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [token, setToken] = useState(null);
  const [state_admin, setState_admin] = useState(false);
  const [movement, setMovement] = useState(false);
  const [edit_text, setEdit_text] = useState(false);
  const [image_list, setImage_list] = useState(null);
  const [isModalOpen, setModalOpen] = useState({});
  const [isSetImage, setImage] = useState([null,null]);
  const openModal = (name) => setModalOpen(preState => ({...preState,[name]:true}));
  const closeModal = (name) => setModalOpen(preState => ({...preState,[name]:false}));
  const add_Modal = (name) => setModalOpen(preState => ({...preState,[name]:false}));
  return (
    <DataContext.Provider value={{ 
      data, setData, 
      token, setToken, 
      state_admin, setState_admin, 
      movement, setMovement, 
      edit_text, setEdit_text, 
      image_list, setImage_list,
      isModalOpen, closeModal, openModal, add_Modal,
      isSetImage, setImage,
      function_11 }}>
      {children}
    </DataContext.Provider>
  );
};
