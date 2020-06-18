import {
    lerp
} from './utils';

const scroller = () => {
    let targetScroll = 0,
        curScroll = 0

    const body = document.body
    let scrollContent = document.getElementById('scroll-content')
    body.style.height = `${scrollContent.scrollHeight}px`;

    window.addEventListener('scroll', () => {
        curScroll = window.pageYOffset || document.documentElement.scrollTop
    }, {
        passive: true
    })

    window.addEventListener('resize', () => {
        scrollContent = document.getElementById('scroll-content')
        body.style.height = `${scrollContent.scrollHeight}px`;
    }, {
        passive: true
    })

    const scrollspy = () => {
        const links = document.querySelectorAll('[data-scrollspy]')
        links.forEach(link => {
            link.addEventListener('click', () => {
                let offset = document.getElementById(link.dataset.scrollspy).offsetTop
                document.documentElement.scrollTop = offset
            })
        })
    }

    const render = () => {
        targetScroll = lerp(targetScroll, curScroll, 0.1)
        scrollContent.style.transform = `translate3d(0, ${-1*targetScroll}px, 1px)`;
        window.requestAnimationFrame(render)
    }
    scrollspy()

    window.requestAnimationFrame(render)
}

export {
    scroller
}