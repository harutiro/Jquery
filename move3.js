// canvasを作ってHTMLに突っ込む。
const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 500;
document.body.appendChild(canvas);

// 円運動の中心座標。
// 今回はcanvasの真ん中を中心に移動する。
const centerX = 250;
const centerY = 250;

// 円を描画する中心からの距離。
const distanceFromCenter = 150;

// 表示する円のサイズ。
const circleSize = 30;

// 変化させていくパラメータ。
// angleRadを増加させていき、
// それに伴いxとyが変化していくようにする。
let x = centerX;
let y = centerY;
let angleRad = 0;

// メインループ
function loop(timestamp) {
  // 描画内容を消去する。
  context.clearRect(0, 0, canvas.width, canvas.height);
  
  // angleRadを1度ずつ変化させていく。
  // 1度はMath.PI/180ラジアン。
  angleRad += 1 * Math.PI / 180;

  // ここで座標を変化させていく。
  x = distanceFromCenter * Math.cos(angleRad) + centerX;
  y = distanceFromCenter * Math.sin(angleRad) + centerY;

  // 求めた座標に円を描画する。
  context.beginPath();
  context.arc(x, y, circleSize, 0, Math.PI * 2);
  context.fill();

  window.requestAnimationFrame(loop);
}

window.requestAnimationFrame(loop);