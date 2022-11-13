function setup() {
    video= createCapture(VIDEO);
    video.size(550,500);


    canvas = createCanvas(550,500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose' , gotPoses);
}
function draw() {
    background('#d90429');
}
function modelLoaded() {
    console.log('PoseNet Is Intialized');
}
function gotPoses(results)
{
    if(results.length>0){
        console.log(results);
    }
   
}

