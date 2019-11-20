// Docs on configuration:
// https://github.com/storybookjs/storybook/blob/next/docs/src/pages/guides/guide-vue/index.md
// https://github.com/storybookjs/storybook/blob/17dcfb84194c9876d4452aae123443f9748f62b6/examples/vue-kitchen-sink/.storybook/config.js
//
// =========================================
// Added configurations for our dependencies
// =========================================

// Import Framework7
import Framework7 from 'framework7/framework7-lite.esm.js'

// Import Framework7-Vue Plugin
import Framework7Vue from 'framework7-vue'

// Import Framework7 Styles
import 'framework7/css/framework7.bundle.css'

// Import Icons and App Custom Styles
import '../src/css/icons.css'
import '../src/css/app.scss'

import {configure, addDecorator} from '@storybook/vue'
import App from '../src/stories/app-override.js'

// Init Framework7-Vue Plugin
Framework7.use(Framework7Vue)

// addParams isn't working, so include it as a data prop instead
const f7params = {
  name: 'tlsft-client', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function() {
    return {}
  },
}

// styles don't work properly if the components aren't rendered
// within an F7 app
addDecorator(() => ({
  data() {
    return {f7params}
  },
  components: {App},
  template: '<app :params="f7params"><story/></app>',
}))

// =========================================
// Default configuration for storybook
// =========================================
// automatically import all files ending in *.stories.js
configure(require.context('../src/stories', true, /\.stories\.js$/), module)
