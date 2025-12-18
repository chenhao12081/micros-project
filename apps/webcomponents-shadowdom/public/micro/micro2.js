class MicroAppElement extends HTMLELement {
    constructor() {
        super();
    }

    connectedCallback() {
        console.log(`[micro-app-2]，执行 ConnectedCallback 生命周期回掉函数`);
        this.mount();
    }

    disconnectedCallback() {
        console.log(`[micro-app-2], 执行 disconnectedCallback 生命周期回掉函数`);
        this.unmount();
    }

    mount() {
        const $shadow = this.attachShadow({ mode: 'open' });
        const $micro = document.createElement('h1');
        $micro.textContent = '微应用2';
        $shadow.appendChild($micro);
    }

    unmount() {}
}

window.customElements.define('micro-app-2', MicroAppElement);