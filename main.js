function setup(){
    canvas=createCanvas(500,450);
    canvas.position(560,60);
    video=createCapture(VIDEO);
    video.size(500,500);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("model is loaded");
}

function draw(){
    background("#969a97");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}

