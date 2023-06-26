// Save button. When the Button with the Save icon is clicked the user's text is saved to local storage.

// Displays today's date.
$(document).ready(function () {
  $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));
  var currentHour = dayjs().hour();

  // compares current time to each block.
  $('.time-block').each(function () {
    var blockHour = parseInt($(this).attr('id').split('-')[1]);

    // Add color to each time-block
    if (blockHour < currentHour) {
      $(this).addClass('past');
    } else if (blockHour === currentHour) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }
  });
});
