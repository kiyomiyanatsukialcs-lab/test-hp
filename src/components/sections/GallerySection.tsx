import ImageSlot from '@/components/ImageSlot';

const IG_CELLS = [
  { likes: 132, comments: 6 },
  { likes: 98, comments: 3 },
  { likes: 210, comments: 12 },
  { likes: 76, comments: 2 },
  { likes: 154, comments: 9 },
  { likes: 188, comments: 5 },
  { likes: 121, comments: 4 },
  { likes: 263, comments: 18 },
];

export default function GallerySection() {
  return (
    <section className="section gallery-sec" id="gallery">
      <div className="wrap">
        <div className="sec-head" style={{ marginBottom: 'clamp(36px,5vw,60px)' }}>
          <span className="eyebrow" data-reveal="text">
            <span className="idx">06</span> GALLERY <span className="ja">日々の記録</span>
          </span>
          <h2 className="section-title" data-reveal="text" data-delay="1">
            DAILY MOMENTS
          </h2>
        </div>

        <div className="ig-head" data-reveal="text">
          <div className="ig-id">
            <div className="ig-avatar">に</div>
            <div>
              <div className="handle">@fujinijiiro</div>
              <div className="meta">投稿 248 ・ フォロワー 1,204 ・ フォロー中 86</div>
            </div>
          </div>
          <a href="#" className="btn ig-follow">
            <span>フォローする</span>
          </a>
        </div>

        <div className="ig-grid">
          {IG_CELLS.map((cell, i) => (
            <div key={i} className="ig-cell">
              <ImageSlot placeholder="日常の一枚" />
              <div className="ov">
                <span>♥ {cell.likes}</span>
                <span>💬 {cell.comments}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="ig-foot">
          <a href="#" className="btn">
            <span>Instagramで見る</span>
            <span className="arr">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
