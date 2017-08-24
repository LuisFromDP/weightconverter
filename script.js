  reset();//Resets Everything
   var weight, firstOption, secondOption;

  //Gets the weight input and places the value of it in the blue box
  document.getElementById('weightInput').addEventListener('input', getWeightInput);
  function getWeightInput (e){
    document.getElementById('output').style.visibility = 'visible';
    document.getElementById('resetBTN').style.visibility = 'visible';
   weight = e.target.value;//Gets input Value
   document.getElementById('weightOutput').innerHTML = weight;//placing the value to the DOM
   weightConverter();
  }

//Gets weight option
document.getElementById('firstOption').addEventListener('change', getFirstOption);
// Changes and Grabs placeholder value for weight type
  function getFirstOption(e){
   firstOption = e.target.value; //Gets placeholder value
     document.getElementById('weightInput').placeholder = 'Enter ' +firstOption+ '...';
     document.getElementById('weightName').innerHTML = firstOption + ":";
     weightConverter();
  }

document.getElementById('secondOption').addEventListener('change', getSecondOption);
  function getSecondOption (e){
    secondOption = e.target.value;
      document.getElementById('convertedWeightName').innerHTML = secondOption+ ":";
      weightConverter();
  }

//Convert weights
function weightConverter (){
  //Need to figure out the logic dynamically
  if(firstOption == "Pounds" && secondOption == "Pounds"){
    document.getElementById('finalOutput').innerHTML = weight*100;
  } else if (firstOption == "Pounds" && secondOption == "Grams") {
    document.getElementById('finalOutput').innerHTML = weight*1000;
  } else if (firstOption == "Pounds" && secondOption == "Tons") {
      document.getElementById('finalOutput').innerHTML = weight*10000;
  } else {
      document.getElementById('finalOutput').innerHTML = weight;
  }
}

//Clears out all values and reset DOM
  document.getElementById('resetBTN').addEventListener('click', reset);
  function reset(){
    document.getElementById('mainForm').reset();
    document.getElementById('output').style.visibility = 'hidden';
    document.getElementById('resetBTN').style.visibility = 'hidden';
  }
