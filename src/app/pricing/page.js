import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InnerBanner from '@/components/InnerBanner';

export default function Pricing() {
  return (
    <>
      <div className="page-wraper">
        <Header />
        
        <div className="page-content">
          <InnerBanner title="Pricing" />
          

            

            {/*  PRICING TABLE SECTION START  */}
            <div className="section-full p-t120 p-b90">
                <div className="container">

                    {/*  TITLE START */}
                    <div className="section-head center wt-small-separator-outer text-center text-white">
                        <div className="wt-small-separator site-text-secondry">
                            <i className="bi bi-house"></i>
                            <div>Pricing</div>
                        </div>
                        <h2 className="wt-title  title_split_anim">Best offer pricing table.</h2>
                    </div>
                    {/*  TITLE END */}
                            
                    <div className="section-content">
                        <div className="pricing-block-outer2">
                            <div className="row  align-items-center justify-content-center">
                                {/*  Column 1  */}
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
                                {/*  Column 2  */}
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
                                {/*  Column 3  */}
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
            </div>   
            {/*  PRICING TABLE SECTION END  */}

            {/*  PRICING TABLE SECTION START  */}
            <div className="section-full p-t120 p-b90 twm-pricing-block-wrap">
                <div className="container">

                    {/*  TITLE START */}
                    <div className="section-head center wt-small-separator-outer text-center text-white">
                        <div className="wt-small-separator site-text-secondry">
                            <i className="bi bi-house"></i>
                            <div>Pricing</div>
                        </div>
                        <h2 className="wt-title  title_split_anim">We will give the best offer pricing table.</h2>
                    </div>
                    {/*  TITLE END */}
                            
                    <div className="section-content">
                        <div className="pricing-block-outer">
                            <div className="row">
                                {/*  Row 1  */}
                                <div className="col-lg-12 m-b30">
                                    <div className="pricing-table-1">
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
                                                    <li className="li-disable"><i className="bi bi-x"></i>Ideal for refreshing a single room or space</li>
                                                </ul>
                                            </div>

                                            <div className="p-table-btn">
                                                <a href="about-1.html" className="site-button ">Purchase</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*  Row 2  */}
                                <div className="col-lg-12 m-b30">
                                    <div className="pricing-table-1 pricing-highlight">
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
                                {/*  Row 3  */}
                                <div className="col-lg-12 m-b30">
                                    <div className="pricing-table-1">
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
                                                    <li><i className="bi bi-check2"></i>Detailed site analysis and feasibility study</li>
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
            </div>   
            {/*  PRICING TABLE SECTION END  */}


        
        </div>
        
        <Footer />
      </div>
    </>
  );
}