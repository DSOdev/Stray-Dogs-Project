const form = document.querySelector(".formulario")
const mask = document.querySelector(".mask-form")

function showform() {
    form.style.top = "240px"
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mask.style.visibility = "visible"
}

function hiddenform() {
    form.style.top = "-385px"
    form.style.left = "38.1%"
    form.style.transform = "translateX(0)"
    mask.style.visibility = "hidden"
}