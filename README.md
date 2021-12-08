# Welcome to my hardened firefox config!

## WARNING!
**01.** Some of your previous modified `about:config` (include all of your profiles) will gets overwrite by my `policies.json`.\
**02.** This config is prefered `privacy` over `security`.\
**03.** Some of this config is my preferences.\
**04.** If you need to change setting(s) that lock, you need to edit `policies.json`, in order to unlock them.

## List of things to enable/disable if break.
**Bypass Google's safebrowsing.**\
browser.safebrowsing.allowOverride = true

**Make cookies persist.**\
network.cookie.lifetimePolicy = 0\
privacy.clearOnShutdown.history = false

**Sites rendering weird.**\
gfx.webrender.all = false

**Most of Facebook's services. (eg. Instagram)**\
network.http.referer.XOriginPolicy = 1

**Netfilx**\
media.eme.enabled = true

**GPU Required**\
webgl.disabled = false

## What you going to get from my firefox configuration?
**01.** Enabled dark theme.\
**02.** Disabled DRM media.\
**03.** Disabled firefox auto updates.\
**04.** Disabled firefox telemetry.\
**05.** Enabled [dFPI](https://bugzilla.mozilla.org/show_bug.cgi?id=1649876).\
**06.** Enabled HTTPS-Only mode by default.\
**07.** Disabled WebGL.\
**08.** Disabled remote safebrowsing.

## Installation.
Before install your should open Firefox atleast once.

Installation of `user.js`:
```
$ git clone https://github.com/ides3rt/firefox.git
$ rm -rf $HOME/.mozilla/firefox/*.default-release/**
$ cp firefox/src/user.js $HOME/.mozilla/firefox/*.default-release/
```
Installation of `policies.json`:
```
# cp firefox/src/policies.json /usr/lib/firefox/distribution/
# chmod 644 /usr/lib/firefox/distribution/policies.json
```

## My recommendation.
Addons:\
I only use `uBlock Origin` as a "Privacy Addons".\
My settings though text file is in `doc/addons-privacy`.

Search engine:\
`searX` is the go to, but it's very slow on Asia.\
`DDG-Lite` is the best alternative if you care about privacy, but it's very ugly ui.\
`DDG` is the best for someone that kinna chill about privacy.\
`Startpage` is Google likes sg, but it's history of tracking users, you may want to "[fix](https://github.com/arkenfox/user.js/wiki/4.2.2-uBlock-Origin#small_orange_diamond-filters)" it.

## Others recommendation.
[arkenfox](https://github.com/arkenfox/user.js/wiki)
