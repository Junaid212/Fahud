const services = [
  { title: 'Architecture Design', icon: 'sketch.png', desc: 'Architecture design is a fascinating blend of art and engineering, shaping the spaces where people live, work, and interact. It involves everything from conceptualizing aesthetic forms to solving structural.' },
  { title: 'Construction Design', icon: 'brickwall.png', desc: 'Construction design is all about translating architectural concepts into functional, buildable structures. It covers everything from site planning and material selection to structural integrity and sustainability.' },
  { title: 'Interior Design', icon: 'curtain.png', desc: 'Interior design is the art and science of enhancing spaces to create functional, aesthetically pleasing environments. It goes beyond just decoration—it involves spatial planning, color psychology.' },
  { title: 'Landscape Architecture', icon: 'skyline.png', desc: 'Landscape architecture is where nature meets design, shaping outdoor spaces that are both functional and visually stunning. It goes beyond just planting trees and flowers it involves creating environments.' },
  { title: 'Architecture Design', icon: 'sketch.png', desc: 'Architecture design is a fascinating blend of art and engineering, shaping the spaces where people live, work, and interact. It involves everything from conceptualizing aesthetic forms to solving structural.' },
  { title: 'Construction Design', icon: 'brickwall.png', desc: 'Construction design is all about translating architectural concepts into functional, buildable structures. It covers everything from site planning and material selection to structural integrity and sustainability.' },
  { title: 'Interior Design', icon: 'curtain.png', desc: 'Interior design is the art and science of enhancing spaces to create functional, aesthetically pleasing environments. It goes beyond just decoration—it involves spatial planning, color psychology.' },
  { title: 'Landscape Architecture', icon: 'skyline.png', desc: 'Landscape architecture is where nature meets design, shaping outdoor spaces that are both functional and visually stunning. It goes beyond just planting trees and flowers it involves creating environments.' },
];

export default function ServicesSection() {
  return (
    <div className="section-full p-t120">
      <div className="container">
        <div className="section-head center wt-small-separator-outer">
          <div className="wt-small-separator site-text-primary">
            <i className="bi bi-house"></i>
            <div>We Provide Service</div>
          </div>
          <h2 className="wt-title title_split_anim">Benefits You Get When Using Our Services</h2>
        </div>
      </div>

      <div className="container-fluid">
        <div className="section-content">
          <div className="service-icon-box-wrap">
            <div className="owl-carousel twm-servi-carousal-slider">
              {services.map((svc, i) => (
                <div key={i} className="item">
                  <div className="service-icon-box-one-section">
                    <div className="service-icon-box-one">
                      <div className="service-icon-content">
                        <h3 className="wt-title"><a href="/service-detail">{svc.title}</a></h3>
                        <p>{svc.desc}</p>
                        <a href="/service-detail" className="site-button-link site-text-primary">Read More</a>
                      </div>
                      <div className="service-icon">
                        <img src={`/images/icons/${svc.icon}`} alt="" />
                      </div>
                      <div className="img-animate">
                        <img src={`/images/icons/${svc.icon}`} alt="" />
                      </div>
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
