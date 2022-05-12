var questionNum = 1
var q1 = ["Are you", "having fun", "yet?", "thought not..."]
var qNum = document.getElementById('qNum')
var buttonF = document.getElementById('buttonF')
var buttonB = document.getElementById('buttonB')
var q1 = document.getElementById('q1')
var q2 = document.getElementById('q2')
var q3 = document.getElementById('q3')
var q4 = document.getElementById('q4')
var t1 = document.getElementById('1')
var t2 = document.getElementById('2')
var t3 = document.getElementById('3')
var t4 = document.getElementById('4')
var qPrompt = document.getElementById('qPrompt')
var score = 0
var stuAns = [0, 0, 0, 0]
var questions = ["Is coding fun?", "Why am I making a quiz?", "Are you having fun grading this?", "All four required"]
var answers1 = ["Not particularly", "It's a good exersize for using js", "I hope you are, at least a little bit.", "All four required"]
var answers2 = ["Literally not at all", "It forces us to use our earlier knowledge", "Probably really mind-numbing", "All four required"]
var answers3 = ["Kinda sometimes", "It serves very little purpose other than filler assignment", "Hope this was at least a little different for you.", "All four required"]
var answers4 = ["No", "It has lots of potential to teach us.", "This is the answer.", "All four required"]
var corAnswers = [
    1, 1, 0, 1, // 1-4
    0, 0, 1, 0, // 5-8
    0, 0, 0, 1, // 9-12
    1, 1, 1, 1, // 13-16
]


setQNum()
windowAlertThing()

function windowAlertThing() {
    window.alert("Your personal best is: " + localStorage.getItem("score"))
}

function setQNum() {
    qNum.innerHTML = questionNum
    qPrompt.innerHTML = questions[questionNum - 1]
    t1.innerHTML = answers1[questionNum - 1]
    t2.innerHTML = answers2[questionNum - 1]
    t3.innerHTML = answers3[questionNum - 1]
    t4.innerHTML = answers4[questionNum - 1]
    console.log(questionNum)
    if (questionNum === 5) {
        qNum.innerHTML = "  :)"
        qPrompt.remove()
        t1.innerHTML = "Thanks for playing. You got a " + score + "/4!"
        t2.innerHTML = "Refresh to play again!"
        t3.innerHTML = null
        t4.innerHTML = null
        q1.remove()
        q2.remove()
        q3.remove()
        q4.remove()
        buttonF.remove()
        if (localStorage.getItem(score) < score)
            localStorage.setItem("score", score)
    }
}

$('input[type="checkbox"]').click(function (event) {
    if (event.target === q1) {
        if ($(this).prop("checked") == true) {
            stuAns [0] = 1
        }
        if ($(this).prop("checked") == false) {
            stuAns [0] = 0
        }
    }
    if (event.target === q2) {
        if ($(this).prop("checked") == true) {
            stuAns [1] = 1
        }
        if ($(this).prop("checked") == false) {
            stuAns [1] = 0
        }
    }
    if (event.target === q3) {
        if ($(this).prop("checked") == true) {
            stuAns [2] = 1
        }
        if ($(this).prop("checked") == false) {
            stuAns [2] = 0
        }
    }
    if (event.target === q4) {
        if ($(this).prop("checked") == true) {
            stuAns [3] = 1
        }
        if ($(this).prop("checked") == false) {
            stuAns [3] = 0
        }
    }
})

buttonF.addEventListener('click', function () {
    var correct = 0
    if (stuAns[0] === corAnswers[4 * questionNum - 4])
        correct += 1

    if (stuAns[1] === corAnswers[4 * questionNum - 3])
        correct += 1

    if (stuAns[2] === corAnswers[4 * questionNum - 2])
        correct += 1

    if (stuAns[3] === corAnswers[4 * questionNum - 1])
        correct += 1
    
    if (correct != 4)
        window.alert("Incorrect answer!")
    
    if (correct === 4)
        score += 1

    questionNum += 1
    setQNum()
})
