
var button="";
var ingredientContent= Array.from(document.getElementsByClassName("ingredient-content"));
var icons=Array.from(document.getElementsByClassName("icon"));

function check(index){
    if(button==""|| button==`<i class="fas fa-plus"></i>`){
        display(index);
    }
    else if(button=`<i class="fas fa-times"></i>`){
        hide(index);
    }
}
function display(index){
ingredientContent[index].innerHTML=`<p class="p-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>`;
button=`<i class="fas fa-times"></i>`;
icons[index].innerHTML=button;
// document.getElementById("icon").innerHTML=button;  
check()

}

function hide(index){
     ingredientContent[index].innerHTML="";
    button=`<i class="fas fa-plus"></i>`;
    icons[index].innerHTML=button;
    // document.getElementById("icon").innerHTML=button;  
}



