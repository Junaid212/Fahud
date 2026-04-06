import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InnerBanner from '@/components/InnerBanner';

export default function OurTeamDetail() {
  return (
    <>
      <div className="page-wraper">
        <Header />
        
        <div className="page-content">
          <InnerBanner title="Our Teams Detail" />
          

            

            {/*  OUR TEAM START  */}
            <div className="section-full p-t120 p-b90">
                <div className="container">
                    <div className="section-content team_details_area">

                        <div className="team_details_inner m-b30">
                            <div className="row justify-content-center">
                                <div className="col-lg-5 col-md-4">
                                    <div className="wt-team-1">
                                        <div className="wt-media">
                                            <img src="images/team-detail/pic1.jpg" alt="" />
                                        </div> 
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-8">
                                    <div className="team-detail-full">
                                        <h2 className="team-name">David Tomson</h2>
                                        <span className="team-position">Founder & CEO</span>                                        
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                                        <ul className="team-detail-list">
                                            <li><span className="team-list-title">Contact Number:</span><span>(251) 53661246741</span></li>
                                            <li><span className="team-list-title">Email:</span><span >hello@thewebmax.com</span></li>
                                            <li><span className="team-list-title">Joing Date:</span><span>July 28, 2021</span></li>
                                            <li><span className="team-list-title">Services & Support:</span><span>autocad, sketchUp, visual basic, 3d premier</span></li>
                                            <li><span className="team-list-title">Address:</span><span>32, Wales Street, New York, USA</span></li>
                                            <li><span className="team-list-title">Experience:</span><span>6+ Years</span></li>
                                        </ul>
                                    </div> 
                                </div>
                            </div>
                        </div>

                        <div className="team-detail-discription row">
                            <div className="col-md-8">
                                <div className="team-deatail-featured m-b50">
                                    <h3 className="wt-title">Award Winning Architect And Designer</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                                    <p>The printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="our-skills-item-wrap wow">
                                    <h3 className="twm-title">Our Skills </h3>
                                    <div className="row">
        
                                        <div className="col-md-12 m-b30">
                                            <div className="our-skills-item">
                                                <span className="progressText">Architecture</span>
                                                <div className="progress-box">
                                                    <div className="progress">
                                                        <div className="progress-bar wow progress-bar-anim site-bg-primary" data-wow-delay="0ms" data-wow-duration="2000ms" role="progressbar" style={{"-ProgressBarCount":"85%"}}>
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
                                                        <div className="progress-bar wow progress-bar-anim site-bg-primary" data-wow-delay="0ms" data-wow-duration="2000ms" role="progressbar" style={{"-ProgressBarCount":"85%"}}>
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
                                                        <div className="progress-bar wow progress-bar-anim site-bg-primary" data-wow-delay="0ms" data-wow-duration="2000ms" role="progressbar" style={{"-ProgressBarCount":"80%"}}>
                                                            <span>80%</span>
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
            </div>   
            {/*  OUR TEAM SECTION END  */}
     
        
        </div>
        
        <Footer />
      </div>
    </>
  );
}