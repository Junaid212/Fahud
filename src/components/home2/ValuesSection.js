const values = [
  { num: '01', title: 'Design for Sustainability', bg: 'pic1.jpg', desc: 'When designing a mattress for the best in the world, we needed to think outside the box. We focused on muscle recovery through better blood circulation, joint alignment and positioning by creating new materials and cognitive performance through temperature regulation and comfort.' },
  { num: '02', title: 'Honesty & Integrity', bg: 'pic2.jpg', desc: "Why is Rich eating blueberries? He loves blueberries and we captured this image of him fueling up for the day after getting a greats night's sleep. We wanted to design a mattress that allowed you to train hard and recovery fast." },
  { num: '03', title: 'Innovative Design', bg: 'pic3.jpg', desc: 'Our team has developed some of the most technologically advanced materials ever created for a mattress. We set out with a goal of creating the best mattress for Rich and in turn developed the most advanced mattress anyone has ever seen.' },
  { num: '04', title: 'Attention to Details', bg: 'pic4.jpg', desc: "It wasn't too long ago that you had to strap a mattress to the roof of your car. We're all glad those days are over, and you no longer need to worry about buyers remorse. If for any reason you don't love your HIBR we'll pick it up and refund your money." },
  { num: '05', title: 'Experienced Team', bg: 'pic5.jpg', desc: "It wasn't too long ago that you had to strap a mattress to the roof of your car. We're all glad those days are over, and you no longer need to worry about buyers remorse. If for any reason you don't love your HIBR we'll pick it up and refund your money." },
  { num: '06', title: 'Quality Craftsmanship', bg: 'pic6.jpg', desc: "It wasn't too long ago that you had to strap a mattress to the roof of your car. We're all glad those days are over, and you no longer need to worry about buyers remorse. If for any reason you don't love your HIBR we'll pick it up and refund your money." },
];

export default function ValuesSection() {
  return (
    <div className="twm-acd-st-1">
      <div className="acd-bx" data-background="/images/acd-bg/pic1.jpg">
        <div className="twm-acd-overlay"></div>
        {values.map((v, i) => (
          <article key={i} className="section" data-background={`/images/acd-bg/${v.bg}`}>
            <span className="close">
              <span className="cross">
                <span className="a"></span>
                <span className="b"></span>
              </span>
            </span>
            <h2 className="heading">
              <span className="above">{v.num}</span>
              {v.title}
              <span className="below">+</span>
            </h2>
            <div className="inside-content">{v.desc}</div>
          </article>
        ))}
      </div>
    </div>
  );
}
