import app from 'framework7-vue/components/app'
import f7 from 'framework7-vue/utils/f7'

let hasRun = false
export default Object.assign(app, {
  mounted() {
    const self = this
    const {params = {}, routes} = self.props
    const el = self.$refs.el
    const parentEl = el.parentNode

    if (parentEl && parentEl !== document.body && parentEl.parentNode === document.body) {
      parentEl.style.height = '100%'
    }

    // protect with singleton to avoid re-initialization
    if (!hasRun) {
      hasRun = true
      f7.init(el, params, routes)
    }
  },
})
