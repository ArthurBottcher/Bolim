import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary:    '#0A2342',
                secondary:  '#C81F32',
                accent:     '#01D0A9',
                error:      '#FF1B1C',
                info:       '#A23B72',
                success:    '#4CAF50',
                warning:    '#F18F01',
                background: '#FBFBFF',
                background2:'#F9F9F9',
                text: '#F9F9F9'
            },

            dark: {
                primary:    '#204d85',
                secondary:  '#C81F32',
                accent:     '#13F097',
                error:      '#FF1B1C',
                info:       '#A23B72',
                success:    '#4CAF50',
                warning:    '#F18F01',
                background: '#212121',
                background2:'#323232',
            }
        },
        // dark: true
    },
    icons: {
        iconfont: 'mdiSvg' || 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
    }
})

