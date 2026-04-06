const plans = [
  {
    name: 'Basic Plan',
    price: '$17',
    highlight: false,
    features: [
      { included: true, text: 'Interior Design' },
      { included: true, text: 'Custom design concept' },
      { included: false, text: 'Floor plan and elevations' },
      { included: false, text: 'Ideal for refreshing a single room or space' },
    ],
  },
  {
    name: 'Standard Plan',
    price: '$35',
    highlight: true,
    features: [
      { included: true, text: 'Architectural Design' },
      { included: true, text: 'Project Management' },
      { included: true, text: 'Full project management services' },
      { included: true, text: 'Co-ordination with contractors' },
    ],
  },
  {
    name: 'Business Plan',
    price: '$59',
    highlight: false,
    features: [
      { included: true, text: 'Architectural Design' },
      { included: true, text: 'Consultation with principal architect' },
      { included: true, text: 'Detailed site analysis and feasibility study' },
      { included: true, text: 'Custom design concept' },
    ],
  },
];

export default function PricingSection() {
  return (
    <div className="section-full p-t120 p-b90 twm-pricing-block-wrap">
      <div className="container">
        <div className="section-head center wt-small-separator-outer text-center text-white">
          <div className="wt-small-separator site-text-secondry">
            <i className="bi bi-house"></i>
            <div>Pricing</div>
          </div>
          <h2 className="wt-title title_split_anim">We will give the best offer pricing table.</h2>
        </div>

        <div className="section-content">
          <div className="pricing-block-outer">
            <div className="row">
              {plans.map((plan, i) => (
                <div key={i} className="col-lg-12 m-b30">
                  <div className={`pricing-table-1${plan.highlight ? ' pricing-highlight' : ''}`}>
                    <div className="p-table-title">
                      <h3 className="wt-title">{plan.name}</h3>
                    </div>
                    <div className="pricing-table-content site-bg-white">
                      <div className="p-table-price">
                        <span>{plan.price}</span>
                        <p>Per/month</p>
                      </div>
                      <div className="p-table-list">
                        <ul>
                          {plan.features.map((f, j) => (
                            <li key={j} className={!f.included ? 'li-disable' : ''}>
                              <i className={`bi ${f.included ? 'bi-check2' : 'bi-x'}`}></i>
                              {f.text}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="p-table-btn">
                        <a href="/about-1" className="site-button">Purchase</a>
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
