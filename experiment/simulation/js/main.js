
function reset() 
{
window.location.reload();
}
function back_info()
{
    document.getElementById("back_data").style.border="none";
    setTimeout(function(){ document.getElementById("st").src="images/bg1.png"; }, 1000);
    setTimeout(function(){ document.getElementById("st").src="images/bg2.png"; }, 2200);
    setTimeout(function(){ document.getElementById("st").src="images/bg3.png"; }, 3400);
    setTimeout(function(){ document.getElementById("st").src="images/bg4.png"; }, 4600);
}
function tree()
{  if(document.getElementById("refdotblue").style.display === "inline" )
{   setTimeout(function(){ document.getElementById("alidade_img").src="images/a1.PNG"; }, 400);
    setTimeout(function(){ document.getElementById("alidade_img").src="images/a2.PNG"; }, 800);    
    setTimeout(function(){  document.getElementById("blueline1").style.display="inline";}, 800);
    document.getElementById("arrowimg").disabled=false;
    document.getElementById("tower").disabled=true;
    document.getElementById("lamp").disabled=true;
    
}
else if(document.getElementById("refdotred").style.display === 'inline' && document.getElementById("redline1").style.display ==="none")
{
    setTimeout(function(){ document.getElementById("alidade_img").src="images/a1.PNG"; }, 400);
    setTimeout(function(){ document.getElementById("alidade_img").src="images/a2.PNG"; }, 800); 
    
    setTimeout(function(){  document.getElementById("redline1").style.display="inline";}, 800);
    

}

 else if(document.getElementById("blackline1").style.display === "inline" && document.getElementById("blackline2").style.display === "inline" && document.getElementById("blackline3").style.display === "inline" && document.getElementById("blueline1").style.display === "none" && document.getElementById("refdotblue").style.display === "none")
                  {
                      setTimeout(() => {  swal("Please Click on C labeled Button placed on tripod to get center point of triangle"); }, 1000);
                    
                 }
else if(document.getElementById("blueline1").style.display === "inline" && document.getElementById("blueline2").style.display === "inline" && document.getElementById("blueline3").style.display === "inline" && document.getElementById("refdotblue").style.display === "none" )
                 {
                     setTimeout(() => {  swal("Please Click on C labeled Button placed on tripod to get center point of triangle"); }, 1000);
                     
                }
                else if(document.getElementById("redline1").style.display === "inline" && document.getElementById("redline2").style.display === "inline" && document.getElementById("redline3").style.display === "inline" && document.getElementById("refdotred").style.display === "none" )
                 {
                     setTimeout(() => {  swal("Please Click on C labeled Button placed on tripod to get center point of triangle"); }, 1000);
                     
                }
else
{
   setTimeout(function(){ document.getElementById("drawobjimg").style.transform="translate(-75px,-20px)scale(1.5)rotateY(150deg)";}, 400);
   setTimeout(function(){ document.getElementById("drawobjimg").style.transform="translate(0px,0px)"; }, 800);
   setTimeout(function(){ document.getElementById("blackline1").style.display="inline";}, 800);
   setTimeout(function(){ document.getElementById("alidade_img").src="images/a1.PNG"; }, 400);
   setTimeout(function(){ document.getElementById("alidade_img").src="images/a2.PNG"; }, 800);  
}
    
}    


