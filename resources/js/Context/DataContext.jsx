import React, { createContext, useState } from 'react';
import { contextMenu } from 'react-contexify';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [page_name, setPage_name] = useState(null);
  const [data, setData] = useState({});
  const [token, setToken] = useState(null);
  const [url, setUrl] = useState(null);
  const [state_admin, setState_admin] = useState(false);
  const [active_sidbar, setActive_Sidbar] = useState(false);
  const [edit_text, setEdit_text] = useState(false);
  const [image_list, setImage_list] = useState(null);
  const [component_list_img, setComponent_list_img] = useState(null);
  const [component_list, setComponent_list] = useState(null);
  const [isModalOpen, setModalOpen] = useState({});
  const [isSetImage, setImage] = useState([null,null]);
  const [active_component, setActive_component] = useState("Dashboard");


  const open_Modal = (name,scrollY = 0,value = null) => setModalOpen(preState => ({...preState,[name]:{"status":true,"location":scrollY,"value":value}}));
  const close_Modal = (name,scrollY = 0,value = null) => setModalOpen(preState => ({...preState,[name]:{"status":false,"location":isModalOpen[name].location,"value":value}}));
  const add_Modal = (name,scrollY = 0,value = null) => setModalOpen(preState => ({...preState,[name]:{"status":false,"location":scrollY,"value":value}}));
  const open_Context_Menu = (event,id_Modal,index_Component) => {
    if(state_admin){
      event.preventDefault();
      contextMenu.show({
        id: 'menu',
        event: event,
        props: {
          function_name:id_Modal,
          index:index_Component,
        }
      });
    }
  };
  const changeValue_Data = (path, value, operation, index = null, callback = () => {}) => {
    setData((prevData) => {
      const newObj = { ...prevData };
      let current = newObj;
      for (let i = 0; i < path.length - 1; i++) {
        if (!current[path[i]]) {
          current[path[i]] = {};
        } else if (Array.isArray(current[path[i]])) {
          current[path[i]] = [...current[path[i]]];
        } else {
          current[path[i]] = { ...current[path[i]] };
        }
        current = current[path[i]];
      }

      switch (operation) {
        case 'change':
          current[path[path.length - 1]] = value;
          break;
        case 'add':
          if (Array.isArray(current[path[path.length - 1]])) {
            current[path[path.length - 1]] = [...current[path[path.length - 1]], value];
          } else {
            current[path[path.length - 1]] = { ...current[path[path.length - 1]], ...value };
          }
          break;
        case 'delete':
          if (Array.isArray(current[path[path.length - 1]])) {
            current[path[path.length - 1]] = current[path[path.length - 1]].filter((_, i) => i !== index);
          } else {
            delete current[path[path.length - 1]];
          }
          break;
        case 'delete-section':
          if (Array.isArray(current.components)) {
            current.components = current.components.filter((_, i) => i !== index);
          }
          break;
        case 'move-up':
          if (index > 0 && Array.isArray(current[path[path.length - 1]])) {
            const list = current[path[path.length - 1]];
            [list[index - 1], list[index]] = [list[index], list[index - 1]];
          }
          break;
        case 'move-down':
          if (Array.isArray(current[path[path.length - 1]])) {
            const list = current[path[path.length - 1]];
            if (index < list.length - 1) {
              [list[index + 1], list[index]] = [list[index], list[index + 1]];
            }
          }
          break;
        default:
      }
      callback(newObj);
      return newObj;
    });
    return true;
  };
  return (
    <DataContext.Provider value={{ 
      page_name, setPage_name,
      data, setData,
      token, setToken, 
      url, setUrl,
      state_admin, setState_admin, 
      active_sidbar, setActive_Sidbar, 
      edit_text, setEdit_text, 
      image_list, setImage_list,
      isModalOpen, close_Modal, open_Modal, add_Modal,
      isSetImage, setImage,
      changeValue_Data,open_Context_Menu,
      active_component, setActive_component,
      component_list_img, setComponent_list_img,
      component_list, setComponent_list }}>
      {children}
    </DataContext.Provider>
  );
};
