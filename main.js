nose_x=0;
nose_y=0;
left_wristx=0;
right_wristx=0;
difference=0;
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
    fill("red");
    stroke("red");
    square(nose_x,nose_y,difference);
    document.getElementById("square_side").innerHTML="The width and height of the square is "+difference + " px";
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nose_x=results[0].pose.nose.x;
        nose_y=results[0].pose.nose.y;
        console.log("nose.x="+ nose_x);
        console.log( "nose.y="+nose_y);

        left_wristx=results[0].pose.leftWrist.x;
        right_wristx=results[0].pose.rightWrist.x;
        difference= floor(left_wristx-right_wristx);
        console.log("left wrist= "+left_wristx+" right wrist= "+right_wristx+" difference= "+difference);
    }
}

