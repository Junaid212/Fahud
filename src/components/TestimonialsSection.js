import Image from 'next/image';

export default function TestimonialsSection() {
  return (
    <div className="section-full bg-cover p-t120 p-b90 twm-t-monial-2">
      <div className="container">
        <div className="testimonial2-outer">
          {/* TITLE START */}
          <div className="section-head center wt-small-separator-outer">
            <div className="wt-small-separator site-text-primary">
              <i className="bi bi-house"></i>
              <div>Testimonials</div>
            </div>
            <h2 className="wt-title title_split_anim">What Our Clients Says</h2>
          </div>
          {/* TITLE END */}

          <div className="section-content">
            <div className="testimonial-1-content owl-carousel owl-btn-bottom-center m-b30">
              
              {/* block 1 */}    
              <div className="item">
                <div className="testimonial-1">
                  <div className="testimonial-content">
                    <div className="testimonial-text">
                      <i className="bi bi-chat-right-quote-fill"></i>
                      <p>
                        Thank you for your assistance in regards to our property. I think even if I did the research mentioned above, it would be a total waste of money because if those people don't believe in the testimonials, they won't believe in the research at all. They would say that I made it all up.
                      </p>
                    </div> 
                    <div className="testimonial-detail clearfix">
                      <div className="testimonial-pic-block"> 
                        <div className="testimonial-pic">
                          <img src={`${process.env.NODE_ENV === "production" ? "/Fahud" : ""}/images/testimonials/pic1.jpg`} alt="" />
                        </div>
                      </div>                                          
                      <div className="testimonial-info">
                        <span className="testimonial-name">Cearra Laurena</span>
                        <span className="testimonial-position">Ceo, Google inc</span>
                        <div className="testimonial-rating">
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                        </div>
                      </div>
                    </div>                                            
                  </div>
                </div>
              </div>

              {/* block 2 */}    
              <div className="item">
                <div className="testimonial-1">
                  <div className="testimonial-content">
                    <div className="testimonial-text">
                      <i className="bi bi-chat-right-quote-fill"></i>
                      <p>
                        I would like to highly recommend MLA to anyone looking for a professional service from a down to earth team. I have worked on projects designed by Mark, and Stephen for many years and have always been impressed how they really look after their clients behind the scenes.
                      </p>
                    </div> 
                    <div className="testimonial-detail clearfix">
                      <div className="testimonial-pic-block"> 
                        <div className="testimonial-pic">
                          <img src={`${process.env.NODE_ENV === "production" ? "/Fahud" : ""}/images/testimonials/pic2.jpg`} alt="" />
                        </div>
                      </div>                                          
                      <div className="testimonial-info">
                        <span className="testimonial-name">Ashley Sanchez</span>
                        <span className="testimonial-position">Ceo, Founder</span>
                        <div className="testimonial-rating">
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                        </div>
                      </div>
                    </div>                                            
                  </div>
                </div>
              </div>
              
              {/* block 3 */}    
              <div className="item">
                <div className="testimonial-1">
                  <div className="testimonial-content">
                    <div className="testimonial-text">
                      <i className="bi bi-chat-right-quote-fill"></i>
                      <p>
                        Reading all the glowing reviews from happy clients is pleasing, but what they don’t know is how dedicated and hard working the team at MLA are behind the scenes. Keep up the great work guys. I'm going to be wearing the Stryker hat because I'm a walking testimonial to the fact.
                      </p>
                    </div> 
                    <div className="testimonial-detail clearfix">
                      <div className="testimonial-pic-block"> 
                        <div className="testimonial-pic">
                          <img src={`${process.env.NODE_ENV === "production" ? "/Fahud" : ""}/images/testimonials/pic3.jpg`} alt="" />
                        </div>
                      </div>                                          
                      <div className="testimonial-info">
                        <span className="testimonial-name">Shirley Gibson</span>
                        <span className="testimonial-position">Ceo, Google inc</span>
                        <div className="testimonial-rating">
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                        </div>
                      </div>
                    </div>                                            

                  </div>
                </div>
              </div>
              
              {/* block 4 */}    
              <div className="item">
                <div className="testimonial-1">
                  <div className="testimonial-content">
                    <div className="testimonial-text">
                      <i className="bi bi-chat-right-quote-fill"></i>
                      <p>
                        Belinda and I are so pleased we chose Mark Lawler Architects to design our custom build in Speers Point. Stephen and his team were professional and clear in their communication in all aspects of their service from design to documentation through to tender process.
                      </p>
                    </div> 

                    <div className="testimonial-detail clearfix">
                      <div className="testimonial-pic-block"> 
                        <div className="testimonial-pic">
                          <img src={`${process.env.NODE_ENV === "production" ? "/Fahud" : ""}/images/testimonials/pic4.jpg`} alt="" />
                        </div>
                      </div>                                          
                      <div className="testimonial-info">
                        <span className="testimonial-name">Mike Hardson</span>
                        <span className="testimonial-position">Ceo, Founder</span>
                        <div className="testimonial-rating">
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                        </div>
                      </div>
                    </div>                                            

                  </div>
                </div>
              </div>

              {/* block 5 */}    
              <div className="item">
                <div className="testimonial-1">
                  <div className="testimonial-content">
                    <div className="testimonial-text">
                      <i className="bi bi-chat-right-quote-fill"></i>
                      <p>
                        We love it and were continually impressed by your professionalism, attention to detail, care and the support you provided us during this project.  You made the process so easy for us and we are very grateful. We would highly recommend your work to anyone.
                      </p>
                    </div> 
                    <div className="testimonial-detail clearfix">
                      <div className="testimonial-pic-block"> 
                        <div className="testimonial-pic">
                          <img src={`${process.env.NODE_ENV === "production" ? "/Fahud" : ""}/images/testimonials/pic5.jpg`} alt="" />
                        </div>
                      </div>                                          
                      <div className="testimonial-info">
                        <span className="testimonial-name">Edword Howells</span>
                        <span className="testimonial-position">Ceo, Google inc</span>
                        <div className="testimonial-rating">
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
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
    </div>
  );
}
