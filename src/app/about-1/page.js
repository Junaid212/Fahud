import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InnerBanner from '@/components/InnerBanner';
import ProjectsSection1 from '@/components/home2/ProjectsSection1';
import ClientLogoSection from '@/components/ClientLogoSection';
import CounterSection from '@/components/home2/CounterSection';

// About page services/capabilities
const capabilities = [
  {
    letter: 'S',
    icon: 'bi-shield-check',
    title: 'Safety PPE Equipment',
    desc: 'Certified personal protective equipment for every industry — head protection, eye & face safety, respiratory protection, hand & body gear.',
  },
  {
    letter: 'F',
    icon: 'bi-tools',
    title: 'Industrial Fasteners',
    desc: 'High-tensile bolts, nuts, anchors, and specialist fasteners sourced from leading manufacturers for demanding industrial applications.',
  },
  {
    letter: 'W',
    icon: 'bi-fire',
    title: 'Welding Consumables',
    desc: 'A complete range of electrodes, wires, fluxes, and welding accessories backed by technical expertise and after-sales support.',
  },
  {
    letter: 'L',
    icon: 'bi-box-seam',
    title: 'Lifting Solutions',
    desc: 'Slings, shackles, hoists, and certified lifting equipment engineered for safe, efficient material handling on every job site.',
  },
  {
    letter: 'M',
    icon: 'bi-layers',
    title: 'Metal Fabrication',
    desc: 'Custom structural and architectural metalwork including steel frames, brackets, guards, and bespoke fabrications to specification.',
  },
  {
    letter: 'T',
    icon: 'bi-mortarboard',
    title: 'Safety Training',
    desc: 'Accredited safety training programmes including first-aid, fire safety, working-at-height, and HSE compliance workshops.',
  },
];

// Key statistics
const stats = [
  { value: '10+', label: 'Years of Experience' },
  { value: '500+', label: 'Satisfied Clients' },
  { value: '1000+', label: 'Products Available' },
  { value: '24/7', label: 'Technical Support' },
];

export const metadata = {
  title: 'About Us | FAHUD Safety & Technical Trading Oman',
  description:
    'Learn about FAHUD Safety & Technical Trading Oman — a trusted supplier of industrial safety products, PPE, welding consumables, fasteners, and lifting solutions.',
};

