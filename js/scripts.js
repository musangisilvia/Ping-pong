// business logic
var pingPong = function(number) {

    for (var i = 1; i <= number; i++) {
        if (i % 15 === 0) {
            $("#result").append("<li class='out'>" + "pingpong" + "</li>");
        } else if (i % 5 === 0) {
            $("#result").append("<li class='out'>" + "pong" + "</li>");
        } else if (i % 3 === 0) {
            $("#result").append("<li class='out'>" + "ping" + "</li>");
        } else {
            $("#result").append("<li class='out'>" + String(i) + "</li>");
        }
    };

};

// user interface logic
$(document).ready(function() {
    $("form#pingpong").submit(function(event) {
        event.preventDefault();
        $("li.out").remove();
        var numberIn = parseInt($("input#integer").val());
        // result = pingPong(number);
        pingPong(numberIn);

    });
});
