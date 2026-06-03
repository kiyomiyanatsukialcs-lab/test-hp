'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function AccessSection() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mapMock = mapRef.current;
    if (!mapMock) return;

    const pin = mapMock.querySelector<HTMLElement>('.map-pin');

    const onScroll = () => {
      const r = mapMock.getBoundingClientRect();
      if (r.bottom < 0 || r.top > window.innerHeight) return;
      const prog = 1 - (r.top + r.height) / (window.innerHeight + r.height);
      if (pin) {
        pin.style.transform = `translate(-50%, calc(-100% + ${(6 - prog * 12).toFixed(1)}px))`;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="section" id="access">
      <div className="wrap">
        <div className="sec-head" style={{ marginBottom: 'clamp(40px,5vw,64px)' }}>
          <span className="eyebrow" data-reveal="text">
            <span className="idx">09</span> ACCESS <span className="ja">アクセス・お問い合わせ</span>
          </span>
          <h2 className="section-title" data-reveal="text" data-delay="1">
            アクセス・
            <br />
            お問い合わせ
          </h2>
        </div>
        <div className="access-grid">
          <div className="map-mock" data-reveal="image" ref={mapRef} id="mapMock">
            <svg
              className="roads"
              viewBox="0 0 800 460"
              preserveAspectRatio="xMidYMid slice"
              aria-hidden="true"
            >
              <rect width="800" height="460" fill="#E9EAEC" />
              <g stroke="#fff" strokeWidth="14" fill="none" opacity="0.95">
                <path d="M-20 150 L820 120" />
                <path d="M-20 320 L820 360" />
                <path d="M260 -20 L300 480" />
                <path d="M560 -20 L520 480" />
              </g>
              <g stroke="#fff" strokeWidth="5" fill="none" opacity="0.8">
                <path d="M-20 235 L820 245" />
                <path d="M120 -20 L130 480" />
                <path d="M690 -20 L700 480" />
              </g>
              <g fill="#dfe0e3">
                <rect x="40" y="40" width="150" height="80" />
                <rect x="330" y="30" width="150" height="70" />
                <rect x="600" y="50" width="150" height="60" />
                <rect x="340" y="280" width="140" height="120" />
                <rect x="50" y="360" width="120" height="80" />
                <rect x="600" y="290" width="150" height="120" />
              </g>
              <rect
                x="335"
                y="160"
                width="150"
                height="120"
                fill="#d6e0ee"
                stroke="#1A4B8B"
                strokeWidth="1.5"
                opacity="0.6"
              />
            </svg>
            <div className="map-pin">
              <div className="lbl">富士にじいろ保育園</div>
              <div className="dot" />
            </div>
            <div className="badge">MAP — 静岡県富士市蓼原186-29</div>
          </div>
          <div className="access-info">
            <div className="info-row">
              <div className="k">Address</div>
              <div className="v">
                〒417-0001
                <br />
                静岡県富士市蓼原186-29
              </div>
            </div>
            <div className="info-row">
              <div className="k">Tel</div>
              <div className="v tel">0545-64-6410</div>
            </div>
            <div className="info-row">
              <div className="k">Fax</div>
              <div className="v">0545-64-6411</div>
            </div>
            <div className="info-row">
              <div className="k">Open</div>
              <div className="v">7:00 — 18:00（月〜土）</div>
            </div>
            <Link href="/contact" className="btn">
              <span>見学を申し込む</span>
              <span className="arr">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
