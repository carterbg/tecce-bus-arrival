var config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 800,
    _parent: 'phaser-example',
    backgroundColor: '#efefef',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('background', 'img/bg.jpg');
    this.load.image('HHS1', 'img/SchoolBusHHS1.gif');
    this.load.image('HHS2', 'img/SchoolBusHHS2.gif');
    this.load.image('TCHS', 'img/SchoolBusTCHS.gif');
    this.load.image('MHS', 'img/SchoolBusMHS.gif');
    this.load.image('FMHS', 'img/SchoolBusFMHS.gif');
    this.load.image('LHS1', 'img/SchoolBusLHS1.gif');
    this.load.image('LHS2', 'img/SchoolBusLHS2.gif');
    this.load.image('LHSK', 'img/SchoolBusLHSK.gif');
    this.load.image('LHSH', 'img/SchoolBusLHSH.gif');
}

function create ()
{
    var background = this.add.sprite(640, 400, 'background');
    
    var HHS1 = this.add.sprite(100, 150, 'HHS1');
    var HHS2 = this.add.sprite(100, 350, 'HHS2');
    var TCHS = this.add.sprite(100, 550, 'TCHS');
    var MHS = this.add.sprite(300, 550, 'MHS');
    var FMHS = this.add.sprite(500, 550, 'FMHS');
    var LHS1 = this.add.sprite(300, 150, 'LHS1');
    var LHS2 = this.add.sprite(300, 350, 'LHS2');
    var LHSK = this.add.sprite(500, 350, 'LHSK');
    var LHSH = this.add.sprite(500, 150, 'LHSH');
    
    HHS1.setScale(1.75);
    HHS2.setScale(1.75);
    TCHS.setScale(1.75);
    MHS.setScale(1.75);
    FMHS.setScale(1.75);
    LHS1.setScale(1.75);
    LHS2.setScale(1.75);
    LHSK.setScale(1.75);
    LHSH.setScale(1.75);
    
    HHS1.setInteractive();
    HHS2.setInteractive();
    TCHS.setInteractive();
    MHS.setInteractive();
    FMHS.setInteractive();
    LHS1.setInteractive();
    LHS2.setInteractive();
    LHSK.setInteractive();
    LHSH.setInteractive();
    
    this.input.setDraggable(HHS1);
    this.input.setDraggable(HHS2);
    this.input.setDraggable(TCHS);
    this.input.setDraggable(MHS);
    this.input.setDraggable(FMHS);
    this.input.setDraggable(LHS1);
    this.input.setDraggable(LHS2);
    this.input.setDraggable(LHSK);
    this.input.setDraggable(LHSH);
  
    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

        gameObject.x = dragX;
        gameObject.y = dragY;

    });
}