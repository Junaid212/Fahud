import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InnerBanner from '@/components/InnerBanner';

export default function ShopDetail() {
  return (
    <>
      <div className="page-wraper">
        <Header />
        
        <div className="page-content">
          <InnerBanner title="Shop Detail" />
          

             

            {/*  SECTION CONTENT START  */}
            <div className="section-full p-t120 p-b90">
            
                {/*  PRODUCT DETAILS  */}
                <div className="container woo-entry m-b30">

                    <div className="twm-pro-detailwrap row m-b30">

                        <div className="col-lg-4 rightSidebar">
                            <div className=" wt-product-gallery">
                                {/* Image Slider */}
                                <div className="swiper product-SW-view2">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="mfp-gallery">
                                                <div className="wt-box">
                                                    <div className="wt-thum-bx wt-img-overlay1 ">
                                                        <img src="images/product-detail/1.jpg" alt="" />
                                                        <div className="product-view">
                                                            <a className="elem pic-long product-view-btn" href="images/product-detail/1.jpg" title="Product Image 1" 
                                                            data-lcl-txt="" data-lcl-author="" data-lcl-thumb="images/product-detail/1.jpg">
                                                            <i className="bi bi-arrows-angle-expand"></i>     
                                                            </a> 
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="mfp-gallery">
                                                <div className="wt-box">
                                                    <div className="wt-thum-bx wt-img-overlay1 ">
                                                        <img src="images/product-detail/2.jpg" alt="" />
                                                        <div className="product-view">
                                                            <a className="elem pic-long product-view-btn" href="images/product-detail/2.jpg" title="Product Image 2" 
                                                            data-lcl-txt="" data-lcl-author="" data-lcl-thumb="images/product-detail/2.jpg">
                                                            <i className="bi bi-arrows-angle-expand"></i>     
                                                            </a> 
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="mfp-gallery">
                                                <div className="wt-box">
                                                    <div className="wt-thum-bx wt-img-overlay1 ">
                                                        <img src="images/product-detail/3.jpg" alt="" />
                                                        <div className="product-view">
                                                            <a className="elem pic-long product-view-btn" href="images/product-detail/3.jpg" title="Product Image 3" 
                                                            data-lcl-txt="" data-lcl-author="" data-lcl-thumb="images/product-detail/3.jpg">
                                                            <i className="bi bi-arrows-angle-expand"></i>     
                                                            </a> 
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="mfp-gallery">
                                                <div className="wt-box">
                                                    <div className="wt-thum-bx wt-img-overlay1 ">
                                                        <img src="images/product-detail/4.jpg" alt="" />
                                                        <div className="product-view">
                                                            <a className="elem pic-long product-view-btn" href="images/product-detail/4.jpg" title="Product Image 4" 
                                                            data-lcl-txt="" data-lcl-author="" data-lcl-thumb="images/product-detail/4.jpg">
                                                            <i className="bi bi-arrows-angle-expand"></i>     
                                                            </a> 
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="mfp-gallery">
                                                <div className="wt-box">
                                                    <div className="wt-thum-bx wt-img-overlay1 ">
                                                        <img src="images/product-detail/1.jpg" alt="" />
                                                        <div className="product-view">
                                                            <a className="elem pic-long product-view-btn" href="images/product-detail/1.jpg" title="Product Image 1" 
                                                            data-lcl-txt="" data-lcl-author="" data-lcl-thumb="images/product-detail/1.jpg">
                                                            <i className="bi bi-arrows-angle-expand"></i>     
                                                            </a> 
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="mfp-gallery">
                                                <div className="wt-box">
                                                    <div className="wt-thum-bx wt-img-overlay1 ">
                                                        <img src="images/product-detail/2.jpg" alt="" />
                                                        <div className="product-view">
                                                            <a className="elem pic-long product-view-btn" href="images/product-detail/2.jpg" title="Product Image 2" 
                                                            data-lcl-txt="" data-lcl-author="" data-lcl-thumb="images/product-detail/2.jpg">
                                                            <i className="bi bi-arrows-angle-expand"></i>     
                                                            </a> 
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="mfp-gallery">
                                                <div className="wt-box">
                                                    <div className="wt-thum-bx wt-img-overlay1 ">
                                                        <img src="images/product-detail/3.jpg" alt="" />
                                                        <div className="product-view">
                                                            <a className="elem pic-long product-view-btn" href="images/product-detail/3.jpg" title="Product Image 3" 
                                                            data-lcl-txt="" data-lcl-author="" data-lcl-thumb="images/product-detail/3.jpg">
                                                            <i className="bi bi-arrows-angle-expand"></i>     
                                                            </a> 
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="mfp-gallery">
                                                <div className="wt-box">
                                                    <div className="wt-thum-bx wt-img-overlay1 ">
                                                        <img src="images/product-detail/4.jpg" alt="" />
                                                        <div className="product-view">
                                                            <a className="elem pic-long product-view-btn" href="images/product-detail/4.jpg" title="Product Image 4" 
                                                            data-lcl-txt="" data-lcl-author="" data-lcl-thumb="images/product-detail/4.jpg">
                                                            <i className="bi bi-arrows-angle-expand"></i>     
                                                            </a> 
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-button-next"></div>
                                    <div className="swiper-button-prev"></div>
                                </div>
                                {/* Thumbnail Slider */}
                                <div className="swiper product-SW-view">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <img src="images/product-detail/thumb/t1.jpg" alt="" />
                                        </div>
                                        <div className="swiper-slide">
                                            <img src="images/product-detail/thumb/t2.jpg" alt="" />
                                        </div>
                                        <div className="swiper-slide">
                                            <img src="images/product-detail/thumb/t3.jpg" alt="" />
                                        </div>
                                        <div className="swiper-slide">
                                            <img src="images/product-detail/thumb/t4.jpg" alt="" />
                                        </div>
                                        <div className="swiper-slide">
                                            <img src="images/product-detail/thumb/t1.jpg" alt="" />
                                        </div>
                                        <div className="swiper-slide">
                                            <img src="images/product-detail/thumb/t2.jpg" alt="" />
                                        </div>
                                        <div className="swiper-slide">
                                            <img src="images/product-detail/thumb/t3.jpg" alt="" />
                                        </div>
                                        <div className="swiper-slide">
                                            <img src="images/product-detail/thumb/t4.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>                 
                        
                        <div className="col-lg-8">
                            <div className="product-detail-info">
                                
                                <div className="single-product-title ">
                                    <h3 className="post-title"><a href="javascript:void(0);">Potted plants with shelf and chair</a></h3>
                                </div>

                                <div className="product-pr-rate">
                                    <div className="product-single-price">
                                        <span className="p-single-old-price">$55</span>
                                        <span className="p-single-new-price">$46.99</span>
                                    </div>
                                    <div className="product-single-rating">
                                        <span className="rating-bx site-text-primary">
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-half"></i>
                                        </span>
                                        <span className="font-weight-600 text-black">(39 customer reviews)</span>
                                    </div>
                                </div>
                                
                                <ul className="product_meta"> 
                                    <li className="sku_wrapper">SKU: 
                                        <span className="sku">05</span>
                                    </li> 
                                    <li className="posted_in">Categories: 
                                        <a href="#" rel="tag">Interior, Decoration</a>
                                    </li>
                                    <li className="product-single-availability">
                                        Availability: <span>500 In Stock</span>
                                    </li> 
                                </ul>

                                <div className="wt-product-text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare sem sed quam tempus aliquet vitae eget dolor. Proin eu ultrices libero. Curabitur vulputate vestibulum elementum. Suspendisse id neque a nibh mollis blandit. Quisque varius eros ac purus dignissim. Proin eu ultrices libero. Curabitur vulputate vestibulum elementum. Suspendisse id neque a nibh mollis blandit.</p>
                                </div>

                                <div className="quantity-btn-wrap">
                                    <form method="post" className="cart clearfix m-t30">
                                        <div className="quantity btn-quantity">
                                            <input id="demo_vertical2" type="text" value="1" name="demo_vertical2" />
                                        </div>
                                        <button className="site-button">Add to Cart</button>
                                    </form>
                                </div>

                            </div>
                        </div>
                    
                    </div>

                    {/*  Detail SECTION START  */}
                    <div className="product-detail-full"> 

                        <div className="wt-accordion " id="accordion-two">

                            {/* One */}
                            <div className="panel wt-panel">
                                <div className="acod-head" id="headingOne">
                                    <h4 className="acod-title">
                                        <a className="collapsed" data-bs-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Product detail
                                        <span className="indicator"><i className="bi bi-plus"></i></span>
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-bs-parent="#accordion-two">
                                    <div className="acod-content p-tb15">
                                        <p>Consectetur adipiscing elit. Proin ornare sem sed quam tempus aliquet vitae eget dolor. Proin eu ultrices libero. Curabitur vulputate vestibulum elementum. Suspendisse id neque a nibh mollis blandit. Quisque varius eros ac purus dignissim. Proin eu ultrices libero. Curabitur vulputate vestibulum elementum. Suspendisse id neque a nibh mollis blandit.</p>
                                        <div className="content-table fl-wrap">
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td>Dimensions:</td>
                                                        <td>120 x 430 x 130 mm</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Speed:</td>
                                                        <td>4500 RPM</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Weight:</td>
                                                        <td>60 kg</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Battery Included:</td>
                                                        <td>True - 1 Lithium Ion</td>
                                                    </tr>
                                                    <tr>
                                                        <td>System:</td>
                                                        <td>220V MAX*</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Two */}
                            <div className="panel wt-panel">
                                <div className="acod-head" id="headingTwo">
                                    <h4 className="acod-title">
                                        <a className="collapsed" data-bs-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Review
                                        <span className="indicator"><i className="bi bi-plus"></i></span>
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-bs-parent="#accordion-two">
                                    <div className="acod-content p-tb15">
                                        <div className="twm-post-com-wrap">
                                            <div className="clear" id="comment-list">
                                                <div className="comments-area" id="comments">
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
                                                                <p className="comment-form-author">
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
                    {/*  Detail SECTION END  */}                    
                    
                </div>
                {/*  PRODUCT DETAILS  */}    
                    
            </div>
            {/*  CONTENT CONTENT END  */}
        
            {/*  SECTION CONTENT START  */}
            <div className="section-full p-t120 p-b120 site-bg-white">
                <div className="container">
                    <div className="section-content">
                        {/*  TITLE START */}
                            <div className="section-head center wt-small-separator-outer">
                            <div className="wt-small-separator site-text-primary">
                                <i className="bi bi-house"></i>
                                <div>Products</div>
                            </div>
                            <h2 className="wt-title  title_split_anim">Related products</h2>
                        </div>
                        {/*  TITLE END */}
                        <div className="featured-products">
                            <div className="owl-carousel related-project-slider">
                                {/*  COLUMNS 1  */}
                                <div className="item">
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
                                                <a href="product-detail.html">Chainsaw Machine</a>
                                            </h4>
                                            <span className="price">
                                                <del><span><span className="Price-currencySymbol">$ </span>45.00</span></del>
                                                <ins>
                                                    <span><span className="Price-currencySymbol">$ </span>36.00</span>
                                                </ins>
                                            </span>

                                        </div>
                                       
                                    </div>
                                </div>
                                
                                {/*  COLUMNS 2  */}
                                <div className="item">
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
                                                <a href="product-detail.html">Drilling Machine</a>
                                            </h4>
                                            <span className="price">
                                                <del><span><span className="Price-currencySymbol">$ </span>45.00</span></del>
                                                <ins>
                                                    <span><span className="Price-currencySymbol">$ </span>36.00</span>
                                                </ins>
                                            </span>

                                        </div>
                                        
                                    </div>
                                </div>
                                
                                {/*  COLUMNS 3  */}
                                <div className="item">
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
                                                <a href="product-detail.html">Professional angle grinder</a>
                                            </h4>
                                            <span className="price">
                                                <del><span><span className="Price-currencySymbol">$ </span>45.00</span></del>
                                                <ins>
                                                    <span><span className="Price-currencySymbol">$ </span>36.00</span>
                                                </ins>
                                            </span>

                                        </div>
                                       
                                    </div>
                                </div>
                                
                                {/*  COLUMNS 4  */}
                                <div className="item">
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
                                                <a href="product-detail.html">Safety helmet</a>
                                            </h4>
                                            <span className="price">
                                                <del><span><span className="Price-currencySymbol">$ </span>45.00</span></del>
                                                <ins>
                                                    <span><span className="Price-currencySymbol">$ </span>36.00</span>
                                                </ins>
                                            </span>

                                        </div>
                                    </div>
                                </div>

                                {/*  COLUMNS 5  */}
                                <div className="item">
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
                                                <a href="product-detail.html">Chainsaw Machine</a>
                                            </h4>
                                            <span className="price">
                                                <del><span><span className="Price-currencySymbol">$ </span>45.00</span></del>
                                                <ins>
                                                    <span><span className="Price-currencySymbol">$ </span>36.00</span>
                                                </ins>
                                            </span>

                                        </div>
                                       
                                    </div>
                                </div>
                                
                                {/*  COLUMNS 6  */}
                                <div className="item">
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
                                                <a href="product-detail.html">Drilling Machine</a>
                                            </h4>
                                            <span className="price">
                                                <del><span><span className="Price-currencySymbol">$ </span>45.00</span></del>
                                                <ins>
                                                    <span><span className="Price-currencySymbol">$ </span>36.00</span>
                                                </ins>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                
                                {/*  COLUMNS 7  */}
                                <div className="item">
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
                                                <a href="product-detail.html">Professional angle grinder</a>
                                            </h4>
                                            <span className="price">
                                                <del><span><span className="Price-currencySymbol">$ </span>45.00</span></del>
                                                <ins>
                                                    <span><span className="Price-currencySymbol">$ </span>36.00</span>
                                                </ins>
                                            </span>
                                        </div>
                                       
                                    </div>
                                </div>
                                
                                {/*  COLUMNS 8  */}
                                <div className="item">
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
                                                <a href="product-detail.html">Safety helmet</a>
                                            </h4>
                                            <span className="price">
                                                <del><span><span className="Price-currencySymbol">$ </span>45.00</span></del>
                                                <ins>
                                                    <span><span className="Price-currencySymbol">$ </span>36.00</span>
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
             {/*  SECTION CONTENT END  */}  
            
     
        
        </div>
        
        <Footer />
      </div>
    </>
  );
}