# PhoneGap Build Resources

This directory includes resources used during the PhoneGap Build process.  This happens after the webpack build and can be used to add mobile-platform-specific assets, or store scripts to be run during the build process.

Take a look at the [resources directory in phonegap-app-developer](https://github.com/TorchlightSoftware/phonegap-app-developer/tree/master/resources) for more ideas.  This is the same thing, I just thought this directory name was more clear.

# Deploy to Phonegap

Customer is responsible for:

1. Hiring a developer to manage their App store deployment process.
2. Creating Apple Developer/Google Play account.
3. Creating and managing the app store profiles including app and company information, and privacy policy.
4. Deploying builds that we complete and hand off.

We are responsible for:

1. Delivering new application builds.
2. UI unit testing, E2E testing, on device QA using offshore team.
3. Delivering automated screenshots for use in the app stores.

### Getting PhoneGap Development App On Your Device

* Torchlight has already deployed the [PhoneGap Development](https://github.com/TorchlightSoftware/phonegap-app-developer) app.
* If you're new to the team, we will need your device UDID for any Apple devices, which [you can get at udid.io](https://get.udid.io).  Unfortunately Apple normally requires you to plug your device into an iTunes-bearing computer in order to discover the UDID - it's not viewable from settings.

Once you have your UDID, contact your team lead, who should:

1. Add your UDID to a [new Device on Apple Dev](https://developer.apple.com/account/resources/devices/list).
2. [Edit the PhoneGap Dev Profile](https://developer.apple.com/account/resources/profiles/list) and add your device.
3. Download the resulting provisioning profile.
4. You will also need the `p12` file.  [Download the iOS Development certificate](https://developer.apple.com/account/resources/certificates/list), then if you have a Mac handy, [follow these instructions](https://community.telligent.com/community/9/w/user-documentation/52415/convert-a-cer-file-to-a-p12-file), [otherwise try these](https://gist.github.com/jcward/d08b33fc3e6c5f90c18437956e5ccc35) (has not been tested, if you do please remove this comment and update with any additional instructions).
5. [Upload the certificate and provisioning profile](https://build.phonegap.com/people/edit) in PhoneGap Build -> Signing Keys.
6. [Come back to your app](https://build.phonegap.com/apps), click the app title to expand it, and under the iOS section (with rebuild, log, ipa buttons), select the keys you just uploaded.
7. Click rebuild and wait for the app to build.
8. Once complete, have any new team members scan the QR code on PhoneGap build.  Have them click install.
9. Open the app to verify that it installs correctly.

### Configuring for Phonegap

1. `config.xml` in the root directory controls behavior of PhoneGap Build (and therefore the resulting binaries).
2. Application will be built into `www` directory, and the paths inside of `config.xml` are relative to that.
3. Look at the [phonegap-app-developer](https://github.com/TorchlightSoftware/phonegap-app-developer/blob/master/config.xml) project for an example config that makes use of many features.  Official docs on the config [can be found here](http://docs.phonegap.com/phonegap-build/configuring/).
4. Add [hooks to the build process if you wish](https://github.com/TorchlightSoftware/phonegap-app-developer/blob/master/config.xml#L10-L14).
5. Modify [preferences](https://github.com/TorchlightSoftware/phonegap-app-developer/blob/master/config.xml#L15-L17).
6. Should `<access origin="*" />` be modified?  Should a content security policy be added to the `index.html`?
7. Create [icons and splash screens with the appropriate dimensions](https://github.com/TorchlightSoftware/phonegap-app-developer/blob/master/config.xml#L25-L53).  I assume this whole list is needed, and corresponds to the dimensions of real hardware screens.  How can we stay up to date on hardware dimensions?
8. Create/review the same configurations for Android.
9. Update [engine version for android/ios](https://github.com/TorchlightSoftware/phonegap-app-developer/blob/master/config.xml#L66-L67).
10. Update [plugins list](https://github.com/TorchlightSoftware/phonegap-app-developer/blob/master/config.xml#L68-L109) to correspond to the plugins you will be using.  (Apple) Make sure those capabilities have also been selected in the [Identifier](https://developer.apple.com/account/resources/identifiers/list/bundleId) for your app.

### Deploying a Development Build to Our Devices

Once you have the PhoneGap Developer App installed on your phone, previewing your app is easy and doesn't require any iOS/Android build or installation.

1. Install the [PhoneGap CLI](http://docs.phonegap.com/getting-started/1-install-phonegap/cli/) if not already installed.
2. Run `phonegap serve`.
3. On your mobile device, open the Phonegap Developer app and put in the IP address where your laptop is serving.  Your phone and laptop must be connected to the same network.
4. You should see your app load.  If you see a blank white screen this is probably the splash screen.

### Manual PhoneGap Build

1. Go to the [PhoneGap Build website](https://build.phonegap.com/apps).
2. Create a new app if necessary, add your github repository.
4. For iOS/Android build, select the proper provisioning profile or upload a new one for your app.  If you use the same profile as a previous app, your phone will replace that app when you install the new one.
3. Wait for the build to complete, or click rebuild.
4. Scan the QR code to install the app on your phone.

### CI/Automated Build

Automated build should be performed with [PhoneGap CLI](http://docs.phonegap.com/getting-started/1-install-phonegap/cli/), specifically the [PhoneGap Remote CLI](http://docs.phonegap.com/references/phonegap-cli/remote-usage/).  We may wish to upload the resulting `IPA`/`APPX` to a cloud bucket, or use [Fastlane](https://docs.fastlane.tools/getting-started/ios/appstore-deployment/) to deploy to the app store.  How do we get an IPA from PhoneGap Build in an automated fashion?
