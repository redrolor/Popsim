var environmentCount=1;
var environmentCountElement=null;
function createEnvironmentPartial(index, targetId){
  var partial = document.createElement("div");

  var header = document.createElement("h3");
  header.innerText = "Environment "+(index+1);
  partial.appendChild(header);

  var iqLabel=document.createElement("label");
  iqLabel.setAttribute("for", "env" + index + "iq")
  partial.appendChild(iqLabel);

  var environmentIq=document.createElement("input");
  partial.appendChild(environmentIq);

  environmentIq.type="number";
  environmentIq.setAttribute("iq", "env"+ index + "iq");
  environmentIq.setAttribute("name", "env"+ index + "iq");
  environmentIq.setAttribute("step", "1");
  environmentIq.setAttribute("value", "50");
  environmentIq.setAttribute("min", "0");
  environmentIq.setAttribute("max", "100");

  var br = document.createElement("br");
  partial.appendChild(br);


  var wordLabel=document.createElement("label");
  wordLabel.setAttribute("for", "env"+index+"words")
  partial.appendChild(wordLabel);

  var environmentWords= document.createElement("input");
  environmentWords.type="range";
  environmentWords.setAttribute("min", "0");
  environmentWords.setAttribute("max", "50000000");
  environmentWords.setAttribute("class", "slider");
  environmentWords.setAttribute("id", "env" + index + "words");
  environmentWords.setAttribute("name", "env" + index + "words");
  partial.appendChild(environmentWords);

  document.getElementById(targetId).appendChild(partial);



}

document.addEventListener("DOMContentLoaded", function(event){
  environmentCountElement=document.getElementById("environmentCount");
    createEnvironmentPartial(0, "partials");

    environmentCountElement.addEventListener("change", function(event){
      var value=event.target.value;
      var partials = document.getElementById("partials");
      partials.innerHTML="";
      for(var i=0; i<value; ++i){
        createEnvironmentPartial(i, "partials");
      }
    });
});
