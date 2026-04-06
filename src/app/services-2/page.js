import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InnerBanner from '@/components/InnerBanner';

export default function Services2() {
  return (
    <>
      <div className="page-wraper">
        <Header />
        
        <div className="page-content">
          <InnerBanner title="Service 2" />
          

                     


            {/*  WE PROVIDE SERVICE SECTION START  */}
            <div className="section-full p-t120 p-b90">
                <div className="container">
                    
                    {/*  TITLE START */}
                    <div className="section-head center wt-small-separator-outer">
                        <div className="wt-small-separator site-text-primary">
                            <i className="bi bi-house"></i>
                            <div>We Provide Service</div>
                        </div>
                        <h2 className="wt-title title_split_anim">Benefits You Get When Using Our Services</h2>
                    </div>
                    {/*  TITLE END */} 

                
                    <div className="section-content">
                        <div className="service-icon-box-wrap"> 
                            <div className="row justify-content-center d-flex">
                            
                                <div className="col-xl-6 col-lg-6 col-md-12 m-b30">
                                    <div className="service-icon-box-one-section">
                                        <div className="service-icon-box-one">
                                         <div className="service-icon-content">
                                             <h3 className="wt-title"><a href="service-detail.html">Architecture Design</a></h3>
                                             <p>Architecture design is a fascinating blend of art and engineering, shaping the spaces where people live, work, and interact. It involves everything from conceptualizing aesthetic forms to solving structural.</p>
                                                 <a href="service-detail.html" className="site-button-link site-text-primary">Read More</a>
                                         </div>
                                         <div className="service-icon">
                                             <img src="images/icons/sketch.png" alt="" />
                                         </div>
                                         <div className="img-animate">
                                             <img src="images/icons/sketch.png" alt="" />
                                         </div>
                                        </div>  
                                     </div>    
                                </div>
                                
                                <div className="col-xl-6 col-lg-6 col-md-12 m-b30">
                                    <div className="service-icon-box-one-section">
                                        <div className="service-icon-box-one">
                                            <div className="service-icon-content">
                                                <h3 className="wt-title"><a href="service-detail.html">Construction Design</a></h3>
                                                <p>Construction design is all about translating architectural concepts into functional, buildable structures. It covers everything from site planning and material selection to structural integrity and sustainability.</p>
                                                <a href="service-detail.html" className="site-button-link site-text-primary">Read More</a>
                                            </div>
                                            <div className="service-icon">
                                                <img src="images/icons/brickwall.png" alt="" />
                                            </div>
                                            <div className="img-animate">
                                                <img src="images/icons/brickwall.png" alt="" />
                                            </div>
                                        </div>
                                    </div>   
                                </div>
                                    
                                <div className="col-xl-6 col-lg-6 col-md-12 m-b30">
                                    <div className="service-icon-box-one-section">
                                        <div className="service-icon-box-one">
                                            <div className="service-icon-content">
                                                <h3 className="wt-title"><a href="service-detail.html">Interior Design</a></h3>
                                                <p>Interior design is the art and science of enhancing spaces to create functional, aesthetically pleasing environments. It goes beyond just decoration—it involves spatial planning, color psychology.</p>
                                                <a href="service-detail.html" className="site-button-link site-text-primary">Read More</a>
                                            </div>
                                            <div className="service-icon">
                                                <img src="images/icons/curtain.png" alt="" />
                                            </div>
                                            <div className="img-animate">
                                                <img src="images/icons/curtain.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-xl-6 col-lg-6 col-md-12 m-b30">
                                    <div className="service-icon-box-one-section">
                                        <div className="service-icon-box-one">
                                            <div className="service-icon-content">
                                                <h3 className="wt-title"><a href="service-detail.html">Landscape Architecture</a></h3>
                                                <p>Landscape architecture is where nature meets design, shaping outdoor spaces that are both functional and visually stunning. It goes beyond just planting trees and flowers it involves creating environments.</p>
                                                <a href="service-detail.html" className="site-button-link site-text-primary">Read More</a>
                                            </div>
                                            <div className="service-icon">
                                                <img src="images/icons/skyline.png" alt="" />
                                            </div>
                                            <div className="img-animate">
                                                <img src="images/icons/skyline.png" alt="" />
                                            </div>
                                        </div>
                                    </div>    
                                </div>
                                
                                <div className="col-xl-6 col-lg-6 col-md-12 m-b30">
                                    <div className="service-icon-box-one-section">
                                        <div className="service-icon-box-one">
                                         <div className="service-icon-content">
                                             <h3 className="wt-title"><a href="service-detail.html">Space Planning</a></h3>
                                             <p>Architecture design is a fascinating blend of art and engineering, shaping the spaces where people live, work, and interact. It involves everything from conceptualizing aesthetic forms to solving structural.</p>
                                                 <a href="service-detail.html" className="site-button-link site-text-primary">Read More</a>
                                         </div>
                                         <div className="service-icon">
                                             <img src="images/icons/interior-design.png" alt="" />
                                         </div>
                                         <div className="img-animate">
                                             <img src="images/icons/interior-design.png" alt="" />
                                         </div>
                                        </div>  
                                     </div>    
                                </div>
                                
                                <div className="col-xl-6 col-lg-6 col-md-12 m-b30">
                                    <div className="service-icon-box-one-section">
                                        <div className="service-icon-box-one">
                                            <div className="service-icon-content">
                                                <h3 className="wt-title"><a href="service-detail.html">Virtual Design Assistance</a></h3>
                                                <p>Construction design is all about translating architectural concepts into functional, buildable structures. It covers everything from site planning and material selection to structural integrity and sustainability.</p>
                                                <a href="service-detail.html" className="site-button-link site-text-primary">Read More</a>
                                            </div>
                                            <div className="service-icon">
                                                <img src="images/icons/vda2.png" alt="" />
                                            </div>
                                            <div className="img-animate">
                                                <img src="images/icons/vda2.png" alt="" />
                                            </div>
                                        </div>
                                    </div>   
                                </div>
                                                    
                            </div>
                        </div>
                    </div> 

                </div>
            </div>   
            {/*  WE PROVIDE SERVICE SECTION END  */} 

            {/*  VIDEO SECTION START  */}
            <div className="section-full  video-section-outer-wrap">
            	<div className=" parallax-section">
                    <div className="parallax-content">
                        <div className="container">
                            <div className="video-section-outer">
                                <div className="video-section">
                                    <a href="https://player.vimeo.com/video/845982181?color=ffffff&amp;title=0&amp;byline=0&amp;portrait=0" className="mfp-video play-now-video">
                                        <i className="icon fa fa-play"></i>
                                        <span className="ripple"></span>
                                    </a>                                              
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="get-intouch-style-2  overlay-wraper p-t120 p-b120 parallax-image" style={{"backgroundImage":"url(images/background/getintouch.jpg)"}}>
                    </div>
                </div>
            </div>   
            {/*  VIDEO SERVICE  SECTION END  */} 

            {/*  OUR BLOG START  */}
            <div className="section-full   p-t120 p-b90 ">
                <div className="blog-gallery-block-outer">
                    <div className="container">
                        {/*  TITLE START */}
                        <div className="section-head center wt-small-separator-outer">
                            <div className="wt-small-separator site-text-primary">
                                <i className="bi bi-house"></i>
                                <div>Our Latest Blog</div>                                
                            </div>
                            <h2 className="wt-title  title_split_anim">Our Latest News</h2>
                        </div>
                        {/*  TITLE END */}
                        <div className="section-content"> 
                            <div className="blog-gallery-style1">
                                <div className="row justify-content-center">
                                    {/*  COLUMNS 1  */} 
                                    <div className="col-lg-6 col-md-12">
                                        <div className="row">

                                            {/*  COLUMNS 1  */} 
                                            <div className="col-lg-12 col-md-12  m-b30">
                                                <div className="blog-post blog-post-3-outer blg-half-blck">
                                                    <div className="wt-post-media">
                                                        <a href="blog-single.html">
                                                            <img src="images/blog/latest/bg4.jpg" alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="wt-post-info">
                                                        <div className="post-category">
                                                            <a href="javascript:;">Construction</a>
                                                        </div>
                                                        <div className="wt-post-title ">
                                                            <h3 className="post-title">
                                                                <a href="blog-single.html">The Secret to a Stylish Bedroom Makeover on a Budget</a>
                                                            </h3>
                                                        </div>
                                                        <div className="wt-post-readmore ">
                                                            <a href="blog-single.html" className="site-button-link site-text-primary">Read More</a>
                                                        </div>                                        
                                                    </div>                                
                                                </div>
                                            </div>

                                            {/*  COLUMNS 2  */} 
                                            <div className="col-lg-6 col-md-12  m-b30">
                                                <div className="blog-post blog-post-3-outer blg-half-blck">
                                                    <div className="wt-post-media">
                                                        <a href="blog-single.html">
                                                            <img src="images/blog/latest/bg2.jpg" alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="wt-post-info">
                                                        <div className="post-category">
                                                            <a href="javascript:;">Furniture</a>
                                                        </div>
                                                        <div className="wt-post-title ">
                                                            <h3 className="post-title">
                                                                <a href="blog-single.html">Do You Know How Home Value is Affected </a>
                                                            </h3>
                                                        </div>
                                                        <div className="wt-post-readmore ">
                                                            <a href="blog-single.html" className="site-button-link site-text-primary">Read More</a>
                                                        </div>                                        
                                                    </div>                                
                                                </div>
                                            </div>

                                            {/*  COLUMNS 3  */} 
                                            <div className="col-lg-6 col-md-12  m-b30">
                                                <div className="blog-post blog-post-3-outer blg-half-blck">
                                                    <div className="wt-post-media">
                                                        <a href="blog-single.html">
                                                            <img src="images/blog/latest/bg3.jpg" alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="wt-post-info">
                                                        <div className="post-category">
                                                            <a href="javascript:;">Interior</a>
                                                        </div>
                                                        <div className="wt-post-title ">
                                                            <h3 className="post-title">
                                                                <a href="blog-single.html">Innovative Pop Design Ideas For Modern Interiors</a>
                                                            </h3>
                                                        </div>
                                                        <div className="wt-post-readmore ">
                                                            <a href="blog-single.html" className="site-button-link site-text-primary">Read More</a>
                                                        </div>                                        
                                                    </div>                                
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-12  m-b30">
                                        <div className="blog-post blog-post-4-outer">
                                            <div className="wt-post-media">
                                                <a href="blog-single.html"><img src="images/blog/latest/bg1.jpg" alt="Image" /></a>
                                                <div className="post-date"><span>14</span> April 2025</div>
                                            </div>
                                            <div className="wt-post-info">
                                                <div className="post-category">
                                                    <a href="javascript:;">Architecure</a>
                                                    <a href="javascript:;">Interior</a>
                                                </div>
                                                <div className="wt-post-meta ">
                                                    <ul>
                                                        <li className="post-author"><img src="images/blog/blog-author/pic3.jpg" alt="Image" /><span>Devid</span></li>
                                                        <li className="post-comment"><i className="bi bi-chat-left"></i> 24 </li>
                                                        <li className="post-time"><i className="bi bi-clock"></i> 14 Days </li>
                                                    </ul>
                                                </div> 
                                                <div className="wt-post-title ">
                                                    <h3 className="post-title"><a href="blog-single.html">Architectural elements often include clean lines and a focus on natural light.</a></h3>
                                                </div>
                                                <div className="wt-post-readmore ">
                                                    <a href="blog-single.html" className="site-button-link site-text-primary">Read More</a>
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

     
        
        </div>
        
        <Footer />
      </div>
    </>
  );
}