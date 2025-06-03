console.log(11);
let timeInterval
let submit = document.getElementById('submit')
let input = document.getElementById('input')
let score = 0
let scoreTitle = document.getElementById('scoreTitle')
let addition = document.getElementById('addition')
let excersize = document.getElementById('excersize')
let answer
let seconds = 60
let time = document.getElementById('time')
let record = 0
let recordTitle = document.getElementById('recordTitle')
let sign = '+'


submit.onclick = function (event) {
    // blocks the site from refreshing
    event.preventDefault()
    if (input.value == answer) {
        input.value = ''
        getExcersize()
        score = score + 1
        scoreTitle.innerHTML = ('Score: ') + score
        if (score > record) {
            record = record + 1
            recordTitle.innerHTML = ('Record: ') + record
        }
    }
}

// allows for the code to be shorter (makes the code for the all the places that we call this function)
function getExcersize() {

    let firstNumber = Math.floor(Math.random() * 101)
    let secondNumber = Math.floor(Math.random() * 101)
    if (sign == '+') {
        answer = firstNumber + secondNumber
    }
    if (sign == '-') {
        answer = firstNumber - secondNumber
    }
    if (sign == '*') {
        firstNumber = Math.floor(Math.random() * 13)
        secondNumber = Math.floor(Math.random() *13)
        answer = firstNumber * secondNumber

    }
    if(sign == '/'){
        answer = Math.floor(Math.random()* 13)
        secondNumber = Math.floor(Math.random()* 13+1)
        firstNumber = answer * secondNumber

    }
    //   to show the excersize on the website
    excersize.innerHTML = ('Excersize: ') + firstNumber + sign + secondNumber
}

function startGame() {
    // stops the timer
    clearInterval(timeInterval)
    getExcersize()
    submit.disabled = false
    score = 0
    scoreTitle.innerHTML = ('Score: 0')
    seconds = 60
    // to set a countdown
    timeInterval = setInterval(() => {
        seconds = seconds - 1
        if (seconds == 0) {
            clearInterval(timeInterval)
            submit.disabled = true
        }
        time.innerHTML = ('Time: ') + seconds
        console.log(seconds);
    }, 1000);

}


addition.onclick = function () {
    sign = '+'
    startGame()
}


subtraction.onclick = function () {
    sign = '-'
    startGame()

}

multiplication.onclick = function () {
    sign = '*'
    startGame()
}

division.onclick = function () {
   sign = '/'
   startGame()
}