import grapesjs from 'grapesjs'
import GrapesjsEditor from './editor.vue'

const VueGrapesjs = {
  install (Vue, options = {}) {
    const config = {
      presets: []
    }

    const { presets } = Object.assign(config, options)

    if (presets.length) {
      presets.forEach((data) => {
        const {
          name,
          options = {},
          loader
        } = data

        grapesjs.plugins.add(name, (editor) => {
          loader(editor, options)
        })
      })
    }

    Vue.prototype.$grapesjs = grapesjs

    Vue.component(GrapesjsEditor.name, GrapesjsEditor)
  }
}

export default VueGrapesjs
