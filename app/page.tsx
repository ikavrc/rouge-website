import Image from "next/image";
import CastSection from "@/components/CastSection";

const navItems = [
  { label: "OFFICIAL LINKS", href: "#schedule" },
  { label: "ABOUT", href: "#about" },
  { label: "GUIDE", href: "#guide" },
  { label: "CAST", href: "#cast" },
];

export default function Home() {
  return (
    <main className="site-main">
      <header className="site-header">
        <a href="#top" className="header-logo">
          Rouge
        </a>

        <nav className="header-nav">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section id="top" className="hero">
        <div className="hero-bg" />
        <div className="hero-glow glow-one" />
        <div className="hero-glow glow-two" />

        <div className="hero-content">
          <Image
            src="/logo.png"
            alt="Rouge"
            width={620}
            height={620}
            priority
            className="hero-logo"
          />

          <p className="hero-subtitle">VIRTUAL CABARET CLUB</p>
          <h1>すべての夜に、特別な彩りを。</h1>
          <p className="hero-text">
            VRChatで出会う、上質な会話と特別なひととき。
          </p>

          <div className="hero-buttons">
            <a href="#schedule" className="button-primary">
              OFFICIAL LINKS
            </a>
            <a href="#cast" className="button-secondary">
              CAST
            </a>
          </div>
        </div>
      </section>

      <section id="schedule" className="section">
        <div className="glass-card official-card">
          <p className="section-label">OFFICIAL</p>
          <h2>Official Links</h2>

          <p className="note">
            営業告知・本日の出勤・イベント情報はこちらからご確認いただけます。
          </p>

          <div className="official-grid">
            <a
              href="https://x.com/VRC_Rouge"
              target="_blank"
              rel="noreferrer"
              className="official-item"
            >
              <h3>𝕏 Official</h3>
              <p>営業情報・出勤情報・イベント告知など最新情報はこちら</p>
            </a>

            <a
              href="https://vrc.group/ROUGE.7499"
              target="_blank"
              rel="noreferrer"
              className="official-item"
            >
              <h3>VRChat Group</h3>
              <p>グループ参加・通知・営業案内はこちらから</p>
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="section about-section">
        <div className="glass-card about-card">
          <p className="section-label">ABOUT</p>
          <h2>Rougeとは</h2>

          <p className="about-lead">
            VRChatで出会う、上質な会話と特別なひととき。
          </p>

          <p>
            Rougeは、キャストとの会話を通して、
            日常とは少し違う特別な夜をお楽しみいただける
            キャバクラ風イベントです。
          </p>

          <p>
            初めての方にも安心して過ごしていただけるよう、
            落ち着いた空間づくりと丁寧なご案内を大切にしています。
          </p>
        </div>
      </section>

      <section id="guide" className="section guide-section">
        <div className="glass-card guide-card">
          <p className="section-label">GUIDE</p>
          <h2>初めての方へ</h2>
          <p className="guide-lead">
            ご来店前に、参加方法とお客様へのお願いをご確認ください。
          </p>

          <div className="guide-grid">
            <div className="guide-box">
              <h3>参加方法</h3>
              <ol>
                <li>公式Xの営業告知をご確認ください。</li>
                <li>インスタンスリーダーは公式Xのポストをご確認ください。</li>
                <li>各インスタンスリーダーへフレンド申請をお願いします。</li>
                <li>
                  営業時間になりましたら対象インスタンスへリクエスト招待
                  （リクイン）を送ってください。
                </li>
                <li>
                  2インスタンス営業の場合は、どちらか片方のインスタンスのみに
                  リクインしてください。
                </li>
                <li>
                  両方のインスタンスへリクインした場合は、参加を無効とさせていただきます。
                </li>
              </ol>
            </div>

            <div className="guide-box guide-rules">
              <h3>お客様へのお願い</h3>
              <ul>
                <li>アバター容量は35MB以下。</li>
                <li>イベント中のアバター変更はお控えください。</li>
                <li>
                  18歳未満、および18歳以上でも高校生の方はご参加いただけません。
                </li>
                <li>
                  人外アバターでのご来店はご遠慮ください。
                  （例：全身機械・ケモノなど）
                </li>
                <li>
                  著作権を侵害するもの、過度なパーティクル、BGM、
                  公序良俗に反するアバターは禁止しています。
                </li>
                <li>
                  肌の露出が極端に多いアバターは、
                  運営より変更をお願いする場合があります。
                </li>
                <li>
                  キャストへのフレンド申請、セクハラ行為、
                  お客様からのボディタッチは禁止しています。
                </li>
                <li>他のお客様やスタッフへの迷惑行為はおやめください。</li>
                <li>その他、不適切な行為は禁止しています。</li>
                <li>スムーズなご案内・運営へのご協力をお願いいたします。</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CastSection />

      <footer className="site-footer">
        <p>Rouge</p>
        <span>Virtual Cabaret Club</span>
      </footer>
    </main>
  );
}