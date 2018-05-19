// Select color input
// Select size input
var height, width, color;

// When size is submitted by the user, call makeGrid()
// select the form by it's ID and submit it
$('#sizePicker').submit(function(event) {
  event.preventDefault();
  height = $('#inputHeight').val(); // get value of Grid Height input
  width = $('#inputWidth').val(); // get value of Grid Width input
  makeGrid(height, width);
});

function makeGrid(x, y) {
  // clear the screen
  $('table tr').remove();

  // Your code goes here!
  // create rows and cols
  for(var rows = 1; rows <= x; rows++) {
    $('#pixelCanvas').append('<tr id=table' + rows + '></tr>');
    for(var cols = 1; cols <= y; cols++) {
      $('#table' + rows).append('<td></td');
    }
  }

  // now select the td and add a click event to pick the color and apply
  // it to the td
  $('td').click(function(clickEvent) {
    let color = $('#colorPicker').val();
    $(clickEvent.target).css('background-color', color);
  });

}