function lamp()
{

    if(document.getElementById("redline1").style.display === "inline" && document.getElementById("redline2").style.display === "inline" && document.getElementById("redline3").style.display === "inline")
   {
    document.getElementById("result").style.display="inline";
   }
   else if(document.getElementById("blueline1").style.display === "inline" && document.getElementById("blackline1").style.display === "none" && document.getElementById("blackline2").style.display === "none" && document.getElementById("blackline3").style.display === "none" && document.getElementById("refdotblue").style.display === "none" )
{
    setTimeout(function(){ document.getElementById("alidade_img").src="images/b1.PNG"; }, 400);
    setTimeout(function(){ document.getElementById("alidade_img").src="images/b2.PNG"; }, 800);    
    setTimeout(function(){ document.getElementById("drawobjimg").style.transform="translate(-65px,-25px)scale(2)rotateY(85deg)";}, 400);
    setTimeout(function(){ document.getElementById("drawobjimg").style.transform="translate(0px,0px)"; }, 800);
    
    setTimeout(function(){  document.getElementById("blueline3").style.display="inline";}, 800);

}
else if(document.getElementById("redline1").style.display === "inline" && document.getElementById("blueline1").style.display === "none" && document.getElementById("blueline2").style.display === "none" && document.getElementById("blueline3").style.display === "none" && document.getElementById("refdotred").style.display === "none" )
{
    setTimeout(function(){ document.getElementById("alidade_img").src="images/b1.PNG"; }, 400);
    setTimeout(function(){ document.getElementById("alidade_img").src="images/b2.PNG"; }, 800); 
    setTimeout(function(){ document.getElementById("drawobjimg").style.transform="translate(-65px,-25px)scale(2)rotateY(85deg)";}, 400);
    setTimeout(function(){ document.getElementById("drawobjimg").style.transform="translate(0px,0px)"; }, 800);
    
    setTimeout(function(){  document.getElementById("redline3").style.display="inline";}, 800);
}

 else if(document.getElementById("blackline1").style.display === "inline" && document.getElementById("blackline2").style.display === "inline" && document.getElementById("blackline3").style.display === "inline" && document.getElementById("blueline1").style.display === "none" && document.getElementById("refdotblue").style.display === "none")
                  {
                      setTimeout(() => {  swal("Please Click on C labeled Button placed on tripod to get center point of triangle"); }, 1000);
                     
                 }
else if(document.getElementById("blueline1").style.display === "inline" && document.getElementById("blueline2").style.display === "inline" && document.getElementById("blueline3").style.display === "inline" && document.getElementById("refdotblue").style.display === "none")
                 {
                     setTimeout(() => {  swal("Please Click on C labeled Button placed on tripod to get center point of triangle"); }, 1000);
                    
                }
                else{
    
                    setTimeout(function(){ document.getElementById("drawobjimg").style.transform="translate(-60px,-25px)scale(2)rotateY(75deg)";}, 400);
                    setTimeout(function(){ document.getElementById("drawobjimg").style.transform="translate(0px,0px)"; }, 800);
                    setTimeout(function(){ document.getElementById("blackline3").style.display="inline";}, 800);
                    setTimeout(function(){ document.getElementById("alidade_img").src="images/b1.PNG"; }, 400);
                    setTimeout(function(){ document.getElementById("alidade_img").src="images/b2.PNG"; }, 800);   
                }
}


function tower()
{  if(document.getElementById("redline1").style.display === "inline" && document.getElementById("redline2").style.display === "inline" && document.getElementById("redline3").style.display === "inline")
{
 document.getElementById("result").style.display="inline";
}
else
    if(document.getElementById("blueline1").style.display === "inline" && document.getElementById("blackline1").style.display === "none" && document.getElementById("blackline2").style.display === "none" && document.getElementById("blackline3").style.display === "none" && document.getElementById("refdotblue").style.display === "none" )
{
    setTimeout(function(){  document.getElementById("alidade_img").src="images/c1.PNG"; }, 400);
    setTimeout(function(){  document.getElementById("alidade_img").src="images/c2.PNG"; }, 800);  
    setTimeout(function(){  document.getElementById("drawobjimg").style.transform="translate(-65px,-40px)scale(1.5)rotateY(-20deg)";}, 400);
    setTimeout(function(){  document.getElementById("drawobjimg").style.transform="translate(0px,0px)"; }, 800);
    setTimeout(function(){  document.getElementById("blueline2").style.display="inline";}, 800);
    

}
else if(document.getElementById("redline1").style.display === "inline" && document.getElementById("blueline1").style.display === "none" && document.getElementById("blueline2").style.display === "none" && document.getElementById("blueline3").style.display === "none" && document.getElementById("refdotred").style.display === "none" )
{
    setTimeout(function(){ document.getElementById("alidade_img").src="images/c1.PNG"; }, 400);
    setTimeout(function(){ document.getElementById("alidade_img").src="images/c2.PNG"; }, 800); 
    setTimeout(function(){  document.getElementById("drawobjimg").style.transform="translate(-65px,-40px)scale(1.5)rotateY(-20deg)";}, 400);
    setTimeout(function(){  document.getElementById("drawobjimg").style.transform="translate(0px,0px)"; }, 800);
    setTimeout(function(){  document.getElementById("redline2").style.display="inline";}, 800);

}

 else if(document.getElementById("blackline1").style.display === "inline" && document.getElementById("blackline2").style.display === "inline" && document.getElementById("blackline3").style.display === "inline" && document.getElementById("blueline1").style.display === "none" && document.getElementById("refdotblue").style.display === "none")
 {
     setTimeout(() => {  swal("Please Click on C labeled Button placed on tripod to get center point of triangle"); }, 1000);
    
}
else if(document.getElementById("blueline1").style.display === "inline" && document.getElementById("blueline2").style.display === "inline" && document.getElementById("blueline3").style.display === "inline" && document.getElementById("refdotblue").style.display === "none")
{
    setTimeout(() => {  swal("Please Click on C labeled Button placed on tripod to get center point of triangle"); }, 1000);
   
}
else
{
    setTimeout(function(){  document.getElementById("drawobjimg").style.transform="translate(-65px,-40px)scale(1.5)rotateY(-20deg)";}, 400);
    setTimeout(function(){  document.getElementById("drawobjimg").style.transform="translate(0px,0px)"; }, 800);
    setTimeout(function(){  document.getElementById("blackline2").style.display="inline";}, 800);
    setTimeout(function(){  document.getElementById("alidade_img").src="images/c1.PNG"; }, 400);
    setTimeout(function(){  document.getElementById("alidade_img").src="images/c2.PNG"; }, 800);    
}
}


