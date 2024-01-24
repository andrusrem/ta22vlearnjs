
import './style.scss';
import { createApp } from 'vue';
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import App from './App.vue';
import ToDo from './pages/ToDo.vue';
import Modals from './pages/Modals.vue';
import ChuckNorris from './pages/ChuckNorris.vue';
import RickAndMorty from './pages/RickAndMorty.vue';


const routes = [
    { path: '/', component: ToDo, name: "ToDo" },
    { path: '/modals', component: Modals, name: "Modals" },
    { path: '/chuck', component: ChuckNorris, name: "Chuck Norris" },
    { path: '/rick', component: RickAndMorty, name: "Rick and Morty" }
];

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),

    routes, // short for `routes: routes`
});
  

let app = createApp(App);

app.use(router);

app.mount('#app');