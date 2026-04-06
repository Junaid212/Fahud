import Link from 'next/link';
import Image from 'next/image';

export default function ServicesSection() {
  return (
    <div className="section-full p-t120 p-b90">
      <div className="container">
        <div className="s-section-three">
          <div className="row d-flex justify-content-center">
            {/* COLUMNS 1 */}
            <div className="col-lg-4 col-md-6 m-b30">
              <div className="icon-box-style-three-title">
                <div className="icon-box-style-three-title-bg">
                  {/* TITLE START */}
                  <div className="section-head left wt-small-separator-outer">
                    <div className="wt-small-separator site-text-primary">
                      <i className="bi bi-house"></i>
                      <div>What You Prefer!</div>
                    </div>
                    <h2 className="wt-title title_split_anim">What We Do</h2>
                  </div>
                  {/* TITLE END */}
                </div>
              </div>
            </div>

            {/* COLUMNS 2 */}
            <div className="col-lg-4 col-md-6 m-b30">
              <div className="icon-box-style-three-wrap">
                <div className="icon-box-style-three">
                  <div className="wt-icon-box-wraper">
                    <div className="icon-lg">
                      <span className="icon-cell site-text-primary">
                        <img src={`${process.env.NODE_ENV === "production" ? "/Fahud" : ""}/images/icons/furniture-2.png`} alt="Image" />
                      </span>
                    </div>
                  </div>
                  <div className="icon-box-three-title">
                    <h3 className="wt-title"><Link href="/service-detail">Interior</Link></h3>
                  </div>
                  <div className="icon-box-three-content">
                    <p>We provide custom-made furniture and artwork, rugs, plants and accessories for personality and charm.</p>
                    <Link href="/service-detail" className="site-button-link site-text-primary">Read More</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* COLUMNS 3 */}
            <div className="col-lg-4 col-md-6 m-b30">
              <div className="icon-box-style-three-wrap">
                <div className="icon-box-style-three">
                  <div className="wt-icon-box-wraper">
                    <div className="icon-lg">
                      <span className="icon-cell site-text-primary">
                        <img src={`${process.env.NODE_ENV === "production" ? "/Fahud" : ""}/images/icons/window.png`} alt="Image" />
                      </span>
                    </div>
                  </div>
                  <div className="icon-box-three-title">
                    <h3 className="wt-title"><Link href="/service-detail">Exterior</Link></h3>
                  </div>
                  <div className="icon-box-three-content">
                    <p>Landscaping and Planning Outdoor Spaces Gardens, Lawns, Patios and Outdoor Seating Areas.</p>
                    <Link href="/service-detail" className="site-button-link site-text-primary">Read More</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* COLUMNS 4 */}
            <div className="col-lg-4 col-md-6 m-b30">
              <div className="icon-box-style-three-wrap">
                <div className="icon-box-style-three">
                  <div className="wt-icon-box-wraper">
                    <div className="icon-lg">
                      <span className="icon-cell site-text-primary">
                        <img src={`${process.env.NODE_ENV === "production" ? "/Fahud" : ""}/images/icons/candles.png`} alt="Image" />
                      </span>
                    </div>
                  </div>
                  <div className="icon-box-three-title">
                    <h3 className="wt-title"><Link href="/service-detail">Decoration</Link></h3>
                  </div>
                  <div className="icon-box-three-content">
                    <p>We have Designing spaces for festive occasions, weddings, or corporate events.</p>
                    <Link href="/service-detail" className="site-button-link site-text-primary">Read More</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* COLUMNS 5 */}
            <div className="col-lg-4 col-md-6 m-b30">
              <div className="icon-box-style-three-wrap">
                <div className="icon-box-style-three">
                  <div className="wt-icon-box-wraper">
                    <div className="icon-lg">
                      <span className="icon-cell site-text-primary">
                        <img src={`${process.env.NODE_ENV === "production" ? "/Fahud" : ""}/images/icons/curtain.png`} alt="Image" />
                      </span>
                    </div>
                  </div>
                  <div className="icon-box-three-title">
                    <h3 className="wt-title"><Link href="/service-detail">Furniture</Link></h3>
                  </div>
                  <div className="icon-box-three-content">
                    <p>Offering designs in various styles modern, traditional, industrial, minimalist, or luxury.</p>
                    <Link href="/service-detail" className="site-button-link site-text-primary">Read More</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* COLUMNS 6 */}
            <div className="col-lg-4 col-md-6 m-b30">
              <div className="icon-box-style-three-wrap">
                <div className="icon-box-style-three">
                  <div className="wt-icon-box-wraper">
                    <div className="icon-lg">
                      <span className="icon-cell site-text-primary">
                        <img src={`${process.env.NODE_ENV === "production" ? "/Fahud" : ""}/images/icons/key.png`} alt="Image" />
                      </span>
                    </div>
                  </div>
                  <div className="icon-box-three-title">
                    <h3 className="wt-title"><Link href="/service-detail">Exclusively</Link></h3>
                  </div>
                  <div className="icon-box-three-content">
                    <p>Designing boutique spaces tailored to niche markets—luxury residences, elite offices, or high-end retail stores.</p>
                    <Link href="/service-detail" className="site-button-link site-text-primary">Read More</Link>
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
