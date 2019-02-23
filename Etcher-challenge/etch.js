// Add Event Listeners here:
'use strict';

// When DOM is ready:
$(() => {
  // draw grid 
  createAndPlaceRows(8);
  // Bind your event listeners here:
  // etchering, when mouse is over a grid, it will trigger the grid active. 
  // used event delegation.
  $('.row').on('mouseover','.cell',function(){
    $(this).addClass('active');
    //console.log('firing grid');
   
  });
  // listener for reset button.
  $('.controls button').on('click',function(event){
    // when button is pushed, redraw grids
    createAndPlaceRows(8);
    // then reapply the mouse over function above. 
    $('.row').on('mouseover','.cell',function(){
      $(this).addClass('active');
      
     
    });
  });
});







// ===============================
// Code below is to automate grid creation
// You can ignore this!
// ===============================
function createRow(cellCount) {
  let row = '<div class="row">';
  let str = '<div class="cell">&nbsp;</div>';
  for (let i = 0; i < cellCount; i++) {
    row += str;
  }
  row += '</div>';
  return row;
}

function createRows(n) {
  let rows = '';
  for (let i = 0; i < n; i++) {
    rows += createRow(n);
  }
  return rows;
}

function createAndPlaceRows(n) {
  $('.cell').remove(); // Clear all current cells and listeners
  const rows = createRows(n);
  $('.grid').html(rows);
  const cells = $('.cell');
  cells.css({ height: cells.width() });
}
