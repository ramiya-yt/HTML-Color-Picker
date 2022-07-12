var _paq = window._paq = window._paq || [];
        _paq.push(["setCookieDomain", "*.bio.link"]);
        _paq.push(["setDomains", ["*.bio.link"]]);
        _paq.push(['trackPageView']);
        (function() {
            let u = "https://analytics.bio.link/";
            _paq.push(['setTrackerUrl', u + 'matomo.php']);
            _paq.push(['setSiteId', '312501']);
            let d = document,
                g = d.createElement('script'),
                s = d.getElementsByTagName('script')[0];
            g.type = 'text/javascript';
            g.async = true;
            g.src = 'https://cdn.bio.link/matomo.js';
            s.parentNode.insertBefore(g, s);
        })();

var plausibleScript = document.createElement("script");
        plausibleScript.src = "https://plausible.io/js/plausible.js"
        plausibleScript.setAttribute("asnyc", "");
        plausibleScript.setAttribute("defer", "");
        plausibleScript.setAttribute("data-domain", "bio.link");
        document.head.appendChild(plausibleScript);
