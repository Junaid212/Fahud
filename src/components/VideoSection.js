import Link from 'next/link';

export default function VideoSection() {
  return (
    <div className="section-full video-section2-outer-wrap">
      <div className="video-section2-corner-top"></div>
      <div className="video-section2-corner-bottom"></div>
      <div className="watch-video">
        <span className="site-text-dark">Who We Are</span>
      </div>
      <div className="container">
        <div className="section-content">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="video-section2-outer">
                <div className="video-section2 parallax-section">
                  <img src={`${process.env.NODE_ENV === "production" ? "/Fahud" : ""}/images/fd1.png`} alt="" className="parallax-image" />
                  {/* <a href="https://player.vimeo.com/video/845982181?color=ffffff&title=0&byline=0&portrait=0" className="mfp-video play-now-video">
                    <i className="icon fa fa-play"></i>
                    <span className="ripple"></span>
                  </a> */}
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="video-section2-right">
                {/* TITLE START */}
                <div className="section-head left wt-small-separator-outer">
                  <div className="wt-small-separator site-text-primary">
                    <i className="bi bi-shield-check"></i>
                    <div>About FAHUD</div>
                  </div>
                  <h2 className="wt-title title_split_anim">About FAHUD Safety & Technical Trading Oman</h2>
                  <p>FAHUD Safety & Technical Trading Oman is a trusted provider of industrial safety products and PPE equipment, serving industries like oil & gas, mining, and construction. We deliver high-quality, durable, and internationally compliant safety solutions designed to protect workers and improve workplace efficiency.</p>
                  <p>Our range includes safety signs, harnesses, and protective gear, offered at competitive prices without compromising on quality. We are committed to helping businesses create safer and more productive work environments.</p>
                </div>
                {/* TITLE END */}

                <Link href="/about-1" className="site-button">Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
