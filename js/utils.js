const lerp = (a, b, n) => (1 - n) * a + n * b
let config = {
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
}

export {
    lerp,
    config
}