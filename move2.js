// 演習場を移動する要素
var moveElement = document.getElementById('circle');
// 円の半径
var radius = 150;
// 円の中心座標
var centerX = 150 - 10;
var centerY = 150 - 10;
// 円の角度
var angle = 0;
 
// アニメーションの実行
setInterval(function() {
    circumference();
}, 20);
 
// アニメーションの処理
function circumference() {
    // 角度毎の円周上の座標を取得
    var moveX = Math.cos(Math.PI / 180 * angle) * radius + centerX;
    var moveY = Math.sin(Math.PI / 180 * angle) * radius + centerY;
    // 座標位置に移動
    moveElement.style.left = moveX + 'px';
    moveElement.style.top = moveY + 'px';
 
    if(angle < 360) {
        // 角度を1度増やす
        angle++;
    } else {
        // 角度を0に戻す
        angle = 0;
    }
}