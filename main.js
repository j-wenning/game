class App {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext ? canvas.getContext('2d') : false;
    this.entities = [];
    this.unit = 1;
    this.sprites = new Image();
    this.sprites.src = './spritesheet.png';
    if (this.ctx) this.callRender();
  }

  get [Symbol.toStringTag]() { return 'Game'; }

  resize() {
    const height = window.innerHeight * .6;
    const width = window.innerWidth * .6;
    if (width > height) {
      this.canvas.height = this.canvas.width = height;
      this.unit = .0032 * height;
    }
    else {
      this.canvas.height = this.canvas.width = width;
      this.unit = .0032 * width;
    }
    this.callRender();
  }

  callRender() {
    window.requestAnimationFrame(() => this.render());
  }

  render() {
    // render stuff
    this.callRender();
  }
}

// new SpriteData({x: 0, y: 0, w: 32, h: 32, f: 10}).render(this, 0, 10, 30, 30)
class SpriteData {
  constructor(...args) {
    this.sprites = args;
  }

  render(app, index = 0, frame = 0, x = 0, y = 0) {
    const { x: sx, y: sy, w, h, f } = this.sprites[index];
    frame = frame % f;
    app.ctx.drawImage(
      app.sprites,
      sx + w * frame,
      sy, w, h,
      app.unit * x,
      app.unit * y,
      app.unit * w,
      app.unit * h);
  }
}


const game = new App(document.querySelector('#gameWindow'));

game.resize();

window.addEventListener('resize', () => game.resize());
