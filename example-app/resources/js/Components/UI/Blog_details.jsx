import React, { Component, useContext,useEffect,useState  } from 'react';
import { DataContext } from '@/Context/DataContext';
import { Modal, Button } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function blog_Details({ index_Component, name_Component }) {
    const { edit_text,url, token,data,open_Modal,open_Context_Menu,changeValue_Data} = useContext(DataContext);
    const id_Modal_1 = String(name_Component+"_"+index_Component);
    const id_Modal_2 = String(name_Component+"_SidebarWidget"+"_"+index_Component);
    const ContentPage = ({item,index}) => {
        if(item.name == "Title"){
            return(
                <h3 key={index} suppressContentEditableWarning={true} contentEditable={edit_text} onBlur={(event)=>{changeValue_Data(["components",index_Component,"id_1",index,"text"],event.target.innerText,"change")}} className="title rtl" style={{"color":item["color"],"fontSize":item["size"]+"px"}}>{item["text"]}</h3>
            );
        }
        else if(item.name == "Text"){
            return(
                <p key={index} suppressContentEditableWarning={true} contentEditable={edit_text} onBlur={(event)=>{changeValue_Data(["components",index_Component,"id_1",index,"text"],event.target.innerText,"change")}} className='rtl' style={{"color":item["color"]}}>{item["text"]}</p>
            );
        }
        else if(item.name == "Tip"){
            return(
                <blockquote key={index} className="blockquote rtl p-3 pt-4">
                    <div className="icon">
                        <img src={url+"/assets/images/icon_1.png"} alt=""/>
                    </div>
                    <div className="info ml-0 mr-3">
                        <p suppressContentEditableWarning={true} contentEditable={edit_text} onBlur={(event)=>{changeValue_Data(["components",index_Component,"id_1",index,"text"],event.target.innerText,"change")}} className='rtl' style={{"color":item["color"]}}>{item["text"]}</p>
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
        <section id={data.components[index_Component]?.id} className="blog-details-section pt-120 pb-80">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8" onContextMenu={(event)=>{open_Context_Menu(event,id_Modal_1,index_Component)}}>
                        <div className="blog-details-wrapper mb-40">
                            <div className="post-entry-content text-right">
                                <div className="post-meta text-right">
                                    <ul>
                                        <li className='m-0 ml-1'><span><a href="#">{data.components[index_Component].id_7} </a> <i className="far fa-user"></i></span></li>
                                        <li className='m-0 ml-3'><span><a href="#">{data.components[index_Component].id_6} </a>  <i className="far fa-user"></i></span></li>
                                    </ul>
                                </div>
                                {data.components[index_Component].id_1.map((item, index) =>
                                    <ContentPage key={index} item={item} index={index}></ContentPage>
                                )}
                                {token ? (
                                    <>
                                        <div className="col-12 mt-5">
                                            <a onClick={()=>{open_Modal("Add_Content",window.scrollY)}} className="col btn btn-success btn-circle p-3 m-1 mt-3">افزودن</a>
                                        </div>
                                        <AddContent index_Component={index_Component}></AddContent>
                                    </>
                                ):(
                                    <div></div>
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
                                                    <li key={index}><a>{item}</a></li>
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

                            {data.components[index_Component].id_8 ? (
                                <>
                                    <Comments></Comments>
                                </>
                            ):(
                                <></>
                            )}


                        </div>
                    </div>
                    <div className="col-lg-4" onContextMenu={(event)=>{open_Context_Menu(event,id_Modal_2,index_Component)}}>
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
                <ModalComponent id_Modal={id_Modal_1} index_Component={index_Component}></ModalComponent>
                <SidebarWidget id_Modal={id_Modal_2} index_Component={index_Component}></SidebarWidget>
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
            <div className='mb-3'>
                <div className="row mb-3">
                    <div className="col-6">
                        <a onClick={()=>{open_Modal("Add_Content",window.scrollY)}} className="col btn btn-success btn-circle">افزودن</a>
                    </div>
                    <h4 className='rtl text-right col mt-1'>محتوای بلاگ:</h4>
                </div>
            <ul className="list-group list-group-horizontal">
                <li className="list-group-item col-2 btn">نوع</li>
                <li className="list-group-item col-6 btn">محتوا</li>
                <li className="list-group-item col-2 btn">رنگ</li>
                <li className="list-group-item col-2 btn">حذف</li>
            </ul>
                {data.components[index_Component].id_1.map((item, index) =>
                    {if(item.name == "Title"){
                        return(
                            <ul key={index} className="list-group list-group-horizontal m-1">
                                <li className="list-group-item col-2 btn">تیتر</li>
                                <li className="list-group-item col-6 btn p-0"><input type="text"className='p-0 mt-2 m-0 text-right col-12' style={{"border":"0px"}} value={item["text"]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_1",index,"text"],event.target.value,"change")}}/></li>
                                <li className="list-group-item col-2 btn p-0"><input type="color" className="form-control form-control-color col-12 mt-1" style={{"border":"0px"}} id="exampleColorInput" value={item["color"]} title="Choose your color" onChange={(event)=>{changeValue_Data(["components",index_Component,"id_1",index,"color"],event.target.value,"change")}}/></li>
                                <li className="list-group-item col-2 btn text-white bg-danger" onClick={(event)=>{changeValue_Data(["components",index_Component,"id_1"],null,"delete",index)}}>حذف</li>
                            </ul> 
                        );
                    }else if(item.name == "Text"){
                        return(
                            <ul key={index} className="list-group list-group-horizontal m-1">
                                <li className="list-group-item col-2 btn">متن</li>
                                <li className="list-group-item col-6 btn p-0"><input type="text"className='p-0 mt-2 m-0 text-right col-12' style={{"border":"0px"}} value={item["text"]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_1",index,"text"],event.target.value,"change")}}/></li>
                                <li className="list-group-item col-2 btn p-0"><input type="color" className="form-control form-control-color col-12 mt-1" style={{"border":"0px"}} id="exampleColorInput" value={item["color"]} title="Choose your color" onChange={(event)=>{changeValue_Data(["components",index_Component,"id_1",index,"color"],event.target.value,"change")}}/></li>
                                <li className="list-group-item col-2 btn text-white bg-danger" onClick={(event)=>{changeValue_Data(["components",index_Component,"id_1"],null,"delete",index)}}>حذف</li>
                            </ul> 
                        );
                    }
                    else if(item.name == "Tip"){
                        return(
                            <ul key={index} className="list-group list-group-horizontal m-1">
                                <li className="list-group-item col-2 btn">نکته</li>
                                <li className="list-group-item col-6 btn p-0"><input type="text"className='p-0 mt-2 m-0 text-right col-12' style={{"border":"0px"}} value={item["text"]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_1",index,"text"],event.target.value,"change")}}/></li>
                                <li className="list-group-item col-2 btn p-0"><input type="color" className="form-control form-control-color col-12 mt-1" style={{"border":"0px"}} id="exampleColorInput" value={item["color"]} title="Choose your color" onChange={(event)=>{changeValue_Data(["components",index_Component,"id_1",index,"color"],event.target.value,"change")}}/></li>
                                <li className="list-group-item col-2 btn text-white bg-danger" onClick={(event)=>{changeValue_Data(["components",index_Component,"id_1"],null,"delete",index)}}>حذف</li>
                            </ul>  
                        );
                    }
                    else if(item.name == "Image"){
                        return(
                            <ul key={index} className="list-group list-group-horizontal m-1">
                                <li className="list-group-item col-2 btn">عکس</li>
                                <li className="list-group-item col-6 btn"onClick={()=> {open_Modal("list_image",window.scrollY,["components",index_Component,"id_1",index,"url"])}}>تغییر عکس</li>
                                <li className="list-group-item col-2 btn p-0"></li>
                                <li className="list-group-item col-2 btn text-white bg-danger" onClick={(event)=>{changeValue_Data(["components",index_Component,"id_1"],null,"delete",index)}}>حذف</li>
                            </ul>  
                        );
                    }
                }
                )}
                <hr />
                <div className="mb-3">
                    <div className="row mb-3">
                        <div className="col-6">
                            <a onClick={(event)=>{changeValue_Data(["components",index_Component,"id_2"],"تگ","add")}} className="col btn btn-success btn-circle">افزودن</a>
                        </div>
                        <h4 className='rtl text-right col mt-1'>تگ های مرتبط:</h4>
                    </div>
                        <ul className="list-group list-group-horizontal">
                            <li className="list-group-item col-2 btn">#</li>
                            <li className="list-group-item col-8 btn">متن</li>
                            <li className="list-group-item col-2 btn">حذف</li>
                        </ul> 
                    {data.components[index_Component].id_2.map((item, index) =>
                        <ul key={index} className="list-group list-group-horizontal m-1">
                            <li className="list-group-item col-2 btn">{index + 1}</li>
                            <li className="list-group-item col-8 btn p-0"><input type="text"className='p-0 mt-2 m-0 text-right col-12' style={{"border":"0px"}} value={item} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_2",index],event.target.value,"change")}}/></li>
                            <li className="list-group-item col-2 btn text-white bg-danger" onClick={(event)=>{changeValue_Data(["components",index_Component,"id_2"],null,"delete",index)}}>حذف</li>
                        </ul> 
                    )}
                </div>
            </div>
            <hr />
            <div className="mb-3">
                <ul className="list-group list-group-horizontal m-1">
                    <li className="list-group-item col-6 btn">متن صفحه بعد</li>
                    <li className="list-group-item col-6 btn">لینک صفحه بعد</li>
                </ul> 
                <ul className="list-group list-group-horizontal m-1">
                    <li className="list-group-item col-6 btn p-0"><input type="text"className='p-0 mt-2 m-0 text-center col-12' style={{"border":"0px"}} value={data.components[index_Component].id_3[0]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_3",0],event.target.value,"change")}}/></li>
                    <li className="list-group-item col-6 btn p-0"><input type="text"className='p-0 mt-2 m-0 text-center col-12' style={{"border":"0px"}} value={data.components[index_Component].id_3[1]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_3",1],event.target.value,"change")}}/></li>
                </ul> 
            </div>
            <div className="mb-3">
                <ul className="list-group list-group-horizontal m-1">
                    <li className="list-group-item col-6 btn">متن صفحه قبل</li>
                    <li className="list-group-item col-6 btn">لینک صفحه قبل</li>
                </ul>
                <ul className="list-group list-group-horizontal m-1">
                    <li className="list-group-item col-6 btn p-0"><input type="text"className='p-0 mt-2 m-0 text-center col-12' style={{"border":"0px"}} value={data.components[index_Component].id_4[0]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_4",0],event.target.value,"change")}}/></li>
                    <li className="list-group-item col-6 btn p-0"><input type="text"className='p-0 mt-2 m-0 text-center col-12' style={{"border":"0px"}} value={data.components[index_Component].id_4[1]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_4",1],event.target.value,"change")}}/></li>
                </ul> 
            </div>
            <hr />
        <div className="mb-3 row">
            <div className="col-6">
            {data.components[index_Component].id_5[0] ? (
            <button className='btn btn-primary' onClick={()=> {open_Modal("list_image",window.scrollY,["components",index_Component,"id_5",1])}}>تغییر آواتار</button>
            ):(
                <></>
            )}
            </div>
            <div className="col-6 text-right row">
            <input type="checkbox" className="form-control col" placeholder="..." checked={data.components[index_Component].id_5[0]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_5",0],event.target.checked,"change")}}/>
                <p className='col-8 pt-2 rtl font-weight-bold text-dark'>درباره نویسنده:</p>
            </div>
        </div>

            {data.components[index_Component].id_5[0] ? (
                <>
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
            <hr />
            <div className="mb-3 row">
                <div className="col-6 text-center">
                </div>
                <div className="col-6 text-right row">
                <input type="checkbox" className="form-control col" placeholder="..." checked={data.components[index_Component].id_8} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_8"],event.target.checked,"change")}}/>
                    <p className='col-8 pt-2 rtl font-weight-bold text-dark'>کامنت:</p>
                </div>
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

const AddContent = ({index_Component}) => {
    const { data, isModalOpen, close_Modal,add_Modal,open_Modal,changeValue_Data } = useContext(DataContext);
    const id_Modal = "Add_Content";
    const add_item_title = {
        "name": "Title",
        "text": "\u0639\u0646\u0648\u0627\u0646 \u0645\u062a\u0646 \u0627\u0646\u062a\u062e\u0627\u0628\u06cc",
        "color": "#00000",
        "size": 50
    };
    const add_item_text = {
        "name": "Text",
        "text": "\u0644\u0648\u0631\u0645 \u0627\u06cc\u067e\u0633\u0648\u0645 \u0645\u062a\u0646 \u0633\u0627\u062e\u062a\u06af\u06cc \u0628\u0627 \u062a\u0648\u0644\u06cc\u062f \u0633\u0627\u062f\u06af\u06cc \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062a \u0686\u0627\u067e \u0648 \u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0637\u0631\u0627\u062d\u0627\u0646 \u06af\u0631\u0627\u0641\u06cc\u06a9 \u0627\u0633\u062a. \u0686\u0627\u067e\u06af\u0631\u0647\u0627 \u0648 \u0645\u062a\u0648\u0646 \u0628\u0644\u06a9\u0647 \u0631\u0648\u0632\u0646\u0627\u0645\u0647 \u0648 \u0645\u062c\u0644\u0647 \u062f\u0631 \u0633\u062a\u0648\u0646 \u0648 \u0633\u0637\u0631\u0622\u0646\u0686\u0646\u0627\u0646 \u06a9\u0647 \u0644\u0627\u0632\u0645 \u0627\u0633\u062a \u0648 \u0628\u0631\u0627\u06cc \u0634\u0631\u0627\u06cc\u0637 \u0641\u0639\u0644\u06cc \u062a\u06a9\u0646\u0648\u0644\u0648\u0698\u06cc \u0645\u0648\u0631\u062f \u0646\u06cc\u0627\u0632 \u0648 \u06a9\u0627\u0631\u0628\u0631\u062f\u0647\u0627\u06cc \u0645\u062a\u0646\u0648\u0639 \u0628\u0627 \u0647\u062f\u0641 \u0628\u0647\u0628\u0648\u062f \u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06cc \u06a9\u0627\u0631\u0628\u0631\u062f\u06cc \u0645\u06cc \u0628\u0627\u0634\u062f.",
        "color": "#7b91a4"
    };
    const add_item_tip = {
        "name": "Tip",
        "text": "\u0644\u0648\u0631\u0645 \u0627\u06cc\u067e\u0633\u0648\u0645 \u0645\u062a\u0646 \u0633\u0627\u062e\u062a\u06af\u06cc \u0628\u0627 \u062a\u0648\u0644\u06cc\u062f \u0633\u0627\u062f\u06af\u06cc \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062a \u0686\u0627\u067e \u0648 \u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0637\u0631\u0627\u062d\u0627\u0646 \u06af\u0631\u0627\u0641\u06cc\u06a9 \u0627\u0633\u062a.",
        "color": "#758ca0"
    };
    const add_item_image = {
        "name": "Image",
        "url": "\/assets\/images\/head_3.png"
    };
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
                <li className="list-group-item btn" onClick={(event)=>{changeValue_Data(["components",index_Component,"id_1"],add_item_title,"add")}}>افزودن تیتر</li>
                <li className="list-group-item btn" onClick={(event)=>{changeValue_Data(["components",index_Component,"id_1"],add_item_text,"add")}}>افزودن متن</li>
                <li className="list-group-item btn" onClick={(event)=>{changeValue_Data(["components",index_Component,"id_1"],add_item_tip,"add")}}>افزودن نکته</li>
                <li className="list-group-item btn" onClick={(event)=>{changeValue_Data(["components",index_Component,"id_1"],add_item_image,"add")}}>افزودن تصویر</li>
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
const SidebarWidget = ({id_Modal,index_Component}) => {
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
                </div>
                <div className="col-6 text-right row">
                <input type="checkbox" className="form-control col" placeholder="..." checked={data.components[index_Component].id_8} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_8"],event.target.checked,"change")}}/>
                    <p className='col-8 pt-2 rtl font-weight-bold text-dark'>جستجو:</p>
                </div>
            </div>
            <div className='mb-3'>
                <div className="row mb-3">
                    <div className="col-6">
                        <a onClick={()=>{open_Modal("Add_Content",window.scrollY)}} className="col btn btn-success btn-circle">افزودن</a>
                    </div>
                    <h4 className='rtl text-right col mt-1'>محتوای بلاگ:</h4>
                </div>
            <ul className="list-group list-group-horizontal">
                <li className="list-group-item col-2 btn">نوع</li>
                <li className="list-group-item col-6 btn">محتوا</li>
                <li className="list-group-item col-2 btn">رنگ</li>
                <li className="list-group-item col-2 btn">حذف</li>
            </ul>
                {data.components[index_Component].id_1.map((item, index) =>
                    {if(item.name == "Title"){
                        return(
                            <ul key={index} className="list-group list-group-horizontal m-1">
                                <li className="list-group-item col-2 btn">تیتر</li>
                                <li className="list-group-item col-6 btn p-0"><input type="text"className='p-0 mt-2 m-0 text-right col-12' style={{"border":"0px"}} value={item["text"]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_1",index,"text"],event.target.value,"change")}}/></li>
                                <li className="list-group-item col-2 btn p-0"><input type="color" className="form-control form-control-color col-12 mt-1" style={{"border":"0px"}} id="exampleColorInput" value={item["color"]} title="Choose your color" onChange={(event)=>{changeValue_Data(["components",index_Component,"id_1",index,"color"],event.target.value,"change")}}/></li>
                                <li className="list-group-item col-2 btn text-white bg-danger" onClick={(event)=>{changeValue_Data(["components",index_Component,"id_1"],null,"delete",index)}}>حذف</li>
                            </ul> 
                        );
                    }else if(item.name == "Text"){
                        return(
                            <ul key={index} className="list-group list-group-horizontal m-1">
                                <li className="list-group-item col-2 btn">متن</li>
                                <li className="list-group-item col-6 btn p-0"><input type="text"className='p-0 mt-2 m-0 text-right col-12' style={{"border":"0px"}} value={item["text"]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_1",index,"text"],event.target.value,"change")}}/></li>
                                <li className="list-group-item col-2 btn p-0"><input type="color" className="form-control form-control-color col-12 mt-1" style={{"border":"0px"}} id="exampleColorInput" value={item["color"]} title="Choose your color" onChange={(event)=>{changeValue_Data(["components",index_Component,"id_1",index,"color"],event.target.value,"change")}}/></li>
                                <li className="list-group-item col-2 btn text-white bg-danger" onClick={(event)=>{changeValue_Data(["components",index_Component,"id_1"],null,"delete",index)}}>حذف</li>
                            </ul> 
                        );
                    }
                    else if(item.name == "Tip"){
                        return(
                            <ul key={index} className="list-group list-group-horizontal m-1">
                                <li className="list-group-item col-2 btn">نکته</li>
                                <li className="list-group-item col-6 btn p-0"><input type="text"className='p-0 mt-2 m-0 text-right col-12' style={{"border":"0px"}} value={item["text"]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_1",index,"text"],event.target.value,"change")}}/></li>
                                <li className="list-group-item col-2 btn p-0"><input type="color" className="form-control form-control-color col-12 mt-1" style={{"border":"0px"}} id="exampleColorInput" value={item["color"]} title="Choose your color" onChange={(event)=>{changeValue_Data(["components",index_Component,"id_1",index,"color"],event.target.value,"change")}}/></li>
                                <li className="list-group-item col-2 btn text-white bg-danger" onClick={(event)=>{changeValue_Data(["components",index_Component,"id_1"],null,"delete",index)}}>حذف</li>
                            </ul>  
                        );
                    }
                    else if(item.name == "Image"){
                        return(
                            <ul key={index} className="list-group list-group-horizontal m-1">
                                <li className="list-group-item col-2 btn">عکس</li>
                                <li className="list-group-item col-6 btn"onClick={()=> {open_Modal("list_image",window.scrollY,["components",index_Component,"id_1",index,"url"])}}>تغییر عکس</li>
                                <li className="list-group-item col-2 btn p-0"></li>
                                <li className="list-group-item col-2 btn text-white bg-danger" onClick={(event)=>{changeValue_Data(["components",index_Component,"id_1"],null,"delete",index)}}>حذف</li>
                            </ul>  
                        );
                    }
                }
                )}
                <hr />
                <div className="mb-3">
                    <div className="row mb-3">
                        <div className="col-6">
                            <a onClick={(event)=>{changeValue_Data(["components",index_Component,"id_2"],"تگ","add")}} className="col btn btn-success btn-circle">افزودن</a>
                        </div>
                        <h4 className='rtl text-right col mt-1'>تگ های مرتبط:</h4>
                    </div>
                        <ul className="list-group list-group-horizontal">
                            <li className="list-group-item col-2 btn">#</li>
                            <li className="list-group-item col-8 btn">متن</li>
                            <li className="list-group-item col-2 btn">حذف</li>
                        </ul> 
                    {data.components[index_Component].id_2.map((item, index) =>
                        <ul key={index} className="list-group list-group-horizontal m-1">
                            <li className="list-group-item col-2 btn">{index + 1}</li>
                            <li className="list-group-item col-8 btn p-0"><input type="text"className='p-0 mt-2 m-0 text-right col-12' style={{"border":"0px"}} value={item} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_2",index],event.target.value,"change")}}/></li>
                            <li className="list-group-item col-2 btn text-white bg-danger" onClick={(event)=>{changeValue_Data(["components",index_Component,"id_2"],null,"delete",index)}}>حذف</li>
                        </ul> 
                    )}
                </div>
            </div>
            <hr />
            <div className="mb-3">
                <ul className="list-group list-group-horizontal m-1">
                    <li className="list-group-item col-6 btn">متن صفحه بعد</li>
                    <li className="list-group-item col-6 btn">لینک صفحه بعد</li>
                </ul> 
                <ul className="list-group list-group-horizontal m-1">
                    <li className="list-group-item col-6 btn p-0"><input type="text"className='p-0 mt-2 m-0 text-center col-12' style={{"border":"0px"}} value={data.components[index_Component].id_3[0]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_3",0],event.target.value,"change")}}/></li>
                    <li className="list-group-item col-6 btn p-0"><input type="text"className='p-0 mt-2 m-0 text-center col-12' style={{"border":"0px"}} value={data.components[index_Component].id_3[1]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_3",1],event.target.value,"change")}}/></li>
                </ul> 
            </div>
            <div className="mb-3">
                <ul className="list-group list-group-horizontal m-1">
                    <li className="list-group-item col-6 btn">متن صفحه قبل</li>
                    <li className="list-group-item col-6 btn">لینک صفحه قبل</li>
                </ul>
                <ul className="list-group list-group-horizontal m-1">
                    <li className="list-group-item col-6 btn p-0"><input type="text"className='p-0 mt-2 m-0 text-center col-12' style={{"border":"0px"}} value={data.components[index_Component].id_4[0]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_4",0],event.target.value,"change")}}/></li>
                    <li className="list-group-item col-6 btn p-0"><input type="text"className='p-0 mt-2 m-0 text-center col-12' style={{"border":"0px"}} value={data.components[index_Component].id_4[1]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_4",1],event.target.value,"change")}}/></li>
                </ul> 
            </div>
            <hr />
        <div className="mb-3 row">
            <div className="col-6">
            {data.components[index_Component].id_5[0] ? (
            <button className='btn btn-primary' onClick={()=> {open_Modal("list_image",window.scrollY,["components",index_Component,"id_5",1])}}>تغییر آواتار</button>
            ):(
                <></>
            )}
            </div>
            <div className="col-6 text-right row">
            <input type="checkbox" className="form-control col" placeholder="..." checked={data.components[index_Component].id_5[0]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_5",0],event.target.checked,"change")}}/>
                <p className='col-8 pt-2 rtl font-weight-bold text-dark'>درباره نویسنده:</p>
            </div>
        </div>

            {data.components[index_Component].id_5[0] ? (
                <>
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
            <hr />
            <div className="mb-3 row">
                <div className="col-6 text-center">
                </div>
                <div className="col-6 text-right row">
                <input type="checkbox" className="form-control col" placeholder="..." checked={data.components[index_Component].id_8} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_8"],event.target.checked,"change")}}/>
                    <p className='col-8 pt-2 rtl font-weight-bold text-dark'>کامنت:</p>
                </div>
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