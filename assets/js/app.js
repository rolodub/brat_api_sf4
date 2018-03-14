import Vue from 'vue';
import VueRouter from 'vue-router';
import Accueil from './components/Accueil.vue';
import Rechercher from './components/Rechercher.vue';
import Carte from './components/Carte.vue';
import Profil from './components/Profil.vue';
import Contribuer from './components/Contribuer.vue';
Vue.use( VueRouter );


// const Foo = { component: Example };
const Bar = { template: '<div>bar</div>' };

const routes = [
    { path: '/accueil', component: Accueil },
    { path: '/rechercher', component: Rechercher },
    { path: '/carte', component: Carte },
    { path: '/profil', component: Profil },
    { path: '/contribuer', component: Contribuer },
];

const router = new VueRouter({
    routes
});

const app = new Vue({
    router
}).$mount('#app');