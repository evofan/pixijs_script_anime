const WIDTH = 480;
const HEIGHT = 320;
const ASSET_BG = "images/sky_bg.jpg";

// init
let app = new PIXI.Application({
  width: WIDTH,
  height: HEIGHT
});
let canvas = document.getElementById("canvas");
canvas.appendChild(app.view);
app.renderer.backgroundColor = 0x000000;
app.stage.interactive = true;
let bg;
let snow;
let anim_speed = 0.5;

let container_bg = new PIXI.Container();
container_bg.x = 0;
container_bg.y = 0;
app.stage.addChild(container_bg);

let container = new PIXI.Container();
container.width = 480;
container.height = 480;
container.x = 0;
container.y = 0;
container.pivot.x = 0;
container.pivot.y = 0;
container.interactive = true;
app.stage.addChild(container);

// snow property
const MAX_SCALE = 5;
const MAX_ACCEL = 5;
const MIN_ALPHA = 0.5;
const MAX_ALPHA = 1;

PIXI.loader
  .add("bg_data", ASSET_BG)
  .add("snow_data", "images/snow_07.png")
  .load(onAssetsLoaded)

/**
 * Asset load Complete
 * @param { object } loader object
 * @param { object } res asset data
 */
function onAssetsLoaded(loader, res) {

  // BG
  bg = new PIXI.Sprite(res.bg_data.texture);
  container_bg.addChild(bg);
  bg.x = 0;
  bg.y = 0;
  bg.interactive = true;
  bg.on("tap", event => {
    console.log("onTap"); // Desktop(Touch)
  });
  bg.on("click", event => {
    console.log("click"); // Desktop
  });

  // Text
  let text = new PIXI.Text("Fall Snow\n(in Making..)", {
    fontFamily: "Arial",
    fontSize: 30,
    fill: 0xf0fff0,
    align: "center",
    fontWeight: "bold",
    stroke: "#000000",
    strokeThickness: 4,
    dropShadow: false,
    dropShadowColor: "#666666"
  });
  container.addChild(text);
  text.x = 170;
  text.y = 20;

  // Snow animation
  snow = new PIXI.Sprite(res.snow_data.texture);
  container.addChild(snow);

  // x座標
  let xNum = Math.floor(Math.random() * WIDTH + 1);
  snow.x = xNum;

  // y座標
  let yNum = -Math.floor(Math.random() * 100 + 1);
  snow.y = yNum;

  // 拡大率
  //scaleNum = random(10) + 10;
  let scaleNum = Math.floor(Math.random() * MAX_SCALE + 1);
  snow.scaleX = snow.scaleY = scaleNum;

  // 回転方向
  let rotateNum = Math.floor(Math.random() * 2 + 1);

  // 加速度
  let accelNum = Math.floor(Math.random() * MAX_ACCEL + 1);

  // 透明度
  let alphaNum = Math.floor(Math.random() * (MAX_ALPHA - MIN_ALPHA) + MIN_ALPHA);
  scaleNum.alpha = alphaNum;

  // Enter Frame
  app.ticker.add(delta => {

    snow.y += 1;

  });
}

function testAnimation(num) {

  switch (num) {
    case 1:
      anim.animationSpeed = 0.1;
      anim.gotoAndPlay(1);
      break;

    case 2:
      anim.animationSpeed = anim_speed * 2;
      anim.gotoAndPlay(1);
      break;

    default:
      break;
  }
}
