var btnToAdd = document.querySelector(".addBtn");
var giveInput = document.querySelector(".enterName");
var giveInput2 = document.querySelector(".enterPercentage")
var displayField = document.querySelector(".showResults");
var Message = document.querySelector('.messages');

var getFactory = MarkPercentages();

function theAddBtn(){

    var nameValue = giveInput.value;
    var percentage = giveInput2.value;

   
     var getUOutput = getFactory.setPassRate(nameValue, percentage)

   console.log(getUOutput)

     displayField.innerHTML = getUOutput

}
btnToAdd.addEventListener('click', theAddBtn)