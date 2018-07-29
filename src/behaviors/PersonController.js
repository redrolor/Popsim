const Behavior=require("../objects/Behavior");

class PersonController extends Behavior{
  constructor(environmentWidth, environmentHeight){
    super();

    this.environmentWidth = environmentWidth;
    this.environmentHeight = environmentHeight;
    this.maxSpeed = 6;
    this.direction = {'x': this.generateRandomSpeed(this.maxSpeed) , 'y': this.generateRandomSpeed(this.maxSpeed)};
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
