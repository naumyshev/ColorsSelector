const cols = document.querySelectorAll('.col')

const generateRandomColor = () => {
  const hexCodes = '01234567ABCDEF'
    let color = ''
    for (let i =0; i < 6; i ++) {
        color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
    }
    console.log(color)
    return '#' + color
}

const setRandomColors = () => {
    cols.forEach( col => {
        const text = col.querySelector('h2')
        const color = generateRandomColor()
        col.style.background = color
        text.textContent = color

    })
}

setRandomColors()