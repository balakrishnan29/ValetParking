canvas=document.getElementById("canvas")
ctx = canvas.getContext("2d")

img_width = 150;
img_height = 200;

var img_image;

img_x = 100;
img_y = 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";


function add() {
	bckomg_imgTag = new Image();
	bckimg_imgTag.onload = upload_1;
	bckimg_imgTag.src = background_image;

	caring_imgTag = new Image();
	carimg_imgTag.onload = upload_2;
	carimg_imgTag.src = greencar_image;
	}

function uploadBackground() {
	ctx.drawImage(bckimg_imgTag, 0, 0, canvas.width, canvas.height);
	}

function uploadgreencar() {
	ctx.drawImage(carimg_imgTag, img_x, img_y, 80, 100);
	}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up(){
	if(rover_y>=0){
		rover_y = rover_y-10;
		console.log("when up arrow is pressed, x = "+rover_x+",y="+rover_y);
		uploadBackground();
		uploadrover();     
	}
   }
   
   function down(){
	   if(rover_y<=500){
		   rover_y = rover_y+10;
		   console.log("when down arrow is pressed, x = "+rover_x+",y="+rover_y);
		   uploadBackground();
		   uploadrover();     
	   }
	  }
   
	  function left(){
	   if(rover_x>=0){
		   rover_x = rover_x-10;
		   console.log("when left arrow is pressed, x = "+rover_x+",y="+rover_y);
		   uploadBackground();
		   uploadrover();     
	   }
	  }
	  function right(){
	   if(rover_x<=700){
		   rover_x = rover_x+10;
		   console.log("when right arrow is pressed, x = "+rover_x+",y="+rover_y);
		   uploadBackground();
		   uploadrover(); 
	   }
   }
