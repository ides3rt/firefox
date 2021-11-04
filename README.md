# Welcome to my hardened firefox configuration!

## WARNING!
**01.** Some of your previous modified `about:config`(include all of your profiles) will gets overwrite by my `policies.json`.\
**02.** This config is prefered `privacy` over `security`.\
**03.** Some of this config is my preferences.\
**04.** This configuration is fully disable/lock things like `Auto Fill/Complete` `Home/Newtab Page` `Cache` `Prefetch` `Sync` `Google related` `Recommendation` and ETC.\
**05.** If you see something that lock you need to edit `policies.json`, in order to unlock them.

## List of things to enable/disable if break.
**Make Cookies persist**\
network.cookie.lifetimePolicy = 0

**Sites rendering weird.**\
gfx.webrender.all = false

**Sites break 'cause of cookies.**\
privacy.firstparty.isolate = false\
network.cookie.cookieBehavior = 5

**Most of Facebook's services.**\
network.http.referer.XOriginPolicy = 1

**Netfilx**\
media.eme.enabled = true

**Zoom**\
webgl.disable = false

**Most of Messaging and Meeting related. (eg. Messager, Line, Whatsapp, Zoom)**\
media.peerconnection.enabled = true
media.peerconnection.ice.no\_host = false

## What you going to get from my firefox configuration?
**00.** Enable dark theme and disable smooth scrolling.\
**01.** Disable all Google safe browsing related.\
**02.** Disable WebRTC.\
**03.** Disable DRM media.\
**04.** Disable Firefox auto updates.\
**05.** Disable Firefox telemetry.\
**06.** Using [FPI](https://wiki.mozilla.org/Security/FirstPartyIsolation).\
**07.** Enable HTTPS-ONLY-MODE by default.\
**08.** Lock useless features that downgrade your privacy.\
**09.** Disable WebGL.\
**10.** ETC. things that I don't remember, lol.

## Installation.
Before install your should open Firefox atleast once.

Installation of `user.js`:
```
$ git clone https://github.com/ides3rt/firefox.git
$ rm -rf $HOME/.mozilla/firefox/*.default-release/{*,.*}
$ cp firefox/user.js $HOME/.mozilla/firefox/*.default-release/
```
Installation of `policies.json`:
```
# cp firefox/policies.json /usr/lib/firefox/distribution/
# chmod 644 /usr/lib/firefox/distribution/policies.json
```

## Recommendation.
**Addons:**\
ClearURLs - URLs Tracking Protection.\
NoScript - Scripts Blocker.\
uBlock Origin - Blocker.

**Search Engines**\
**BEST:** searx (bad support for Asia like me. lol)\
**ALTERNATIVE:** duckduckgo-lite (duckduckgo without eyes-candy)
