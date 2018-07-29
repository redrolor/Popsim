const Environment=require("./objects/Environment");
const Sprite=require("./objects/impl/Sprite");

let environments = [];
let url_string=window.location.href;
let url= new URL(url_string);

let canvasHeight = 800;
let canvasWidth = 200;

for(let i=0; i<5; i++){
  let canvas = document.createElement('canvas');
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  document.body.appendChild(canvas);
  environments.push(new Environment(url.searchParams.get("env"+i+"iq"), url.searchParams.get("env"+i+"words"), url.searchParams.get("motheriq"), url.searchParams.get("fatheriq"), canvas.getContext("2d"), canvasWidth, canvasHeight));

}
let canvasScale=document.createElement('canvas');
canvasScale.width=canvasWidth;
canvasScale.height=canvasHeight;
document.body.appendChild(canvasScale);
context=canvasScale.getContext("2d");

let scale=new Sprite("data/graphics/sprites/sprite1.png",32, 32, 64, 64, 0);
scale.draw(context);
console.log("scale drawn");
