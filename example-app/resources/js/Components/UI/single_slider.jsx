
export default function single_slider({data}) {
    return (
        <>
    <section className="hero-area-two">
        <div className="hero-slider-one">
            {data.id_1.map((slider_list) =>
                    <div className="single-slider bg-cover" style={{backgroundImage: 'url('+slider_list.id_5+')'}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="hero-content">
                                        <span className="span text-right" style={{fontSize: slider_list.id_1[1]}}>{slider_list.id_1[0]}</span>
                                        <h2 className="text-light text-right p-1" style={{fontSize: slider_list.id_2[1]}}>{slider_list.id_2[0]}</h2>
                                        <ul className="button text-right mt-3">
                                            <li><a href="#" className="main-btn">{slider_list.id_4[0]}</a></li>
                                            <li><a href="#" className="main-btn">{slider_list.id_3[0]}</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            )}
        </div>
    </section>
        </>
    );
}
