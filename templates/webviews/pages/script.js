$(document).ready(function() {
// 1. Define route components.
var Accueil = {
    template: '#accueil'
};
var Recherche = {
    template: '#recherche'
};
var Carte = {
    template: '#carte'
};
var Profil = {
    template: '#profil'
};
var Contribuer = {
    template: '#contribuer'
};
var Contenu = {
    template: '#contenu'
};
var Nope = {
    template: '#nope'
};
Vue.component('routing', {
    template: '#routing',
    computed: {
        routes: function () {
            var routes = [];
            for (var i in this.$router.options.routes) {
                if (!this.$router.options.routes.hasOwnProperty(i)) {
                    continue
                }
                var route = this.$router.options.routes[i];
                if(route.hasOwnProperty('icon')) {
                    routes.push(route);
                }
            }
            return routes;
        }
    }
});

// 2. Define some routes
var routes = [{
    name: 'accueil',
    title: 'Accueil',
    icon: 'fa fa-home',
    path: '/accueil',
    component: Accueil
}, {
    name: 'rechercher',
    title: 'Rechercher',
    icon: 'fa fa-search',
    path: '/rechercher',
    component: Recherche
}, {
    name: 'carte',
    title: 'Autour de moi',
    icon: 'fa fa-map-marker',
    path: '/carte',
    component: Carte
}, {
    name: 'profil',
    title: 'Profil',
    icon: 'fa fa-user',
    path: '/profil',
    component: Profil
}, {
    name: 'contribuer',
    title: 'Contribuer',
    icon: 'fa fa-plus',
    path: '/contribuer',
    component: Contribuer
}, {
    name: 'contenu',
    path: '/contenu',
    component: Contenu
}, {
    name: 'oups',
    path: '/erreur',
    component: Nope
}, {
    path: '*',
    redirect: {
        name: 'accueil'
    }
}];

// 3. Create the router instance and pass the `routes` option
var router = new VueRouter({
    routes // short for routes: routes
});

// 4. Create and mount the root instance.
var app = new Vue({
    router
}).$mount('#app');

// Now the app has started!
});