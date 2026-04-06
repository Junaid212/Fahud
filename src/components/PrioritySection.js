import Image from 'next/image';

export default function PrioritySection() {
  return (
    <div className="section-full p-t120 p-b90 twm-ab2-section-wrap" style={{ backgroundImage: 'url(/images/background/ab-bg2.jpg)' }}>
      <div className="container">
        <div className="section-content">
          <div className="row">
            <div className="col-lg-7 col-md-10">
              <div className="twm-ab2-section-bx">
                {/* TITLE START */}
                <div className="section-head left wt-small-separator-outer">
                  <div className="wt-small-separator site-text-primary">
                    <i className="bi bi-house"></i>
                    <div>Our Info</div>
                  </div>
                  <h2 className="wt-title title_split_anim">Our priority is to draw the best houses</h2>
                  <p>Creating the best houses requires a combination of creativity, technical expertise, and attention to detail. Your focus on architectural excellence means designing homes that are not only visually stunning but also functional, sustainable, and tailored to client needs.</p>
                </div>
                {/* TITLE END */}

                <div className="twm-ab2-quote-section">
                  <i className="bi bi-quote"></i>
                  <p>Crafted to suit any interior design website. Certainly, Fahud will help you to build an out sanding period. </p>
                </div>
                <div className="twm-ab2-au-name">
                  <div className="twm-ab2-au-left">
                    <h3 className="title">Ashley Sanchez</h3>
                    <span>Architect</span>
                  </div>
                  <div className="twm-ab2-au-sign">
                    <img src="/images/sign-pic.png" alt="Image" />
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
