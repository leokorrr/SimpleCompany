var i = 0;
$('#check-projects').click(function () {
    i++;
    if (i > 3) {
        $('#check-projects').html("Stop clicking!");
        $('#check-projects').animate({
            marginLeft: "5px",
        }, 100);
        $('#check-projects').animate({
            marginLeft: "-5px",
        }, 100);
        $('#check-projects').animate({
            marginLeft: "5px",
        }, 100);
        $('#check-projects').animate({
            marginLeft: "-5px",
        }, 100);
    } 
    else {
        $('#check-projects').animate({
            marginLeft: "5%",
        }, 400);
        $('#check-projects').animate({
            marginLeft: "0%",
        }, 400);
        $('#check-projects').animate({
            marginLeft: "5%",
        }, 400);
        $('#check-projects').animate({
            marginLeft: "0%",
        }, 400);
    }

})
