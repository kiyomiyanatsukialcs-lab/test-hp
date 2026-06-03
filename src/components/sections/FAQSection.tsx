'use client';
import { useRef, useState } from 'react';
import Link from 'next/link';

const FAQS = [
  {
    q: '見学はいつできますか？',
    a: '平日10:00〜16:00を中心に、随時お受けしています。お子さまの過ごす雰囲気を感じていただけるよう、午前中の活動時間帯がおすすめです。お問い合わせページまたはお電話よりご予約ください。',
  },
  {
    q: '給食はアレルギー対応できますか？',
    a: 'はい。園内厨房で手づくりしているため、医師の指示書をもとに、除去食・代替食を個別に対応いたします。入園前の面談で詳しくお伺いします。',
  },
  {
    q: '定員は何人ですか？',
    a: '一人ひとりに目が届く小規模保育として運営しています。年齢ごとの空き状況は時期により変動しますので、最新の受け入れ状況は個別にご案内いたします。',
  },
  {
    q: '保育時間と延長保育について教えてください。',
    a: '開園は7:00、降園は18:00です。延長保育のご相談も承っております。ご家庭の状況に合わせてご案内いたしますので、お気軽にご相談ください。',
  },
  {
    q: '体操・音楽教室は別料金ですか？',
    a: '体操教室・リトミックは通常の保育プログラムに含まれており、追加の費用はかかりません。専門講師が定期的に来園します。',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const answerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section className="section" id="faq">
      <div className="wrap">
        <div className="faq-grid">
          <div className="sec-head">
            <span className="eyebrow" data-reveal="text">
              <span className="idx">08</span> FAQ <span className="ja">よくあるご質問</span>
            </span>
            <h2 className="section-title" data-reveal="text" data-delay="1">
              よくある
              <br />
              ご質問
            </h2>
            <p className="lead" data-reveal="text" data-delay="2">
              こちらに掲載のないご質問も、見学時やお電話でお気軽にお尋ねください。
            </p>
          </div>
          <div className="faq-list">
            {FAQS.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={i} className={`faq-item${isOpen ? ' open' : ''}`}>
                  <button className="faq-q" onClick={() => toggle(i)}>
                    <span className="qn">Q{i + 1}</span>
                    {faq.q}
                    <span className="ic" />
                  </button>
                  <div
                    className="faq-a"
                    style={{
                      maxHeight: isOpen
                        ? `${answerRefs.current[i]?.scrollHeight ?? 0}px`
                        : '0',
                    }}
                  >
                    <div
                      className="faq-a-inner"
                      ref={(el) => {
                        answerRefs.current[i] = el;
                      }}
                    >
                      {faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
