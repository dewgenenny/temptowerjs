









function readGCODE(file, startTemp, finishTemp) {
  // Check if the file is an image.


  const reader = new FileReader();
  reader.addEventListener('load', (event) => {
   // gcode.src = event.target.result;
  });
  reader.readAsText(file);

  reader.addEventListener('progress', (event) => {
    if (event.loaded && event.total) {
      const percent = (event.loaded / event.total) * 100;
      console.log(`Progress: ${Math.round(percent)}`);
    }
  });

  reader.addEventListener('loadend', (event) => {
//    console.log( reader.result);
    console.log("GCODE loaded successfully, analysing....")
    outputAnalysis(reader.result, startTemp, finishTemp);
  });
}





function outputAnalysis(gcode, startTemp, finishTemp){
//  console.warn("this was run");
//  window.alert("GCODE Loaded, length: "+gcode.length);
//  console.warn(gcode);

  var lines = gcode.split(/[\r\n]+/g); // tolerate both Windows and Unix linebreaks

var layerCount =0;

  for(var x =0; x < lines.length; x++) {
    if (lines[x].includes("LAYER_CHANGE")){
      layerCount ++;
    }
  }

  console.log("Discovered: "+ layerCount + " layers :)")
  console.log("Start temp set at: " + startTemp);
  console.log("Finish temp set at: " + finishTemp)



}
