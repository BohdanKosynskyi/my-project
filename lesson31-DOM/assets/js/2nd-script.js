let playList = [
{
 author: "LED ZEPPELIN",
 song:"STAIRWAY TO HEAVEN"
},
{
 author: "QUEEN",
 song:"BOHEMIAN RHAPSODY"
},
{
 author: "LYNYRD SKYNYRD",
 song:"FREE BIRD"
},
{
 author: "DEEP PURPLE",
 song:"SMOKE ON THE WATER"
},
{
 author: "JIMI HENDRIX",
 song:"ALL ALONG THE WATCHTOWER"
},
{
 author: "AC/DC",
 song:"BACK IN BLACK"
},
{
 author: "QUEEN",
 song:"WE WILL ROCK YOU"
},
{
 author: "METALLICA",
 song:"ENTER SANDMAN"
}
];

let btn = document.createElement('button')
btn.innerText = ('Open playlist')
btn.id = 'open-modal'
document.body.appendChild(btn)
btn.addEventListener('click', function openModal(){
    document.getElementById('modal-window').style.display='block'
    document.body.style.backgroundColor='rgba(0, 0, 0, 0.6)'
})

let modalWindow = document.createElement('div')
modalWindow.id = 'modal-window'
modalWindow.classList.add('modal')
document.body.appendChild(modalWindow)

let modalHeader = document.createElement('div')
modalHeader.classList.add('modal-header')

let header = document.createElement('h2')
header.innerText = ('Playlist')

let modalContent = document.createElement('div')
modalContent.classList.add('modal-content')

modalHeader.appendChild(header)
modalWindow.appendChild(modalHeader)
modalWindow.appendChild(modalContent)

let songs = document.createElement('ol')
document.body.append(songs)
let list = document.getElementsByTagName('ol')

playList.forEach((item) => {
    let li = document.createElement('li')
    li.innerText = `${item.author} - ${item.song}`
    songs.appendChild(li)
})

modalContent.appendChild(songs)

let modalFooter = document.createElement('div')
modalFooter.classList.add('modal-footer')

let closeModalBtn = document.createElement('button')
closeModalBtn.innerText = ('Close playlist')
closeModalBtn.id = 'close-modal'
closeModalBtn.addEventListener('click',function closeModal(){
    document.getElementById('modal-window').style.display='none'
    document.body.style.backgroundColor=''
})

modalFooter.appendChild(closeModalBtn)
modalWindow.appendChild(modalFooter)

// document.getElementById('open-modal').addEventListener('click', openModal)

// document.getElementById('close-modal').addEventListener('click', closeModal)

