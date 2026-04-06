import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InnerBanner from '@/components/InnerBanner';

export default function Contact() {
    return (
        <>
            <div className="page-wraper">
                <Header />

                <div className="page-content">
                    <InnerBanner title="Contact" />




                    {/*  CONTACT FORM  */}
                    <div className="section-full p-t120 p-b120">
                        <div className="section-content">
                            <div className="container">
                                <div className="contact-one">
                                    <div className="c-info-column-media parallax-section">
                                        <img className="parallax-image" src="images/video-h.jpg" alt="#" />
                                    </div>

                                    <div className="row">
                                        {/*  CONTACT INFO  */}
                                        <div className="col-xl-6 col-lg-6 col-md-12 ">
                                            <div className="c-info-column-wrap">
                                                {/*  TITLE START */}
                                                <div className="section-head left wt-small-separator-outer">
                                                    <div className="wt-small-separator site-text-primary">
                                                        <i className="bi bi-house"></i>
                                                        <div>Contact Info</div>
                                                    </div>
                                                    <h2 className="wt-title title_split_anim">We are always ready to help you.</h2>
                                                </div>
                                                {/*  TITLE END */}

                                                <div className="c-info-column">
                                                    <div className="c-info-icon"><i className="bi bi-geo-alt"></i></div>
                                                    <div className="c-info-detail">
                                                        <span className="m-t0">Address info</span>
                                                        <p>1363-1385 Sunset Blvd Los Angeles, CA 90026, USA</p>
                                                    </div>
                                                </div>

                                                <div className="c-info-column">
                                                    <div className="c-info-icon">
                                                        <i className="bi bi-telephone"></i>
                                                    </div>
                                                    <div className="c-info-detail">
                                                        <span className="m-t0">Phone number</span>
                                                        <p><a href="tel:+216-761-8331">+216-761-8331</a></p>
                                                    </div>
                                                </div>

                                                <div className="c-info-column">
                                                    <div className="c-info-icon"><i className="bi bi-envelope"></i></div>
                                                    <div className="c-info-detail">
                                                        <span className="m-t0">Email address</span>
                                                        <p>hvilinfo@gmail.com</p>
                                                    </div>
                                                </div>

                                                <div className="c-info-column">
                                                    <div className="c-info-icon"><i className="bi bi-door-open"></i></div>
                                                    <div className="c-info-detail">
                                                        <span className="m-t0">Open Hour</span>
                                                        <p>Mon - Sat ( 09.00 AM to 06.00 PM )</p>
                                                    </div>
                                                </div>

                                                <div className="social-icons-contact">
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
                                        </div>
                                        {/*  GET IN TOUCH! */}
                                        <div className="col-xl-6 col-lg-6 col-md-12">
                                            <div className="contact-info-section">

                                                <div className="contact-form-outer">
                                                    <h3 className="wt-title">Get in touch !</h3>
                                                    <p>Fahud is a very modern and creative template that has been carefully crafted to suit any interior design website.
                                                    </p>
                                                    <form className="cons-contact-form" method="post" action="form-handler2.php">
                                                        <div className="row">

                                                            <div className="col-lg-12 col-md-12">
                                                                <div className="form-group">
                                                                    <input name="username" type="text" required className="form-control" placeholder="Name" />
                                                                </div>
                                                            </div>

                                                            <div className="col-lg-6 col-md-12">
                                                                <div className="form-group">
                                                                    <input name="email" type="text" className="form-control" required placeholder="Email" />
                                                                </div>
                                                            </div>

                                                            <div className="col-lg-6 col-md-12">
                                                                <div className="form-group">
                                                                    <input name="phone" type="text" className="form-control" required placeholder="Phone" />
                                                                </div>
                                                            </div>

                                                            <div className="col-lg-12 col-md-12">
                                                                <div className="form-group">
                                                                    <input name="subject" type="text" className="form-control" required placeholder="Subject" />
                                                                </div>
                                                            </div>

                                                            <div className="col-lg-12">
                                                                <div className="form-group">
                                                                    <textarea name="message" className="form-control" rows="4" placeholder="Message"></textarea>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-12">
                                                                <button type="submit" className="site-button ">Submit Now</button>
                                                            </div>

                                                        </div>
                                                    </form>
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*  GOOGLE MAP  */}
                    <div className="section-full g-map-wrap">
                        <div className="gmap-outline">
                            <div className="google-map">
                                <div style={{ "width": "100%" }}>
                                    <iframe height="460" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.272796714594!2d-87.64937353634511!3d41.90849403896016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd324fc400797%3A0x76a989827d7eb84e!2s853%20W%20Blackhawk%20St%2C%20Chicago%2C%20IL%2060642%2C%20USA!5e0!3m2!1sen!2sin!4v1745326667544!5m2!1sen!2sin"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>

                <Footer />
            </div>
        </>
    );
}