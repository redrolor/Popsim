const Behavior=require("../objects/Behavior");
const Person= require("../objects/impl/Person");
class PersonController extends Behavior{
  constructor(environment){
    super();
    this.environment=environment;
    this.environmentWidth = environment.getWidth();
    this.environmentHeight = environment.getHeight();
    this.maxSpeed = 6;
    this.direction = {'x': this.generateRandomSpeed(this.maxSpeed) , 'y': this.generateRandomSpeed(this.maxSpeed)};
  }
  onClick(e){
    console.log("1 game object was clicked")
  }
  update(gameObject) {
    if(gameObject.getX() <= 0)
    {
      this.direction.x = this.convertNumber(this.generateRandomSpeed(this.maxSpeed), 1);
    }
    else if (gameObject.getX() >= this.environmentWidth - 32) {
      this.direction.x = this.convertNumber(this.generateRandomSpeed(this.maxSpeed), -1);
    }

    if(gameObject.getY() <= 0)
    {
      this.direction.y = this.convertNumber(this.generateRandomSpeed(this.maxSpeed), 1);
    }
    else if (gameObject.getY() >= this.environmentHeight - 32) {
      this.direction.y = this.convertNumber(this.generateRandomSpeed(this.maxSpeed), -1);
    }

    gameObject.setX(gameObject.getX() + this.direction.x);
    gameObject.setY(gameObject.getY() + this.direction.y);
  }

  convertNumber(number, modifier)
  {
    return modifier*Math.abs(number);
  }

  generateRandomSpeed(maxSpeed)
  {
    let RandomSpeed = Math.floor(Math.random()*maxSpeed) + 1;
    return Math.floor(Math.random()*2) == 1 ? RandomSpeed : -RandomSpeed;
  }
}


module.exports=PersonController;
