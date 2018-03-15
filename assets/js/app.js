import Vue from 'vue';
import VueRouter from 'vue-router';
import Accueil from './components/Accueil.vue';
import Rechercher from './components/Rechercher.vue';
import Carte from './components/Carte.vue';
import GoogleMap from './components/GoogleMap.vue';
import Profil from './components/Profil.vue';
import Contribuer from './components/Contribuer.vue';
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use( VueRouter );
// Vue.use(VueGoogleMaps, {
//     load: {
//         key: "AIzaSyCkHwJPvvVaX0eC2S1XHKuwuDjePSS2uTs",
//         libraries: "places" // necessary for places input
//     }
// });

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

new Vue({
    el: '#app',
    router,

});