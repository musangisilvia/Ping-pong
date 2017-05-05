// business logic






// user interface logic
$(document).ready(function() {
    $("form#pingpong").submit(function(event) {
        event.preventDefault();
        var number = $("input#integer").val();
        var result = pingPong(number);
        $("#result").text(result);
    });
});
