const Environment=require("./objects/Environment");
const Sprite=require("./objects/impl/Sprite");

let environments = [];
let url_string=window.location.href;
let url= new URL(url_string);

let canvasHeight = 800;
let canvasWidth = 200;

let environmentCount= url.searchParams.get("environmentCount")
for(let i=0; i<environmentCount; i++){

  environments.push(new Environment(url.searchParams.get("env"+i+"iq"), url.searchParams.get("env"+i+"words"),url.searchParams.get("env"+i+"maxwords"), url.searchParams.get("motheriq"), url.searchParams.get("fatheriq"), canvasWidth, canvasHeight));

}
let scaleImage=document.createElement("IMG");
scaleImage.setAttribute("src","data/graphics/sprites/scale.png" )
scaleImage.setAttribute("width", "200");
scaleImage.setAttribute("height", "800");
scaleImage.setAttribute("alt", "scale");

document.body.appendChild(scaleImage);
