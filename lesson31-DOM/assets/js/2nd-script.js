function openModal(){
    document.getElementById('modal-window').style.display='block'
    document.body.style.backgroundColor='rgba(0, 0, 0, 0.6)'
}

function closeModal(){
    document.getElementById('modal-window').style.display='none'
    document.body.style.backgroundColor=''
}

document.getElementById('open-modal').addEventListener('click', openModal)

document.getElementById('close-modal').addEventListener('click', closeModal)