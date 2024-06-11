import { Link } from '@inertiajs/react';
import React, { useContext } from 'react';
import { DataContext } from '@/Context/DataContext';
import { LazyLoadImage } from 'react-lazy-load-image-component';
export default function Index_Navbar({ auth = {} }) {
    const { url } = useContext(DataContext);
  return(
    <>
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      {/* <!-- Sidebar Toggle (Topbar) --> */}
      <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
          <i className="fa fa-bars"></i>
      </button>


      {/* <!-- Topbar Navbar --> */}
      <ul className="navbar-nav ml-auto">

          {/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
          <li className="nav-item dropdown no-arrow d-sm-none">
              <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="fas fa-search fa-fw"></i>
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
                                  <i className="fas fa-search fa-sm"></i>
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
                  <span className="mr-2 d-none d-lg-inline text-gray-600 small">{auth.user.name}</span>
                  <LazyLoadImage className="img-profile rounded-circle"
                      src={url+"/admin_panel_asset/assets/image/user.svg"}/>
              </a>
              {/* <!-- Dropdown - User Information --> */}
              <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                  aria-labelledby="userDropdown">
                  <a className="dropdown-item" href="#">
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
    </>
  );
}
  