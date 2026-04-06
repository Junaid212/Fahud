import Image from 'next/image';
import Link from 'next/link';

export default function HeroSlider() {
  return (
    <div className="twm-slider1-wrap slider-circle-pic-wrap">
      <div className="slider2-left-sidebar">
        <div className="slider2-left-sidebar-position">
          <div className="slider2-l-social">
            <ul className="social2-icons">
              <li><a className="bg-dribble-clr" href="#">dribbble<i className="bi bi-dribbble"></i></a></li>
              <li><a className="bg-behance-clr" href="#">behance<i className="bi bi-behance"></i></a></li>
              <li><a className="bg-twitter-clr" href="#">twitter<i className="bi bi-twitter-x"></i></a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="swiper twm-slider1">
        <div className="swiper-wrapper twm-slider1-slides">
          <div className="swiper-slide">
            <img src={`${process.env.NODE_ENV === "production" ? "/Fahud" : ""}/images/main-slider/slider1/pic1.png`} alt="" />
          </div>
          <div className="swiper-slide">
            <img src={`${process.env.NODE_ENV === "production" ? "/Fahud" : ""}/images/main-slider/slider1/pic2.png`} alt="" />
          </div>
          <div className="swiper-slide">
            <img src={`${process.env.NODE_ENV === "production" ? "/Fahud" : ""}/images/main-slider/slider1/pic3.png`} alt="" />
          </div>
        </div>
        <div className="controls-area">
          <div className="swiper-pagination"></div>
          <div className="buttons-controls">
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </div>
          <div className="swiper-scrollbar"></div>
        </div>
      </div>

      <div className="swiper twm-slider1-content">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="twm-slider1-content-inner">
              <div className="twm-slider1-content-inner-detail">
                <span className="sm-title" data-swiper-parallax="-300">Interior Decore</span>
                <h2 className="wt-title" data-swiper-parallax="-500">
                  When you look at the modern style
                </h2>
                <Link href="#" className="site-button">Read More</Link>
              </div>
            </div>
            <div className="xl-title">
              <span data-swiper-parallax="-1000">01</span>
            </div>
          </div>

          <div className="swiper-slide">
            <div className="twm-slider1-content-inner">
              <div className="twm-slider1-content-inner-detail">
                <span className="sm-title" data-swiper-parallax="-300">Interior Decore</span>
                <h2 className="wt-title" data-swiper-parallax="-500">
                  A life full of design secrets.
                </h2>
                <Link href="#" className="site-button">Read More</Link>
              </div>
            </div>
            <div className="xl-title">
              <span data-swiper-parallax="-1000">02</span>
            </div>
          </div>

          <div className="swiper-slide">
            <div className="twm-slider1-content-inner">
              <div className="twm-slider1-content-inner-detail">
                <span className="sm-title" data-swiper-parallax="-300">Interior Decore</span>
                <h2 className="wt-title" data-swiper-parallax="-500">
                  A moments of best creation
                </h2>
                <Link href="#" className="site-button">Read More</Link>
              </div>
            </div>
            <div className="xl-title">
              <span data-swiper-parallax="-1000">03</span>
            </div>
          </div>
        </div>
        <div className="swiper-pagination"></div>
        <div className="slider-circle-pic">
          <img src={`${process.env.NODE_ENV === "production" ? "/Fahud" : ""}/images/main-slider/slider1/circle1.png`} alt="" />
        </div>
      </div>
    </div>
  );
}
