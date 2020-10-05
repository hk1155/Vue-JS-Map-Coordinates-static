import Vue from 'vue'
import App from './App.vue'

import VueGeolocation from 'vue-browser-geolocation'

Vue.config.productionTip = false
Vue.use(VueGeolocation)

import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps,{

  load:{

    key:'AIzaSyDSowyaaXbGdklLn7WBlVDyMUTCc6SpuJ8'
  },
  installComponents:false
})

new Vue({
  render: h => h(App),
}).$mount('#app')
