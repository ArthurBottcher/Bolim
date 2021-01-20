import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary:    '#01BAEF',
                secondary:  '#0B4F6C',
                accent:     '#13F097',
                error:      '#FF1B1C',
                info:       '#A23B72',
                success:    '#4CAF50',
                warning:    '#F18F01',
                background: '#FBFBFF',
                text:       '#000000'
            },

            dark: {
                primary:    '#0B4F6C',
                secondary:  '#01BAEF',
                accent:     '#13F097',
                error:      '#FF1B1C',
                info:       '#A23B72',
                success:    '#4CAF50',
                warning:    '#F18F01',
                background: '#757575',
                text:       '#FEFEFE'
            }
        },
    },
    icons: {
        iconfont: 'mdiSvg' || 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
    }
})

