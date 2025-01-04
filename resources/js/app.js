/**
 * @todo rewrite "AlpineFloatingUI" plugin to "Anchor"
*/

import 'htmx.org'
import '@unocss/reset/normalize.css'
import 'virtual:uno.css'
import './bootstrap'
import _hyperscript from 'hyperscript.org'
import Alpine from 'alpinejs'
import Focus from "@alpinejs/focus"
import AlpineFloatingUI from "@awcodes/alpine-floating-ui"
import Anchor from '@alpinejs/anchor'
import Clipboard from './clipboard'

Alpine.plugin(Focus)
Alpine.plugin(AlpineFloatingUI)
Alpine.plugin(Anchor)
Alpine.plugin(Clipboard)

window.Alpine = Alpine
Alpine.start()
_hyperscript.browserInit()
