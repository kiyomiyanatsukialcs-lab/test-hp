const CONCEPTS = [
  {
    n: '01',
    title: '小規模だから、\nひとりひとり。',
    body: '定員を絞った小規模保育。保育者の目が一人ひとりに行き届き、その日の小さな変化にも気づける環境です。',
  },
  {
    n: '02',
    title: 'スタッフの\n能力向上。',
    body: '継続的な研修と学び合いを通じて、保育の質を高め続けます。大人が学ぶ姿が、こどもの学びの土台になります。',
  },
  {
    n: '03',
    title: '安心・安全・\n清潔。',
    body: '美しい空間は、行き届いた衛生管理の上に成り立ちます。毎日の清掃と安全点検を、当たり前の習慣として。',
  },
  {
    n: '04',
    title: '体操・\n音楽教室。',
    body: '専門講師による体操とリトミック。からだとリズムの体験が、感性と自己表現の幅を広げます。',
  },
  {
    n: '05',
    title: '手作り給食。',
    body: '園内厨房で、出汁から手づくり。「おいしい」の記憶が、こころとからだを育てます。',
  },
];

export default function ConceptSection() {
  return (
    <section className="section" id="concept">
      <div className="wrap">
        <div className="sec-head" style={{ marginBottom: 'clamp(40px,6vw,72px)' }}>
          <span className="eyebrow" data-reveal="text">
            <span className="idx">04</span> CONCEPT <span className="ja">保育理念</span>
          </span>
          <h2 className="section-title" data-reveal="text" data-delay="1">
            わたしたちが、
            <br />
            大切にしていること。
          </h2>
        </div>
        <div className="concept-list">
          {CONCEPTS.map((item) => (
            <div key={item.n} className="concept-row" data-reveal="text">
              <div className="cn">{item.n}</div>
              <h3>{item.title.split('\n').map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
