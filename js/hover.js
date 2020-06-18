import {
    lerp,
    config
} from './utils';

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

export {
    hover
}