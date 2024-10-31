
import { defineCustomElement } from 'vue'
import WcSelectmenu from './components/WcSelectmenu.ce.vue'
import WcSelectmenuTrigger from './components/WcSelectmenuTrigger.ce.vue'
import WcSelectmenuSheet from './components/WcSelectmenuSheet.ce.vue'



customElements.define('wc-selectmenu', defineCustomElement(WcSelectmenu))
customElements.define('wc-selectmenu-trigger', defineCustomElement(WcSelectmenuTrigger))
customElements.define('wc-selectmenu-sheet', defineCustomElement(WcSelectmenuSheet))