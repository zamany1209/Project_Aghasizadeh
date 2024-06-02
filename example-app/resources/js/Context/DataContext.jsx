import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [token, setToken] = useState(null);
  const [state_admin, setState_admin] = useState(false);
  const [movement, setMovement] = useState(false);
  const [edit_text, setEdit_text] = useState(false);
  const [image_list, setImage_list] = useState(null);
  const [isModalOpen, setModalOpen] = useState({});
  const [isSetImage, setImage] = useState([null,null]);


  const open_Modal = (name,scrollY = 0) => setModalOpen(preState => ({...preState,[name]:{"status":true,"location":scrollY}}));
  const close_Modal = (name,scrollY = 0) => setModalOpen(preState => ({...preState,[name]:{"status":false,"location":isModalOpen[name].location}}));
  const add_Modal = (name,scrollY = 0) => setModalOpen(preState => ({...preState,[name]:{"status":false,"location":scrollY}}));
  const changeValue_Data = (path, value,operation) => {
    setData((prevData) => {
    const newObj = { ...data };
    let current = newObj;
    for (let i = 0; i < path.length - 1; i++) {
      if (!current[path[i]]) {
        current[path[i]] = {};
      } else {
        current[path[i]] = { ...current[path[i]] };
      }
      current = current[path[i]];
    }
    switch(operation) {
      case "change":
        current[path[path.length - 1]] = value;
        break;
      case "add":
        current[path[path.length - 1]] = [
          ...current[path[path.length - 1]],
          value
        ];
        break;
      case "delete":
        delete current[path[path.length - 1]][value];
        break;
      default:
    }
    console.log(newObj);
    return newObj;
  });
    console.log(data);
  };
  return (
    <DataContext.Provider value={{ 
      data, setData, 
      token, setToken, 
      state_admin, setState_admin, 
      movement, setMovement, 
      edit_text, setEdit_text, 
      image_list, setImage_list,
      isModalOpen, close_Modal, open_Modal, add_Modal,
      isSetImage, setImage,
      changeValue_Data }}>
      {children}
    </DataContext.Provider>
  );
};
