$(document).ready(function() {
    console.log("ready!");
});

$('.indexButton').click(function() {
    window.location = "homePage.html" + this.id;
});