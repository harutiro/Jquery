// 演習場を移動する要素
var moveElement = document.getElementById('circle');
var moveElement2 = document.getElementById('circle2');
var moveElement3 = document.getElementById('circle3');
var moveElement4 = document.getElementById('circle4');

// 円の半径
var radius = 200;
// 円の中心座標
var centerX = 150 - 10;
var centerY = 150 - 10;
// 円の角度
var angle = 0;



// アニメーションの実行 アニメーションの速さ
setInterval(function() {
    circumference();
}, 10);

// アニメーションの処理
function circumference() {
    // 角度毎の円周上の座標を取得
    var moveX = Math.cos(Math.PI / 180 * angle) * radius + centerX;
    var moveY = Math.sin(Math.PI / 180 * angle) * radius + centerY;
    // 座標位置に移動
    moveElement.style.left = moveX + 'px';
    moveElement.style.top = moveY + 'px';

    // 角度毎の円周上の座標を取得
    var moveX = Math.cos(Math.PI / 180 * angle + (Math.PI/2)) * radius + centerX;
    var moveY = Math.sin(Math.PI / 180 * angle + (Math.PI/2)) * radius + centerY;
    // 座標位置に移動
    moveElement2.style.left = moveX + 'px';
    moveElement2.style.top = moveY + 'px';

    // 角度毎の円周上の座標を取得
    var moveX = Math.cos(Math.PI / 180 * angle + Math.PI) * radius + centerX;
    var moveY = Math.sin(Math.PI / 180 * angle + Math.PI) * radius + centerY;
    // 座標位置に移動
    moveElement3.style.left = moveX + 'px';
    moveElement3.style.top = moveY + 'px';

    // 角度毎の円周上の座標を取得
    var moveX = Math.cos(Math.PI / 180 * angle + (Math.PI*1.5)) * radius + centerX;
    var moveY = Math.sin(Math.PI / 180 * angle + (Math.PI*1.5)) * radius + centerY;
    // 座標位置に移動
    moveElement4.style.left = moveX + 'px';
    moveElement4.style.top = moveY + 'px';

    if(angle < 360) {
        // 角度を1度増やす
        angle++;
    } else {
        // 角度を0に戻す
        angle = 0;
    }
}