const hero = document.querySelector('.hero')

const imagesSrc = [
    'images/img-01.jpg',
    'images/img-02.jpg',
    'images/img-03.jpg',
    'images/img-04.jpg',
    'images/img-05.jpg',
]

const images = []

const addImage = (src, event) => {
    const image = new Image(300, 300)
    let maxImagesCount = 6
    image.src = src
    image.classList.add('image')
    image.style.left = `${event.clientX - (image.width / 2)}px`
    image.style.top = `${event.clientY - (image.height / 2)}px`
    hero.appendChild(image)
    images.push(createImageBitmap)
     if(images.length > maxImagesCount) {
        images.shift()
        hero.querySelector('.image').remove()
    }
}

const randomNum = () => {
    return Math.floor(Math.random() * imagesSrc.length)
}

const coord = {}
let oldRandom;

hero.addEventListener('click', (event) => {
    coord.x = event.clientX
    coord.y = event.clientY

    let randomSrc = randomNum()

    while(randomSrc === oldRandom) {
        randomSrc = randomNum()
    }

    let src = imagesSrc[randomSrc]
    oldRandom = randomSrc
    addImage(src, event)
    hero.lastChild.classList.add('animation')
})

