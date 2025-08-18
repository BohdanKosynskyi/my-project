// Створити сторінку, що показує нумерований список пісень:
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
let play = document.createElement('h1')
play.innerText = ('Playlist')
document.body.append(play)

let songs = document.createElement('ol')
document.body.append(songs)
let list = document.getElementsByTagName('ol')

playList.forEach((item) => {
    let li = document.createElement('li')
    li.innerText = `${item.author} - ${item.song}`
    songs.appendChild(li)
})

