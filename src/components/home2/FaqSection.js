const faqs = [
  {
    id: 'One',
    question: "What's my role in the design process?",
    answer: 'construction business owners looking to up their game with strategic insights. Filled with useful architecture viverra tristique justo duis vitae diam neque nivamus aestan ateuene artines aringianu atelit finibus.',
    open: true,
  },
  {
    id: 'Two',
    question: 'What does an architect actually do?',
    answer: 'sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.',
    open: false,
  },
  {
    id: 'Three',
    question: 'Can you work with clients long distance?',
    answer: 'Architecture viverra tristique justo duis vitae diam neque nivamus aestan ateuene artines aringianu atelit finibus viverra nec lacus. Nedana theme erodino setlie suscipe no tristique.',
    open: false,
  },
  {
    id: 'Four',
    question: 'What happens during our initial meeting?',
    answer: 'architecture viverra tristique justo duis vitae diam neque nivamus aestan ateuene artines aringianu atelit finibus viverra nec lacus. Nedana theme erodino setlie suscipe no tristique.',
    open: false,
  },
];

export default function FaqSection() {
  return (
    <div className="section-full twm-faq-outer-wrap">
      <div className="container-fluid">
        <div className="section-content">
          <div className="faq-outer">
            <div className="row">

              <div className="col-lg-6 col-md-12">
                <div className="faq-left-media">
                  <img src={`${process.env.NODE_ENV === "production" ? "/Fahud" : ""}/images/faq-pic.png`} alt="Image" />
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="faq-right-content">
                  <div className="section-head left wt-small-separator-outer">
                    <div className="wt-small-separator site-text-primary">
                      <i className="bi bi-house"></i>
                      <div>FAQ&apos;s</div>
                    </div>
                    <h2 className="title_split_anim">You can learn more from our asked questions</h2>
                    <p>Fahud is a very modern and creative template that has been carefully crafted to suit any interior design website. Certainly, Fahud will help you to build an outstanding period.</p>
                  </div>

                  <div className="wt-accordion" id="accordion-two">
                    {faqs.map((faq) => (
                      <div key={faq.id} className="panel wt-panel">
                        <div className="acod-head" id={`heading${faq.id}`}>
                          <h4 className="acod-title">
                            <a
                              className="collapsed"
                              data-bs-toggle="collapse"
                              href={`#collapse${faq.id}`}
                              aria-expanded={faq.open ? 'true' : 'false'}
                              aria-controls={`collapse${faq.id}`}
                            >
                              {faq.question}
                              <span className="indicator"><i className="bi bi-plus"></i></span>
                            </a>
                          </h4>
                        </div>
                        <div
                          id={`collapse${faq.id}`}
                          className={`collapse${faq.open ? ' show' : ''}`}
                          aria-labelledby={`heading${faq.id}`}
                          data-bs-parent="#accordion-two"
                        >
                          <div className="acod-content p-tb15">{faq.answer}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
