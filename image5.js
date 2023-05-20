img = "";
status = "";
object = [];
function preload(){
img = loadImage("image5.jpg");
}
function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting objects";
}
function modelLoaded(){
    console.log("model is initialized");
    status = true;
    objectDetector.detect(img,gotResult);
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
        console.log(results);
        object = results;
}
function draw(){
    image(img,0,0,640,420);
}