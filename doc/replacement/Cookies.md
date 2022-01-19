To disable clear cookies on exits:
``` js
user_pref(browser.sessionstore.privacy_level", 0);
```
Also, it's recommended to use
 [Cookie AutoDelete](https://addons.mozilla.org/en-US/firefox/addon/cookie-autodelete/).
 And add a whitelist for site that you don't want to clear cookies on exits.
