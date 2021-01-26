import Vue from 'vue';
import App from './App.vue';

import './axios-plugin';

Vue.config.productionTip = false;

/* render: function (createElement) {
    return createElement(App);
}; */

new Vue({
	render: h => h(App) // root component gets rendered in div tag
}).$mount('#app'); // mounts instance to the DOM
