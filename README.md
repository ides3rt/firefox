# Welcome to my hardened firefox configuration!

## Helps/Warns.
**01.** All of you modified pref(s) in all profile(s) going to get overwrite by `policies.json`.
 For one profile only configuration you may interested in [arkenfox](https://github.com/arkenfox/user.js).\
**02.** Some prefs is my preferences.\
**03.** If you need to change pref(s) that locked you need to edit `policies.json`, in order to unlock them.\
**04.** The prefs are that in `user.js` or "Status: user" in `policies.json` may not locked,
 but it'll reset on restart (mean some modified pref(s) won't be persist across firefox restart).

## List of things to enable/disable if break.
**Bypass Google's safebrowsing (Reset on restart).**\
browser.safebrowsing.allowOverride = true

**Bypass 3rd party extension install prompts (Reset on restart).**\
extensions.postDownloadThirdPartyPrompt = true

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
extensions.autoDisableScopes\
extensions.enabledScopes\
javascript.use\_us\_english\_locale

## Installation.
**Notes:** Before install your should open Firefox atleast once.
Also it's preferable to remove all of data in your profile
(The one that you want to install this config to).

Installation.
```
$ git clone https://github.com/ides3rt/firefox.git
$ cp firefox/src/user.js "$HOME"/.mozilla/firefox/*.default-release/
$ sudo cp firefox/src/policies.json /usr/lib/firefox/distribution/
$ sudo chmod 644 /usr/lib/firefox/distribution/policies.json
```

## My recommendation.
Addons:\
I only use `uBlock Origin` as a "Privacy Addons".\
My settings though text file is in `doc/addons-privacy`.

Search engines:\
`searX` - On Archlinux it's very easy to host searX instance yourself, but on other distros though...\
`DDG-Lite` - Alternative to `searX`, but it's very ugly ui lol (`DDG` without JS).\
`DDG` - Just `DDG-Lite` with eyes-candy.

## Others recommendation.
[arkenfox](https://github.com/arkenfox/user.js/wiki)
