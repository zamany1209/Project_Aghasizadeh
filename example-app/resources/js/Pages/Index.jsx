import { Link, Head } from '@inertiajs/react';
import Loading from '@/Components/Loading';
export default function Welcome({ name,data }) {
    var d =  JSON.parse(data);
    return (
        <>
            <Head title={name}/>
            {d.landing.components.map((component) =>
                <Loading key={component.name}  url={component} folder="UI"/>
            )}
        </>
    );
}
