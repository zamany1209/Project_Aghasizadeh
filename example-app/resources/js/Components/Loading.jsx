import { lazy,Suspense } from 'react';
export default function Loading({url,folder}) {
    const data = url.name;
    const MarkdownPreview = lazy(() => import(`./${folder}/${data}.jsx`));

        // var MarkdownPreview = lazy(() => import(data.toString()));
    return (
        <Suspense fallback={<h2>Loading...</h2>}>
            <MarkdownPreview data={url} />
        </Suspense>
    );
}


