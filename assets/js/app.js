import Vue from 'vue';
import VueRouter from 'vue-router';
import Accueil from './components/Accueil.vue';

Vue.use( VueRouter );


// const Foo = { component: Example };
const Bar = { template: '<div>bar</div>' };

const routes = [
    { path: '/foo',icon: 'fa fa-home', component: Accueil },
    { path: '/bar', component: Bar }
];

const router = new VueRouter({
    routes
});

const app = new Vue({
    router
}).$mount('#app');