console.log("It's me, ya boy.. Javascript");
 


$(document).ready(function() {

var turn=0;
   
    // console.log(turn);

      $(".square").on("click", function(){
      	// console.log(this);
            if (turn % 2 === 0){
              $(this).text('X'); 
            } else {
              $(this).text('O');

            }
          turn++;
          
      });


// // Top Left
// $("#tl").click(function() {
// 	$('<h2>x</h2>').appendTo("#tl");
// });


// // Top Mid
// $("#tm").click(function() {
// 	$('<h2>x</h2>').appendTo("#tm");
// });


// // Top Right
// $("#tr").click(function() {
// 	$('<h2>x</h2>').appendTo("#tr");
// });


// // Middle Left
// $("#ml").click(function() {
// 	$('<h2>x</h2>').appendTo("#ml");
// });


// // Middle Mid
// $("#mm").click(function() {
// 	$('<h2>x</h2>').appendTo("#mm");
// });


// // Middle Right
// $("#mr").click(function() {
// 	$('<h2>x</h2>').appendTo("#mr");
// });


// // Bottom Left
// $("#bl").click(function() {
// 	$('<h2>x</h2>').appendTo("#bl");
// });


// // Bottle Mid
// $("#bm").click(function() {
// 	$('<h2>x</h2>').appendTo('#bm');
// });


// // Bottom Right
// $("#br").click(function() {
// 	$('<h2>x</h2>').appendTo('#br');
// });


});


