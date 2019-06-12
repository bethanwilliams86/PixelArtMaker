//Variables defined
var height = document.getElementById("inputHeight").value;
var width = document.getElementById("inputWidth").value;
var table = document.getElementById("pixelCanvas");
var colour = document.getElementById("colorPicker");
var submitButton = document.querySelector("Input[type='submit']");

//Set the size of the cross stitch table
function makeGrid(height, width) {
    for (var y = 0; y < height; y++) {
        var row = table.insertRow(y);
        for (var x = 0; x < width; x++) {
          let cell = row.insertCell(x);

 //Click on a cell to fill that cell with the chosen colour
      cell.addEventListener("click", function(event) {
        cell.style.backgroundColor = colour.value;
      })
    }
  }
}
makeGrid(height, width);

//Click the submit button to create the table
submitButton.addEventListener("click", function(event) {
  event.preventDefault();

  var height = document.getElementById("inputHeight").value;
  var width = document.getElementById("inputWidth").value;
  table.firstElementChild.remove();

  makeGrid(height, width);

});