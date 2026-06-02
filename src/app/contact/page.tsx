import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollRevealInit from '@/components/ScrollRevealInit';
import ImageSlot from '@/components/ImageSlot';
import ContactForm from '@/components/ContactForm';
import './contact.css';

export const metadata: Metadata = {
  title: '見学申込・お問い合わせ',
  description: '富士にじいろ保育園の見学申込・お問い合わせフォーム。',
};

export default function ContactPage() {
  return (
    <>
      <ScrollRevealInit />
      <Header />
      <main className="contact-main">
        <div className="wrap">
          <Link href="/" className="back-link" data-reveal="text">
            ← BACK TO HOME
          </Link>

          <div className="contact-hero">
            <div className="col-txt">
              <span className="eyebrow" data-reveal="text">
                <span className="idx">—</span> VISIT &amp; CONTACT
              </span>
              <h1
                className="display"
                data-reveal="text"
                data-delay="1"
                style={{ fontSize: 'clamp(32px,5vw,68px)' }}
              >
                見学の
                <br />
                お申し込み
              </h1>
              <p className="lead" data-reveal="text" data-delay="2">
                写真や言葉では伝えきれない、この場所の静けさと、こどもたちの表情を。
                まずは一度、ご自身の目で確かめにいらしてください。
              </p>
            </div>
            <div className="col-img" data-reveal="image">
              <ImageSlot placeholder="園内の写真" />
            </div>
          </div>

          <section id="form" className="form-section">
            <div className="form-grid">
              <aside className="form-aside" data-reveal="text">
                <div className="info-row">
                  <div className="k">Tel</div>
                  <div className="v tel">0545-64-6410</div>
                </div>
                <div className="info-row">
                  <div className="k">Open</div>
                  <div className="v">7:00 — 18:00（月〜土）</div>
                </div>
                <div className="info-row">
                  <div className="k">Address</div>
                  <div className="v" style={{ fontSize: '14px' }}>
                    〒417-0001
                    <br />
                    静岡県富士市蓼原186-29
                  </div>
                </div>
                <p className="form-side-note">
                  お電話でのお申し込み・ご相談も承っております。受付時間内にお気軽にご連絡ください。担当者より折り返しご連絡いたします。
                </p>
              </aside>
              <div className="form-body">
                <ContactForm />
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
