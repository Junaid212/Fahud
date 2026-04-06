import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InnerBanner from '@/components/InnerBanner';

export default function BlogSingle() {
  return (
    <>
      <div className="page-wraper">
        <Header />
        
        <div className="page-content">
          <InnerBanner title="Blog Detail" />
          

              

            {/*  OUR BLOG START  */}
            <div className="section-full  p-t120 p-b90">
                <div className="container">
                
                    {/*  BLOG SECTION START  */}
                    <div className="section-content">
                        <div className="row d-flex justify-content-center">
                        
                            <div className="col-xl-9 col-lg-9 col-md-12  m-b30">
                                {/*  BLOG DETAIL START  */}
                                <div className="blog-post-single-outer">
                                    <div className="blog-post-style-2 blog-post-single">                                    

                                        <div className="single-post-content">
                                            
                                            <img src="images/blog/blog-single/1.jpg" alt="" /> 

                                            <div className="wt-post-meta">
                                                <ul>
                                                    <li className="post-date">15 Feb 2025</li>
                                                    <li className="post-comment">10 <span>Comment</span></li>
                                                </ul>
                                            </div>

                                            <div className="wt-post-title ">
                                                <h2 className="post-title">Interior Design History Journey of Design Through Time</h2>
                                            </div>

                                        </div>                                        

                                        <div className="wt-post-info">
                                            
                                            <div className="wt-post-discription">

                                                <p>Suspendisse viverra egestas eros. Duis tempus varius diam et condimentum. Donec elementum, mi ut posuere posuere, erat dui interdum ante, nec fringilla augue odio ac felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quam mauris, tempus ut felis nec, rutrum cursus arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque id sodales elit. Quisque et dui vulputate, rutrum nunc a, ullamcorper tortor. Duis at libero vestibulum, aliquet diam a, pharetra mauris. Donec justo libero, suscipit eu dolor scelerisque, eleifend rhoncus quam. Nullam aliquet semper magna, commodo tincidunt risus varius tincidunt. Integer pulvinar ac libero non vulputate.</p>
                                                
                                                <h3 className="wt-title m-b20">Today, space has become a high-value commodity in real estate.</h3>
                                                
                                                <p>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?</p>

                                                <div className="twm-blg-sites-pics row">
                                                    <div className="col-lg-4 col-md-6 m-b30">
                                                        <div className="twm-blg-sites-pics-bx">
                                                            <img src="images/blog/blog-single/pic1.jpg" alt="#" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6 m-b30">
                                                        <div className="twm-blg-sites-pics-bx">
                                                            <img src="images/blog/blog-single/pic2.jpg" alt="#" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6 m-b30">
                                                        <div className="twm-blg-sites-pics-bx">
                                                            <img src="images/blog/blog-single/pic3.jpg" alt="#" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <blockquote>
                                                    <div className="quote-left">
                                                    <i className="bi bi-chat-right-quote"></i>  
                                                    </div>
                                                    "Trust us we looked for a very long time and wasted thousands of dollars testing other teams, freelancers, outsource companies." 
                                                </blockquote>

                                                <p>Ever had a last minute requirement for items to be in a country where you do not have a visa to enter? Are you frustrated at having to hand-carry important documents to your client, which takes
                                                you out of the office for days? Let Focus help you. Our personnel are available 24-hours-a-day for these important deliveries. This leaves you free to concentrate on your business
                                                </p>

                                            </div>  

                                        </div>

                                    </div>

                                    <div className="s-post-tag-share">
                                        <div className="s-post-tags">
                                            <h3 className="twm-title">Popular Tags</h3>
                                            <div className="tagcloud">
                                                <a href="services.html">Outdoor</a>
                                                <a href="services.html">Interior </a>
                                                <a href="services.html">Factory</a>
                                                <a href="services.html">Mines </a>                                         
                                            </div>
                                        </div>
                                    
                                        <div className="s-post-share">
                                            <h3 className="twm-title">Share This Post</h3>
                                            <div className="twm-social2">
                                                <ul>
                                                    <li><a href="https://www.x.com" className="tm-s-x"><i className="bi bi-twitter-x"></i></a></li>
                                                    <li><a href="https://www.facebook.com" className="tm-s-fb"><i className="bi bi-facebook"></i></a></li>
                                                    <li><a href="https://www.instagram.com" className="tm-s-in"><i className="bi bi-instagram"></i></a></li>
                                                    <li><a href="https://www.pinterest.com/" className="tm-s-pi"><i className="bi bi-pinterest"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="post-navigation">
                                        <div className="post-nav-links">
                                            <div className="post-nav-item nav-post-prev">
                                                <div className="nav-post-meta"> 
                                                    <a href="blog-list.html"><b><i className="bi bi-arrow-left-short"></i> Previous</b> Strategy for Norway’s Peion to Fund Global.</a>
                                                </div>
                                            </div>
                                            <div className="post-nav-item nav-post-next">
                                                <div className="nav-post-meta"> 
                                                    <a href="blog-list.html"><b>Next <i className="bi bi-arrow-right-short"></i></b> For Norway’s Peion to Fund Global.</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>                                

                                    <div className="twm-post-com-wrap">
                                        <div className="clear" id="comment-list">
                                            <div className="comments-area" id="comments">
                                                <h3 className="comments-title m-t0">2 Comments</h3>
                                                <div>
                                                    {/*  COMMENT LIST START  */}
                                                    <ol className="comment-list">
                                                        <li className="comment">
                                                            {/*  COMMENT BLOCK  */}
                                                            <div className="comment-body">
                                                                <div className="comment-author">
                                                                    <img className="avatar photo" src="images/testimonials/pic1.jpg" alt="" />
                                                                    <cite className="fn">Rosalina Kelian</cite>
                                                                </div>                                                
                                                                <div className="comment-meta">
                                                                    <span><i className="fa fa-calendar"></i>15 Feb 2025</span>
                                                                </div>                                        
                                                                <p>Utenim ad minim veniam, quis nostrud exercitation ullamco lab oris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor Lorem ipsum dolor sit </p>
                                                                <div className="reply">
                                                                    <a href="javscript:;" className="comment-reply-link">
                                                                        <i className="fa fa-reply"></i>Reply
                                                                    </a>
                                                                </div>

                                                            </div>
                                                            {/*  SUB COMMENT BLOCK  */}
                                                            <ol className="children">
                                                                <li className="comment odd parent">
                                                                
                                                                    <div className="comment-body">
                                                                        <div className="comment-author">
                                                                            <img className="avatar photo" src="images/testimonials/pic2.jpg" alt="" />
                                                                            <cite className="fn">Md Wasim</cite>
                                                                            
                                                                        </div>                                                        
                                                                        <div className="comment-meta">
                                                                            <span><i className="fa fa-calendar"></i>19 Feb 2025</span>
                                                                        </div>                                                
                                                                        <p>Minim veniam, quis nostrud exercitation ullamco lab Lorem ipsum dolor sit amet consectetur oris nisi ut aliquip ex ea commodo consequat.</p>
                                                                        <div className="reply">
                                                                            <a href="javscript:;" className="comment-reply-link">
                                                                                <i className="fa fa-reply"></i>Reply
                                                                            </a>
                                                                        </div>
                                                                    </div>                                                        
                                                                    
                                                                </li>
                                                            </ol>
                                                        </li>
                                                                                                    
                                                    </ol>
                                                    {/*  COMMENT LIST END  */}
                                                    
                                                    {/*  LEAVE A REPLY START  */}
                                                    <div className="comment-respond m-t30" id="respond">
                        
                                                        <h2 className="comment-reply-title" id="reply-title">Add a Review
                                                            <small>
                                                                <a style={{"display":"none"}} href="#" id="cancel-comment-reply-link" rel="nofollow">Cancel reply</a>
                                                            </small>
                                                        </h2>
                        
                                                        <form className="comment-form" id="commentform" method="post">
                                                            <p className="comment-form-comment">
                                                                <label>Comment</label>
                                                                <textarea className="form-control" rows="8" name="comment" placeholder="Comment" id="comment"></textarea>
                                                            </p>
                                                            <p className="-author">
                                                                <label>Name <span className="required">*</span></label>
                                                                <input className="form-control" type="text" value="" name="user-comment" placeholder="Author" id="author" />
                                                            </p>
                                                            
                                                            <p className="comment-form-email">
                                                                <label>Email <span className="required">*</span></label>
                                                                <input className="form-control" type="text" value="" name="email" placeholder="Email" />
                                                            </p>
                                                            
                                                            <p className="comment-form-url">
                                                                <label>Website</label>
                                                                <input className="form-control" type="text" value="" name="url" placeholder="Website" id="url" />
                                                            </p>
                                                            
                                                            
                                                            
                                                            <p className="form-submit">
                                                                <button className="site-button "  type="button">Submit</button>
                                                            </p>
                                                            
                                                        </form>
                        
                                                    </div>
                                                    {/*  LEAVE A REPLY END  */}
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
            {/*  OUR BLOG END  */}          
     
        
        </div>
        
        <Footer />
      </div>
    </>
  );
}