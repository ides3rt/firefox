Incase you disable RFP, it's recommended to disable the following.
``` js
user_pref("privacy.resistFingerprinting", false);
user_pref("privacy.resistFingerprinting.block_mozAddonManager", false);
user_pref("privacy.resistFingerprinting.letterboxing", false);
```
Also, it's recommended to install add-ons called
 [CanvasBlocker](https://addons.mozilla.org/en-US/firefox/addon/canvasblocker/),
 as to minimize the effect of disable RFP.
