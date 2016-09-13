$(document).ready(function () {
  $('#js-shopping-list-form').on('submit', function (event) {
    event.preventDefault();
    var item = $('#shopping-list-entry');
    $('.shopping-list').append(createItem(item.val()));
    item.val('');
  });

  $('ul')
    .on('click', 'button.shopping-item-toggle', function (event) {
    $(event.currentTarget).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  })
    .on('click', 'button.shopping-item-delete', function (event) {
    $(this).closest('li').remove();
  })
});

function createItem(item) {
  var elem = $('<li></li>');
  elem.append('<span class="shopping-item">' + item + '</span>');
  elem.append(
    '<div class="shopping-item-controls"><button class="shopping-item-toggle">' +
    '<span class="button-label">check</span></button>' +
    ' <button class="shopping-item-delete">' +
    '<span class="button-label">delete</span>' +
    '</button></div>'
  );
  return elem;
}