import {
    lerp
} from './utils';

const scroller = () => {
    let targetScroll = 0,
        curScroll = 0

    const body = document.body
    let scrollContent = document.getElementById('scroll-content')

    // todo

    window.addEventListener('scroll', () => {
        // todo
    }, {
        passive: true
    })

    window.addEventListener('resize', () => {
        // todo
    }, {
        passive: true
    })

    const scrollspy = () => {
        // todo
    }

    const render = () => {
        // todo
        window.requestAnimationFrame(render)
    }
    scrollspy()

    window.requestAnimationFrame(render)
}

export {
    scroller
}