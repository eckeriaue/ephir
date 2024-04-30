import './bootstrap';
import '../css/app.css';

import { createApp, h, DefineComponent, defineAsyncComponent } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

declare global {
    export type KitDropdownMenuTrigger = typeof import('@/Components/ui/dropdown-menu/DropdownMenuTrigger.vue').default
    export type KitDropdownMenuContent = typeof import('@/Components/ui/dropdown-menu/DropdownMenuContent.vue').default
    export type KitButton = typeof import('@/Components/ui/button/Button.vue').default
    export type KitDialog = typeof import('@/Components/ui/dialog/Dialog.vue').default
    export type KitPaginationEllipsis = typeof import('@/Components/ui/pagination/PaginationEllipsis.vue').default
    export type KitCarousel = typeof import('@/Components/ui/carousel/Carousel.vue').default
    export type KitCarouselContent = typeof import('@/Components/ui/carousel/CarouselContent.vue').default
}

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

            .component('kit-command', defineAsyncComponent(() => import('@/Components/ui/command/Command.vue')))
            .component('kit-command-list', defineAsyncComponent(() => import('@/Components/ui/command/CommandList.vue')))
            .component('kit-command-dialog', defineAsyncComponent(() => import('@/Components/ui/command/CommandDialog.vue')))
            .component('kit-command-empty', defineAsyncComponent(() => import('@/Components/ui/command/CommandEmpty.vue')))
            .component('kit-command-group', defineAsyncComponent(() => import('@/Components/ui/command/CommandGroup.vue')))
            .component('kit-command-input', defineAsyncComponent(() => import('@/Components/ui/command/CommandInput.vue')))
            .component('kit-command-item', defineAsyncComponent(() => import('@/Components/ui/command/CommandItem.vue')))
            .component('kit-command-separator', defineAsyncComponent(() => import('@/Components/ui/command/CommandSeparator.vue')))
            .component('kit-command-shortcut', defineAsyncComponent(() => import('@/Components/ui/command/CommandShortcut.vue')))

            .component('kit-popover', defineAsyncComponent(() => import('@/Components/ui/popover/Popover.vue')))
            .component('kit-popover-content', defineAsyncComponent(() => import('@/Components/ui/popover/PopoverContent.vue')))
            .component('kit-popover-trigger', defineAsyncComponent(() => import('@/Components/ui/popover/PopoverTrigger.vue')))

            .component('kit-dropdown-menu', defineAsyncComponent(() => import('@/Components/ui/dropdown-menu/DropdownMenu.vue')))
            .component('kit-dropdown-checkbox-item', defineAsyncComponent(() => import('@/Components/ui/dropdown-menu/DropdownMenuCheckboxItem.vue')))
            .component('kit-dropdown-content', defineAsyncComponent(() => import('@/Components/ui/dropdown-menu/DropdownMenuContent.vue')))
            .component('kit-dropdown-group', defineAsyncComponent(() => import('@/Components/ui/dropdown-menu/DropdownMenuGroup.vue')))
            .component('kit-dropdown-menu-item', defineAsyncComponent(() => import('@/Components/ui/dropdown-menu/DropdownMenuItem.vue')))
            .component('kit-dropdown-label', defineAsyncComponent(() => import('@/Components/ui/dropdown-menu/DropdownMenuLabel.vue')))
            .component('kit-dropdown-radio-group', defineAsyncComponent(() => import('@/Components/ui/dropdown-menu/DropdownMenuRadioGroup.vue')))
            .component('kit-dropdown-radio-item', defineAsyncComponent(() => import('@/Components/ui/dropdown-menu/DropdownMenuRadioItem.vue')))
            .component('kit-dropdown-separator', defineAsyncComponent(() => import('@/Components/ui/dropdown-menu/DropdownMenuSeparator.vue')))
            .component('kit-dropdown-shortcut', defineAsyncComponent(() => import('@/Components/ui/dropdown-menu/DropdownMenuShortcut.vue')))
            .component('kit-dropdown-sub', defineAsyncComponent(() => import('@/Components/ui/dropdown-menu/DropdownMenuSub.vue')))
            .component('kit-dropdown-sub-content', defineAsyncComponent(() => import('@/Components/ui/dropdown-menu/DropdownMenuSubContent.vue')))
            .component('kit-dropdown-sub-trigger', defineAsyncComponent(() => import('@/Components/ui/dropdown-menu/DropdownMenuSubTrigger.vue')))
            .component('kit-dropdown-trigger', defineAsyncComponent(() => import('@/Components/ui/dropdown-menu/DropdownMenuTrigger.vue')))
            
            .component('kit-dialog', defineAsyncComponent(() => import('@/Components/ui/dialog/Dialog.vue')))
            .component('kit-dialog-close', defineAsyncComponent(() => import('@/Components/ui/dialog/DialogClose.vue')))
            .component('kit-dialog-content', defineAsyncComponent(() => import('@/Components/ui/dialog/DialogContent.vue')))
            .component('kit-dialog-description', defineAsyncComponent(() => import('@/Components/ui/dialog/DialogDescription.vue')))
            .component('kit-dialog-footer', defineAsyncComponent(() => import('@/Components/ui/dialog/DialogFooter.vue')))
            .component('kit-dialog-header', defineAsyncComponent(() => import('@/Components/ui/dialog/DialogHeader.vue')))
            .component('kit-dialog-scroll-content', defineAsyncComponent(() => import('@/Components/ui/dialog/DialogScrollContent.vue')))
            .component('kit-dialog-title', defineAsyncComponent(() => import('@/Components/ui/dialog/DialogTitle.vue')))
            .component('kit-dialog-trigger', defineAsyncComponent(() => import('@/Components/ui/dialog/DialogTrigger.vue')))

            .component('kit-textarea', defineAsyncComponent(() => import('@/Components/ui/textarea/Textarea.vue')))

            .component('kit-checkbox', defineAsyncComponent(() => import('@/Components/ui/checkbox/Checkbox.vue')))
            
            .component('kit-carousel', defineAsyncComponent(() => import('@/Components/ui/carousel/Carousel.vue')))
            .component('kit-carousel-content', defineAsyncComponent(() => import('@/Components/ui/carousel/CarouselContent.vue')))
            .component('kit-carousel-item', defineAsyncComponent(() => import('@/Components/ui/carousel/CarouselItem.vue')))
            .component('kit-carousel-next', defineAsyncComponent(() => import('@/Components/ui/carousel/CarouselNext.vue')))
            .component('kit-carousel-previous', defineAsyncComponent(() => import('@/Components/ui/carousel/CarouselPrevious.vue')))


            .component('kit-pagination-ellipsis', defineAsyncComponent(() => import('@/Components/ui/pagination/PaginationEllipsis.vue')))
            .component('kit-pagination-first', defineAsyncComponent(() => import('@/Components/ui/pagination/PaginationFirst.vue')))
            .component('kit-pagination-last', defineAsyncComponent(() => import('@/Components/ui/pagination/PaginationLast.vue')))
            .component('kit-pagination-next', defineAsyncComponent(() => import('@/Components/ui/pagination/PaginationNext.vue')))
            .component('kit-pagination-prev', defineAsyncComponent(() => import('@/Components/ui/pagination/PaginationPrev.vue')))

            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
