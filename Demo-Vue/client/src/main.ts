import Vue from 'vue';
import App from './App.vue';
import Message from './components/Input.vue';
Vue.component('app-message', Message);
import ListTable from './components/ListTable.vue';
Vue.component('app-ListTable', ListTable);
import router from './router';
import store from './store';
import './registerServiceWorker';
import jQuery from 'jquery';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';

// let Bootstrap = require('bootstrap');
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
