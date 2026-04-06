import Link from 'next/link';
import Image from 'next/image';

export default function TeamSection() {
  return (
    <div className="section-full p-t120 p-b90">
      <div className="container">
        {/* TITLE START */}
        <div className="section-head center wt-small-separator-outer">
          <div className="wt-small-separator site-text-primary">
            <i className="bi bi-house"></i>
            <div>Meet Our Team</div>
          </div>
          <h2 className="wt-title title_split_anim">Best Experts</h2>
        </div>
        {/* TITLE END */}
      </div>

      <div className="container">
        <div className="section-content">
          <div className="team-box2-wraper">
            <div className="row justify-content-center">
              {/* Column 1 */}
              <div className="col-xl-4 col-lg-4 col-md-6 m-b30">
                <div className="team-effect-hvr2">
                  <div className="team-hvr2-media">
                    <img src="/images/team/pic2.jpg" alt="" />
                  </div>
                  
                  <div className="content-info">
                    <div className="content-info-inner">
                      <div className="info-detail">
                        <h3 className="wt-title"><Link href="/our-team-detail">Ashley Sanchez</Link></h3>
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
                    <img src="/images/team/pic3.jpg" alt="" />
                  </div>
                  
                  <div className="content-info">
                    <div className="content-info-inner">
                      <div className="info-detail">
                        <h3 className="wt-title"><Link href="/our-team-detail">Juliana Bryant</Link></h3>
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
                    <img src="/images/team/pic4.jpg" alt="" />
                  </div>
                  
                  <div className="content-info">
                    <div className="content-info-inner">
                      <div className="info-detail">
                        <h3 className="wt-title"><Link href="/our-team-detail">Shirley Gibson</Link></h3>
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
  );
}
