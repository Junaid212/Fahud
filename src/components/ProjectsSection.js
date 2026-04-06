'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';

export default function ProjectsSection() {
  useEffect(() => {
    let checkInterval = setInterval(() => {
      if (typeof window !== 'undefined' && window.initProjectsFilterSlider && window.jQuery && window.Swiper) {
        clearInterval(checkInterval);
        window.initProjectsFilterSlider();
      }
    }, 100);
    return () => clearInterval(checkInterval);
  }, []);

  return (
    <>
      {/* LATEST PROJECTS SLIDER START */}
      <div className="section-full p-t120 p-b90 pro-filtr-cate-wrap">
        {/* CATEGORY SECTION */}
      <div className="section-full twm-category-carousal-area">
        <div className="owl-carousel twm-category-carousal-slider2">
          {/* COLUMN 1 */}
          <div className="item">
            <div className="twm_category_bx cursor-scale wow fadeInDown" data-wow-duration="1000ms">
              <span className="ao-our-categori-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 64 64" version="1.1"><path id="SvgjsPath1088" d="M4 15.51a1 1 0 0 0 .71-.29L15.22 4.71a1 1 0 1 0-1.42-1.42L3.29 13.8a1 1 0 0 0 0 1.42 1 1 0 0 0 .71.29zm0 11.38a1 1 0 0 0 .71-.29L26.6 4.71a1 1 0 1 0-1.42-1.42L3.29 25.18a1 1 0 0 0 0 1.42 1 1 0 0 0 .71.29zm0 11.36a1 1 0 0 0 .71-.25L38 4.71a1 1 0 1 0-1.42-1.42L3.29 36.54a1 1 0 0 0 0 1.42 1 1 0 0 0 .71.29zm0 11.38a1 1 0 0 0 .71-.29L49.34 4.71a1 1 0 1 0-1.42-1.42L3.29 47.92a1 1 0 0 0 0 1.42 1 1 0 0 0 .71.29zM60.71 3.29a1 1 0 0 0-1.42 0l-56 56a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l56-56a1 1 0 0 0 0-1.42zm-1.42 11.37L14.66 59.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l44.63-44.63a1 1 0 0 0-1.42-1.42zm0 11.34L26 59.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l33.29-33.25A1 1 0 0 0 59.29 26zm0 11.4L37.4 59.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l21.89-21.89a1 1 0 0 0-1.42-1.42zm0 11.38L48.78 59.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L60.71 50.2a1 1 0 0 0-1.42-1.42z" data-name="Layer 9" fill="rgba(221, 221, 221, 1)"></path></svg>
              </span>
              <div className="twm-category-name">Fahud</div>
            </div>
          </div>
          {/* COLUMN 2 */}
          <div className="item">
            <div className="twm_category_bx cursor-scale wow fadeInDown" data-wow-duration="1000ms">
              <span className="ao-our-categori-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 64 64" version="1.1"><path id="SvgjsPath1088-1" d="M4 15.51a1 1 0 0 0 .71-.29L15.22 4.71a1 1 0 1 0-1.42-1.42L3.29 13.8a1 1 0 0 0 0 1.42 1 1 0 0 0 .71.29zm0 11.38a1 1 0 0 0 .71-.29L26.6 4.71a1 1 0 1 0-1.42-1.42L3.29 25.18a1 1 0 0 0 0 1.42 1 1 0 0 0 .71.29zm0 11.36a1 1 0 0 0 .71-.25L38 4.71a1 1 0 1 0-1.42-1.42L3.29 36.54a1 1 0 0 0 0 1.42 1 1 0 0 0 .71.29zm0 11.38a1 1 0 0 0 .71-.29L49.34 4.71a1 1 0 1 0-1.42-1.42L3.29 47.92a1 1 0 0 0 0 1.42 1 1 0 0 0 .71.29zM60.71 3.29a1 1 0 0 0-1.42 0l-56 56a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l56-56a1 1 0 0 0 0-1.42zm-1.42 11.37L14.66 59.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l44.63-44.63a1 1 0 0 0-1.42-1.42zm0 11.34L26 59.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l33.29-33.25A1 1 0 0 0 59.29 26zm0 11.4L37.4 59.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l21.89-21.89a1 1 0 0 0-1.42-1.42zm0 11.38L48.78 59.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L60.71 50.2a1 1 0 0 0-1.42-1.42z" data-name="Layer 9" fill="rgba(221, 221, 221, 1)"></path></svg>
              </span>
              <div className="twm-category-name">Safety</div>
            </div>
          </div>
          {/* COLUMN 3 */}
          <div className="item">
            <div className="twm_category_bx cursor-scale wow fadeInDown" data-wow-duration="1000ms">
              <span className="ao-our-categori-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 64 64" version="1.1"><path id="SvgjsPath1088-2" d="M4 15.51a1 1 0 0 0 .71-.29L15.22 4.71a1 1 0 1 0-1.42-1.42L3.29 13.8a1 1 0 0 0 0 1.42 1 1 0 0 0 .71.29zm0 11.38a1 1 0 0 0 .71-.29L26.6 4.71a1 1 0 1 0-1.42-1.42L3.29 25.18a1 1 0 0 0 0 1.42 1 1 0 0 0 .71.29zm0 11.36a1 1 0 0 0 .71-.25L38 4.71a1 1 0 1 0-1.42-1.42L3.29 36.54a1 1 0 0 0 0 1.42 1 1 0 0 0 .71.29zm0 11.38a1 1 0 0 0 .71-.29L49.34 4.71a1 1 0 1 0-1.42-1.42L3.29 47.92a1 1 0 0 0 0 1.42 1 1 0 0 0 .71.29zM60.71 3.29a1 1 0 0 0-1.42 0l-56 56a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l56-56a1 1 0 0 0 0-1.42zm-1.42 11.37L14.66 59.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l44.63-44.63a1 1 0 0 0-1.42-1.42zm0 11.34L26 59.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l33.29-33.25A1 1 0 0 0 59.29 26zm0 11.4L37.4 59.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l21.89-21.89a1 1 0 0 0-1.42-1.42zm0 11.38L48.78 59.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L60.71 50.2a1 1 0 0 0-1.42-1.42z" data-name="Layer 9" fill="rgba(221, 221, 221, 1)"></path></svg>
              </span>
              <div className="twm-category-name">Products</div>
            </div>
          </div>
          {/* COLUMN 4 */}
          <div className="item">
            <div className="twm_category_bx cursor-scale wow fadeInDown" data-wow-duration="1000ms">
              <span className="ao-our-categori-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 64 64" version="1.1"><path id="SvgjsPath1088-3" d="M4 15.51a1 1 0 0 0 .71-.29L15.22 4.71a1 1 0 1 0-1.42-1.42L3.29 13.8a1 1 0 0 0 0 1.42 1 1 0 0 0 .71.29zm0 11.38a1 1 0 0 0 .71-.29L26.6 4.71a1 1 0 1 0-1.42-1.42L3.29 25.18a1 1 0 0 0 0 1.42 1 1 0 0 0 .71.29zm0 11.36a1 1 0 0 0 .71-.25L38 4.71a1 1 0 1 0-1.42-1.42L3.29 36.54a1 1 0 0 0 0 1.42 1 1 0 0 0 .71.29zm0 11.38a1 1 0 0 0 .71-.29L49.34 4.71a1 1 0 1 0-1.42-1.42L3.29 47.92a1 1 0 0 0 0 1.42 1 1 0 0 0 .71.29zM60.71 3.29a1 1 0 0 0-1.42 0l-56 56a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l56-56a1 1 0 0 0 0-1.42zm-1.42 11.37L14.66 59.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l44.63-44.63a1 1 0 0 0-1.42-1.42zm0 11.34L26 59.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l33.29-33.25A1 1 0 0 0 59.29 26zm0 11.4L37.4 59.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l21.89-21.89a1 1 0 0 0-1.42-1.42zm0 11.38L48.78 59.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L60.71 50.2a1 1 0 0 0-1.42-1.42z" data-name="Layer 9" fill="rgba(221, 221, 221, 1)"></path></svg>
              </span>
              <div className="twm-category-name">And</div>
            </div>
          </div>
          {/* COLUMN 5 */}
          <div className="item">
            <div className="twm_category_bx cursor-scale wow fadeInDown" data-wow-duration="1000ms">
              <span className="ao-our-categori-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 64 64" version="1.1"><path id="SvgjsPath1088-4" d="M4 15.51a1 1 0 0 0 .71-.29L15.22 4.71a1 1 0 1 0-1.42-1.42L3.29 13.8a1 1 0 0 0 0 1.42 1 1 0 0 0 .71.29zm0 11.38a1 1 0 0 0 .71-.29L26.6 4.71a1 1 0 1 0-1.42-1.42L3.29 25.18a1 1 0 0 0 0 1.42 1 1 0 0 0 .71.29zm0 11.36a1 1 0 0 0 .71-.25L38 4.71a1 1 0 1 0-1.42-1.42L3.29 36.54a1 1 0 0 0 0 1.42 1 1 0 0 0 .71.29zm0 11.38a1 1 0 0 0 .71-.29L49.34 4.71a1 1 0 1 0-1.42-1.42L3.29 47.92a1 1 0 0 0 0 1.42 1 1 0 0 0 .71.29zM60.71 3.29a1 1 0 0 0-1.42 0l-56 56a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l56-56a1 1 0 0 0 0-1.42zm-1.42 11.37L14.66 59.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l44.63-44.63a1 1 0 0 0-1.42-1.42zm0 11.34L26 59.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l33.29-33.25A1 1 0 0 0 59.29 26zm0 11.4L37.4 59.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l21.89-21.89a1 1 0 0 0-1.42-1.42zm0 11.38L48.78 59.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L60.71 50.2a1 1 0 0 0-1.42-1.42z" data-name="Layer 9" fill="rgba(221, 221, 221, 1)"></path></svg>
              </span>
              <div className="twm-category-name">Safety</div>
            </div>
          </div>
          {/* COLUMN 6 */}
          <div className="item">
            <div className="twm_category_bx cursor-scale wow fadeInDown" data-wow-duration="1000ms">
              <span className="ao-our-categori-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 64 64" version="1.1"><path id="SvgjsPath1088-5" d="M4 15.51a1 1 0 0 0 .71-.29L15.22 4.71a1 1 0 1 0-1.42-1.42L3.29 13.8a1 1 0 0 0 0 1.42 1 1 0 0 0 .71.29zm0 11.38a1 1 0 0 0 .71-.29L26.6 4.71a1 1 0 1 0-1.42-1.42L3.29 25.18a1 1 0 0 0 0 1.42 1 1 0 0 0 .71.29zm0 11.36a1 1 0 0 0 .71-.25L38 4.71a1 1 0 1 0-1.42-1.42L3.29 36.54a1 1 0 0 0 0 1.42 1 1 0 0 0 .71.29zm0 11.38a1 1 0 0 0 .71-.29L49.34 4.71a1 1 0 1 0-1.42-1.42L3.29 47.92a1 1 0 0 0 0 1.42 1 1 0 0 0 .71.29zM60.71 3.29a1 1 0 0 0-1.42 0l-56 56a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l56-56a1 1 0 0 0 0-1.42zm-1.42 11.37L14.66 59.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l44.63-44.63a1 1 0 0 0-1.42-1.42zm0 11.34L26 59.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l33.29-33.25A1 1 0 0 0 59.29 26zm0 11.4L37.4 59.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l21.89-21.89a1 1 0 0 0-1.42-1.42zm0 11.38L48.78 59.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L60.71 50.2a1 1 0 0 0-1.42-1.42z" data-name="Layer 9" fill="rgba(221, 221, 221, 1)"></path></svg>
              </span>
              <div className="twm-category-name">Equipments</div>
            </div>
          </div>
        </div>
        
        <div className="twm-category-carousal-mid-media">
          <img src={`${process.env.NODE_ENV === "production" ? "/Fahud" : ""}/images/helmet.png`} alt="#" className="vert-move" />
        </div>
        
        <div className="owl-carousel twm-category-carousal-slider">
          {/* COLUMN 1 */}
          <div className="item">
            <div className="twm_category_bx cursor-scale wow fadeInDown" data-wow-duration="1000ms">
              <span className="ao-our-categori-icon">
                <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
                  <circle className="spin2" cx="400" cy="400" fill="none" r="200" strokeWidth="50" stroke="#E387FF" strokeDasharray="700 1400" strokeLinecap="round" />
                </svg>
              </span>
              <div className="twm-category-name">Fahud</div>
            </div>
          </div>
          {/* COLUMN 2 */}
          <div className="item">
            <div className="twm_category_bx cursor-scale wow fadeInDown" data-wow-duration="1000ms">
              <span className="ao-our-categori-icon">
                <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
                  <circle className="spin2" cx="400" cy="400" fill="none" r="200" strokeWidth="50" stroke="#E387FF" strokeDasharray="700 1400" strokeLinecap="round" />
                </svg>
              </span>
              <div className="twm-category-name">Safety</div>
            </div>
          </div>
          {/* COLUMN 3 */}
          <div className="item">
            <div className="twm_category_bx cursor-scale wow fadeInDown" data-wow-duration="1000ms">
              <span className="ao-our-categori-icon">
                <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
                  <circle className="spin2" cx="400" cy="400" fill="none" r="200" strokeWidth="50" stroke="#E387FF" strokeDasharray="700 1400" strokeLinecap="round" />
                </svg>
              </span>
              <div className="twm-category-name">Products</div>
            </div>
          </div>
          {/* COLUMN 4 */}
          <div className="item">
            <div className="twm_category_bx cursor-scale wow fadeInDown" data-wow-duration="1000ms">
              <span className="ao-our-categori-icon">
                <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
                  <circle className="spin2" cx="400" cy="400" fill="none" r="200" strokeWidth="50" stroke="#E387FF" strokeDasharray="700 1400" strokeLinecap="round" />
                </svg>
              </span>
              <div className="twm-category-name">and</div>
            </div>
          </div>
          {/* COLUMN 5 */}
          <div className="item">
            <div className="twm_category_bx cursor-scale wow fadeInDown" data-wow-duration="1000ms">
              <span className="ao-our-categori-icon">
                <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
                  <circle className="spin2" cx="400" cy="400" fill="none" r="200" strokeWidth="50" stroke="#E387FF" strokeDasharray="700 1400" strokeLinecap="round" />
                </svg>
              </span>
              <div className="twm-category-name">Safety</div>
            </div>
          </div>
          {/* COLUMN 6 */}
          <div className="item">
            <div className="twm_category_bx cursor-scale wow fadeInDown" data-wow-duration="1000ms">
              <span className="ao-our-categori-icon">
                <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
                  <circle className="spin2" cx="400" cy="400" fill="none" r="200" strokeWidth="50" stroke="#E387FF" strokeDasharray="700 1400" strokeLinecap="round" />
                </svg>
              </span>
              <div className="twm-category-name">Equipments</div>
            </div>
          </div>
        </div>
      </div>
      {/* CATEGORY END */}
        <div className="container">
          {/* TITLE START */}
          <div className="section-head center wt-small-separator-outer">
            <div className="wt-small-separator site-text-primary">
              <i className="bi bi-house"></i>
              <div>Products</div>
            </div>
            <h2 className="wt-title title_split_anim">Our Products</h2>
          </div>
          {/* TITLE END */}
        </div>
        
        {/* IMAGE CAROUSEL START */}
        <div className="pro-filtr-cate-carousal-wrap">
          <div className="project-filter-wrap pro-filtr-cate-carousal text-center">
            {/* <span data-filter="all">All</span>
            <span data-filter="filter1">Residetial</span>
            <span data-filter="filter2">Commercial</span>
            <span data-filter="filter3">Industrial</span>
            <span data-filter="filter4">Architecture</span> */}
          </div>
          <div className="swiper-container pro-filtr-cate-bx" style={{ opacity: 0, transition: 'opacity 0.3s ease-in-out' }}>
            <div className="swiper-wrapper">
              
              {/* COLUMNS 1 */}
              <div className="swiper-slide" data-filter="filter1">
                <div className="effect-hvr3">
                  <div className="effect-sarah">
                    <img src={`${process.env.NODE_ENV === "production" ? "/Fahud" : ""}/images/project-3/4.png`} alt="img20" />
                    {/* <a className="elem pic-long project-view-btn" href="/images/project-3/4.png" title="Commercial Building" data-lcl-txt="" data-lcl-author="" data-lcl-thumb="/images/project-3/m1.jpg">
                      <i className="fa fa-search-plus"></i>
                    </a> */}
                  </div>
                  <div className="effect-hvr3-inner">
                    <h3 className="wt-title"><Link href="/project-single">Fasteners</Link></h3>
                    {/* <span className="project-new-category">Appartment</span> */}
                    <Link href="/project-single" className="site-button-icon site-text-primary"><i className="flaticon-right"></i></Link>
                  </div>
                </div>
              </div>

              {/* COLUMNS 2 */}
              <div className="swiper-slide" data-filter="filter2">
                <div className="effect-hvr3">
                  <div className="effect-sarah">
                    <img src={`${process.env.NODE_ENV === "production" ? "/Fahud" : ""}/images/project-3/5.png`} alt="img20" />
                    {/* <a className="elem pic-long project-view-btn" href="/images/project-3/5.png" title="Mountain Hotel" data-lcl-txt="" data-lcl-author="" data-lcl-thumb="/images/project-3/m2.jpg">
                      <i className="fa fa-search-plus"></i>
                    </a> */}
                  </div>
                  <div className="effect-hvr3-inner">
                    <h3 className="wt-title"><Link href="/project-single">Fabrications</Link></h3>
                    {/* <span className="project-new-category">Building</span> */}
                    <Link href="/project-single" className="site-button-icon site-text-primary"><i className="flaticon-right"></i></Link>
                  </div>
                </div>
              </div>

              {/* COLUMNS 3 */}
              <div className="swiper-slide" data-filter="filter1">
                <div className="effect-hvr3">
                  <div className="effect-sarah">
                    <img src={`${process.env.NODE_ENV === "production" ? "/Fahud" : ""}/images/project-3/6.png`} alt="img20" />
                    {/* <a className="elem pic-long project-view-btn" href="/images/project-3/6.png" title="New York Housing Project" data-lcl-txt="" data-lcl-author="" data-lcl-thumb="/images/project-3/m3.jpg">
                      <i className="fa fa-search-plus"></i>
                    </a> */}
                  </div>
                  <div className="effect-hvr3-inner">
                    <h3 className="wt-title"><Link href="/project-single">Welding Consumables</Link></h3>
                    {/* <span className="project-new-category">Apartment</span> */}
                    <Link href="/project-single" className="site-button-icon site-text-primary"><i className="flaticon-right"></i></Link>
                  </div>
                </div>
              </div>

              {/* COLUMNS 4 */}
              <div className="swiper-slide" data-filter="filter2">
                <div className="effect-hvr3">
                  <div className="effect-sarah">
                    <img src={`${process.env.NODE_ENV === "production" ? "/Fahud" : ""}/images/project-3/7.png`} alt="img20" />
                    {/* <a className="elem pic-long project-view-btn" href="/images/project-3/7.png" title="House Extensions" data-lcl-txt="" data-lcl-author="" data-lcl-thumb="/images/project-3/m4.jpg">
                      <i className="fa fa-search-plus"></i>
                    </a> */}
                  </div>
                  <div className="effect-hvr3-inner">
                    <h3 className="wt-title"><Link href="/project-single">Safety PPE's</Link></h3>
                    {/* <span className="project-new-category">Building Constrction</span> */}
                    <Link href="/project-single" className="site-button-icon site-text-primary"><i className="flaticon-right"></i></Link>
                  </div>
                </div>
              </div>

              {/* COLUMNS 5 */}
              <div className="swiper-slide" data-filter="filter3">
                <div className="effect-hvr3">
                  <div className="effect-sarah">
                    <img src={`${process.env.NODE_ENV === "production" ? "/Fahud" : ""}/images/project-3/8.png`} alt="img20" />
                    {/* <a className="elem pic-long project-view-btn" href="/images/project-3/8.png" title="Renovation" data-lcl-txt="" data-lcl-author="" data-lcl-thumb="/images/project-3/m5.jpg">
                      <i className="fa fa-search-plus"></i>
                    </a> */}
                  </div>
                  <div className="effect-hvr3-inner">
                    <h3 className="wt-title"><Link href="/project-single">Lifting Solutions</Link></h3>
                    {/* <span className="project-new-category">Renovation , Architecture</span> */}
                    <Link href="/project-single" className="site-button-icon site-text-primary"><i className="flaticon-right"></i></Link>
                  </div>
                </div>
              </div>

              {/* COLUMNS 6 */}
              <div className="swiper-slide" data-filter="filter4">
                <div className="effect-hvr3">
                  <div className="effect-sarah">
                    <img src={`${process.env.NODE_ENV === "production" ? "/Fahud" : ""}/images/project-3/9.png`} alt="img20" />
                    {/* <a className="elem pic-long project-view-btn" href="/images/project-3/9.png" title="Roome Interior" data-lcl-txt="" data-lcl-author="" data-lcl-thumb="/images/project-3/m6.jpg">
                      <i className="fa fa-search-plus"></i>
                    </a> */}
                  </div>
                  <div className="effect-hvr3-inner">
                    <h3 className="wt-title"><Link href="/project-single">Safety Solutions</Link></h3>
                    {/* <span className="project-new-category">Interior</span> */}
                    <Link href="/project-single" className="site-button-icon site-text-primary"><i className="flaticon-right"></i></Link>
                  </div>
                </div>
              </div>

              {/* COLUMNS 7 */}
              {/* <div className="swiper-slide" data-filter="filter1">
                <div className="effect-hvr3">
                  <div className="effect-sarah">
                    <img src={`${process.env.NODE_ENV === "production" ? "/Fahud" : ""}/images/project-3/m7.jpg`} alt="img20" />
                    <a className="elem pic-long project-view-btn" href="/images/project-3/m7.jpg" title="Commercial Building" data-lcl-txt="" data-lcl-author="" data-lcl-thumb="/images/project-3/m7.jpg">
                      <i className="fa fa-search-plus"></i>
                    </a>
                  </div>
                  <div className="effect-hvr3-inner">
                    <h3 className="wt-title"><Link href="/project-single">Commercial Building</Link></h3>
                    <span className="project-new-category">Appartment</span>
                    <Link href="/project-single" className="site-button-icon site-text-primary"><i className="flaticon-right"></i></Link>
                  </div>
                </div>
              </div> */}

              {/* COLUMNS 8 */}
              {/* <div className="swiper-slide" data-filter="filter2">
                <div className="effect-hvr3">
                  <div className="effect-sarah">
                    <img src={`${process.env.NODE_ENV === "production" ? "/Fahud" : ""}/images/project-3/m8.jpg`} alt="img20" />
                    <a className="elem pic-long project-view-btn" href="/images/project-3/m8.jpg" title="Mountain Hotel" data-lcl-txt="" data-lcl-author="" data-lcl-thumb="/images/project-3/m8.jpg">
                      <i className="fa fa-search-plus"></i>
                    </a>
                  </div>
                  <div className="effect-hvr3-inner">
                    <h3 className="wt-title"><Link href="/project-single">Mountain Hotel</Link></h3>
                    <span className="project-new-category">Building</span>
                    <Link href="/project-single" className="site-button-icon site-text-primary"><i className="flaticon-right"></i></Link>
                  </div>
                </div>
              </div> */}

              {/* COLUMNS 9 */}
              {/* <div className="swiper-slide" data-filter="filter1">
                <div className="effect-hvr3">
                  <div className="effect-sarah">
                    <img src={`${process.env.NODE_ENV === "production" ? "/Fahud" : ""}/images/project-3/m9.jpg`} alt="img20" />
                    <a className="elem pic-long project-view-btn" href="/images/project-3/m9.jpg" title="New York Housing Project" data-lcl-txt="" data-lcl-author="" data-lcl-thumb="/images/project-3/m9.jpg">
                      <i className="fa fa-search-plus"></i>
                    </a>
                  </div>
                  <div className="effect-hvr3-inner">
                    <h3 className="wt-title"><Link href="/project-single">New York Housing Project</Link></h3>
                    <span className="project-new-category">Apartment</span>
                    <Link href="/project-single" className="site-button-icon site-text-primary"><i className="flaticon-right"></i></Link>
                  </div>
                </div>
              </div> */}

            </div>
            
            {/* If we need navigation buttons */}
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
            
          </div>
        </div>
      </div>   
      {/* LATEST PROJECTS SLIDER END */}

      
    </>
  );
}
