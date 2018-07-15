/*create an array of pictures

make it so that the user can click on 2 buttons

each button gets you through each image sources

make it so that the array loops around when it ends or begins

make it that the pitures are coming from the folder and not in the dom

*/
// TODO: read this for autoplay solution
// https://developers.google.com/web/updates/2017/09/autoplay-policy-changes
$(document).ready( function() {
  // checking if it works and connected
  //alert("It works!!, Dance!!");
  // $('#play')[0].play();
  // $('#play2')[0].play();
  // $('#play3')[0].play();
  // seting the audio to autoplay
  // var sooth = new Audio("audio/waterfall.mp3");
      // sooth.ready();
  // var audio = new Audio('audio_file.mp3');
  //     audio.play();
  // making my array
  var pictures = ["image/1img.jpg", "image/2img.jpg", "image/3img.jpg", "image/4img.jpg", "image/5img.jpg", "image/6img.jpg", "image/7img.jpg", "image/8img.jpg"]
  // index start
  var counter = 0;
  // the first button function
  $("#previous").on("click", function() {
    // creating the if function
    if(counter == 0){
      // go back to first
      counter = pictures.length-1;
      // else keep on going back when the user clicks
    }else{
      counter = counter-1;
    }
    // setting each image to each index count
    $("img").attr("src", pictures[counter]);
    // audio for back button
    var back = new Audio("audio/leftbutton.mp3")
        back.play();

    console.log(pictures[counter], counter);
  });
  // the next button for forward
  $("#next").on("click", function() {
    // creating the if function
    if(counter == pictures.length){
      // go back to first
      counter = pictures.length - (pictures.length);
      // else keep on going forward when the user clicks
    }else{
      // else keep going forward when clicked
      counter = counter+1;
    }
    // setting each image to each index count
    $("img").attr("src", pictures[counter]);
    // audio for forward button
    var forward = new Audio("audio/rightbutton.mp3")
        forward.play();

    console.log(pictures[counter], counter);
    // console.log(pictures[counter]);
  })

})
