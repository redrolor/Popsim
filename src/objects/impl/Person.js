const Sprite=require("./Sprite");
class Person extends Sprite{
  constructor(intelligence){
    super("data/graphics/sprites/sprite1.png",32, 32, 32, 32, 0);
    this.intelligence=intelligence;

  }
  update(){
    super.update();
    if(this.intelligence>0 &&this.intelligence<25){//BLUE SPRITE
      super.updateImage("data/graphics/sprites/spriteB.png");
    }
    else if(this.intelligence>25 && this.intelligence<50){ //GREEN SPRITE
    super.updateImage("data/graphics/sprites/spriteG.png");

    }
    else if(this.intelligence>50 && this.intelligence<100){//RED SPRITE
    super.updateImage("data/graphics/sprites/spriteR.png")
    }
  }
    fixedUpdate(){
      this.intelligence+=0.05;
    }
  }
module.exports=Person;
