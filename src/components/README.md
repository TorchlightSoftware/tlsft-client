# Vue Component Best Practices

1. Components should not be responsible for loading data, but should receive it via props.
2. [Utilize prop-types](https://michaelnthiessen.com/unlock-full-potential-prop-types/) to make expectations clear and minimize internal conditional guards.
3. Components can trigger state mutations in the store.  So state mutations might come from anywhere (client, server, time interval) but data rendering will always flow down.
4. Use [pages](../pages) for loading data and triggering state mutations.
5. Make use of [slots](https://vuejs.org/v2/guide/components-slots.html) for things like modals that can wrap dynamic content.
6. [Functional components don't seem great in their current iteration](https://github.com/vuejs/vue/issues/7492#issuecomment-463172013).  We wouldn't be able to use any F7 components without some kind of hack for instance.  FC can be used if a performance optimization is necessary.
7. [Hooks look interesting](https://blog.logrocket.com/hooks-are-coming-to-vue/).  Let's try a few examples and evaluate whether they make our code easier or harder to read.
