import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InnerBanner from '@/components/InnerBanner';

export default function Faq() {
    return (
        <>
            <div className="page-wraper">
                <Header />

                <div className="page-content">
                    <InnerBanner title="FAQ" />




                    {/*  FAQ SECTION START  */}
                    <div className="section-full twm-faq-outer-wrap">
                        <div className="container-fluid">
                            <div className="section-content">
                                <div className="faq-outer">
                                    <div className="row">

                                        <div className="col-lg-6 col-md-12">
                                            <div className="faq-left-media">
                                                <img src="images/faq-pic.png" alt="Image" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <div className="faq-right-content">
                                                {/*  TITLE START */}
                                                <div className="section-head left wt-small-separator-outer">
                                                    <div className="wt-small-separator site-text-primary">
                                                        <i className="bi bi-house"></i>
                                                        <div>FAQ's</div>
                                                    </div>
                                                    <h2 className="title_split_anim">You can learn more from our asked questions</h2>
                                                    <p>Fahud is a very modern and creative template that has been
                                                        carefully crafted to suit any interior design website. Certainly,
                                                        Fahud will help you to build an out sanding period.
                                                    </p>

                                                </div>
                                                {/*  TITLE END */}
                                                {/*  Accordian  */}
                                                <div className="wt-accordion " id="accordion-two">

                                                    {/* One */}
                                                    <div className="panel wt-panel">
                                                        <div className="acod-head" id="headingOne">
                                                            <h4 className="acod-title">
                                                                <a className="collapsed" data-bs-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                                    What's my role in the design process?
                                                                    <span className="indicator"><i className="bi bi-plus"></i></span>
                                                                </a>
                                                            </h4>
                                                        </div>
                                                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-bs-parent="#accordion-two">
                                                            <div className="acod-content p-tb15">
                                                                construction business owners looking to up their game with strategic insights. Filled with useful architecture viverra tristique justo duis vitae diam neque nivamus aestan ateuene artines aringianu atelit finibus.
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Two */}
                                                    <div className="panel wt-panel">
                                                        <div className="acod-head" id="headingTwo">
                                                            <h4 className="acod-title">
                                                                <a className="collapsed" data-bs-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                                    What does an architect actually do?
                                                                    <span className="indicator"><i className="bi bi-plus"></i></span>
                                                                </a>
                                                            </h4>
                                                        </div>
                                                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-bs-parent="#accordion-two">
                                                            <div className="acod-content p-tb15">
                                                                sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Three */}
                                                    <div className="panel wt-panel">
                                                        <div className="acod-head" id="headingThree">
                                                            <h4 className="acod-title">
                                                                <a className="collapsed" data-bs-toggle="collapse" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                                    Can you work with clients long distance?
                                                                    <span className="indicator"><i className="bi bi-plus"></i></span>
                                                                </a>
                                                            </h4>
                                                        </div>
                                                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-bs-parent="#accordion-two">
                                                            <div className="acod-content p-tb15">
                                                                Architecture viverra tristique justo duis vitae diam neque nivamus aestan ateuene artines aringianu atelit finibus viverra nec lacus. Nedana theme erodino setlie suscipe no tristique.
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Four */}
                                                    <div className="panel wt-panel">
                                                        <div className="acod-head" id="headingFour">
                                                            <h4 className="acod-title">
                                                                <a className="collapsed" data-bs-toggle="collapse" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                                    What happens during our initial meeting?
                                                                    <span className="indicator"><i className="bi bi-plus"></i></span>
                                                                </a>
                                                            </h4>
                                                        </div>
                                                        <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-bs-parent="#accordion-two">
                                                            <div className="acod-content p-tb15">
                                                                architecture viverra tristique justo duis vitae diam neque nivamus aestan ateuene artines aringianu atelit finibus viverra nec lacus. Nedana theme erodino setlie suscipe no tristique.
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  FAQ SECTION END  */}

                    {/*  CLIENT LOGO SECTION START  */}
                    <div className="section-full  Client-logo-style1-wrap">

                        <div className="section-content">
                            <div className="home-client-carousel2-wrap">

                                {/*  Swiper  */}
                                <div className="swiper home-client-carousel2">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="ow-client-logo">
                                                <div className="client-logo client-logo-media">
                                                    <a href="about-2.html"><img src="images/client-logo/dark/1.png" alt="" /></a></div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="ow-client-logo">
                                                <div className="client-logo client-logo-media">
                                                    <a href="about-2.html"><img src="images/client-logo/dark/2.png" alt="" /></a></div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="ow-client-logo">
                                                <div className="client-logo client-logo-media">
                                                    <a href="about-2.html"><img src="images/client-logo/dark/3.png" alt="" /></a></div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="ow-client-logo">
                                                <div className="client-logo client-logo-media">
                                                    <a href="about-2.html"><img src="images/client-logo/dark/4.png" alt="" /></a></div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="ow-client-logo">
                                                <div className="client-logo client-logo-media">
                                                    <a href="about-2.html"><img src="images/client-logo/dark/5.png" alt="" /></a></div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="ow-client-logo">
                                                <div className="client-logo client-logo-media">
                                                    <a href="about-2.html"><img src="images/client-logo/dark/1.png" alt="" /></a></div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="ow-client-logo">
                                                <div className="client-logo client-logo-media">
                                                    <a href="about-2.html"><img src="images/client-logo/dark/3.png" alt="" /></a></div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="ow-client-logo">
                                                <div className="client-logo client-logo-media">
                                                    <a href="about-2.html"><img src="images/client-logo/dark/1.png" alt="" /></a></div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="ow-client-logo">
                                                <div className="client-logo client-logo-media">
                                                    <a href="about-2.html"><img src="images/client-logo/dark/2.png" alt="" /></a></div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="ow-client-logo">
                                                <div className="client-logo client-logo-media">
                                                    <a href="about-2.html"><img src="images/client-logo/dark/3.png" alt="" /></a></div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="ow-client-logo">
                                                <div className="client-logo client-logo-media">
                                                    <a href="about-2.html"><img src="images/client-logo/dark/4.png" alt="" /></a></div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="ow-client-logo">
                                                <div className="client-logo client-logo-media">
                                                    <a href="about-2.html"><img src="images/client-logo/dark/5.png" alt="" /></a></div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="ow-client-logo">
                                                <div className="client-logo client-logo-media">
                                                    <a href="about-2.html"><img src="images/client-logo/dark/1.png" alt="" /></a></div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="ow-client-logo">
                                                <div className="client-logo client-logo-media">
                                                    <a href="about-2.html"><img src="images/client-logo/dark/3.png" alt="" /></a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                    {/*  CLIENT LOGO  SECTION End  */}

                    {/*  General Question START  */}
                    <div className="section-full p-t120 p-b90 faq-gen-que-wrap">
                        <div className="container">
                            {/*  TITLE START */}

                            <div className="section-head center wt-small-separator-outer">
                                <div className="wt-small-separator site-text-primary">
                                    <i className="bi bi-house"></i>
                                    <div>FAQ's</div>
                                </div>
                                <h2 className="wt-title  title_split_anim">General Questions</h2>
                            </div>

                            {/*  TITLE END */}

                            <div className="section-content">
                                <div className="team-box1-wraper">
                                    <div className="row">

                                        <div className="col-xl-6 col-lg-6 col-md-6 m-b30">
                                            {/*  Accordian  */}
                                            <div className="wt-accordion " id="accordion-three">

                                                {/* One */}
                                                <div className="panel wt-panel">
                                                    <div className="acod-head" id="headingThree_one">
                                                        <h4 className="acod-title">
                                                            <a className="collapsed" data-bs-toggle="collapse" href="#collapseThree_one" aria-expanded="false" aria-controls="collapseThree_one">
                                                                What is foundation in construction?
                                                                <span className="indicator"><i className="bi bi-plus"></i></span>
                                                            </a>
                                                        </h4>
                                                    </div>
                                                    <div id="collapseThree_one" className="collapse" aria-labelledby="headingThree_one" data-bs-parent="#accordion-three">
                                                        <div className="acod-content p-tb15">
                                                            construction business owners looking to up their game with strategic insights. Filled with useful architecture viverra tristique justo duis vitae diam neque nivamus aestan ateuene artines aringianu atelit finibus.
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Two */}
                                                <div className="panel wt-panel">
                                                    <div className="acod-head" id="headingThree_Two">
                                                        <h4 className="acod-title">
                                                            <a className="collapsed" data-bs-toggle="collapse" href="#collapseThree_Two" aria-expanded="false" aria-controls="collapseThree_Two">
                                                                How do I know you’ll design what I want?
                                                                <span className="indicator"><i className="bi bi-plus"></i></span>
                                                            </a>
                                                        </h4>
                                                    </div>
                                                    <div id="collapseThree_Two" className="collapse" aria-labelledby="headingThree_Two" data-bs-parent="#accordion-three">
                                                        <div className="acod-content p-tb15">
                                                            sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Three */}
                                                <div className="panel wt-panel">
                                                    <div className="acod-head" id="headingThree_Three">
                                                        <h4 className="acod-title">
                                                            <a className="collapsed" data-bs-toggle="collapse" href="#collapseThree_Three" aria-expanded="false" aria-controls="collapseThree_Three">
                                                                Do you only take up projects?
                                                                <span className="indicator"><i className="bi bi-plus"></i></span>
                                                            </a>
                                                        </h4>
                                                    </div>
                                                    <div id="collapseThree_Three" className="collapse" aria-labelledby="headingThree_Three" data-bs-parent="#accordion-three">
                                                        <div className="acod-content p-tb15">
                                                            Architecture viverra tristique justo duis vitae diam neque nivamus aestan ateuene artines aringianu atelit finibus viverra nec lacus. Nedana theme erodino setlie suscipe no tristique.
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Four */}
                                                <div className="panel wt-panel">
                                                    <div className="acod-head" id="headingThree_Four">
                                                        <h4 className="acod-title">
                                                            <a className="collapsed" data-bs-toggle="collapse" href="#collapseThree_Four" aria-expanded="false" aria-controls="collapseThree_Four">
                                                                Do you have sufficient experience to secure?
                                                                <span className="indicator"><i className="bi bi-plus"></i></span>
                                                            </a>
                                                        </h4>
                                                    </div>
                                                    <div id="collapseThree_Four" className="collapse" aria-labelledby="headingThree_Four" data-bs-parent="#accordion-three">
                                                        <div className="acod-content p-tb15">
                                                            architecture viverra tristique justo duis vitae diam neque nivamus aestan ateuene artines aringianu atelit finibus viverra nec lacus. Nedana theme erodino setlie suscipe no tristique.
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 m-b30">

                                            {/*  Accordian  */}
                                            <div className="wt-accordion " id="accordion-Four">

                                                {/* One */}
                                                <div className="panel wt-panel">
                                                    <div className="acod-head" id="headingFour_one">
                                                        <h4 className="acod-title">
                                                            <a className="collapsed" data-bs-toggle="collapse" href="#collapseFour_one" aria-expanded="false" aria-controls="collapseFour_one">
                                                                What are the charges of renovation?
                                                                <span className="indicator"><i className="bi bi-plus"></i></span>
                                                            </a>
                                                        </h4>
                                                    </div>
                                                    <div id="collapseFour_one" className="collapse" aria-labelledby="headingFour_one" data-bs-parent="#accordion-Four">
                                                        <div className="acod-content p-tb15">
                                                            construction business owners looking to up their game with strategic insights. Filled with useful architecture viverra tristique justo duis vitae diam neque nivamus aestan ateuene artines aringianu atelit finibus.
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Two */}
                                                <div className="panel wt-panel">
                                                    <div className="acod-head" id="headingFour_Two">
                                                        <h4 className="acod-title">
                                                            <a className="collapsed" data-bs-toggle="collapse" href="#collapseFour_Two" aria-expanded="false" aria-controls="collapseFour_Two">
                                                                Benefits of choosing our services?
                                                                <span className="indicator"><i className="bi bi-plus"></i></span>
                                                            </a>
                                                        </h4>
                                                    </div>
                                                    <div id="collapseFour_Two" className="collapse" aria-labelledby="headingFour_Two" data-bs-parent="#accordion-Four">
                                                        <div className="acod-content p-tb15">
                                                            sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Three */}
                                                <div className="panel wt-panel">
                                                    <div className="acod-head" id="headingFour_Three">
                                                        <h4 className="acod-title">
                                                            <a className="collapsed" data-bs-toggle="collapse" href="#collapseFour_Three" aria-expanded="false" aria-controls="collapseFour_Three">
                                                                How to contact with our support team?
                                                                <span className="indicator"><i className="bi bi-plus"></i></span>
                                                            </a>
                                                        </h4>
                                                    </div>
                                                    <div id="collapseFour_Three" className="collapse" aria-labelledby="headingFour_Three" data-bs-parent="#accordion-Four">
                                                        <div className="acod-content p-tb15">
                                                            Architecture viverra tristique justo duis vitae diam neque nivamus aestan ateuene artines aringianu atelit finibus viverra nec lacus. Nedana theme erodino setlie suscipe no tristique.
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Four */}
                                                <div className="panel wt-panel">
                                                    <div className="acod-head" id="headingFour_Four">
                                                        <h4 className="acod-title">
                                                            <a className="collapsed" data-bs-toggle="collapse" href="#collapseFour_Four" aria-expanded="false" aria-controls="collapseFour_Four">
                                                                What is the purpose of Interior Design?
                                                                <span className="indicator"><i className="bi bi-plus"></i></span>
                                                            </a>
                                                        </h4>
                                                    </div>
                                                    <div id="collapseFour_Four" className="collapse" aria-labelledby="headingFour_Four" data-bs-parent="#accordion-Four">
                                                        <div className="acod-content p-tb15">
                                                            architecture viverra tristique justo duis vitae diam neque nivamus aestan ateuene artines aringianu atelit finibus viverra nec lacus. Nedana theme erodino setlie suscipe no tristique.
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/*  General Question SECTION END  */}


                </div>

                <Footer />
            </div>
        </>
    );
}