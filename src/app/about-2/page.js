import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InnerBanner from '@/components/InnerBanner';

export default function About2() {
    return (
        <>
            <div className="page-wraper">
                <Header />

                <div className="page-content">
                    <InnerBanner title="About Us 2" />




                    {/* About Some info Sction */}
                    <div className="twm-abt2-s-info">
                        <div className="container">
                            <div className="twm-abt2-certi-info">
                                <h2 className="title">Certificates</h2>
                                <div className="twm-abt2-certi-info-detail">
                                    <p>the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.
                                    </p>
                                    <p>it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="twm-abt2-s-info-media  parallax-section">
                            <div className="parallax-image" style={{ "backgroundImage": "url(images/background/ab2.jpg)" }}></div>
                        </div>
                        <div className="twm-abt2-certi">
                            <ul className="twm-abt2-certi-list-bx">
                                <li>
                                    <div className="twm-abt2-certi-list">
                                        <span>01</span>
                                        <h4 className="title">Construction Document Technologist</h4>
                                    </div>
                                </li>
                                <li>
                                    <div className="twm-abt2-certi-list">
                                        <span>02</span>
                                        <h4 className="title">Registered Roof Observer</h4>
                                    </div>
                                </li>
                                <li>
                                    <div className="twm-abt2-certi-list">
                                        <span>03</span>
                                        <h4 className="title">Professional Engineer</h4>
                                    </div>
                                </li>
                                <li>
                                    <div className="twm-abt2-certi-list">
                                        <span>04</span>
                                        <h4 className="title">Registered Roof Consultant</h4>
                                    </div>
                                </li>
                                <li>
                                    <div className="twm-abt2-certi-list">
                                        <span>05</span>
                                        <h4 className="title">Certified Eifs Inspector</h4>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                    {/* About Some info Sction */}

                    {/*  ABOUT ONE SECTION START  */}
                    <div className="section-full p-t120  p-b90  about-section-one-wrap">
                        <div className="about-section-one">
                            <div className="container">
                                <div className="section-content">
                                    <div className="row">

                                        <div className="col-lg-7 col-md-12 m-b30 about-max-two-position">
                                            <div className="about-max-two">
                                                <div className="about-max-two-media"><img src="images/about/l-pic.jpg" alt="" /></div>
                                                <div className="about-max-two-media2-wrap">
                                                    <div className="about-max-two-media2">
                                                        <img src="images/about/s-pic.jpg" alt="" />
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="col-lg-5 col-md-12 m-b30">
                                            <div className="about-section-two-right">
                                                {/*  TITLE START */}
                                                <div className="section-head left wt-small-separator-outer">
                                                    <div className="wt-small-separator site-text-primary">
                                                        <i className="bi bi-house"></i>
                                                        <div>Welcome Fahud</div>
                                                    </div>
                                                    <h2 className="title_split_anim">We are a group of architects who help you build your dreams.</h2>
                                                    <p>Architecture and interior company must be doing some incredible work—shaping spaces that are both functional and visually stunning! Whether you're designing structures or crafting interiors, your expertise likely combines creativity.</p>

                                                </div>
                                                {/*  TITLE END */}
                                                <div className="our-skills-item-wrap wow">
                                                    <h3 className="twm-title">Our Skills </h3>
                                                    <div className="row">

                                                        <div className="col-md-12 m-b30">
                                                            <div className="our-skills-item">
                                                                <span className="progressText">Architecture</span>
                                                                <div className="progress-box">
                                                                    <div className="progress">
                                                                        <div className="progress-bar wow progress-bar-anim site-bg-primary" data-wow-delay="0ms" data-wow-duration="2000ms" role="progressbar" style={{ "-ProgressBarCount": "85%" }}>
                                                                            <span>85%</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-12 m-b30">
                                                            <div className="our-skills-item">
                                                                <span className="progressText">Interior</span>
                                                                <div className="progress-box">
                                                                    <div className="progress">
                                                                        <div className="progress-bar wow progress-bar-anim site-bg-primary" data-wow-delay="0ms" data-wow-duration="2000ms" role="progressbar" style={{ "-ProgressBarCount": "85%" }}>
                                                                            <span>85%</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-12 m-b30">
                                                            <div className="our-skills-item">
                                                                <span className="progressText">Construction</span>
                                                                <div className="progress-box">
                                                                    <div className="progress">
                                                                        <div className="progress-bar wow progress-bar-anim site-bg-primary" data-wow-delay="0ms" data-wow-duration="2000ms" role="progressbar" style={{ "-ProgressBarCount": "80%" }}>
                                                                            <span>80%</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>

                                                <a href="about-1.html" className="site-button">Read More</a>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  ABOUT ONE SECTION END  */}

                    {/*  category Section  */}
                    <div className="section-full twm-category-carousal2-area">
                        <div className="owl-carousel twm-category-carousal-slider">
                            {/*  COLUMN 1  */}
                            <div className="item">
                                <div className="twm_category_bx cursor-scale wow fadeInDown" data-wow-duration="1000ms">
                                    <span className="ao-our-categori-icon">
                                        <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
                                            <circle className="spin2" cx="400" cy="400" fill="none"
                                                r="200" stroke-width="50" stroke="#E387FF"
                                                stroke-dasharray="700 1400"
                                                stroke-linecap="round" />
                                        </svg>
                                    </span>
                                    <div className="twm-category-name">Interior</div>
                                </div>
                            </div>
                            {/*  COLUMN 2  */}
                            <div className="item">
                                <div className="twm_category_bx cursor-scale wow fadeInDown" data-wow-duration="1000ms">
                                    <span className="ao-our-categori-icon">
                                        <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
                                            <circle className="spin2" cx="400" cy="400" fill="none"
                                                r="200" stroke-width="50" stroke="#E387FF"
                                                stroke-dasharray="700 1400"
                                                stroke-linecap="round" />
                                        </svg>
                                    </span>
                                    <div className="twm-category-name">Architeture</div>
                                </div>
                            </div>
                            {/*  COLUMN 3  */}
                            <div className="item">
                                <div className="twm_category_bx cursor-scale wow fadeInDown" data-wow-duration="1000ms">
                                    <span className="ao-our-categori-icon">
                                        <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
                                            <circle className="spin2" cx="400" cy="400" fill="none"
                                                r="200" stroke-width="50" stroke="#E387FF"
                                                stroke-dasharray="700 1400"
                                                stroke-linecap="round" />
                                        </svg>
                                    </span>
                                    <div className="twm-category-name">Modern</div>
                                </div>
                            </div>
                            {/*  COLUMN 4  */}
                            <div className="item">
                                <div className="twm_category_bx cursor-scale wow fadeInDown" data-wow-duration="1000ms">
                                    <span className="ao-our-categori-icon">
                                        <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
                                            <circle className="spin2" cx="400" cy="400" fill="none"
                                                r="200" stroke-width="50" stroke="#E387FF"
                                                stroke-dasharray="700 1400"
                                                stroke-linecap="round" />
                                        </svg>
                                    </span>
                                    <div className="twm-category-name">Construction</div>
                                </div>
                            </div>
                            {/*  COLUMN 5  */}
                            <div className="item">
                                <div className="twm_category_bx cursor-scale wow fadeInDown" data-wow-duration="1000ms">
                                    <span className="ao-our-categori-icon">
                                        <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
                                            <circle className="spin2" cx="400" cy="400" fill="none"
                                                r="200" stroke-width="50" stroke="#E387FF"
                                                stroke-dasharray="700 1400"
                                                stroke-linecap="round" />
                                        </svg>
                                    </span>
                                    <div className="twm-category-name">Villa</div>
                                </div>
                            </div>
                            {/*  COLUMN 6  */}
                            <div className="item">
                                <div className="twm_category_bx cursor-scale wow fadeInDown" data-wow-duration="1000ms">
                                    <span className="ao-our-categori-icon">
                                        <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
                                            <circle className="spin2" cx="400" cy="400" fill="none"
                                                r="200" stroke-width="50" stroke="#E387FF"
                                                stroke-dasharray="700 1400"
                                                stroke-linecap="round" />
                                        </svg>
                                    </span>
                                    <div className="twm-category-name">Bathroom</div>
                                </div>
                            </div>
                            {/*  COLUMN 7  */}
                            <div className="item">
                                <div className="twm_category_bx cursor-scale wow fadeInDown" data-wow-duration="1000ms">
                                    <span className="ao-our-categori-icon">
                                        <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
                                            <circle className="spin2" cx="400" cy="400" fill="none"
                                                r="200" stroke-width="50" stroke="#E387FF"
                                                stroke-dasharray="700 1400"
                                                stroke-linecap="round" />
                                        </svg>
                                    </span>
                                    <div className="twm-category-name">Living Room</div>
                                </div>
                            </div>
                            {/*  COLUMN 8  */}
                            <div className="item">
                                <div className="twm_category_bx cursor-scale wow fadeInDown" data-wow-duration="1000ms">
                                    <span className="ao-our-categori-icon">
                                        <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
                                            <circle className="spin2" cx="400" cy="400" fill="none"
                                                r="200" stroke-width="50" stroke="#E387FF"
                                                stroke-dasharray="700 1400"
                                                stroke-linecap="round" />
                                        </svg>
                                    </span>
                                    <div className="twm-category-name">Furniture & Decoration</div>
                                </div>
                            </div>
                            {/*  COLUMN 9  */}
                            <div className="item">
                                <div className="twm_category_bx cursor-scale wow fadeInDown" data-wow-duration="1000ms">
                                    <span className="ao-our-categori-icon">
                                        <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
                                            <circle className="spin2" cx="400" cy="400" fill="none"
                                                r="200" stroke-width="50" stroke="#E387FF"
                                                stroke-dasharray="700 1400"
                                                stroke-linecap="round" />
                                        </svg>
                                    </span>
                                    <div className="twm-category-name">Floor Plan</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  category End  */}

                    {/*  OUR VALUE SECTION START  */}
                    <div className="twm-acd-st-1">
                        <div className="acd-bx" data-background="images/acd-bg/pic1.jpg" style={{ "backgroundImage": "url(&quot" }}>
                            <div className="twm-acd-overlay"></div>

                            <article className="section" data-background="images/acd-bg/pic1.jpg">
                                <span className="close">
                                    <span className="cross">
                                        <span className="a"></span>
                                        <span className="b"></span>
                                    </span>
                                </span>
                                <h2 className="heading"><span className="above">01</span>Design for Sustainability<span className="below">+</span></h2>
                                <div className="inside-content">
                                    When designing a mattress for the best in the world, we needed to think outside the box. We focused on muscle recovery through better blood circulation, joint alignment and positioning by creating new materials and cognitive performance through temperature regulation and comfort.
                                </div>
                            </article>

                            <article className="section" data-background="images/acd-bg/pic2.jpg">
                                <span className="close">
                                    <span className="cross">
                                        <span className="a"></span>
                                        <span className="b"></span>
                                    </span>
                                </span>
                                <h2 className="heading"><span className="above">02</span>Honesty & Integrity<span className="below">+</span></h2>
                                <div className="inside-content">
                                    Why is Rich eating blueberries? He loves blueberries and we captured this image of him fueling up for the day after getting a greats night’s sleep. We wanted to design a mattress that allowed you to train hard and recovery fast - and the technology packed into this mattress does just that.
                                </div>
                            </article>

                            <article className="section" data-background="images/acd-bg/pic3.jpg">
                                <span className="close">
                                    <span className="cross">
                                        <span className="a"></span>
                                        <span className="b"></span>
                                    </span>
                                </span>
                                <h2 className="heading"><span className="above">03</span>Innovative Design<span className="below">+</span></h2>
                                <div className="inside-content">
                                    Our team has developed some of the most technologically advanced materials ever created for a mattress. We set out with a goal of creating the best mattress for Rich and in turn developed the most advanced mattress anyone has ever seen. It is supportive, comfortable and affordable.
                                </div>
                            </article>

                            <article className="section" data-background="images/acd-bg/pic4.jpg">
                                <span className="close">
                                    <span className="cross">
                                        <span className="a"></span>
                                        <span className="b"></span>
                                    </span>
                                </span>
                                <h2 className="heading"><span className="above">04</span>Attention to Details<span className="below">+</span></h2>
                                <div className="inside-content">
                                    It wasn't too long ago that you had to strap a mattress to the roof of your car. We're all glad those days are over, and you no longer need to worry about buyers remorse. If for any reason you don’t love your HIBR we'll pick it up and refund your money.
                                </div>
                            </article>

                            <article className="section" data-background="images/acd-bg/pic5.jpg">
                                <span className="close">
                                    <span className="cross">
                                        <span className="a"></span>
                                        <span className="b"></span>
                                    </span>
                                </span>
                                <h2 className="heading"><span className="above">05</span>Experienced Team<span className="below">+</span></h2>
                                <div className="inside-content">
                                    It wasn't too long ago that you had to strap a mattress to the roof of your car. We're all glad those days are over, and you no longer need to worry about buyers remorse. If for any reason you don’t love your HIBR we'll pick it up and refund your money.
                                </div>
                            </article>

                            <article className="section" data-background="images/acd-bg/pic6.jpg">
                                <span className="close">
                                    <span className="cross">
                                        <span className="a"></span>
                                        <span className="b"></span>
                                    </span>
                                </span>
                                <h2 className="heading"><span className="above">06</span>Quality Craftsmanship<span className="below">+</span></h2>
                                <div className="inside-content">
                                    It wasn't too long ago that you had to strap a mattress to the roof of your car. We're all glad those days are over, and you no longer need to worry about buyers remorse. If for any reason you don’t love your HIBR we'll pick it up and refund your money.
                                </div>
                            </article>
                        </div>
                    </div>
                    {/*  OUR VALUE SECTION End  */}

                    {/*  WHAT WE DO SECTION START  */}
                    <div className="section-full p-t120 p-b90">

                        <div className="container">
                            <div className="s-section-three">
                                <div className="row d-flex justify-content-center">

                                    {/*  COLUMNS 1  */}
                                    <div className="col-lg-4 col-md-6 m-b30">
                                        <div className="icon-box-style-three-title">
                                            <div className="icon-box-style-three-title-bg">
                                                {/*  TITLE START */}
                                                <div className="section-head left wt-small-separator-outer ">
                                                    <div className="wt-small-separator site-text-primary">
                                                        <i className="bi bi-house"></i>
                                                        <div>What You Prefer!</div>
                                                    </div>
                                                    <h2 className="wt-title title_split_anim">What We Do</h2>
                                                </div>
                                                {/*  TITLE END */}
                                            </div>
                                        </div>
                                    </div>

                                    {/*  COLUMNS 2  */}
                                    <div className="col-lg-4 col-md-6 m-b30">
                                        <div className="icon-box-style-three-wrap">
                                            <div className="icon-box-style-three">

                                                <div className="wt-icon-box-wraper">
                                                    <div className="icon-lg">
                                                        <span className="icon-cell site-text-primary">
                                                            <img src="images/icons/furniture-2.png" alt="Image" /></span>
                                                    </div>
                                                </div>

                                                <div className="icon-box-three-title">
                                                    <h3 className="wt-title"><a href="service-detail.html">Interior</a></h3>
                                                </div>

                                                <div className="icon-box-three-content">
                                                    <p>We provide custom-made furniture and artwork, rugs, plants and accessories for personality and charm.</p>
                                                    <a href="service-detail.html" className="site-button-link site-text-primary">Read More</a>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    {/*  COLUMNS 3  */}
                                    <div className="col-lg-4 col-md-6 m-b30">
                                        <div className="icon-box-style-three-wrap">
                                            <div className="icon-box-style-three">

                                                <div className="wt-icon-box-wraper">
                                                    <div className="icon-lg">
                                                        <span className="icon-cell site-text-primary"><img src="images/icons/window.png" alt="Image" /></span>
                                                    </div>
                                                </div>

                                                <div className="icon-box-three-title">
                                                    <h3 className="wt-title"><a href="service-detail.html">Exterior</a></h3>
                                                </div>

                                                <div className="icon-box-three-content">
                                                    <p>Landscaping and Planning Outdoor Spaces Gardens, Lawns, Patios and Outdoor Seating Areas.</p>
                                                    <a href="service-detail.html" className="site-button-link site-text-primary">Read More</a>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    {/*  COLUMNS 4  */}
                                    <div className="col-lg-4 col-md-6 m-b30">
                                        <div className="icon-box-style-three-wrap">
                                            <div className="icon-box-style-three">

                                                <div className="wt-icon-box-wraper">
                                                    <div className="icon-lg">
                                                        <span className="icon-cell site-text-primary"><img src="images/icons/candles.png" alt="Image" /></span>
                                                    </div>
                                                </div>

                                                <div className="icon-box-three-title">
                                                    <h3 className="wt-title"><a href="service-detail.html">Decoration</a></h3>
                                                </div>

                                                <div className="icon-box-three-content">
                                                    <p>We have Designing spaces for festive occasions, weddings, or corporate events.</p>
                                                    <a href="service-detail.html" className="site-button-link site-text-primary">Read More</a>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    {/*  COLUMNS 5  */}
                                    <div className="col-lg-4 col-md-6 m-b30">
                                        <div className="icon-box-style-three-wrap">
                                            <div className="icon-box-style-three">

                                                <div className="wt-icon-box-wraper">
                                                    <div className="icon-lg">
                                                        <span className="icon-cell site-text-primary"><img src="images/icons/curtain.png" alt="Image" /></span>
                                                    </div>
                                                </div>

                                                <div className="icon-box-three-title">
                                                    <h3 className="wt-title"><a href="service-detail.html">Furniture</a></h3>
                                                </div>

                                                <div className="icon-box-three-content">
                                                    <p>Offering designs in various styles modern, traditional, industrial, minimalist, or luxury.</p>
                                                    <a href="service-detail.html" className="site-button-link site-text-primary">Read More</a>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    {/*  COLUMNS 6  */}
                                    <div className="col-lg-4 col-md-6 m-b30">
                                        <div className="icon-box-style-three-wrap">
                                            <div className="icon-box-style-three">

                                                <div className="wt-icon-box-wraper">
                                                    <div className="icon-lg">
                                                        <span className="icon-cell site-text-primary"><img src="images/icons/key.png" alt="Image" /></span>
                                                    </div>
                                                </div>

                                                <div className="icon-box-three-title">
                                                    <h3 className="wt-title"><a href="service-detail.html">Exclusively</a></h3>
                                                </div>

                                                <div className="icon-box-three-content">
                                                    <p>Designing boutique spaces tailored to niche markets—luxury residences, elite offices, or high-end retail stores.</p>
                                                    <a href="service-detail.html" className="site-button-link site-text-primary">Read More</a>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                    {/*  WHAT WE DO SECTION END  */}

                    {/*  OUR BLOG START  */}
                    <div className="section-full   p-t120 p-b90 twm-blog-outer-area">
                        <div className="blog-gallery-block-outer">
                            <div className="container">
                                {/*  TITLE START */}
                                <div className="section-head center wt-small-separator-outer">
                                    <div className="wt-small-separator site-text-primary">
                                        <i className="bi bi-house"></i>
                                        <div>Our Latest Blog</div>
                                    </div>
                                    <h2 className="wt-title title_split_anim">Our Latest News</h2>
                                </div>
                                {/*  TITLE END */}
                                <div className="section-content">
                                    <div className="blog-gallery-style1">
                                        <div className="row justify-content-center">

                                            {/*  COLUMNS 1  */}
                                            <div className="col-lg-4 col-md-6 m-b30">
                                                <div className="blog-post blog-post-5-outer">
                                                    <div className="wt-post-media">
                                                        <a href="blog-single.html"><img src="images/blog/latest-2/bg1.jpg" alt="" /></a>
                                                    </div>

                                                    <div className="wt-post-info">
                                                        <div className="wt-post-meta ">
                                                            <ul>
                                                                <li className="post-category">Construction</li>
                                                                <li className="post-date"><span>14</span> Jun 2025</li>
                                                            </ul>
                                                        </div>
                                                        <div className="wt-post-title ">
                                                            <h3 className="post-title"><a href="blog-single.html">Creating timeless elegance for your home</a></h3>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                            {/*  COLUMNS 2  */}
                                            <div className="col-lg-4 col-md-6 m-b30">
                                                <div className="blog-post blog-post-5-outer">
                                                    <div className="wt-post-media">
                                                        <a href="blog-single.html"><img src="images/blog/latest-2/bg2.jpg" alt="" /></a>
                                                    </div>

                                                    <div className="wt-post-info">
                                                        <div className="wt-post-meta ">
                                                            <ul>
                                                                <li className="post-category">Architecture</li>
                                                                <li className="post-date"><span>18</span> Jun 2025</li>
                                                            </ul>
                                                        </div>
                                                        <div className="wt-post-title ">
                                                            <h3 className="post-title"><a href="blog-single.html">Crafting elegance with a modern twist</a></h3>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                            {/*  COLUMNS 3  */}
                                            <div className="col-lg-4 col-md-6 m-b30">
                                                <div className="blog-post blog-post-5-outer">
                                                    <div className="wt-post-media">
                                                        <a href="blog-single.html"><img src="images/blog/latest-2/bg3.jpg" alt="" /></a>
                                                    </div>

                                                    <div className="wt-post-info">
                                                        <div className="wt-post-meta ">
                                                            <ul>
                                                                <li className="post-category">Interior</li>
                                                                <li className="post-date"><span>24</span> Jun 2025</li>
                                                            </ul>
                                                        </div>
                                                        <div className="wt-post-title ">
                                                            <h3 className="post-title"><a href="blog-single.html">Discover the epitome of timeless design</a></h3>
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
                    {/*  OUR BLOG END  */}

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


                </div>

                <Footer />
            </div>
        </>
    );
}