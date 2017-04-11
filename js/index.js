
$(document).ready(function(){
    $("a").click(function(event){
        event.preventDefault();
    });
});

$(document).ready(function(){
    $(".hide").hide();
});

$(".read-more").click(function(){
     $("#show-this-on-click").slideDown();
     $(".read-more").slideUp();
     $(".read-less").slideDown();
});

$(".read-less").click(function(){
     $(".hide").slideUp();
     $(".read-less").slideUp();
     $(".read-more").slideDown();
});

$(".learn-more").click(function(){
    $(".learn-more").hide();
     $("#learn-more-text").slideDown();
});
