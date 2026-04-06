import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InnerBanner from '@/components/InnerBanner';

export default function ProjectSingle() {
  return (
    <>
      <div className="page-wraper">
        <Header />
        
        <div className="page-content">
          <InnerBanner title="Project single" />
          

             

            {/*  Info SECTION START  */}
            <div className="section-full p-t120 p-b90 bg-gray">
                <div className="container">                               
                    <div className="section-content"> 
                        {/* About Some info Sction */}
                        <div className="twm-pro-sin-wrap">
                            <div className="twm-pro-sin-media  parallax-section">
                                <div className="parallax-image" style={{"backgroundImage":"url(images/project-detail/large-pic.jpg)"}}></div>
                            </div>
                        </div>
                        {/* About Some info Sction */}
                        <div className="project-single">

                            <div className="project-single-media-wrap">
                                <div className="owl-carousel project-single-img-slider m-b30">
                                    {/* Column-1 */}
                                    <div className="item">
                                        <div className="project-single-media">
                                            <img src="images/project-detail/thumb/t1.jpg" alt="" />
                                            <a className="elem" href="images/project-detail/m1.jpg" title="01 Project Image" data-lcl-txt="" data-lcl-author="" data-lcl-thumb="images/project-detail/m1.jpg">
                                                <i className="fa fa-search-plus"></i>     
                                            </a>
                                        </div>
                                    </div>
                                    {/* Column-2 */}
                                    <div className="item">
                                        <div className="project-single-media">
                                            <img src="images/project-detail/thumb/t2.jpg" alt="" />
                                            <a className="elem" href="images/project-detail/m2.jpg" title="02 Project Image" data-lcl-txt="" data-lcl-author="" data-lcl-thumb="images/project-detail/m2.jpg">
                                                <i className="fa fa-search-plus"></i>     
                                            </a>
                                        </div>
                                    </div>
                                    {/* Column-3 */}
                                    <div className="item">
                                        <div className="project-single-media">
                                            <img src="images/project-detail/thumb/t3.jpg" alt="" />
                                            <a className="elem" href="images/project-detail/m3.jpg" title="03 Project Image" data-lcl-txt="" data-lcl-author="" data-lcl-thumb="images/project-detail/m3.jpg">
                                                <i className="fa fa-search-plus"></i>     
                                            </a>
                                        </div>
                                    </div>
                                    {/* Column-4 */}
                                    <div className="item">
                                        <div className="project-single-media">
                                            <img src="images/project-detail/thumb/t4.jpg" alt="" />
                                            <a className="elem" href="images/project-detail/m4.jpg" title="04 Project Image" data-lcl-txt="" data-lcl-author="" data-lcl-thumb="images/project-detail/m4.jpg">
                                                <i className="fa fa-search-plus"></i>     
                                            </a>
                                        </div>
                                    </div>
                                    {/* Column-5 */}
                                    <div className="item">
                                        <div className="project-single-media">
                                            <img src="images/project-detail/thumb/t5.jpg" alt="" />
                                            <a className="elem" href="images/project-detail/m5.jpg" title="05 Project Image" data-lcl-txt="" data-lcl-author="" data-lcl-thumb="images/project-detail/m5.jpg">
                                                <i className="fa fa-search-plus"></i>     
                                            </a>
                                        </div>
                                    </div>
                                    {/* Column-6 */}
                                    <div className="item">
                                        <div className="project-single-media">
                                            <img src="images/project-detail/thumb/t6.jpg" alt="" />
                                            <a className="elem" href="images/project-detail/m6.jpg" title="06 Project Image" data-lcl-txt="" data-lcl-author="" data-lcl-thumb="images/project-detail/m6.jpg">
                                                <i className="fa fa-search-plus"></i>     
                                            </a>
                                        </div>
                                    </div>
                                    {/* Column-7 */}
                                    <div className="item">
                                        <div className="project-single-media">
                                            <img src="images/project-detail/thumb/t7.jpg" alt="" />
                                            <a className="elem" href="images/project-detail/m7.jpg" title="07 Project Image" data-lcl-txt="" data-lcl-author="" data-lcl-thumb="images/project-detail/m7.jpg">
                                                <i className="fa fa-search-plus"></i>     
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="project-single-sibar-info m-b30">
                                <ul className="info-list-1">
                                    <li><h4 className="title">Category :</h4><span>Contruction, Building</span></li>
                                    <li><h4 className="title">Duration :</h4><span>2 Year</span></li>
                                    <li><h4 className="title">Project Year :</h4><span>20 Jan 2025</span></li>
                                    <li><h4 className="title">Price :</h4><span>$26 Million</span></li>
                                    <li><h4 className="title">Clients :</h4><span>Christopher Bloom</span></li>
                                    <li><h4 className="title">Location :</h4><span>48 Fauver Mine Rd Raphine, Virginia(VA), 24472</span></li>
                                </ul>
                            </div>

                            <div className="project-single-row-section m-b30">
                                <h2 className="wt-tilte1">Green Square Apartments and Building Projects in Dubai</h2>
                                <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui
                                dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                                aellt port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. 
                                lorem ipsum is local dummy text of the printing and typesetting industry.
                                lorem ipsum has been the ndustry and dummy text ever since the 1500s.
                                </p>
                                <p>Denouncing pleasure and praising pain was born and I will give you a complete account of the system, and the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes,avoids pleasure itself, because it is ple because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor aganthere and anyone or desires to obtain pain of itself, because it is pain, but because occasionally circumstances.
                                </p>
                                <h3 className="wt-tilte2">How We Solve This Project</h3>
                                <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehen derit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </div>

                            <div className="faq-right-content">
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
            {/*  Info  SECTION END  */}

        
        </div>
        
        <Footer />
      </div>
    </>
  );
}