$(document).ready(function() {
    $("#btn-optimize").click(function() {
        $('body').css('height', '450');
        cuteAlert({
            type: "success",
            title: "Thanks for using Routify!",
            message: "Your route is now optimized!",
            buttonText: "Woohoo!"
        }).then(function() {
            $('body').css('height', '200');
        });
    });
});