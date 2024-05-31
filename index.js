let emoji_change = document.getElementById("emoji_display")
let increment = document.getElementById("incre")
let decrement = document.getElementById("decre")
let reset = document.getElementById("reset")
let affect = document.getElementById("affect")
let moods =["Very sad","Frustrated","Very angry","Triumph","Angry","Meh","Disappointment","Neutral","Confused","Happy (?)","Content","Happy","Smiley face","Embarrassed","Feeling attracted ","In love"]

let count = 9
let list = [128557,128534, 128545,128548,128544,128530,128529,128528,128533,128578,128524,128522,128516,128563,128538,	128525]
function change(count){
    emoji_change.innerHTML= "&#"+list[count]+";"
    affect.innerHTML=moods[count]
}
increment.addEventListener("click", function incremetCount(){
    if(count<15){
        count++
        change(count)
    }
})
reset.addEventListener("click", function resetCount(){
    count = 9
    change(count)
})
decrement.addEventListener("click", function decrementCount(){
    if(count!=0){
        count--
        change(count)
    }
})


