import Vue from 'vue'
import VueYouTubeEmbed from 'vue-youtube-embed'
Vue.use(VueYouTubeEmbed)

Vue.use(VueYouTubeEmbed, { global: false })

Vue.use(VueYouTubeEmbed, { global: true, componentId: 'youtube-media' })
