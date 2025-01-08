import './bootstrap'
import _hyperscript from 'hyperscript.org'
import Alpine from 'alpinejs'
import Focus from "@alpinejs/focus"
import Anchor from '@alpinejs/anchor'
import Clipboard from './clipboard'

import './editor2'

Alpine.plugin(Focus)
Alpine.plugin(Anchor)
Alpine.plugin(Clipboard)

window.Alpine = Alpine
Alpine.start()
_hyperscript.browserInit()
