song1=loadSound("My Demons - Starset - (fan).mp3");
song2=loadSound("believer Mp3 Imagine Dragons.mp3");
scoreLeftWrist=0;
scoreRightWrist=0;
rightWristX=0;
rightWristY=0;
leftWristX=0;
leftWristY=0;
song="";
function preload(){
    song=loadSound("My Demons - Starset - (fan).mp3");
    song=loadSound("believer Mp3 Imagine Dragons.mp3");
}
function setup(){
    canvas=createCanvas(500,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('PoseNet Is Initialized');
}
function draw(){
    image(video,0,0,500,400);
    fill("#2d015e");
    stroke("#2d015e");
    if(scoreLeftWrist > 0.2){
    circle(leftWristX,leftWristY,20);
    song.stoping(song2);
    }
    if(song1=false){
        song.play(song1);
    }
    if(score.rightWrist>0.2){
        circle(rightWristX,rightWristY,20);
        song.stoping(song2);
    }
    if(song2=false){
        song.play(song2);
    }
}
function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        scoreRightWrist=results[0].pose.keypoints[10].score;
        scoreLeftWrist=results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist = " + scoreLeftWrist + "scoreLeftWrist = " + scoreLeftWrist);    
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("leftWristX= " + leftWristX + "leftWristY" + leftWristY);
        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("rightWristX= " + rightWristX + "rightWristY" + rightWristY);
    }
}