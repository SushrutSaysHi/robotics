Webcam.set({
     height:350,
     width: 400,
     img_quality: 'png',
     png_quality: 90
});

Webcam.attach("#webcam");

function identify_cap() {
     Webcam.snap(function (data_uri) {
        document.getElementById("snap").innerHTML = '<img id="snap_img" src="' + data_uri + '">'
     });

     identify();

}

var classifier1 = ml5.imageClassifier('MobileNet', modelLoaded);
//var classifier2 = ml5.imageClassifier('Wolfram', modelLoaded2);

function modelLoaded() {
     console.log("Model loaded");
}

/*function modelLoaded2() {
     console.log("Second model loaded");
}}*/

function identify() {
     var img = document.getElementById("snap_img");
     classifier1.classify(img, gotResult);
     //classifier2.classify(img, gotResult2);


/*function gotResult2(error, result2) {
     if (error) {
          console.error(error);
     } else {
          
          console.log(result2);
          document.getElementById("mc_az_resuk").innerHTML= result2[0].label;
          
     }
}*/

function gotResult(error, results) {
     if (error) {
          console.error(error);
     } else {
          
          console.log(results);
          document.getElementById("mob_result").innerHTML= results[0].label;
          
     }
}}