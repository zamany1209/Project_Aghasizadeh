import React, { Component, useContext,useEffect,useState  } from 'react';
import { DataContext } from '@/Context/DataContext';
import { Modal, Button } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function blog_Details({ index_Component, name_Component }) {
    const { edit_text,url, token,data,open_Modal,open_Context_Menu,changeValue_Data} = useContext(DataContext);
    const id_Modal = String(name_Component+"_"+index_Component);
    const content = (item,index) => {
        if(item.name == "Title"){
            return(
                <h3 key={index} className="title rtl" style={{"color":item["color"],"fontSize":item["size"]+"px"}}>{item["text"]}</h3>
            );
        }
        else if(item.name == "Text"){
            return(
                <p className='rtl' key={index} style={{"color":item["color"]}}>{item["text"]}</p>
            );
        }
        else if(item.name == "Tip"){
            return(
                <blockquote key={index} className="blockquote rtl p-3 pt-4">
                    <div className="icon">
                        <img src={url+"/assets/images/icon_1.png"} alt=""/>
                    </div>
                    <div className="info ml-0 mr-3">
                        <p className='rtl' style={{"color":item["color"]}}>{item["text"]}</p>
                    </div>
                </blockquote>
            );
        }
        else if(item.name == "Image"){
            return(
                <div key={index} className="col-12 text-center mb-4">
                    <LazyLoadImage src={url+item["url"]} alt="" />
                    {token ? (
                            <>
                                <div className="mb-3 mt-3  rtl text-right row">
                                    <button className='col-3 btn btn-primary m-1' onClick={()=> {open_Modal("list_image",window.scrollY,["components",index_Component,"id_1",index,"url"])}}>تغییر عکس</button>
                                    <input type='button'  className="form-control col-3 btn-danger m-1" value="حذف" onClick={()=>{changeValue_Data(["components",index_Component,"id_1",index],null,"delete",index)}}/>
                                </div>
                            </>
                        ):(
                            <></>
                        )}
                </div>
            );
        }
    };
    return (
        <>
        <section id={data.components[index_Component]?.id} onContextMenu={(event)=>{open_Context_Menu(event,id_Modal,index_Component)}} className="blog-details-section pt-120 pb-80">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="blog-details-wrapper mb-40">
                            <div className="post-entry-content text-right">
                                <div className="post-meta text-right">
                                    <ul>
                                        <li className='m-0 ml-1'><span><a href="#">{data.components[index_Component].id_7} </a> <i className="far fa-user"></i></span></li>
                                        <li className='m-0 ml-3'><span><a href="#">{data.components[index_Component].id_6} </a>  <i className="far fa-user"></i></span></li>
                                    </ul>
                                </div>
                                {data.components[index_Component].id_1.map((item, index) =>
                                    content(item,index)
                                )}
                            </div>
                            <div className="post-share-tag">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                    </div>
                                    <div className="col-lg-6 col-md-6 text-right">
                                        <div className="tags-box">
                                            <h5 className="title">تگ های مرتبط</h5>
                                            <ul>
                                                {data.components[index_Component].id_2.map((item, index) =>
                                                    <li><a>{item}</a></li>
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="prev_next_area">
                                <div className="row align-items-center">
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="post_content">
                                            <a href={data.components[index_Component].id_3[1]}>صفحه قبل</a>
                                            <h4>{data.components[index_Component].id_3[0]}</h4>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="post_content text-center">
                                            <img src={url+"/assets/images/icon_2.png"} className="img-fluid" alt=""/>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="post_content text-right">
                                        <a href={data.components[index_Component].id_4[1]}>صفحه بعد</a>
                                        <h4>{data.components[index_Component].id_4[0]}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {data.components[index_Component].id_5[0] ? (
                            <>
                            <div className="admin-area text-center mb-45">
                                <div className="admin_img">
                                    <LazyLoadImage src={url+data.components[index_Component].id_5[1]} className="img-fluid" alt=""/>
                                </div>
                                <div className="admin_bio">
                                    <h4>{data.components[index_Component].id_5[2]}</h4>
                                    <p className='rtl'>{data.components[index_Component].id_5[3]}</p>
                                </div>
                            </div>
                            </>
                        ):(
                            <></>
                        )}

                            <Comments></Comments>

                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="sidebar-widget-area">
                        {token ? (
                            <>
                                <div className="col-12 mt-5">
                                    <a onClick={()=>{open_Modal("Comment_Modal",window.scrollY)}} className="col btn btn-success btn-circle p-3 m-1 mt-3">افزودن</a>
                                </div>
                            </>
                        ):(
                            <div></div>
                        )}



                        </div>
                    </div>
                </div>
            </div>
            {token ? (
            <>
                <ModalComponent id_Modal={id_Modal} index_Component={index_Component}></ModalComponent>
                </>
              ):(
                <div></div>
              )}
        </section>
        </>
    );
}
const Comments = () => {
    const { url,state_admin} = useContext(DataContext);
    return(
        <>
            <div className="comments-area mb-45">
                <h4 className="comments-title mb-35 text-right">نظرات</h4>
                <ul className="comments-list">
                    <li className="comment">
                    <div className="comment-wrap">
                        <div className="comment-author-content">
                            <span className="author-name p-2">
                            <span style={{float:"right"}}>John F. Medina</span>
                                {state_admin ? (
                                    <span className="reply"><a>پاسخ</a></span>
                                ):(
                                    <span className="reply"></span>
                                )}
                                </span>
                                <p className="text-right">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                        <div className="comment-avatar">
                            <LazyLoadImage className='p-2' src={url+"/asset/img/user.svg"} alt=""/>
                        </div>

                    </li>
                </ul>
            </div>
            <div className="comments-respond">
                <h4 className="comments-heading mb-30 text-right">ارسال نظر</h4>
                <form>
                    <div className="form_group">
                        <textarea className="form_control" name="message" placeholder="Type your comments...."></textarea>
                        <i className="fal fa-pencil-alt"></i>
                    </div>
                    <div className="form_group">
                        <input type="text" className="form_control" placeholder="Type your name" name="name"/>
                        <i className="fal fa-user"></i>
                    </div>
                    <div className="form_group">
                        <input type="email" className="form_control" placeholder="Type your email" name="email"/>
                        <i className="fal fa-envelope"></i>
                    </div>
                    <div className="form_group">
                        <input type="text" className="form_control" placeholder="Type your website" name="website"/>
                        <i className="fal fa-globe"></i>
                    </div>
                    <div className="form_group">
                        <button className="main-btn">post comment</button>
                    </div>
                </form>
            </div>
        </>
    );
};
const Banner = () => {
    return(
        <div className="widget add_widget mb-40">
            <div className="add_widget_img" style={{"background":"url("+url+"/assets/images/blog/add_img.jpg) no-repeat"}}>
                <div className="add_widget_text">
                    <span>Add Banner</span>
                    <h2>Get 50% off <strong>With Halim</strong></h2>
                    <a href="#" className="main-btn">Get Started Now</a>
                </div>
            </div>
        </div>
    );
};
const Tags = () => {
    return(
        <div className="widget tag-cloud-widget mb-40">
            <h4 className="widget-title">Tags</h4>
            <a href="#" className="tag_1">Travel</a>
            <a href="#" className="tag_2">Lifestyle</a>
            <a href="#" className="tag_3">Photo</a>
            <a href="#" className="tag_2">Adventures</a>
            <a href="#" className="tag_2">Musician</a>
            <a href="#" className="tag_5">08</a>
            <a href="#" className="tag_1">Travel</a>
            <a href="#" className="tag_2">Lifestyle</a>
            <a href="#" className="tag_3">Photo</a>
            <a href="#" className="tag_2">Adventures</a>
            <a href="#" className="tag_2">Musician</a>
            <a href="#" className="tag_5">08</a>
        </div>
    );
};
const Feeds = () => {
    return(
        <div className="widget recent-post-widget mb-40">
            <h4 className="widget-title">Feeds</h4>
            <ul className="recent-post-list">
                <li className="post-thumbnail-content">
                    <img src={url+"/assets/images/blog/feed_3.jpg"} className="img-fluid" alt=""/>
                    <div className="post-title-date">
                        <h6><a href="#">Alonso Kelina Falao Asiano Pero</a></h6>
                        <span className="posted-on"><i className="far fa-clock"></i><a href="#">6 Hours ago</a></span>
                    </div>
                </li>
                <li className="post-thumbnail-content">
                    <img src={url+"/assets/images/blog/feed_4.jpg"} className="img-fluid" alt=""/>
                    <div className="post-title-date">
                        <h6><a href="#">It is a long established fact that a reader</a></h6>
                        <span className="posted-on"><i className="far fa-clock"></i><a href="#">6 Hours ago</a></span>
                    </div>
                </li>
                <li className="post-thumbnail-content">
                    <img src={url+"/assets/images/blog/feed_5.jpg"} className="img-fluid" alt=""/>
                    <div className="post-title-date">
                        <h6><a href="#">Many desktop publish packages and web</a></h6>
                        <span className="posted-on"><i className="far fa-clock"></i><a href="#">6 Hours ago</a></span>
                    </div>
                </li>
                <li className="post-thumbnail-content">
                    <img src={url+"/assets/images/blog/feed_6.jpg"} className="img-fluid" alt=""/>
                    <div className="post-title-date">
                        <h6><a href="#">Various versions have evolved over the years</a></h6>
                        <span className="posted-on"><i className="far fa-clock"></i><a href="#">6 Hours ago</a></span>
                    </div>
                </li>
                <li className="post-thumbnail-content">
                    <img src={url+"/assets/images/blog/feed_7.jpg"} className="img-fluid" alt=""/>
                    <div className="post-title-date">
                        <h6><a href="#">Photo booth anim 8-bit PBR 3 wolf moon.</a></h6>
                        <span className="posted-on"><i className="far fa-clock"></i><a href="#">6 Hours ago</a></span>
                    </div>
                </li>
            </ul>
        </div>
    );
};
const Categories = () => {
    return(
        <div className="widget categories-widget mb-40">
            <h4 className="widget-title">Categories</h4>
            <ul className="widget-link">
                <li><a href="#">Lifestyle </a></li>
                <li><a href="#">Travel <span>(34)</span></a></li>
                <li><a href="#">Fashion <span>(89)</span></a></li>
                <li><a href="#">Music <span>(96)</span></a></li>
                <li><a href="#">Branding <span>(78)</span></a></li>
            </ul>
        </div>
    );
};
const Follow_us = () => {
    return(
        <div className="widget social-widget mb-40">
            <h4 className="widget-title">Follow Us</h4>
            <ul className="social-link">
                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="#"><i className="fab fa-pinterest"></i></a></li>
                <li><a href="#"><i className="fab fa-wordpress"></i></a></li>
            </ul>
        </div>
    );
};
const Instagram = () => {
    return(
        <div className="widget instagram-widget mb-40">
            <h4 className="widget-title">Instagram</h4>
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4 col-6 ins_pa">
                    <div className="insta_img">
                        <img src={url+"/assets/images/blog/insta_1.jpg"} className="img-fluid" alt=""/>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-6 ins_pa">
                    <div className="insta_img">
                        <img src={url+"/assets/images/blog/insta_2.jpg"} className="img-fluid" alt=""/>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-6 ins_pa">
                    <div className="insta_img">
                        <img src={url+"/assets/images/blog/insta_3.jpg"} className="img-fluid" alt=""/>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-6 ins_pa">
                    <div className="insta_img">
                        <img src={url+"/assets/images/blog/insta_4.jpg"} className="img-fluid" alt=""/>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-6 ins_pa">
                    <div className="insta_img">
                        <img src={url+"/assets/images/blog/insta_5.jpg"} className="img-fluid" alt=""/>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-6 ins_pa">
                    <div className="insta_img">
                        <img src={url+"/assets/images//blog/insta_6.jpg"} className="img-fluid" alt=""/>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-6 ins_pa">
                    <div className="insta_img">
                        <img src={url+"/assets/images//blog/insta_7.jpg"} className="img-fluid" alt=""/>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-6 ins_pa">
                    <div className="insta_img">
                        <img src={"/assets/images//blog/insta_8.jpg"} className="img-fluid" alt=""/>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-6 ins_pa">
                    <div className="insta_img">
                        <img src={url+"/assets/images//blog/insta_9.jpg"} className="img-fluid" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
}
const Search = () => {
    return(
        <div className="widget search-widget mb-40">
        <h4 className="widget-title">Search</h4>
        <form>
            <div className="form_group">
                <input type="search" className="form_control" placeholder="Search your keyword..."/>
                <button className="search_btn"><i className="fas fa-search"></i></button>
            </div>
        </form>
    </div>
    );
};
const ModalComponent = ({id_Modal,index_Component}) => {
    const { data, isModalOpen, close_Modal,add_Modal,open_Modal,changeValue_Data } = useContext(DataContext);
    const add_item =["عنوان","#"];
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
        <Modal.Header closeButton>
          <Modal.Title>تنظیمات</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="mb-3 row">
            <div className="col-6 text-center">
                <input type="checkbox" className="form-control" placeholder="..." checked={data.components[index_Component].id_5[0]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_5",0],event.target.checked,"change")}}/>
            </div>
            <div className="col-6 text-right">
                <p className='pt-2 rtl'>درباره نویسنده:</p>
            </div>
        </div>

            {data.components[index_Component].id_5[0] ? (
                <>
                    <div className="mb-3 text-right">
                        <button className='btn btn-primary mt-4' onClick={()=> {open_Modal("list_image",window.scrollY,["components",index_Component,"id_5",1])}}>تغییر آواتار</button>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput" className="form-label">عنوان</label>
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="..." value={data.components[index_Component].id_5[2]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_5",2],event.target.value,"change")}}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput_1" className="form-label">توضیحات</label>
                        <textarea className="form-control col-11 m-3 rtl text-right" id="formGroupExampleInput_1" rows="6" onChange={(event)=>{changeValue_Data(["components",index_Component,"id_5",3],event.target.value,"change")}} defaultValue={data.components[index_Component].id_5[3]}></textarea>
                    </div>
                </>
            ):(
                <></>
            )}

        {/* <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">عنوان</label>
          <input type="text" className="form-control" id="formGroupExampleInput" placeholder="..." value={data.components[index_Component].id_2[0]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_2",0],event.target.value,"change")}}/>
          <label htmlFor="customRange2" className="form-label" style={{"fontSize":"10px"}}>{data.components[index_Component].id_2[1]}</label>
          <input type="range" className="form-range col-12" min="0" max="70" step="1" id="customRange2" value={data.components[index_Component].id_2[1]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_2",1],event.target.value,"change")}}/>
        </div>
        <div className="col-12 p-0">
        <div className="col-12 mb-2">
            <div className="row">
              <div className="col-5">
                نام دکمه
              </div>
              <div className="col-3">
                لینک
              </div>
              <div className="col-2">
                رنگ
              </div>
              <div className="col-2">
                حذف
              </div>
            </div>
        </div>
          {data.components[index_Component].id_3.map((item, index) =>
          <div key={index} className="col-12 mb-2">
            <div className="row">
              <input type='text'  className="form-control col-5" placeholder='..' value={item[0]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_3",index,0],event.target.value,"change")}}/>
              <input type='text'  className="form-control col-3" placeholder='..' value={item[1]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_3",index,1],event.target.value,"change")}}/>
              <input type='button'  className="form-control col-2 btn-danger" value="حذف" onClick={(event)=>{changeValue_Data(["components",index_Component,"id_3"],null,"delete",index)}}/>
            </div>
          </div>
          )}
        </div>
        */}
        <ul className="list-group list-group-horizontal">
                <li className="list-group-item btn" onClick={()=> {open_Modal("list_image",window.scrollY,["components",index_Component,"id_1"])}}>تغییر عکس پس زمنیه</li>
                <li className="list-group-item btn" onClick={(event)=>{changeValue_Data(["components",index_Component,"id_3"],add_item,"add")}}>افزودن دکمه</li>
                <li className="list-group-item btn" onClick={(event)=>{changeValue_Data(["components",index_Component,"id_3"],add_item,"add")}}>افزودن دکمه</li>
        </ul> 
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

const Comment_modal = ({index_Component}) => {
    const { data, isModalOpen, close_Modal,add_Modal,open_Modal,changeValue_Data } = useContext(DataContext);
    const id_Modal = "Comment_Modal";
    const add_item =["عنوان","#"];
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
        <Modal.Header closeButton>
          <Modal.Title>تنظیمات</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ul className="list-group list-group-horizontal">
                <li className="list-group-item btn" onClick={(event)=>{changeValue_Data(["components",index_Component,"id_3"],add_item,"add")}}>افزودن جستجو</li>
                <li className="list-group-item btn" onClick={(event)=>{changeValue_Data(["components",index_Component,"id_3"],add_item,"add")}}>افزودن دکمه</li>
        </ul> 
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