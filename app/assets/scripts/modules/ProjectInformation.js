
// show project descrption
$('#project_info').on("click", function (e) {
    $('.music').hide();
    $("body").css("background-color", "#fff");
    $('.description').show();
    $('#allegro').removeClass('active');
    $(this).addClass('active');
    $(footer).css("position", "")
});

$('#allegro').on("click", function (e) {
    loadFile();
    $('.description').hide();
    $("body").css("background-color", "#1a0d00;");
    $('.music').show();
    $('.score-wrapper').css("display", "block")
    $('#project_info').removeClass('active');
    $(this).addClass('active');
    $(footer).css("display", "none")

});
