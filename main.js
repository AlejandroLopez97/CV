$(document).ready(
    function () {
        setInterval(
            function () {
                $(".html").animate({"width":"0%"})
                .animate({"width":"90%"},3000)
                .delay(150000)
                .animate({"opacity":"0"})
                .animate({"width":"0%"})
                .animate({"opacity":"1"});
            },1);
        setInterval(()=>{
            $(".css").animate({"width":"0%"})
            .animate({"width":"60%"},3000)
            .delay(150000)
            .animate({"opacity":"0"})
            .animate({"width":"0%"})
            .animate({"opacity":"1"})
        },1);
        setInterval(()=>{
            $(".js").animate({"width":"0%"})
            .animate({"width":"50%"},3000)
            .delay(150000)
            .animate({"opacity":"0"})
            .animate({"width":"0%"})
            .animate({"opacity":"1"})
        },1);
        setInterval(()=>{
            $(".java").animate({"width":"0%"})
            .animate({"width":"85%"},3000)
            .delay(150000)
            .animate({"opacity":"0"})
            .animate({"width":"0%"})
            .animate({"opacity":"1"})
        },1);
        setInterval(()=>{
            $(".php").animate({"width":"0%"})
            .animate({"width":"70%"},3000)
            .delay(150000)
            .animate({"opacity":"0"})
            .animate({"width":"0%"})
            .animate({"opacity":"1"})
        },1);
        setInterval(()=>{
            $(".bd").animate({"width":"0%"})
            .animate({"width":"80%"},3000)
            .delay(150000)
            .animate({"opacity":"0"})
            .animate({"width":"0%"})
            .animate({"opacity":"1"})
        },1);
        setInterval(()=>{
            $(".git").animate({"width":"0%"})
            .animate({"width":"40%"},3000)
            .delay(150000)
            .animate({"opacity":"0"})
            .animate({"width":"0%"})
            .animate({"opacity":"1"})
        },1);
        setInterval(()=>{
            $(".csharp").animate({"width":"0%"})
            .animate({"width":"70%"},3000)
            .delay(150000)
            .animate({"opacity":"0"})
            .animate({"width":"0%"})
            .animate({"opacity":"1"})
        },1);
        setInterval(()=>{
            $(".py").animate({"width":"0%"})
            .animate({"width":"40%"},3000)
            .delay(150000)
            .animate({"opacity":"0"})
            .animate({"width":"0%"})
            .animate({"opacity":"1"})
        },1);
        setInterval(()=>{
            $(".boot").animate({"width":"0%"})
            .animate({"width":"60%"},3000)
            .delay(150000)
            .animate({"opacity":"0"})
            .animate({"width":"0%"})
            .animate({"opacity":"1"})
        },1);
        setInterval(()=>{
            $(".eng").animate({"width":"0%"})
            .animate({"width":"30%"},3000)
            .delay(150000)
            .animate({"opacity":"0"})
            .animate({"width":"0%"})
            .animate({"opacity":"1"})
        },1);
        $(".serv").scroll(setInterval(()=>{
            $(".serv").animate({"width":"0%"})
            .animate({"width":"90%"},3000)
            .delay(150000)
            .animate({"opacity":"0"})
            .animate({"width":"0%"})
            .animate({"opacity":"1"})
        },1));
});
$(document).ready(function(){
    $('.ir-arriba').click(function(){
        $('body, html').animate({
            scrollTop: '0px'
        }, 300);
    });

    $(window).scroll(function(){
        if( $(this).scrollTop() > 0 ){
            $('.ir-arriba').slideDown(300);
        } else {
            $('.ir-arriba').slideUp(300);
        }
    });
});