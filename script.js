const cubism2Model = "./Hiyori/Hiyori.model3.json";
//const cubism2Model = "./kidsmonster/kidsmonster.model3.json"; 
const src = "./Hiyori/asano.wav";
const live2d = PIXI.live2d;

(async function main() {
  const app = new PIXI.Application({
    view: document.getElementById("canvas"),
    autoStart: true,
    resizeTo: window,
    backgroundColor: 0x333333 });
    const model =  await live2d.Live2DModel.from(cubism2Model);
    app.stage.addChild(model);
    const scaleX = innerWidth * 1.4 / model.width;
    const scaleY = innerHeight * 1.8 / model.height;
    model.scale.set(Math.min(scaleX, scaleY));
    model.y = innerHeight * 0.1;

    const audio = new Audio(src);
    /*
    //今のペースで読み込めば、メディアが最後まで再生できそうだと思ったとき
    audio.addEventListener("canplaythrough", async function (e) {
      const category_name = "Idle";
      const animation_index = 0;
      const priority = "FORCE";
      const result = await model.motion(
        category_name,
        animation_index,
        priority,
        src
      );
      if (result) {
        console.log("リップシンクが正常に開始されました");
      } else {
        console.log("リップシンクの開始に失敗しました");
      }
    });
    */

    audio.src = src;
    //audio.load();
    //console.log("1");
    audio.crossOrigin = "Anonymous";
    audio.volume = 0.5;
    audio.preload = "auto";
    audio.autoplay = true;

    audio.addEventListener("canplaythrough", function() { 
      //audio.play(); 
      console.log("play1");
    }, true);
    audio.addEventListener("load", function() { 
      //audio.play(); 
      console.log("play2");
    }, true);
    console.log("2");



})();

