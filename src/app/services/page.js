import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InnerBanner from '@/components/InnerBanner';
import WhatWeDoSection from '@/components/home2/WhatWeDoSection';
import FooterNew from '@/components/FooterNew';

export default function Services() {
  return (
    <>
      <div className="page-wraper">
        <Header />
        
        <div className="page-content">
          <InnerBanner title="Services" />
          <WhatWeDoSection />
               
             
            {/*  WE PROVIDE SERVICE SECTION START  */}
            {/* <div className="section-full p-t120 p-b90">
                <div className="container"> */}
                    
                    {/*  TITLE START */}
                    {/* <div className="section-head center wt-small-separator-outer">
                        <div className="wt-small-separator site-text-primary">
                            <i className="bi bi-house"></i>
                            <div>We Provide Service</div>
                        </div>
                        <h2 className="wt-title title_split_anim">Benefits You Get When Using Our Services</h2>
                    </div> */}
                    {/*  TITLE END */} 

                    {/* <div className="section-content">
                        <div className="service-icon-box-wrap">                 
                            <div className="row justify-content-center d-flex"> */}
                                {/* Column-1 */}
                                {/* <div className="col-xl-4 col-lg-6 col-md-6 m-b30">
                                    <div className="service-icon-box-two">
                                        <div className="service-media"><img src="images/services/1.jpg" alt="" /></div>
                                        <div className="service-icon-content">
                                            <p>Buildings need to be safe and durable, considering materials, engineering, and environmental factors.</p>
                                            <a href="service-detail.html" className="site-button-link site-text-primary">Read More</a>
                                        </div>
                                        <div className="service-icon-box-bootom">
                                            <div className="service-icon"><span><img src="images/icons/skyline.png" alt="#" /></span></div>
                                            <h3 className="wt-title"><a href="service-detail.html">Architecture Design</a></h3>
                                        </div>
                                        
                                    </div>
                                </div> */}
                                {/* Column-2 */}
                                {/* <div className="col-xl-4 col-lg-6 col-md-6 m-b30">
                                    <div className="service-icon-box-two">
                                        <div className="service-media"><img src="images/services/2.jpg" alt="" /></div>
                                        <div className="service-icon-content">
                                            <p>Interior design is all about crafting spaces that feel comfortable, functional, and visually appealing. </p>
                                            <a href="service-detail.html" className="site-button-link site-text-primary">Read More</a>
                                        </div>
                                        
                                        <div className="service-icon-box-bootom">
                                            <div className="service-icon"><span><img src="images/icons/furniture-1.png" alt="#" /></span></div>
                                            <h3 className="wt-title"><a href="service-detail.html">Interior Design</a></h3>
                                        </div>
                                    </div>
                                </div> */}
                                {/* Column-3 */}    
                                {/* <div className="col-xl-4 col-lg-6 col-md-6 m-b30">
                                    <div className="service-icon-box-two">
                                        <div className="service-media"><img src="images/services/3.jpg" alt="" /></div>
                                        <div className="service-icon-content">
                                            <p>Compliance with local building codes, safety standards, and environmental regulations.</p>
                                            <a href="service-detail.html" className="site-button-link site-text-primary">Read More</a>
                                        </div>
                                        <div className="service-icon-box-bootom">
                                            <div className="service-icon"><span><img src="images/icons/brickwall.png" alt="#" /></span></div>
                                            <h3 className="wt-title"><a href="service-detail.html">Construction Design</a></h3>
                                        </div>
                                    </div>
                                </div> */}
                                {/* Column-4 */}
                                {/* <div className="col-xl-4 col-lg-6 col-md-6 m-b30">
                                    <div className="service-icon-box-two">
                                        <div className="service-media"><img src="images/services/4.jpg" alt="" /></div>
                                        <div className="service-icon-content">
                                            <p>Landscape architecture is where nature meets design, shaping outdoor spaces that are both functional and visually stunning.</p>
                                            <a href="service-detail.html" className="site-button-link site-text-primary">Read More</a>
                                        </div>
                                        <div className="service-icon-box-bootom">
                                            <div className="service-icon"><span><img src="images/icons/skyline.png" alt="#" /></span></div>
                                            <h3 className="wt-title"><a href="service-detail.html">Landscape Design</a></h3>
                                        </div>
                                        
                                    </div>
                                </div> */}
                                {/* Column-5 */}
                                {/* <div className="col-xl-4 col-lg-6 col-md-6 m-b30">
                                    <div className="service-icon-box-two">
                                        <div className="service-media"><img src="images/services/5.jpg" alt="" /></div>
                                        <div className="service-icon-content">
                                            <p>It encompasses architecture, interior design, landscaping, and urban planning to shape homes that suit.</p>
                                            <a href="service-detail.html" className="site-button-link site-text-primary">Read More</a>
                                        </div>
                                        
                                        <div className="service-icon-box-bootom">
                                            <div className="service-icon"><span><img src="images/icons/furniture-1.png" alt="#" /></span></div>
                                            <h3 className="wt-title"><a href="service-detail.html">Residential Design</a></h3>
                                        </div>
                                    </div>
                                </div> */}
                                {/* Column-6 */}    
                                {/* <div className="col-xl-4 col-lg-6 col-md-6 m-b30">
                                    <div className="service-icon-box-two">
                                        <div className="service-media"><img src="images/services/6.jpg" alt="" /></div>
                                        <div className="service-icon-content">
                                            <p>Residential design projects involve careful planning to create functional and aesthetically pleasing homes. </p>
                                            <a href="service-detail.html" className="site-button-link site-text-primary">Read More</a>
                                        </div>
                                        <div className="service-icon-box-bootom">
                                            <div className="service-icon"><span><img src="images/icons/brickwall.png" alt="#" /></span></div>
                                            <h3 className="wt-title"><a href="service-detail.html">Plans And Project</a></h3>
                                        </div>
                                    </div>
                                </div>  */}
                            {/* </div>
                        </div>
                    </div> 

                </div>
                
            </div>    */}
            {/*  WE PROVIDE SERVICE SECTION END  */} 
            
            {/*  AWARDS SECTION START  */}
            {/* <div className="section-full twm-achi-section-wrap p-t120 p-b90 " style={{"backgroundImage":"url(images/background/count-bg.jpg)"}}>
                <div className="container">
                    <div className="twm-achi-section-content">
                        <div className="twm-achi-section-title">
                            <h2 className="title title_split_anim">Awards and recognitions received for <span>Architecture</span> and <span>Interior</span> design</h2> 
                        </div>
                    </div>
                    <div className="twm-achi-bx">
                        <ul className="flex flex-fd-c flex-jc-sb">
                           
                            <li>
                                <div className="twm-achi-bx-conent">
                                    <div className="twm-achi-bx-date"><b>03</b>2020</div>
                                    <span>Interior Stylist Delmotes & Co.</span>
                                    <div className="hover-reveal image01">
                                        <img className="hidden-img"  src="images/award/pic1.jpg" alt="pic1" />
                                    </div>
                                </div>
                            </li>
                
                            
                            <li>
                                <div className="twm-achi-bx-conent">
                                    <div className="twm-achi-bx-date"><b>06</b>2021</div>
                                    <span>Design Assistant laurel Living Designs</span>
                                    
                                    <div className="hover-reveal image02">
                                        <img className="hidden-img"  src="images/award/pic2.jpg"  alt="pic2" />
                                    </div>
                                </div>
                            </li>
                
                            
                            <li>
                                <div className="twm-achi-bx-conent">
                                    <div className="twm-achi-bx-date"><b>09</b>2022</div>
                                    <span>Junior Interior Designer ABC Home Design Company</span>
                                    
                                    <div className="hover-reveal image03">
                                        <img className="hidden-img" src="images/award/pic3.jpg"  alt="pic3" />
                                    </div>
                                </div>
                            </li>
                
                            
                            <li>
                                <div className="twm-achi-bx-conent">
                                    <div className="twm-achi-bx-date"><b>05</b>2023</div>
                                    <span>Interior Designer & Project Coordinator Bridgerton Community Center</span>
                                    
                                    <div className="hover-reveal image04">
                                        <img className="hidden-img" src="images/award/pic4.jpg"  alt="pic4" />
                                    </div>
                                </div>
                            </li>

                            
                            <li>
                                <div className="twm-achi-bx-conent">
                                    <div className="twm-achi-bx-date"><b>01</b>2025</div>
                                    <span>BFA in Interior Design, Minor in Architectural History Sorbonne University Paris, France </span>
                                    
                                    <div className="hover-reveal image04">
                                        <img className="hidden-img" src="images/award/pic5.jpg"  alt="pic5" />
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>  
                </div>
            </div> */}
            {/* AWARDS SECTION END  */}

            {/*  PRICING TABLE SECTION START  */}
            {/* <div className="section-full p-t120 p-b90">
                <div className="container">

                    
                    <div className="section-head center wt-small-separator-outer text-center text-white">
                        <div className="wt-small-separator site-text-secondry">
                            <i className="bi bi-house"></i>
                            <div>Pricing</div>
                        </div>
                        <h2 className="wt-title  title_split_anim">Best offer pricing table.</h2>
                    </div>
                
                            
                    <div className="section-content">
                        <div className="pricing-block-outer2">
                            <div className="row  align-items-center justify-content-center">
                               
                                <div className="col-lg-4 col-md-6  m-b30">
                                    <div className="pricing-table-2">
                                        <div className="p-table-title">
                                            <h3 className="wt-title">
                                                Basic Plan
                                            </h3>
                                        </div>
                                        <div className="pricing-table-content site-bg-white">
                                            <div className="p-table-price">
                                                <span>$17</span>
                                                <p>Per/month</p>
                                            </div>
                                            <div className="p-table-list">
                                                <ul>
                                                    <li><i className="bi bi-check2"></i>Interior Design</li>
                                                    <li><i className="bi bi-check2"></i>Custom design concept</li>
                                                    <li className="li-disable"><i className="bi bi-x"></i>Floor plan and elevations</li>
                                                    <li className="li-disable"><i className="bi bi-x"></i>Refreshing a single room or space</li>
                                                </ul>
                                            </div>

                                            <div className="p-table-btn">
                                                <a href="about-1.html" className="site-button ">Purchase</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-4 col-md-6  m-b30">
                                    <div className="pricing-table-2 pricing-highlight">
                                        <div className="p-table-title">
                                            <h3 className="wt-title">
                                                Standard Plan
                                            </h3>
                                        </div>
                                        <div className="pricing-table-content  site-bg-white">
                                            <div className="p-table-price">
                                                <span>$35</span>
                                                <p>Per/month</p>
                                            </div>
                                            <div className="p-table-list">
                                                <ul>
                                                    <li><i className="bi bi-check2"></i>Architectural Design</li>
                                                    <li><i className="bi bi-check2"></i>Project Management</li>
                                                    <li><i className="bi bi-check2"></i>Full project management services</li>
                                                    <li><i className="bi bi-check2"></i>Co-ordination with contractors</li>
                                                </ul>
                                            </div>

                                            <div className="p-table-btn">
                                                <a href="about-1.html" className="site-button ">Purchase</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               
                                <div className="col-lg-4 col-md-6  m-b30">
                                    <div className="pricing-table-2">
                                        <div className="p-table-title">
                                            <h3 className="wt-title">
                                                Business Plan
                                            </h3>
                                        </div>
                                        <div className="pricing-table-content  site-bg-white">
                                            <div className="p-table-price">
                                                <span>$59</span>
                                                <p>Per/month</p>
                                            </div>
                                            <div className="p-table-list">
                                                <ul>
                                                    <li><i className="bi bi-check2"></i>Architectural Design</li>
                                                    <li><i className="bi bi-check2"></i>Consultation with principal architect</li>
                                                    <li><i className="bi bi-check2"></i>Analysis and feasibility study</li>
                                                    <li><i className="bi bi-check2"></i>Custom design concept</li>
                                                    
                                                </ul>
                                            </div>
                                            <div className="p-table-btn">
                                                <a href="about-1.html" className="site-button ">Purchase</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>                                
                            </div>
                        </div>
                    </div>      
                        
                </div>
            </div>    */}
            {/*  PRICING TABLE SECTION END  */}        

     
        
        </div>
        
        <FooterNew />
      </div>
    </>
  );
}