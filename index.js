const btn = document.querySelector('#change-color-btn')
const mainDiv = document.querySelector('#color-box')

function getRandomColor() {
  const red = Math.floor(Math.random() * 254)
  const blue = Math.floor(Math.random() * 254)
  const green = Math.floor(Math.random() * 254)

  const color = `rgb(${red}, ${blue}, ${green})`

  return (mainDiv.style.backgroundColor = color)
}

btn.addEventListener('click', getRandomColor)
