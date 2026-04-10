import Link from 'next/link';

export default function InnerBanner({ title, pathName, bgImage = './images/background/banner-bg.webp' }) {
  return (
    <div className="wt-bnr-inr overlay-wraper bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="overlay-main innr-bnr-olay"></div>
      <div className="wt-bnr-inr-entry">
        <div className="banner-title-outer">
          <div className="banner-title-name">
            <h2 className="wt-title">{title}</h2>
          </div>
          {/* BREADCRUMB ROW */}                            
          <div>
            <ul className="wt-breadcrumb breadcrumb-style-2">
              <li><Link href="/">Home</Link></li>
              <li>{pathName || title}</li>
            </ul>
          </div>
        </div>
        {/* BREADCRUMB ROW END */}                        
      </div>
    </div>
  );
}
