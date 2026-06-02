'use client';
import { useState } from 'react';

type Errors = { name?: boolean; email?: boolean; tel?: boolean };

export default function ContactForm() {
  const [purpose, setPurpose] = useState('見学');
  const [errors, setErrors] = useState<Errors>({});
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const get = (name: string) =>
      (form.elements.namedItem(name) as HTMLInputElement)?.value.trim() ?? '';

    const newErrors: Errors = {};
    if (!get('name')) newErrors.name = true;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(get('email'))) newErrors.email = true;
    if (!get('tel')) newErrors.tel = true;

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) setSuccess(true);
  };

  if (success) {
    return (
      <div className="form-success show">
        <span className="ico">THANK YOU</span>
        <h3>お申し込みを受け付けました。</h3>
        <p>
          担当者より、ご入力のメールアドレス宛に折り返しご連絡いたします。今しばらくお待ちくださいませ。
        </p>
        <div className="spectrum-line" />
      </div>
    );
  }

  return (
    <form id="visitForm" onSubmit={handleSubmit} noValidate>
      <div className="field">
        <label>
          ご希望の内容<span className="req">required</span>
        </label>
        <div className="radio-set" id="purposeSet">
          {['見学', '資料請求', 'その他のご相談'].map((val) => (
            <label key={val} className={purpose === val ? 'on' : ''}>
              <input
                type="radio"
                name="purpose"
                value={val}
                checked={purpose === val}
                onChange={() => setPurpose(val)}
              />
              <span>
                {val === '見学' ? '見学を申し込む' : val === '資料請求' ? '資料を請求する' : val}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="field-row">
        <div className={`field${errors.name ? ' invalid' : ''}`}>
          <label htmlFor="name">
            保護者氏名<span className="req">required</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="富士 花子"
            onChange={() => setErrors((e) => ({ ...e, name: false }))}
          />
          <div className="err">お名前をご入力ください。</div>
        </div>
        <div className="field">
          <label htmlFor="kana">ふりがな</label>
          <input type="text" id="kana" name="kana" placeholder="ふじ はなこ" />
          <div className="err" />
        </div>
      </div>

      <div className="field-row">
        <div className={`field${errors.email ? ' invalid' : ''}`}>
          <label htmlFor="email">
            メールアドレス<span className="req">required</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@mail.com"
            onChange={() => setErrors((e) => ({ ...e, email: false }))}
          />
          <div className="err">正しいメールアドレスをご入力ください。</div>
        </div>
        <div className={`field${errors.tel ? ' invalid' : ''}`}>
          <label htmlFor="tel">
            電話番号<span className="req">required</span>
          </label>
          <input
            type="tel"
            id="tel"
            name="tel"
            placeholder="000-0000-0000"
            onChange={() => setErrors((e) => ({ ...e, tel: false }))}
          />
          <div className="err">電話番号をご入力ください。</div>
        </div>
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="childage">お子さまの年齢</label>
          <select id="childage" name="childage">
            <option value="">選択してください</option>
            {['0歳', '1歳', '2歳', '3歳', '4歳', '5歳', '未定・妊娠中'].map((v) => (
              <option key={v}>{v}</option>
            ))}
          </select>
          <div className="err" />
        </div>
        <div className="field">
          <label htmlFor="visitdate">ご希望日（見学の場合）</label>
          <input type="date" id="visitdate" name="visitdate" />
          <div className="err" />
        </div>
      </div>

      <div className="field">
        <label htmlFor="message">ご質問・ご要望</label>
        <textarea
          id="message"
          name="message"
          placeholder="アレルギーのご相談、ご希望の見学時間帯など、お気軽にお書きください。"
        />
        <div className="err" />
      </div>

      <div className="submit-row">
        <button type="submit" className="btn">
          <span>この内容で申し込む</span>
          <span className="arr">→</span>
        </button>
        <span className="note">＊ 通常2営業日以内にご返信いたします。</span>
      </div>
    </form>
  );
}
