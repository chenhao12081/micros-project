import { createApp } from 'vue';

let app;

const App = {
    template: '<div id="vue-app-1"><h1>vue-app-1</h1></div>',
}

export async function bootstrap() {
    console.log('[vue-app-1] bootstrap');
}

export async function mount(props) {
    console.log('[vue-app-1] mount, the props is', props);
    app = createApp(App);
    app.mount(`#${props.microContainer}`);
}

export async function unmount() {
    console.log('[vue-app-1] unmount');
    app && app.unmount();
}