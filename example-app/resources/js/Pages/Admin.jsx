import { Link, Head } from '@inertiajs/react';
import { useState } from 'react';
import Loading from '@/Components/Loading';
import UserContext from '@/Context/UserContext';
import datza from '../../data/Data.json'
export default function Welcome({ name,data }) {
    const [user, setUser] = useState(datza);
    var d =  JSON.parse(data);
    return (
        <>
            <Head title={name}/>
            <UserContext.Provider value={{user,setUser}}>
            <div className="row col-12">
                <div className="col-2 row">
                {d.Admin_component.components_sidbar.map((component) =>
                        <Loading key={component.name}  url={component} folder="Panel_admin"/>
                    )}
                </div>
                <div className="col-10-5 row">

                {d.Admin_component.components_panel.map((component) =>
                        <Loading key={component.name}  url={component} folder="Panel_admin"/>
                    )}
                </div>
            </div>
            </UserContext.Provider>
        </>
    );
}

