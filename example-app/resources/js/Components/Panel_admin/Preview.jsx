export default function Preview({Url}) {
    const page_Height = document.body.clientHeight;
    return (
        <>
    <div className="p-0">
      {/* اینجا یک iframe ایجاد می‌کنیم و URL مورد نظر را به عنوان مقدار src قرار می‌دهیم */}
      <iframe src="http://127.0.0.1:8000/index/list" width="100%" height={page_Height-63}></iframe>
    </div>
        </>
    );
}
