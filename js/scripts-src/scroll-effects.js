/*------------------------------------------------*\
    ::  Scroll Effects on Mobile and Work Section
\*------------------------------------------------*/
// Force hover state on ios
var workScroll = function () {
    $('#fullpage').fullpage({
    	scrollingSpeed: 700,
    	resetSliders: true,
    	resetSlidersKey: 'dGhhZGJyaWdncy5jb21fQ3ZiY21WelpYUlRiR2xrWlhKektLSw==',
    	loopBottom: true,
    	anchors:['home', 'about', 'work', 'contact']
    });
};

jQuery(function($){
    workScroll(); 
});	