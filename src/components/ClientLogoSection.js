import Image from 'next/image';
import Link from 'next/link';

export default function ClientLogoSection() {
  return (
    <div className="section-full p-t120 p-b90 twm-home-client-carousel-wrap">
      <div className="container">
        <div className="section-content">
          <div className="home-client-carousel1-wrap">
            {/* TITLE START */}
            <div className="section-head center wt-small-separator-outer">
              <div className="wt-small-separator site-text-primary">
                <i className="bi bi-house"></i>
                <div>Meet Our Brands</div>
              </div>
              <h2 className="wt-title title_split_anim">Our Brands</h2>
            </div>
            {/* TITLE END */}

            {/* Swiper */}
            <div className="swiper home-client-carousel">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="ow-client-logo">
                    <div className="client-logo client-logo-media">
                      <Link href="/about-2"><img src="https://static.wixstatic.com/media/cc918b_fbfe94e9314a42f4bb9d9a62357471cf~mv2.jpg/v1/fill/w_192,h_192,q_90,enc_avif,quality_auto/cc918b_fbfe94e9314a42f4bb9d9a62357471cf~mv2.jpg" alt="" /></Link>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="ow-client-logo">
                    <div className="client-logo client-logo-media">
                      <Link href="/about-2"><img src="https://static.wixstatic.com/media/cc918b_c8a35a9890dc4b4cbeabd6a0ee21d0a9~mv2.png/v1/fill/w_335,h_150,q_90,enc_avif,quality_auto/cc918b_c8a35a9890dc4b4cbeabd6a0ee21d0a9~mv2.png" alt="" /></Link>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="ow-client-logo">
                    <div className="client-logo client-logo-media">
                      <Link href="/about-2"><img src="https://static.wixstatic.com/media/cc918b_e056f048c4f44c0dbb78ca66c7a9851b~mv2.png/v1/fill/w_399,h_400,q_90,enc_avif,quality_auto/cc918b_e056f048c4f44c0dbb78ca66c7a9851b~mv2.png" alt="" /></Link>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="ow-client-logo">
                    <div className="client-logo client-logo-media">
                      <Link href="/about-2"><img src="https://static.wixstatic.com/media/cc918b_7fbdbf29dfdd48e39fe1635ee9ea5b93~mv2.png/v1/fill/w_279,h_181,q_90,enc_avif,quality_auto/cc918b_7fbdbf29dfdd48e39fe1635ee9ea5b93~mv2.png" alt="" /></Link>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="ow-client-logo">
                    <div className="client-logo client-logo-media">
                      <Link href="/about-2"><img src="https://static.wixstatic.com/media/cc918b_2541fb26e65c4af9bd46d8afd54cbf29~mv2.jpg/v1/fill/w_630,h_630,q_90,enc_avif,quality_auto/cc918b_2541fb26e65c4af9bd46d8afd54cbf29~mv2.jpg" alt="" /></Link>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="ow-client-logo">
                    <div className="client-logo client-logo-media">
                      <Link href="/about-2"><img src="https://static.wixstatic.com/media/cc918b_33dc5e1c904844d1a1dd779fa9dd2a13~mv2.png/v1/fill/w_347,h_145,q_90,enc_avif,quality_auto/cc918b_33dc5e1c904844d1a1dd779fa9dd2a13~mv2.png" alt="" /></Link>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="ow-client-logo">
                    <div className="client-logo client-logo-media">
                      <Link href="/about-2"><img src="https://static.wixstatic.com/media/cc918b_b29cf4535b7c449690a25604ff56ed47~mv2.jpg/v1/fill/w_410,h_410,q_90,enc_avif,quality_auto/cc918b_b29cf4535b7c449690a25604ff56ed47~mv2.jpg" alt="" /></Link>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="ow-client-logo">
                    <div className="client-logo client-logo-media">
                      <Link href="/about-2"><img src="https://static.wixstatic.com/media/cc918b_95efc3ac497149c59cee34614be712a1~mv2.png/v1/fill/w_315,h_159,q_90,enc_avif,quality_auto/cc918b_95efc3ac497149c59cee34614be712a1~mv2.png" alt="" /></Link>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="ow-client-logo">
                    <div className="client-logo client-logo-media">
                      <Link href="/about-2"><img src="https://static.wixstatic.com/media/cc918b_8d71f6358bb54f958eaf957c80125fab~mv2.png/v1/fill/w_180,h_95,q_90,enc_avif,quality_auto/cc918b_8d71f6358bb54f958eaf957c80125fab~mv2.png" alt="" /></Link>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="ow-client-logo">
                    <div className="client-logo client-logo-media">
                      <Link href="/about-2"><img src="https://static.wixstatic.com/media/cc918b_42d01fd967e64673a4074ea2cc16d4b1~mv2.png/v1/fill/w_264,h_191,q_90,enc_avif,quality_auto/cc918b_42d01fd967e64673a4074ea2cc16d4b1~mv2.png" alt="" /></Link>
                    </div>
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
