import React, { useContext,useEffect  } from 'react';
import { DataContext } from '@/Context/DataContext';
import { Modal, Button } from 'react-bootstrap';

export default function single_Slider({ index_Component, name_Component }) {
    const { edit_text,url, token, data, changeValue_Data,open_Context_Menu } = useContext(DataContext);
    const id_Modal = String(name_Component+"_"+index_Component);
    return (
        <>
         <footer className="footer-area-v1" onContextMenu={(event)=>{open_Context_Menu(event,id_Modal,index_Component)}}>
            <div className="footer-widget-area dark_blue pt-80 pb-35">
                <div className="container">
                    <div className="footer-top pb-80">
                        <div className="row align-items-center">
                            <div className="col-lg-2">
                                <div className="footer_logo">
                                    <img src={url+data.components[index_Component].id_10} className="img-fluid" alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-10">
                                <div className="social-box">
                                    <ul className="social-link">
                                    {data.components[index_Component].id_1[0]? (
                                        <li><a style={{fill:"#ffffff"}} href={data.components[index_Component].id_1[1]}>
                                        <svg height="25px" width="25px"  viewBox="0 0 3584.55 3673.6">
                            <g id="Isolation_Mode" data-name="Isolation Mode">
                                <path d="M1071.43,2.75H2607.66C3171,2.75,3631.82,462.91,3631.82,1026.2v493.93c-505,227-1014.43,1348.12-1756.93,1104.51-61.16,43.46-202.11,222.55-212,358.43-257.11-34.24-553.52-328.88-517.95-646.62C717,2026.91,1070.39,1455.5,1409.74,1225.51c727.32-492.94,1737.05-69,1175.39,283.45-341.52,214.31-1071.84,355.88-995.91-170.24-200.34,57.78-328.58,431.34-87.37,626-223.45,219.53-180.49,623.07,58.36,755.57,241.56-625.87,1082.31-544.08,1422-1291.2,255.57-562-123.34-1202.37-880.91-1104C1529.56,399.34,993.64,881.63,725.62,1453.64,453.68,2034,494.15,2811.15,1052.55,3202.82c657.15,460.92,1356.78,34.13,1780.52-523.68,249.77-328.78,468-693,798.75-903.37v875.72c0,563.28-460.88,1024.86-1024.16,1024.86H1071.43c-563.29,0-1024.16-460.87-1024.16-1024.16V1026.9C47.27,463.61,508.14,2.74,1071.43,2.74Z" transform="translate(-47.27 -2.74)" fillRule="evenodd"/>
                            </g>
                            </svg>
                                        </a></li>
                                        ):(<></>)}
                                        {data.components[index_Component].id_2[0]? (
                                        <li><a style={{fill:"#ffffff"}} href={data.components[index_Component].id_2[1]}>
                                        <svg height="25px" width="25px"  viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>

                                          </a></li>
                                          ):(<></>)}
                                        {data.components[index_Component].id_3[0]? (
                                        <li><a style={{fill:"#ffffff"}} href={data.components[index_Component].id_3[1]}>
                                        <svg height="25px" width="25px"  viewBox="0 0 448 512"><path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"/></svg>

                                          </a></li>
                                          ):(<></>)}
                                          {data.components[index_Component].id_4[0]? (
                                        <li><a style={{fill:"#ffffff"}} href={data.components[index_Component].id_4[1]}>
                                        <svg height="25px" width="25px" viewBox="0 0 32 32"><path clipRule="evenodd" d="m5 0h22c2.7614 0 5 2.23858 5 5v22c0 2.7614-2.2386 5-5 5h-22c-2.76142 0-5-2.2386-5-5v-22c0-2.76142 2.23858-5 5-5zm11.6919 12.0074c-1.433.596-4.297 1.8297-8.59198 3.7009-.69744.2773-1.06278.5487-1.09604.814-.05621.4483.50527.6249 1.26986.8653.104.0327.21176.0666.32224.1025.75224.2445 1.76412.5306 2.29022.542.4771.0103 1.0097-.1864 1.5977-.5902 4.0129-2.7088 6.0844-4.078 6.2144-4.1075.0918-.0208.2189-.047.3051.0295.0861.0766.0777.2216.0685.2605-.0556.2371-2.2596 2.2862-3.4002 3.3466-.3556.3305-.6078.565-.6593.6186-.1155.12-.2333.2334-.3464.3425-.6988.6737-1.2229 1.1789.029 2.0039.6017.3965 1.0831.7243 1.5634 1.0514.5245.3572 1.0476.7135 1.7245 1.1572.1725.113.3372.2304.4976.3448.6104.4352 1.1588.8261 1.8363.7638.3937-.0362.8004-.4064 1.0069-1.5105.4881-2.6092 1.4475-8.2626 1.6692-10.5922.0194-.2041-.005-.4654-.0246-.58-.0197-.1147-.0607-.2781-.2097-.399-.1766-.1432-.4491-.17345-.5709-.1714-.5542.0099-1.4043.3055-5.4958 2.0073z" fillRule="evenodd"/></svg>

                                          </a></li>
                                          ):(<></>)}
                                        {data.components[index_Component].id_5[0]? (
                                        <li><a style={{fill:"#ffffff"}} href={data.components[index_Component].id_5[1]}>
                                        <svg height="25px" width="25px" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 509.64"><rect width="512" height="509.64" rx="115.61" ry="115.61"/><path fill="#000" fillRule="nonzero" d="M323.74 148.35h36.12l-78.91 90.2 92.83 122.73h-72.69l-56.93-74.43-65.15 74.43h-36.14l84.4-96.47-89.05-116.46h74.53l51.46 68.04 59.53-68.04zm-12.68 191.31h20.02l-129.2-170.82H180.4l130.66 170.82z"/></svg>

                                          </a></li>
                                          ):(<></>)}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-widget pt-75">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="widget categories-widget mb-40">
                                    <h4 className="widget-title text-center">خدمات</h4>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <ul className="widget-link text-center">
                                            {data.components[index_Component].id_6.map((item, index) =>
                                                <li key={index}><a href={item[1]}>{item[0]}</a></li>
                                            )}
                                            </ul>
                                        </div> 
                                        <div className="col-lg-6">
                                            <ul className="widget-link text-center">
                                            {data.components[index_Component].id_7.map((item, index) =>
                                                <li key={index}><a href={item[1]}>{item[0]}</a></li>
                                            )}
                                            </ul>
                                        </div> 
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="widget contact-widget mb-40">
                                    <h4 className="widget-title rtl text-center">راه های ارتباطی</h4>
                                    <div className="contact-info rtl text-center">
                                    {data.components[index_Component].id_8.map((item, index) =>
                                        <p key={index}><a href={item[1]}>{item[0]}</a></p>
                                    )}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-6 col-sm-12">
                                <div className="widget recent-post-widget mb-40">
                                    <h4 className="widget-title text-right mr-3">:اخبار</h4>
                                    {data.components[index_Component].id_9.map((item, index) =>
                                    <div key={index} className="blog-post-item rtl">
                                                                              <div className="post-thumbnail">
                                            <img src={url+item[2]} className="img-fluid rounded" alt=""/>
                                        </div>
                                    <div className="post-entry-content">
                                            <div className="entry-content">
                                                <h3><a href={item[3]} className='text-right mr-3 mt-1'>{item[0]}</a></h3>
                                            </div>
                                            <div className="post-meta text-right">
                                                <ul>
                                                    <li className='mr-3'><span><a>{item[1]}</a>
                                                    <svg  width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                                        </svg>
                                                    </span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    )}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="copyright-text">
                                <p>Copyright By @example - 2021</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="footer-link">
                                <ul>
                                    <li><a href="#">Privacy</a></li>
                                    <li><a href="#">Terms & Conditions</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {token ? (
          <ModalComponent id_Modal={id_Modal} index_Component={index_Component}></ModalComponent>
        ):(
          <div></div>
        )}
    </footer>
        </>
    );
}
const ModalComponent = ({id_Modal,index_Component}) => {
    const { data, isModalOpen, close_Modal,add_Modal,open_Modal,changeValue_Data } = useContext(DataContext);
    useEffect(() => {
        add_Modal(id_Modal);
    }, []);
    const add_item_service = ["خدمت شماره 1","#"];
    const add_item = ["info@example.com","mailto:info@example.com"];
    const add_item_feeds = ["عنوان خبر شما","نویسنده","/assets/images/blog/feed_1.jpg","#"];

  // not is chancge scrolle
  useEffect(() => {
    if(isModalOpen[id_Modal]?.status == true){
      window.scrollTo(0, isModalOpen[id_Modal]?.location);
    }else{
      window.scrollTo(0, isModalOpen[id_Modal]?.location);
    }
  }, [isModalOpen[id_Modal]?.status]);
    return (
        <>
      <Modal show={isModalOpen[id_Modal]?.status} onHide={()=>{close_Modal(id_Modal)}} scrollable centered size="md">
        <Modal.Header closeButton>
          <Modal.Title>تنظیمات</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='mb-3 col-12'>
          <p>ID: {data.components[index_Component].id}</p>
        </div>
        <hr />
            <div className='mb-3 row'>
                <div className="col-4 text-center">
                </div>
                <div className="col-8 text-right row">
                    <p className='col-12 pt-2 rtl text-right font-weight-bold text-dark'>شبکه های اجتماعی:</p>
                </div>
            </div>
                    <div className="col-12 p-0">
                    <div className="col-12 mb-2">
                        <div className="row">
                          <div className="col-6">
                            لینک
                          </div>
                          <div className="col-2">
                            نمایش
                          </div>
                          <div className="col-4">
                            شبکه اجتماعی
                          </div>
                        </div>
                    </div>
                      <div className="col-12 mb-2">
                        <div className="row">
                          <input type='text'  className="form-control col-6" placeholder='..' value={data.components[index_Component].id_1[1]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_1",1],event.target.value,"change")}}/>
                          <input type="checkbox" className="form-control col-2" placeholder="..." checked={data.components[index_Component].id_1[0]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_1",0],event.target.checked,"change")}}/>
                          <p className='col-4 text-center'>ایتا</p>
                        </div>
                      </div>

                      <div className="col-12 mb-2">
                        <div className="row">
                          <input type='text'  className="form-control col-6" placeholder='..' value={data.components[index_Component].id_2[1]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_2",1],event.target.value,"change")}}/>
                          <input type="checkbox" className="form-control col-2" placeholder="..." checked={data.components[index_Component].id_2[0]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_2",0],event.target.checked,"change")}}/>
                          <p className='col-4 text-center'>اینستاگرام</p>
                        </div>
                      </div>

                      <div className="col-12 mb-2">
                        <div className="row">
                          <input type='text'  className="form-control col-6" placeholder='..' value={data.components[index_Component].id_3[1]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_3",1],event.target.value,"change")}}/>
                          <input type="checkbox" className="form-control col-2" placeholder="..." checked={data.components[index_Component].id_3[0]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_3",0],event.target.checked,"change")}}/>
                          <p className='col-4 text-center'>فیسبوک</p>
                        </div>
                      </div>

                      <div className="col-12 mb-2">
                        <div className="row">
                          <input type='text'  className="form-control col-6" placeholder='..' value={data.components[index_Component].id_4[1]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_4",1],event.target.value,"change")}}/>
                          <input type="checkbox" className="form-control col-2" placeholder="..." checked={data.components[index_Component].id_4[0]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_4",0],event.target.checked,"change")}}/>
                          <p className='col-4 text-center'>تلگرام</p>
                        </div>
                      </div>

                      <div className="col-12 mb-2">
                        <div className="row">
                          <input type='text'  className="form-control col-6" placeholder='..' value={data.components[index_Component].id_5[1]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_5",1],event.target.value,"change")}}/>
                          <input type="checkbox" className="form-control col-2" placeholder="..." checked={data.components[index_Component].id_5[0]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_5",0],event.target.checked,"change")}}/>
                          <p className='col-4 text-center'>توییتر</p>
                        </div>
                      </div>

                    </div>

        <div className="col-12">
          <h5 className='trl text-right p-2'>
            خدمات (ستون اول)
          </h5>
        </div>
        <div className="col-12 p-0">
        <div className="col-12 mb-2">
            <div className="row">
              <div className="col-5">
                عنوان
              </div>
              <div className="col-5">
                لینک
              </div>
              <div className="col-2">
                حذف
              </div>
            </div>
        </div>
          {data.components[index_Component].id_6.map((item, index) =>
          <div key={index} className="col-12 mb-2">
            <div className="row">
              <input type='text'  className="form-control col-5" placeholder='..' value={item[0]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_6",index,0],event.target.value,"change")}}/>
              <input type='text'  className="form-control col-5" placeholder='..' value={item[1]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_6",index,1],event.target.value,"change")}}/>
              <input type='button'  className="form-control col-2 btn-danger" value="حذف" onClick={()=>{changeValue_Data(["components",index_Component,"id_6"],null,"delete",index)}}/>
            </div>
          </div>
          )}
          <div className="col-12">
            <button className='btn btn-success' onClick={()=>{changeValue_Data(["components",index_Component,"id_6"],add_item_service,"add")}}>افزودن</button>
          </div>
        </div>
        <div className="col-12">
          <h5 className='trl text-right p-2'>
            خدمات (ستون دوم)
          </h5>
        </div>
        <div className="col-12 p-0">
        <div className="col-12 mb-2">
            <div className="row">
              <div className="col-5">
                عنوان
              </div>
              <div className="col-5">
                لینک
              </div>
              <div className="col-2">
                حذف
              </div>
            </div>
        </div>
          {data.components[index_Component].id_7.map((item, index) =>
          <div key={index} className="col-12 mb-2">
            <div className="row">
              <input type='text'  className="form-control col-5" placeholder='..' value={item[0]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_7",index,0],event.target.value,"change")}}/>
              <input type='text'  className="form-control col-5" placeholder='..' value={item[1]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_7",index,1],event.target.value,"change")}}/>
              <input type='button'  className="form-control col-2 btn-danger" value="حذف" onClick={()=>{changeValue_Data(["components",index_Component,"id_7"],null,"delete",index)}}/>
            </div>
          </div>
          )}
          <div className="col-12">
            <button className='btn btn-success' onClick={()=>{changeValue_Data(["components",index_Component,"id_7"],add_item_service,"add")}}>افزودن</button>
          </div>
        </div>

        
        <div className="col-12">
          <h5 className='trl text-right p-2'>
            راه های ارتباطی
          </h5>
        </div>
        <div className="col-12 p-0">
        <div className="col-12 mb-2">
            <div className="row">
              <div className="col-5">
                عنوان
              </div>
              <div className="col-5">
                لینک
              </div>
              <div className="col-2">
                حذف
              </div>
            </div>
        </div>
          {data.components[index_Component].id_8.map((item, index) =>
          <div key={index} className="col-12 mb-2">
            <div className="row">
              <input type='text'  className="form-control col-5" placeholder='..' value={item[0]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_8",index,0],event.target.value,"change")}}/>
              <input type='text'  className="form-control col-5" placeholder='..' value={item[1]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_8",index,1],event.target.value,"change")}}/>
              <input type='button'  className="form-control col-2 btn-danger" value="حذف" onClick={()=>{changeValue_Data(["components",index_Component,"id_8"],null,"delete",index)}}/>
            </div>
          </div>
          )}
          <div className="col-12">
            <button className='btn btn-success' onClick={()=>{changeValue_Data(["components",index_Component,"id_8"],add_item,"add")}}>افزودن</button>
          </div>
        </div>
                
        <div className="col-12">
          <h5 className='trl text-right p-2'>
            خبرها
          </h5>
        </div>
        <div className="col-12 p-0">
        <div className="col-12 mb-2">
            <div className="row">
              <div className="col-4">
                عنوان
              </div>
              <div className="col-2">
                نویسنده
              </div>
              <div className="col-2">
                لینک
              </div>
              <div className="col-2">
                عکس
              </div>
              <div className="col-2">
                حذف
              </div>
            </div>
        </div>
          {data.components[index_Component].id_9.map((item, index) =>
          <div key={index} className="col-12 mb-2">
            <div className="row">
              <input type='text'  className="form-control col-4" placeholder='..' value={item[0]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_9",index,0],event.target.value,"change")}}/>
              <input type='text'  className="form-control col-2" placeholder='..' value={item[1]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_9",index,1],event.target.value,"change")}}/>
              <input type='text'  className="form-control col-2" placeholder='..' value={item[3]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_9",index,3],event.target.value,"change")}}/>
              <input type='button'  className="form-control col-2 btn-primary" value="تغییر" onClick={()=>{open_Modal("list_image",window.scrollY,["components",index_Component,"id_9",index,2])}}/>
              <input type='button'  className="form-control col-2 btn-danger" value="حذف" onClick={()=>{changeValue_Data(["components",index_Component,"id_9"],null,"delete",index)}}/>
            </div>
          </div>
          )}
          <div className="col-12">
            <button className='btn btn-success' onClick={()=>{changeValue_Data(["components",index_Component,"id_9"],add_item_feeds,"add")}}>افزودن</button>
          </div>
        </div>
        <div className="col-12 text-right rtl">
            <label htmlFor="formGroupExampleInput2">لوگوی پاصفحه</label>
            <input type='button'  className="form-control col-2 btn-primary" value="تغییر" onClick={()=>{open_Modal("list_image",window.scrollY,["components",index_Component,"id_10"])}}/>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>{close_Modal(id_Modal)}}>
            خروج
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    );
  };