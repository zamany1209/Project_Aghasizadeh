import { useState,useContext } from 'react';
export default function Index_Sidbar({ }) {
  const page_width = document.body.clientWidth;

  if(page_width > 720){

    return Sidbar_1();
  }
  else{
    return "";
  }
}

function Sidbar_1(){
  return(
    <>
        <div className="col-11-5 mt-2">
          <div className="col-12 d-flex justify-content-center">
          <h3></h3>
          </div>
          <div className="col-12 d-flex justify-content-center">
          <ul className="list-unstyled ps-0 text-center">
            <li className="mb-1 border-top pt-3">
              <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
              داشبورد
              </button>
              <div className="collapse show" id="home-collapse">
                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Overview</a></li>
                  <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Updates</a></li>
                  <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Reports</a></li>
                </ul>
              </div>
            </li>
            <li className="mb-1">
              <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                صفحه ها
              </button>
              <div className="collapse" id="dashboard-collapse">
                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">لیست صفحات</a></li>
                  <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">ایجاد یک صفحه</a></li>
                </ul>
              </div>
            </li>
            <li className="mb-1">
              <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse2" aria-expanded="false">
                صفحه ها
              </button>
              <div className="collapse" id="dashboard-collapse2">
                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">لیست صفحات</a></li>
                  <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">ایجاد یک صفحه</a></li>
                </ul>
              </div>
            </li>
            <li className="mb-1">
              <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
                Orders
              </button>
              <div className="collapse" id="orders-collapse">
                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">New</a></li>
                  <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Processed</a></li>
                  <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Shipped</a></li>
                  <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Returned</a></li>
                </ul>
              </div>
            </li>
            <li className="border-top my-3"></li>
            <li className="mb-1">
              <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
                Account
              </button>
              <div className="collapse" id="account-collapse">
                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">New...</a></li>
                  <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Profile</a></li>
                  <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Settings</a></li>
                  <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Sign out</a></li>
                </ul>
              </div>
            </li>
          </ul>
          </div>
        </div>
        <div style={{height:"100vh",boxShadow:"inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15)",backgroundColor:"rgba(0, 0, 0, .1)"}} className="col-0-5"></div>
    </>
  );
}
