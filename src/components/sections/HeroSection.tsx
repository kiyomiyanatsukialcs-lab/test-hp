import Link from 'next/link';
import ImageSlot from '@/components/ImageSlot';

export default function HeroSection() {
  return (
    <section className="hero" id="overview">
      <ImageSlot placeholder="外観・内観の大型写真（コンクリート・光・高い天井）" />
      <div className="scrim" />
      <div className="hero-mark">
        <span className="bar" />
        01 &nbsp;OVERVIEW &nbsp;／&nbsp; 概要
      </div>
      <div className="hero-content">
        <h1 className="display" data-reveal="text">
          静かで、
          <br />
          自由な場所。
        </h1>
        <p className="lead" data-reveal="text" data-delay="1">
          富士にじいろ保育園は、建築の美しさとともに、
          <br />
          一人ひとりの可能性が育つ場所です。
        </p>
        <div className="hero-ctas" data-reveal="text" data-delay="2">
          <Link href="/contact" className="btn btn--light">
            <span>見学を申し込む</span>
            <span className="arr">→</span>
          </Link>
          <a href="#concept" className="btn btn--light">
            <span>園について知る</span>
          </a>
        </div>
      </div>
      <div className="scroll-cue">
        SCROLL
        <div className="track" />
      </div>
    </section>
  );
}
