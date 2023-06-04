

$('#project_info').on("click", function (e) {
    $('.music').hide();
    $("body").css("background-color", "#fff");
    $('.description').show();
    $('#allegro').removeClass('active');
    $(this).addClass('active');
    $(footer).css("position", "")
    $(".wrapper").css("width", "60vw")
    $("body").css("background-color", "#374259")
});

$('#allegro').on("click", function (e) {
    loadFile();
    $('.description').hide();
    $("body").css("background-color", "#1a0d00;");
    $('.music').show();
    $('.score-wrapper').css("display", "block")
    $('.control-bar').css("display", "flex")
    $('#project_info').removeClass('active');
    $(this).addClass('active');
    $(footer).css("display", "none")
    $(".wrapper").css("width", "100vw")
    $("body").css("background-color", "#f6f6f6")
});
