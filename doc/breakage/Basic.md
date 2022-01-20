**Sites rendering weird.**\
``` js
user_pref("gfx.webrender.all", false);
```

**Disable clear cookies on exits.**\
[Here](https://github.com/ides3rt/firefox/blob/master/doc/replacement/Cookies.md)

**Cross sites services, e.g. Instagram (reset on restart).**\
[Here](https://github.com/ides3rt/firefox/blob/master/doc/replacement/Referer.md)

**Disable resist-fingerprinting/spoof-ua.**\
[Here](https://github.com/ides3rt/firefox/blob/master/doc/replacement/RFP.md)

**Netfilx.**\
``` js
user_pref("media.eme.enable", true);
```

**GPU required (reset on restart).**\
``` js
user_pref("webgl.disabled", false);
```

**Language packages break (remove these 3 preferences in both `policies.json` and `user.js`).**\
```
intl.accept_languages
javascript.use_us_english_locale
extensions.autoDisableScopes
extensions.enabledScopes
```
