let button = document.querySelector("button[name=button]");
let inputs = document.querySelectorAll("input[type=text]");

button.addEventListener("click", function(){
  inputs.forEach(function(input){
    input.value = "";
  });
});
