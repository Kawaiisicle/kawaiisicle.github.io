import functions from './functions.js'
import data from './data.js'


/*
||||||||||STYLES||||||||||
*/


//input container
const inputBox = functions.createNewElement('div')
functions.putOnPage(inputBox)
inputBox.style.width = '500px'
inputBox.style.height = '100px'
inputBox.style.position = 'relative'
inputBox.style.top = '5px'
inputBox.style.margin = 'auto'


//input text box
const input = functions.createNewElement('input')
functions.putOnPage(input,inputBox)
input.type = 'text',input.placeholder = 'Ask me anything!'
input.style.margin = 'auto'


//input button
const ask = functions.createNewElement('button')
functions.putOnPage(ask,inputBox)
functions.writeInElement(ask,'Ask!')

//asked question
const question = functions.createNewElement('h1')
functions.putOnPage(question,inputBox)
functions.writeInElement(question,'')
question.style.opacity = '0'
question.style.margin = 'auto',question.style.color = 'white'

//magic 8-ball
const ball = functions.createNewElement('div')
functions.putOnPage(ball,document.body)
ball.style.width = '500px',ball.style.height='500px',ball.style.backgroundColor = 'black',ball.style.color='gray'
ball.style.borderRadius = '50%'
ball.style.positon = 'relative'
ball.style.margin = 'auto'

//magic 8-ball window
const ballWindow = functions.createNewElement('div')
functions.putOnPage(ballWindow,ball)
ballWindow.style.width = '250px',ballWindow.style.height='250px',
ballWindow.style.backgroundColor = 
ballWindow.style.borderRadius = '50%',ballWindow.style.border = '4px solid #444444',
ballWindow.style.position = 'relative'
ballWindow.style.left = '125px'
ballWindow.style.top = '40px'

//answer triangle
const arrow = functions.createNewElement('div')
functions.putOnPage(arrow,ballWindow)
arrow.style.width = '00px',arrow.style.height = '0px',arrow.style.backgroundColor = 'blue',
arrow.style.borderLeft = '80px solid black'
arrow.style.borderRight = '80px solid black'
arrow.style.borderBottom = '0px solid black'
arrow.style.borderTop = '150px solid blue'
arrow.style.position = 'relative'
arrow.style.top = '55px',arrow.style.left = '45px'
arrow.style.verticalAlign = 'top',arrow.style.textAlign = 'center'

//answer text
const arrowText = functions.createNewElement('div')
functions.putOnPage(arrowText,arrow)
arrowText.style.width = '70px',arrowText.style.height = '30px',arrowText.style.backgroundColor = 'blue',
arrowText.style.position = 'absolute'
arrowText.style.alignContent = 'center'
arrowText.style.verticalAlign = 'center'
arrowText.style.margin= 'auto'
arrowText.style.color = 'white'
arrowText.style.top = '-130px',arrowText.style.left = '-35px'

//rest button
const resetButton = functions.createNewElement('button')
functions.putOnPage(resetButton,ball)
resetButton.style.width = '100px'
resetButton.style.height = '100px'
resetButton.style.margin = 'auto'
resetButton.style.position = 'relative'
resetButton.style.left = '10px'
resetButton.style.top = '80px'
resetButton.style.backgroundColor = '#555555'
resetButton.style.borderRadius = '50%'
resetButton.innerHTML = 'RESET'

/*
||||||||||FUNCTIONS||||||||||
*/

function pickAnswer()
{
    console.log(data.answers.length)
    let answer = functions.getRandomInt(data.answers.length)
    console.log(answer)
    return data.answers[answer]
}

function makeAnswer()
{
    arrowText.innerHTML = pickAnswer()
}


function askClicked()
{
    console.log('clicked ask')
    functions.fadeOut(arrow,1000)
    functions.fadeOut(input,1000)
    functions.fadeOut(ask,1000)
    question.innerHTML = input.value;
    functions.fadeIn(question,1000)
    setTimeout(function()
    {
        console.log('faded out') 
        functions.fadeIn(arrow,1000)
        makeAnswer()
    },2000)
}

function resetClicked()
{
    console.log('clicked reset')
    functions.fadeOut(arrow,1000)
    functions.fadeOut(question,1000)
    question.innerHTML = ''
    input.value = ''
    functions.fadeIn(input,1000)
    functions.fadeIn(ask,1000)
    setTimeout(function()
    {
        console.log('faded out') 
        arrowText.innerHTML = ''
        functions.fadeIn(arrow,1000)
},2000)
}

functions.addListener(ask,'click',function(){

    askClicked()
})

functions.addListener(resetButton,'click',function()
{

    resetClicked()
})

function addToPx(string,number)
{
    current = parseInt(string.replace('px',''))
    current += number;
    return toString(current)
}

console.log(addToPx('100px',50))
function shake(element)
{
    element
}


