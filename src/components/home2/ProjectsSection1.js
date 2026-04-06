const projects = [
  { num: 'Our Mission', title: 'To become a global leader in safety products and safety consulting by delivering high-quality, ethically sourced solutions. We aim to uphold strong business ethics and carefully select products that meet international safety standards while ensuring reliability and performance.', category: 'Appartment', img: 'https://static.wixstatic.com/media/11062b_5ab4677bdc254af3850b8ad464394c9e~mv2.jpg/v1/fill/w_948,h_691,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_5ab4677bdc254af3850b8ad464394c9e~mv2.jpg', desc: 'To become a global leader in safety products and safety consulting by delivering high-quality, ethically sourced solutions. We aim to uphold strong business ethics and carefully select products that meet international safety standards while ensuring reliability and performance.' },
  { num: 'Our Vision', title: 'To enhance workplace safety by educating workers, improving safety awareness, and promoting safe work practices. We strive to provide innovative, reliable, and high-quality safety products from trusted manufacturers without compromising on quality or standards.', category: 'Building', img: 'https://static.wixstatic.com/media/11062b_f9bf0e96a1534282bfbd72d01fa9beac~mv2.jpg/v1/fill/w_950,h_691,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_f9bf0e96a1534282bfbd72d01fa9beac~mv2.jpg', desc: 'A Mountain Hotel is a type of hospitality establishment designed to accommodate guests in mountainous or elevated regions, often catering to tourists seeking outdoor activities like skiing, hiking, or simply enjoying the natural landscape.' },
  // { num: '03', title: 'New York Housing Project', category: 'Appartment', img: '3.jpg', desc: 'New York Housing Project refers to public or government-subsidized residential buildings or communities in New York City that are designed to provide affordable housing to low- and moderate-income residents.' },
  // { num: '04', title: 'House Extensions', category: 'Building Construction', img: '4.jpg', desc: 'The exterior of a house is crucial for aesthetics, durability, and energy efficiency. Modern, strong, and fire-resistant. Durable and mimics wood or stone. Smooth and modern, suitable for warm climates.' },
  // { num: '05', title: 'Renovation', category: 'Renovation, Architecture', img: '5.jpg', desc: 'Renovating a home can improve functionality, aesthetics, and value. Whether you\'re updating a single room or the entire house, here are the essential aspects to focus on: Check local regulations for structural changes, electrical, and plumbing work.' },
  // { num: '06', title: 'Tehla Mines Project', category: 'Mines', img: '6.jpg', desc: 'Mine construction involves developing the necessary infrastructure, excavation, and safety measures required to extract minerals. Large excavation sites for surface mineral extraction.' },
];

export default function ProjectsSection1() {
  return (
    <div className="section-full twm-product-v-scroll-wrap">
      <div className="container">
        <div className="locker">

          <div className="locker__image">
            <div className="locker__container">
              <div className="locker-title">Fahud</div>
              {projects.map((p, i) => (
                <img key={i} className={`image image--${i + 1}`} src={p.img} alt="Image" />
              ))}
            </div>
          </div>

          <div className="locker__content">
            {projects.map((p, i) => (
              <div key={i} className={`locker__section locker__section--${i + 1} cb`} data-swap={`image--${i + 1}`}>
                <div className="twm-product-v-scroll-bx">
                  <div className="twm-product-v-image-on-responsive">
                    <img src={p.img} alt="Image" />
                  </div>
                  <div className="twm-product-v-scroll-count">{p.num}</div>
                  <h3 className="twm-product-v-scroll-title">
                    <a href="/project-single">{p.title}</a>
                  </h3>
                  {/* <div className="twm-product-v-scroll-category">{p.category}</div> */}
                  <div className="twm-product-v-scroll-content">
                    {/* <p>{p.desc}</p> */}
                  </div>
                  <div className="twm-product-v-scroll-btn">
                    {/* <a href="/project-single" className="site-button-icon"><i className="bi bi-arrow-up-right"></i></a> */}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
