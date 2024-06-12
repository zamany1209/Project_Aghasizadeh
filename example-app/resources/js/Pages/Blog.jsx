import React, { useContext,useEffect } from 'react';
import Loading from '@/Components/Loading';
import { DataProvider,DataContext } from '@/Context/DataContext';
import MyContextMenu from '@/Components/MyContextMenu';
import Management_Modal from '@/Components/Management_Modal';
import Save_changes from '@/Components/Save_changes';
import Check_visit from '@/Components/Check_visit';
import Header from '@/Components/UI/Header';

function Constructor({ name , re_url , re_data, re_token, re_image_list }){
    const { data ,setData, setToken,setUrl, setState_admin, setEdit_text, setImage_list,add_Modal } = useContext(DataContext);
    var components =  JSON.parse(re_data);
    useEffect(() => {
        document.title = components.title;
        setData(components.data);
        setUrl(re_url);
        if(re_token){
            setImage_list(JSON.parse(re_image_list));
            setToken(re_token);
            setState_admin(true);
            setEdit_text('true');
        }
    }, []);
    useEffect(() => {
        document.title = data.title;
    }, [data.title]);
    return(
        <>
        <Loading folder="UI"/>
        </>
    )
}

export default function Blog({ name ,re_url,re_data ,re_token, re_image_list }) {
    return (
        <>
            <DataProvider>
                <Constructor name={name} re_data={re_data} re_url={re_url} re_token={re_token} re_image_list={re_image_list} />
                {re_token ? (
                    <div>
                        <Save_changes name={name} re_url={re_url}></Save_changes>
                        <MyContextMenu></MyContextMenu>
                        <Management_Modal></Management_Modal>
                    </div>
                ):(
                    <Check_visit></Check_visit>
                )}
            </DataProvider>
        </>
    );
}
