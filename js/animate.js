
//================================== BEGIN NAV ANIMATIONS =======================================//
var $homeLink = $('#home');
var $shopLink = $('#shop');
var $authorLink = $('#author');
var $cafeLink = $('#cafe');
var $contactLink = $('#contact');
var $signinLink = $('#signin');
 
$homeLink.hover(
        function() {
            TweenMax.to("#home", 0.5, {y:-8, ease:Bounce.easeOut , scale: 1.25, color: "#17a2b8"});
        },
        function() {
            TweenMax.to("#home", 0.5, {y:0, ease:Bounce.easeOut, scale: 1.0, color: "#000"});
        }

    );

    $shopLink.hover(
        function() {
            TweenMax.to("#shop", 0.5, {y:-8, ease:Bounce.easeOut , scale: 1.15, color: "#17a2b8"});
        },
        function() {
            TweenMax.to("#shop", 0.5, {y:0, ease:Bounce.easeOut, scale: 1.0, color: "#000"});
        }

    );

    $authorLink.hover(
        function() {
            TweenMax.to("#author", 0.5, {y:-8, ease:Bounce.easeOut , scale: 1.15, color: "#17a2b8"});
        },
        function() {
            TweenMax.to("#author", 0.5, {y:0, ease:Bounce.easeOut, scale: 1.0, color: "#000"});
        }

    );

    $cafeLink.hover(
        function() {
            TweenMax.to("#cafe", 0.5, {y:-8, ease:Bounce.easeOut , scale: 1.15, color: "#17a2b8"});
        },
        function() {
            TweenMax.to("#cafe", 0.5, {y:0, ease:Bounce.easeOut, scale: 1.0, color: "#000"});
        }

    );

    $contactLink.hover(
        function() {
            TweenMax.to("#contact", 0.5, {y:-8, ease:Bounce.easeOut , scale: 1.15, color: "#17a2b8"});
        },
        function() {
            TweenMax.to("#contact", 0.5, {y:0, ease:Bounce.easeOut, scale: 1.0, color: "#000"});
        }

    );

    $signinLink.hover(
        function() {
            TweenMax.to("#signin", 0.5, {y:-8, ease:Bounce.easeOut , scale: 1.25, color: "#17a2b8"});
        },
        function() {
            TweenMax.to("#signin", 0.5, {y:0, ease:Bounce.easeOut, scale: 1.0, color: "#000"});
        }

    );
    //===================END NAV ANIMATIONS ========================//


//==================================== BEGIN LOGO ANIMATION ====================================//
    function logoPull(){
        TweenMax.to("#logo", 2, { ease: Elastic.easeInOut.config(1.75, 0.3), x:500});


    }
    logoPull();


//====================================== END LOGO ANIMATION ====================================//