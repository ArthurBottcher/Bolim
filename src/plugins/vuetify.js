import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

export default new Vuetify({
    theme: {
        options: { customProperties: true },
        themes: {
            dark: {
                primary:     '#0cd664',
                secondary:   '#C81F32',
                accent:      '#13F097',
                error:       '#FF1B1C',
                info:        '#A23B72',
                success:     '#4CAF50',
                warning:     '#F18F01',
                background:  '#1A3442',
                background2: '#304854',
            }
        },
        dark: true
    },
    icons: {
        iconfont:  'mdi'
    }
})

