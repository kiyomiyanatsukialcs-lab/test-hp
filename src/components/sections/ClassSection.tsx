import ImageSlot from '@/components/ImageSlot';

export default function ClassSection() {
  return (
    <section className="section" id="class">
      <div className="wrap">
        <div className="sec-head" style={{ marginBottom: 'clamp(44px,7vw,90px)' }}>
          <span className="eyebrow" data-reveal="text">
            <span className="idx">06</span> CLASS <span className="ja">体操・音楽教室</span>
          </span>
          <h2 className="section-title" data-reveal="text" data-delay="1">
            体験から、
            <br />
            育つもの。
          </h2>
        </div>

        <div className="class-block">
          <div className="col-img" data-reveal="image">
            <ImageSlot placeholder="体操教室のようす" />
          </div>
          <div className="class-txt">
            <span className="kicker" data-reveal="text">GYMNASTICS</span>
            <h3 data-reveal="text" data-delay="1">体操教室</h3>
            <p className="lead" data-reveal="text" data-delay="2">
              専門講師と一緒に、跳ぶ・転がる・支える。広い空間を存分に使い、自分のからだを思いどおりに動かす喜びを育てます。「できた」の積み重ねが、自信になります。
            </p>
          </div>
        </div>

        <div className="class-block flip">
          <div className="col-img" data-reveal="image">
            <ImageSlot placeholder="リトミックのようす" />
          </div>
          <div className="class-txt">
            <span className="kicker" data-reveal="text">RHYTHMIC</span>
            <h3 data-reveal="text" data-delay="1">リトミック（音楽教室）</h3>
            <p className="lead" data-reveal="text" data-delay="2">
              音を聴き、感じ、からだで表現する。コンクリートの空間によく響く音のなかで、リズム感と表現力、そして集中して耳を澄ます力を養います。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
