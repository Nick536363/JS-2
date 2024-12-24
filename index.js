let green_light =document.getElementById("t_light_green");
let red_light = document.getElementById("t_light_red");
let result = document.getElementById("result");
let IsGreen = false
let IsRed = false
function isGreen(){
    if(IsGreen==false){
        green_light.style.backgroundColor = "green"
        red_light.style.backgroundColor = "gray"
        result.textContent = "Green light! Go ahead!"
        IsGreen = true
        IsRed = false
    }
    else{
        green_light.style.backgroundColor = "gray"
        result.textContent = ""
        IsGreen = false
    }
    
}
function isRed(){
    if(IsRed==false){
        red_light.style.backgroundColor = "red"
        green_light.style.backgroundColor = "gray"
        result.textContent = "Red light! Stop!"
        IsRed = true
        IsGreen = false
    }
    else{
        red_light.style.backgroundColor = "gray"
        result.textContent = ""
        IsRed = false
    }
    
}
green_light.addEventListener("click",isGreen);
red_light.addEventListener("click",isRed);