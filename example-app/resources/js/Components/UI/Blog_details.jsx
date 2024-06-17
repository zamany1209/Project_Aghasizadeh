import React, { Component, useContext,useEffect,useState  } from 'react';
import { DataContext } from '@/Context/DataContext';
import { Modal, Button } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Swal from 'sweetalert2';

export default function blog_Details({ index_Component, name_Component,inputPlaceholder = "تاریخ را انتخاب کنید" }) {
    const { edit_text,url, token,data,open_Modal,open_Context_Menu,changeValue_Data} = useContext(DataContext);
    const id_Modal_1 = String(name_Component+"_"+index_Component);
    const id_Modal_2 = String(name_Component+"_SidebarWidget"+"_"+index_Component);
    const [selectedDate, setSelectedDate] = useState(null);
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
                        <LazyLoadImage src={url+"/assets/images/icon_1.png"} alt=""/>
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
                                    <button className='col-4 btn btn-primary m-1' onClick={()=> {open_Modal("list_image",window.scrollY,["components",index_Component,"id_1",index,"url"])}}>تغییر عکس</button>
                                    <input type='button'  className="form-control col-4 btn-danger m-1" value="حذف" onClick={()=>{changeValue_Data(["components",index_Component,"id_1",index],null,"delete",index)}}/>
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
                                        <li className='m-0 ml-1'><span><a className='p-1'>{data.components[index_Component].id_7} </a>
                                        <svg width="16" height="16" fill="currentColor" class="bi bi-calendar-week" viewBox="0 0 16 16">
                                            <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"/>
                                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
                                        </svg>
                                        </span></li>
                                        <li className='m-0 ml-3'><span><a className='p-1'>{data.components[index_Component].id_6} </a>
                                        <svg  width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                                        </svg>
                                        </span></li>
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
                                    <Comments index_Component={index_Component} name_Component={name_Component}></Comments>
                                </>
                            ):(
                                <></>
                            )}


                        </div>
                    </div>
                    <div className="col-lg-4" onContextMenu={(event)=>{open_Context_Menu(event,id_Modal_2,index_Component)}}>
                        <div className="sidebar-widget-area">
                        {data.components[index_Component].id_9? (
                            <Search></Search>
                        ):(<></>)}
                        {data.components[index_Component].id_10.id_1? (
                            <Instagram index_Component={index_Component}></Instagram>
                        ):(<></>)}
                        {data.components[index_Component].id_11.id_1? (
                            <Follow_us index_Component={index_Component}></Follow_us>
                        ):(<></>)}
                        {data.components[index_Component].id_12.id_1? (
                            <Feeds index_Component={index_Component}></Feeds>
                        ):(<></>)}
                        {data.components[index_Component].id_13.id_1? (
                            <Tags index_Component={index_Component}></Tags>
                        ):(<></>)}
                        {data.components[index_Component].id_14.id_1? (
                            <Banner index_Component={index_Component}></Banner>
                        ):(<></>)}
                        {token ? (
                            <>
                                <div className="col-12 mt-5">
                                    <a onClick={()=>{open_Modal(name_Component+"_SidebarWidget"+"_"+index_Component,window.scrollY)}} className="col btn btn-primary btn-circle p-3 m-1 mt-3">ویرایش</a>
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
const Comments = ({name_Component,index_Component}) => {
    const { data,url,state_admin,page_name,changeValue_Data,open_Modal} = useContext(DataContext);
    const id_Modal_Comments = String(name_Component+"_"+index_Component+"_comments");
    const [name,setName] = useState(null);
    const [email,setEmail] = useState(null);
    const [comment,setComment] = useState(null);
    const delete_comment = async (event,index,id)=>{
        event.preventDefault();
        try {
          const result = await Swal.fire({
            title: 'آیا این پیام حذف شود؟',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
          });
    
          if (result.isConfirmed) {
            
              try {
                const response = await axios.post(url+'/delete_comment', {
                    id
                });
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "پیام با موفقیت حذف شد",
                  showConfirmButton: false,
                  timer: 1500
                });
                await new Promise((resolve) => changeValue_Data(["comments"],null,"delete", index, resolve));
            } catch(error) {
                if (error.response && error.response.status === 409) {
                    Swal.fire({
                        position: "top-end",
                        icon: "error",
                        title: "متاسفانه پیام ارسال نشد",
                        showConfirmButton: false,
                        timer: 1800
                      });
                }
                if (error.response && error.response.status === 408) {
                    Swal.fire({
                        position: "top-end",
                        icon: "error",
                        title: "لطفا بعد از چند دقیقده دوباره تلاش کنید",
                        showConfirmButton: false,
                        timer: 1800
                      });
                }
              }
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            console.log('User did not agree.');
          }
        } catch (error) {
          console.error('Error showing dialog:', error);
        }
    }
    const Send_Comment = async (event)=>{
        event.preventDefault();
        try {
          const result = await Swal.fire({
            title: 'آیا این پیام ارسال شود؟',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
          });
    
          if (result.isConfirmed) {
            
              try {
                const response = await axios.post(url+'/send_comment', {
                    page_name,name,email,comment
                });
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "پیام ارسال شد",
                  showConfirmButton: false,
                  timer: 1500
                });
                close_Modal(id_Modal);
            } catch(error) {
                if (error.response && error.response.status === 409) {
                    Swal.fire({
                        position: "top-end",
                        icon: "error",
                        title: "متاسفانه پیام ارسال نشد",
                        showConfirmButton: false,
                        timer: 1800
                      });
                }
                if (error.response && error.response.status === 408) {
                    Swal.fire({
                        position: "top-end",
                        icon: "error",
                        title: "لطفا بعد از چند دقیقده دوباره تلاش کنید",
                        showConfirmButton: false,
                        timer: 1800
                      });
                }
              }
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            console.log('User did not agree.');
          }
        } catch (error) {
          console.error('Error showing dialog:', error);
        }
      }
    useEffect(() => {
    axios.post(url+'/get_comment',{page_name})
  .then(function (response) {
    changeValue_Data(["comments"],response.data.comments,"change");
  })
  .catch(function (error) {
  }); 
    }, []);
    return(
        <>
            <div className="comments-area mb-45">
                <h4 className="comments-title mb-35 text-right">نظرات</h4>
                <ul className="comments-list">
                {data.comments.map((item, index) =>
                    <li key={index} className="comment row">
                    <div className="comment-wrap col-8">
                        <div className="comment-author-content">
                            <span className="author-name p-2">
                            <span style={{float:"right"}}>{item.name}</span>
                                {state_admin ? (
                                    <span className="reply">
                                        <button className='m-1 p-1 rounded' onClick={()=>{open_Modal(id_Modal_Comments,window.scrollY,[index,item.id])}}> پاسخ </button>
                                        <button className='m-1 p-1 rounded text-danger' onClick={(event)=>{delete_comment(event,index,item.id)}}>حذف</button>
                                    </span>
                                ):(
                                    <span className="reply"></span>
                                )}
                                </span>
                                <p className="text-right">{item.comment}</p>
                            </div>
                        </div>
                        <div className="comment-avatar m-0 p-0 col-lg-2 col-md-2 col-sm-1">
                            <LazyLoadImage className='p-2' src={url+"/asset/img/user.svg"} alt=""/>
                        </div>
                {item.reply ?(
                    <>
                    <div className="comment-wrap col-7">
                        <div className="comment-author-content">
                        <span className="author-name p-2">
                        <span style={{float:"right"}}>ادمین</span>
                        <span className="reply"></span>
                            </span>
                            <p className="text-right">{item.reply}</p>
                        </div>
                    </div>
                    <div className="comment-avatar m-0 p-0 col-lg-2 col-md-2 col-sm-1">
                        <LazyLoadImage className='p-2 col-9' src={url+"/asset/img/admin.svg"} alt=""/>
                    </div>
                    </>
                ):(<></>)}
                    </li>
                )}
                </ul>
            </div>
            <div className="comments-respond">
                <h4 className="comments-heading mb-30 text-right">ارسال نظر</h4>
                <form>
                    <div className="form_group">
                        <textarea className="form_control text-right rtl" name="message" placeholder="لطفا متن خود را وارد کنید..." defaultValue={comment} onChange={(event)=>{setComment(event.target.value)}}></textarea>
                    </div>
                    <div className="form_group">
                        <input type="text" className="form_control text-right rtl" placeholder="لطفا نام خود را وارد کنید" name="name" value={name} onChange={(event)=>{setName(event.target.value)}}/>
                    </div>
                    <div className="form_group">
                        <input type="email" className="form_control text-right rtl" placeholder="لطفا ایمیل خود را وارد کنید" name="email" value={email} onChange={(event)=>{setEmail(event.target.value)}}/>
                    </div>
                    <div className="form_group">
                        <button className="main-btn" onClick={(event)=>{Send_Comment(event)}}>ارسال </button>
                    </div>
                </form>
            </div>
            <CommentWidget id_Modal={id_Modal_Comments} index_Component={index_Component}></CommentWidget>
        </>
    );
};
const CommentWidget = ({id_Modal,index_Component}) => {
    const { data,url, isModalOpen, close_Modal,add_Modal,open_Modal,changeValue_Data } = useContext(DataContext);
    const Edit_Reply_Comment = async (event)=>{
        event.preventDefault();
        try {
          const result = await Swal.fire({
            title: 'آیا این پیام ارسال شود؟',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
          });
    
          if (result.isConfirmed) {
            var id = data.comments[isModalOpen[id_Modal]?.value[0]]?.id;
            var reply = data.comments[isModalOpen[id_Modal]?.value[0]]?.reply;
            
              try {
                const response = await axios.post(url+'/edit_reply', {
                    id,reply
                });
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "پیام ارسال شد",
                  showConfirmButton: false,
                  timer: 1500
                });
                close_Modal(id_Modal);
            } catch(error) {
                if (error.response && error.response.status === 409) {
                    alert(error.response.data.message);
                }
              }
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            console.log('User did not agree.');
          }
        } catch (error) {
          console.error('Error showing dialog:', error);
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
        <Modal.Header closeButton>
          <Modal.Title>ارسال پاسخ</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {isModalOpen && isModalOpen[id_Modal] && isModalOpen[id_Modal].value && isModalOpen[id_Modal].value[1] && data.comments[isModalOpen[id_Modal].value[0]] && (
                <div className="mb-3 rtl text-right">
                    <label htmlFor="formGroupExampleInput2">پیام شما</label>
                    <input type='text' id='formGroupExampleInput2'  className="form-control col-9 rtl text-right mr-3" placeholder='..' value={data.comments[isModalOpen[id_Modal]?.value[0]]?.reply} onChange={(event)=>{changeValue_Data(["comments",isModalOpen[id_Modal]?.value[0],"reply"],event.target.value,"change")}}/>
                </div>
            )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>{close_Modal(id_Modal)}}>
            خروج
          </Button>
          <Button variant="success" onClick={(event)=>{Edit_Reply_Comment(event)}}>
            ذخیره
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    );
};
const Banner = ({index_Component}) => {
    const { url,data } = useContext(DataContext);
    return(
        <div className="widget add_widget mb-40">
            <div className="add_widget_img " style={{"background":"url("+url+data.components[index_Component].id_14.id_6+") no-repeat",'--overlay-color':data.components[index_Component].id_14.id_8}}>
                <div className="add_widget_text">
                    <span></span>
                    <h2 className='m-0' style={{"color":data.components[index_Component].id_14.id_9}}>{data.components[index_Component].id_14.id_2}</h2>
                    <h2 style={{"color":data.components[index_Component].id_14.id_9}}>{data.components[index_Component].id_14.id_3}</h2>
                    <a href={data.components[index_Component].id_14.id_5} className="main-btn" style={{"backgroundColor":data.components[index_Component].id_14.id_7,"color":data.components[index_Component].id_14.id_9}}>{data.components[index_Component].id_14.id_4}</a>
                </div>
            </div>
        </div>
    );
};
const Tags = ({index_Component}) => {
    const { url,data } = useContext(DataContext);
    return(
        <div className="widget tag-cloud-widget mb-40 text-right">
            <h4 className="widget-title text-left">برچسب ها</h4>
            {data.components[index_Component].id_13.id_2.map((item, index) =>
            <a key={index} href="#" className="tag_1">{item}</a>
            )}
        </div>
    );
};
const Feeds = ({index_Component}) => {
    const { url,data } = useContext(DataContext);
    return(
        <div className="widget recent-post-widget mb-40">
            <h4 className="widget-title">{data.components[index_Component].id_12.name}</h4>
            <ul className="recent-post-list">
            {data.components[index_Component].id_12.id_2.map((item, index) =>
                <li key={index} className="post-thumbnail-content rtl text-right">
                    <LazyLoadImage src={url+item[2]} className="img-fluid m-0 ml-3 rounded " alt=""/>
                    <div className="post-title-date">
                        <h6><a href={item[3]}>{item[0]}</a></h6>
                        <span className="posted-on"><a href={item[3]}>{item[1]}</a></span>
                    </div>
                </li>
            )}
            </ul>
        </div>
    );
};
const Follow_us = ({index_Component}) => {
    const { url,data } = useContext(DataContext);
    return(
        <div className="widget social-widget mb-40">
            <h4 className="widget-title">{data.components[index_Component].id_11.name}</h4>
            <ul className="social-link text-center">
                {data.components[index_Component].id_11.id_2[0]? (
                    <li>
                        <a style={{"border":"0px","fill":data.components[index_Component].id_11.id_7}} href={data.components[index_Component].id_11.id_2[2]}>
                            <svg  viewBox="0 0 3584.55 3673.6">
                            <g id="Isolation_Mode" data-name="Isolation Mode">
                                <path d="M1071.43,2.75H2607.66C3171,2.75,3631.82,462.91,3631.82,1026.2v493.93c-505,227-1014.43,1348.12-1756.93,1104.51-61.16,43.46-202.11,222.55-212,358.43-257.11-34.24-553.52-328.88-517.95-646.62C717,2026.91,1070.39,1455.5,1409.74,1225.51c727.32-492.94,1737.05-69,1175.39,283.45-341.52,214.31-1071.84,355.88-995.91-170.24-200.34,57.78-328.58,431.34-87.37,626-223.45,219.53-180.49,623.07,58.36,755.57,241.56-625.87,1082.31-544.08,1422-1291.2,255.57-562-123.34-1202.37-880.91-1104C1529.56,399.34,993.64,881.63,725.62,1453.64,453.68,2034,494.15,2811.15,1052.55,3202.82c657.15,460.92,1356.78,34.13,1780.52-523.68,249.77-328.78,468-693,798.75-903.37v875.72c0,563.28-460.88,1024.86-1024.16,1024.86H1071.43c-563.29,0-1024.16-460.87-1024.16-1024.16V1026.9C47.27,463.61,508.14,2.74,1071.43,2.74Z" transform="translate(-47.27 -2.74)" fillRule="evenodd"/>
                            </g>
                            </svg>
                        </a>
                    </li>
                ):(<></>)}
                {data.components[index_Component].id_11.id_3[0]? (
                    <li>
                        <a style={{"border":"0px","fill":data.components[index_Component].id_11.id_7}} href={data.components[index_Component].id_11.id_3[2]}>
                        <svg  viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                        </a>
                    </li>
                ):(<></>)}
                {data.components[index_Component].id_11.id_4[0]? (
                    <li>
                        <a style={{"border":"0px","fill":data.components[index_Component].id_11.id_7}} href={data.components[index_Component].id_11.id_4[2]}>
                        <svg  viewBox="0 0 448 512"><path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"/></svg>
                        </a>
                    </li>
                ):(<></>)}
                {data.components[index_Component].id_11.id_5[0]? (
                    <li>
                        <a style={{"border":"0px","fill":data.components[index_Component].id_11.id_7}} href={data.components[index_Component].id_11.id_5[2]}>
                        <svg viewBox="0 0 32 32"><path clipRule="evenodd" d="m5 0h22c2.7614 0 5 2.23858 5 5v22c0 2.7614-2.2386 5-5 5h-22c-2.76142 0-5-2.2386-5-5v-22c0-2.76142 2.23858-5 5-5zm11.6919 12.0074c-1.433.596-4.297 1.8297-8.59198 3.7009-.69744.2773-1.06278.5487-1.09604.814-.05621.4483.50527.6249 1.26986.8653.104.0327.21176.0666.32224.1025.75224.2445 1.76412.5306 2.29022.542.4771.0103 1.0097-.1864 1.5977-.5902 4.0129-2.7088 6.0844-4.078 6.2144-4.1075.0918-.0208.2189-.047.3051.0295.0861.0766.0777.2216.0685.2605-.0556.2371-2.2596 2.2862-3.4002 3.3466-.3556.3305-.6078.565-.6593.6186-.1155.12-.2333.2334-.3464.3425-.6988.6737-1.2229 1.1789.029 2.0039.6017.3965 1.0831.7243 1.5634 1.0514.5245.3572 1.0476.7135 1.7245 1.1572.1725.113.3372.2304.4976.3448.6104.4352 1.1588.8261 1.8363.7638.3937-.0362.8004-.4064 1.0069-1.5105.4881-2.6092 1.4475-8.2626 1.6692-10.5922.0194-.2041-.005-.4654-.0246-.58-.0197-.1147-.0607-.2781-.2097-.399-.1766-.1432-.4491-.17345-.5709-.1714-.5542.0099-1.4043.3055-5.4958 2.0073z" fillRule="evenodd"/></svg>
                        </a>
                    </li>
                ):(<></>)}
                {data.components[index_Component].id_11.id_6[0]? (
                    <li>
                        <a style={{"border":"0px","fill":data.components[index_Component].id_11.id_7}} href={data.components[index_Component].id_11.id_6[2]}>
                        <svg shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 509.64"><rect width="512" height="509.64" rx="115.61" ry="115.61"/><path fill="#fff" fillRule="nonzero" d="M323.74 148.35h36.12l-78.91 90.2 92.83 122.73h-72.69l-56.93-74.43-65.15 74.43h-36.14l84.4-96.47-89.05-116.46h74.53l51.46 68.04 59.53-68.04zm-12.68 191.31h20.02l-129.2-170.82H180.4l130.66 170.82z"/></svg>
                        </a>
                    </li>
                ):(<></>)}
            </ul>
        </div>
    );
};
const Instagram = ({index_Component}) => {
    const { url,data } = useContext(DataContext);
    return(
        <div className="widget instagram-widget mb-40">
            <h4 className="widget-title">{data.components[index_Component].id_10.name}</h4>
            <div className="row">
                {data.components[index_Component].id_10.id_2.map((item, index) =>
                    <div key={index} className="col-lg-4 col-md-4 col-sm-4 col-6 ins_pa">
                        <div className="insta_img d-flex justify-content-center">
                            <a href={url+item[1]}>
                                <LazyLoadImage src={url+item[0]} className="img-fluid" alt=""/>
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
const Search = () => {
    return(
        <div className="widget search-widget mb-40">
        <h4 className="widget-title">جستجو</h4>
        <form>
            <div className="form_group">
                <input type="search" className="form_control" placeholder="متن خود را وارد کنید...."/>
                <button className="search_btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>
                </button>
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
        <div className='mb-3 rtl text-right row'>
            <div className="col-6">
                <label htmlFor="formGroupExampleInput2">نویسنده</label>
                <input type="text" id='formGroupExampleInput2' className="form-control col" placeholder="..." value={data.components[index_Component].id_6} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_6"],event.target.value,"change")}}/>
            </div>
            <div className="col-6">
                <label htmlFor="formGroupExampleInput2">تاریخ</label>
                <input type="text" id='formGroupExampleInput2' className="form-control col" placeholder="..." value={data.components[index_Component].id_7} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_7"],event.target.value,"change")}}/>
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
                    <div className="mb-3 text-right">
                        <label htmlFor="formGroupExampleInput" className="form-label">عنوان</label>
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="..." value={data.components[index_Component].id_5[2]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_5",2],event.target.value,"change")}}/>
                    </div>
                    <div className="mb-3 text-right">
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
    const add_item_instagram =["/assets/images/blog/insta_1.jpg","#"];
    const add_item_feeds = ["عنوان پیش فرض خبر شما","1403/2/1","/assets/images/blog/feed_3.jpg","#"];
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
                <input type="checkbox" className="form-control col" placeholder="..." checked={data.components[index_Component].id_9} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_9"],event.target.checked,"change")}}/>
                    <p className='col-8 pt-2 rtl font-weight-bold text-dark'>جستجو:</p>
                </div>
        </div>
        <hr />
        <div className="mb-3 row">
                <div className="col-4 text-center">
                {data.components[index_Component].id_10.id_1? (
                    <input type='text'  className="form-control col-12 rtl text-right" placeholder='..' value={data.components[index_Component].id_10.name} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_10","name"],event.target.value,"change")}}/>
                ):(<></>)}
                </div>
                <div className="col-8 text-right row">
                <input type="checkbox" className="form-control col" placeholder="..." checked={data.components[index_Component].id_10.id_1} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_10","id_1"],event.target.checked,"change")}}/>
                    <p className='col-8 pt-2 rtl font-weight-bold text-dark'>ویجت تبلیغاتی یک:</p>
                </div>
            </div>
            {data.components[index_Component].id_10.id_1? (
                    <div className="col-12 p-0">
                    <div className="col-12 mb-2">
                        <div className="row">
                          <div className="col-8">
                            لینک
                          </div>
                          <div className="col-2">
                            عکس
                          </div>
                          <div className="col-2">
                            خذف
                          </div>
                        </div>
                    </div>
                      {data.components[index_Component].id_10.id_2.map((item, index) =>
                      <div key={index} className="col-12 mb-2">
                        <div className="row">
                          <input type='text'  className="form-control col-8" placeholder='..' value={item[1]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_10","id_2",index,1],event.target.value,"change")}}/>
                          <input type='button'  className="form-control col-2 btn-primary" value="تغییر" onClick={()=>{open_Modal("list_image",window.scrollY,["components",index_Component,"id_10","id_2",index,0])}}/>
                          <input type='button'  className="form-control col-2 btn-danger" value="حذف" onClick={()=>{changeValue_Data(["components",index_Component,"id_10","id_2"],null,"delete",index)}}/>
                        </div>
                      </div>
                      )}
                      <div className="col-4">
                      <input type='button'  className="form-control col-12 btn-success" value="افزودن" onClick={()=>{changeValue_Data(["components",index_Component,"id_10","id_2"],add_item_instagram,"add",null)}}/>
                      </div>
                    </div>
            ):(<></>)}
            <hr />
            <div className='mb-3 row'>
                <div className="col-4 text-center">
                </div>
                <div className="col-8 text-right row">
                <input type="checkbox" className="form-control col" placeholder="..." checked={data.components[index_Component].id_11.id_1} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_11","id_1"],event.target.checked,"change")}}/>
                    <p className='col-8 pt-2 rtl font-weight-bold text-dark'>شبکه های اجتماعی:</p>
                </div>
            </div>
            {data.components[index_Component].id_11.id_1? (
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
                          <input type='text'  className="form-control col-6" placeholder='..' value={data.components[index_Component].id_11.id_2[2]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_11","id_2",2],event.target.value,"change")}}/>
                          <input type="checkbox" className="form-control col-2" placeholder="..." checked={data.components[index_Component].id_11.id_2[0]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_11","id_2",0],event.target.checked,"change")}}/>
                          <p className='col-4 text-center'>{data.components[index_Component].id_11.id_2[1]}</p>
                        </div>
                      </div>

                      <div className="col-12 mb-2">
                        <div className="row">
                          <input type='text'  className="form-control col-6" placeholder='..' value={data.components[index_Component].id_11.id_3[2]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_11","id_3",2],event.target.value,"change")}}/>
                          <input type="checkbox" className="form-control col-2" placeholder="..." checked={data.components[index_Component].id_11.id_3[0]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_11","id_3",0],event.target.checked,"change")}}/>
                          <p className='col-4 text-center'>{data.components[index_Component].id_11.id_3[1]}</p>
                        </div>
                      </div>

                      <div className="col-12 mb-2">
                        <div className="row">
                          <input type='text'  className="form-control col-6" placeholder='..' value={data.components[index_Component].id_11.id_4[2]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_11","id_4",2],event.target.value,"change")}}/>
                          <input type="checkbox" className="form-control col-2" placeholder="..." checked={data.components[index_Component].id_11.id_4[0]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_11","id_4",0],event.target.checked,"change")}}/>
                          <p className='col-4 text-center'>{data.components[index_Component].id_11.id_4[1]}</p>
                        </div>
                      </div>

                      <div className="col-12 mb-2">
                        <div className="row">
                          <input type='text'  className="form-control col-6" placeholder='..' value={data.components[index_Component].id_11.id_5[2]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_11","id_5",2],event.target.value,"change")}}/>
                          <input type="checkbox" className="form-control col-2" placeholder="..." checked={data.components[index_Component].id_11.id_5[0]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_11","id_5",0],event.target.checked,"change")}}/>
                          <p className='col-4 text-center'>{data.components[index_Component].id_11.id_5[1]}</p>
                        </div>
                      </div>

                      <div className="col-12 mb-2">
                        <div className="row">
                          <input type='text'  className="form-control col-6" placeholder='..' value={data.components[index_Component].id_11.id_6[2]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_11","id_6",2],event.target.value,"change")}}/>
                          <input type="checkbox" className="form-control col-2" placeholder="..." checked={data.components[index_Component].id_11.id_6[0]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_11","id_6",0],event.target.checked,"change")}}/>
                          <p className='col-4 text-center'>{data.components[index_Component].id_11.id_6[1]}</p>
                        </div>
                      </div>

                    </div>
            ):(<></>)}
            <hr />
            <div className='mb-3 row'>
                <div className="col-4 text-center">
                </div>
                <div className="col-8 text-right row">
                <input type="checkbox" className="form-control col" placeholder="..." checked={data.components[index_Component].id_12.id_1} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_12","id_1"],event.target.checked,"change")}}/>
                    <p className='col-8 pt-2 rtl font-weight-bold text-dark'>اخبار:</p>
                </div>
            </div>
            {data.components[index_Component].id_12.id_1? (
                    <div className="col-12 p-0">
                    <div className="col-12 mb-2">
                        <div className="row">
                          <div className="col-3">
                            لینک
                          </div>
                          <div className="col-3">
                            عنوان
                          </div>
                          <div className="col-2">
                            تاریخ         
                          </div>
                          <div className="col-2">
                            عکس         
                          </div>
                          <div className="col-2">
                            خذف
                          </div>
                        </div>
                    </div>
                      {data.components[index_Component].id_12.id_2.map((item, index) =>
                      <div key={index} className="col-12 mb-2">
                        <div className="row">
                          <input type='text'  className="form-control col-3" placeholder='..' value={item[3]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_12","id_2",index,3],event.target.value,"change")}}/>
                          <input type='text'  className="form-control col-3" placeholder='..' value={item[0]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_12","id_2",index,0],event.target.value,"change")}}/>
                          <input type='text'  className="form-control col-2" placeholder='..' value={item[1]} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_12","id_2",index,1],event.target.value,"change")}}/>
                          <input type='button'  className="form-control col-2 btn-primary" value="تغییر" onClick={()=>{open_Modal("list_image",window.scrollY,["components",index_Component,"id_12","id_2",index,2])}}/>
                          <input type='button'  className="form-control col-2 btn-danger" value="حذف" onClick={()=>{changeValue_Data(["components",index_Component,"id_12","id_2"],null,"delete",index)}}/>
                        </div>
                      </div>
                      )}
                      <div className="col-4">
                      <input type='button'  className="form-control col-12 btn-success" value="افزودن" onClick={()=>{changeValue_Data(["components",index_Component,"id_12","id_2"],add_item_feeds,"add",null)}}/>
                      </div>
                    </div>
            ):(<></>)}
            <hr />
            <div className='mb-3 row'>
                <div className="col-4 text-center">
                </div>
                <div className="col-8 text-right row">
                <input type="checkbox" className="form-control col" placeholder="..." checked={data.components[index_Component].id_13.id_1} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_13","id_1"],event.target.checked,"change")}}/>
                    <p className='col-8 pt-2 rtl font-weight-bold text-dark'>برچسب ها:</p>
                </div>
            </div>
            {data.components[index_Component].id_13.id_1? (
                    <div className="col-12 p-0">
                    <div className="col-12 mb-2">
                        <div className="row">
                          <div className="col-10">
                            برچسب
                          </div>
                          <div className="col-2">
                            خذف
                          </div>
                        </div>
                    </div>
                      {data.components[index_Component].id_13.id_2.map((item, index) =>
                      <div key={index} className="col-12 mb-2">
                        <div className="row">
                          <input type='text'  className="form-control col-9 rtl text-right mr-3" placeholder='..' value={item} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_13","id_2",index],event.target.value,"change")}}/>
                          <input type='button'  className="form-control col-2 btn-danger" value="حذف" onClick={()=>{changeValue_Data(["components",index_Component,"id_13","id_2"],null,"delete",index)}}/>
                        </div>
                      </div>
                      )}
                      <div className="col-4">
                      <input type='button'  className="form-control col-12 btn-success" value="افزودن" onClick={()=>{changeValue_Data(["components",index_Component,"id_13","id_2"],"تگ","add",null)}}/>
                      </div>
                    </div>
            ):(<></>)}
            <hr />
            <div className='mb-3 row'>
                <div className="col-4 text-center">
                </div>
                <div className="col-8 text-right row">
                <input type="checkbox" className="form-control col" placeholder="..." checked={data.components[index_Component].id_14.id_1} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_14","id_1"],event.target.checked,"change")}}/>
                    <p className='col-8 pt-2 rtl font-weight-bold text-dark'>بنر تبلیغات:</p>
                </div>
            </div>
            {data.components[index_Component].id_14.id_1? (
                <>
                    <div className='mb-3 rtl text-right row'>
                        <div className="col-2">
                            <label htmlFor="formGroupExampleInput2">رنگ</label>
                            <input type="color" className="form-control form-control-color col-12" id="exampleColorInput" value={data.components[index_Component].id_14.id_9} title="Choose your color" onChange={(event)=>{changeValue_Data(["components",index_Component,"id_14","id_9"],event.target.value,"change")}}/>
                        </div>
                        <div className="col-10">
                            <label htmlFor="formGroupExampleInput2">عنوان</label>
                            <input type="text" id='formGroupExampleInput2' className="form-control col" placeholder="..." value={data.components[index_Component].id_14.id_2} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_14","id_2"],event.target.value,"change")}}/>
                        </div>
                    </div>
                    <div className='mb-3 rtl text-right'>
                        <label htmlFor="formGroupExampleInput2">عنوان دوم</label>
                        <input type="text" id='formGroupExampleInput2' className="form-control col" placeholder="..." value={data.components[index_Component].id_14.id_3} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_14","id_3"],event.target.value,"change")}}/>
                    </div>
                    <div className='mb-3 row'>
                        <div className="col-5 rtl text-right">
                            <label htmlFor="formGroupExampleInput2">متن دکمه</label>
                            <input type="text" id='formGroupExampleInput2' className="form-control col" placeholder="..." value={data.components[index_Component].id_14.id_4} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_14","id_4"],event.target.value,"change")}}/>
                        </div>
                        <div className="col-5 rtl text-right">
                            <label htmlFor="formGroupExampleInput2">لینک</label>
                            <input type="text" id='formGroupExampleInput2' className="form-control col" placeholder="..." value={data.components[index_Component].id_14.id_5} onChange={(event)=>{changeValue_Data(["components",index_Component,"id_14","id_5"],event.target.value,"change")}}/>
                        </div>
                        <div className="col-2 text-center">
                            <label htmlFor="formGroupExampleInput2">رنگ</label>
                            <input type="color" className="form-control form-control-color col-12" id="exampleColorInput" value={data.components[index_Component].id_14.id_7} title="Choose your color" onChange={(event)=>{changeValue_Data(["components",index_Component,"id_14","id_7"],event.target.value,"change")}}/>
                        </div>
                    </div>
                </>
            ):(<></>)}
            <ul className="list-group list-group-horizontal">
                <li className="list-group-item btn col-6 pt-3" onClick={()=> {open_Modal("list_image",window.scrollY,["components",index_Component,"id_14","id_6"])}}>تغییر عکس بنر</li>
                <li className="list-group-item btn col-6"><input type="color" className="form-control form-control-color p-0 m-0" style={{"border":"0px"}} id="exampleColorInput" value={data.components[index_Component].id_14.id_8} title="Choose your color" onChange={(event)=>{changeValue_Data(["components",index_Component,"id_14","id_8"],event.target.value,"change")}}/></li>
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