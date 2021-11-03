let win = window,
    doc = document,
    docElem = doc.documentElement,
    body = doc.getElementsByTagName('body')[0],
    x = win.innerWidth || docElem.clientWidth || body.clientWidth,
    y = win.innerHeight|| docElem.clientHeight|| body.clientHeight;
alert(x + ' × ' + y);
//--------------------------------------------//
const width  = window.innerWidth || document.documentElement.clientWidth || 
document.body.clientWidth;
const height = window.innerHeight|| document.documentElement.clientHeight|| 
document.body.clientHeight;
console.log(width, height);
//-------------------------------------//
let windowSize = document.createElement('h1');
document.body.appendChild(windowSize);
function reportWindowSize() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    windowSize.textContent = `width: ${width}, height: ${height}`;
}
reportWindowSize();
window.addEventListener('resize', () => reportWindowSize());