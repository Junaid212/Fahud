export default function AboutSection() {
  return (
    <div className="section-full p-t120 p-b90 about-section-one-wrap">
      <div className="about-section-one">
        <div className="container">
          <div className="section-content">
            <div className="row">

              {/* Images */}
              <div className="col-lg-7 col-md-12 m-b30 about-max-two-position">
                <div className="about-max-two">
                  <div className="about-max-two-media">
                    <img src="/images/about/l-pic.jpg" alt="" />
                  </div>
                  <div className="about-max-two-media2-wrap">
                    <div className="about-max-two-media2">
                      <img src="/images/about/s-pic.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="col-lg-5 col-md-12 m-b30">
                <div className="about-section-two-right">
                  <div className="section-head left wt-small-separator-outer">
                    <div className="wt-small-separator site-text-primary">
                      <i className="bi bi-house"></i>
                      <div>Welcome Fahud</div>
                    </div>
                    <h2 className="title_split_anim">We are a group of architects who help you build your dreams.</h2>
                    <p>Architecture and interior company must be doing some incredible work—shaping spaces that are both functional and visually stunning! Whether you're designing structures or crafting interiors, your expertise likely combines creativity.</p>
                  </div>

                  <div className="our-skills-item-wrap wow">
                    <h3 className="twm-title">Our Skills</h3>
                    <div className="row">
                      {[
                        { label: 'Architecture', value: '85%', count: '85%' },
                        { label: 'Interior', value: '85%', count: '85%' },
                        { label: 'Construction', value: '80%', count: '80%' },
                      ].map((skill, i) => (
                        <div key={i} className="col-md-12 m-b30">
                          <div className="our-skills-item">
                            <span className="progressText">{skill.label}</span>
                            <div className="progress-box">
                              <div className="progress">
                                <div
                                  className="progress-bar wow progress-bar-anim site-bg-primary"
                                  data-wow-delay="0ms"
                                  data-wow-duration="2000ms"
                                  role="progressbar"
                                  style={{ '--ProgressBarCount': skill.count }}
                                >
                                  <span>{skill.value}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a href="/about-1" className="site-button">Read More</a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
