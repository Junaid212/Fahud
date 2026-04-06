const categories = [
  'Interior', 'Architecture', 'Modern', 'Construction',
  'Villa', 'Bathroom', 'Living Room', 'Furniture & Decoration', 'Floor Plan'
];

const SpinIcon = () => (
  <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
    <circle
      className="spin2"
      cx="400" cy="400" fill="none"
      r="200" strokeWidth="50" stroke="#E387FF"
      strokeDasharray="700 1400"
      strokeLinecap="round"
    />
  </svg>
);

export default function CategoryCarousel() {
  return (
    <div className="section-full twm-category-carousal2-area">
      <div className="owl-carousel twm-category-carousal-slider">
        {categories.map((name, i) => (
          <div key={i} className="item">
            <div className="twm_category_bx cursor-scale wow fadeInDown" data-wow-duration="1000ms">
              <span className="ao-our-categori-icon">
                <SpinIcon />
              </span>
              <div className="twm-category-name">{name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
