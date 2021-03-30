var ball, dataBase, ballPosition, position;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    dataBase = firebase.database();
    ballPosition = dataBase.ref('ball/position');
    ballPosition.on("value",readPosition,showError)
}

function draw(){
    background("white");
    if(position !== undefined){

    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }}
    drawSprites();
}

function changePosition(x,y){
   dataBase.ref("ball/position").set({
x: position.x + x, y: position.y + y

   })

   
}

function showError(){
    console.log("Error")

}

function readPosition(data){
         position = data.val();
         ball.x = position.x;
         ball.y = position.y;
}
