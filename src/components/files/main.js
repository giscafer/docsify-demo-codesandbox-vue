export default function genCode(injectCode = "") {
  return `
  import Vue from 'vue'
  import App from './App'
  /* inject code start*/
  ${injectCode}
  /* inject code end*/
  Vue.config.productionTip = false

  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
  })
  `;
}
