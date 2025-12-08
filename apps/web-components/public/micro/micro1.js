class MicroApp1Element extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        console.log(`[micro-app-1]: 执行 connectedCallback 生命周期回调函数`);

        this.mount();
    }

    disconnectedCallback() {
        console.log(`[micro-app-1]: 执行 disconnectedCallback 生命周期回调函数`);

        this.unmount();
    }

    mount() {
        const $micro = document.createElement('h1');
        $micro.textContent = '微应用1';
        this.appendChild($micro);
    }

    unmount() {
    }
}

window.customElements.define('micro-app-1', MicroApp1Element);