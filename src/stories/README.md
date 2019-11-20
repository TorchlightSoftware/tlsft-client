# Storybook Testing

This is the first place that new components should be visually tested.  It can be used to confirm with the UX designer or customer that the component is correct, and it can be used to verify any visual changes that are made after initial development.

## Installation Notes

* `.storybook/config.js` has been modified to load Framework7.  Calling `addParameters` seems to be necessary, but is hard to find documentation for.  I found [an example here](https://github.com/storybookjs/storybook/blob/17dcfb84194c9876d4452aae123443f9748f62b6/examples/vue-kitchen-sink/.storybook/config.js).  Additional [documentation on configuring for vue here](https://github.com/storybookjs/storybook/blob/e9cefe9233b96ae44597370b73cf7b410b6c2927/docs/src/pages/guides/guide-vue/index.md).

## Development Notes

* `render` function [must be called with the 'h' argument](https://github.com/storybookjs/storybook/issues/2727#issuecomment-361177519)... or use `template` string instead.

