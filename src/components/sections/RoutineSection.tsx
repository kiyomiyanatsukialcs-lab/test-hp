const TIMELINE = [
  {
    time: '7:00',
    cls: 'tl-open',
    title: 'OPEN ／ 順次登園',
    body: 'おはよう。今日の天気と、今日の自分の気分から一日がはじまります。',
  },
  {
    time: '9:30',
    cls: '',
    title: '自由時間・あそび',
    body: '遊びたいものを、遊びたいだけ。空間が広いから、ひとりの世界も、みんなの世界も尊重されます。',
    note: '— 知育玩具はドイツ・北欧からの輸入品を中心に厳選。',
  },
  {
    time: '11:30',
    cls: '',
    title: 'お昼ごはん',
    body: '園内の厨房でつくる、できたての手作り給食。',
    note: '— 国産食材・出汁から手づくり。アレルギーは個別に対応します。',
  },
  {
    time: '13:00',
    cls: '',
    title: 'お昼寝',
    body: '静かな光のなかで、ぐっすりと。',
    note: '— 通気性にこだわった輸入ベッド「BREEZE」を採用。',
  },
  {
    time: '15:00',
    cls: '',
    title: 'おやつ',
    body: '手づくりのおやつで、午後のエネルギーをチャージ。',
  },
  {
    time: '18:00',
    cls: 'tl-close',
    title: 'CLOSE ／ 順次降園',
    body: 'また明日。一日の小さな発見を、おうちへ持ち帰ります。',
  },
];

export default function RoutineSection() {
  return (
    <section className="section" id="routine">
      <div className="wrap">
        <div className="routine-grid">
          <div className="sec-head">
            <span className="eyebrow" data-reveal="text">
              <span className="idx">04</span> ROUTINE <span className="ja">一日の流れ</span>
            </span>
            <h2 className="section-title" data-reveal="text" data-delay="1">
              一日の流れ
            </h2>
            <p className="lead" data-reveal="text" data-delay="2">
              7:00の開園から18:00の降園まで。
              決められたカリキュラムではなく、こどものリズムに寄り添う時間が流れます。
            </p>
          </div>
          <div className="timeline">
            {TIMELINE.map((item) => (
              <div
                key={item.time}
                className={`tl-item${item.cls ? ` ${item.cls}` : ''}`}
                data-reveal="text"
              >
                <div className="tl-time">{item.time}</div>
                <div className="tl-body">
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                  {item.note && <p className="note">{item.note}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
