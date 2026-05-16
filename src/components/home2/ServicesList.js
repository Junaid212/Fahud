'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';


// ============================================================================
// SERVICE DATA
// ============================================================================
const services = [
  {
    id: 1,
    title: 'Industrial Fasteners',
    category: 'Premium Components',
    description: 'FAHUD Safety & Technical Trading Oman is a trusted and well-established supplier of high-quality industrial fasteners in Oman, offering a wide range of precision-engineered high tensile fasteners and industrial fastening solutions designed to meet international quality standards for construction, oil & gas, manufacturing, and industrial applications.',
    longDescription: 'Engineered for maximum reliability and performance in the most demanding industrial environments. Our fastener solutions meet international standards and certifications.',
    image: './images/services/191.webp',
    accent: 'from-orange-500 to-orange-600',
    layout: 'left'
  },
  {
    id: 2,
    title: 'Metal Fabrication',
    category: 'Custom Solutions',
    description: 'We specialize in creating unique architectural metal sculptures and custom metal fabrication solutions for homes, commercial spaces, and businesses across Oman. Every project is designed to meet specific client requirements with precision craftsmanship and high-quality materials. As one of the leading metal fabrication companies in Oman, we deliver innovative, durable, and visually striking metal works tailored to your needs.',
    longDescription: 'State-of-the-art facilities with advanced machinery for custom metal work, cutting, welding, and assembly to exact specifications.',
    image: './images/services/192.webp',
    accent: 'from-orange-600 to-amber-600',
    layout: 'right'
  },
  {
    id: 3,
    title: 'Welding Consumables',
    category: 'Supplies & Equipment',
    description: 'We are committed to delivering the highest level of customer satisfaction through our premium range of welding supplies in Oman. Our products include high-quality welding consumables, welding accessories, and reliable welding equipment for industrial and commercial applications. We also provide professional installation services, operator training, and dependable after-sales support to ensure maximum performance and long-term reliability for our customers.',
    longDescription: 'Complete range of welding consumables from world-leading manufacturers, ensuring consistent quality and optimal performance.',
    image: './images/services/193.webp',
    accent: 'from-orange-500 to-red-600',
    layout: 'left'
  },
  {
    id: 4,
    title: 'Safety PPE Equipment',
    category: 'Protection & Compliance',
    description: 'Our company remains committed to its core values of delivering high-quality safety solutions designed to protect human life and improve workplace safety standards. We provide advanced and reliable safety products that adapt to the evolving needs of industries, businesses, and workers, ensuring maximum protection, compliance, and operational efficiency across various sectors.',
    longDescription: 'Complete PPE solutions including respiratory protection, safety footwear, hard hats, and specialized protective gear for any industry.',
    image: './images/services/194.webp',
    accent: 'from-amber-500 to-orange-600',
    layout: 'right'
  },
  {
    id: 5,
    title: 'Lifting Solutions',
    category: 'Heavy Equipment',
    description: 'FAHUD Safety & Technical Trading is a leading supplier and importer of high-quality lifting tackles, material handling equipment, chain blocks, wire ropes, and industrial lifting solutions in Oman. We provide reliable and durable lifting products designed to meet the safety, performance, and operational requirements of various industrial sectors, ensuring efficient material handling and maximum workplace safety.',
    longDescription: 'Certified lifting equipment including cranes, hoists, chains, and rigging hardware designed for maximum load capacity and durability.',
    image: './images/services/195.webp',
    accent: 'from-orange-600 to-red-500',
    layout: 'left'
  },
  {
    id: 6,
    title: 'Safety Training',
    category: 'Safety Solutions',
    description: 'In addition to supplying a wide range of high-quality industrial safety products, we specialize in providing professional safety training and expert instruction programs in fire safety, workplace safety, and emergency preparedness. Our training solutions are designed to enhance safety awareness, ensure regulatory compliance, and help organizations create safer and more efficient working environments.',
    longDescription: 'Expert-led training programs covering hazard identification, emergency response, equipment operation, and compliance with international standards.',
    image: './images/services/196.webp',
    accent: 'from-amber-600 to-orange-600',
    layout: 'right'
  }
];

// ============================================================================
// SERVICE CARD COMPONENT (internal)
// ============================================================================


