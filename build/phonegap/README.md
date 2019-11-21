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
* If you're new to the team, we will need your device UDID for any Apple devices, which [you can get at udid.io](https://get.udid.io).  Unfortunately Apple normally requires you to plug your device into an iTunes-bearing computer in order to discover the UDID - it's not viewable from settings.  Yes, Apple is batshit insane.  No, there's nothing we can do about it.

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

Following are steps to deploy the app to PhoneGap.  This process assumes that (above) configuration is present, and that the app built by webpack is still residing in the `www` directory.

1. Install the [PhoneGap CLI](http://docs.phonegap.com/getting-started/1-install-phonegap/cli/) via npm with the following command from the Terminal app: `npm i -g phonegap@latest`
2. We will be using the [PhoneGap Remote CLI](http://docs.phonegap.com/references/phonegap-cli/remote-usage/) to interact with PhoneGap Build.
3. Go ahead and log in using `phonegap remote login`.
