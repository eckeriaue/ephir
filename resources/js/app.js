/**
 * @todo rewrite "AlpineFloatingUI" plugin to "Anchor"
*/

import 'uno.css'
import './bootstrap'
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
