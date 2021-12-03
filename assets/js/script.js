$(function() {
    $("a").click(function(event) {
        event.preventDefault();
        var gato = this.hash;
        $("html, body").animate({
            scrollTop: $(gato).offset().top - 70,
        }, 800);
    });
});


//para integrar el tooltip//
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})


  