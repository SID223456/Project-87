var canvas=new fabric.Canvas('myCanvas');

block_width = 30 ; 
block_height = 30;

player_x = 10;
player_y = 10;

var player_object = "";
var block_object = "" ; 

function player_update()
{
    fabric.Image.fromURL("player.png" , function(Img)
    {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    }) ;
}
function object_update(get_object_image)
{
    fabric.Image.fromURL(get_object_image , function(Img)
    {
        block_object = Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_object);
    }) ;
}


window.addEventListener("keydown",myKeydown);

function myKeydown(e)
 {
    keyPressed=e.keyCode;
    console.log(keyPressed);

    if(e.shiftKey==true && keyPressed=='80'){
        console.log("Shift+P is pressed");
        block_height=block_height+10;
        block_width=block_width+10;
        document.getElementById("current_Width").innerHTML=block_width;
        document.getElementById("current_Height").innerHTML=block_height;
    }
    if(e.shiftKey==true && keyPressed=='77'){
        console.log("Shift+M is pressed");
        block_height=block_height-10;
        block_width=block_width-10;
        document.getElementById("current_Width").innerHTML=block_width;
        document.getElementById("current_Height").innerHTML=block_height;
    }    
   
   if(keyPressed=='70'){
    object_update('head.png');
   console.log("F Head ")
   }
   if(keyPressed=='66'){
    object_update('spiderman_body.png');
   console.log("B body")
   }
   if(keyPressed=='76'){
    object_update('hulk_legs.png');
   console.log("L Legs");
   }
   if(keyPressed=='72'){
   object_update('captain_america_left_hand.png');
   console.log("Left hand");
   }
   if(keyPressed=='82'){
    object_update('thor_right_hand.png');
   console.log("Right hand");
   }
   if(keyPressed =='37'){
    left();
    console.log("Left key ");
   }
   if(keyPressed =='38'){
    up();
    console.log("up key ");
   }
   if(keyPressed =='39'){
    right();
    console.log("right key");
   }
   if(keyPressed =='40'){
    down();
    console.log("Down key")
   }
}