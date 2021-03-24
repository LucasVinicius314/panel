let menuActive = false
let menu = document.querySelector('aside')
let button = document.querySelector('i')
button.onclick = () => {
  menuActive = !menuActive
  menu.toggleAttribute('active')
}
