import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InnerBanner from '@/components/InnerBanner';

export default function BlogGrid() {
  return (
    <>
      <div className="page-wraper">
        <Header />
        
        <div className="page-content">
          <InnerBanner title="Blog Grid" />
          

              


            {/*  OUR BLOG START  */}
            <div className="section-full p-t120  p-b90">

                <div className="container">
                    <div className="section-content">

                        <div className="row justify-content-center">
                                
                            {/*  COLUMNS 1  */} 
                            <div className="col-lg-4 col-md-6 m-b30">
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

                            {/*  COLUMNS 2  */} 
                            <div className="col-lg-4 col-md-6 m-b30">
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
                            <div className="col-lg-4 col-md-6 m-b30">
                                <div className="blog-post blog-post-5-outer">
                                    <div className="wt-post-media">
                                        <a href="blog-single.html"><img src="images/blog/latest-2/bg3.jpg" alt="" /></a>
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
                            <div className="col-lg-4 col-md-6 m-b30">
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
                            <div className="col-lg-4 col-md-6 m-b30">
                                <div className="blog-post blog-post-5-outer">
                                    <div className="wt-post-media">
                                        <a href="blog-single.html"><img src="images/blog/latest-2/bg5.jpg" alt="" /></a>
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
                            <div className="col-lg-4 col-md-6 m-b30">
                                <div className="blog-post blog-post-5-outer">
                                    <div className="wt-post-media">
                                        <a href="blog-single.html"><img src="images/blog/latest-2/bg6.jpg" alt="" /></a>
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

                        </div>

                        <ul className="custom-pagination clearfix">
                            <li className="prev"><a href="#0"><span className="bi bi-chevron-left"></span></a></li>
                            <li><a href="#0" >1</a></li>
                            <li><a href="#0" className="active">2</a></li>
                            <li><a href="#0">3</a></li>
                            <li className="next"><a href="#0"><span className="bi bi-chevron-right"></span></a></li>
                        </ul>

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