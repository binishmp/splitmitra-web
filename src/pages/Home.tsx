import { FAQS, PRICES, SITE } from '../content';
import { Page, PlayButton } from '../Layout';

const svg = (d: string) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" dangerouslySetInnerHTML={{ __html: d }} />;
const ICONS = {
  plus: '<path d="M12 5v14"/><path d="M5 12h14"/>',
  phone: '<rect x="6" y="2" width="12" height="20" rx="3"/><path d="M11 18h2"/>',
  swap: '<path d="M4 7h10"/><path d="M10 3l4 4-4 4"/><path d="M20 17H10"/><path d="M14 13l-4 4 4 4"/>',
  lang: '<path d="M4 5h9"/><path d="M8 3v2"/><path d="M6 5c0 4 3 7 6 8"/><path d="M11 5c-1 4-4 7-7 8"/><path d="M13 21l4-10 4 10"/><path d="M14.5 17h5"/>',
  lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/>',
  scan: '<path d="M4 8V5a1 1 0 011-1h3"/><path d="M16 4h3a1 1 0 011 1v3"/><path d="M20 16v3a1 1 0 01-1 1h-3"/><path d="M8 20H5a1 1 0 01-1-1v-3"/><path d="M8 12h8"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c3 3 3 15 0 18"/><path d="M12 3c-3 3-3 15 0 18"/>',
};

const FEATURES: [keyof typeof ICONS, boolean, string, string][] = [
  ['plus', false, 'Add, split, done', 'Split equally, by exact amounts, by percent or by shares. Every split adds up to the last paisa.'],
  ['phone', true, 'Settle up with UPI', 'Tap Pay and your UPI app opens with the amount ready. Come back, tap Paid, and the balance updates.'],
  ['swap', false, 'Fewer payments', 'Simplify debts turns a tangle of small debts into the fewest payments, with the same totals.'],
  ['lang', true, 'In your language', 'English, Malayalam, Tamil and Hindi. Each person in a group picks their own.'],
  ['lock', false, 'Admins and locked trips', 'Admins control who can delete. Lock a finished trip so nothing changes, and see a log of every edit.'],
  ['scan', true, 'Scan a bill', "Point your camera at a bill. The shop, date and total are read on your phone, and you check them before saving."],
];

