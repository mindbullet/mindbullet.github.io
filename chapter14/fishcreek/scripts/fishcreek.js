
$(function() {
    // show last modified date at bottom of page
    var dateDisplay = $('#date-display');
    var message = 'This page was last modified on: ' + document.lastModified;
    dateDisplay.html(message);
});