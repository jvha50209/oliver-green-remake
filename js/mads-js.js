const imageSlider = document.querySelector("#image-slider")
const prev = document.querySelector("#prev")
const next = document.querySelector("#next")
let currentImageIndex = 0

const images = [
    { url: "img/menu/billedeog.jpg" },
    { url: "https://placekitten.com/251/251" },
    { url: "https://placekitten.com/252/252" },
    { url: "https://placekitten.com/253/253" },
    { url: "https://placekitten.com/254/254" },
    { url: "https://placekitten.com/255/255" },
    { url: "https://placekitten.com/256/256" },
]

for (let index = 0; index < images.length; index++) {
    const img = document.createElement("img")
    img.setAttribute("src", images[index].url)
    img.classList.add("billede")
    imageSlider.appendChild(img)

    /* Add active class to first element in array */
    if (index === 0) img.classList.add("active")
}

function nextImage() {
    const currentImage = document.getElementsByClassName("billede")[currentImageIndex]

    currentImageIndex++

    if (currentImageIndex === images.length) {
        currentImageIndex = 0
    }

    const nextImage = document.getElementsByClassName("billede")[currentImageIndex]

    currentImage.classList.remove("active")
    nextImage.classList.add("active")
}

function prevImage() {
    const currentImage = document.getElementsByClassName("billede")[currentImageIndex]


    if (currentImageIndex === 0) {
        currentImageIndex = images.length - 1
    }

    currentImageIndex--

    const prevImage = document.getElementsByClassName("billede")[currentImageIndex]

    currentImage.classList.remove("active")
    prevImage.classList.add("active")
}

next.addEventListener("click", nextImage)
prev.addEventListener("click", prevImage)
