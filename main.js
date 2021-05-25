canvas = new fabric.Canvas("myCanvas");
player_x=10;
player_y=10;
block_width=30;
block_height=30;
player_object="";
block_object="";

function player_update(){
fabric.Image.fromURL("player.jpg",function(Img){
player_object=Img;
player_object.scaleToWidth(150);
player_object.scaleToHeight(150);
player_object.set({
top:player_y,
left:player_x
});
canvas.add(player_object);
});    
}

function new_image(get_image){
fabric.Image.fromURL(get_image,function(Img){
block_object = Img;
block_object.scaleToWidth(block_width);
block_object.scaleToHeight(block_height);
block_object.set({
top:player_y,
left:player_x
});
canvas.add(block_object);
});
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
keypress=e.keyCode;    
if(e.shiftKey==true && keypress == '80'){
block_width=block_width+10;
block_height=block_height+10;
document.getElementById("current_width").innerHTML=block_width;
document.getElementById("current_height").innerHTML=block_height;
}
if(e.shiftKey==true && keypress=='77'){
    block_width=block_width-10;
    block_height=block_height-10;
    document.getElementById("current_width").innerHTML=block_width;
    document.getElementById("current_height").innerHTML=block_height;      
}
if(keypress=='38'){
up();    
}
if(keypress=='40'){
down();    
}
if(keypress=='37'){
left();
}
if(keypress=='39'){
right();    
}
if(keypress=='90'){
canvas.remove(block_object);    
}
}

function up(){
    if(player_y>=0){
    player_y=player_y-block_height;
    canvas.remove(player_object);
    player_update();    
    }    
    }
    function down(){
        if(player_y<=500){
        player_y=player_y+block_height;
        canvas.remove(player_object);
        player_update();    
        }    
        }
        function left(){
            if(player_x>=0){
            player_x=player_x-block_width;
            canvas.remove(player_object);
            player_update();    
            }    
            }
            function right(){
                if(player_y<=850){
                player_x=player_x+block_width;
                canvas.remove(player_object);
                player_update();    
                }    
                }    
function drp(){
if(document.getElementById("dropdown").value=='Iron Man Head'){
new_image("iron_head.jpg");    
}
if(document.getElementById("dropdown").value=='Hulk Head'){
new_image("hulk_head.png");    
}
if(document.getElementById("dropdown").value=='Thor Head'){
new_image("thor_head.png");    
}
if(document.getElementById("dropdown").value=='Black Widow Head'){
new_image("black_widow_head.png");    
}
if(document.getElementById("dropdown").value=='Vision Head'){
new_image("vision_head.jpg");    
}
if(document.getElementById("dropdown").value=='Black Panther Head'){
new_image("black_panther_head.jpg");    
}
if(document.getElementById("dropdown").value=='Captain America Head'){
new_image("captain_america_head.jpg");    
}
if(document.getElementById("dropdown").value=='Scarlet Witch Head'){
new_image("scarlet_witch_head.jpg");    
}
if(document.getElementById("dropdown").value=='Captain Marvel Head'){
new_image("captain_marvel_head.jpg");    
}
if(document.getElementById("dropdown").value=='Hawkeye Head'){
new_image("hawkeye_head.png");
}
if(document.getElementById("dropdown").value=='War Machine Head'){
new_image("war_head.jpg");
}
if(document.getElementById("dropdown").value=='Ant Man Head'){
new_image("ant_head.png");
}
if(document.getElementById("dropdown").value=='Falcon Head'){
new_image("falcon_head.png");
}
if(document.getElementById("dropdown").value=='Dr.Strange Head'){
new_image("doctor_head.jpg");
}
if(document.getElementById("dropdown").value=='Spider Man Head'){
new_image("spider_head.jpg");
}

if(document.getElementById("dropdown").value=='Iron Man Body'){
    new_image("iron_body.jpg");    
    }
    if(document.getElementById("dropdown").value=='Hulk Body'){
    new_image("hulk_body.png");    
    }
    if(document.getElementById("dropdown").value=='Thor Body'){
    new_image("thor_body.jpg");    
    }
    if(document.getElementById("dropdown").value=='Black Widow Body'){
    new_image("black_widow_body.png");    
    }
    if(document.getElementById("dropdown").value=='Vision Body'){
    new_image("vision_body.jpg");    
    }
    if(document.getElementById("dropdown").value=='Black Panther Body'){
    new_image("black_panther_body.jpg");    
    }
    if(document.getElementById("dropdown").value=='Captain America Body'){
    new_image("captain_america_body.png");    
    }
    if(document.getElementById("dropdown").value=='Scarlet Witch Body'){
    new_image("scarlet_witch_body.png");    
    }
    if(document.getElementById("dropdown").value=='Captain Marvel Body'){
    new_image("captain_marvel_body.png");    
    }
    if(document.getElementById("dropdown").value=='Hawkeye Body'){
    new_image("hawkeye_body.jpg");
    }
    if(document.getElementById("dropdown").value=='War Machine Body'){
    new_image("war_body.png");
    }
    if(document.getElementById("dropdown").value=='Ant Man Body'){
    new_image("ant_body.jpg");
    }
    if(document.getElementById("dropdown").value=='Falcon Body'){
    new_image("falcon_body.png");
    }
    if(document.getElementById("dropdown").value=='Dr.Strange Body'){
    new_image("doctor_body.png");
    }
    if(document.getElementById("dropdown").value=='Spider Man Body'){
    new_image("spider_body.jpg");
}

if(document.getElementById("dropdown").value=='Iron Man Legs'){
    new_image("Iron_legs.png");    
    }
    if(document.getElementById("dropdown").value=='Hulk Legs'){
    new_image("hulk_legs.jpg");    
    }
    if(document.getElementById("dropdown").value=='Thor Legs'){
    new_image("thor_legs.jpg");    
    }
    if(document.getElementById("dropdown").value=='Black Widow Legs'){
    new_image("black_widow_legs.png");    
    }
    if(document.getElementById("dropdown").value=='Vision Legs'){
    new_image("vision_legs.jpg");    
    }
    if(document.getElementById("dropdown").value=='Black Panther Legs'){
    new_image("black_panther_legs.jpg");    
    }
    if(document.getElementById("dropdown").value=='Captain America Legs'){
    new_image("captain_america_legs.png");    
    }
    if(document.getElementById("dropdown").value=='Scarlet Witch Legs'){
    new_image("scarlet_witch_legs.png");    
    }
    if(document.getElementById("dropdown").value=='Captain Marvel Legs'){
    new_image("captain_marvel_legs.png");    
    }
    if(document.getElementById("dropdown").value=='Hawkeye Legs'){
    new_image("hawkeye_legs.jpg");
    }
    if(document.getElementById("dropdown").value=='War Machine Legs'){
    new_image("war_legs.png");
    }
    if(document.getElementById("dropdown").value=='Ant Man Legs'){
    new_image("ant_legs.png");
    }
    if(document.getElementById("dropdown").value=='Falcon Legs'){
    new_image("falcon_legs.png");
    }
    if(document.getElementById("dropdown").value=='Dr.Strange Legs'){
    new_image("doctor_legs.png");
    }
    if(document.getElementById("dropdown").value=='Spider Man Legs'){
    new_image("spider_legs.jpg");
}
}
