'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = [
  { n: '01', label: 'OVERVIEW', ja: '概要', hash: '#overview' },
  { n: '02', label: 'NEWS', ja: 'お知らせ', hash: '#news' },
  { n: '03', label: 'SPACE', ja: '空間', hash: '#space' },
  { n: '04', label: 'ROUTINE', ja: '一日の流れ', hash: '#routine' },
  { n: '05', label: 'CONCEPT', ja: '保育理念', hash: '#concept' },
  { n: '06', label: 'CLASS', ja: '教室', hash: '#class' },
  { n: '07', label: 'GALLERY', ja: '日々の記録', hash: '#gallery' },
  { n: '08', label: 'FAQ', ja: 'よくある質問', hash: '#faq' },
  { n: '09', label: 'ACCESS', ja: 'アクセス', hash: '#access' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [atTop, setAtTop] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const hero = document.getElementById('overview');
    if (!hero) {
      setScrolled(true);
      setAtTop(false);
      return;
    }

    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setAtTop(y < hero.offsetHeight - 90);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
  }, [menuOpen]);

  const scrollTo = (hash: string) => {
    const target = document.querySelector(hash);
    if (!target) return;
    const top = target.getBoundingClientRect().top + window.scrollY + 32;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (!isHome) return;
    e.preventDefault();
    scrollTo(hash);
    setMenuOpen(false);
  };

  const getHref = (hash: string) => (isHome ? hash : `/${hash}`);

  const headerClass = [
    'site-header',
    scrolled ? 'scrolled' : '',
    atTop ? 'at-top' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <>
      <header className={headerClass} id="header">
        <div className="header-inner">
          <Link
            className="logo"
            href={isHome ? '#overview' : '/'}
            onClick={(e) => isHome && handleAnchorClick(e, '#overview')}
            aria-label="富士にじいろ保育園 トップへ"
          >
            <span className="ja">富士にじいろ保育園</span>
            <span className="en">FUJI NIJIIRO NURSERY</span>
          </Link>
          <nav className="nav" aria-label="メインナビゲーション">
            <ul className="nav-list">
              {NAV_ITEMS.map((item) => (
                <li key={item.n}>
                  <a
                    href={getHref(item.hash)}
                    onClick={(e) => handleAnchorClick(e, item.hash)}
                  >
                    <span className="n">{item.n}</span>
                    <span className="lbl">
                      {item.label}
                      <span className="ja">{item.ja}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn header-cta desk">
              <span>見学申込</span>
            </Link>
            <button
              className="menu-toggle"
              id="menuToggle"
              aria-label="メニューを開く"
              aria-expanded={menuOpen ? 'true' : 'false'}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </nav>
        </div>
      </header>

      <div className="mobile-menu" id="mobileMenu">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.n}
            href={getHref(item.hash)}
            onClick={(e) => handleAnchorClick(e, item.hash)}
          >
            <span className="n">{item.n}</span>
            {item.label}
          </a>
        ))}
        <Link href="/contact" className="btn" onClick={() => setMenuOpen(false)}>
          <span>見学を申し込む</span>
        </Link>
      </div>
    </>
  );
}
