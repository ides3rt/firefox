# Welcome to my hardened firefox configuration!

## Helps/Warns
**1.** I use firefox-dev, so some prefs may not work correctly on your system.\
**2.** All of your profiles going to get overwrite by `policies.json`.
 For one profile only configuration you may interested in [arkenfox](https://github.com/arkenfox/user.js).\
**3.** Some prefs is my preferences.\
**4.** To make sure your preferred prefs are persist across firefox restart,
 It's recommended to edit in `user.js` or `policies.json`.

## List of things to enable/disable if break.
**Bypass Google's safebrowsing (Reset on restart).**\
browser.safebrowsing.allowOverride = true

**Make cookies persist.**\
network.cookie.lifetimePolicy = 0

**Sites rendering weird.**\
gfx.webrender.all = false

**Cross sites services, e.g. Instagram (Reset on restart).**\
network.http.referer.XOriginPolicy = 1

**Netfilx.**\
media.eme.enabled = true

**GPU Required (Reset on restart).**\
webgl.disabled = false

**Language package breaks (Remove these 3 preferences in both `policies.json` and `user.js`).**\
intl.accept_languages\
javascript.use\_us\_english\_locale\
extensions.autoDisableScopes\
extensions.enabledScopes

## Installation.
**Notes:**
* Before install you should open Firefox atleast once.
Also it's preferable to remove all data in your profile
(The one that you want to install this config to).
* If sudo(8) isn't availible on your system, you may use other
 programs to evaluate your privileges.

Installation:
```
$ git clone https://github.com/ides3rt/firefox
$ cp firefox/src/user.js ~/.mozilla/firefox/<profile>/
$ sudo cp firefox/src/policies.json /usr/lib/<firefox-version>/distribution/
$ sudo chmod 644 /usr/lib/<firefox-version>/distribution/policies.json
```

## My recommendation.
Addons:\
I only use `uBlock Origin` as a "Privacy Addons".\
My settings through text file is in `doc/addons-privacy/uBlock-Origin`.

Search engines:\
`searX` - On Archlinux it's very easy to host searX instance yourself, but on other distros though...\
`DDG-Lite` - Alternative to `searX`, but it's very ugly ui lol (`DDG` without JS).\
`DDG` - Just `DDG-Lite` with eyes-candy.

## Others recommendation.
[arkenfox](https://github.com/arkenfox/user.js/wiki)
