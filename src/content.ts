/** Everything on the site that the owner may want to change, in one place. */
export const SITE = {
  name: 'SplitMitra',
  playUrl: '',            // the Google Play link, once the app is live (empty = "Coming soon to Google Play")
  webAppUrl: '/app',      // the web app (PWA), copied from the app repo into public/app
  supportEmail: '',       // shown in the footer and on the legal pages (empty = hidden)
  legalUpdated: '22 November 2026',
};

/** Prices shown on the home page. Pro is not final yet (₹199 or ₹299). */
export const PRICES = { tripPass: 49, pro: 199 };

export const FAQS: { q: string; a: string }[] = [
  { q: 'Is SplitMitra really free?', a: 'Yes. Groups, expenses, splitting, simplify debts and UPI settle-up are free with no daily limits and no ads. Trip Pass and Pro only add extras.' },
  { q: 'Does SplitMitra take my money or hold payments?', a: 'No. Settle-up opens your own UPI app with the amount filled in. The money goes straight from you to your friend; SplitMitra only records it.' },
  { q: 'Do my friends need to install the app?', a: 'No. They can open the group link in a browser to see their share and settle up.' },
  { q: 'Does it read my SMS or bank account?', a: 'No. SplitMitra stores only what you and your group type in.' },
  { q: 'Does it work without internet?', a: 'Yes. Add expenses offline on a trip; they sync when you are back online.' },
];
