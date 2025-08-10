//generate a  random color

const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}

//background color change
let intervalId;
const startChangeColor = function(){
   if(!intervalId){
    intervalId = setInterval(changeBackgroundcolor, 2000)
   }

   function changeBackgroundcolor(){
     document.body.style.backgroundColor = randomColor();
   } 
}

const stopChangeColor = function(){
    clearInterval(intervalId)
    intervalId = null;
    
}

document.querySelector("#start").addEventListener
('click', startChangeColor)

document.querySelector('#stop').addEventListener
('click',stopChangeColor)
