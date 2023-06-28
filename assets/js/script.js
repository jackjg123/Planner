//Allows page to load before running
$(document).ready(function () {
  // Displays date
  $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));
  var currentHour = dayjs().hour();
  console.log(currentHour);

  // Compare currentHour to each time-block.
  $('.time-block').each(function () {
    // adds time-block id to blockHour variable
    var blockHour = $(this).attr('id');

    // Set time block past, present or future
    // Give corresponding color for each time-block
    if (blockHour < currentHour) {
      $(this).addClass('past');
    } else if (blockHour === currentHour) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }
    console.log($('.time-block'));
  });

  // Saves the user's text to local storage when save button is clicked.
  $('.saveBtn').on('click', function () {
    var hour = $(this).parent().attr('id');
    var description = $(this).siblings('.description').val();
    console.log(hour + description);

    localStorage.setItem(hour, description);
  });

  // Retrieves local Storage information and displays it to time-block.
  $('.time-block').each(function () {
    var hour = $(this).attr('id');
    var description = localStorage.getItem(hour, description);

    if (description !== null) {
      $(this).find('.description').val(description);
    }
  });
});
