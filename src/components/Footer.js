import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <footer className="site-footer footer-dark">
        {/* FOOTER BLOCKS START */}
        <div className="footer-top">
          <div className="container">
            <div className="row">

              {/* Col 1 — Brand */}
              <div className="col-lg-4 col-md-12">
                <div className="widget widget_about">
                  <div className="logo-footer clearfix">
                    <Link href="/">
                      <img src="/images/fd.png" alt="FAHUD Safety" style={{ height: '60px', width: 'auto' }} />
                    </Link>
                  </div>
                  <div className="call-us">
                    <a href="tel:+96824478888">+968 2447 8888</a>
                  </div>
                  <p>
                    FAHUD Safety &amp; Technical Trading Oman — your trusted partner for
                    industrial safety products, PPE equipment, and technical solutions
                    across Oman.
                  </p>
                  <ul className="social-icons">
                    <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook cursor-scale small"></i></a></li>
                    <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram cursor-scale small"></i></a></li>
                    <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin cursor-scale small"></i></a></li>
                    <li><a href="https://www.x.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-twitter-x cursor-scale small"></i></a></li>
                  </ul>
                </div>
              </div>

              {/* Col 2 — Contact */}
              <div className="col-lg-4 col-md-6">
                <div className="widget f-top-space">
                  <h3 className="widget-title">Contact Us</h3>
                  <ul className="widget_address">
                    <li>
                      <i className="bi bi-geo-alt"></i>
                      <span>Head Office</span>
                      Fahud, Ad Dhahirah Governorate,
                      Sultanate of Oman
                    </li>
                    <li>
                      <i className="bi bi-geo-alt"></i>
                      <span>Muscat Office</span>
                      Al Khuwair, Muscat, Oman
                    </li>
                    <li><i className="bi bi-envelope"></i>info@fahudoman.com</li>
                    <li><i className="bi bi-telephone"></i>+968 2447 8888</li>
                  </ul>
                </div>
              </div>

              {/* Col 3 — Services */}
              <div className="col-lg-4 col-md-6">
                <div className="widget f-top-space">
                  <h3 className="widget-title">Our Services</h3>
                  <ul className="widget_address">
                    <li>
                      <i className="bi bi-shield-check"></i>
                      <Link href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Safety PPE Equipment</Link>
                    </li>
                    <li>
                      <i className="bi bi-tools"></i>
                      <Link href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Industrial Fasteners</Link>
                    </li>
                    <li>
                      <i className="bi bi-wrench-adjustable"></i>
                      <Link href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Welding Consumables</Link>
                    </li>
                    <li>
                      <i className="bi bi-box-seam"></i>
                      <Link href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Lifting Solutions</Link>
                    </li>
                    <li>
                      <i className="bi bi-gear"></i>
                      <Link href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Metal Fabrication</Link>
                    </li>
                    <li>
                      <i className="bi bi-mortarboard"></i>
                      <Link href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Safety Training</Link>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* FOOTER COPYRIGHT */}
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-bottom-info d-flex justify-content-between">
              <div className="wt-footer-bot-left">
                <span className="copyrights-text">
                  © {new Date().getFullYear()}  FAHUD Safety &amp; Technical Trading Oman. All Rights Reserved.
                </span>
              </div>
              <div className="wt-footer-bot-right">
                <ul className="copyrights-nav">
                  <li><Link href="/about-1">About Us</Link></li>
                  <li><Link href="#">Services</Link></li>
                  <li><Link href="#">Contact Us</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* BUTTON TOP START */}
      <button className="scroltop">
        <span className="fa fa-angle-up relative" id="btn-vibrate"></span>
      </button>
    </>
  );
}