function show(){
    if(document.getElementById("blackline1").style.display === "inline" && document.getElementById("blackline2").style.display === "inline" && document.getElementById("blackline3").style.display === "inline")
        {
           
            setTimeout(() => {swal("The center point (blue) of triangle is now plotted on the table"); }, 500);
            document.getElementById("refdotblue").style.display="inline";
           
        }
  else  
  if(document.getElementById("blueline1").style.display === "inline" && document.getElementById("blueline2").style.display === "inline" && document.getElementById("blueline3").style.display === "inline")
  {
     
            setTimeout(() => {swal("The center point (red) of triangle is now plotted on the table"); }, 500);
            document.getElementById("refdotred").style.display="inline";
            
  }
  else
   {
        swal("Please draw appropriate lines") ;
     }
     }       
     
function rotate()
{
    if(document.getElementById("blackline1").style.display === "inline" && document.getElementById("blackline2").style.display === "inline" && document.getElementById("blackline3").style.display === "inline" && document.getElementById("blueline1").style.display === "inline" )
{
      document.getElementById("blackline1").style.display="none";
           document.getElementById("blackline2").style.display="none";
           document.getElementById("blackline3").style.display="none";
           document.getElementById("refdotblue").style.display="none";
           document.getElementById("tower").disabled=false;
           document.getElementById("lamp").disabled=false;
           swal("Plane table has rotated successfully !!");
            /*    document.getElementById("sheet").style.transform="perspective(900px)rotateZ(5deg)"; */


}
else 
if(document.getElementById("blueline1").style.display === "inline" && document.getElementById("blueline2").style.display === "inline" && document.getElementById("blueline3").style.display === "inline" && document.getElementById("redline1").style.display === "inline")
  {
    document.getElementById("blueline1").style.display="none";
    document.getElementById("blueline2").style.display="none";
           document.getElementById("blueline3").style.display="none";
           document.getElementById("refdotred").style.display="none";
           swal("Plane table has rotated successfully !!");
}
} 

function in_out()
{   

    if(document.getElementById("in").style.display === "none" && document.getElementById("out").style.display === "none")
    {   document.getElementById("in").style.display="inline";
        document.getElementById("out").style.display="inline";
        
    }
    else
    {
        document.getElementById("in").style.display="none";
        document.getElementById("out").style.display="none";

    }

}

function result(){

    if(document.getElementById("redline1").style.display === "inline" && document.getElementById("redline2").style.display === "inline" && document.getElementById("redline3").style.display === "inline")
    {
    location.href = "graph.html";
    }
    else{

        swal("Please follow-up instructions first");
    }

}