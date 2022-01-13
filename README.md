# Welcome to my hardened Firefox configuration!

## Help/warn
**1.** I use Firefox-dev, so some prefs may not work correctly on your system.\
**2.** All of your profiles going to get overwrite by `policies.json`.
 For one profile only configuration, you may be interested in [arkenfox](https://github.com/arkenfox/user.js).\
**3.** Some prefs is my preferences.\
**4.** To make sure your preferred prefs are persisted across Firefox restart,
 It's recommended to edit in `user.js` or `policies.json`.

## Installation
**Notes:**
* Before install, you should open Firefox at least once.
Also, it's preferable to remove all data in your profile
(the one that you want to install this config to).
* If sudo(8) isn't available on your system, you may use other
 programs to elevate your privileges.

Installation:
```
$ git clone https://github.com/ides3rt/firefox
$ cp firefox/src/user.js ~/.mozilla/firefox/<profile>/
$ sudo cp firefox/src/policies.json /usr/lib/<firefox-version>/distribution/
$ sudo chmod 644 /usr/lib/<firefox-version>/distribution/policies.json
```

## Recommendation
[My doc directory.](https://github.com/ides3rt/firefox/tree/master/doc)\
[Arkenfox's wiki.](https://github.com/arkenfox/user.js/wiki)
