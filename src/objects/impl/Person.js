const Sprite=require("./Sprite");
class Person extends Sprite{
  constructor(intelligence,wordsMax,wordsSpoken){
    super("data/graphics/sprites/sprite1.png",32, 32, 32, 32, 0);
    this.intelligence=intelligence;
    this.wordsMax=wordsMax;
    this.wordsSpoken=wordsSpoken;
    this.normalizedWordsSpoken=this.wordsSpoken-this.maxWordsSpoken/2;
    this.changeRate=wordsSpoken/wordsMax;
    this.percentEffectPossible=0.1; //constant
    this.slope=this.percentEffectPossible/this.wordsMax/2; //gets slope of function to normalize data
  }
  update(){
    super.update();
    if(this.intelligence>0 && this.intelligence<25){//BLUE SPRITE
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
      this.intelligence*=(1+(this.slope*this.normalizedWordsSpoken));
    }
  }
module.exports=Person;
