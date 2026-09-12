'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const measurementId = 'G-T0K2HHFE3D';
const publicOrigin = 'https://moemel.com';
type AnalyticsWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
  __publicGaConfigured?: boolean;
  __publicGaPath?: string;
};

export default function PublicAnalytics() {
  const pathname = usePathname();
  const [allowed, setAllowed] = useState(false);
  useEffect(() => {
    const w = window as AnalyticsWindow;
    const enabled = w.location.origin === publicOrigin &&
      !/^\/(admin|api|auth|login|member)(\/|$)/.test(w.location.pathname) &&
      !/(access_token|refresh_token|token_hash|[?&#](code|token)=)/i.test(w.location.search + w.location.hash);
    (w as unknown as Record<string, unknown>)['ga-disable-' + measurementId] = !enabled;
    setAllowed(enabled);
    if (!enabled) return;
    w.dataLayer = w.dataLayer || [];
    w.gtag = w.gtag || function () {
      // gtag's command queue uses Arguments objects.
      // eslint-disable-next-line prefer-rest-params
      w.dataLayer!.push(arguments);
    };
    let referrer = '';
    try { referrer = new URL(document.referrer).origin; } catch {}
    const page = { page_location: publicOrigin + w.location.pathname, page_referrer: referrer, page_title: document.title };
    if (!w.__publicGaConfigured) {
      w.gtag('js', new Date());
      w.gtag('config', measurementId, { ...page, send_page_view: false, allow_google_signals: false, allow_ad_personalization_signals: false });
      w.__publicGaConfigured = true;
    }
    if (w.__publicGaPath !== w.location.pathname) {
      w.gtag('event', 'page_view', { ...page, send_to: measurementId });
      w.__publicGaPath = w.location.pathname;
    }
  }, [pathname]);
  return allowed ? <Script src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} strategy="afterInteractive" /> : null;
}
