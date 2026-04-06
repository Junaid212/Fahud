import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InnerBanner from '@/components/InnerBanner';

export default function OurTeam() {
    return (
        <>
            <div className="page-wraper">
                <Header />

                <div className="page-content">
                    <InnerBanner title="Our Teams" />




                    {/*  OUR TEAM START  */}
                    <div className="section-full p-t120 p-b90 ">

                        <div className="container">
                            {/*  TITLE START */}
                            <div className="section-head center wt-small-separator-outer">
                                <div className="wt-small-separator site-text-primary">
                                    <i className="bi bi-house"></i>
                                    <div>Meet Our Team</div>
                                </div>
                                <h2 className="wt-title title_split_anim">Best Experts</h2>
                            </div>
                            {/*  TITLE END */}
                        </div>

                        <div className="container">
                            <div className="section-content">
                                <div className="team-box2-wraper">
                                    <div className="row justify-content-center">
                                        {/* Column 1 */}
                                        <div className="col-xl-4 col-lg-4 col-md-6 m-b30">

                                            <div className="team-effect-hvr2">
                                                <div className="team-hvr2-media">
                                                    <img src="images/team/pic2.jpg" alt="" />
                                                </div>

                                                <div className="content-info">
                                                    <div className="content-info-inner">

                                                        <div className="info-detail">
                                                            <h3 className="wt-title"><a href="our-team-detail.html">Ashley Sanchez</a></h3>
                                                            <p className="wt-title-position">Architect</p>
                                                        </div>
                                                        <p className="icon-links">
                                                            <a href="https://www.facebook.com/"><i className="bi bi-facebook"></i></a>
                                                            <a href="https://x.com/"><i className="bi bi-twitter-x"></i></a>
                                                            <a href="https://dribbble.com/"><i className="bi bi-dribbble"></i></a>
                                                            <a href="https://in.linkedin.com/"><i className="bi bi-linkedin"></i></a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        {/* Column 2 */}
                                        <div className="col-xl-4 col-lg-4 col-md-6 m-b30">

                                            <div className="team-effect-hvr2">
                                                <div className="team-hvr2-media">
                                                    <img src="images/team/pic3.jpg" alt="" />
                                                </div>

                                                <div className="content-info">
                                                    <div className="content-info-inner">

                                                        <div className="info-detail">
                                                            <h3 className="wt-title"><a href="our-team-detail.html">Juliana Bryant</a></h3>
                                                            <p className="wt-title-position">Projact Manager</p>
                                                        </div>
                                                        <p className="icon-links">
                                                            <a href="https://www.facebook.com/"><i className="bi bi-facebook"></i></a>
                                                            <a href="https://x.com/"><i className="bi bi-twitter-x"></i></a>
                                                            <a href="https://dribbble.com/"><i className="bi bi-dribbble"></i></a>
                                                            <a href="https://in.linkedin.com/"><i className="bi bi-linkedin"></i></a>
                                                        </p>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        {/* Column 3 */}
                                        <div className="col-xl-4 col-lg-4 col-md-6 m-b30">

                                            <div className="team-effect-hvr2">
                                                <div className="team-hvr2-media">
                                                    <img src="images/team/pic4.jpg" alt="" />
                                                </div>

                                                <div className="content-info">
                                                    <div className="content-info-inner">

                                                        <div className="info-detail">
                                                            <h3 className="wt-title"><a href="our-team-detail.html">Shirley Gibson</a></h3>
                                                            <p className="wt-title-position">Ceo</p>
                                                        </div>
                                                        <p className="icon-links">
                                                            <a href="https://www.facebook.com/"><i className="bi bi-facebook"></i></a>
                                                            <a href="https://x.com/"><i className="bi bi-twitter-x"></i></a>
                                                            <a href="https://dribbble.com/"><i className="bi bi-dribbble"></i></a>
                                                            <a href="https://in.linkedin.com/"><i className="bi bi-linkedin"></i></a>
                                                        </p>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/*  OUR TEAM SECTION END  */}

                    {/*  GET IN TOUCH  */}
                    <div className="section-full  get-intouch-style-2-wrap parallax-section">
                        <div className="get-intouch-style-2  overlay-wraper p-t120 p-b120 parallax-image" style={{ "backgroundImage": "url(images/background/get-in-touch.jpg)" }}></div>
                        <div className="get-intouch-style-2-inner site-text-white">
                            <span>We Achieve</span>
                            <h2 className="wt-title site-text-white title_split_anim ">Design Award 2025 Now Open For Entries</h2>
                            <div className="site-center-btn text-center">
                                <a href="about-2.html" className="site-button">Read More</a>
                            </div>
                        </div>
                    </div>
                    {/*  GET IN TOUCH  */}

                    {/*  OUR TEAM START  */}
                    <div className="section-full p-t120 p-b90 twm-team-box1-wraper">
                        <div className="container">
                            {/*  TITLE START */}
                            <div className="section-head center wt-small-separator-outer">
                                <div className="wt-small-separator site-text-primary">
                                    <i className="bi bi-house"></i>
                                    <div>Meet Our Team</div>
                                </div>
                                <h2 className="wt-title  title_split_anim">Best Experts</h2>
                            </div>
                            {/*  TITLE END */}
                        </div>

                        <div className="container">
                            <div className="section-content">
                                <div className="team-box1-wraper">
                                    <div className="row">
                                        {/* Column 1  */}
                                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6  m-b30">
                                            <div className="team-effect-hvr1">
                                                <img src="images/team/pic1.jpg" alt="" />
                                                <div className="content-info">
                                                    <p className="icon-links">
                                                        <a href="https://www.facebook.com/"><i className="bi bi-facebook"></i></a>
                                                        <a href="https://x.com/"><i className="bi bi-twitter-x"></i></a>
                                                        <a href="https://dribbble.com/"><i className="bi bi-dribbble"></i></a>
                                                        <a href="https://in.linkedin.com/"><i className="bi bi-linkedin"></i></a>
                                                    </p>
                                                    <div className="content-info-inner">
                                                        <div className="info-detail">
                                                            <h3 className="wt-title"><a href="our-team-detail.html">Jerry Bloom</a></h3>
                                                            <p className="wt-title-position">Contractor</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Column 2  */}
                                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6  m-b30">
                                            <div className="team-effect-hvr1">
                                                <img src="images/team/pic2.jpg" alt="" />
                                                <div className="content-info">
                                                    <p className="icon-links">
                                                        <a href="https://www.facebook.com/"><i className="bi bi-facebook"></i></a>
                                                        <a href="https://x.com/"><i className="bi bi-twitter-x"></i></a>
                                                        <a href="https://dribbble.com/"><i className="bi bi-dribbble"></i></a>
                                                        <a href="https://in.linkedin.com/"><i className="bi bi-linkedin"></i></a>
                                                    </p>
                                                    <div className="content-info-inner">
                                                        <div className="info-detail">
                                                            <h3 className="wt-title"><a href="our-team-detail.html">Ashley Sanchez</a></h3>
                                                            <p className="wt-title-position">Architect</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Column 3  */}
                                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6  m-b30">
                                            <div className="team-effect-hvr1">
                                                <img src="images/team/pic3.jpg" alt="" />
                                                <div className="content-info">
                                                    <p className="icon-links">
                                                        <a href="https://www.facebook.com/"><i className="bi bi-facebook"></i></a>
                                                        <a href="https://x.com/"><i className="bi bi-twitter-x"></i></a>
                                                        <a href="https://dribbble.com/"><i className="bi bi-dribbble"></i></a>
                                                        <a href="https://in.linkedin.com/"><i className="bi bi-linkedin"></i></a>
                                                    </p>
                                                    <div className="content-info-inner">
                                                        <div className="info-detail">
                                                            <h3 className="wt-title"><a href="our-team-detail.html">Juliana Bryant</a></h3>
                                                            <p className="wt-title-position">Projact Manager</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Column 4  */}
                                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6  m-b30">
                                            <div className="team-effect-hvr1">
                                                <img src="images/team/pic4.jpg" alt="" />
                                                <div className="content-info">
                                                    <p className="icon-links">
                                                        <a href="https://www.facebook.com/"><i className="bi bi-facebook"></i></a>
                                                        <a href="https://x.com/"><i className="bi bi-twitter-x"></i></a>
                                                        <a href="https://dribbble.com/"><i className="bi bi-dribbble"></i></a>
                                                        <a href="https://in.linkedin.com/"><i className="bi bi-linkedin"></i></a>
                                                    </p>
                                                    <div className="content-info-inner">
                                                        <div className="info-detail">
                                                            <h3 className="wt-title"><a href="our-team-detail.html">Shirley Gibson</a></h3>
                                                            <p className="wt-title-position">Ceo</p>
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
                    {/*  OUR TEAM SECTION END  */}

                    {/*  ABOUT-SECTION-2 SECTION START  */}
                    <div className="section-full  p-t120 p-b0 twm-ab3-section-wrap" style={{ "backgroundImage": "url(images/background/ab-bg3.jpg)" }}>
                        <div className="container">
                            <div className="section-content">
                                <div className="twm-ab-section-bx">
                                    {/*  TITLE START */}
                                    <div className="section-head left wt-small-separator-outer">
                                        <div className="wt-small-separator site-text-primary">
                                            <i className="bi bi-house"></i>
                                            <div>Our Work</div>
                                        </div>
                                        <h2 className="wt-title title_split_anim">Drawing structural plans to perfection</h2>
                                        <p>Fahud is a very modern and creative template that has been carefully crafted to suit any interior design website. Certainly, Fahud will help you to build an out sanding period.carefully</p>
                                    </div>
                                    {/*  TITLE END */}

                                    <div className="twm-ab-quote-section">
                                        <i className="bi bi-quote"></i>
                                        <p>I don’t build in order to have clients. I have clients in order to build.</p>
                                    </div>
                                    <div className="twm-ab-au-name">
                                        <div className="twm-ab-au">
                                            <h3 className="title">Ayn Rand</h3>
                                            <span>Architect</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  ABOUT-SECTION-2  SECTION End  */}

                    {/*  LATEST PROJECTS SLIDER START  */}
                    <div className="section-full p-t120 p-b90 pro-filtr-cate-wrap">
                        <div className="container">
                            {/*  TITLE START */}
                            <div className="section-head center wt-small-separator-outer">
                                <div className="wt-small-separator site-text-primary">
                                    <i className="bi bi-house"></i>
                                    <div>Explore Recent Work</div>
                                </div>
                                <h2 className="wt-title  title_split_anim">Our Finished Projects</h2>
                            </div>
                            {/*  TITLE END */}
                        </div>
                        {/*  IMAGE CAROUSEL START  */}
                        <div className="pro-filtr-cate-carousal-wrap">
                            <div className="project-filter-wrap pro-filtr-cate-carousal text-center">
                                <span data-filter="all">All</span>
                                <span data-filter="filter1">Residetial</span>
                                <span data-filter="filter2">Commercial</span>
                                <span data-filter="filter3">Industrial</span>
                                <span data-filter="filter4">Architecture</span>
                            </div>
                            <div className="swiper-container pro-filtr-cate-bx">

                                <div className="swiper-wrapper">

                                    {/*  COLUMNS 1  */}
                                    <div className="swiper-slide" data-filter="filter1">
                                        <div className="effect-hvr3">
                                            <div className="effect-sarah">
                                                <img src="images/project-3/m1.jpg" alt="img20" />
                                                <a className="elem pic-long project-view-btn" href="images/project-3/m1.jpg" title="Commercial Building" data-lcl-txt="" data-lcl-author="" data-lcl-thumb="images/project-3/m1.jpg"><i className="fa fa-search-plus"></i>
                                                </a>
                                            </div>
                                            <div className="effect-hvr3-inner">
                                                <h3 className="wt-title"><a href="project-single.html">Commercial Building</a></h3>
                                                <span className="project-new-category">Appartment</span>
                                                <a href="project-single.html" className="site-button-icon site-text-primary"><i className="flaticon-right"></i></a>
                                            </div>
                                        </div>
                                    </div>

                                    {/*  COLUMNS 2  */}
                                    <div className="swiper-slide" data-filter="filter2">
                                        <div className="effect-hvr3">
                                            <div className="effect-sarah">
                                                <img src="images/project-3/m2.jpg" alt="img20" />
                                                <a className="elem pic-long project-view-btn" href="images/project-3/m2.jpg" title="Mountain Hotel" data-lcl-txt="" data-lcl-author="" data-lcl-thumb="images/project-3/m2.jpg"><i className="fa fa-search-plus"></i>
                                                </a>
                                            </div>
                                            <div className="effect-hvr3-inner">
                                                <h3 className="wt-title"><a href="project-single.html">Mountain Hotel</a></h3>
                                                <span className="project-new-category">Building</span>
                                                <a href="project-single.html" className="site-button-icon site-text-primary"><i className="flaticon-right"></i></a>
                                            </div>
                                        </div>
                                    </div>

                                    {/*  COLUMNS 3  */}
                                    <div className="swiper-slide" data-filter="filter1">
                                        <div className="effect-hvr3">
                                            <div className="effect-sarah">
                                                <img src="images/project-3/m3.jpg" alt="img20" />
                                                <a className="elem pic-long project-view-btn" href="images/project-3/m3.jpg" title="New York Housing Project" data-lcl-txt="" data-lcl-author="" data-lcl-thumb="images/project-3/m3.jpg"><i className="fa fa-search-plus"></i>
                                                </a>
                                            </div>
                                            <div className="effect-hvr3-inner">
                                                <h3 className="wt-title"><a href="project-single.html">New York Housing Project</a></h3>
                                                <span className="project-new-category">Apartment</span>
                                                <a href="project-single.html" className="site-button-icon site-text-primary"><i className="flaticon-right"></i></a>
                                            </div>
                                        </div>
                                    </div>

                                    {/*  COLUMNS 4  */}
                                    <div className="swiper-slide" data-filter="filter2">
                                        <div className="effect-hvr3">
                                            <div className="effect-sarah">
                                                <img src="images/project-3/m4.jpg" alt="img20" />
                                                <a className="elem pic-long project-view-btn" href="images/project-3/m4.jpg" title="House Extensions" data-lcl-txt="" data-lcl-author="" data-lcl-thumb="images/project-3/m4.jpg"><i className="fa fa-search-plus"></i>
                                                </a>
                                            </div>
                                            <div className="effect-hvr3-inner">
                                                <h3 className="wt-title"><a href="project-single.html">House Extensions</a></h3>
                                                <span className="project-new-category">Building Constrction</span>
                                                <a href="project-single.html" className="site-button-icon site-text-primary"><i className="flaticon-right"></i></a>
                                            </div>
                                        </div>
                                    </div>

                                    {/*  COLUMNS 5  */}
                                    <div className="swiper-slide" data-filter="filter3">
                                        <div className="effect-hvr3">
                                            <div className="effect-sarah">
                                                <img src="images/project-3/m5.jpg" alt="img20" />
                                                <a className="elem pic-long project-view-btn" href="images/project-3/m5.jpg" title="Renovation" data-lcl-txt="" data-lcl-author="" data-lcl-thumb="images/project-3/m5.jpg"><i className="fa fa-search-plus"></i>
                                                </a>
                                            </div>
                                            <div className="effect-hvr3-inner">
                                                <h3 className="wt-title"><a href="project-single.html">Renovation</a></h3>
                                                <span className="project-new-category">Renovation , Architecture</span>
                                                <a href="project-single.html" className="site-button-icon site-text-primary"><i className="flaticon-right"></i></a>
                                            </div>
                                        </div>
                                    </div>

                                    {/*  COLUMNS 6  */}
                                    <div className="swiper-slide" data-filter="filter4">
                                        <div className="effect-hvr3">
                                            <div className="effect-sarah">
                                                <img src="images/project-3/m6.jpg" alt="img20" />
                                                <a className="elem pic-long project-view-btn" href="images/project-3/m6.jpg" title="Roome Interior" data-lcl-txt="" data-lcl-author="" data-lcl-thumb="images/project-3/m6.jpg"><i className="fa fa-search-plus"></i>
                                                </a>
                                            </div>
                                            <div className="effect-hvr3-inner">
                                                <h3 className="wt-title"><a href="project-single.html">Roome Interior</a></h3>
                                                <span className="project-new-category">Interior</span>
                                                <a href="project-single.html" className="site-button-icon site-text-primary"><i className="flaticon-right"></i></a>
                                            </div>
                                        </div>
                                    </div>

                                    {/*  COLUMNS 7  */}
                                    <div className="swiper-slide" data-filter="filter1">
                                        <div className="effect-hvr3">
                                            <div className="effect-sarah">
                                                <img src="images/project-3/m7.jpg" alt="img20" />
                                                <a className="elem pic-long project-view-btn" href="images/project-3/m7.jpg" title="Commercial Building" data-lcl-txt="" data-lcl-author="" data-lcl-thumb="images/project-3/m7.jpg"><i className="fa fa-search-plus"></i>
                                                </a>
                                            </div>
                                            <div className="effect-hvr3-inner">
                                                <h3 className="wt-title"><a href="project-single.html">Commercial Building</a></h3>
                                                <span className="project-new-category">Appartment</span>
                                                <a href="project-single.html" className="site-button-icon site-text-primary"><i className="flaticon-right"></i></a>
                                            </div>
                                        </div>
                                    </div>

                                    {/*  COLUMNS 8  */}
                                    <div className="swiper-slide" data-filter="filter2">
                                        <div className="effect-hvr3">
                                            <div className="effect-sarah">
                                                <img src="images/project-3/m8.jpg" alt="img20" />
                                                <a className="elem pic-long project-view-btn" href="images/project-3/m8.jpg" title="Mountain Hotel" data-lcl-txt="" data-lcl-author="" data-lcl-thumb="images/project-3/m8.jpg"><i className="fa fa-search-plus"></i>
                                                </a>
                                            </div>
                                            <div className="effect-hvr3-inner">
                                                <h3 className="wt-title"><a href="project-single.html">Mountain Hotel</a></h3>
                                                <span className="project-new-category">Building</span>
                                                <a href="project-single.html" className="site-button-icon site-text-primary"><i className="flaticon-right"></i></a>
                                            </div>
                                        </div>
                                    </div>

                                    {/*  COLUMNS 9  */}
                                    <div className="swiper-slide" data-filter="filter1">
                                        <div className="effect-hvr3">
                                            <div className="effect-sarah">
                                                <img src="images/project-3/m9.jpg" alt="img20" />
                                                <a className="elem pic-long project-view-btn" href="images/project-3/m9.jpg" title="New York Housing Project" data-lcl-txt="" data-lcl-author="" data-lcl-thumb="images/project-3/m9.jpg"><i className="fa fa-search-plus"></i>
                                                </a>
                                            </div>
                                            <div className="effect-hvr3-inner">
                                                <h3 className="wt-title"><a href="project-single.html">New York Housing Project</a></h3>
                                                <span className="project-new-category">Apartment</span>
                                                <a href="project-single.html" className="site-button-icon site-text-primary"><i className="flaticon-right"></i></a>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                {/*  If we need navigation buttons  */}
                                <div className="swiper-button-prev"></div>
                                <div className="swiper-button-next"></div>

                            </div>
                        </div>
                    </div>
                    {/*  LATEST PROJECTS SLIDER END  */}


                </div>

                <Footer />
            </div>
        </>
    );
}