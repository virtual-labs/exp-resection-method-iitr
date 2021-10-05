
function reset() 
{
window.location.reload();
}


function tree()
{

if(document.getElementById("c").style.display === 'inline')
{
    setTimeout(function(){ document.getElementById("alidade_img").src="img/a1.png"; }, 400);
    setTimeout(function(){  document.getElementById("alidade_img").src="img/a2.png"; }, 800); 
     setTimeout(function(){ document.getElementById("drawobjimg").style.transform="translate(-115px,-35px)scale(2)rotateY(150deg)"; }, 400);
    setTimeout(function(){  document.getElementById("drawobjimg").style.transform="translate(0px,0px)"; }, 800);
    document.getElementById("lineobj4img").style.display="inline";
    document.getElementById("arrowimg").style.display="inline";
 setTimeout(() => {  swal('Good job!','Please Click on the red curved arrow to rotate the Plane Table','success') }, 500);

}
else{
    setTimeout(function(){ document.getElementById("drawobjimg").style.transform="translate(-105px,-20px)scale(2)rotateY(150deg)";}, 400);
    setTimeout(function(){  document.getElementById("drawobjimg").style.transform="translate(0px,0px)"; }, 800);
    setTimeout(function(){    document.getElementById("lineobj1img").style.display="inline";}, 800);
    setTimeout(function(){ document.getElementById("alidade_img").src="img/a1.png"; }, 400);
    setTimeout(function(){  document.getElementById("alidade_img").src="img/a2.png"; }, 800);    
  
}
}
function lamp()
{
   
    if(document.getElementById("c").style.display === "inline")
{
    setTimeout(function(){ document.getElementById("alidade_img").src="img/b1.png"; }, 400);
    setTimeout(function(){  document.getElementById("alidade_img").src="img/b2.png"; }, 800);    
    setTimeout(function(){ document.getElementById("drawobjimg").style.transform="translate(-95px,-20px)scale(2)rotateY(80deg)";}, 400);
    setTimeout(function(){  document.getElementById("drawobjimg").style.transform="translate(0px,0px)"; }, 800);
    document.getElementById("lineobj2img").style.display="none";
    document.getElementById("lineobj5img").style.display="inline";

}
else{
    
    setTimeout(function(){ document.getElementById("drawobjimg").style.transform="translate(-85px,-20px)scale(2)rotateY(80deg)";}, 400);
    setTimeout(function(){  document.getElementById("drawobjimg").style.transform="translate(0px,0px)"; }, 800);
    setTimeout(function(){    document.getElementById("lineobj2img").style.display="inline";}, 800);
    setTimeout(function(){ document.getElementById("alidade_img").src="img/a1.png"; }, 400);
    setTimeout(function(){  document.getElementById("alidade_img").src="img/a2.png"; }, 800);    
}
}

function tower()
{
    
    if(document.getElementById("c").style.display === "inline")
{
    setTimeout(function(){ document.getElementById("alidade_img").src="img/c1.png"; }, 400);
    setTimeout(function(){  document.getElementById("alidade_img").src="img/c2.png"; }, 800);  
    setTimeout(function(){ document.getElementById("drawobjimg").style.transform="translate(-70px,-50px)scale(2)rotateY(-350deg)";}, 400);
    setTimeout(function(){  document.getElementById("drawobjimg").style.transform="translate(0px,0px)"; }, 800);  
    document.getElementById("lineobj3img").style.display="none";
    document.getElementById("lineobj6img").style.display="inline";

}
else{
    setTimeout(function(){ document.getElementById("drawobjimg").style.transform="translate(-90px,-50px)scale(2)rotateY(-350deg)";}, 400);
    setTimeout(function(){  document.getElementById("drawobjimg").style.transform="translate(0px,0px)"; }, 800);
    setTimeout(function(){    document.getElementById("lineobj3img").style.display="inline";}, 800);
    setTimeout(function(){ document.getElementById("alidade_img").src="img/a1.png"; }, 400);
    setTimeout(function(){  document.getElementById("alidade_img").src="img/a2.png"; }, 800);    
}
}

const imgs = Array.from(document.querySelectorAll('.scale'));
        // Add event listener for document:
        document.addEventListener('click', event => {
            // Has one of the images been clicked?
            if (event.target.classList.contains('scale')) {
                // Add class indicating that is has been clicked:
                event.target.classList.add('is-clicked');
                // Check if all images have been clicked:
                if (!imgs.find(item => !item.classList.contains('is-clicked'))) {
                    // Make button visible:
                   
                   
                  if(document.getElementById("lineobj1img").style.display === "inline" )
 {setTimeout(() => {  swal('Good job!','Please Click on C labeled Button placed on tripod to get center point of triangle','success') }, 2000);
 
 document.getElementById("c").style.display='inline';}
 else
 if(document.getElementById("lineobj6img").style.display === "inline" && document.getElementById("lineobj5img").style.display === "inline" && document.getElementById("lineobj4img").style.display === "inline"){
    setTimeout(() => {  swal('Good job!','Please Click on the Result Button to observe Graph','success') }, 1500);
    document.getElementById("result").style.display="inline";
 }
        
                }
                                
            }
        });

function show(){
    setTimeout(() => {  swal('Good job!','The center point of triangle is now plotted on the table','success') }, 300);
    document.getElementById("refdotblue").style.display="inline";
    
}       
function rotate()
{
    document.getElementById("lineobj1img").style.display="none";
    document.getElementById("lineobj2img").style.display="none";
    document.getElementById("lineobj3img").style.display="none";
} 
