import './bootstrap';
import '../css/app.css';

import { createApp, h, DefineComponent, defineAsyncComponent } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob<DefineComponent>('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .component('kit-input', defineAsyncComponent(() => import('@/Components/ui/input/Input.vue')))
            .component('kit-button', defineAsyncComponent(() => import('@/Components/ui/button/Button.vue')))
            .component('kit-label', defineAsyncComponent(() => import('@/Components/ui/label/Label.vue')))
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
