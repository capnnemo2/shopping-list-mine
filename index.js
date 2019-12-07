// In terms of user experience, your shopping list app must allow users to:

// enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button
// check and uncheck items on the list by clicking the "Check" button
// permanently remove items from the list

'use strict';

function addItem() {
    $('#js-shopping-list-form').submit(function(e) {
        event.preventDefault();
        const entry = $('#shopping-list-entry').val();
        $('.shopping-list').append(`<li>
        <span class="shopping-item">${entry}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`
      );
      $(this)[0].reset();
    });
}
$(addItem);












function handleCheckUncheck() {
    $('.shopping-item-toggle').on('click', '.shopping-item-toggle', function(e) {
         $(this).closest('li').find('.shopping-item').toggleClass('.shopping-item_checked');
    })
}

$(handleCheckUncheck);
