$(function () {


    /* =========================================
        COUNTDOWN 3
     ========================================= */
    $('#clock-b').countdown(getFromNow() ).on('update.countdown', function(event) {
      var $this = $(this).html(event.strftime(''

        + '<div class="holder m-1"><span class="h2 font-weight-bold">%H</span> GIỜ</div>'
        + '<div class="holder m-1"><span class="h2 font-weight-bold">%M</span> PHÚT</div>'
        + '<div class="holder m-1"><span class="h2 font-weight-bold">%S</span> GIÂY</div>'));
    });

    function getFromNow() {
        return new Date(new Date().valueOf() +  2 * 56 * 59 * 1000);
    }




});
