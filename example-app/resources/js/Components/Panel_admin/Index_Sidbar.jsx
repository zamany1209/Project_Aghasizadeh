import React, { useContext  } from 'react';
import { DataContext } from '@/Context/DataContext';
export default function Index_Sidbar() {
    const { setActive_component,active_sidbar } = useContext(DataContext);
    var is_active_sidbar = active_sidbar === true ?(""):("d-none d-sm-block");
  return(
    <>
    <ul className={"navbar-nav bg-gradient-primary sidebar sidebar-dark accordion "+is_active_sidbar} id="accordionSidebar">

      {/* <!-- Sidebar - Brand --> */}
      <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
          <div className="sidebar-brand-text mx-3">مرکز تحقیقاتی شهید آقاسی زاده</div>
      </a>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider my-0"/>

      {/* <!-- Nav Item - Dashboard --> */}
      <li className="nav-item active">
          <a onClick={()=>{setActive_component("Dashboard")}} type="button" className="nav-link">
              <img src="http://127.0.0.1:8000/admin_panel_asset/assets/image/dashboard.svg" className="fas fa-fw mr-2" style={{filter: "invert(1)"}} width="12px" alt="" />
              <span>پیشخوان</span></a>
      </li>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider"/>

      {/* <!-- Heading --> */}
      <div className="sidebar-heading">
          Interface
      </div>

      {/* <!-- Nav Item - Pages Collapse Menu --> */}
      <li className="nav-item">
          <a onClick={()=>{setActive_component("Pages")}} type="button" className="nav-link ml-lg-4">
              <span>صفحه ها</span></a>
      </li>
      <li className="nav-item">
          <a onClick={()=>{setActive_component("Froms")}} type="button" className="nav-link ml-lg-4">
              <span>فرم ها</span></a>
      </li>
      <li className="nav-item">
          <a onClick={()=>{setActive_component("upload_files")}} type="button" className="nav-link ml-lg-4">
              <span>آپلود فایل</span></a>
      </li>

  </ul>
    </>
  );
}
