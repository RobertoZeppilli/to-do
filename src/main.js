import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  created: function () {
    this.$store.subscribe((mutation, state) => {
      localStorage.setItem('store', JSON.stringify(state));
    });
  },
  store,
  beforeCreate() {
		this.$store.commit('INITIALIZE_STORE');
	},
  render: h => h(App)
}).$mount('#app')
