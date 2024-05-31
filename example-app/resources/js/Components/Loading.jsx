import { lazy,Suspense } from 'react';
export default function Loading({ url, index_Components, name_Components, folder }) {
    const MarkdownPreview = lazy(() => import(`./${folder}/${url}.jsx`));
        // var MarkdownPreview = lazy(() => import(data.toString()));
    return (
        <Suspense fallback={<h2>Loading...</h2>}>
            <MarkdownPreview index_Component={index_Components} name_Component={name_Components} />
        </Suspense>
    );
}


