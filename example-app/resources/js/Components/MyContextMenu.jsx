import React, { useContext } from 'react';
import { Menu, Item, Separator, Submenu } from "react-contexify";
import { DataContext } from '@/Context/DataContext';
import "react-contexify/dist/ReactContexify.css";
  const MENU_ID = "menu";
  
  export default function App({props}) {
    const { open_Modal } = useContext(DataContext);
    function handleItemClick({ event, props, triggerEvent, data }){
      // console.log(event, props, triggerEvent, data );
      open_Modal(props.function_name,window.scrollY);
    }
  
    return (
      <div>
        <Menu id={MENU_ID}>
          <Item onClick={handleItemClick}>
            تنظیمات
          </Item>
          <Item onClick={handleItemClick}>
            Item 2
          </Item>
          <Separator />
          <Item disabled>Disabled</Item>
          <Separator />
          <Submenu label="Submenu">
            <Item onClick={handleItemClick}>
              Sub Item 1
            </Item>
            <Item onClick={handleItemClick}>Sub Item 2</Item>
          </Submenu>
        </Menu>
      </div>
    );
  }