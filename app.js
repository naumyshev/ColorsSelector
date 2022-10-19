const cols = document.querySelectorAll('.col')

document.addEventListener('keydown', event => {
    if(event.code.toLowerCase() === 'space') {
        setRandomColors()
    }
})

// const generateRandomColor = () => {
//   const hexCodes = '01234567ABCDEF'
//     let color = ''
//     for (let i =0; i < 6; i ++) {
//         color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
//     }
//     console.log(color)
//     return '#' + color
// }

const setRandomColors = () => {
    cols.forEach( col => {
        const text = col.querySelector('h2')
        const button = col.querySelector('button')
        // const color = generateRandomColor()
        const color = chroma.random()

        col.style.background = color
        text.textContent = color

        setTextColor(text, color)
        setTextColor(button, color)
    })
}

const setTextColor = (text, color) => {
    const luminance = chroma(color).luminance()
    text.style.color = luminance > 0.5 ? 'black' : 'white'
}

setRandomColors()