const whatWeDo = [
  { letter: 'F', img: 'https://i.pinimg.com/736x/9c/5e/de/9c5edeb2bb7f311323ebc682816675c5.jpg',             title: 'Industrial Fasteners',      desc: 'High-quality industrial and high-tensile fasteners for durable and reliable performance in demanding environments.' },
  { letter: 'M', img: 'https://i.pinimg.com/1200x/b8/5c/a9/b85ca93f5a9aaf7249d7b8bcecac03e0.jpg',            title: 'Metal Fabrication',          desc: 'Custom metal fabrication solutions for industrial, commercial, and architectural projects of all scales across Oman.' },
  { letter: 'W', img: 'https://i.pinimg.com/736x/41/a1/bd/41a1bdf7351d8ba578627f3e3115de52.jpg',              title: 'Welding Consumables',        desc: 'Premium welding consumables and accessories with comprehensive technical support and application training.' },
  { letter: 'S', img: 'https://i.pinimg.com/736x/87/05/a0/8705a02edf2076b398cafb3975efdd2b.jpg',      title: 'Safety PPE Equipment',       desc: 'Certified PPE and safety gear for maximum workplace protection and full regulatory compliance.' },
  { letter: 'L', img: 'https://i.pinimg.com/1200x/64/ad/b1/64adb111fbd1f7ceb5d561c76f87d871.jpg',          title: 'Lifting Solutions',           desc: 'Reliable lifting equipment and material handling tools engineered for safe and efficient operations.' },
  { letter: 'S', img: 'https://i.pinimg.com/736x/b9/b4/21/b9b4214f55ec6c2e40476c9ad5bd00c9.jpg',       title: 'Safety Training & Solutions', desc: 'Expert safety training programmes and fire protection solutions to foster a strong workplace safety culture.' },
];

export default function WhatWeDoSection() {
  return (
    <div className="section-full p-t40 p-b90">
      <div className="container">
        <div className="section-head center wt-small-separator-outer">
          <div className="wt-small-separator site-text-primary">
            <i className="bi bi-shield-check"></i>
            <div>Our Services</div>
          </div>

          <h2 className="wt-title title_split_anim">Comprehensive Industrial Safety Solutions</h2>
        </div>

        <div className="s-section">
          <div className="row d-flex justify-content-center">
            {whatWeDo.map((item, i) => (
              <div key={i} className="col-lg-4 col-md-6 col-sm-12 m-b30">
                <div className="icon-box-style-one-wrap">
                  <div className="icon-box-style-one">
                    <div className="icon-box-style-one-media" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', color: 'var(--color-skin-primary, #c8a96e)' }}>
                      <img src={item.img} alt={item.title} />
                    </div>
                    <div className="icon-box-one-title">
                      <h3 className="wt-title"><a href="/service-detail">{item.title}</a></h3>
                    </div>
                    <div className="icon-box-one-content">
                      <p>{item.desc}</p>
                      <a href="/service-detail" className="site-button-link site-text-primary">Read More</a>
                    </div>
                    <div className="icon-box-one-alpha">
                      <span>{item.letter}</span>
                    </div>
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
