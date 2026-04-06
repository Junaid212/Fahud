import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky-header site-header header-style-2 mobile-sider-drawer-menu">
      <div className="main-bar-wraper navbar-expand-lg">
        <div className="main-bar">
          <div className="container-fluid clearfix">

            {/* LOGO */}
            <div className="logo-header">
              <div className="logo-header-inner logo-header-one">
                <Link href="/">
                  <Image src="/images/fd.png" alt="FAHUD Safety & Technical Trading" width={180} height={74} priority />
                </Link>
              </div>
            </div>

            {/* MOBILE TOGGLE */}
            <button
              id="mobile-side-drawer"
              data-target=".header-nav"
              data-toggle="collapse"
              type="button"
              className="navbar-toggler collapsed d-lg-none"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar icon-bar-first"></span>
              <span className="icon-bar icon-bar-two"></span>
              <span className="icon-bar icon-bar-three"></span>
            </button>

            {/* NAVIGATION */}
            <div className="nav-animation header-nav navbar-collapse d-flex justify-content-end">
              <ul className="nav navbar-nav">

                <li className="has-child">
                  <Link href="/">Home</Link>
                </li>

                <li className="has-child">
                  <Link href="/about-1">About Us</Link>
                </li>

                <li className="has-child">
                  {/* <Link href="/services">Services</Link> */}
                  <Link href="#">Services</Link>
                  {/* <ul className="sub-menu">
                    <li><Link href="/services">All Services</Link></li>
                    <li><Link href="/service-detail">Service Detail</Link></li>
                  </ul> */}
                </li>

                <li className="has-child">
                  {/* <Link href="/project-1">Products</Link> */}
                  <Link href="#">Products</Link>
                  {/* <ul className="sub-menu">
                    <li><Link href="/project-1">Products Grid</Link></li>
                    <li><Link href="/project-2">Products List</Link></li>
                    <li><Link href="/project-single">Product Detail</Link></li>
                  </ul> */}
                </li>

                <li>
                  <Link href="#">Contact</Link>
                </li>

              </ul>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
}
