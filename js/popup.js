 $(document).ready(function() {
     let checkBox = document.querySelector('input[type="checkbox"]');
     checkBox.addEventListener('change', function() {
         if(checkBox.checked) {
            $('body').css('background-color', '#6404ec');
            $('#text-routify').css('color', 'aquamarine');
            $('#btn-optimize').css('background-color', 'aquamarine');
         } else {
            $('#btn-optimize').css('background-color', '#6404ec');
            $('#text-routify').css('color', '#6404ec');
            $('body').css('background-color', 'aquamarine');
         }
     })
    $("#btn-optimize").click(function() {
        $('body').css('height', '450');
        $('body').css('background-color', '#6404ec');
        $('#text-routify').css('color', 'aquamarine');
        $('#btn-optimize').css('background-color', 'aquamarine');
        cuteAlert({
            type: "success",
            title: "Thanks for using Routify!",
            message: "Your route is now optimized!",
            buttonText: "Woohoo!"
        }).then(function() {
            $('#btn-optimize').css('background-color', '#6404ec');
            $('#text-routify').css('color', '#6404ec');
            $('body').css('background-color', 'aquamarine');
            $('body').css('height', '200');
        });
    });
});