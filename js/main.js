import {
    scroller
} from './scroller'
import {
    hover
} from './hover'
import {
    config
} from './utils'

window.addEventListener('load', () => {
    console.log(`[LOAD]`)
    document.getElementById('loader').remove()
    if (config.width < 768) {
        return
    }
    scroller()
    hover()
});