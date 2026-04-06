export default function VideoSection() {
  return (
    <div className="section-full video-section-outer-wrap">
      <div className="parallax-section">
        <div className="parallax-content">
          <div className="container">
            <div className="video-section-outer">
              <div className="video-section">
                <a
                  href="https://player.vimeo.com/video/845982181?color=ffffff&title=0&byline=0&portrait=0"
                  className="mfp-video play-now-video"
                >
                  <i className="icon fa fa-play"></i>
                  <span className="ripple"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="get-intouch-style-2 overlay-wraper p-t120 p-b120 parallax-image"
          style={{ backgroundImage: 'url(/images/background/getintouch.jpg)' }}
        ></div>
      </div>
    </div>
  );
}
