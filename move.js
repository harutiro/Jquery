$(function() {

    $('#w-i').animate({ "top": "+=300px" },1000, function(){}); 

});

// $(function() {
//     var pos = $("#w-i").offset();//最初の位置
//     var angle = 0;
//     var radius = 200;       //半径
//     var v = 5;      //加速度
//     $(window).scroll(function() {
//         var y = $(this).scrollTop();
//         var radian = angle*(Math.PI/180);
//         angle = y/v;
//         angle %= 360;
//         $("#w-1").css("left", pos.left + radius*Math.cos(radian) );
//         $("#w-1").css("top", pos.top + radius*Math.sin(radian) );
//     });
// });