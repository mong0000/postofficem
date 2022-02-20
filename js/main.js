//lnb 슬라이드 메뉴
var open = 0; //메뉴가 닫혀있을때(처음)
var du = 400;

$('.menu').click(function(){
    if(open == 0){
        $('.lnb').animate({top:0},du);
        $("body").css('overflow','hidden')
        open = "열림";
    } 
    else {
        $('.lnb').animate({top:'-1000px'},du);
        open = 0;
        $("body").css('overflow','auto')
    }
    
});