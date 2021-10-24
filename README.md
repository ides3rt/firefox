# Welcome to my hardened firefox configuration!

## WARNING!
**01.** Some of your previous modified `about:config`(include all of your profiles) will gets overwrite by my `policies.json`.\
**02.** This config is prefered `privacy` over `security`.\
**03.** Some of this config is my preferences.\
**04.** This configuration is fully disable/lock things like `Auto Fill/Complete` `Home/Newtab Page` `Cache` `Prefetch` `Sync` `Google related` `Recommendation` and ETC.\
**05.** If you see something that lock you need to edit `policies.json`, in order to unlock them.

## List of things to enable/disable if break.
**Can't see popups.**\
Disable block popups. lol.

**Can't connect to ISP's site.**\
Add your ISP's site to `Https-Only-Mode` exception.

**Sites rendering weird.**\
gfx.webrender.all = false\
gfx.font\_rendering.opentype\_svg.enabled = true

**Sites break 'cause of cookies.**\
privacy.firstparty.isolate = false\
privacy.firstparty.isolate.block\_post\_message = false\
privacy.firstparty.isolate.restrict\_opener\_access = false\
privacy.firstparty.isolate.use\_site = false\
fission.autostart = false\
network.cookie.cookieBehavior = 5

**Most of facebook's services.**\
network.http.referer.XOriginPolicy = 1

**Netfilx**\
media.eme.enabled = true

**Flash games**\
webgl.disable = false

**Most of messages related. (eg. Messager, Line, Whatsapp)**\
media.peerconnection.enabled = true

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
Dark Reader - Dark Theme for Sites.\
NoScript - Scripts Blocker.\
Temporary Containers - Sites containner.\
uBlock Origin - ADs/JS/Malwares/Trackers/Everything Blocker.\
User-Agent Switcher and Manager - UA spoofer.

**Search Engine**\
**BEST:** searx (bad support for Asia like me. lol)\
**ALTERNATIVE:** duckduckgo-lite (duckduckgo without eyes-candy)
