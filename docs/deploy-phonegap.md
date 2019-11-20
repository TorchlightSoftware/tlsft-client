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

### Deploying the App

Following are steps to deploy the app to PhoneGap.  This process has been tested with the sample app present in this repository.  As long as you keep the same configurations it should work without issues.

1. Install the [PhoneGap CLI](http://docs.phonegap.com/getting-started/1-install-phonegap/cli/) via npm with the following command from the Terminal app: `npm i -g phonegap@latest`
2. The PhoneGap Developer App, which lets you quickly test builds similar to TestFlight