function ServiceCard({ service, index, isActive }) {
  const cardRef = useRef(null);
  
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
      viewport={{ once: false, margin: "-100px" }}
      className={`service-card ${isActive ? 'active' : ''}`}
    >
      <div className={`card-inner layout-${service.layout}`}>
        {/* Image Section */}
        <div className="card-image">
          <div className="image-wrapper">
            <img 
              src={service.image} 
              alt={service.title}
              className="service-img"
            />
            <div className="image-overlay"></div>
          </div>
        </div>

        {/* Content Section */}
        <div className="card-content">
          <div className="content-inner">
            <div className="category-badge">
              <span>{service.category}</span>
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            {/* <p className="service-long-description">{service.longDescription}</p> */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="explore-btn"
            >
              Explore Solution
              {/* <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg> */}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Internal CSS for ServiceCard */}
      <style>{`
        .service-card {
          width: 100%;
          transition: all 0.3s ease;
        }
        
        .card-inner {
          display: flex;
          flex-direction: column;
          background: rgba(255, 255, 255, 0.96);
          backdrop-filter: blur(2px);
          border-radius: 2rem;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
          transition: all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1);
          border: 1px solid rgba(249, 115, 22, 0.1);
        }
        
        .service-card.active .card-inner {
          box-shadow: 0 30px 60px -15px rgba(249, 115, 22, 0.25);
          border-color: rgba(249, 115, 22, 0.3);
          transform: scale(1.01);
        }
        
        @media (min-width: 1024px) {
          .card-inner.layout-left {
            flex-direction: row;
          }
          .card-inner.layout-right {
            flex-direction: row-reverse;
          }
          .card-image,
          .card-content {
            flex: 1;
            width: 50%;
          }
        }
        
        @media (max-width: 1023px) {
          .card-inner {
            flex-direction: column !important;
          }
          .card-image,
          .card-content {
            width: 100%;
          }
        }
        
        .card-image {
          position: relative;
          min-height: 320px;
          overflow: hidden;
        }
        
        .image-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 320px;
          overflow: hidden;
        }
        
        .service-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1);
        }
        
        .service-card:hover .service-img {
          transform: scale(1.05);
        }
        
        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(249,115,22,0.1) 0%, rgba(217,119,6,0.05) 100%);
          pointer-events: none;
        }
        
        .card-content {
          display: flex;
          align-items: center;
          padding: 2.5rem;
          background: linear-gradient(135deg, #ffffff 0%, #fef9f0 100%);
        }
        
        .content-inner {
          max-width: 100%;
        }
        
        .category-badge {
          display: inline-block;
          margin-bottom: 1.25rem;
        }
        
        .category-badge span {
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
          color: white;
          padding: 0.4rem 1rem;
          border-radius: 100px;
          display: inline-block;
        }
        
        .service-title {
          font-size: 1.875rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 1rem;
          line-height: 1.3;
        }
        
        @media (min-width: 768px) {
          .service-title {
            font-size: 2.25rem;
          }
        }
        
        .service-description {
          font-size: 1rem;
          color: #334155;
          line-height: 1.6;
          margin-bottom: 1.25rem;
          font-weight: 500;
        }
        
        .service-long-description {
          font-size: 0.95rem;
          color: #475569;
          line-height: 1.6;
          margin-bottom: 1.75rem;
          opacity: 0.85;
        }
        
        .explore-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: transparent;
          color: #ea580c;
          font-weight: 600;
          font-size: 0.9rem;
          padding: 0.6rem 0;
          border: none;
          border-bottom: 2px solid #f97316;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .explore-btn:hover {
          gap: 0.75rem;
          color: #c2410c;
          border-bottom-color: #c2410c;
        }
        
        .btn-arrow {
          width: 1.25rem;
          height: 1.25rem;
          transition: transform 0.3s ease;
        }
        
        .explore-btn:hover .btn-arrow {
          transform: translateX(4px);
        }
      `}</style>
    </motion.div>
  );
}

