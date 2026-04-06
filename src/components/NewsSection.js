import Link from 'next/link';
import Image from 'next/image';

export default function NewsSection() {
  return (
    <div className="section-full p-t120 p-b90 twm-blog-outer-area">
      <div className="blog-gallery-block-outer">
        <div className="container">
          {/* TITLE START */}
          <div className="section-head center wt-small-separator-outer">
            <div className="wt-small-separator site-text-primary">
              <i className="bi bi-house"></i>
              <div>Our Latest Blog</div>                                
            </div>
            <h2 className="wt-title title_split_anim">Our Latest News</h2>
          </div>
          {/* TITLE END */}
          <div className="section-content"> 
            <div className="blog-gallery-style1">
              <div className="row justify-content-center">
              
                {/* COLUMNS 1 */} 
                <div className="col-lg-4 col-md-6 m-b30">
                  <div className="blog-post blog-post-5-outer">
                    <div className="wt-post-media">
                      <Link href="/blog-single"><img src={`${process.env.NODE_ENV === "production" ? "/Fahud" : ""}/images/blog/latest-2/bg1.jpg`} alt="" /></Link>
                    </div>
                                                          
                    <div className="wt-post-info">
                      <div className="wt-post-meta">
                        <ul>
                          <li className="post-category">Construction</li>
                          <li className="post-date"><span>14</span> Jun 2025</li>
                        </ul>
                      </div>                               
                      <div className="wt-post-title">
                        <h3 className="post-title"><Link href="/blog-single">Creating timeless elegance for your home</Link></h3>
                      </div>
                    </div>                                
                  </div>
                </div>

                {/* COLUMNS 2 */} 
                <div className="col-lg-4 col-md-6 m-b30">
                  <div className="blog-post blog-post-5-outer">
                    <div className="wt-post-media">
                      <Link href="/blog-single"><img src={`${process.env.NODE_ENV === "production" ? "/Fahud" : ""}/images/blog/latest-2/bg2.jpg`} alt="" /></Link>
                    </div> 
                    <div className="wt-post-info">
                      <div className="wt-post-meta">
                        <ul>
                          <li className="post-category">Architecture</li>
                          <li className="post-date"><span>18</span> Jun 2025</li>
                        </ul>
                      </div>                                
                      <div className="wt-post-title">
                        <h3 className="post-title"><Link href="/blog-single">Crafting elegance with a modern twist</Link></h3>
                      </div>
                    </div>                                
                  </div>
                </div>
                
                {/* COLUMNS 3 */} 
                <div className="col-lg-4 col-md-6 m-b30">
                  <div className="blog-post blog-post-5-outer">
                    <div className="wt-post-media">
                      <Link href="/blog-single"><img src={`${process.env.NODE_ENV === "production" ? "/Fahud" : ""}/images/blog/latest-2/bg3.jpg`} alt="" /></Link>
                    </div>
                    <div className="wt-post-info">
                      <div className="wt-post-meta">
                        <ul>
                          <li className="post-category">Interior</li>
                          <li className="post-date"><span>24</span> Jun 2025</li>
                        </ul>
                      </div>                                 
                      <div className="wt-post-title">
                        <h3 className="post-title"><Link href="/blog-single">Discover the epitome of timeless design</Link></h3>
                      </div>
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
