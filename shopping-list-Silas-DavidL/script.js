'use strict';

function shoppingListHander() {
  $('#js-shopping-list-form').on('submit', event => {
    event.preventDefault();
    const item = $('#shopping-list-entry').val();
    $('.shopping-list').append(
      `<li>
        <span class="shopping-item">${item}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
  });

  // When you click on the submit button, you are reaching up to
  // the sibling of the parent
  $('.shopping-list').on('click', 'li .shopping-item-toggle', function(event){
    event.stopPropagation();
    $(this).parent().siblings().toggleClass('shopping-item__checked');
  });

  // Delete button
  $('.shopping-list').on('click', 'li .shopping-item-delete', function(event){
    $(this).parent().parent().remove();
  });


}

$(shoppingListHander);