import { registerMicroApps, start } from 'https://cdn.skypack.dev/qiankun';

const mockMicroApps = [{
    name: 'vue-app-1',
    title: 'vue-app-1',
    router: '/app1',
    entry: {
        js: 'http://localhost:3000/public/vueApp1.js',
    },
    container: '#micro-container',
}];

export function registerQiankun() {
    registerMicroApps(mockMicroApps.map((item) => ({
        name: item.name,
        entry: {
            styles: [],
            scripts: [item.entry.js],
            html: `<div id="${item.container}"></div>`,
        },
        container: '#micro-container',
        activeRule: item.router,
        props: {
            microContainer: item.container,
        },
    })));
    start();
    console.log('qiankun started');
}