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

const game = new App(document.querySelector('#gameWindow'));

game.resize();

window.addEventListener('resize', () => game.resize());
