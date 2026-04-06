export default function HeroSection() {
  return (
    <>
      {/* Banner Section Start */}
      <div className="slider-outer">
        <div className="slider-left-sidebar">
          <div className="slider-left-sidebar-position">
            <div className="slider-l-social">
              <ul className="social-icons">
                <li><a href="https://www.x.com"><i className="bi bi-twitter-x cursor-scale small"></i></a></li>
                <li><a href="https://www.facebook.com"><i className="bi bi-facebook cursor-scale small"></i></a></li>
                <li><a href="https://www.instagram.com"><i className="bi bi-instagram cursor-scale small"></i></a></li>
                <li><a href="https://www.pinterest.com/"><i className="bi bi-pinterest cursor-scale small"></i></a></li>
              </ul>
            </div>
            {/* <div className="share-text"><span>Share</span></div> */}
          </div>
        </div>

        <div className="slider-space-left">
          {/* SLIDER START */}
          <div className="slider-space-left-area">
            <div className="hm2-half-text-efct">
              Fahud
              <span>Fahud</span>
              <span>Fahud</span>
              <span>Safety &amp; Technical Trading</span>
            </div>
            <h2 className="hme2-large-text title_split_anim">
              Reliable Safety Products & Solutions
            </h2>
          </div>

          <div className="hme2-mini-text-wrap">
            <div className="circle-text2">
              <div className="emblem-wrap">
                <div className="emblem">Safety-and-Technical-Trading-</div>
                {/* <i><img src="/images/in-circle-bx.png" alt="In Circle Pic" /></i> */}
              </div>
            </div>

            <div className="hme2-mini-text">
              Providing innovative, high-quality safety solutions that enhance workplace protection and promote a strong safety culture.
            </div>

            <div className="hme2-bnr-review-box-wrap">
              <div className="hme2-bnr-review-box-section">
                <div className="hme2-bnr-review-box">
                  <span className="hme2-bnr-review-pic first-bx cursor-scale small"><img src="https://static.wixstatic.com/media/11062b_37eacc12491c48669cb14dae47385d90~mv2.jpeg/v1/crop/x_1496,y_0,w_2717,h_3806/fill/w_788,h_1104,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Happy%20Man%20.jpeg" alt="" /></span>
                  <span className="hme2-bnr-review-pic cursor-scale small"><img src="https://static.wixstatic.com/media/c076a325850e41408868b0b984c0078b.jpg/v1/crop/x_123,y_0,w_2845,h_3986/fill/w_788,h_1104,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Worker%20with%20Yellow%20Helmet.jpg" alt="" /></span>
                  {/* <span className="hme2-bnr-review-pic cursor-scale small"><img src="/images/main-slider/slider2/follower/3.jpg" alt="" /></span> */}
                  <span className="hme2-bnr-review-text">+</span>
                </div>
                <div className="hme2-bnr-review-line"></div>
                <div className="hme2-bnr-review-rate">
                  <span><i className="bi bi-star-fill"></i></span>
                  <span><i className="bi bi-star-fill"></i></span>
                  <span><i className="bi bi-star-fill"></i></span>
                  <span><i className="bi bi-star-fill"></i></span>
                  <span><i className="bi bi-star-half"></i></span>
                </div>
                <div className="hme2-bnr-review-b-title">
                  <span>(4.9)</span> Positive Reviews
                </div>
              </div>

              <a className="hme2-btn cursor-scale" href="/contact"><i className="bi bi-arrow-return-right"></i></a>
            </div>
          </div>
          {/* SLIDER END */}
        </div>
      </div>
      {/* Banner Section End */}

      {/* Slider Section */}
      {/* <div className="twm-Fahud-2slider">
        <div className="section">
          <div className="container">
            <div className="Fahud-sl-2">
              <div className="swiper-wrapper">
                {[
                  { num: '01', title: 'Architecture Designs', img: 'slide1.jpg' },
                  { num: '02', title: 'Construction Design', img: 'slide2.jpg' },
                  { num: '03', title: 'Interior and Exterior Design', img: 'slide3.jpg' },
                  { num: '04', title: 'Landscape Architecture', img: 'slide4.jpg' },
                  { num: '01', title: 'Architecture Designs', img: 'slide1.jpg' },
                  { num: '02', title: 'Construction Design', img: 'slide2.jpg' },
                  { num: '03', title: 'Interior and Exterior Design', img: 'slide3.jpg' },
                  { num: '04', title: 'Landscape Architecture', img: 'slide4.jpg' },
                ].map((slide, i) => (
                  <div key={i} className="swiper-slide">
                    <div className="people__card">
                      <img src={`/images/main-slider/slider2/${slide.img}`} alt="Image" className="people__card__image" />
                      <div className="people__card__content">
                        <div className="slide__number">{slide.num}</div>
                        <div className="slide__title">{slide.title}</div>
                        <a href="/service-detail" className="site-button">Read More</a>
                      </div>
                      <div className="slide__gradient"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* Slider Section End */}
    </>
  );
}
