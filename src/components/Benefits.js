import Image from 'next/image';
import Link from 'next/link';

export default function Benefits() {
  return (
    <div className="section-full p-t20 p-b30  twm-we-pro-service-wrap" style={{marginBottom:'50px'}}>
      <div className="container ">
        {/* TITLE START */}
        <div className="section-head center wt-small-separator-outer">
          <div className="wt-small-separator site-text-primary">
            <i className="bi bi-house"></i>
            {/* <div>We Provide Service</div> */}
          </div>
          <h2 className="wt-title">Crtificates</h2>
        </div>
        {/* TITLE END */}
        <div className="section-content">
          <div className="service-icon-box-wrap">
            <div className="row justify-content-center d-flex">
              {/* Column 1 */}
              <div className="col-xl-4 col-lg-4 col-md-6 m-b30">
                <div className="service-icon-box-two">
                  <div className="service-media">
                    <img src={`${process.env.NODE_ENV === "production" ? "/Fahud" : ""}/images/services/10.png`} alt="" />
                  </div>
                  {/* <div className="service-icon-content">
                    <p>Buildings need to be safe and durable, considering materials, engineering, and environmental factors.</p>
                    <Link href="#" className="site-button-link site-text-primary">Read More</Link>
                  </div> */}
                  {/* <div className="service-icon-box-bootom">
                    <div className="service-icon">
                      <span><img src={`${process.env.NODE_ENV === "production" ? "/Fahud" : ""}/images/icons/skyline.png`} alt="#" /></span>
                    </div>
                    <h3 className="wt-title"><Link href="#">Architecture Design</Link></h3>
                  </div> */}
                </div>
              </div>
              {/* Column 2 */}
              <div className="col-xl-4 col-lg-4 col-md-6 m-b30">
                <div className="service-icon-box-two">
                  <div className="service-media">
                    <img src={`${process.env.NODE_ENV === "production" ? "/Fahud" : ""}/images/services/11.png`} alt="" />
                  </div>
                  {/* <div className="service-icon-content">
                    <p>Interior design is all about crafting spaces that feel comfortable, functional, and visually appealing.</p>
                    <Link href="#" className="site-button-link site-text-primary">Read More</Link>
                  </div>
                  <div className="service-icon-box-bootom">
                    <div className="service-icon">
                      <span><img src={`${process.env.NODE_ENV === "production" ? "/Fahud" : ""}/images/icons/furniture-1.png`} alt="#" /></span>
                    </div>
                    <h3 className="wt-title"><Link href="#">Interior Design</Link></h3>
                  </div> */}
                </div>
              </div>
              {/* Column 3 */}
              <div className="col-xl-4 col-lg-4 col-md-6 m-b30">
                <div className="service-icon-box-two">
                  <div className="service-media">
                    <img src={`${process.env.NODE_ENV === "production" ? "/Fahud" : ""}/images/services/12.png`} alt="" />
                  </div>
                  {/* <div className="service-icon-content">
                    <p>Compliance with local building codes, safety standards, and environmental regulations.</p>
                    <Link href="#" className="site-button-link site-text-primary">Read More</Link>
                  </div>
                  <div className="service-icon-box-bootom">
                    <div className="service-icon">
                      <span><img src={`${process.env.NODE_ENV === "production" ? "/Fahud" : ""}/images/icons/brickwall.png`} alt="#" /></span>
                    </div>
                    <h3 className="wt-title"><Link href="#">Construction Design</Link></h3>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
