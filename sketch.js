const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Events = Matter.Events;


  var PLAY =1;
  var END = 0;
  var gameState = 1;
  var survivalTime = 0;
  var score = 0;
  var monkey , monkey_running
  var banana ,bananaImage, obstacle, obstacleImage
  var FoodGroup, obstacleGroup
  var gameover;
  var bg,bgimg;
  var score;
  var i;
  var gameState = PLAY;
  var ground,grimg; 
  var index = 0;


function preload(){
  
  
  monkey_running =loadAnimation("sprites/sprite_0.png","sprites/sprite_1.png","sprites/sprite_2.png","sprites/sprite_3.png","sprites/sprite_4.png","sprites/sprite_5.png","sprites/sprite_6.png","sprites/sprite_7.png","sprites/sprite_8.png")
      
     bananaImage = loadImage("sprites/banana.png");
     f = loadImage("sprites/GM.png");
     obstaceImage = loadImage("sprites/CA.png");
     bgimg = loadImage("sprites/BG2.jpg");
}



function setup() {

     background("lightblue");
  
      createCanvas(displayWidth-50,displayHeight-50);
      engine = Engine.create();
      world = engine.world;

  

      bg = createSprite(200,200,displayWidth,displayHeight*2); 
      bg.scale = 1.7;
     
      bg.addImage(bgimg);


      monkey = createSprite(displayWidth-1350,displayHeight-400,25,25);

              
       console.log("gameState"+gameState);     
      monkey.addAnimation("moving",monkey_running);
      bg.x= bg.width/2;
      monkey.scale =0.1;

      ground = createSprite(100,displayHeight-250,3000,10);
      ground.x= ground.width/2;
      
      obstaclesGroup = new Group();
      bananaGroup = new Group();

      Engine.run(engine);

   
}


function draw() {
      
     
        

   
      if(gameState === PLAY){
              

         

        
          camera.position.x = displayWidth/2;
          camera.position.y = monkey.y;


     
        if(monkey.isTouching (bananaGroup) ){
        bananaGroup.destroyEach();
      
        switch(score){

        case 10: monkey.scale = 0.12;
                break;

        case 20: monkey.scale = 0.14;
                break;

        case 30: monkey.scale = 0.16;
                break; 

        case 40: monkey.scale = 0.18;
                break;    


        case 50: monkey.scale = 0.20;
                break;  

        case 60: monkey.scale = 0.22;
                break;    

        case 70: monkey.scale = 0.24;
                break; 

        case 80: monkey.scale = 0.26;
                break;

        case 90: monkey.scale = 0.28;
                break; 

        case 100: monkey.scale = 0.30;
                break; 

        case 110: monkey.scale = 0.32;
                break;

        case 120: monkey.scale = 0.34;
                break;

        case 130: monkey.scale = 0.36;
                break;

        case 140: monkey.scale = 0.38;
                break;    

        case 150: monkey.scale = 0.40;
                break; 

        case 160: monkey.scale = 0.42;
                break;

        case 170: monkey.scale = 0.44;
               break; 

        case 180: monkey.scale = 0.46;
               break;

        case 190: monkey.scale = 0.48;
               break;

        case 200: monkey.scale = 0.50;
               break;

        case 210: monkey.scale = 0.52;
               break; 

        case 220: monkey.scale = 0.54;
               break; 

        case 230: monkey.scale = 0.56;
               break;    

        case 240: monkey.scale = 0.58;
               break;

        case 250: monkey.scale = 0.60;
               break;

        case 260: monkey.scale = 0.52;
               break;

        case 270: monkey.scale = 0.54;
               break;

        case 280: monkey.scale = 0.56;
               break;

        case 290: monkey.scale = 0.58;
               break;

        case 300: monkey.scale = 0.60;
               break;    
               default: break;  
     }
        score = score+2;
   }
    
    
        monkey.collide(ground);
        ground.velocityX = -4;
         
        if (ground.x < 0){
            ground.x= ground.width/2;
          }

          bg.velocityX = -2;
          if (bg.x < 600){
          bg.x= bg.width/2;
          }   
         

          if(touches.length>0||keyDown("space")&& monkey.y >= 150) {
          monkey.velocityY = -12; 
          }
    
        monkey.velocityY = monkey.velocityY + 0.8
         

         ground.visible = false;
         //monkey.debug = true;

        food(); 
        obstacles();
        drawSprites();
        if(monkey.isTouching(obstaclesGroup)){
           console.log("hjdshhh");
           gameState = END;
        }
        
  }else if (gameState === END) {
       monkey.destroy();
       bg.visible = false;
       bananaGroup.destroyEach();
       obstaclesGroup.destroyEach();
       console.log("INSIDE END STATE");
        i = image(f,20,0,displayWidth,displayHeight);
        i.scale = 7;
      
           
       }
 
       drawSprites(); 

     

      textSize(35);
      fill(random(0, 255), random(0, 255), random(0, 255));
      text("Score:"+score,displayWidth-300,displayHeight-400);

     
}

function obstacles(){
  
  if(frameCount% 120 === 0){
       var obstacles = createSprite(displayWidth-40,displayHeight-271,30,30);
       obstacles.addImage( obstaceImage);
       obstacles.scale = 0.3;
       obstacles.velocityX = -13;
       obstacles.y = Math.round(random(30,540));
       obstacles.lifetime=1000;
       obstaclesGroup.add(obstacles);
       obstacles.velocityX =  obstacles.velocityX + 1.4
   }
}

function food(){
  
  if(frameCount% 80 === 0){
      var banana = createSprite(displayWidth-100,displayHeight-800,30,30);
      banana.addImage( bananaImage);
      banana.scale = 0.1;
      banana.velocityX = -11;
      banana.y = Math.round(random(90,540));
      bananaGroup.add(banana);
      banana.velocityX = banana.velocityX + 1.1
  }
}






