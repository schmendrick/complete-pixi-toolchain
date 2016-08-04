import * as PIXI from 'pixi.js';
import { Howler } from 'howler';

window.onload = function() {
  main();
};

let gameLoopRoundcount = 0;

class PixiExample {
  constructor() {
    this.renderer = PIXI.autoDetectRenderer(800, 600, { backgroundColor: 0x1099bb});
    let firstDiv = document.body.getElementsByTagName('div')[0];
    firstDiv.appendChild(this.renderer.view);
    this.stage = new PIXI.Container();
    this.texture = PIXI.Texture.fromImage('media/bunny.png');
    this.bunny = new PIXI.Sprite(this.texture);
    this.burp = new Howl({
      src: ['media/burp.wav']
    });
    this.init();
  }

  init() {
    this.bunny.anchor.x = 0.8;
    this.bunny.anchor.y = 0.5;
    this.bunny.position.x = 390;
    this.bunny.position.y = 150;
    this.stage.addChild(this.bunny);
    this.animate();
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));

    //this is the "gameloop"

    this.bunny.rotation = (this.bunny.rotation + 0.1);
    gameLoopRoundcount++;
    if (gameLoopRoundcount % 60 == 0)
      this.burp.play();

    // eof "gameloop"

    this.renderer.render(this.stage);
  }
}

function main() {
  var pixiExample = new PixiExample();
}

