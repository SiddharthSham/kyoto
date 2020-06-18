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
        // todo
    }, {
        passive: true
    })

    window.addEventListener('mousedown', event => {
        // todo
    })
    window.addEventListener('mouseup', event => {
        // todo
    })

    const render = () => {

        // todo
        
        window.requestAnimationFrame(render)
    }

    window.requestAnimationFrame(render)
}

export {
    hover
}