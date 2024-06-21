import { Link, Head } from '@inertiajs/react';
import React, { useContext,useEffect } from 'react';
import Loading from '@/Components/Loading';
import { DataProvider,DataContext } from '@/Context/DataContext';
import MyContextMenu from '@/Components/MyContextMenu';
import Management_Modal from '@/Components/Management_Modal';
import Index_Sidbar from '@/Components/Panel_admin/Index_Sidbar';
import Index_Navbar from '@/Components/Panel_admin/Index_Navbar';

function Constructor({ auth ,name ,re_url , re_data, re_token, re_image_list }){
    const { data,setPage_name,setData, setToken, setUrl, setState_admin, setEdit_text, setImage_list,add_Modal } = useContext(DataContext);
    var components =  JSON.parse(re_data);
    components['auth'] = auth; 
    useEffect(() => {
        setData(components);
        setUrl(re_url);
        setPage_name(name);
        if(re_token){
            // setImage_list(JSON.parse(re_image_list));
            setToken(re_token);
            setState_admin(true);
            setEdit_text('true');
            add_Modal("show_list_image");
        }
    }, []);
    return(
        <>
            {/* <!-- Page Wrapper --> */}
    <div id="wrapper">

        {/* <!-- Sidebar --> */}
            <Index_Sidbar></Index_Sidbar>
        {/* <!-- End of Sidebar --> */}

        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" className="d-flex flex-column">

            {/* <!-- Main Content --> */}
            <div id="content">

                {/* <!-- Topbar --> */}
                    <Index_Navbar></Index_Navbar>
                {/* <!-- End of Topbar --> */}


                {/* <!-- Begin Page Content --> */}
                    <Loading folder="Panel_admin"></Loading>
                {/* <!-- /.container-fluid --> */}

            </div>
            {/* <!-- End of Main Content --> */}


        </div>
        {/* <!-- End of Content Wrapper --> */}

    </div>
    {/* <!-- End of Page Wrapper --> */}
        </>
    )
}

export default function Admin({ auth,name,re_url ,re_data ,re_token, re_image_list }) {
    return (
        <>
            <Head title={name}/>
            <DataProvider>
                <Constructor name={name} re_data={re_data} re_url={re_url} re_token={re_token} re_image_list={re_image_list} auth={auth} />
                {re_token ? (
                    <div>
                        <MyContextMenu></MyContextMenu>
                        <Management_Modal></Management_Modal>
                    </div>
                ):(
                    <div></div>
                )}
            </DataProvider>
        </>
    );
}


{/* <div className="row col-12">
<div className="col-2 row">
    <Loading folder="Panel_admin" />
</div>
<div className="col-10-5 row">
    <Loading folder="Panel_admin" active_component={true}/>
</div>
</div>
<Loading folder="Panel_admin" /> */}