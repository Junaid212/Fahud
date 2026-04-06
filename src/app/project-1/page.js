import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InnerBanner from '@/components/InnerBanner';

export default function Project1() {
  return (
    <>
      <div className="page-wraper">
        <Header />
        
        <div className="page-content">
          <InnerBanner title="Project 1" />
          

              

            {/*  Project START  */}
            <div className="section-full p-t120 p-b90 projects-outer-full">
                <div className="container">
                    <div className="section-content">
                        <div className="project-box-style1-outer row clearfix d-flex justify-content-center flex-wrap">

                            {/*  COLUMNS 1  */}
                            <div className=" col-xl-4 col-lg-6 col-md-6">
                                <div className="twm-pro-st2">
                                    <div className="twm-pro-st2-media">
                                        <img src="images/project/1.jpg" alt="img20" />
                                        <a className="elem project-view-btn" href="images/project/1.jpg" title="Commercial Building" data-lcl-txt="" data-lcl-author="" data-lcl-thumb="images/project/1.jpg"><i className="fa fa-search-plus"></i>     
                                        </a>
                                    </div>
                                    <div className="twm-pro-st2-inner">
                                        <h3 className="wt-title"><a href="project-single.html">Commercial Building</a></h3>
                                        <span className="project-new-category">Apartment</span>
                                    </div>                                
                                </div>                      
                            </div>

                            {/*  COLUMNS 2  */}
                            <div className=" col-xl-4 col-lg-6 col-md-6">
                                <div className="twm-pro-st2">
                                    <div className="twm-pro-st2-media">
                                        <img src="images/project/2.jpg" alt="img20" />
                                        <a className="elem project-view-btn" href="images/project/2.jpg" title="Mountain Hotel" data-lcl-txt="" data-lcl-author="" data-lcl-thumb="images/project/2.jpg"><i className="fa fa-search-plus"></i>     
                                        </a>
                                    </div>
                                    <div className="twm-pro-st2-inner">
                                        <h3 className="wt-title"><a href="project-single.html">Mountain Hotel</a></h3>
                                        <span className="project-new-category">Building</span>
                                    </div>                                
                                </div>                      
                            </div>

                            {/*  COLUMNS 3  */}
                            <div className=" col-xl-4 col-lg-6 col-md-6">
                                <div className="twm-pro-st2">
                                    <div className="twm-pro-st2-media">
                                        <img src="images/project/3.jpg" alt="img20" />
                                        <a className="elem project-view-btn" href="images/project/3.jpg" title="New York Housing Project" data-lcl-txt="" data-lcl-author="" data-lcl-thumb="images/project/3.jpg"><i className="fa fa-search-plus"></i>     
                                        </a>
                                    </div>
                                    <div className="twm-pro-st2-inner">
                                        <h3 className="wt-title"><a href="project-single.html">New York Housing Project</a></h3>
                                        <span className="project-new-category">Apartment</span>
                                    </div>                                
                                </div>                      
                            </div> 
                            
                            {/*  COLUMNS 4  */}
                            <div className=" col-xl-4 col-lg-6 col-md-6">
                                <div className="twm-pro-st2">
                                    <div className="twm-pro-st2-media">
                                        <img src="images/project/4.jpg" alt="img20" />
                                        <a className="elem project-view-btn" href="images/project/4.jpg" title="House Extensions" data-lcl-txt="" data-lcl-author="" data-lcl-thumb="images/project/4.jpg"><i className="fa fa-search-plus"></i>     
                                        </a>
                                    </div>
                                    <div className="twm-pro-st2-inner">
                                        <h3 className="wt-title"><a href="project-single.html">House Extensions</a></h3>
                                        <span className="project-new-category">Construction</span>
                                    </div>                                
                                </div>                      
                            </div>
                            
                            {/*  COLUMNS 5  */}
                            <div className=" col-xl-4 col-lg-6 col-md-6">
                                <div className="twm-pro-st2">
                                    <div className="twm-pro-st2-media">
                                        <img src="images/project/5.jpg" alt="img20" />
                                        <a className="elem project-view-btn" href="images/project/5.jpg" title="Renovation" data-lcl-txt="" data-lcl-author="" data-lcl-thumb="images/project/5.jpg"><i className="fa fa-search-plus"></i>     
                                        </a>
                                    </div>
                                    <div className="twm-pro-st2-inner">
                                        <h3 className="wt-title"><a href="project-single.html">Renovation</a></h3>
                                        <span className="project-new-category">Renovation , Architecture</span>
                                    </div>                                
                                </div>                      
                            </div>
                            
                            {/*  COLUMNS 6  */}
                            <div className=" col-xl-4 col-lg-6 col-md-6">
                                <div className="twm-pro-st2">
                                    <div className="twm-pro-st2-media">
                                        <img src="images/project/6.jpg" alt="img20" />
                                        <a className="elem project-view-btn" href="images/project/6.jpg" title="Tehla Mines Project" data-lcl-txt="" data-lcl-author="" data-lcl-thumb="images/project/6.jpg"><i className="fa fa-search-plus"></i>     
                                        </a>
                                    </div>
                                    <div className="twm-pro-st2-inner">
                                        <h3 className="wt-title"><a href="project-single.html">Tehla Mines Project</a></h3>
                                        <span className="project-new-category">Mines</span>
                                    </div>                                
                                </div>                      
                            </div>
                                 
                        </div> 
                        <div className="text-center load-more-btn-outer m-t30 m-b30">
                            <button className="site-button">Load More</button>
                        </div>                           
                    </div>
                </div>      
            </div>
            {/*  Project SECTION END  */}

            {/* Counter Section Start */}
            <div className="section-full counter-outer-one-wrap  p-t120  p-b90" style={{"backgroundImage":"url(images/background/count-bg.jpg)"}}>
                <div className="container">
                    <div className="row">

                        <div className="col-lg-3 col-md-3 m-b30">
                            <div className="counter-outer-one">
                                <span className="counter">15</span>
                                <div className="icon-content-info">Years Experience</div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-3 m-b30">
                            <div className="counter-outer-one">
                                <span className="counter">65</span>
                                <div className="icon-content-info">Awards Gained</div>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-3 m-b30">
                            <div className="counter-outer-one">
                                <span className="counter">236</span>
                                <div className="icon-content-info">Projects Completed</div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-3 m-b30">
                            <div className="counter-outer-one">
                                <span className="counter">750</span>
                                <div className="icon-content-info">Happy Clients</div>
                            </div>
                        </div>
                        
                    
                    </div>
                </div>
            </div>
            {/* Counter Section End */}

            {/*  PROJECT SECTION START  */}
            <div className="section-full twm-product-v-scroll-wrap">
                <div className="container">
                    <div className="locker">

                        <div className="locker__image">
                        <div className="locker__container">
                            <div className="locker-title">Projects</div>
                            {/*  Image 1  */}
                            <img className="image image--1" src="images/project/1.jpg" alt="Image" />
                            {/*  Image 2  */}
                            <img className="image image--2" src="images/project/2.jpg" alt="Image" />
                            {/*  Image 3  */}
                            <img className="image image--3" src="images/project/3.jpg" alt="Image" />
                            {/*  Image 4  */}
                            <img className="image image--4" src="images/project/4.jpg" alt="Image" />
                            {/*  Image 5  */}
                            <img className="image image--5" src="images/project/5.jpg" alt="Image" />
                            {/*  Image 6  */}
                            <img className="image image--6" src="images/project/6.jpg" alt="Image" />
                        </div>
                        </div>
        
                        <div className="locker__content">
                            {/*  Image 1 Content  */}
                            <div className="locker__section locker__section--1 cb" data-swap="image--1">
                                <div className="twm-product-v-scroll-bx">
                                    <div className="twm-product-v-image-on-responsive"><img src="images/project/1.jpg" alt="Image" /></div>
                                    <div className="twm-product-v-scroll-count">01</div>
                                    <h3 className="twm-product-v-scroll-title"><a href="project-single.html">Commercial Building</a></h3>
                                    <div className="twm-product-v-scroll-category">Appartment</div>
                                    <div className="twm-product-v-scroll-content">
                                        <p>The location of a commercial building affects what type of business can be conducted. Local zoning laws will specify whether a location is suitable for commercial, residential, or industrial use. Sprinkler systems, fire alarms, and emergency exits.</p>
                                    </div>
                                    <div className="twm-product-v-scroll-btn">
                                        <a href="project-single.html" className="site-button-icon"><i className="bi bi-arrow-up-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            {/*  Image 2 Content  */}
                            <div className="locker__section locker__section--2 cb" data-swap="image--2">
                                <div className="twm-product-v-scroll-bx">
                                    <div className="twm-product-v-image-on-responsive"><img src="images/project/2.jpg" alt="Image" /></div>
                                    <div className="twm-product-v-scroll-count">02</div>
                                    <h3 className="twm-product-v-scroll-title"><a href="project-single.html">Mountain Hotel</a></h3>
                                    <div className="twm-product-v-scroll-category">Building</div>
                                    <div className="twm-product-v-scroll-content">
                                        <p>A Mountain Hotel is a type of hospitality establishment designed to accommodate guests in mountainous or elevated regions, often catering to tourists seeking outdoor activities like skiing, hiking, or simply enjoying the natural landscape. These hotels can range from luxurious resorts to more rustic, eco-friendly lodges. Here's a breakdown of key details for a mountain hotel:</p>
                                    </div>
                                    <a href="project-single.html" className="site-button-icon site-text-primary"><i className="bi bi-arrow-up-right"></i></a>
                                </div>
                            </div>
                            {/*  Image 3 Content  */}
                            <div className="locker__section locker__section--3 cb" data-swap="image--3">
                                <div className="twm-product-v-scroll-bx">
                                    <div className="twm-product-v-image-on-responsive"><img src="images/project/3.jpg" alt="Image" /></div>
                                    <div className="twm-product-v-scroll-count">03</div>
                                    <h3 className="twm-product-v-scroll-title"><a href="project-single.html">New York Housing Project</a></h3>
                                    <div className="twm-product-v-scroll-category">Appartment</div>
                                    <div className="twm-product-v-scroll-content">
                                        <p>New York Housing Project refers to public or government-subsidized residential buildings or communities in New York City that are designed to provide affordable housing to low- and moderate-income residents. These housing projects are typically managed by the New York City Housing Authority (NYCHA) or other public agencies. </p>
                                    </div>
                                    <a href="project-single.html" className="site-button-icon site-text-primary"><i className="bi bi-arrow-up-right"></i></a>
                                </div>
                            </div>
                            {/*  Image 4 Content  */}
                            <div className="locker__section locker__section--4 cb" data-swap="image--4">
                                <div className="twm-product-v-scroll-bx">
                                    <div className="twm-product-v-image-on-responsive"><img src="images/project/4.jpg" alt="Image" /></div>
                                    <div className="twm-product-v-scroll-count">04</div>
                                    <h3 className="twm-product-v-scroll-title"><a href="project-single.html">House Extensions</a></h3>
                                    <div className="twm-product-v-scroll-category">Building Constrction</div>
                                    <div className="twm-product-v-scroll-content">
                                        <p>The exterior of a house is crucial for aesthetics, durability, and energy efficiency. Here’s a breakdown of the essential elements to conside Modern, strong, and fire-resistant. Durable and mimics wood or stone. Smooth and modern, suitable for warm climates.</p>
                                    </div>
                                    <a href="project-single.html" className="site-button-icon site-text-primary"><i className="bi bi-arrow-up-right"></i></a>
                                </div>
                            </div>
                            {/*  Image 5 Content  */}
                            <div className="locker__section locker__section--5 cb" data-swap="image--5">
                                <div className="twm-product-v-scroll-bx">
                                    <div className="twm-product-v-image-on-responsive"><img src="images/project/5.jpg" alt="Image" /></div>
                                    <div className="twm-product-v-scroll-count">05</div>
                                    <h3 className="twm-product-v-scroll-title"><a href="project-single.html">Renovation</a></h3>
                                    <div className="twm-product-v-scroll-category">Renovation , Architecture</div>
                                    <div className="twm-product-v-scroll-content">
                                        <p>Renovating a home can improve functionality, aesthetics, and value. Whether you're updating a single room or the entire house, here are the essential aspects to focus on Check local regulations for structural changes, electrical, and plumbing work</p>
                                    </div>
                                    <a href="project-single.html" className="site-button-icon site-text-primary"><i className="bi bi-arrow-up-right"></i></a>
                                </div>
                            </div>
                            {/*  Image 6 Content  */}
                            <div className="locker__section locker__section--6 cb" data-swap="image--6">
                                <div className="twm-product-v-scroll-bx">
                                    <div className="twm-product-v-image-on-responsive"><img src="images/project/6.jpg" alt="Image" /></div>
                                    <div className="twm-product-v-scroll-count">06</div>
                                    <h3 className="twm-product-v-scroll-title"><a href="project-single.html">Tehla Mines Project</a></h3>
                                    <div className="twm-product-v-scroll-category">Mines</div>
                                    <div className="twm-product-v-scroll-content">
                                        <p>Mine construction involves developing the necessary infrastructure, excavation, and safety measures required to extract minerals. The process depends on whether the mine is underground, open-pit, or placer.Large excavation sites for surface mineral extraction.</p>
                                    </div>
                                    <a href="project-single.html" className="site-button-icon site-text-primary"><i className="bi bi-arrow-up-right"></i></a>
                                </div>
                            </div>
                        </div>
        
                    </div>
                </div>
            </div>
            {/*  PROJECT SECTION  End  */} 

            
        </div>
        
        <Footer />
      </div>
    </>
  );
}