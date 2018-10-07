/*------------------------------------*\
    :: Hover Effects
\*------------------------------------*/
// Force hover state on ios
var hovers = function () {
    $( ".project-box, .nav__link" ).hover(
        function() {
            $(this).addClass( "hover" );
        }, function() {
            $(this).removeClass( "hover" );
        }
    ); 
};

jQuery(function($){
    hovers(); 
});