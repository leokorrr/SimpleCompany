$('#close-project').hide();
$('.project-card').click(function () {
    $('.project-card').not(this).stop(true, true).hide(500);
    $('#close-project').show();
    $('#colosseum-carousel').show(200);
    $('#eiffel-carousel').show(200);
    $('#big-ben-carousel').show(200);
    $('#gates-carousel').show(200);

    var elementWidth = $(this).width() / $(this).parent().width() * 100;
    if (elementWidth != 75) {
        $(".navbar").hide();
        $(this).delay(1000).stop(true, false).animate({
            width: "75vw",
            position: "absolute"
        }, 1000);

        $('.purple-layout').fadeOut();

        var id = '#' + $(this).attr('id') + '-data';
        $(id).delay(1900).stop(true, false).animate({
            width: "25vw"
        }, 1000);

    }




    $('#close-functionality').attr('closure-attr', $(this).attr('id'));

    $('#close-project').click(function () {
        // $('#close-project').hide(1000);
        var elementId = '#' + $('#close-functionality').attr('closure-attr');
        var elementDataId = elementId + '-data';
        $('#close-project').hide();

        $(elementId).delay(1000).stop(true, false).animate({
            width: "25vw",
            position: "absolute",
            zIndex: "9998"
        }, 1000);

        $('.purple-layout').fadeIn();

        var id = '#' + $(this).attr('id') + '-data';
        $(elementDataId).stop(true, false).animate({
            width: "0vw"
        }, 1000);
        $('.project-card').not(elementId).delay(1000).show(1000);
        $('.navbar').delay(1000).css('display', 'block');

        $('#colosseum-carousel').hide();
        $('#eiffel-carousel').hide();
        $('#big-ben-carousel').hide();
        $('#gates-carousel').hide();
    });
});
