import Link from 'next/link';

export default function GetInTouchSection() {
  return (
    <div className="section-full get-intouch-style-2-wrap parallax-section">
      <video muted loop autoPlay playsInline>
        <source src={`${process.env.NODE_ENV === "production" ? "/Fahud" : ""}/images/video-1.mp4`} type="video/mp4" />
      </video>
      <div className="get-intouch-style-2-inner site-text-white">
        <span>We Achieve</span>                                
        <h2 className="wt-title site-text-white title_split_anim">Design Award 2025 Now Open For Entries</h2>
        <div className="site-center-btn text-center">
          <Link href="/about-2" className="site-button">Read More</Link>
        </div>
      </div>
    </div>
  );
}
