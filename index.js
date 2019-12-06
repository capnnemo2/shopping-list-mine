// In terms of user experience, your shopping list app must allow users to:

// enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button
// check and uncheck items on the list by clicking the "Check" button
// permanently remove items from the list

'use strict';

function handleCheckUncheck() {
    $('.shopping-item-toggle').on('click', function(e) {
        const checked = $(this.parent('.shopping-item'));
        if (checked.hasClass('.shopping-item_checked') {
            $(checked).removeClass('.shopping-item_checked');
        } else {
            $(checked).addClass('.shopping-item_checked');
        }
    })
}

$(handleCheckUncheck);