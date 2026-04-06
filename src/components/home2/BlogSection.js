const blogPosts = [
  { img: 'bg4.jpg', category: 'Construction', title: 'The Secret to a Stylish Bedroom Makeover on a Budget', size: 'col-lg-12 col-md-6' },
  { img: 'bg2.jpg', category: 'Furniture', title: 'Do You Know How Home Value is Affected', size: 'col-lg-6 col-md-6' },
  { img: 'bg3.jpg', category: 'Interior', title: 'Innovative Pop Design Ideas For Modern Interiors', size: 'col-lg-6 col-md-12' },
];

export default function BlogSection() {
  return (
    <div className="section-full p-t120 p-b90">
      <div className="blog-gallery-block-outer">
        <div className="container">
          <div className="section-head center wt-small-separator-outer">
            <div className="wt-small-separator site-text-primary">
              <i className="bi bi-house"></i>
              <div>Our Latest Blog</div>
            </div>
            <h2 className="wt-title title_split_anim">Our Latest News</h2>
          </div>

          <div className="section-content">
            <div className="blog-gallery-style1">
              <div className="row justify-content-center">

                {/* Left Column: 3 smaller posts */}
                <div className="col-lg-6 col-md-12">
                  <div className="row">
                    {blogPosts.map((post, i) => (
                      <div key={i} className={`${post.size} m-b30`}>
                        <div className="blog-post blog-post-3-outer blg-half-blck">
                          <div className="wt-post-media">
                            <a href="/blog-single">
                              <img src={`/images/blog/latest/${post.img}`} alt="" />
                            </a>
                          </div>
                          <div className="wt-post-info">
                            <div className="post-category">
                              <a href="/blog-single">{post.category}</a>
                            </div>
                            <div className="wt-post-title">
                              <h3 className="post-title">
                                <a href="/blog-single">{post.title}</a>
                              </h3>
                            </div>
                            <div className="wt-post-readmore">
                              <a href="/blog-single" className="site-button-link site-text-primary">Read More</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column: 1 featured post */}
                <div className="col-lg-6 col-md-12 m-b30">
                  <div className="blog-post blog-post-4-outer">
                    <div className="wt-post-media">
                      <a href="/blog-single"><img src={`${process.env.NODE_ENV === "production" ? "/Fahud" : ""}/images/blog/latest/bg1.jpg`} alt="Image" /></a>
                      <div className="post-date"><span>14</span> April 2025</div>
                    </div>
                    <div className="wt-post-info">
                      <div className="post-category">
                        <a href="/blog-single">Architecture</a>
                        <a href="/blog-single">Interior</a>
                      </div>
                      <div className="wt-post-meta">
                        <ul>
                          <li className="post-author"><img src={`${process.env.NODE_ENV === "production" ? "/Fahud" : ""}/images/blog/blog-author/pic3.jpg`} alt="Image" /><span>Devid</span></li>
                          <li className="post-comment"><i className="bi bi-chat-left"></i> 24</li>
                          <li className="post-time"><i className="bi bi-clock"></i> 14 Days</li>
                        </ul>
                      </div>
                      <div className="wt-post-title">
                        <h3 className="post-title">
                          <a href="/blog-single">Architectural elements often include clean lines and a focus on natural light.</a>
                        </h3>
                      </div>
                      <div className="wt-post-readmore">
                        <a href="/blog-single" className="site-button-link site-text-primary">Read More</a>
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
