
import 'htmx.org'
import '@unocss/reset/normalize.css'
import 'virtual:uno.css'
import './bootstrap'
import _hyperscript from 'hyperscript.org'
import Alpine from 'alpinejs'
import Focus from "@alpinejs/focus"
import AlpineFloatingUI from "@awcodes/alpine-floating-ui"

Alpine.plugin(Focus)
Alpine.plugin(AlpineFloatingUI)

window.Alpine = Alpine
Alpine.start()
_hyperscript.browserInit()