export default function Home() {
  return (
    <Page home>
      <section className="hero" id="top">
        <div className="wrap">
          <div className="hero-text">
            <span className="tag">Free · No ads · No daily limits</span>
            <h1>Split bills with friends.<br /><em>Settle up with UPI.</em></h1>
            <p className="lead">Add every expense on a trip, in your flat or at home. {SITE.name} shows who owes whom and opens your UPI app with the amount filled in.</p>
            <div className="btns">
              <PlayButton className="btn-dark" />
              <a className="btn btn-line" href={SITE.webAppUrl}>{svg(ICONS.globe)}Open the web app</a>
            </div>
            <p className="small">In English, <span className="ml">മലയാളം</span>, <span className="ta">தமிழ்</span> and <span className="hi">हिन्दी</span>. Friends can settle from a link, even without the app.</p>
          </div>
          <div className="phone-wrap" aria-hidden="true">
            <div className="phone"><div className="screen">
              <div className="screen-head"><small>Group</small><b>Munnar Trip</b></div>
              <div className="owed"><span>You get back</span><b>₹1,850</b><span>Rahul owes you ₹1,450 · Sneha ₹1,000</span></div>
              <div className="rows">
                <div className="row"><span>Houseboat stay<small>You paid ₹12,000</small></span><span className="g">you lent ₹9,000</span></div>
                <div className="row"><span>Dinner<small>Arun paid ₹2,400</small></span><span className="o">you owe ₹600</span></div>
                <div className="row"><span>Fuel<small>Rahul paid ₹3,200</small></span><span className="o">you owe ₹800</span></div>
              </div>
              <div className="pay">Pay Arun ₹600 via UPI</div>
            </div></div>
          </div>
        </div>
      </section>

      <section className="strip">
        <div className="wrap">
          <span><i className="dot" />Unlimited expenses</span>
          <span><i className="dot o" />Settle with any UPI app</span>
          <span><i className="dot" />Works offline</span>
          <span><i className="dot o" />No SMS or bank reading</span>
        </div>
      </section>

      <section className="sec" id="features">
        <div className="wrap">
          <div className="sec-head"><h2>Everything a group needs. Free.</h2><p>No cap on how many expenses you add in a day, no countdown timers, no ads.</p></div>
          <div className="grid">
            {FEATURES.map(([icon, orange, title, text]) => (
              <div className="card" key={title}><span className={orange ? 'ico o' : 'ico'}>{svg(ICONS[icon])}</span><h3>{title}</h3><p>{text}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec mint" id="how">
        <div className="wrap">
          <h2>Three steps. That's it.</h2>
          <ol className="grid steps">
            <li className="card"><span className="num">1</span><h3>Make a group</h3><p>Name it, then share the invite link on WhatsApp. Friends join with one tap.</p></li>
            <li className="card"><span className="num">2</span><h3>Add expenses</h3><p>Whoever pays adds it, even offline. Everyone sees their share straight away.</p></li>
            <li className="card"><span className="num o">3</span><h3>Settle up</h3><p>Pay through any UPI app or in cash. The group shows "All settled" when everyone is square.</p></li>
          </ol>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <h2>Your language, your way</h2>
          <div className="langs">
            <div className="lang"><small>English</small><span>You get back ₹1,850</span></div>
            <div className="lang"><small>Malayalam</small><span className="ml">നിങ്ങൾക്ക് കിട്ടാനുള്ളത് ₹1,850</span></div>
            <div className="lang"><small>Tamil</small><span className="ta">உங்களுக்கு வர வேண்டியது ₹1,850</span></div>
            <div className="lang"><small>Hindi</small><span className="hi">आपको मिलना है ₹1,850</span></div>
          </div>
        </div>
      </section>

      <section className="sec mint" id="pricing">
        <div className="wrap">
          <div className="sec-head"><h2>Free for everyday splitting</h2><p>Pay only if you want the extras. One-time prices, no subscriptions.</p></div>
          <div className="grid">
            <div className="price"><h3>Free</h3><span className="amount">₹0</span>
              <ul><li>Unlimited groups and expenses</li><li>All four ways to split</li><li>Simplify debts and UPI settle-up</li><li>Search and basic charts</li><li>Scan a bill's total</li></ul></div>
            <div className="price best"><span className="badge">For one trip</span><h3>Trip Pass</h3><span className="amount">₹{PRICES.tripPass} <small>per group</small></span>
              <ul><li>Split a bill item by item</li><li>Keep bill photos</li><li>PDF and Excel export</li><li>Currency conversion abroad</li></ul></div>
            <div className="price"><h3>Pro</h3><span className="amount">₹{PRICES.pro} <small>once</small></span>
              <ul><li>Everything in Trip Pass</li><li>On every group, for life</li><li>Full charts and history</li></ul></div>
          </div>
        </div>
      </section>

      <section className="sec" id="faq">
        <div className="wrap faq">
          <h2>Questions</h2>
          <div>{FAQS.map((f, i) => <details key={f.q} open={i === 0}><summary>{f.q}</summary><p>{f.a}</p></details>)}</div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="band-text">
            <img src="/img/logo-on-dark.png" alt={SITE.name} width={200} />
            <h2>Start your first group today.</h2>
            <p>Free on Android and in your browser.</p>
          </div>
          <div className="btns"><PlayButton className="btn-orange" /><a className="btn btn-white" href={SITE.webAppUrl}>Open the web app</a></div>
        </div>
      </section>
    </Page>
  );
}
