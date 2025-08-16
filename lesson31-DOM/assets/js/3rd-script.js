let activeIndex = 0 
function changeColour(){    
    let lights = document.getElementsByClassName('light')
    for(let i = 0; i < lights.length; i++){
        lights[i].style.background='#000'
    }
    lights[activeIndex].style.background=''
    activeIndex++
    if(activeIndex >= lights.length) activeIndex = 0
}