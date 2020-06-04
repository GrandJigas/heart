class Heart extends Object {
  constructor() {
    super();
  }

  create() {
    createHeart();
  }
}

let canvas;
let ctx;
let k = 0,
  n = 1;
let mousePos;
let isClick = false;

function createHeart() {
  let container = document.createElement("div");
  container.classList.add("container_canvas");

  canvas = document.createElement("canvas");
  canvas.id = "heart";
  canvas.width = 600;
  canvas.height = 600;
  document.body.append(canvas);

  ctx = canvas.getContext("2d");
  // canvas.style.display = "none";

  setTimeout(function () {
    canvas.classList.add("show");
  }, 600);

  ctx.translate(60, 60);
  clickOnHeart();

  beatingHeart = setInterval(drawHeart, 50);
}

function drawHeart() {
  if (isClick) clearInterval(beatingHeart);

  ctx.clearRect(0, 0, 600, 600);

  n += 0.5;
  k = Math.sin(n) * 10;
  let small_k = k / 10;

  ctx.shadowOffsetX = 9;
  ctx.shadowOffsetY = 9;
  ctx.shadowBlur = 10;
  ctx.shadowColor = "rgba(145, 20, 20, 0.3)";
  ctx.fillStyle = "rgb(187, 20, 20)";

  if (isClick) {
    animate({
      duration: 1500,
      timing: function circ(timeFraction) {
        return 1 - Math.sin(Math.acos(timeFraction));
      },
      draw: function (progress) {
        ctx.shadowOffsetX = 9 - 9 * progress;
        ctx.shadowOffsetY = 9 - 9 * progress;
        ctx.shadowBlur = 10 - 10 * progress;
        ctx.shadowColor = "rgba(145, 20, 20, 0.3)";

        ctx.fillStyle = "rgb(187, 20, 20)";

        ctx.clearRect(-60, -60, 600, 600);
        ctx.save();
        ctx.rotate((Math.PI / 180) * progress * 15);
        ctx.translate(progress * 125, progress * -75);
        drawRightHeart(k, small_k);
        ctx.restore();

        ctx.save();
        ctx.rotate((Math.PI / 180) * progress * -15);
        ctx.translate(progress * -160, progress * 100);
        drawLeftHeart(k, small_k);
        ctx.restore();

        ctx.save();
        ctx.rotate((Math.PI / 180) * progress * 15);
        ctx.translate(progress * 125, progress * -75);
        drawHeartGlow(k, small_k);
        ctx.restore();

        //Контур
        ctx.beginPath();

        let toZero = 1 - 1 * progress;
        ctx.strokeStyle = "rgba(25, 25, 25, " + toZero + ")";
        ctx.lineWidth = 6 - 6 * progress;
        console.log();
        ctx.lineCap = "round";
        ctx.shadowColor = "rgba(255, 255, 255, 0)";

        ctx.save();
        ctx.rotate((Math.PI / 180) * progress * -15);
        ctx.translate(progress * -160, progress * 100);
        drawHeartLeftStroke(k, small_k);
        ctx.restore();

        ctx.save();
        ctx.rotate((Math.PI / 180) * progress * 15);
        ctx.translate(progress * 125, progress * -75);
        drawHeartRightStroke(k, small_k);
        ctx.restore();
      },
    });
  } else {
    drawRightHeart(k, small_k);
    drawLeftHeart(k, small_k);
    drawHeartGlow(k, small_k);

    //Контур
    ctx.beginPath();
    ctx.strokeStyle = "rgb(25, 25, 25)";
    ctx.lineWidth = 6;
    ctx.lineCap = "round";
    ctx.shadowColor = "rgba(255, 255, 255, 0)";

    drawHeartLeftStroke(k, small_k);
    drawHeartRightStroke(k, small_k);
  }
  //  setGrid();
}

