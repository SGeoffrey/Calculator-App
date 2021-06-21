
let x=0;
let y=0;
let opp;
const log = document.querySelector('.log')
const equate = document.querySelector('.equate')
const calcButton = document.querySelectorAll('.calcbutton');

calcButton.forEach(button =>{
    button.addEventListener("click",()=>{
        buttonIdentity(button.innerText)
    })
})




function numberProcess (value) {
    if (log.innerText === '0' ){ log.innerText= value}
    else {log.innerText += value}
}



function backspace () {
let z = log.innerText;
if (z.length === 1) {
    log.innerText = "0";
  } else {
    z = log.innerText.substring(0, z.length - 1);
    log.innerText = z  
  } } 



function clear (){
    log.innerText = '0'
    x= 0;
    y=0;
}

function symbolProcess (value) {
    if ( value === "C") {clear ()}
    else if (value === "←") {backspace () }
else { opperator(value)}
}


function buttonIdentity (value) {
    if ( isNaN(value)){
        symbolProcess(value)
    }
    else { numberProcess(value)};
}



function opperator (opperator){
    x= parseInt(log.innerText)
    x= Math.floor(x);
    log.innerText = '0';
    opp= opperator

}

equate.addEventListener("click", function() { 
y = parseInt(log.innerText)
y= Math.floor(y);
if ( opp === "x"){log.innerText= x*y }
else if( opp === "%"){log.innerText= x/y}
else if (opp === "+" ) {log.innerText =  x + y } 
else if ( opp === "-"){ log.innerText= x-y}

} ) 
