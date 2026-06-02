'use client';
import { useEffect, useRef } from 'react';
import ImageSlot from '@/components/ImageSlot';

const RAIL_ITEMS = [
  { id: '01', placeholder: 'コンクリート壁とカプラ', caption: 'おしゃれな空間の中に、カプラや知育玩具がぽつんと置かれている。' },
  { id: '02', placeholder: '光の差し込むホール', caption: '朝の光が床に長い影を落とす、開園前の静かなホール。' },
  { id: '03', placeholder: '絵本コーナー', caption: '無垢材の棚に、背表紙だけが小さな彩りを添える絵本コーナー。' },
  { id: '04', placeholder: 'アトリエスペース', caption: 'こどもの手が届く高さに整えられた、自由なアトリエ。' },
];

export default function SpaceSection() {
  const railRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    let down = false;
    let startX = 0;
    let startScroll = 0;
    let moved = false;

    const onDown = (e: PointerEvent) => {
      down = true;
      moved = false;
      startX = e.clientX;
      startScroll = rail.scrollLeft;
      rail.style.cursor = 'grabbing';
    };
    const onUp = () => {
      down = false;
      rail.style.cursor = '';
    };
    const onMove = (e: PointerEvent) => {
      if (!down) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 3) moved = true;
      rail.scrollLeft = startScroll - dx;
    };
    const onClick = (e: MouseEvent) => {
      if (moved) e.preventDefault();
    };

    rail.addEventListener('pointerdown', onDown);
    window.addEventListener('pointerup', onUp);
    rail.addEventListener('pointermove', onMove);
    rail.addEventListener('click', onClick, true);

    return () => {
      rail.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointerup', onUp);
      rail.removeEventListener('pointermove', onMove);
      rail.removeEventListener('click', onClick, true);
    };
  }, []);

  return (
    <section className="section" id="space">
      <div className="wrap">
        <div className="space-intro">
          <div className="col-txt">
            <span className="eyebrow" data-reveal="text">
              <span className="idx">02</span> SPACE <span className="ja">空間</span>
            </span>
            <h2 className="section-title" data-reveal="text" data-delay="1">
              余白が、
              <br />
              主役を選ぶ。
            </h2>
            <p className="lead" data-reveal="text" data-delay="2">
              高い天井、磨かれたコンクリート、整然と差し込む光。
              それは完成された静けさではなく、これから何かが生まれるための余白です。
            </p>
          </div>
          <div className="col-img" data-reveal="image">
            <ImageSlot placeholder="高い天井のある内観" />
          </div>
        </div>
      </div>

      <div className="rail-hint">
        <span>SLIDE →</span>
        <span className="bar" />
      </div>
      <div className="gallery-rail-wrap">
        <div className="gallery-rail" ref={railRef} id="spaceRail">
          {RAIL_ITEMS.map((item) => (
            <div key={item.id} className="rail-item tall">
              <ImageSlot placeholder={item.placeholder} />
              <div className="rail-cap">
                <span className="n">{item.id}</span>
                <p>{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="wrap">
        <div className="space-message" data-reveal="text">
          <p className="big">
            無機質な空間だからこそ、
            <br />
            こどもの<em>色彩</em>と<em>発想</em>が、
            <br />
            主役になる。
          </p>
        </div>
      </div>
    </section>
  );
}
