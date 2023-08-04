export function fadeIn() {
    if (arguments.length > 0) {
        const node = arguments[0];
        if (node.style.display === 'none' || node.style.display === '') {
            const duration = arguments.length === 2 ? arguments[1] : 500;
            const display = arguments.length === 3 ? arguments[2] : 'block';
            node.style.display = display;
            node.animate([
                { opacity: '0' },
                { opacity: '1' }
            ], {
                duration: duration
            });
        }
    }
}

export function fadeOut() {
    if (arguments.length > 0) {
        const node = arguments[0];
        if (node.style.display !== 'none' || node.style.display === '') {
            const duration = arguments.length === 2 ? arguments[1] : 500;
            node.animate([
                { opacity: '1', display: 'block' },
                { opacity: '0', display: 'none' }
            ], {
                duration: duration
            });
            node.style.display = 'none';
        }
    }
}