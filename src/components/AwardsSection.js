import Image from 'next/image';

export default function AwardsSection() {
  return (
    <div className="section-full twm-achi-section-wrap p-t120 p-b90" style={{ backgroundImage: 'url(${process.env.NODE_ENV === "production" ? "/Fahud" : ""}/images/background/count-bg.jpg)' }}>
      <div className="container">
        <div className="twm-achi-section-content">
          <div className="twm-achi-section-title">
            <h2 className="title title_split_anim">Awards and recognitions received for <span>Architecture</span> and <span>Interior</span> design</h2>
          </div>
        </div>
        <div className="twm-achi-bx">
          <ul className="flex flex-fd-c flex-jc-sb">
            {/* ITEM 01 */}
            <li>
              <div className="twm-achi-bx-conent">
                <div className="twm-achi-bx-date"><b>03</b>2020</div>
                <span>Interior Stylist Delmotes & Co.</span>
                <div className="hover-reveal image01">
                  <img className="hidden-img" src={`${process.env.NODE_ENV === "production" ? "/Fahud" : ""}/images/award/pic1.jpg`} alt="pic1" />
                </div>
              </div>
            </li>

            {/* ITEM 02 */}
            <li>
              <div className="twm-achi-bx-conent">
                <div className="twm-achi-bx-date"><b>06</b>2021</div>
                <span>Design Assistant laurel Living Designs</span>
                <div className="hover-reveal image02">
                  <img className="hidden-img" src={`${process.env.NODE_ENV === "production" ? "/Fahud" : ""}/images/award/pic2.jpg`} alt="pic2" />
                </div>
              </div>
            </li>

            {/* ITEM 03 */}
            <li>
              <div className="twm-achi-bx-conent">
                <div className="twm-achi-bx-date"><b>09</b>2022</div>
                <span>Junior Interior Designer ABC Home Design Company</span>
                <div className="hover-reveal image03">
                  <img className="hidden-img" src={`${process.env.NODE_ENV === "production" ? "/Fahud" : ""}/images/award/pic3.jpg`} alt="pic3" />
                </div>
              </div>
            </li>

            {/* ITEM 04 */}
            <li>
              <div className="twm-achi-bx-conent">
                <div className="twm-achi-bx-date"><b>05</b>2023</div>
                <span>Interior Designer & Project Coordinator Bridgerton Community Center</span>
                <div className="hover-reveal image04">
                  <img className="hidden-img" src={`${process.env.NODE_ENV === "production" ? "/Fahud" : ""}/images/award/pic4.jpg`} alt="pic4" />
                </div>
              </div>
            </li>

            {/* ITEM 05 */}
            <li>
              <div className="twm-achi-bx-conent">
                <div className="twm-achi-bx-date"><b>01</b>2025</div>
                <span>BFA in Interior Design, Minor in Architectural History Sorbonne University Paris, France </span>
                <div className="hover-reveal image04">
                  <img className="hidden-img" src={`${process.env.NODE_ENV === "production" ? "/Fahud" : ""}/images/award/pic5.jpg`} alt="pic5" />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
