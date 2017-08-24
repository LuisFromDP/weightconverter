  reset();//Resets Everything
   var weight, firstOption, secondOption;

  //Gets the weight input and places the value of it in the blue box
  document.getElementById('weightInput').addEventListener('input', getWeightInput);
  function getWeightInput (e){
    document.getElementById('output').style.visibility = 'visible';
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
  document.getElementById('finalOutput').innerHTML = weight*5;
}

//Clears out all values and reset DOM
  function reset(){
    document.getElementById('mainForm').reset();
    document.getElementById('output').style.visibility = 'hidden';
  }
