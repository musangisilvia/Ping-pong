// business logic
var pingPong = function(number) {

    var arrayInput = [];
    for (var i = 1; i <= number; i++);
    if (number % 3 === 0) {
        return "ping"
    };
};

// user interface logic
$(document).ready(function() {
    $("form#pingpong").submit(function(event) {
        event.preventDefault();
        var number = $("input#integer").val();
        var result = pingPong(number);
        $("#result").append("<li>" + result + "</li>");
    });
});
