"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  return (
    <>
      <header className={`sticky-header site-header header-style-2 mobile-sider-drawer-menu ${isMenuOpen ? 'active' : ''}`}>
        <div className="main-bar-wraper navbar-expand-lg">
          <div className="main-bar">
            <div className="container-fluid clearfix">

              {/* LOGO */}
              <div className="logo-header">
                <div className="logo-header-inner logo-header-one">
                  <Link href="/" onClick={closeMenu}>
                    <Image src="./images/fd.png" alt="FAHUD Safety & Technical Trading" width={180} height={90} priority />
                  </Link>
                </div>
              </div>

              {/* MOBILE TOGGLE */}
              <button
                id="mobile-side-drawer"
                type="button"
                className={`navbar-toggler d-lg-none ${isMenuOpen ? '' : 'collapsed'}`}
                onClick={toggleMenu}
                aria-label="Toggle navigation"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar icon-bar-first"></span>
                <span className="icon-bar icon-bar-two"></span>
                <span className="icon-bar icon-bar-three"></span>
              </button>

              {/* NAVIGATION — note: no navbar-collapse so Bootstrap doesn't hide it */}
              <div className="nav-animation header-nav justify-content-end">
                <ul className="nav navbar-nav">

                  <li>
                    <Link href="/" onClick={closeMenu}>Home</Link>
                  </li>

                  <li >
                    <Link href="/about-1" onClick={closeMenu}>About Us</Link>
                  </li>

                  <li >
                    <Link href="/services" onClick={closeMenu}>Services</Link>
                  </li>

                  <li >
                    <Link href="/project-2" onClick={closeMenu}>Products</Link>
                  </li>

                  <li>
                    <Link href="/contact" onClick={closeMenu}>Contact</Link>
                  </li>

                </ul>
              </div>

            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          onClick={closeMenu}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.5)',
            zIndex: 998,
          }}
          aria-hidden="true"
        />
      )}
    </>
  );
}

