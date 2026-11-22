import type { ReactNode } from 'react';
import { SITE } from './content';

/** The sticky header. On the legal pages the section links go back to the home page. */
export function Header({ home = true }: { home?: boolean }) {
  const to = (id: string) => (home ? `#${id}` : `/#${id}`);
  return (
    <header className="top">
      <div className="wrap">
        <a className="brand" href="/"><img src="/img/icon-192.png" alt="" /><span>{SITE.name}</span></a>
        <nav className="nav" aria-label="Main">
          <a href={to('features')}>Features</a>
          <a href={to('how')}>How it works</a>
          <a href={to('pricing')}>Pricing</a>
          <a href={to('faq')}>FAQ</a>
          <a className="pill" href={SITE.webAppUrl}>Open web app</a>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <span>© {new Date().getFullYear()} {SITE.name} · Made in Kerala</span>
        <nav aria-label="Footer">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms</a>
          <a href="/delete-account">Delete my account</a>
          {SITE.supportEmail && <a href={`mailto:${SITE.supportEmail}`}>Contact: {SITE.supportEmail}</a>}
        </nav>
      </div>
    </footer>
  );
}

/** "Get it on Google Play" while the app is live, "Coming soon to Google Play" before. */
export function PlayButton({ className }: { className: string }) {
  const icon = <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden="true"><path d="M5 3l14 9-14 9z" /></svg>;
  return SITE.playUrl
    ? <a className={`btn ${className}`} href={SITE.playUrl}>{icon}Get it on Google Play</a>
    : <span className={`btn ${className}`} aria-disabled="true">{icon}Coming soon to Google Play</span>;
}

export const Page = ({ children, home }: { children: ReactNode; home?: boolean }) => <><Header home={home} /><main>{children}</main><Footer /></>;
