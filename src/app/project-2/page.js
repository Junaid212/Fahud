"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InnerBanner from '@/components/InnerBanner';

export default function Project2() {
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
    { filter: "cat-12", image: "images/project-3/87.webp",  },
    { filter: "cat-12", image: "images/project-3/88.webp",  },
    { filter: "cat-12", image: "images/project-3/89.webp",  },
    { filter: "cat-12", image: "images/project-3/90.webp",  },
    { filter: "cat-12", image: "images/project-3/91.webp",  },
    { filter: "cat-12", image: "images/project-3/92.webp",  },
    { filter: "cat-12", image: "images/project-3/93.webp",  },
    { filter: "cat-12", image: "images/project-3/94.webp",  },
    { filter: "cat-12", image: "images/project-3/95.webp",  },
    { filter: "cat-12", image: "images/project-3/96.webp",  },
    { filter: "cat-12", image: "images/project-3/97.webp",  },
    { filter: "cat-12", image: "images/project-3/98.webp",  },
    { filter: "cat-12", image: "images/project-3/99 .webp",  },
    { filter: "cat-12", image: "images/project-3/100.webp",  },
    { filter: "cat-12", image: "images/project-3/101.webp",  },
    { filter: "cat-13", image: "images/project-3/102.webp",  },
    { filter: "cat-13", image: "images/project-3/103.webp",  },
    { filter: "cat-13", image: "images/project-3/104.webp",  },
    { filter: "cat-13", image: "images/project-3/105.webp",  },
    { filter: "cat-13", image: "images/project-3/106.webp",  },
    { filter: "cat-14", image: "images/project-3/107.webp",  },
    { filter: "cat-14", image: "images/project-3/108.webp",  },
    { filter: "cat-14", image: "images/project-3/109.webp",  },
    { filter: "cat-14", image: "images/project-3/110.webp",  },
    { filter: "cat-14", image: "images/project-3/111.webp",  },
    { filter: "cat-13", image: "images/project-3/112.webp",  },
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
                    <InnerBanner title="Products" />




                    {/*  Project 2 SECTION START  */}
                    <div className="section-full p-t60 p-b90">
                        <div className="p-l70 p-r90 gap-10">
                            {/*  PAGINATION START  */}
                            <div className="filter-wrap">
                                <ul className="masonry-filter">
                                    <li className="active"><a data-filter="*" >All</a></li>
                                    <li ><a data-filter=".cat-1" >Fasteners</a></li>
                                    <li><a data-filter=".cat-2" > Fabrication</a></li>
                                    <li><a data-filter=".cat-3" >Welding Consumables</a></li>
                                    <li><a data-filter=".cat-4" >Safety Helmets</a></li>
                                    <li><a data-filter=".cat-5" >Safety Eyewear Protection</a></li>
                                    <li><a data-filter=".cat-6" >Safety Respiratory Protection</a></li>
                                    <li><a data-filter=".cat-7" >Safety Hearing Protection</a></li>
                                <li><a data-filter=".cat-8" >Lifting Solution</a></li>
                                <li><a data-filter=".cat-9" >Hand Protection</a></li>
                                <li><a data-filter=".cat-10" >Foot Protection</a></li>
                                <li><a data-filter=".cat-11" >Body Protection</a></li>
                                <li><a data-filter=".cat-12" >Other Safety</a></li>
                                <li><a data-filter=".cat-13" >Hand Tool</a></li>
                                <li><a data-filter=".cat-14" >Pipes & Fittings</a></li>
                                <li><a data-filter=".cat-15" >Machine Tool</a></li>
                                <li><a data-filter=".cat-16" >Pneumatic Tool</a></li>
                                <li><a data-filter=".cat-17" >Power Tool</a></li>
                                <li><a data-filter=".cat-18" >Consumables</a></li>
                            </ul>
                        </div>
                        {/*  PAGINATION END  */}

                        {/*  PROJECT CONTENT START  */}
                        {/* <style>{`
                            .project-new-2.no-hover:hover .wt-img-effect img {
                                opacity: 1 !important;
                            }
                        `}</style> */}
                        <div className="masonry-wrap row clearfix d-flex justify-content-center flex-wrap">
                            {projectData.map((project, index) => (
                                <div key={index} className={`masonry-item ${project.filter} col-xl-2 col-lg-3 col-md-6 m-b30 m-l0`} data-filter={project.filter}>
                                    <div className="project-new-2">
                                        <div className="wt-img-effect">
                                            <img src={project.image} alt="" />
                                        </div>
                                        {project.title && (
                                            <div className="project-new-content">
                                                <h3 className="wt-title"><Link href="project-single.html">{project.title}</Link></h3>
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

            <Footer />
        </div >
    </>
  );
}