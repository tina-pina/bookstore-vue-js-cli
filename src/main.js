import Vue from 'vue'
import App from './App.vue'
import router from './router'

/*add bootstrap*/

import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
/*add bootstrap*/

// add fontawesome

import {
  library
} from '@fortawesome/fontawesome-svg-core'
import {
  faShoppingCart,
  faSearch
} from '@fortawesome/free-solid-svg-icons'
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

library.add(faShoppingCart)
library.add(faSearch)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
