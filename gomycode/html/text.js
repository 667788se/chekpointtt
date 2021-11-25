var buttonPlus=document.getElementById("add");

buttonPlus.addEventListener("click",function(){
  buttonPlus.nextElementSibling.innerHTML++
})



var buttonMinus=document.getElementById("minus");
console.log(buttonMinus)

buttonMinus.addEventListener("click",function(){

  if( buttonMinus.previousElementSibling.innerHTML>0){

  buttonMinus.previousElementSibling.innerHTML--
}
})
    

