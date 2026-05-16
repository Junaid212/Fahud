const stats = [
  { count: '2022', label: 'Years Established' },
  { count: '26', label: 'Projects Completed' },
  { count: '3', label: 'Countries Available' },
  { count: '4', label: 'Certifications' },
];

export default function CounterSection() {
  return (
    <div
      className="section-full counter-outer-one-wrap p-t120 p-b90"
      style={{ backgroundImage: 'url(${process.env.NODE_ENV === "production" ? "/Fahud" : ""}/images/background/count-bg.jpg)' }}
    >
      <div className="container">
        <div className="row">
          {stats.map((stat, i) => (
            <div key={i} className="col-lg-3 col-md-3 col-3 m-b30">
              <div className="counter-outer-one">
                <span className="counter">{stat.count}</span>
                <div className="icon-content-info">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
