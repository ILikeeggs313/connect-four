class GameLoop{
    constructor() {
        this.fps = 60;
        this.ctx = null;
        this.cnv = null;
        this.loop = null;
    }

    prepareCanvas() {
        this.cnv = document.getElementById('canvas');
        this.ctx = this.cnv.getContext('2d');
        document.body.style.margin = 0;
        document.body.style.padding = 0;
        this.onresize();
    }

    onresize() {
        if ( this.cnv ) {
            this.cnv.width = window.innerWidth;
            this.cnv.height = window.innerHeight;
            this.resize();
        }
    }

    start() {
        this.toggleScreen('startscreen',false);
        this.toggleScreen('canvas',true);
        this.prepareCanvas();
        this.init();
        this.loop = setInterval(() => {
            this.update();
            this.render();
        }, 1000/this.fps);
    }

    toggleScreen(id,toggle) {
        let element = document.getElementById(id);
        let display = ( toggle ) ? 'block' : 'none';
        element.style.display = display;
    }

    init() {
    }

    resize() {
    }

    update() {
    }

    render() {
    }
}
let gameloop = new GameLoop();

gameloop.init = function(){
    game.init(gameloop.cnv);
}
gameloop.resize = function(){
    game.resize(gameloop.cnv);
}
gameloop.update = function(){
    game.update(gameloop.cnv);
}
gameloop.render = function(){
    gameloop.ctx.fillStyle = '#1bafdb';
    gameloop.ctx.fillRect(0, 0, gameloop.cnv.width, gameloop.cnv.height);
}
window.onload = function(){
}
window.onresize = function(){
    gameloop.onresize();
}
function startGame(){
    gameloop.start();
}