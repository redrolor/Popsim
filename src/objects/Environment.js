const Sprite=require("./impl/Sprite");
const Person=require("./impl/Person");
const PersonController=require("../behaviors/PersonController")
class Environment {
  constructor(averageIq, wordsSpoken, motherIq, fatherIq, cw, ch)
  {
    let self=this;
    this.environmentCanvas= document.createElement('canvas');
    this.environmentCanvas.width = cw;
    this.environmentCanvas.height = ch;
    this.environmentCanvas.onclick= function(e){
      self.onClick(e);
    }
    document.body.appendChild(this.environmentCanvas);
    this.environmentContext = this.environmentCanvas.getContext("2d");
    let fps=24;
    this.gameObjects = [];
    this.canvasWidth = cw;
    this.canvasHeight = ch;
    this.averageIq = averageIq;
    this.wordsSpoken = wordsSpoken;
    for(let i=0; i<10; i++){
      let person=new Person(this.averageIq/100);
      person.attachBehavior(new PersonController(self));
      this.gameObjects.push(person);
    }
    this.interval = setInterval(function(){ self.gameLoop(); }, 1000/fps);
    this.fixedInterval = setInterval(function(){ self.fixedUpdate(); }, 1000);

  }

  gameLoop() {
        this.environmentContext.clearRect(0,0, this.canvasWidth, this.canvasHeight);
        this.update();
        this.draw(this.environmentContext);
        this.lateUpdate();
  }
  onClick(e){
    this.gameObjects.forEach((gameObject)=>{
          if(gameObject instanceof Person &&
          gameObject.getX() <=e.offsetX &&
          gameObject.getX()+gameObject.getWidth()>=e.offsetX &&
          gameObject.getY()<=e.offsetY &&
          gameObject.getY()+gameObject.getHeight()>=e.offsetY){
          gameObject.onClick(e);
            return;
          }
        });
        console.log("x:"+e.offsetX+" y:"+e.offsetY);

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
  getWidth(){
    return this.canvasWidth;
  }
  getHeight(){
    return this.canvasHeight;
  }
  getGameObjects(){
    return this.gameObjects;
  }
}
module.exports = Environment;