export default function About1() {
  return (
    <>
      <div className="page-wraper">
        <Header />

        <div className="page-content">
          <InnerBanner title="About Us" />

          {/* ── ABOUT ONE SECTION ── */}
          <div className="section-full p-t120 p-b90 about-section-one-wrap">
            <div className="about-section-one">
              <div className="container">
                <div className="section-content">
                  <div className="row align-items-center">

                    {/* Left — text */}
                    <div className="col-lg-5 col-md-12 m-b30">
                      <div className="company-exp-full-info">
                        <div className="section-head left wt-small-separator-outer">
                          <div className="wt-small-separator site-text-primary">
                            <i className="bi bi-shield-check"></i>
                            <div>About Us</div>
                          </div>
                          <h2 className="wt-title title_split_anim">
                            About FAHUD Safety & Technical Trading SPC
                          </h2>
                          <p>
                            FAHUD Safety & Technical Trading SPC, established in 2022, is a trusted 
                            supplier of industrial safety equipment in Oman. We serve a wide range 
                            of industries by delivering high-quality products designed to ensure 
                            workplace safety and operational efficiency.
                          </p>
                          <p>
                            Recognized as a reliable and forward-thinking company in the safety industry, 
                            FAHUD is known for its consistency, integrity, and customer-focused approach. 
                            Our commitment to excellence and responsive service has helped us build strong 
                            relationships with clients across sectors such as construction, oil & gas, and 
                            manufacturing.
                          </p>
                        </div>
                        <Link href="/contact-1" className="site-button">Get In Touch</Link>
                      </div>
                    </div>

                    {/* Right — image + tagline */}
                    <div className="col-lg-7 col-md-12 m-b30 company-exp-position">
                      <div className="company-exp">
                        <div className="company-exp-media">
                          <img src="/images/fd1.png" alt="FAHUD Safety Products" style={{ width: '100%', objectFit: 'cover', borderRadius: '4px' }} />
                        </div>
                        <div className="company-exp-tagline">
                          <span>We take pride in maintaining ethical business practices and delivering products that meet international safety standards.</span>
                          {/* <Link href="/services" className="site-button-link site-text-primary">Our Services</Link> */}
                        </div>
                        {/* <div className="circle-text1">
                          <div className="emblem-wrap">
                            <div className="emblem">Safety-Technical-Trading-Oman-</div>
                            <i><img src="/images/in-circle-bx.png" alt="FAHUD" /></i>
                          </div>
                        </div> */}
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ── ABOUT ONE SECTION END ── */}

          {/* ── STATS STRIP ── */}
          {/* <div className="section-full" style={{ background: 'var(--color-skin-primary, #c8a96e)', padding: '60px 0' }}>
            <div className="container">
              <div className="row text-center">
                {stats.map((s, i) => (
                  <div key={i} className="col-lg-3 col-md-6 m-b30">
                    <div style={{ color: '#fff' }}>
                      <h2 style={{ fontSize: '3rem', fontWeight: 800, margin: 0 }}>{s.value}</h2>
                      <p style={{ margin: 0, fontSize: '1rem', opacity: 0.9 }}>{s.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div> */}
          {/* ── STATS STRIP END ── */}

          {/* ── WHAT WE DO SECTION ── */}
          {/* <div className="section-full p-t120 p-b90">
            <div className="container">
              <div className="section-head center wt-small-separator-outer">
                <div className="wt-small-separator site-text-primary">
                  <i className="bi bi-shield-check"></i>
                  <div>Our Capabilities</div>
                </div>
                <h2 className="wt-title title_split_anim">What We Offer</h2>
              </div>

              <div className="s-section">
                <div className="row d-flex justify-content-center">
                  {capabilities.map((item, i) => (
                    <div key={i} className="col-lg-4 col-md-6 col-sm-12 m-b30">
                      <div className="icon-box-style-one-wrap">
                        <div className="icon-box-style-one">
                          <div
                            className="icon-box-style-one-media"
                            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', color: 'var(--color-skin-primary, #c8a96e)' }}
                          >
                            <i className={`bi ${item.icon}`}></i>
                          </div>
                          <div className="icon-box-one-title">
                            <h3 className="wt-title">
                              <Link href="/services">{item.title}</Link>
                            </h3>
                          </div>
                          <div className="icon-box-one-content">
                            <p>{item.desc}</p>
                            <Link href="/services" className="site-button-link site-text-primary">Read More</Link>
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
          </div> */}
          {/* ── WHAT WE DO SECTION END ── */}

          {/* ── TESTIMONIALS SECTION ── */}
          {/* <div className="section-full testimonial2-outer-wrap p-t120 p-b90 parallax-section">
            <div className="parallax-image" style={{ backgroundImage: 'url(/images/background/testimonial-bg.jpg)' }}></div>
            <div className="container">
              <div className="testimonial2-outer">
                <div className="section-head center wt-small-separator-outer when-bg-dark">
                  <div className="wt-small-separator site-text-primary">
                    <i className="bi bi-star"></i>
                    <div>Testimonials</div>
                  </div>
                  <h2 className="wt-title title_split_anim">What Our Clients Say</h2>
                </div>

                <div className="section-content">
                  <div className="swiper twm-t-monial-2-slider testimonial-2-content">
                    <div className="swiper-wrapper">

                      {[
                        { name: 'Ahmed Al Rashdi', pos: 'HSE Manager, Petroleum Development Oman', text: '"FAHUD consistently delivers high-quality PPE on time. Their team understands our safety standards and never compromises on product quality."' },
                        { name: 'Khalid Al Balushi', pos: 'Procurement Head, Muscat Construction Co.', text: '"We have been sourcing welding consumables and fasteners from FAHUD for over 3 years. Reliable supply chain, great pricing, excellent after-sales support."' },
                        { name: 'Sara Al Hinai', pos: 'Safety Officer, Duqm Refinery', text: '"The safety training sessions conducted by FAHUD were thorough and practical. Our team compliance scores improved significantly after their workshops."' },
                        { name: 'Mohammed Al Farsi', pos: 'Operations Director, Oman Mining', text: '"From lifting gear to fire safety equipment, FAHUD is our go-to supplier. Their technical knowledge and quick delivery make all the difference on site."' },
                      ].map((t, i) => (
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
                                    <img src={`/images/testimonials/pic${(i % 3) + 1}.jpg`} alt={t.name} />
                                  </div>
                                </div>
                                <div className="testimonial-info">
                                  <span className="testimonial-name">{t.name}</span>
                                  <span className="testimonial-position">{t.pos}</span>
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
          </div> */}
          {/* ── TESTIMONIALS SECTION END ── */}

          {/* ── CLIENTS SECTION ── */}
          {/* <div className="section-full Client-logo-style1-wrap">
            <div className="section-content">
              <div className="home-client-carousel2-wrap">
                <div className="swiper home-client-carousel2">
                  <div className="swiper-wrapper">
                    {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((n, i) => (
                      <div key={i} className="swiper-slide">
                        <div className="ow-client-logo">
                          <div className="client-logo client-logo-media">
                            <img src={`/images/client-logo/dark/${n}.png`} alt={`Client ${n}`} />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* ── CLIENTS SECTION END ── */}

        </div>
        <CounterSection />
        <ProjectsSection1 />
        <ClientLogoSection />

        <Footer />
      </div>
    </>
  );
}