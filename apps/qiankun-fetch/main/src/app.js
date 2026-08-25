import { registerQiankun } from './utils/micro.js';
const Home = { template: '<h1>Home</h1>' };

const routes = [{
    path: '/',
    component: Home,
}];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});
registerQiankun();
const app = Vue.createApp({});
app.use(router);
app.mount('#app');
