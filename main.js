function preload(){

}

function setup(){
    canvas=createCanvas(450, 350);
    canvas.position(900,200);

    video = createCapture(VIDEO);
    video.size(450,350);
    video.position(300,200)

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    background("#39DCD1");
}

function modelLoaded(){
    console.log('PoseNet is initialized');

}

function gotPoses(results){
    if(results.lenght>0)
    {
        console.log(results);
    }
}