// ============================================================================
// MAIN SERVICES PAGE COMPONENT
// ============================================================================
export default function ServicesList() {
  const containerRef = useRef(null);
  const [activeService, setActiveService] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center']
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  return (
    <>
      <div ref={containerRef} className="services-page-wrapper">
        {/* Background decorative blobs */}
        <div className="bg-blobs">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
        </div>

        <div className="services-container">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-100px' }}
            className="header-section"
          >
            <div className="section-head center wt-small-separator-outer">
          <div className="wt-small-separator site-text-primary">
            <i className="bi bi-shield-check"></i>
            <div>Our Services</div>
          </div>

          <h2 className="wt-title title_split_anim">Comprehensive Industrial Safety Solutions</h2>
        </div>
            {/* <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="eyebrow"
            >
              <span>Our Capabilities</span>
            </motion.div>

            <h1 className="main-heading">
              Industrial Excellence
              <br />
              <span className="gradient-text">Redefined</span>
            </h1>

            <p className="subheadline">
              Premium solutions engineered for demanding industrial environments. Safety, precision, and quality at every step.
            </p> */}
          </motion.div>

          {/* Services Grid */}
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                onViewportEnter={() => setActiveService(index)}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false, margin: '-200px' }}
              >
                <ServiceCard
                  service={service}
                  index={index}
                  isActive={activeService === index}
                />
              </motion.div>
            ))}
          </div>

          {/* Floating Counter */}
          {/* <motion.div className="floating-counter" style={{ opacity }}>
            <div className="counter-dot"></div>
            <span className="counter-text">
              {String(activeService + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
            </span>
          </motion.div> */}
        </div>
      </div>

      {/* INTERNAL GLOBAL CSS (scoped to this page) */}
      <style>{`
        .services-page-wrapper {
          position: relative;
          min-height: 100vh;
          background: linear-gradient(135deg, #fef9f0 0%, #fffaf5 50%, #f5f3ef 100%);
          padding: 2rem 1rem;
          overflow-x: hidden;
        }
        
        @media (min-width: 640px) {
          .services-page-wrapper {
            padding: 6rem 1.5rem;
          }
        }
        
        @media (min-width: 1024px) {
          .services-page-wrapper {
            padding: 6rem 2rem;
          }
        }
        
        /* Background Blobs */
        .bg-blobs {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
        }
        
        .blob {
          position: absolute;
          width: 32rem;
          height: 32rem;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.12;
          animation: float 12s infinite alternate ease-in-out;
        }
        
        .blob-1 {
          top: 5rem;
          right: -8rem;
          background: radial-gradient(circle, #f97316, #ea580c);
          animation-delay: 0s;
        }
        
        .blob-2 {
          bottom: 5rem;
          left: -8rem;
          background: radial-gradient(circle, #d97706, #b45309);
          animation-delay: -4s;
        }
        
        @keyframes float {
          0% {
            transform: translate(0, 0) scale(1);
          }
          100% {
            transform: translate(40px, 40px) scale(1.1);
          }
        }
        
        /* Container */
        .services-container {
          position: relative;
          z-index: 10;
          max-width: 80rem;
          margin: 0 auto;
        }
        
        /* Header */
        .header-section {
          text-align: center;
          margin-bottom: 8rem;
        }
        
        .eyebrow {
          display: inline-block;
          margin-bottom: 1.5rem;
        }
        
        .eyebrow span {
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #ea580c;
          background: rgba(249, 115, 22, 0.1);
          padding: 0.4rem 1rem;
          border-radius: 100px;
        }
        
        .main-heading {
          font-size: 3rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }
        
        @media (min-width: 768px) {
          .main-heading {
            font-size: 4rem;
          }
        }
        
        @media (min-width: 1024px) {
          .main-heading {
            font-size: 5rem;
          }
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #f97316 0%, #d97706 100%);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }
        
        .subheadline {
          font-size: 1.125rem;
          color: #475569;
          max-width: 48rem;
          margin: 0 auto;
          line-height: 1.6;
        }
        
        @media (min-width: 768px) {
          .subheadline {
            font-size: 1.25rem;
          }
        }
        
        /* Services Grid */
        .services-grid {
          display: flex;
          flex-direction: column;
          gap: 5rem;
        }
        
        /* Floating Counter */
        .floating-counter {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          z-index: 30;
          display: none;
          align-items: center;
          gap: 0.75rem;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(16px);
          border-radius: 100px;
          padding: 0.6rem 1.25rem;
          border: 1px solid rgba(249, 115, 22, 0.2);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
          pointer-events: none;
        }
        
        @media (min-width: 1024px) {
          .floating-counter {
            display: flex;
          }
        }
        
        .counter-dot {
          width: 0.5rem;
          height: 0.5rem;
          background-color: #f97316;
          border-radius: 50%;
          animation: pulse 1.5s infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.4;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
        
        .counter-text {
          font-size: 0.875rem;
          font-weight: 600;
          color: #1e293b;
          letter-spacing: 0.5px;
        }
      `}</style>
    </>
  );
}