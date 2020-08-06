import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.directive('fijar', {
  bind(el, binding) {
    console.log(el, binding);
    el.style.position = 'fixed';
    // el.style.backgroundColor = 'blue';
    if (binding.expresion) {
      el.style.top = binding.expresion + 'px';
    }
    if (binding.arg) {
      let color = 'goldenrod'
      let modificadores = Object.keys(binding.modifiers);
      if (modificadores.length > 0) {
        color = modificadores[0];
      }
      el.style.backgroundColor= color;
    }
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
