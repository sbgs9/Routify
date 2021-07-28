$(document).ready(function() {
    $("#btn-optimize").click(function() {
        //var alertMessage = "Your route is now optimized. Thanks for using Routify!";
        //alert(alertMessage);
        
        Swal.fire(
            'Thanks for using Routify!',
            'Your route is now optimized!',
            'success'
        )
        
    });
});