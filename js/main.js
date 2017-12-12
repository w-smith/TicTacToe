console.log("It's me, ya boy.. Javascript");
 


$(document).ready(function() {

var turn=0;
   
    // console.log(turn);



      $(".square").on("click", function(){
      	// console.log(this);
        if 
          ($(this).html() === '')
            if (turn % 2 === 0){
              $(this).text('@'); 
            } else {
              $(this).text('#');
            }

// @ top row
    if 
          ( ($(".1").html() == "@") && ($(".2").html() == "@") && ($(".3").html() == "@") ){
            alert("Game over! @ wins!");
          }
// @ middle row
    else if 
          ( ($(".4").html() == "@") && ($(".5").html() == "@") && ($(".6").html() == "@") ){
            alert("Game over! @ wins!");
          }
// @ bottom row        
    else if 
          ( ($(".7").html() == "@") && ($(".8").html() == "@") && ($(".9").html() == "@") ){
            alert("Game over! @ wins!");
          }
// @ left column          
    else if 
          ( ($(".1").html() == "@") && ($(".4").html() == "@") && ($(".7").html() == "@") ){
            alert("Game over! @ wins!");
          }
// @ middle column          
    else if 
          ( ($(".2").html() == "@") && ($(".5").html() == "@") && ($(".8").html() == "@") ){
            alert("Game over! @ wins!");
          }
// @ right column          
    else if 
          ( ($(".3").html() == "@") && ($(".6").html() == "@") && ($(".9").html() == "@") ){
            alert("Game over! @ wins!");
          }
// @ left to right diagonal          
    else if 
          ( ($(".1").html() == "@") && ($(".5").html() == "@") && ($(".9").html() == "@") ){
            alert("Game over! @ wins!");
          }
// @ right to left diagonal          
    else if 
          ( ($(".3").html() == "@") && ($(".5").html() == "@") && ($(".7").html() == "@") ){
            alert("Game over! @ wins!");
          }


// # top row
    else if 
          ( ($(".1").html() == "#") && ($(".2").html() == "#") && ($(".3").html() == "#") ){
            alert("Game over! # wins!");
          }
// # middle row
    else if 
          ( ($(".4").html() == "#") && ($(".5").html() == "#") && ($(".6").html() == "#") ){
            alert("Game over! # wins!");
          }
// # bottom row        
    else if 
          ( ($(".7").html() == "@") && ($(".8").html() == "#") && ($(".9").html() == "#") ){
            alert("Game over! # wins!");
          }
// # left column          
    else if 
          ( ($(".1").html() == "#") && ($(".4").html() == "#") && ($(".7").html() == "#") ){
            alert("Game over! # wins!");
          }
// # middle column          
    else if 
          ( ($(".2").html() == "#") && ($(".5").html() == "#") && ($(".8").html() == "#") ){
            alert("Game over! # wins!");
          }
// # right column          
    else if 
          ( ($(".3").html() == "#") && ($(".6").html() == "#") && ($(".9").html() == "#") ){
            alert("Game over! # wins!");
          }
// # left to right diagonal          
    else if 
          ( ($(".1").html() == "#") && ($(".5").html() == "#") && ($(".9").html() == "#") ){
            alert("Game over! # wins!");
          }
// # right to left diagonal          
    else if 
          ( ($(".3").html() == "#") && ($(".5").html() == "#") && ($(".7").html() == "#") ){
            alert("Game over! # wins!");
          }


          turn++;
          


          

         

      });

    $('#button').click(function() {
    location.reload();
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


