// Select color input
// Select size input
const height, width, color;

// When size is submitted by the user, call makeGrid()
// select the form by it's ID and submit it
$('#sizePicker').submit(function(event) {
  event.preventDefault();
  height = $('#inputHeight').val(); // get value of grid height input
  width = $('#inputWidth').val(); // get value of grid width input
  makeGrid(height, width);
});

function makeGrid() {
  // clear the screen
  $('table tr').remove();

  // Your code goes here!


};
