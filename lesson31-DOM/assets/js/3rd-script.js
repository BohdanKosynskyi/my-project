let activeIndex = 0 
let btn = document.createElement('button')
btn.innerText = ('Змінити колір')
btn.addEventListener('click', function changeColour(){    
    let lights = document.getElementsByClassName('light')
    for(let i = 0; i < lights.length; i++){
        lights[i].style.background='#000'
    }
    lights[activeIndex].style.background=''
    activeIndex++
    if(activeIndex >= lights.length) activeIndex = 0
})
document.body.prepend(btn)

let trafficLight = document.createElement('div')
trafficLight.classList.add('traffic-light')

let redLight = document.createElement('div')
redLight.id = 'red'
redLight.classList.add('light')

let yellowLight = document.createElement('div')
yellowLight.classList.add('light')
yellowLight.id = 'yellow'

let greenLight = document.createElement('div')
greenLight.classList.add('light')
greenLight.id = 'green'

let goIcon = document.createElement('img')
goIcon.src = './/assets/images/go.svg'
goIcon.alt = ('go-icon')

let waitIcon = document.createElement('img')
waitIcon.src = './/assets/images/stop.svg'
waitIcon.alt = ('wait-icon')

document.body.prepend(trafficLight)
trafficLight.appendChild(redLight)
redLight.appendChild(waitIcon)
trafficLight.appendChild(yellowLight)
trafficLight.appendChild(greenLight)
greenLight.appendChild(goIcon)