import Link from 'next/link';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <div className="section-full p-t120 p-b90 about-section-one-wrap">
      <div className="about-section-one">
        <div className="container">
          <div className="section-content">
            <div className="row">
              <div className="col-lg-5 col-md-12 m-b30">
                <div className="company-exp-full-info">
                  {/* TITLE START */}
                  <div className="section-head left wt-small-separator-outer">
                    <div className="wt-small-separator site-text-primary">
                      <i className="bi bi-house"></i>
                      <div>Welcome Fahud</div>
                    </div>
                    <h2 className="wt-title title_split_anim">We Provide You The Best Experience SINCE 2016</h2>
                    <p>
                      Architecture and interior company must be doing some incredible work—shaping spaces that are both
                      functional and visually stunning! Whether you're designing structures or crafting interiors, your
                      expertise likely combines creativity.
                    </p>
                    <p>
                      carefully crafted to suit any interior design website. Certainly, Fahud will help you to build an
                      out sanding period.
                    </p>
                  </div>
                  {/* TITLE END */}
                  <Link href="/about-2" className="site-button">Read More</Link>
                </div>
              </div>
              <div className="col-lg-7 col-md-12 m-b30 company-exp-position">
                <div className="company-exp">
                  <div className="company-exp-media">
                    <img src="/images/about2/l-pic.jpg" alt="" />
                  </div>
                  <div className="company-exp-tagline">
                    <span>Leading Developer Of Commercial And Residential Projects</span>
                    <Link href="/service-detail" className="site-button-link site-text-primary">Read More</Link>
                  </div>
                  <div className="circle-text1">
                    <div className="emblem-wrap">
                      <div className="emblem">Architecture-And-Interior-Design-</div>
                      <i><img src="/images/in-circle-bx.png" alt="In Circle Pic" /></i>
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
