import { Link, Head } from '@inertiajs/react';
import React, { useContext,useEffect } from 'react';
import Loading from '@/Components/Loading';
import { DataProvider,DataContext } from '@/Context/DataContext';
import MyContextMenu from '@/Components/MyContextMenu';
import Management_Modal from '@/Components/Management_Modal';

function Constructor({ name , re_data, re_token, re_image_list }){
    const { data, setData, token, setToken, state_admin, setState_admin, edit_text, setEdit_text, movement, setMovement, setImage_list,add_Modal } = useContext(DataContext);
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
    const handleDragAndDrop = (results) => {
        console.log(results);
        const { source, destination, type } = results;

        if (!destination){
            return;
        }
    
        if (source.droppableId === destination.droppableId &&
            source.index === destination.index){
                return;
        }
        if(destination.droppableId === source.droppableId){
            
        }
    };
    // useEffect(() => {
    //     components = data;
    // }, [data]);
    return(
        <>
        {components.landing.components.map((component, index) =>
                <Loading key={component.name}  url={component.name} index_Components={index} name_Components={component.name} folder="UI"/>

        )}
        </>
    )
}

export default function Index({ name ,re_data ,re_token, re_image_list }) {
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
