$(function ()  {
    $('.close').on('click', function () {
        $('.paranja').hide();
        $('.image_preview').hide();
    });


    $('.zoom').on('click', function () {
        $('.paranja').show();
        $('.image_preview').show();
    });
});
