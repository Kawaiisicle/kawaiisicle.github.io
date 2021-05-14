function getRandomInt(range)
{
    return Math.floor(Math.random() * range);
}

function addListener(element, listener, aFunction)
{
    element.addEventListener(listener,aFunction);
}

function writeInElement(element, text)
{
    element.innerHTML = text
}

function putOnPage(element, where)
{
    if(where)
    {
        where.appendChild(element)
    } else
    {
    document.body.appendChild(element)
    }
}

function createNewElement(input)
{
    return document.createElement(`${input}`)
}

function fadeIn(element, time)
{
    let delay = time/100;
    console.log(`started fade-in of ${element.toString()} with length ${time}ms`)
    element.style.opacity = 0;
    let op = 0;
    let i = 0;
    var fadeInterval = setInterval(function()
    {
        op = i*.01;
        element.style.opacity = op;
        i++;
        i>=101 ? window.clearInterval(fadeInterval) : i = i;
    }, delay)
    console.log(`finished fade in`)
}
function fadeOut(element, time)
{
    let delay = time/100;
    console.log(`started fade-out of ${element.toString()} with length ${time}ms`)
    let op = 1;
    let i = 100;
    var fadeInterval = setInterval(function()
    {
        op = i*.01;
        element.style.opacity = op;
        i--;
        i<= -1 ? window.clearInterval(fadeInterval) : i=i
    }, delay)

    console.log(`finished fade out`)
}

export default
{
    getRandomInt,writeInElement,putOnPage,createNewElement,addListener,fadeIn,fadeOut,
}