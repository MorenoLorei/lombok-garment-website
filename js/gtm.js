import config from './config.js';

// GTM initialization
export function initGTM() {
    // Update noscript iframe
    const noscriptIframe = document.querySelector('noscript iframe[data-gtm-src]');
    if (noscriptIframe) {
        noscriptIframe.src = noscriptIframe.getAttribute('data-gtm-src') + config.gtmId;
    }

    // Initialize GTM
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl= 'dataLayer' != l?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer',config.gtmId);
}