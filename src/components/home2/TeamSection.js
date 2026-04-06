const teamMembers = [
  { name: 'Jerry Bloom', role: 'Contractor', pic: 'pic1.jpg' },
  { name: 'Ashley Sanchez', role: 'Architect', pic: 'pic2.jpg' },
  { name: 'Juliana Bryant', role: 'Project Manager', pic: 'pic3.jpg' },
  { name: 'Shirley Gibson', role: 'Ceo', pic: 'pic4.jpg' },
];

const socialLinks = [
  { href: 'https://www.facebook.com/', icon: 'bi-facebook' },
  { href: 'https://x.com/', icon: 'bi-twitter-x' },
  { href: 'https://dribbble.com/', icon: 'bi-dribbble' },
  { href: 'https://in.linkedin.com/', icon: 'bi-linkedin' },
];

export default function TeamSection() {
  return (
    <div className="section-full p-t120 p-b90 twm-team-box1-wraper">
      <div className="container">
        <div className="section-head center wt-small-separator-outer">
          <div className="wt-small-separator site-text-primary">
            <i className="bi bi-house"></i>
            <div>Meet Our Team</div>
          </div>
          <h2 className="wt-title title_split_anim">Best Experts</h2>
        </div>
      </div>

      <div className="container">
        <div className="section-content">
          <div className="team-box1-wraper">
            <div className="row">
              {teamMembers.map((member, i) => (
                <div key={i} className="col-xl-3 col-lg-3 col-md-6 col-sm-6 m-b30">
                  <div className="team-effect-hvr1">
                    <img src={`/images/team/${member.pic}`} alt="" />
                    <div className="content-info">
                      <p className="icon-links">
                        {socialLinks.map((s, j) => (
                          <a key={j} href={s.href}><i className={`bi ${s.icon}`}></i></a>
                        ))}
                      </p>
                      <div className="content-info-inner">
                        <div className="info-detail">
                          <h3 className="wt-title"><a href="/our-team-detail">{member.name}</a></h3>
                          <p className="wt-title-position">{member.role}</p>
                        </div>
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
