const Sprite=require("./impl/Sprite");
const PersonController=require("../behaviors/PersonController")
class Environment {
  constructor(averageIq, wordsSpoken, motherIq, fatherIq, context, cw, ch)
  {
    this.environmentContext = context;
    let fps=24;
    this.gameObjects = [];
    this.canvasWidth = cw;
    this.canvasHeight = ch;
    this.averageIq = averageIq;
    this.wordsSpoken = wordsSpoken;
    for(let i=0; i<10; i++){
      let sprite=new Sprite("data/graphics/sprites/sprite1.png",32, 32, 32, 32, 0);
      sprite.attachBehavior(new PersonController(cw, ch));
      this.gameObjects.push(sprite);
    }
    let self = this;
    this.interval = setInterval(function(){ self.gameLoop(); }, 1000/fps);
    this.interval = setInterval(function(){ self.fixedUpdate(); }, 5);

  }

  gameLoop() {
        this.environmentContext.clearRect(0,0, this.canvasWidth, this.canvasHeight);
        this.update();
        this.draw(this.environmentContext);
        this.lateUpdate();
  }

  draw(context){
    this.gameObjects.forEach((gameObject)=>{
      gameObject.draw(context);
    });
  }

  update(){
    this.gameObjects.forEach((gameObject)=>{
      gameObject.update();
    });
  }

  lateUpdate(){
    this.gameObjects.forEach((gameObject)=>{
      gameObject.lateUpdate();
    });
  }

  fixedUpdate(){
    this.gameObjects.forEach((gameObject)=>{
      gameObject.fixedUpdate();
    });
  }
}

module.exports = Environment;
