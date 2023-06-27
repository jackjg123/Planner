// Save button. When the Button with the Save icon is clicked the user's text is saved to local storage.

// Displays today's date. After DOM has loaded.
$(document).ready(function () {
  $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));
  var currentHour = dayjs().hour();
  console.log(currentHour);
  // Compare current-time to each block.
  $('.time-block').each(function () {
    var blockHour = parseInt($(this).attr('id'));

    // Add color to each time-block
    if (blockHour < currentHour) {
      $(this).addClass('past');
    } else if (blockHour === currentHour) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }
    console.log($('.time-block'));
  });

  // load
  $('.saveBtn').on('click', function () {
    var hour = $(this).parent().attr('id');
    var description = $(this).siblings('.description').val();
    console.log(hour + description);

    localStorage.setItem(hour, description);
  });

  $('.time-block').each(function () {
    var hour = $(this).attr('id');
    var description = localStorage.getItem(hour);

    if (description !== null) {
      $(this).find('.description').val(description);
    }
  });
});
