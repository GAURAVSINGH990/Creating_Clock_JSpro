const button = document.getElementById('stop-button')

function showTime(){
    const currentTime = new Date()
    //console.log(currentTime)
    const time =  `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`
    document.getElementById('time').textContent = time
    //console.log(time)
}

let interval = setInterval(showTime,1000)
button.addEventListener('click', ()=>{
    clearInterval(interval)  //--> Ye time ko rok dega
})
