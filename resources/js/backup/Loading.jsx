import { lazy,Suspense } from 'react';
export default function Loading({url}) {
    var data = './'+url;
    var MarkdownPreview = lazy(() => import(data));
    return (
        <>
        <Suspense fallback={<h2>Loading...</h2>}>
            <MarkdownPreview />
        </Suspense>
        </>
    );
}


