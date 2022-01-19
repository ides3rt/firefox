To disable strict referer:
``` js
user_pref("network.http.referer.XOriginPolicy", 2);
```
Also, it's recommended to use
 [Smart Referer](https://addons.mozilla.org/en-US/firefox/addon/smart-referer/).
 Enable `strict` mode, and add exception for site that breaks.
