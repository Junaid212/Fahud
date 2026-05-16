"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InnerBanner from '@/components/InnerBanner';
import FooterNew from '@/components/FooterNew';
import InnerBanner3 from '@/components/InnerBanner3';

const filterItems = [
  { label: 'Fasteners',                   filter: '.cat-1'  },
  { label: 'Fabrication',                 filter: '.cat-2'  },
  { label: 'Welding Consumables',         filter: '.cat-3'  },
  { label: 'Safety Helmets',              filter: '.cat-4'  },
  { label: 'Safety Eyewear Protection',   filter: '.cat-5'  },
  { label: 'Safety Respiratory Protection', filter: '.cat-6' },
  { label: 'Safety Hearing Protection',   filter: '.cat-7'  },
  { label: 'Lifting Solution',            filter: '.cat-8'  },
  { label: 'Hand Protection',             filter: '.cat-9'  },
  { label: 'Foot Protection',             filter: '.cat-10' },
  { label: 'Body Protection',             filter: '.cat-11' },
  { label: 'Other Safety',               filter: '.cat-12' },
  { label: 'Hand Tool',                  filter: '.cat-13' },
  { label: 'Pipes & Fittings',           filter: '.cat-14' },
  { label: 'Machine Tool',               filter: '.cat-15' },
  { label: 'Pneumatic Tool',             filter: '.cat-16' },
  { label: 'Power Tool',                 filter: '.cat-17' },
  { label: 'Consumables',               filter: '.cat-18' },
];

