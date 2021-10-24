// Create to work with my `policies.json`
// Settings that aren't cover here, they in my `policies.json`

//--------------------------------------Disable, if flash games break
user_pref("webgl.disabled", true);

//--------------------------------------First party isolate
// If enable you don't need to use `Local CDN` or `Decentraleyes`
user_pref("privacy.firstparty.isolate", true);
user_pref("privacy.firstparty.isolate.restrict_opener_access", true);
user_pref("privacy.firstparty.isolate.block_post_message", true);
user_pref("privacy.firstparty.isolate.use_site", true);

//--------------------------------------Set to 0 for privacy
//--------------------------------------Set to 1 for security
user_pref("security.OCSP.enabled", 0);

// Things to delete by default, if press Ctrl+Shift+Delete
user_pref("privacy.cpd.cache", true);
user_pref("privacy.cpd.cookies", true);
user_pref("privacy.cpd.downloads", true); // Downloads history
user_pref("privacy.cpd.formdata", true); // Form & Search History
user_pref("privacy.cpd.history", true); // Browsing & Download History
user_pref("privacy.cpd.offlineApps", true); // Offline Website Data
user_pref("privacy.cpd.passwords", false); // Password
user_pref("privacy.cpd.sessions", true); // Active Logins
user_pref("privacy.cpd.siteSettings", false); // Site Preferences

//--------------------------------------Mostly copy from other people
user_pref("datareporting.healthreport.infoURL", "");
user_pref("devtools.onboarding.telemetry.logged", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.coverage.opt-out", true); // [HIDDEN PREF]
user_pref("toolkit.coverage.opt-out", true); // [HIDDEN PREF]
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("corroborator.enabled", false);
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");
user_pref("breakpad.reportURL", "");
user_pref("captivedetect.canonicalURL", "");
user_pref("keyword.enabled", false);
user_pref("toolkit.winRegisterApplicationRestart", false);
user_pref("security.ssl.require_safe_negotiation", true);
user_pref("security.tls.enable_0rtt_data", false);
user_pref("security.OCSP.require", true);
user_pref("security.pki.sha1_enforcement_level", 1);
user_pref("security.family_safety.mode", 0);
user_pref("security.cert_pinning.enforcement_level", 2);
user_pref("security.remote_settings.crlite_filters.enabled", true);
user_pref("security.pki.crlite_mode", 2);
user_pref("security.mixed_content.block_display_content", true);
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
user_pref("privacy.donottrackheader.enabled", false);
user_pref("privacy.userContext.enabled", true);
user_pref("privacy.userContext.ui.enabled", true);
user_pref("devtools.chrome.enabled", false);
user_pref("devtools.debugger.remote-enabled", false);
user_pref("middlemouse.contentLoadURL", false);
user_pref("permissions.manager.defaultsUrl", "");
user_pref("webchannel.allowObject.urlWhitelist", "");
user_pref("permissions.delegation.enabled", false);
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.socialtracking.enabled", true);
user_pref("privacy.trackingprotection.cryptomining.enabled", true);
user_pref("privacy.trackingprotection.fingerprinting.enabled", true);
user_pref("privacy.sanitize.timeSpan", 0);
user_pref("privacy.resistFingerprinting", true);
user_pref("privacy.resistFingerprinting.block_mozAddonManager", true); // [HIDDEN PREF]
user_pref("privacy.resistFingerprinting.letterboxing", true); // [HIDDEN PREF]
user_pref("security.csp.enable", true);
user_pref("toolkit.winRegisterApplicationRestart", false);
user_pref("fission.autostart", true);
user_pref("urlclassifier.trackingAnnotationSkipURLs", "");
user_pref("toolkit.telemetry.cachedClientID", "");
user_pref("toolkit.telemetry.prompted", 2);
user_pref("toolkit.telemetry.rejected", true);
user_pref("toolkit.telemetry.unifiedIsOptIn", false);
user_pref("broswer.onboarding.enabled", false);
user_pref("privacy.window.name.update.enabled", true);
