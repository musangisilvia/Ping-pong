// business logic
var pingPong = function(number) {

    for (var i = 1; i <= number; i++) {
        if (i % 15 === 0) {
            $("#result").append("<li>" + "pingpong" + "</li>");
        } else if (i % 5 === 0) {
            $("#result").append("<li>" + "pong" + "</li>");
        } else if (i % 3 === 0) {
            $("#result").append("<li>" + "ping" + "</li>");
        } else {
            $("#result").append("<li>" + String(i) + "</li>");
        }
    };

};

// user interface logic
$(document).ready(function() {
    $("form#pingpong").submit(function(event) {
        event.preventDefault();
        var numberIn = parseInt($("input#integer").val());
        // result = pingPong(number);
        pingPong(numberIn);

    });
});
