var commute = new Boolean;
function css3RadialProgressBar() {
  
  var xvaluenow;
  
  console.log(commute);
  
if (commute == 0) {
   xvaluenow = 80;
   var progreso = document.getElementById('progreso');
   progreso.innerHTML = 'Progress '+ xvaluenow + '%';
  commute = 1;
  } else {
  xvaluenow = 0;
  
  var progreso = document.getElementById('progreso');
   progreso.innerHTML = 'Click to view';
    commute = 0;
 
  };
  

  var rotatenum = 'rotate(' + xvaluenow * 1.8 + 'deg)';
  //var progress = document.getElementById('progress');
  
  var progress_circle = document.getElementById('progress-circle');
  var progress_style = document.getElementById('progress-style');
  
  /* Fix: Cover gap with shadow */
  if (xvaluenow == 0) {
    var shadowfix = "0";
  }
  else {
    var shadowfix = "1px";
  }
  
 
  
  progress_circle.setAttribute("aria-valuenow", xvaluenow);  
  progress_style.innerHTML = " \
.p-h:before, .p-f, .p-f:before{ \
-moz-transform: " + rotatenum + "; \
-webkit-transform: " + rotatenum + "; \
-o-transform: " + rotatenum + "; \
-ms-transform: " + rotatenum + "; \
transform: " + rotatenum + "; \
-webkit-box-shadow: 0 0 0 " + shadowfix + " #828282; \
  box-shadow: 0 0 0 " + shadowfix + " #828282;}\
\ ";
}
 /*----------------------------------------------------*/

var commute01 = new Boolean;
function css3RadialProgressBar01() {
  
  var xvaluenow01;
  
  console.log(commute01);
  
if (commute01 == 0) {
   xvaluenow01 = 50;
   var progreso01 = document.getElementById('progreso01');
   progreso01.innerHTML = 'Progress '+ xvaluenow01 + '%';
  commute01 = 1;
  } else {
  xvaluenow01 = 0;
  
  var progreso01 = document.getElementById('progreso01');
   progreso01.innerHTML = 'Click to view';
    commute01 = 0;
 
  };
  

  var rotatenum = 'rotate(' + xvaluenow01 * 1.8 + 'deg)';
  //var progress = document.getElementById('progress');
  
  var progress_circle01 = document.getElementById('progress-circle01');
  var progress_style01 = document.getElementById('progress-style01');
  
  /* Fix: Cover gap with shadow */
  if (xvaluenow01 == 0) {
    var shadowfix = "0";
  }
  else {
    var shadowfix = "1px";
  }
  
 
  
  progress_circle01.setAttribute("aria-valuenow", xvaluenow01);  
  progress_style01.innerHTML = " \
.p-h01:before, .p-f01, .p-f01:before{ \
-moz-transform: " + rotatenum + "; \
-webkit-transform: " + rotatenum + "; \
-o-transform: " + rotatenum + "; \
-ms-transform: " + rotatenum + "; \
transform: " + rotatenum + "; \
-webkit-box-shadow: 0 0 0 " + shadowfix + " #828282; \
  box-shadow: 0 0 0 " + shadowfix + " #828282;}\
\ ";
}


//document.body.onload = function() {css3RadialProgressBar()};