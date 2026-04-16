const testimonials = [
  {
    text: '"Wide range of safety equipment available here. Safety shoes, protective equipment, fire extinguisher refilling, etc available under a single roof. Great after sales service too"',
    name: 'Abdul Mohamed',
    position: 'Product Manager',
    pic: 'https://static.wixstatic.com/media/11062b_37eacc12491c48669cb14dae47385d90~mv2.jpeg/v1/crop/x_1496,y_0,w_2717,h_3806/fill/w_788,h_1104,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Happy%20Man%20.jpeg',
  },
  {
    text: '"We will get good quality, all kind of industrial safety products with good post sale services. Very customer centric and happy with the stop overall."',
    name: 'Alexa Young',
    position: 'Safety Manager',
    pic: 'https://static.wixstatic.com/media/c076a325850e41408868b0b984c0078b.jpg/v1/crop/x_123,y_0,w_2845,h_3986/fill/w_788,h_1104,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Worker%20with%20Yellow%20Helmet.jpg',
  },
  // {
  //   text: '"I never imagined how much a well-thought-out interior could enhance my daily routine. The blend of aesthetics and practicality made my home feel both stylish and functional."',
  //   name: 'Shirley Gibson',
  //   position: 'Ceo, Google inc',
  //   pic: 'pic3.jpg',
  // },
  // {
  //   text: '"This architectural firm delivered innovation beyond what we imagined. The structure not only stands as a masterpiece but also embodies sustainability, efficiency, and timeless beauty."',
  //   name: 'Mike Hardson',
  //   position: 'Ceo, Founder',
  //   pic: 'pic1.jpg',
  // },
];

export default function TestimonialsSection() {
  return (
    <div className="section-full testimonial2-outer-wrap p-t50 p-b90 parallax-section">
      <div className="parallax-image" style={{ backgroundImage: 'url(${process.env.NODE_ENV === "production" ? "/Fahud" : ""}/images/project-3/165.webp)' }}></div>
      <div className="container">
        <div className="testimonial2-outer">
          <div className="section-head center wt-small-separator-outer when-bg-dark">
            <div className="wt-small-separator site-text-primary">
              <i className="bi bi-house"></i>
              <div>Testimonials</div>
            </div>
            <h2 className="wt-title title_split_anim">What Our Clients Says</h2>
          </div>

          <div className="section-content">
            <div className="swiper twm-t-monial-2-slider testimonial-2-content">
              <div className="swiper-wrapper">
                {testimonials.map((t, i) => (
                  <div key={i} className="swiper-slide">
                    <div className="testimonial-2">
                      <div className="testimonial-content">
                        <div className="testimonial-text">
                          <p>{t.text}</p>
                          <i className="bi bi-quote"></i>
                        </div>
                        <div className="testimonial-detail">
                          <div className="testimonial-pic-block">
                            <div className="testimonial-pic">
                              {/* <img src={`/images/testimonials/${t.pic}`} alt="" /> */}
                              <img src={t.pic} alt="" />
                            </div>
                          </div>
                          <div className="testimonial-info">
                            <span className="testimonial-name">{t.name}</span>
                            <span className="testimonial-position">{t.position}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
