# Association-file inputs

Verified links require identifiers issued by Apple and the Android signing process. Do not deploy guessed or placeholder values.

## Android

Copy `assetlinks.template.json` to `site/.well-known/assetlinks.json` and replace `ANDROID_SHA256_FINGERPRINT` with the uppercase colon-separated SHA-256 fingerprint of the certificate used to sign the installed build.

Production package: `com.perifury.triku`

If staging must also claim this host, add a separate target entry for `com.perifury.triku.staging` and its signing fingerprint. Prefer a separate staging host to prevent production-link ambiguity.

## iOS

Copy `apple-app-site-association.template.json` to `site/.well-known/apple-app-site-association` and replace `APPLE_TEAM_ID` with the Apple Developer Team ID.

Production bundle ID: `com.perifury.triku`

The iOS target must also include the Associated Domains entitlement:

```text
applinks:app.triku.in
```
