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
  // create rows and cols
  for(let rows=1;rows<=x;rows++) {
    $('#pixelCanvas').append('<tr id="table"' + rows + '></tr>');
    for(let cols=1;cols<=y;cols++) {
      $('#table' + rows).append('<td></td>');
    }
  };

  // choose a color from the color picker
  $('td').click(function addColor() {
    color = $('#colorPicker').val();

    // if the cell already has a color applied, remove it
    if($(this).attr('style')) {
      $(this).removeAttr('style');
      // if the cell does not have a background color then apply this style
    } else {
      $(this).attr('style', 'background-color:' + color);
    }
  });

};
