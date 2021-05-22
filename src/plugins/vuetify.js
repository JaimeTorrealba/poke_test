import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#FFF',
        secondary: '#FFF',
        red: '#F22539',
        white: '#FFF',
        disabled: '#BFBFBF', 
        background: '#F9F9F9',
      },
    },
  },
})
