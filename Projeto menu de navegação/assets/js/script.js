let menu = document.getElementById("menu").style
let isOpen = false
const openMenu = () => {
    if(!isOpen) {
        menu.width = '200px'
        isOpen = true
    } else {
        menu.width = 0
        isOpen = false
    }
}