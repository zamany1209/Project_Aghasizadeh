import React, { useContext } from 'react';
import { Menu, Item, Separator, Submenu } from "react-contexify";
import { DataContext } from '@/Context/DataContext';
import "react-contexify/dist/ReactContexify.css";
  const MENU_ID = "menu";
  
  export default function App({name}) {
    const { open_Modal,changeValue_Data } = useContext(DataContext);
    function handleItemClick({ event, props, triggerEvent, data }){
      // console.log(event, props, triggerEvent, data );
      open_Modal(props.function_name,window.scrollY);
    }
    function delete_section({ event, props, triggerEvent, data }){
      changeValue_Data(["components"],null,"delete-section",props.index);
    }
    function handleEdit_Title({ event, props, triggerEvent, data }){
      // console.log(event, props, triggerEvent, data );
      open_Modal("edit_title",window.scrollY);
    }
    function handleAdd_Component({ event, props, triggerEvent, data }){
      // console.log(event, props, triggerEvent, data );
      open_Modal("list_component",window.scrollY);
    }
    function handleMoveTO_UP({ event, props, triggerEvent, data }){
      // console.log(event, props, triggerEvent, data );
      if(props.index == 0){
        alert("این بخش در بالاترین حد ممکن است");
      }else{
        changeValue_Data(["components"],null,"move-up",props.index);
      }
    }
    function handleMoveTO_Down({ event, props, triggerEvent, data }){
      // console.log(event, props, triggerEvent, data );
      changeValue_Data(["components"],null,"move-down",props.index);
    }
    return (
      <div>
        <Menu id={MENU_ID}>
          <Item onClick={handleItemClick}>
            تنظیمات
          </Item>
          <Item onClick={handleMoveTO_UP}>
            انتقال به بالا
          </Item>
          <Item onClick={handleMoveTO_Down}>
            انتقال به پایین
          </Item>
          <Item onClick={handleEdit_Title}>
          {name === " landing" || name === " Search" || name == " 404" ? (
            <>ویرایش عنوان سایت</>
          ):(
            <>
            ویرایش اطلاعات جستجو
          </>
          )}
          </Item>
          <Separator />
          <Item disabled>به‌روزرسانی</Item>
          <Separator />
          <Submenu label="مدیریت بخش ها">
            <Item onClick={handleAdd_Component} className='bg-success m-1 rounded'>افزودن بخش</Item>
            <Item onClick={delete_section} className='bg-danger  m-1 rounded'>حذف این بخش</Item>
          </Submenu>
        </Menu>
      </div>
    );
  }