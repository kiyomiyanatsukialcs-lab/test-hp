import Link from 'next/link';

const NAV_ITEMS = [
  { n: '01', label: 'OVERVIEW', hash: '#overview' },
  { n: '02', label: 'NEWS', hash: '#news' },
  { n: '03', label: 'SPACE', hash: '#space' },
  { n: '04', label: 'ROUTINE', hash: '#routine' },
  { n: '05', label: 'CONCEPT', hash: '#concept' },
  { n: '06', label: 'CLASS', hash: '#class' },
  { n: '07', label: 'GALLERY', hash: '#gallery' },
  { n: '08', label: 'FAQ', hash: '#faq' },
  { n: '09', label: 'ACCESS', hash: '#access' },
];

const RIBBON_COLORS = ['#e15b5b', '#e0a14a', '#d9cf57', '#5bb673', '#4a8fd0', '#7d6bd0'];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-logo">
            <div className="ja">富士にじいろ保育園</div>
            <div className="en">FUJI NIJIIRO NURSERY</div>
            <div className="addr">
              〒417-0001 静岡県富士市蓼原186-29
              <br />
              TEL 0545-64-6410 ／ FAX 0545-64-6411
            </div>
          </div>
          <nav className="footer-nav" aria-label="フッターナビゲーション">
            {NAV_ITEMS.map((item) => (
              <Link key={item.n} href={`/${item.hash}`}>
                <span className="n">{item.n}</span>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="footer-bottom">
          <span>Copyright 2026 © Fuji-Nijiiro All Rights Reserved.</span>
          <span className="ribbon">
            {RIBBON_COLORS.map((color) => (
              <i key={color} style={{ background: color }} />
            ))}
          </span>
        </div>
      </div>
    </footer>
  );
}
