# Welcome to my hardened firefox config!

## WARNING!
**01.** Some of your previous modified `about:config` (include all of your profiles) will gets overwrite by my `policies.json`.\
**02.** This config is prefered `privacy` over `security`.\
**03.** Some of this config is my preferences.\
**04.** If you need to change setting(s) that lock, you need to edit `policies.json`, in order to unlock them.

## List of things to enable/disable if break.
**Make cookies persist.**\
network.cookie.lifetimePolicy = 0

**Sites rendering weird.**\
gfx.webrender.all = false

**Sites break 'cause of cookies. (it's recommend to use `Temporary Containers` if you want to use this)**
privacy.firstparty.isolate = false\
network.cookie.cookieBehavior = 5

**Most of Facebook's services. (eg. Instagram)**\
network.http.referer.XOriginPolicy = 1

**Netfilx**\
media.eme.enabled = true

**Real time communications related. (eg. Messager, Line, Whatsapp, ZOOM)**\
media.peerconnection.enabled = true
media.peerconnection.ice.no\_host = false
webgl.disabled = false

## What you going to get from my firefox configuration?
**01.** Enable dark theme.\
**02.** Disable WebRTC.\
**03.** Disable DRM media.\
**04.** Disable firefox auto updates.\
**05.** Disable firefox telemetry.\
**06.** Using [FPI](https://wiki.mozilla.org/Security/FirstPartyIsolation).\
**07.** Enable HTTPS-Only mode by default.\
**08.** Disable WebGL.\
**09.** Disable remote safebrowsing.

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
I only use `uBlock Origin` as a "Privacy Addons" and my settings though text file is in `doc/addons`.

Search engine:\
`DDG` is my current search engine, even though `searX` is better than `DDG` it's bad support for Asia.\
You may want to look at `DDG-Lite` it's `DDG`, but with no Java script.

## Others recommendation.
[arkenfox](https://github.com/arkenfox/user.js/wiki)
