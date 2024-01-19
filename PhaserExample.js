var init = function() {
 
    var game = new Phaser.Game(width, height, Phaser.CANVAS, "gameArea", {
        preload : preload,
        create : create
    });
 
    function selectFrog(sprite, pointer) {
        console.log("selected");
        sprite.frame = 1; // frog in the air
    }
 
    function releaseFrog(sprite, pointer) {
        console.log("released");
        sprite.frame = 0; // frog sitting
    }
 
    function preload() {
        this.load.spritesheet('frog', 'img/frog.png', 79, 60);
    }
 
    function create() {
 
        this.stage.backgroundColor = "#999999";
 
        var frog = this.add.sprite(50, 50, "frog", 0);
        frog.inputEnabled = true;
        frog.input.enableDrag(true);
        frog.events.onDragStart.add(selectFrog, this);
        frog.events.onDragStop.add(releaseFrog, this);
     //   this.game.canvas.style.cursor = "default";
    // frog.input.useHandCursor = true;
 
    }
 
};
 
window.onload = function() {
    init();
};