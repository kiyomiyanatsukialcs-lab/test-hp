'use client';
import { useEffect, useRef } from 'react';

export type NewsArticle = {
  id: string;
  title: string;
  body: string;
  publishedAt: string;
};

type Props = {
  articles: NewsArticle[];
};

export default function NewsSection({ articles }: Props) {
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
    <section className="section" id="news">
      <div className="wrap">
        <div className="sec-head" style={{ marginBottom: 'clamp(20px,3vw,40px)' }}>
          <span className="eyebrow" data-reveal="text">
            <span className="idx">02</span> NEWS <span className="ja">お知らせ</span>
          </span>
          <h2 className="section-title" data-reveal="text" data-delay="1">
            お知らせ
          </h2>
        </div>
      </div>

      {articles.length === 0 ? (
        <div className="wrap">
          <p style={{ color: 'var(--ink-45)', fontSize: 14, letterSpacing: '0.06em' }}>
            現在、お知らせはありません。
          </p>
        </div>
      ) : (
        <>
          <div className="rail-hint">
            <span>SLIDE →</span>
            <span className="bar" />
          </div>
          <div className="gallery-rail-wrap">
            <div className="gallery-rail" ref={railRef}>
              {articles.map((article) => (
                <div key={article.id} className="rail-item news-rail-item">
                  <time dateTime={article.publishedAt} className="news-date">
                    {new Date(article.publishedAt).toLocaleDateString('ja-JP', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  <p className="news-title">{article.title}</p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </section>
  );
}