function drawLeftHeart(k, small_k) {
  ctx.beginPath();
  ctx.moveTo(256, 410 + small_k);
  ctx.bezierCurveTo(230 - k, 320, 20 - k, 240, 80 - small_k, 120 - small_k);
  ctx.bezierCurveTo(
    120 + small_k,
    35 + small_k,
    180 + small_k,
    35 - small_k,
    241,
    120 + small_k
  );
  ctx.shadowColor = "rgba(145, 20, 20, 0)";

  ctx.lineTo(241, 120 + small_k);
  ctx.lineTo(211, 175);
  ctx.lineTo(276, 250);
  ctx.lineTo(206, 300);
  ctx.lineTo(246, 350);

  ctx.fill();
}

function drawRightHeart(k, small_k) {
  ctx.beginPath();
  ctx.moveTo(240, 120 + small_k);
  ctx.bezierCurveTo(
    300 + small_k,
    25 - small_k,
    360 + small_k,
    25 + small_k,
    420 + small_k,
    120 + small_k
  );
  ctx.bezierCurveTo(480 + k + 2, 240, 250 + k + 2, 320, 255, 410 + small_k);
  ctx.lineTo(245, 350);
  ctx.lineTo(205, 300);
  ctx.lineTo(275, 250);
  ctx.lineTo(210, 175);
  ctx.lineTo(240, 120 + small_k);

  ctx.fill();
}

function drawHeartGlow(k, small_k) {
  ctx.beginPath();
  ctx.moveTo(280, 100 + small_k);
  ctx.bezierCurveTo(
    300 + small_k,
    45 - small_k,
    360 + small_k,
    45 + small_k,
    400 + small_k,
    120 + small_k
  );
  ctx.bezierCurveTo(
    430 + small_k,
    180 + small_k,
    400 + small_k,
    200 + small_k,
    325 + small_k,
    275 + small_k
  );
  ctx.bezierCurveTo(380 + small_k, 200 + small_k, 350, 100, 280, 100 + small_k);

  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.shadowBlur = 10;
  ctx.shadowColor = "rgb(255, 255, 255)";

  ctx.fillStyle = "rgba(255, 255, 255, 0.65)";
  ctx.fill();
}

function drawHeartLeftStroke(k, small_k) {
  ctx.beginPath();
  ctx.moveTo(255 + small_k, 410 + small_k);
  ctx.bezierCurveTo(230 - k, 320, 20 - k, 240, 80 - small_k, 120 - small_k);
  ctx.bezierCurveTo(
    120 + small_k,
    35 + small_k,
    180 + small_k,
    35 - small_k,
    240,
    120 + small_k
  );
  ctx.stroke();
}

function drawHeartRightStroke(k, small_k) {
  ctx.moveTo(225, 145 + small_k);
  ctx.bezierCurveTo(
    300 + small_k,
    20 - small_k,
    360 + small_k,
    25 + small_k,
    420 + small_k,
    120 + small_k
  );
  ctx.bezierCurveTo(
    480 + k + 2,
    240,
    250 + k + 2,
    320 + small_k,
    255 + small_k,
    410 + small_k
  );
  ctx.stroke();
}

function setGrid() {
  let step = 50;
  ctx.lineWidth = 1;
  ctx.strokeStyle = "rgb(188, 188, 188)";

  for (let i = step; i < canvas.width; i += step) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, canvas.height);
    ctx.stroke();
  }

  for (let i = step; i < canvas.height; i += step) {
    ctx.beginPath();
    ctx.moveTo(0, i);
    ctx.lineTo(canvas.width, i);
    ctx.stroke();
  }
}

function clickOnHeart() {
  canvas.addEventListener(
    "click",
    function (e) {
      mousePos = getMousePos(canvas, e);
      var c = this.getContext("2d");
      var p = c.getImageData(mousePos.x, mousePos.y, 1, 1).data;

      if (p[3] > 230) {
        isClick = !isClick;
      }
    },
    false
  );
}

function getMousePos(canvas, e) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
  };
}

function animate(options) {
  var start = performance.now();
  requestAnimationFrame(function animate(time) {
    // timeFraction от 0 до 1
    var timeFraction = (time - start) / options.duration;
    if (timeFraction > 1) timeFraction = 1;

    // текущее состояние анимации
    var progress = options.timing(timeFraction);

    options.draw(progress);

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
}
