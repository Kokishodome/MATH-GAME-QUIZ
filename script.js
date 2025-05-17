console.log(11);
let submit=document.getElementById('submit')
let input=document.getElementById('input')
let score=0
let scoreTitle=document.getElementById('scoreTitle')
let addition=document.getElementById('addition')
let excersize=document.getElementById('excersize')
let answer
let seconds=60
let time=document.getElementById('time')


submit.onclick=function(event){
    event.preventDefault()
    if(input.value==answer){

        scoreTitle.innerHTML=('1')
    }
}



addition.onclick=function(){
let firstNumber=Math.floor(Math.random()*1000)
let secondNumber=Math.floor(Math.random()*1000)
answer=firstNumber+secondNumber
excersize.innerHTML=firstNumber+'+'+secondNumber
let timeInterval=setInterval(() => {
    seconds=seconds-1
    if(seconds==0){
       clearInterval(timeInterval)
    }
    time.innerHTML=('Time: ')+seconds
    console.log(seconds);
}, 1000);
}


subtraction.onclick=function(){
let firstNumber=Math.floor(Math.random()*1000)
let secondNumber=Math.floor(Math.random()*1000)
answer=firstNumber-secondNumber
excersize.innerHTML=firstNumber+'-'+secondNumber
}

multiplication.onclick=function(){
let firstNumber=Math.floor(Math.random()*12)
let secondNumber=Math.floor(Math.random()*12)
answer=firstNumber*secondNumber
excersize.innerHTML=firstNumber+' x '+secondNumber
}

division.onclick=function(){
let firstNumber=Math.floor(Math.random()*12)
let secondNumber=Math.floor(Math.random()*12)
answer=firstNumber-secondNumber
excersize.innerHTML=firstNumber+' / '+secondNumber
}