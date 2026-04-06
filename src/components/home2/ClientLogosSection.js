const clientLogos = ['1.png', '2.png', '3.png', '4.png', '5.png', '1.png', '3.png', '1.png', '2.png', '3.png', '4.png', '5.png', '1.png', '3.png'];

export default function ClientLogosSection() {
  return (
    <div className="section-full Client-logo-style1-wrap">
      <div className="section-content">
        <div className="home-client-carousel2-wrap">
          <div className="swiper home-client-carousel2">
            <div className="swiper-wrapper">
              {clientLogos.map((logo, i) => (
                <div key={i} className="swiper-slide">
                  <div className="ow-client-logo">
                    <div className="client-logo client-logo-media">
                      <a href="/about-2">
                        <img src={`/images/client-logo/dark/${logo}`} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
