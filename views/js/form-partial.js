function createPartial(count){

  for(let i=0;i<count;i++){
    document.createElement("div");
  }
  <div>
    <h3>Environment 1</h3>
    <label for="env1iq">IQ</label>
    <input type="number" name="env1iq" id="env1iq" step="1" value="50" min="0" max="100"/><br />
    <label for="env1words">Words Spoken</label>
    <input type="range" min="0" max="50000000" class="slider" id="env1words" name="env1words">
  </div>

}
