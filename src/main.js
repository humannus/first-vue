import Vue from 'vue'
import App from './App.vue'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';

Vue.config.productionTip = false

Vue.component('v-select', vSelect)

new Vue({
  el: '#app',
  data: {
    options: []
  },
  render: h => h(App)
})