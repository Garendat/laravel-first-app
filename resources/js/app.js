// //require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
import router from './router';
import App from './components/App';


// Vue.component(
//     'passport-clients',
//     require('./components/passport/Clients.vue').default
// );

// Vue.component(
//     'passport-authorized-clients',
//     require('./components/passport/AuthorizedClients.vue').default
// );

// Vue.component(
//     'passport-personal-access-tokens',
//     require('./components/passport/PersonalAccessTokens.vue').default
// );


// Vue.component('example-component', require('./components/ExampleComponent.vue'));


const app = new Vue({
	el: '#app',
	render: h => h(App),
	router
});


import route from './route';

