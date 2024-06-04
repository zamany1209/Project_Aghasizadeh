import { Link, Head } from '@inertiajs/react';
import React, { useContext,useEffect } from 'react';
import Loading from '@/Components/Loading';
import { DataProvider,DataContext } from '@/Context/DataContext';
import MyContextMenu from '@/Components/MyContextMenu';
import Management_Modal from '@/Components/Management_Modal';

function Constructor({ name , re_data, re_token, re_image_list }){
    const { setData, setToken, setState_admin, setEdit_text, setImage_list,add_Modal } = useContext(DataContext);
    var components =  JSON.parse(re_data);
    useEffect(() => {
        setData(components);
        if(re_token){
            setImage_list(JSON.parse(re_image_list));
            setToken(re_token);
            setState_admin(true);
            setEdit_text('true');
            add_Modal("show_list_image");
        }
    }, []);
    return(
        <>
        <div className="row col-12">
            <div className="col-2 row">
                <Loading folder="Panel_admin" />
            </div>
            <div className="col-10-5 row">
                <Loading folder="Panel_admin" active_component={true}/>
            </div>
        </div>
        <Loading folder="Panel_admin" />
        </>
    )
}

export default function Admin({ name ,re_data ,re_token, re_image_list }) {
    return (
        <>
            <Head title={name}/>
            <DataProvider>
                <Constructor name={name} re_data={re_data} re_token={re_token} re_image_list={re_image_list} />
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
