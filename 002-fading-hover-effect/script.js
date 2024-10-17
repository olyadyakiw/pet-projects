const container = document.querySelector('.container')
const count = 900
let root = document.documentElement

// const colors = [ '#e81416', '#ffa500', '#faeb36', '#79c314', '#487de7', '#4b369d', '#70369d' ]

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener("resize", () => {
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight
})

for(let i = 0; i < count; i++) {
    const item = document.createElement('span')
    container.append(item)
}

// window.addEventListener('mousemove', () => {
//     root.style.setProperty('--hover-color', colors[Math.round(Math.random() * colors.length)]);
// })