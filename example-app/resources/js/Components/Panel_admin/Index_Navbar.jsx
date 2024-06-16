import { Link } from '@inertiajs/react';
import React, { useContext,useEffect } from 'react';
import axios from 'axios';
import { DataContext } from '@/Context/DataContext';
import { Modal, Button } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
export default function Index_Navbar() {
    const { url,data,open_Modal,active_sidbar, setActive_Sidbar } = useContext(DataContext);
    useEffect(() => {
      setActive_Sidbar(false);
    }, []);
    const open_and_close_sidbar = ()=>{
      if(active_sidbar == true){
        setActive_Sidbar(false);
      }else{
        setActive_Sidbar(true);
      }
    }
  return(
    <>
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      {/* <!-- Sidebar Toggle (Topbar) --> */}
      <button id="sidebarToggleTop" onClick={open_and_close_sidbar} className="btn btn-link d-md-none rounded-circle mr-3">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-menu-button-wide" viewBox="0 0 16 16">
        <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v2A1.5 1.5 0 0 1 14.5 5h-13A1.5 1.5 0 0 1 0 3.5zM1.5 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5z"/>
        <path d="M2 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m10.823.323-.396-.396A.25.25 0 0 1 12.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0M0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5"/>
      </svg>
      </button>


      {/* <!-- Topbar Navbar --> */}
      <ul className="navbar-nav ml-auto">

          {/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
          <li className="nav-item dropdown no-arrow d-sm-none">
              <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                        </svg>
              </a>
              {/* <!-- Dropdown - Messages --> */}
              <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                  aria-labelledby="searchDropdown">
                  <form className="form-inline mr-auto w-100 navbar-search">
                      <div className="input-group">
                          <input type="text" className="form-control bg-light border-0 small"
                              placeholder="Search for..." aria-label="Search"
                              aria-describedby="basic-addon2"/>
                          <div className="input-group-append">
                              <button className="btn btn-primary" type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                                </svg>
                              </button>
                          </div>
                      </div>
                  </form>
              </div>
          </li>

          {/* <!-- Nav Item - Alerts --> */}
          <li className="nav-item dropdown no-arrow mx-1">
              <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <div className="btn btn-success pb-2">
                    ذخیره
                    </div>
              </a>
          </li>

          <div className="topbar-divider d-none d-sm-block"></div>

          {/* <!-- Nav Item - User Information --> */}
          <li className="nav-item dropdown no-arrow">
              <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span className="mr-2 d-none d-lg-inline text-gray-600 small">{data.auth?.user.family}</span>
                  <LazyLoadImage className="img-profile rounded-circle"
                      src={url+"/admin_panel_asset/assets/image/user.svg"}/>
              </a>
              {/* <!-- Dropdown - User Information --> */}
              <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                  aria-labelledby="userDropdown">
                  <a type='button' className="dropdown-item" onClick={()=>{open_Modal("Edit_Profile")}}>
                      <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                      پروفایل
                  </a>
                  <a className="dropdown-item" href="#">
                      <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                      Settings
                  </a>
                  <a className="dropdown-item" href="#">
                      <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                      Activity Log
                  </a>
                  <div className="dropdown-divider"></div>
                  <Link href={route('logout')} method="post" as="button" className="dropdown-item" data-toggle="modal" data-target="#logoutModal">
                      <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                      خروج از حساب
                  </Link>
              </div>
          </li>

      </ul>

      </nav>
      <ModalComponent id_Modal="Edit_Profile"></ModalComponent>
    </>
  );
}
const ModalComponent = ({id_Modal,index_Component}) => {
    const { data,url, isModalOpen, close_Modal,add_Modal,open_Modal,changeValue_Data } = useContext(DataContext);
    const add_item =["عنوان","توضیحات"];
    const save_data_profile = async (event) => {
        event.preventDefault();
        var id = data.auth.user.id;
        var name = data.auth.user.name;
        var family = data.auth.user.family;
        var email = data.auth.user.email;
        try {
            const response = await axios.post(url+'/edit_data_profile', {
                id,name,family,email
            });
            console.log(response);
            alert(response.data.message);
            // close_Modal(show_edit_title);
        } catch(error) {
            if (error.response && error.response.status === 409) {
                alert(error.response.data.message);
            }
            if (error.response && error.response.status === 408) {
                alert(error.response.data.message);

            }
          }
    }
    useEffect(() => {
        add_Modal(id_Modal);
    }, []);
  // not is chancge scrolle
  useEffect(() => {
    if(isModalOpen[id_Modal]?.status == true){
      window.scrollTo(0, isModalOpen[id_Modal]?.location);
    }else{
      window.scrollTo(0, isModalOpen[id_Modal]?.location);
    }
  }, [isModalOpen[id_Modal]?.status]);
  useEffect(() =>{
    if(isModalOpen[id_Modal]?.status == true){
      window.scrollTo(0, isModalOpen[id_Modal]?.location);
    }
  },[data]);
    return (
        <>
      <Modal show={isModalOpen[id_Modal]?.status} onHide={()=>{close_Modal(id_Modal)}} scrollable centered size="md">
        <Modal.Header>
          <Modal.Title>پروفایل</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <div className="mb-3 row">
            <div className="col-6 rtl text-right">
                <label htmlFor="formGroupExampleInput" className="form-label">نام خانوادگی</label>
                <input type="text" className="form-control rtl text-right" id="formGroupExampleInput" placeholder="..." value={data.auth?.user.family} onChange={(event)=>{changeValue_Data(["auth","user","family"],event.target.value,"change")}}/>
            </div>
            <div className="col-6 rtl text-right">
                <label htmlFor="formGroupExampleInput" className="form-label">نام</label>
                <input type="text" className="form-control rtl text-right" id="formGroupExampleInput" placeholder="..." value={data.auth?.user.name} onChange={(event)=>{changeValue_Data(["auth","user","name"],event.target.value,"change")}}/>
            </div>
            <div className="col-12 rtl text-right">
                <label htmlFor="formGroupExampleInput" className="form-label">ایمیل</label>
                <input type="email" className="form-control rtl text-right" id="formGroupExampleInput" placeholder="..." value={data.auth?.user.email} onChange={(event)=>{changeValue_Data(["auth","user","email"],event.target.value,"change")}}/>
            </div>
        </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>{close_Modal(id_Modal)}}>
            خروج
          </Button>
          <Button variant="success" onClick={(event)=>{save_data_profile(event)}}>
              ذخیره
            </Button>
        </Modal.Footer>
      </Modal>
      </>
    );
  };
  