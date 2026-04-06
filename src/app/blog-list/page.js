import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InnerBanner from '@/components/InnerBanner';

export default function BlogList() {
  return (
    <>
      <div className="page-wraper">
        <Header />
        
        <div className="page-content">
          <InnerBanner title="Blog List" />
          

              

            {/*  OUR BLOG START  */}
            <div className="section-full  p-t120 p-b90">
                <div className="container">
                
                    {/*  BLOG SECTION START  */}
                    <div className="section-content">
                        <div className="row d-flex justify-content-center">
                        
                            <div className="col-xl-8 col-lg-8 col-md-12 m-b30">

                                <div className="blog-list-outer">

                                    {/* Block one */}
                                    <div className="blog-post blog-post-4-outer blog-list-style m-b30">
                                        <div className="wt-post-media">
                                            <a href="blog-single.html"><img src="images/blog/blog-list/bg1.jpg" alt="Image" /></a>
                                            <div className="post-date"><span>14</span> April 2025</div>
                                        </div>
                                                                            
                                        <div className="wt-post-info">
                                            <div className="post-category">
                                                <a href="blog-single.html">Architecure</a>
                                                <a href="blog-single.html">Interior</a>
                                            </div>
                                            <div className="wt-post-meta ">
                                                <ul>
                                                    <li className="post-author"><img src="images/blog/blog-author/pic3.jpg" alt="Image" /><span>Devid</span></li>
                                                    <li className="post-comment"><i className="bi bi-chat-left"></i> 24 </li>
                                                    <li className="post-time"><i className="bi bi-clock"></i> 14 Days </li>
                                                </ul>
                                            </div> 
                                                                            
                                            <div className="wt-post-title ">
                                                <h3 className="post-title"><a href="blog-single.html">Do You Know How Home
                                                    Value is Affected </a></h3>
                                            </div>
                                            
                                            <div className="wt-post-readmore ">
                                                <a href="blog-single.html" className="site-button-link site-text-primary">Read More</a>
                                            </div>                                        
                                        </div>                                
                                    </div>

                                    {/* Block two */}
                                    <div className="blog-post blog-post-4-outer blog-list-style m-b30">
                                        <div className="wt-post-media">
      
                                            <div className="swiper twm-blog-list-carousal">
                                                <div className="swiper-wrapper">
                                                    <div className="swiper-slide">
                                                        <a href="blog-single.html"><img src="images/blog/blog-list/bg2.jpg" alt="" /></a>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <a href="blog-single.html"><img src="images/blog/blog-list/bg3.jpg" alt="" /></a>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <a href="blog-single.html"><img src="images/blog/blog-list/bg4.jpg" alt="" /></a>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <a href="blog-single.html"><img src="images/blog/blog-list/bg5.jpg" alt="" /></a>
                                                    </div>
                                                  
                                                </div>
                                                <div className="swiper-button-next"></div>
                                                <div className="swiper-button-prev"></div>
                                            </div>

                                            <div className="post-date"><span>16</span> April 2025</div>

                                        </div>
                                                                            
                                        <div className="wt-post-info">
                                            <div className="post-category">
                                                <a href="blog-single.html">Design</a>
                                                <a href="blog-single.html">Interior</a>
                                            </div>
                                            <div className="wt-post-meta ">
                                                <ul>
                                                    <li className="post-author"><img src="images/blog/blog-author/pic3.jpg" alt="Image" /><span>Devid</span></li>
                                                    <li className="post-comment"><i className="bi bi-chat-left"></i> 24 </li>
                                                    <li className="post-time"><i className="bi bi-clock"></i> 14 Days </li>
                                                </ul>
                                            </div> 
                                                                            
                                            <div className="wt-post-title ">
                                                <h3 className="post-title"><a href="blog-single.html">Gentle Hues, Stunning Views Pastel Wall Colours You Must Try</a></h3>
                                            </div>
                                            
                                            <div className="wt-post-readmore ">
                                                <a href="blog-single.html" className="site-button-link site-text-primary">Read More</a>
                                            </div>                                        
                                        </div>                                
                                    </div>

                                    {/* Block three mp4 video  */}
                                    <div className="blog-post blog-post-4-outer blog-list-style m-b30">
                                        <div className="wt-post-media">
                                            <a href="blog-single.html">
                                                <video muted loop autoplay className="blog-mp4-vide">
                                                    <source src="images/video-1.mp4" type="video/mp4" />
                                                </video>
                                            </a>
                                            <div className="post-date"><span>17</span> April 2025</div>
                                        </div>
                                                                            
                                        <div className="wt-post-info">
                                            <div className="post-category">
                                                <a href="blog-single.html">Architecure</a>
                                                <a href="blog-single.html">Room</a>
                                            </div>
                                            <div className="wt-post-meta ">
                                                <ul>
                                                    <li className="post-author"><img src="images/blog/blog-author/pic3.jpg" alt="Image" /><span>Devid</span></li>
                                                    <li className="post-comment"><i className="bi bi-chat-left"></i> 24 </li>
                                                    <li className="post-time"><i className="bi bi-clock"></i> 14 Days </li>
                                                </ul>
                                            </div> 
                                                                            
                                            <div className="wt-post-title ">
                                                <h3 className="post-title"><a href="blog-single.html">Engineered Wood vs. Plywood: Which is Best for Your Home?</a></h3>
                                            </div>
                                            
                                            <div className="wt-post-readmore ">
                                                <a href="blog-single.html" className="site-button-link site-text-primary">Read More</a>
                                            </div>                                        
                                        </div>                                
                                    </div>
                                    
                                    {/* Block four youtube video */}
                                    <div className="blog-post blog-post-4-outer blog-list-style m-b30">
                                        <div className="wt-post-media">
                                            
                                            <div className="blog-youtube-vide">
                                                <iframe src="https://www.youtube.com/embed/_WtL-9Qrvqo?si=jVw3nySkJlcezBzg" title="YouTube video player"  allow="" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                            </div>
                                            
                                            <div className="post-date"><span>17</span> April 2025</div>
                                        </div>
                                                                            
                                        <div className="wt-post-info">
                                            <div className="post-category">
                                                <a href="blog-single.html">Architecure</a>
                                                <a href="blog-single.html">Room</a>
                                            </div>
                                            <div className="wt-post-meta ">
                                                <ul>
                                                    <li className="post-author"><img src="images/blog/blog-author/pic3.jpg" alt="Image" /><span>Devid</span></li>
                                                    <li className="post-comment"><i className="bi bi-chat-left"></i> 24 </li>
                                                    <li className="post-time"><i className="bi bi-clock"></i> 14 Days </li>
                                                </ul>
                                            </div> 
                                                                            
                                            <div className="wt-post-title ">
                                                <h3 className="post-title"><a href="blog-single.html">Engineered Wood vs. Plywood: Which is Best for Your Home?</a></h3>
                                            </div>
                                            
                                            <div className="wt-post-readmore ">
                                                <a href="blog-single.html" className="site-button-link site-text-primary">Read More</a>
                                            </div>                                        
                                        </div>                                
                                    </div>

                                    {/* Block five */}
                                    <div className="blog-post blog-post-4-outer blog-list-style m-b30">
                                        <div className="wt-post-media">
                                            <a href="blog-single.html">
                                                <img src="images/blog/blog-list/bg7.jpg" alt="" />
                                            </a>
                                            <div className="post-date"><span>19</span> April 2025</div>
                                        </div>
                                                                            
                                        <div className="wt-post-info">
                                            <div className="post-category">
                                                <a href="blog-single.html">Conastruction</a>
                                                <a href="blog-single.html">Interior</a>
                                            </div>
                                            <div className="wt-post-meta ">
                                                <ul>
                                                    <li className="post-author"><img src="images/blog/blog-author/pic3.jpg" alt="Image" /><span>Devid</span></li>
                                                    <li className="post-comment"><i className="bi bi-chat-left"></i> 24 </li>
                                                    <li className="post-time"><i className="bi bi-clock"></i> 14 Days </li>
                                                </ul>
                                            </div> 
                                                                            
                                            <div className="wt-post-title ">
                                                <h3 className="post-title"><a href="blog-single.html">Home Renovation Mistakes to Avoid: What Not to Do in 2025?</a></h3>
                                            </div>
                                            
                                            <div className="wt-post-readmore ">
                                                <a href="blog-single.html" className="site-button-link site-text-primary">Read More</a>
                                            </div>                                        
                                        </div>                                
                                    </div>                               

                                </div>

                                {/* Post pagination */}

                                <ul className="custom-pagination clearfix">
                                    <li className="prev"><a href="#0"><span className="bi bi-chevron-left"></span></a></li>
                                    <li><a href="#0" >1</a></li>
                                    <li><a href="#0" className="active">2</a></li>
                                    <li><a href="#0">3</a></li>
                                    <li className="next"><a href="#0"><span className="bi bi-chevron-right"></span></a></li>
                                </ul>
                                
                            </div> 
                            
                            {/*  SIDE BAR START  */}
                            <div className="col-xl-4 col-lg-4 col-md-12 rightSidebar  m-b30">
                            
                                <aside  className="side-bar">

                                    {/*  SEARCH  */}
                                    <div className="widget search-bx">
                                                                                    
                                        <form role="search" method="post">
                                            <div className="input-group">
                                                <input name="news-letter" type="text" className="form-control" placeholder="Write your text" />
                                                <span className="input-group-btn">
                                                    <button type="submit" className="btn"><i className="fa fa-search"></i></button>
                                                </span>
                                            </div>
                                        </form>
                                        
                                    </div>

                                    {/*  RECENT POSTS  */}
                                    <div className="widget recent-posts-entry">
                                        <div className="m-b30">
                                            <h4 className="widget-title">Recent Posts</h4>
                                        </div>
                                        <div className="section-content">
                                            
                                            <div className="widget-post-bx">
                                                <div className="widget-post">
                                                    <div className="wt-post-media">
                                                        <img src="images/blog/recent-blog/pic1.jpg" alt="" />
                                                    </div>
                                                    <div className="wt-post-info">
                                                        <div className="wt-post-meta">
                                                            <ul>
                                                                <li className="post-author">25 May</li>
                                                                <li className="post-comment">05 Comment</li>
                                                            </ul>
                                                        </div>                                            
                                                        <div className="wt-post-header">
                                                            <a href="blog-single.html" className="post-title">Approved for restoration town hall.</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="widget-post">
                                                    <div className="wt-post-media">
                                                        <img src="images/blog/recent-blog/pic2.jpg" alt="" />
                                                    </div>
                                                    <div className="wt-post-info">
                                                        <div className="wt-post-meta">
                                                            <ul>
                                                                <li className="post-author">28 June</li>
                                                                <li className="post-comment">05 Comment</li>
                                                            </ul>
                                                        </div>                                            
                                                        <div className="wt-post-header">
                                                            <a href="blog-single.html" className="post-title">Planning approved for restoration.</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="widget-post">
                                                    <div className="wt-post-media">
                                                        <img src="images/blog/recent-blog/pic3.jpg" alt="" />
                                                    </div>
                                                    <div className="wt-post-info">
                                                        <div className="wt-post-meta">
                                                            <ul>
                                                                <li className="post-author">28 June</li>
                                                                <li className="post-comment">05 Comment</li>
                                                            </ul>
                                                        </div>                                            
                                                        <div className="wt-post-header">
                                                            <a href="blog-single.html" className="post-title">Crafting elegance with a modern twist.</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/*  TAGS  */}
                                    <div className="widget widget_tag_cloud">
                                        <div className="m-b30">
                                            <h4 className="widget-title">Tags</h4>
                                        </div>
                                        <div className="tagcloud">
                                            <a href="blog-grid.html">Outdoor</a>
                                            <a href="blog-grid.html">Interior </a>
                                            <a href="blog-grid.html">Factory</a>                                            
                                            <a href="blog-grid.html">Mines </a>
                                            <a href="blog-grid.html">Renovation</a>
                                            <a href="blog-grid.html">Industry</a>
                                        </div>
                                    </div> 

                                    {/*  CATEGORY  */}   
                                    <div className="widget widget_services">
                                        <div className="m-b30">
                                            <h4 className="widget-title">Blog Categories</h4>
                                            
                                        </div>
                                        <ul>
                                            <li><a href="blog-grid.html">Interior</a><span className="badge">08</span></li>
                                            <li><a href="blog-grid.html">Decore</a><span className="badge">15</span></li>
                                            <li><a href="blog-grid.html">Architecture</a><span className="badge">24</span></li>
                                            <li><a href="blog-grid.html">Construction</a><span className="badge">12</span></li>
                                            <li><a href="blog-grid.html">Renovation</a><span className="badge">05</span></li>
                                        </ul>
                                    </div>   

                                </aside>

                            </div>
                            {/*  SIDE BAR END  */}                          
                                                        
                        </div>

                    </div>
                    
                </div>
                
            </div>   
            {/*  OUR BLOG END  */}  
     
        
        </div>
        
        <Footer />
      </div>
    </>
  );
}