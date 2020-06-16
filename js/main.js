const lerp = (a, b, n) => (1 - n) * a + n * b

let config = {
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
}

window.addEventListener('load', () => {
    console.log(`[LOAD]`)
    document.getElementById('loader').remove()
    if (config.width < 768) {
        return
    }
    scroller()
    hover()
});

const scroller = () => {
    let targetScroll = 0, curScroll = 0

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

const hover = () => {
    let mousePos = {
        current: {
            x: 0,
            y: 0,
            r: 0.5
        },
        target: {
            x: 0,
            y: 0,
            r: 0.5
        },
        moveX: 0,
        moveY: 0
    }
    const crsr = document.getElementById('cursor')
    let hoverImages = document.querySelectorAll('.image-cell')

    window.addEventListener('mousemove', move => {
        mousePos.current.x = move.clientX
        mousePos.current.y = move.clientY
    }, {
        passive: true
    })

    window.addEventListener('mousedown', event => {
        mousePos.current.r = 1
    })
    window.addEventListener('mouseup', event => {
        mousePos.current.r = 0.5
    })

    const render = () => {
        mousePos.target.x = lerp(mousePos.target.x, mousePos.current.x, 0.1)
        mousePos.target.y = lerp(mousePos.target.y, mousePos.current.y, 0.1)
        mousePos.target.r = lerp(mousePos.target.r, mousePos.current.r, 0.1)
        mousePos.moveX = (mousePos.target.x - config.width / 2) / config.width * 100
        mousePos.moveY = (mousePos.target.y - config.height / 2) / config.height * 100
        crsr.style.transform = `matrix(${mousePos.target.r}, 0, 0, ${mousePos.target.r}, ${mousePos.target.x - 32}, ${mousePos.target.y -32})`

        hoverImages.forEach(el => {
            el.style.transform = `translate3d(${mousePos.moveX / 2}%, ${mousePos.moveY / 2}%, 1px)`
        })
        window.requestAnimationFrame(render)
    }

    window.requestAnimationFrame(render)
}