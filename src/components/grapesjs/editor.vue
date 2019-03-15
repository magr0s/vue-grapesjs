<template>
  <div
    id='gjs'
  />
</template>

<script>
export default {
  name: 'grapesjs',

  props: {
    options: {
      type: Object,
      default: () => ({})
    }
  },

  data () {
    return {
      gjs: null
    }
  },

  mounted () {
    this.gjs = this.$grapesjs.init(Object.assign({}, this.options, {
      container: '#gjs'
    }))
  },

  destroyed () {
    this.gjs.destroy()
  }
}
</script>

<style src='grapesjs/dist/css/grapes.min.css' />
