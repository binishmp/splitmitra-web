import { SITE } from '../content';
import { Page } from '../Layout';

/**
 * DRAFT legal pages. Plain-language starting points written from how the app is built (docs/DATA_MODEL.md in the app repo).
 * Have them checked by a lawyer before launch; Google Play needs the Privacy Policy and the delete-account page.
 */
const contact = SITE.supportEmail ? <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a> : <>the support email shown in the app</>;

function Draft() {
  return <p className="note">Draft for review. Last updated {SITE.legalUpdated}.</p>;
}

function Privacy() {
  return <>
    <h1>Privacy Policy</h1><Draft />
    <p>{SITE.name} helps groups of friends split shared costs. This page explains what we store, why, and what you can do about it.</p>
    <h2>What we store</h2>
    <ul>
      <li><b>Your Google account basics:</b> name, email address and profile photo, used to sign you in and to show you to your group.</li>
      <li><b>Your UPI ID</b>, if you add one, so friends can pay you back.</li>
      <li><b>What you and your groups type in:</b> group names, expenses, amounts, dates, notes and settle-ups.</li>
      <li><b>A notification address</b> for your phone, if you allow notifications.</li>
      <li><b>Purchases</b> of Trip Pass or Pro: what was bought and when. Card and bank details are handled by Google Play or the payment provider; we never see or store them.</li>
    </ul>
    <h2>What we do not do</h2>
    <ul>
      <li>We do not read your SMS, contacts or bank accounts.</li>
      <li>We do not show ads and do not sell your data.</li>
      <li>{SITE.name} never holds or moves your money. Settle-up opens your own UPI app.</li>
    </ul>
    <h2>Who can see your data</h2>
    <p>People in a group see that group's members, expenses and balances. Your personal expenses are visible only to you. Data is stored with Google Firebase.</p>
    <h2>Your choices</h2>
    <p>You can change your name and UPI ID in the app, leave a group when you are settled up, and delete your account at any time (see <a href="/delete-account">Delete my account</a>). Questions: {contact}.</p>
  </>;
}

function Terms() {
  return <>
    <h1>Terms of Use</h1><Draft />
    <p>By using {SITE.name} you agree to these terms.</p>
    <h2>The service</h2>
    <p>{SITE.name} records shared expenses and shows who owes whom. It is a record-keeping tool, not a bank or payment service: payments happen in your own UPI app or in cash, between you and your friends.</p>
    <h2>Your responsibilities</h2>
    <ul>
      <li>Enter amounts honestly. Balances are only as correct as what the group types in.</li>
      <li>Do not use the app for anything illegal or to harass others.</li>
    </ul>
    <h2>Paid extras</h2>
    <p>Trip Pass and Pro are one-time purchases that unlock extra features. Basic splitting stays free. Refunds follow the rules of the store you paid through.</p>
    <h2>Changes</h2>
    <p>We may update these terms; the app will ask you to accept important changes. Questions: {contact}.</p>
  </>;
}

function Delete() {
  return <>
    <h1>Delete my account</h1><Draft />
    <h2>In the app</h2>
    <ol>
      <li>Open {SITE.name} and go to <b>Settings</b>.</li>
      <li>Tap <b>Delete my account</b> and confirm.</li>
    </ol>
    <h2>Without the app</h2>
    <p>Write to {contact} from the Gmail address you sign in with, and ask us to delete your account.</p>
    <h2>What is deleted</h2>
    <p>Your profile (name, photo, UPI ID), your personal expenses and your notification settings are deleted. Please settle up before deleting, so your friends' balances stay correct.</p>
  </>;
}

export function Legal({ kind }: { kind: 'privacy' | 'terms' | 'delete' }) {
  return <Page home={false}><section className="legal"><div className="wrap">
    {kind === 'privacy' ? <Privacy /> : kind === 'terms' ? <Terms /> : <Delete />}
  </div></section></Page>;
}