export default function Project2() {
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [activeLabel, setActiveLabel] = useState('All');
  useEffect(() => {
    let timer;
    const initIsotope = () => {
      if (typeof window !== 'undefined' && window.jQuery && window.jQuery().isotope) {
        var $container = window.jQuery('.masonry-wrap');

        $container.isotope({
          itemSelector: '.masonry-item',
          transitionDuration: '1s',
          originLeft: true,
          stamp: '.stamp',
          percentPosition: true,
          layoutMode: 'masonry',
        });

        if (window.jQuery().imagesLoaded) {
          $container.imagesLoaded().progress(function () {
            $container.isotope('layout');
          });
        }

        window.jQuery('.masonry-filter li').off('click').on('click', function (e) {
          e.preventDefault();
          var selector = window.jQuery(this).find("a").attr('data-filter');
          window.jQuery('.masonry-filter li').removeClass('active');
          window.jQuery(this).addClass('active');
          $container.isotope({ filter: selector });
          return false;
        });

        // expose isotope instance for mobile dropdown
        window.__isotopeMasonryInstance = $container;
      } else {
        timer = setTimeout(initIsotope, 100);
      }
    };
    initIsotope();

    return () => clearTimeout(timer);
  }, []);

  const projectData = [
    { filter: "cat-1", image: "images/project-3/14.webp", title: "Bolts" },
    { filter: "cat-1", image: "images/project-3/15.webp", title: "Screws" },
    { filter: "cat-1", image: "images/project-3/16.webp", title: "Nuts" },
    { filter: "cat-1", image: "images/project-3/17.webp", title: "Washers" },
    { filter: "cat-1", image: "images/project-3/18.webp", title: "Thread Bars" },
    { filter: "cat-1", image: "images/project-3/19.webp", title: "Stud Bolts" },
    { filter: "cat-2", image: "images/project-3/20.webp", title: "J Bolt" },
    { filter: "cat-2", image: "images/project-3/21.webp", title: "Eye Bolt Open" },
    { filter: "cat-2", image: "images/project-3/22.webp", title: "Eye Bolt Closed" },
    { filter: "cat-2", image: "images/project-3/25.webp", title: "Thread Rebars" },
    { filter: "cat-2", image: "images/project-3/24.webp", title: "Plate Bolt" },
    { filter: "cat-2", image: "images/project-3/23.webp", title: "U bOlt" },
    { filter: "cat-2", image: "images/project-3/27.webp", title: "Centered J Bolt" },
    { filter: "cat-2", image: "images/project-3/26.webp", title: "Hook Bolt" },
    { filter: "cat-3", image: "images/project-3/29.webp", title: "Gas Cutting, Heating, Welding Equipment" },
    { filter: "cat-3", image: "images/project-3/30.webp", title: "ARC Gouging Solutions" },
    { filter: "cat-3", image: "images/project-3/32.webp", title: "MIG gun & Accessories" },
    { filter: "cat-3", image: "images/project-3/34.webp", title: "TIG Torches & Accessories" },
    { filter: "cat-3", image: "images/project-3/33.webp", title: "Welding Curtains, Screen & Blankets" },
    { filter: "cat-3", image: "images/project-3/31.webp", title: "Industrial Markers, Temperature Sticks" },
    { filter: "cat-4", image: "images/project-3/35.webp",  },
    { filter: "cat-4", image: "images/project-3/36.webp",  },
    { filter: "cat-4", image: "images/project-3/37.webp",  },
    { filter: "cat-4", image: "images/project-3/38.webp",  },
    { filter: "cat-5", image: "images/project-3/64.webp",  },
    { filter: "cat-5", image: "images/project-3/65.webp",  },
    { filter: "cat-5", image: "images/project-3/66.webp",  },
    { filter: "cat-5", image: "images/project-3/67.webp",  },
    { filter: "cat-6", image: "images/project-3/68.webp",  },
    { filter: "cat-6", image: "images/project-3/69.webp",  },
    { filter: "cat-6", image: "images/project-3/70.webp",  },
    { filter: "cat-6", image: "images/project-3/71.webp",  },
    { filter: "cat-7", image: "images/project-3/72.webp",  },
    { filter: "cat-7", image: "images/project-3/73.webp",  },
    { filter: "cat-7", image: "images/project-3/74.webp",  },
    { filter: "cat-7", image: "images/project-3/75.webp",  },
    { filter: "cat-8", image: "images/project-3/39.webp",  },
    { filter: "cat-8", image: "images/project-3/40.webp",  },
    { filter: "cat-8", image: "images/project-3/41.webp",  },
    { filter: "cat-8", image: "images/project-3/42.webp",  },
    { filter: "cat-8", image: "images/project-3/43.webp",  },
    { filter: "cat-8", image: "images/project-3/44.webp",  },
    { filter: "cat-8", image: "images/project-3/45.webp",  },
    { filter: "cat-8", image: "images/project-3/46.webp",  },
    { filter: "cat-8", image: "images/project-3/47.webp",  },
    { filter: "cat-8", image: "images/project-3/48.webp",  },
    { filter: "cat-8", image: "images/project-3/49.webp",  },
    { filter: "cat-8", image: "images/project-3/50.webp",  },
    { filter: "cat-8", image: "images/project-3/51.webp",  },
    { filter: "cat-8", image: "images/project-3/52.webp",  },
    { filter: "cat-8", image: "images/project-3/53.webp",  },
    { filter: "cat-9", image: "images/project-3/54.webp",  },
    { filter: "cat-9", image: "images/project-3/55.webp",  },
    { filter: "cat-9", image: "images/project-3/56.webp",  },
    { filter: "cat-9", image: "images/project-3/57.webp",  },
    { filter: "cat-10", image: "images/project-3/58.webp",  },
    { filter: "cat-10", image: "images/project-3/59.webp",  },
    { filter: "cat-10", image: "images/project-3/60.webp",  },
    { filter: "cat-10", image: "images/project-3/61.webp",  },
    { filter: "cat-10", image: "images/project-3/62.webp",  },
    { filter: "cat-10", image: "images/project-3/63.webp",  },
    { filter: "cat-11", image: "images/project-3/76.webp",  },
    { filter: "cat-11", image: "images/project-3/77.webp",  },
    { filter: "cat-11", image: "images/project-3/78.webp",  },
    { filter: "cat-11", image: "images/project-3/79.webp",  },
    { filter: "cat-11", image: "images/project-3/80.webp",  },
    { filter: "cat-11", image: "images/project-3/81.webp",  },
    { filter: "cat-11", image: "images/project-3/82.webp",  },
    { filter: "cat-11", image: "images/project-3/83.webp",  },
    { filter: "cat-11", image: "images/project-3/84.webp",  },
    { filter: "cat-11", image: "images/project-3/85.webp",  },
    { filter: "cat-11", image: "images/project-3/86.webp",  },
    { filter: "cat-12", image: "images/project-3/87.webp", title:'Traffic cone'  },
    { filter: "cat-12", image: "images/project-3/88.webp", title:'Warning Light'  },
    { filter: "cat-12", image: "images/project-3/89.webp", title:'Chain Block'  },
    { filter: "cat-12", image: "images/project-3/90.webp", title:'Road Barrier'  },
    { filter: "cat-12", image: "images/project-3/91.webp", title:'Spill kit set'  },
    { filter: "cat-12", image: "images/project-3/92.webp", title:'Safety Mesh'  },
    { filter: "cat-12", image: "images/project-3/93.webp", title:'Gas Monitor'  },
    { filter: "cat-12", image: "images/project-3/94.webp", title:'LOTO Lock'  },
    { filter: "cat-12", image: "images/project-3/95.webp", title:'Eye Wash Station'  },
    { filter: "cat-12", image: "images/project-3/96.webp", title:'SCABA/SCBA'  },
    { filter: "cat-12", image: "images/project-3/97.webp", title:'Scaffolding Tag'  },
    { filter: "cat-12", image: "images/project-3/98.webp", title:'Smoke Detector'  },
    { filter: "cat-12", image: "images/project-3/99.webp", title:'First Aid Kit'  },
    { filter: "cat-12", image: "images/project-3/100.webp", title:'Warning Tape'  },
    { filter: "cat-12", image: "images/project-3/101.webp", title:'Shackle'  },
    { filter: "cat-13", image: "images/project-3/102.webp", title:'Screw Drivers & Pliers'  },
    { filter: "cat-13", image: "images/project-3/103.webp", title:'Wrenches & Socket Sets'  },
    { filter: "cat-13", image: "images/project-3/104.webp", title:'Crimping & Rivet Gun'  },
    { filter: "cat-13", image: "images/project-3/105.webp", title:'Hammers & Chisel'  },
    { filter: "cat-13", image: "images/project-3/106.webp", title:'Toolbox & Cabinets'  },
    { filter: "cat-13", image: "images/project-3/136.webp", title:'Measuring Tools'  },
    { filter: "cat-13", image: "images/project-3/137.webp", title:'Measuring Tools'  },
    { filter: "cat-13", image: "images/project-3/138.webp", title:'Measuring Tools'  },
    { filter: "cat-13", image: "images/project-3/139.webp", title:'Measuring Tools'  },
    { filter: "cat-13", image: "images/project-3/133.webp", title:'Carpentry Tools'  },
    { filter: "cat-13", image: "images/project-3/134.webp", title:'Carpentry Tools'  },
    { filter: "cat-13", image: "images/project-3/135.webp", title:'Carpentry Tools'  },
    { filter: "cat-14", image: "images/project-3/107.webp", title:'Pipes (SS, Aluminum, Copper)'  },
    { filter: "cat-14", image: "images/project-3/108.webp", title:'PPR, PVC / HPVC Pipes'  },
    { filter: "cat-14", image: "images/project-3/109.webp", title:'SS Round / Flat / Hexagon / Square Bar'  },
    { filter: "cat-14", image: "images/project-3/110.webp",  },
    { filter: "cat-14", image: "images/project-3/111.webp",  },
    { filter: "cat-14", image: "images/project-3/112.webp",  },
    { filter: "cat-14", image: "images/project-3/113.webp",  },
    { filter: "cat-14", image: "images/project-3/114.webp",  },
    { filter: "cat-14", image: "images/project-3/115.webp",  },
    { filter: "cat-14", image: "images/project-3/116.webp",  },
    { filter: "cat-14", image: "images/project-3/117.webp",  },
    { filter: "cat-14", image: "images/project-3/118.webp",  },
    { filter: "cat-14", image: "images/project-3/119.webp",  },
    { filter: "cat-15", image: "images/project-3/120.webp",  },
    { filter: "cat-15", image: "images/project-3/121.webp",  },
    { filter: "cat-15", image: "images/project-3/122.webp",  },
    { filter: "cat-15", image: "images/project-3/123.webp",  },
    { filter: "cat-15", image: "images/project-3/124.webp",  },
    { filter: "cat-15", image: "images/project-3/125.webp",  },
    { filter: "cat-15", image: "images/project-3/126.webp",  },
    { filter: "cat-16", image: "images/project-3/127.webp",  },
    { filter: "cat-16", image: "images/project-3/128.webp",  },
    { filter: "cat-16", image: "images/project-3/129.webp",  },
    { filter: "cat-16", image: "images/project-3/130.webp",  },
    { filter: "cat-16", image: "images/project-3/131.webp",  },
    { filter: "cat-16", image: "images/project-3/132.webp",  },
    { filter: "cat-17", image: "images/project-3/140.webp",  },
    { filter: "cat-17", image: "images/project-3/141.webp",  },
    { filter: "cat-17", image: "images/project-3/142.webp",  },
    { filter: "cat-17", image: "images/project-3/143.webp",  },
    { filter: "cat-17", image: "images/project-3/144.webp",  },
    { filter: "cat-17", image: "images/project-3/145.webp",  },
    { filter: "cat-17", image: "images/project-3/146.webp",  },
    { filter: "cat-17", image: "images/project-3/147.webp",  },
    { filter: "cat-18", image: "images/project-3/148.webp",  },
    { filter: "cat-18", image: "images/project-3/149.webp",  },
    { filter: "cat-18", image: "images/project-3/150.webp",  },
    { filter: "cat-18", image: "images/project-3/151.webp",  },
    { filter: "cat-18", image: "images/project-3/152.webp",  },
    { filter: "cat-18", image: "images/project-3/153.webp",  },
    { filter: "cat-18", image: "images/project-3/154.webp",  },
    { filter: "cat-18", image: "images/project-3/155.webp",  },
    { filter: "cat-18", image: "images/project-3/156.webp",  },
    { filter: "cat-18", image: "images/project-3/157.webp",  },
    { filter: "cat-18", image: "images/project-3/158.webp",  },
    { filter: "cat-18", image: "images/project-3/159.webp",  },
    { filter: "cat-18", image: "images/project-3/160.webp",  },
    { filter: "cat-18", image: "images/project-3/161.webp",  },
    { filter: "cat-18", image: "images/project-3/162.webp",  },
    { filter: "cat-18", image: "images/project-3/163.webp",  },
    { filter: "cat-18", image: "images/project-3/164.webp",  },
  ];

  return (
        <>
            <div className="page-wraper">
                <Header />

                <div className="page-content">
                    <InnerBanner3 title="Products" />




                    {/*  Project 2 SECTION START  */}
                    <div className="section-full p-t60 p-b90">
                        <div className="p-l70 p-r90 gap-10">
                            {/*  PAGINATION START  */}
                            <div className="filter-wrap">

                              {/* ── DESKTOP filter (hidden on mobile) ── */}
                              <ul className="masonry-filter filter-desktop">
                                <li className="active"><a data-filter="*">All</a></li>
                                {filterItems.map((f) => (
                                  <li key={f.filter}><a data-filter={f.filter}>{f.label}</a></li>
                                ))}
                              </ul>

                              {/* ── MOBILE dropdown filter (hidden on desktop) ── */}
                              <div className="filter-mobile">
                                <button
                                  className="filter-mobile__toggle"
                                  onClick={() => setMobileDropdownOpen(o => !o)}
                                  aria-expanded={mobileDropdownOpen}
                                >
                                  <span className="filter-mobile__label">{activeLabel}</span>
                                  <span className={`filter-mobile__arrow ${mobileDropdownOpen ? 'open' : ''}`}>&#9662;</span>
                                </button>

                                {mobileDropdownOpen && (
                                  <div className="filter-mobile__dropdown">
                                    {/* "All" row */}
                                    <button
                                      className={`filter-mobile__item${activeLabel === 'All' ? ' active' : ''}`}
                                      onClick={() => {
                                        setActiveLabel('All');
                                        setMobileDropdownOpen(false);
                                        if (window.__isotopeMasonryInstance) {
                                          window.__isotopeMasonryInstance.isotope({ filter: '*' });
                                        }
                                        // sync desktop list
                                        if (window.jQuery) {
                                          window.jQuery('.masonry-filter li').removeClass('active');
                                          window.jQuery('.masonry-filter li').first().addClass('active');
                                        }
                                      }}
                                    >
                                      All
                                    </button>

                                    {filterItems.map((f) => (
                                      <button
                                        key={f.filter}
                                        className={`filter-mobile__item${activeLabel === f.label ? ' active' : ''}`}
                                        onClick={() => {
                                          setActiveLabel(f.label);
                                          setMobileDropdownOpen(false);
                                          if (window.__isotopeMasonryInstance) {
                                            window.__isotopeMasonryInstance.isotope({ filter: f.filter });
                                          }
                                          // sync desktop list
                                          if (window.jQuery) {
                                            window.jQuery('.masonry-filter li').removeClass('active');
                                            window.jQuery(`.masonry-filter li a[data-filter="${f.filter}"]`).parent().addClass('active');
                                          }
                                        }}
                                      >
                                        {f.label}
                                      </button>
                                    ))}
                                  </div>
                                )}
                              </div>

                            </div>
                            {/*  PAGINATION END  */}

                            {/*  PROJECT CONTENT START  */}
                            <style>{`
                              /* Mobile padding */
                              @media (max-width: 768px) {
                                .p-l70 { padding-left: 10px !important; }
                                .p-r90 { padding-right: 10px !important; }
                                .project-new-2 .project-new-content .wt-title {
                                  font-size: 12px !important;
                                  margin-bottom: 4px !important;
                                }
                                .project-new-2 .project-new-content {
                                  padding: 8px 10px 8px 12px !important;
                                  right: auto !important;
                                }
                              }

                              /* Desktop: show masonry list, hide mobile widget */
                              .filter-desktop { display: flex; }
                              .filter-mobile  { display: none; }

                              @media (max-width: 767px) {
                                .filter-desktop { display: none !important; }
                                .filter-mobile  { display: block; }
                              }

                              /* Mobile toggle button */
                              .filter-mobile__toggle {
                                display: flex;
                                align-items: center;
                                justify-content: space-between;
                                width: 100%;
                                padding: 10px 16px;
                                background: #032B4A;
                                color: #fff;
                                border: none;
                                border-radius: 6px;
                                font-size: 14px;
                                font-weight: 700;
                                letter-spacing: 1px;
                                cursor: pointer;
                                text-transform: uppercase;
                              }
                              .filter-mobile__arrow {
                                display: inline-block;
                                transition: transform 0.25s ease;
                                font-size: 12px;
                              }
                              .filter-mobile__arrow.open {
                                transform: rotate(180deg);
                              }

                              /* Dropdown panel */
                              .filter-mobile__dropdown {
                                display: grid;
                                grid-template-columns: 1fr 1fr;
                                gap: 8px;
                                margin-top: 8px;
                                padding: 12px;
                                background: #fff;
                                border: 1px solid #e0e0e0;
                                border-radius: 6px;
                                box-shadow: 0 4px 16px rgba(0,0,0,0.10);
                                animation: dropIn 0.2s ease;
                              }
                              @keyframes dropIn {
                                from { opacity: 0; transform: translateY(-6px); }
                                to   { opacity: 1; transform: translateY(0); }
                              }

                              /* Each filter chip */
                              .filter-mobile__item {
                                padding: 8px 6px;
                                background: #f5f5f5;
                                border: 1.5px solid #e0e0e0;
                                border-radius: 5px;
                                font-size: 12px;
                                font-weight: 600;
                                color: #032B4A;
                                text-align: center;
                                cursor: pointer;
                                text-transform: uppercase;
                                letter-spacing: 0.5px;
                                transition: background 0.2s, color 0.2s, border-color 0.2s;
                              }
                              .filter-mobile__item:hover {
                                background: #e2791d;
                                color: #fff;
                                border-color: #e2791d;
                              }
                              .filter-mobile__item.active {
                                background: #032B4A;
                                color: #fff;
                                border-color: #032B4A;
                              }
                            `}</style>
                        <div className="masonry-wrap row clearfix d-flex justify-content-center flex-wrap">
                            {projectData.map((project, index) => (
                                <div key={index} className={`masonry-item ${project.filter} col-xl-2 col-lg-3 col-md-4 col-6`} style={{ padding: '5px'}} data-filter={project.filter}>
                                    <div className="project-new-2">
                                        <div className="wt-img-effect">
                                            <img src={project.image} alt="" style={{ border: '5px solid orange' }} />
                                        </div>
                                        {project.title && (
                                            <div className="project-new-content">
                                                <h3 className="wt-title"><Link href="#">{project.title}</Link></h3>
                                                {/* <p>{project.desc}</p> */}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/*  PROJECT CONTENT END  */}
                    </div>
                </div>
                {/*  Project 2 SECTION END  */}

                {/*  CLIENT LOGO SECTION START  */}
                {/* <div className="section-full  Client-logo-style1-wrap">
                    <div className="section-content">
                        <div className="home-client-carousel2-wrap"> */}
                            {/*  Swiper  */}
                            {/* <div className="swiper home-client-carousel2">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="ow-client-logo">
                                            <div className="client-logo client-logo-media">
                                                <a href="about-2.html"><img src="images/client-logo/dark/1.png" alt="" /></a></div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="ow-client-logo">
                                            <div className="client-logo client-logo-media">
                                                <a href="about-2.html"><img src="images/client-logo/dark/2.png" alt="" /></a></div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="ow-client-logo">
                                            <div className="client-logo client-logo-media">
                                                <a href="about-2.html"><img src="images/client-logo/dark/3.png" alt="" /></a></div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="ow-client-logo">
                                            <div className="client-logo client-logo-media">
                                                <a href="about-2.html"><img src="images/client-logo/dark/4.png" alt="" /></a></div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="ow-client-logo">
                                            <div className="client-logo client-logo-media">
                                                <a href="about-2.html"><img src="images/client-logo/dark/5.png" alt="" /></a></div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="ow-client-logo">
                                            <div className="client-logo client-logo-media">
                                                <a href="about-2.html"><img src="images/client-logo/dark/1.png" alt="" /></a></div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="ow-client-logo">
                                            <div className="client-logo client-logo-media">
                                                <a href="about-2.html"><img src="images/client-logo/dark/3.png" alt="" /></a></div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="ow-client-logo">
                                            <div className="client-logo client-logo-media">
                                                <a href="about-2.html"><img src="images/client-logo/dark/1.png" alt="" /></a></div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="ow-client-logo">
                                            <div className="client-logo client-logo-media">
                                                <a href="about-2.html"><img src="images/client-logo/dark/2.png" alt="" /></a></div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="ow-client-logo">
                                            <div className="client-logo client-logo-media">
                                                <a href="about-2.html"><img src="images/client-logo/dark/3.png" alt="" /></a></div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="ow-client-logo">
                                            <div className="client-logo client-logo-media">
                                                <a href="about-2.html"><img src="images/client-logo/dark/4.png" alt="" /></a></div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="ow-client-logo">
                                            <div className="client-logo client-logo-media">
                                                <a href="about-2.html"><img src="images/client-logo/dark/5.png" alt="" /></a></div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="ow-client-logo">
                                            <div className="client-logo client-logo-media">
                                                <a href="about-2.html"><img src="images/client-logo/dark/1.png" alt="" /></a></div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="ow-client-logo">
                                            <div className="client-logo client-logo-media">
                                                <a href="about-2.html"><img src="images/client-logo/dark/3.png" alt="" /></a></div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        {/* </div>
                    </div>
                </div> */}
                {/*  CLIENT LOGO  SECTION End  */}

                {/*  LATEST PROJECTS SLIDER START  */}
                {/* <div className="section-full p-t120 p-b90 pro-filtr-cate-wrap">
                    <div className="container"> */}
                        {/*  TITLE START */}
                        {/* <div className="section-head center wt-small-separator-outer">
                            <div className="wt-small-separator site-text-primary">
                                <i className="bi bi-house"></i>
                                <div>Explore Recent Work</div>
                            </div>
                            <h2 className="wt-title  title_split_anim">Our Finished Projects</h2>
                        </div> */}
                        {/*  TITLE END */}
                    {/* </div> */}
                    {/*  IMAGE CAROUSEL START  */}
                    {/* <div className="pro-filtr-cate-carousal-wrap">
                        <div className="project-filter-wrap pro-filtr-cate-carousal text-center">
                            <span data-filter="all">All</span>
                            <span data-filter="filter1">Residetial</span>
                            <span data-filter="filter2">Commercial</span>
                            <span data-filter="filter3">Industrial</span>
                            <span data-filter="filter4">Architecture</span>
                        </div>
                        <div className="swiper-container pro-filtr-cate-bx">

                            <div className="swiper-wrapper"> */}

                                {/*  COLUMNS 1  */}
                                {/* <div className="swiper-slide" data-filter="filter1">
                                    <div className="effect-hvr3">
                                        <div className="effect-sarah">
                                            <img src="images/project-3/m1.jpg" alt="img20" />
                                            <a className="elem pic-long project-view-btn" href="images/project-3/m1.jpg" title="Commercial Building" data-lcl-txt="" data-lcl-author="" data-lcl-thumb="images/project-3/m1.jpg"><i className="fa fa-search-plus"></i>
                                            </a>
                                        </div>
                                        <div className="effect-hvr3-inner">
                                            <h3 className="wt-title"><a href="project-single.html">Commercial Building</a></h3>
                                            <span className="project-new-category">Appartment</span>
                                            <a href="project-single.html" className="site-button-icon site-text-primary"><i className="flaticon-right"></i></a>
                                        </div>
                                    </div>
                                </div> */}

                                {/*  COLUMNS 2  */}
                                {/* <div className="swiper-slide" data-filter="filter2">
                                    <div className="effect-hvr3">
                                        <div className="effect-sarah">
                                            <img src="images/project-3/m2.jpg" alt="img20" />
                                            <a className="elem pic-long project-view-btn" href="images/project-3/m2.jpg" title="Mountain Hotel" data-lcl-txt="" data-lcl-author="" data-lcl-thumb="images/project-3/m2.jpg"><i className="fa fa-search-plus"></i>
                                            </a>
                                        </div>
                                        <div className="effect-hvr3-inner">
                                            <h3 className="wt-title"><a href="project-single.html">Mountain Hotel</a></h3>
                                            <span className="project-new-category">Building</span>
                                            <a href="project-single.html" className="site-button-icon site-text-primary"><i className="flaticon-right"></i></a>
                                        </div>
                                    </div>
                                </div> */}

                                {/*  COLUMNS 3  */}
                                {/* <div className="swiper-slide" data-filter="filter1">
                                    <div className="effect-hvr3">
                                        <div className="effect-sarah">
                                            <img src="images/project-3/m3.jpg" alt="img20" />
                                            <a className="elem pic-long project-view-btn" href="images/project-3/m3.jpg" title="New York Housing Project" data-lcl-txt="" data-lcl-author="" data-lcl-thumb="images/project-3/m3.jpg"><i className="fa fa-search-plus"></i>
                                            </a>
                                        </div>
                                        <div className="effect-hvr3-inner">
                                            <h3 className="wt-title"><a href="project-single.html">New York Housing Project</a></h3>
                                            <span className="project-new-category">Apartment</span>
                                            <a href="project-single.html" className="site-button-icon site-text-primary"><i className="flaticon-right"></i></a>
                                        </div>
                                    </div>
                                </div> */}

                                {/*  COLUMNS 4  */}
                                {/* <div className="swiper-slide" data-filter="filter2">
                                    <div className="effect-hvr3">
                                        <div className="effect-sarah">
                                            <img src="images/project-3/m4.jpg" alt="img20" />
                                            <a className="elem pic-long project-view-btn" href="images/project-3/m4.jpg" title="House Extensions" data-lcl-txt="" data-lcl-author="" data-lcl-thumb="images/project-3/m4.jpg"><i className="fa fa-search-plus"></i>
                                            </a>
                                        </div>
                                        <div className="effect-hvr3-inner">
                                            <h3 className="wt-title"><a href="project-single.html">House Extensions</a></h3>
                                            <span className="project-new-category">Building Constrction</span>
                                            <a href="project-single.html" className="site-button-icon site-text-primary"><i className="flaticon-right"></i></a>
                                        </div>
                                    </div>
                                </div> */}

                                {/*  COLUMNS 5  */}
                                {/* <div className="swiper-slide" data-filter="filter3">
                                    <div className="effect-hvr3">
                                        <div className="effect-sarah">
                                            <img src="images/project-3/m5.jpg" alt="img20" />
                                            <a className="elem pic-long project-view-btn" href="images/project-3/m5.jpg" title="Renovation" data-lcl-txt="" data-lcl-author="" data-lcl-thumb="images/project-3/m5.jpg"><i className="fa fa-search-plus"></i>
                                            </a>
                                        </div>
                                        <div className="effect-hvr3-inner">
                                            <h3 className="wt-title"><a href="project-single.html">Renovation</a></h3>
                                            <span className="project-new-category">Renovation , Architecture</span>
                                            <a href="project-single.html" className="site-button-icon site-text-primary"><i className="flaticon-right"></i></a>
                                        </div>
                                    </div>
                                </div> */}

                                {/*  COLUMNS 6  */}
                                {/* <div className="swiper-slide" data-filter="filter4">
                                    <div className="effect-hvr3">
                                        <div className="effect-sarah">
                                            <img src="images/project-3/m6.jpg" alt="img20" />
                                            <a className="elem pic-long project-view-btn" href="images/project-3/m6.jpg" title="Roome Interior" data-lcl-txt="" data-lcl-author="" data-lcl-thumb="images/project-3/m6.jpg"><i className="fa fa-search-plus"></i>
                                            </a>
                                        </div>
                                        <div className="effect-hvr3-inner">
                                            <h3 className="wt-title"><a href="project-single.html">Roome Interior</a></h3>
                                            <span className="project-new-category">Interior</span>
                                            <a href="project-single.html" className="site-button-icon site-text-primary"><i className="flaticon-right"></i></a>
                                        </div>
                                    </div>
                                </div> */}

                                {/*  COLUMNS 7  */}
                                {/* <div className="swiper-slide" data-filter="filter1">
                                    <div className="effect-hvr3">
                                        <div className="effect-sarah">
                                            <img src="images/project-3/m7.jpg" alt="img20" />
                                            <a className="elem pic-long project-view-btn" href="images/project-3/m7.jpg" title="Commercial Building" data-lcl-txt="" data-lcl-author="" data-lcl-thumb="images/project-3/m7.jpg"><i className="fa fa-search-plus"></i>
                                            </a>
                                        </div>
                                        <div className="effect-hvr3-inner">
                                            <h3 className="wt-title"><a href="project-single.html">Commercial Building</a></h3>
                                            <span className="project-new-category">Appartment</span>
                                            <a href="project-single.html" className="site-button-icon site-text-primary"><i className="flaticon-right"></i></a>
                                        </div>
                                    </div>
                                </div> */}

                                {/*  COLUMNS 8  */}
                                {/* <div className="swiper-slide" data-filter="filter2">
                                    <div className="effect-hvr3">
                                        <div className="effect-sarah">
                                            <img src="images/project-3/m8.jpg" alt="img20" />
                                            <a className="elem pic-long project-view-btn" href="images/project-3/m8.jpg" title="Mountain Hotel" data-lcl-txt="" data-lcl-author="" data-lcl-thumb="images/project-3/m8.jpg"><i className="fa fa-search-plus"></i>
                                            </a>
                                        </div>
                                        <div className="effect-hvr3-inner">
                                            <h3 className="wt-title"><a href="project-single.html">Mountain Hotel</a></h3>
                                            <span className="project-new-category">Building</span>
                                            <a href="project-single.html" className="site-button-icon site-text-primary"><i className="flaticon-right"></i></a>
                                        </div>
                                    </div>
                                </div> */}

                                {/*  COLUMNS 9  */}
                                {/* <div className="swiper-slide" data-filter="filter1">
                                    <div className="effect-hvr3">
                                        <div className="effect-sarah">
                                            <img src="images/project-3/m9.jpg" alt="img20" />
                                            <a className="elem pic-long project-view-btn" href="images/project-3/m9.jpg" title="New York Housing Project" data-lcl-txt="" data-lcl-author="" data-lcl-thumb="images/project-3/m9.jpg"><i className="fa fa-search-plus"></i>
                                            </a>
                                        </div>
                                        <div className="effect-hvr3-inner">
                                            <h3 className="wt-title"><a href="project-single.html">New York Housing Project</a></h3>
                                            <span className="project-new-category">Apartment</span>
                                            <a href="project-single.html" className="site-button-icon site-text-primary"><i className="flaticon-right"></i></a>
                                        </div>
                                    </div>
                                </div> */}

                            {/* </div> */}

                            {/*  If we need navigation buttons  */}
                            {/* <div className="swiper-button-prev"></div>
                            <div className="swiper-button-next"></div>

                        </div>
                    </div>
                </div> */}
                {/*  LATEST PROJECTS SLIDER END  */}


            </div>

            <FooterNew />
        </div >
    </>
  );
}