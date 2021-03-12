import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

export default new Vuetify({
    theme: {
        options: { customProperties: true },
        themes: {
            dark: {
                primary:    '#204dD6',
                secondary:  '#0cd664',
                accent:     '#13F097',
                error:      '#FF1B1C',
                info:       '#A23B72',
                success:    '#4CAF50',
                warning:    '#F18F01',
                background: '#415662',
                background2:'#8697A2',
            }
        },
        dark: true
    },
    icons: {
        iconfont: 'mdiSvg' || 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
    }
})

