import { lazy,Suspense,useContext } from 'react';
import { DataContext } from '@/Context/DataContext';
function loadComponent(componentName,folder) {
    return lazy(() => import(`./${folder}/${componentName}.jsx`));
}
export default function Loading({folder,active_component = false}) {
    const { data } = useContext(DataContext);
    return (
        <Suspense fallback={<h2>Loading...</h2>}>
      {data.components?.map((component,index) => {
        const Component = loadComponent(component.name,folder);
        return <Component key={index} index_Component={index} name_Component={component.name}  />;
      })}
        </Suspense>
    );
}


