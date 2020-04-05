import Vue from 'vue'
import App from './App.vue'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

// // Set the components prop default to return our fresh components 
// vSelect.props.components.default = () => ({
//     OpenIndicator: {
//       render: createElement => createElement('span', ''),
//     },
//   });

Vue.component('v-select', vSelect)

new Vue({
  el: '#app',
  render: h => h(App)
})