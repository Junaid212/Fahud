import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InnerBanner from '@/components/InnerBanner';

export default function Project2() {
  return (
    <>
      <div className="page-wraper">
        <Header />
        
        <div className="page-content">
          <InnerBanner title="Project 2" />
          

              

            {/*  Project 2 SECTION START  */}
            <div className="section-full p-t120 p-b90">
                <div className="container-fluid">
                    {/*  PAGINATION START  */}
                    <div className="filter-wrap">
                        <ul className="masonry-filter">
                            <li className="active"><a data-filter="*" href="#">All</a></li>
                            <li><a data-filter=".cat-1" href="#">Residetial</a></li>
                            <li><a data-filter=".cat-2" href="#">Commercial</a></li>
                            <li><a data-filter=".cat-3" href="#">Industrial</a></li>
                            <li><a data-filter=".cat-4" href="#">Architecture</a></li>
                            <li><a data-filter=".cat-5" href="#">Plumbing</a></li> 
                        </ul>
                    </div>
                    {/*  PAGINATION END  */}
                    
                    {/*  PROJECT CONTENT START  */}
                    <div className="masonry-wrap row clearfix d-flex justify-content-center flex-wrap">
                        {/*  COLUMNS 1  */}
                        <div className="masonry-item cat-1 col-xl-3 col-lg-4 col-md-6 m-b30">
                            <div className="project-new-2">
                                <div className="wt-img-effect">
                                    <img src="images/project-3/m1.jpg" alt="" />
                                </div>
                                <div className="project-new-content">
                                    <h3 className="wt-title"><a href="project-single.html">Nh-16 Highway Bridge</a></h3>
                                    <p>You can dream, create, design and build the  most wonderful place in the world.</p>
                                </div>
                            </div>                        
                        </div>

                        {/*  COLUMNS 2  */}
                        <div className="masonry-item cat-2 col-xl-3 col-lg-4 col-md-6 m-b30">
                            <div className="project-new-2">
                                <div className="wt-img-effect">
                                    <img src="images/project-3/m2.jpg" alt="" />
                                </div>
                                <div className="project-new-content">
                                    <h3 className="wt-title"><a href="project-single.html">Ruma Dam Project</a></h3>
                                    <p>You can dream, create, design and build the most wonderful place in the world.</p>
                                </div>
                            </div>                            
                        </div>                    

                        {/*  COLUMNS 3  */}
                        <div className="masonry-item cat-3 col-xl-3 col-lg-4 col-md-6 m-b30">
                            <div className="project-new-2">
                                <div className="wt-img-effect">
                                    <img src="images/project-3/m3.jpg" alt="" />
                                </div>
                                <div className="project-new-content">
                                    <h3 className="wt-title"><a href="project-single.html">New York Housing Project</a></h3>
                                    <p>You can dream, create, design and build the most wonderful place in the world.</p>
                                </div>
                            </div>                            
                        </div>                    

                        {/*  COLUMNS 4  */}
                        <div className="masonry-item cat-4 col-xl-3 col-lg-4 col-md-6 m-b30">
                            <div className="project-new-2">
                                <div className="wt-img-effect">
                                    <img src="images/project-3/m4.jpg" alt="" />
                                </div>
                                <div className="project-new-content">
                                    <h3 className="wt-title"><a href="project-single.html">House Extensions</a></h3>
                                    <p>You can dream, create, design and build the most wonderful place in the world.</p>
                                </div>
                            </div>                            
                        </div>                    

                        {/*  COLUMNS 5  */}
                        <div className="masonry-item cat-5 col-xl-3 col-lg-4 col-md-6 m-b30">
                            <div className="project-new-2">
                                <div className="wt-img-effect">
                                    <img src="images/project-3/m5.jpg" alt="" />
                                </div>
                                <div className="project-new-content">
                                    <h3 className="wt-title"><a href="project-single.html">Renovation</a></h3>
                                    <p>You can dream, create, design and build the most wonderful place in the world.</p>
                                </div>
                            </div>                           
                        </div>                    

                        {/*  COLUMNS 6  */}
                        <div className="masonry-item cat-1 col-xl-3 col-lg-4 col-md-6 m-b30">
                            <div className="project-new-2">
                                <div className="wt-img-effect">
                                    <img src="images/project-3/m6.jpg" alt="" />
                                </div>
                                <div className="project-new-content">
                                    <h3 className="wt-title"><a href="project-single.html">Tehla Mines Project</a></h3>
                                    <p>You can dream, create, design and build the most wonderful place in the world.</p>
                                </div>
                            </div>                         
                        </div>

                        {/*  COLUMNS 7  */}
                        <div className="masonry-item cat-2 col-xl-3 col-lg-4 col-md-6 m-b30">
                            <div className="project-new-2">
                                <div className="wt-img-effect">
                                    <img src="images/project-3/m7.jpg" alt="" />
                                </div>
                                <div className="project-new-content">
                                    <h3 className="wt-title"><a href="project-single.html">Nh-16 Highway Bridge</a></h3>
                                    <p>You can dream, create, design and build the  most wonderful place in the world.</p>
                                </div>
                            </div>                        
                        </div>

                        {/*  COLUMNS 8  */}
                        <div className="masonry-item cat-3 col-xl-3 col-lg-4 col-md-6 m-b30">
                            <div className="project-new-2">
                                <div className="wt-img-effect">
                                    <img src="images/project-3/m8.jpg" alt="" />
                                </div>
                                <div className="project-new-content">
                                    <h3 className="wt-title"><a href="project-single.html">Ruma Dam Project</a></h3>
                                    <p>You can dream, create, design and build the most wonderful place in the world.</p>
                                </div>
                            </div>                            
                        </div>                    
                                                                                                                                    
                    </div>
                    {/*  PROJECT CONTENT END  */} 
                </div>
            </div>   
            {/*  Project 2 SECTION END  */}

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