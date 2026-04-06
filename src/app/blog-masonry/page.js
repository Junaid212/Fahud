import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InnerBanner from '@/components/InnerBanner';

export default function BlogMasonry() {
  return (
    <>
      <div className="page-wraper">
        <Header />
        
        <div className="page-content">
          <InnerBanner title="Blog Masonry" />
          

              


            {/*  Masonry START  */}
            <div className="section-full p-t120  p-b90">
                <div className="container">
                    <div className="section-content">

                        <div className="masonry-wrap row">

                            {/*  COLUMNS 1  */} 
                            <div className="masonry-item col-lg-4 col-md-6 m-b30">
                                <div className="blog-post blog-post-5-outer">
                                    <div className="wt-post-media">
                                        <a href="blog-single.html"><img src="images/blog/latest/bg1.jpg" alt="" /></a>
                                    </div>
                                    <div className="wt-post-info">
                                        <div className="wt-post-meta ">
                                            <ul>
                                                <li className="post-category">Construction</li>
                                                <li className="post-date"><span>14</span> Jun 2025</li>
                                            </ul>
                                        </div>                               
                                        <div className="wt-post-title ">
                                            <h3 className="post-title"><a href="blog-single.html">Architects are creative problem solvers</a></h3>
                                        </div>
                                    </div>                                
                                </div>
                            </div>

                            {/*  COLUMNS 2  */} 
                            <div className="masonry-item col-lg-4 col-md-6 m-b30">
                                <div className="blog-post blog-post-5-outer">
                                    <div className="wt-post-media">
                                        <a href="blog-single.html"><img src="images/blog/latest-2/bg2.jpg" alt="" /></a>
                                    </div> 
                                    <div className="wt-post-info">
                                        <div className="wt-post-meta ">
                                            <ul>
                                                <li className="post-category">Architecture</li>
                                                <li className="post-date"><span>18</span> Jun 2025</li>
                                            </ul>
                                        </div>                                
                                        <div className="wt-post-title ">
                                            <h3 className="post-title"><a href="blog-single.html">Making a difference you can see and feel.</a></h3>
                                        </div>
                                    </div>                                
                                </div>
                            </div>
                            
                            {/*  COLUMNS 3  */} 
                            <div className="masonry-item col-lg-4 col-md-6 m-b30">
                                <div className="blog-post blog-post-5-outer">
                                    <div className="wt-post-media">
                                        <a href="blog-single.html"><img src="images/blog/latest/bg2.jpg" alt="" /></a>
                                    </div>
                                    <div className="wt-post-info">
                                        <div className="wt-post-meta ">
                                            <ul>
                                                <li className="post-category">Interior</li>
                                                <li className="post-date"><span>24</span> Jun 2025</li>
                                            </ul>
                                        </div>                                 
                                        <div className="wt-post-title ">
                                            <h3 className="post-title"><a href="blog-single.html">Discover the epitome of timeless design</a></h3>
                                        </div>
                                    </div>                                
                                </div> 
                            </div>

                            {/*  COLUMNS 4  */} 
                            <div className="masonry-item col-lg-4 col-md-6 m-b30">
                                <div className="blog-post blog-post-5-outer">
                                    <div className="wt-post-media">
                                        <a href="blog-single.html"><img src="images/blog/latest-2/bg4.jpg" alt="" /></a>
                                    </div>
                                    <div className="wt-post-info">
                                        <div className="wt-post-meta ">
                                            <ul>
                                                <li className="post-category">Construction</li>
                                                <li className="post-date"><span>14</span> Jun 2025</li>
                                            </ul>
                                        </div>                               
                                        <div className="wt-post-title ">
                                            <h3 className="post-title"><a href="blog-single.html">Making your buildings work hard for you</a></h3>
                                        </div>
                                    </div>                                
                                </div>
                            </div>

                            {/*  COLUMNS 5  */} 
                            <div className="masonry-item col-lg-4 col-md-6 m-b30">
                                <div className="blog-post blog-post-5-outer">
                                    <div className="wt-post-media">
                                        <a href="blog-single.html"><img src="images/blog/latest/bg3.jpg" alt="" /></a>
                                    </div> 
                                    <div className="wt-post-info">
                                        <div className="wt-post-meta ">
                                            <ul>
                                                <li className="post-category">Architecture</li>
                                                <li className="post-date"><span>18</span> Jun 2025</li>
                                            </ul>
                                        </div>                                
                                        <div className="wt-post-title ">
                                            <h3 className="post-title"><a href="blog-single.html">If you can dream it, we can architect it</a></h3>
                                        </div>
                                    </div>                                
                                </div>
                            </div>
                            
                            {/*  COLUMNS 6  */} 
                            <div className="masonry-item col-lg-4 col-md-6 m-b30">
                                <div className="blog-post blog-post-5-outer">
                                    <div className="wt-post-media">
                                        <a href="blog-single.html"><img src="images/blog/latest/bg6.jpg" alt="" /></a>
                                    </div>
                                    <div className="wt-post-info">
                                        <div className="wt-post-meta ">
                                            <ul>
                                                <li className="post-category">Interior</li>
                                                <li className="post-date"><span>24</span> Jun 2025</li>
                                            </ul>
                                        </div>                                 
                                        <div className="wt-post-title ">
                                            <h3 className="post-title"><a href="blog-single.html">Do You Know How Home Value is Affected</a></h3>
                                        </div>
                                    </div>                                
                                </div> 
                            </div>

                            {/*  COLUMNS 7  */} 
                            <div className="masonry-item col-lg-4 col-md-6 m-b30">
                                <div className="blog-post blog-post-5-outer">
                                    <div className="wt-post-media">
                                        <a href="blog-single.html"><img src="images/blog/latest-2/bg1.jpg" alt="" /></a>
                                    </div>
                                    <div className="wt-post-info">
                                        <div className="wt-post-meta ">
                                            <ul>
                                                <li className="post-category">Construction</li>
                                                <li className="post-date"><span>14</span> Jun 2025</li>
                                            </ul>
                                        </div>                               
                                        <div className="wt-post-title ">
                                            <h3 className="post-title"><a href="blog-single.html">Architects are creative problem solvers</a></h3>
                                        </div>
                                    </div>                                
                                </div>
                            </div>

                            {/*  COLUMNS 8  */} 
                            <div className="masonry-item col-lg-4 col-md-6 m-b30">
                                <div className="blog-post blog-post-5-outer">
                                    <div className="wt-post-media">
                                        <a href="blog-single.html"><img src="images/blog/latest/bg4.jpg" alt="" /></a>
                                    </div> 
                                    <div className="wt-post-info">
                                        <div className="wt-post-meta ">
                                            <ul>
                                                <li className="post-category">Architecture</li>
                                                <li className="post-date"><span>18</span> Jun 2025</li>
                                            </ul>
                                        </div>                                
                                        <div className="wt-post-title ">
                                            <h3 className="post-title"><a href="blog-single.html">Making a difference you can see and feel.</a></h3>
                                        </div>
                                    </div>                                
                                </div>
                            </div>
                            
                            {/*  COLUMNS 9  */} 
                            <div className="masonry-item col-lg-4 col-md-6 m-b30">
                                <div className="blog-post blog-post-5-outer">
                                    <div className="wt-post-media">
                                        <a href="blog-single.html"><img src="images/blog/latest/bg5.jpg" alt="" /></a>
                                    </div>
                                    <div className="wt-post-info">
                                        <div className="wt-post-meta ">
                                            <ul>
                                                <li className="post-category">Interior</li>
                                                <li className="post-date"><span>24</span> Jun 2025</li>
                                            </ul>
                                        </div>                                 
                                        <div className="wt-post-title ">
                                            <h3 className="post-title"><a href="blog-single.html">Discover the epitome of timeless design</a></h3>
                                        </div>
                                    </div>                                
                                </div> 
                            </div>
                                                        
                        </div>

                    </div>
                </div>
            </div>   
            {/*  Masonry END  */}

        
        </div>
        
        <Footer />
      </div>
    </>
  );
}