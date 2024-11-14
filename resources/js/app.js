
import 'htmx.org'
import _hyperscript from 'hyperscript.org'

import '@unocss/reset/normalize.css'
import 'virtual:uno.css'

_hyperscript.browserInit()

// delete this
import './bootstrap'
import Alpine from 'alpinejs'
window.Alpine = Alpine
Alpine.start()
