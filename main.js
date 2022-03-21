bts="";
function preload()
{
    money =loadSound("MONEY.mp3");
    bts =loadSound("COLDPLAY.mp3");
}
function setup() {
    console.log("hi");
    canvas = createCanvas(400,350);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video,0,0,400,350);
}