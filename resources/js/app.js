require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
import routes from './routes';


Vue.use(VueRouter);

Vue.component('example-component', require('./components/ExampleComponent.vue').default);


const router = new VueRouter({
    //mode: 'history',
  routes // short for `routes: routes`
})



const app = new Vue({
    el: '#app',
    router,
    components:{

    }
});
