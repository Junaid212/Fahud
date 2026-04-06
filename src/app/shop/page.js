import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InnerBanner from '@/components/InnerBanner';

export default function Shop() {
  return (
    <>
      <div className="page-wraper">
        <Header />
        
        <div className="page-content">
          <InnerBanner title="Shop" />
          

              

            {/*  SHOP SECTION START  */}
            <div className="section-full p-t120 p-b90">
                <div className="container">
                    {/* Showing Result  */}  
                    <div className="product-filter-wrap d-flex justify-content-between align-items-center m-b30">
                        <span className="woocommerce-result-count">Showing 1&ndash;10 of 13 results</span>
                        <form className="woocommerce-ordering select-box-border-style1-wrapper" method="get">
                            <select name="orderby" className="orderby select-box-border-style1" aria-label="Shop order">
                                <option value="menu_order"  selected='selected'>Default sorting</option>
                                <option value="popularity" >Sort by popularity</option>
                                <option value="rating" >Sort by average rating</option>
                                <option value="date" >Sort by latest</option>
                                <option value="price" >Sort by price: low to high</option>
                                <option value="price-desc" >Sort by price: high to low</option>
                            </select>
                            <input type="hidden" name="paged" value="1" />
                        </form>
                    </div>
                    {/* Showing Result  */}
                    <div className="row d-flex justify-content-center">
                        
                        {/*  SIDE BAR START  */}
                        <div className="col-xl-4 col-lg-4 col-md-5 rightSidebar  m-b30">
                        
                            <aside  className="side-bar">
                            
                                   {/*  SEARCH  */}
                                   <div className="widget p-a20">
                                        <div className="m-b30">
                                            <h4 className="widget-title">Price Range</h4>
                                        </div>
                                        <div className="search-bx">
                                            <form role="search" method="post">
                                                <div className="input-group">
                                                    <input name="news-letter" type="text" className="form-control" placeholder="Write your text" />
                                                    <span className="input-group-btn">
                                                        <button type="submit" className="btn"><i className="fa fa-search"></i></button>
                                                    </span>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    
                                   {/*  CATEGORY  */}   
                                   <div className="widget widget_services p-a20">
                                    <div className="m-b30">
                                        <h4 className="widget-title">Categories</h4>
                                        
                                    </div>
                                    <ul>
                                        <li><a href="shop-detail.html">Chainsaw Machine</a><span className="badge">28</span></li>
                                        <li><a href="shop-detail.html">Drilling Machine</a><span className="badge">05</span></li>
                                        <li><a href="shop-detail.html">Safety helmet</a><span className="badge">24</span></li>
                                        <li><a href="shop-detail.html">Hammer</a><span className="badge">15</span></li>
                                        <li><a href="shop-detail.html">Cordless Drill</a><span className="badge">20</span></li>
                                    </ul>
                                  </div> 

                                  {/* PRICE RANGE SLIDER */}
                                   <div className="widget p-a20 product-range-slider1">
                                   
                                        <div className="m-b30">
                                            <h4 className="widget-title">Price Range</h4>
                                        </div>                                       
                                      
                                        <div className="shop-item-price-slider">
                                            <b>$ 10</b> 
                                            <input id="ex2" type="text" className="span2" value="" data-slider-min="10" data-slider-max="100" data-slider-step="5" data-slider-value="[20,80]" /> 
                                            <b>$ 100</b>
                                        </div>
                                        
                                    </div>                                        
                                    
                                   
                                   {/*  ARCHIVES  */}   
                                   <div className="widget widget_archives p-a20">
                                        <div className="m-b30">
                                            <h4 className="widget-title">Archives</h4>
                                        </div>
                                        <ul>
                                            <li><a href="shop-detail.html">January 2025</a></li>
                                            <li><a href="shop-detail.html">February 2025</a></li>
                                            <li><a href="shop-detail.html">March 2025</a></li>
                                        </ul>
                                    </div>                                           
                                                                            
                                   {/*  TAGS  */}
                                   <div className="widget widget_tag_cloud p-a20">
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
                                    
                            </aside>
    
                        </div>
                        {/*  SIDE BAR END  */} 

                        <div className="col-xl-8 col-lg-8 col-md-7">                       
                            <div className="wt-product-box-wrap">
                                <div className="row">
                                    {/*  COLUMNS 1  */}
                                    <div className="col-lg-6 col-md-6 col-sm-6 m-b30">
                                        <div className="wt-box wt-product-box   overflow-hide">
                                            <div className="wt-thum-bx wt-img-overlay1">
                                                <img src="images/products/pic-1.jpg" alt="" />
                                                <div className="item-cart-view">
                                                    <div className="item-btn">
                                                        <a href="javascript:void(0);">
                                                            <i className="fa fa-cart-plus"></i>
                                                        </a>
                                                    </div>
                                                    <div className="item-btn">
                                                        <a href="javascript:void(0);">
                                                            <i className="fa fa-heart"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="wt-info text-center">
                                                <h4 className="wt-title">
                                                    <a href="shop-detail.html">Potted plants with shelf and chair</a>
                                                </h4>
                                                <span className="price">
                                                    <del><span><span className="Price-currencySymbol">$</span>90.00</span></del>
                                                    <ins>
                                                        <span><span className="Price-currencySymbol">$</span>85.00</span>
                                                    </ins>
                                                </span>

                                            </div>
                                        
                                        </div>
                                    </div> 

                                    {/*  COLUMNS 2  */}
                                    <div className="col-lg-6 col-md-6 col-sm-6 m-b30">
                                        <div className="wt-box wt-product-box   overflow-hide">
                                            <div className="wt-thum-bx wt-img-overlay1">
                                                <img src="images/products/pic-2.jpg" alt="" />
                                                <div className="item-cart-view">
                                                    <div className="item-btn">
                                                        <a href="javascript:void(0);">
                                                            <i className="fa fa-cart-plus"></i>
                                                        </a>
                                                    </div>
                                                    <div className="item-btn">
                                                        <a href="javascript:void(0);">
                                                            <i className="fa fa-heart"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                            <div className="wt-info text-center">
                                                <h4 className="wt-title">
                                                    <a href="shop-detail.html">Hand painted watercolor minimal</a>
                                                </h4>
                                                <span className="price">
                                                    <del><span><span className="Price-currencySymbol">$</span>110.00</span></del>
                                                    <ins>
                                                        <span><span className="Price-currencySymbol">$</span>105.00</span>
                                                    </ins>
                                                </span>

                                            </div>
                                            
                                        </div>
                                    </div>
                                    
                                    {/*  COLUMNS 3  */}
                                    <div className="col-lg-6 col-md-6 col-sm-6 m-b30">
                                        <div className="wt-box wt-product-box   overflow-hide">
                                            <div className="wt-thum-bx wt-img-overlay1">
                                                <img src="images/products/pic-3.jpg" alt="" />
                                                <div className="item-cart-view">
                                                    <div className="item-btn">
                                                        <a href="javascript:void(0);">
                                                            <i className="fa fa-cart-plus"></i>
                                                        </a>
                                                    </div>
                                                    <div className="item-btn">
                                                        <a href="javascript:void(0);">
                                                            <i className="fa fa-heart"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="wt-info text-center">
                                                <h4 className="wt-title">
                                                    <a href="shop-detail.html">Mirror with a shape of an eye</a>
                                                </h4>
                                                <span className="price">
                                                    <del><span><span className="Price-currencySymbol">$</span>99.00</span></del>
                                                    <ins>
                                                        <span><span className="Price-currencySymbol">$</span>79.00</span>
                                                    </ins>
                                                </span>

                                            </div>
                                        
                                        </div>
                                    </div>                                 
                                    
                                    {/*  COLUMNS 4  */}
                                    <div className="ccol-lg-6 col-md-6 col-sm-6 m-b30">
                                        <div className="wt-box wt-product-box   overflow-hide">
                                            <div className="wt-thum-bx wt-img-overlay1">
                                                <img src="images/products/pic-4.jpg" alt="" />
                                                <div className="item-cart-view">
                                                    <div className="item-btn">
                                                        <a href="javascript:void(0);">
                                                            <i className="fa fa-cart-plus"></i>
                                                        </a>
                                                    </div>
                                                    <div className="item-btn">
                                                        <a href="javascript:void(0);">
                                                            <i className="fa fa-heart"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="wt-info text-center">
                                                <h4 className="wt-title">
                                                    <a href="shop-detail.html">Elegant plants decoration vase</a>
                                                </h4>
                                                <span className="price">
                                                    <del><span><span className="Price-currencySymbol">$</span>120.00</span></del>
                                                    <ins>
                                                        <span><span className="Price-currencySymbol">$</span>99.00</span>
                                                    </ins>
                                                </span>

                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/*  COLUMNS 5  */}
                                    <div className="ccol-lg-6 col-md-6 col-sm-6 m-b30">
                                        <div className="wt-box wt-product-box   overflow-hide">
                                            <div className="wt-thum-bx wt-img-overlay1">
                                                <img src="images/products/pic-5.jpg" alt="" />
                                                <div className="item-cart-view">
                                                    <div className="item-btn">
                                                        <a href="javascript:void(0);">
                                                            <i className="fa fa-cart-plus"></i>
                                                        </a>
                                                    </div>
                                                    <div className="item-btn">
                                                        <a href="javascript:void(0);">
                                                            <i className="fa fa-heart"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="wt-info text-center">
                                                <h4 className="wt-title">
                                                    <a href="shop-detail.html">Elegant plants decoration vase</a>
                                                </h4>
                                                <span className="price">
                                                    <del><span><span className="Price-currencySymbol">$</span>95.00</span></del>
                                                    <ins>
                                                        <span><span className="Price-currencySymbol">$</span>85.00</span>
                                                    </ins>
                                                </span>

                                            </div>
                                            
                                        </div>
                                    </div>
                                    
                                    {/*  COLUMNS 6  */}
                                    <div className="col-lg-6 col-md-6 col-sm-6 m-b30">
                                        <div className="wt-box wt-product-box   overflow-hide">
                                            <div className="wt-thum-bx wt-img-overlay1">
                                                <img src="images/products/pic-6.jpg" alt="" />
                                                <div className="item-cart-view">
                                                    <div className="item-btn">
                                                        <a href="javascript:void(0);">
                                                            <i className="fa fa-cart-plus"></i>
                                                        </a>
                                                    </div>
                                                    <div className="item-btn">
                                                        <a href="javascript:void(0);">
                                                            <i className="fa fa-heart"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="wt-info text-center">
                                                <h4 className="wt-title">
                                                    <a href="shop-detail.html">Beautiful hotel insights</a>
                                                </h4>
                                                <span className="price">
                                                    <del><span><span className="Price-currencySymbol">$</span>85.00</span></del>
                                                    <ins>
                                                        <span><span className="Price-currencySymbol">$</span>65.00</span>
                                                    </ins>
                                                </span>

                                            </div>
                                            
                                        </div>
                                    </div>
                                    
                                    {/*  COLUMNS 7  */}
                                    <div className="col-lg-6 col-md-6 col-sm-6 m-b30">
                                        <div className="wt-box wt-product-box   overflow-hide">
                                            <div className="wt-thum-bx wt-img-overlay1">
                                                <img src="images/products/pic-7.jpg" alt="" />
                                                <div className="item-cart-view">
                                                    <div className="item-btn">
                                                        <a href="javascript:void(0);">
                                                            <i className="fa fa-cart-plus"></i>
                                                        </a>
                                                    </div>
                                                    <div className="item-btn">
                                                        <a href="javascript:void(0);">
                                                            <i className="fa fa-heart"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="wt-info text-center">
                                                <h4 className="wt-title">
                                                    <a href="shop-detail.html">Curtain window decoration interior</a>
                                                </h4>
                                                <span className="price">
                                                    <del><span><span className="Price-currencySymbol">$</span>45.00</span></del>
                                                    <ins>
                                                        <span><span className="Price-currencySymbol">$</span>36.00</span>
                                                    </ins>
                                                </span>

                                            </div>
                                        
                                        </div>
                                    </div>
                                    
                                    {/*  COLUMNS 8  */}
                                    <div className="col-lg-6 col-md-6 col-sm-6 m-b30">
                                        <div className="wt-box wt-product-box   overflow-hide">
                                            <div className="wt-thum-bx wt-img-overlay1">
                                                <img src="images/products/pic-8.jpg" alt="" />
                                                <div className="item-cart-view">
                                                    <div className="item-btn">
                                                            <a href="javascript:void(0);">
                                                                <i className="fa fa-cart-plus"></i>
                                                            </a>
                                                        </div>
                                                        <div className="item-btn">
                                                        <a href="javascript:void(0);">
                                                            <i className="fa fa-heart"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="wt-info text-center">
                                                <h4 className="wt-title">
                                                    <a href="shop-detail.html">Plant pot on stairs interior design</a>
                                                </h4>
                                                    
                                                <span className="price">
                                                    <del><span><span className="Price-currencySymbol">$</span>79.00</span></del>
                                                    <ins>
                                                        <span><span className="Price-currencySymbol">$</span>59.00</span>
                                                    </ins>
                                                </span>

                                            </div>
                                        </div>
                                    </div>

                                    {/*  COLUMNS 9  */}
                                    <div className="col-lg-6 col-md-6 col-sm-6 m-b30">
                                        <div className="wt-box wt-product-box   overflow-hide">
                                            <div className="wt-thum-bx wt-img-overlay1">
                                                <img src="images/products/pic-9.jpg" alt="" />
                                                <div className="item-cart-view">
                                                    <div className="item-btn">
                                                            <a href="javascript:void(0);">
                                                                <i className="fa fa-cart-plus"></i>
                                                            </a>
                                                        </div>
                                                        <div className="item-btn">
                                                        <a href="javascript:void(0);">
                                                            <i className="fa fa-heart"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="wt-info text-center">
                                                <h4 className="wt-title">
                                                    <a href="shop-detail.html">Plant pot on stairs interior design</a>
                                                </h4>
                                                    
                                                <span className="price">
                                                    <del><span><span className="Price-currencySymbol">$</span>125.00</span></del>
                                                    <ins>
                                                        <span><span className="Price-currencySymbol">$</span>115.00</span>
                                                    </ins>
                                                </span>

                                            </div>
                                        </div>
                                    </div>

                                    {/*  COLUMNS 10  */}
                                    <div className="col-lg-6 col-md-6 col-sm-6 m-b30">
                                        <div className="wt-box wt-product-box   overflow-hide">
                                            <div className="wt-thum-bx wt-img-overlay1">
                                                <img src="images/products/pic-10.jpg" alt="" />
                                                <div className="item-cart-view">
                                                    <div className="item-btn">
                                                            <a href="javascript:void(0);">
                                                                <i className="fa fa-cart-plus"></i>
                                                            </a>
                                                        </div>
                                                        <div className="item-btn">
                                                        <a href="javascript:void(0);">
                                                            <i className="fa fa-heart"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="wt-info text-center">
                                                <h4 className="wt-title">
                                                    <a href="shop-detail.html">Modern photorealistic lamp</a>
                                                </h4>
                                                    
                                                <span className="price">
                                                    <del><span><span className="Price-currencySymbol">$</span>65.00</span></del>
                                                    <ins>
                                                        <span><span className="Price-currencySymbol">$</span>49.00</span>
                                                    </ins>
                                                </span>

                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                                              
                    </div>                                
                </div>
            </div>   
            {/*  SHOP SECTION END  */}
          
        
        </div>
        
        <Footer />
      </div>
    </>
  );
}