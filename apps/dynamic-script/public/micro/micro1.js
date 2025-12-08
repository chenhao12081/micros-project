(function () {
    let root;

    window.micro1_mount = function (slot) {
        root = document.createElement('h1');
        root.textContent = '微应用1';
        const $slot = document.querySelector(slot);
        $slot.appendChild(root);
    }

    window.micro1_unmount = function () {
        if (!root) return;
        root.parentNode.removeChild(root);
    }
})();