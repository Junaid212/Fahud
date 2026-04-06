import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InnerBanner from '@/components/InnerBanner';

export default function Error404() {
  return (
    <>
      <div className="page-wraper">
        <Header />
        
        <div className="page-content">
          <InnerBanner title="Error 404" />
          

            

            {/*  Error SECTION START  */}
            <div className="section-full page-notfound-outer p-t120 p-b90">
                <div className="container">
					<div className="section-content page-notfound-inner">
                        <div className="page-notfound">
                            <div className="page-notfound-media">
                                <img src="images/error-bg.png" alt="" />
                            </div>
                            <div className="page-notfound-content">
                                <h1 className="error-title">404</h1>
                                <div className="page-notfound-info">
                                    <h2 className="error-comment">Oops! Page Not Found</h2>
                                    <p>The page you are looking for does not exist. It might have been moved or deleted.</p>
                                    <a href="index.html" className="site-button ">Back to Home</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
            {/*  Error  SECTION END  */}  
             
            {/*  FOOTER START  */}
            
        </div>
        
        <Footer />
      </div>
    </>
  );
}