const whatWeDo = [
  { letter: 'F', icon: 'bi-tools',             title: 'Industrial Fasteners',      desc: 'High-quality industrial and high-tensile fasteners for durable and reliable performance in demanding environments.' },
  { letter: 'M', icon: 'bi-layers',            title: 'Metal Fabrication',          desc: 'Custom metal fabrication solutions for industrial, commercial, and architectural projects of all scales.' },
  { letter: 'W', icon: 'bi-fire',              title: 'Welding Consumables',        desc: 'Premium welding consumables and accessories with comprehensive technical support and application training.' },
  { letter: 'S', icon: 'bi-shield-check',      title: 'Safety PPE Equipment',       desc: 'Certified PPE and safety gear for maximum workplace protection and full regulatory compliance.' },
  { letter: 'L', icon: 'bi-box-seam',          title: 'Lifting Solutions',           desc: 'Reliable lifting equipment and material handling tools engineered for safe and efficient operations.' },
  { letter: 'T', icon: 'bi-mortarboard',       title: 'Safety Training & Solutions', desc: 'Expert safety training programmes and fire protection solutions to foster a strong workplace safety culture.' },
];

export default function WhatWeDoSection() {
  return (
    <div className="section-full p-t120 p-b90">
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
                      <i className={`bi ${item.icon}`}></i>
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
