
import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/inertia-vue3";
import { isArrayBufferView } from "util/types";

createInertiaApp({
    resolve: async name => {
        const pages = import.meta.glob('./Pages/**/*.vue', { eager: true})
        return (await pages[`./Pages/${name}.vue`]())
    },
    setup({el, App, props, plugin }){
        createApp({ render: () => h(App, props)})
        .use(plugin)
        .mount(el)
    }
})
