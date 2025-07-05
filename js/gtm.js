export function initGTM() {
  const gtmId = 'GTM-P9P76JBD';
  if (!gtmId) {
    console.error('GTM ID not found');
    return;
  }

  try {
    const noscriptIframe = document.querySelector('noscript iframe[data-gtm-src]');
    if (noscriptIframe) {
      noscriptIframe.src = noscriptIframe.getAttribute('data-gtm-src') + gtmId;
    }

    // Initialize GTM
    (function (w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
      var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s),
          dl = 'dataLayer' != l ? '&l=' + l : '';
      j.async = true;
      j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', gtmId);
  } catch (error) {
    console.error('Failed to initialize GTM:', error);
  }
}
