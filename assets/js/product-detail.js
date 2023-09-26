const innerArea = document.querySelectorAll(".inner-img-area");
const changeImgSrc = document.querySelectorAll(".change-img-src");
const innerName = document.querySelectorAll(".change-inner-name");
const innerDes = document.querySelectorAll(".change-inner-des");

const changeName = document.querySelector(".change-name");
const changeDes = document.querySelector(".change-des");
const mainImgSrc = document.querySelector(".change-img");
const replaceArea = document.querySelector(".replace-content-img-area")
innerArea.forEach(area => {
  // replaceArea.style.display = "none";
    area.addEventListener("click", () => {
        const index = Array.from(innerArea).indexOf(area);
        if (index !== -1 && changeImgSrc[index]) {
            mainImgSrc.src = changeImgSrc[index].src;
            changeName.textContent = innerName[index].textContent;
            changeDes.textContent = innerDes[index].textContent;
        }
        // replaceArea.style.display = "block";

        html2canvas(replaceArea, {
            backgroundColor: "transparent", 
        }).then(canvas => {
          // replaceArea.style.display = "none";

            const imgCapture = document.createElement("img");

            const captureDataURL = canvas.toDataURL('image/png');
            // console.log(captureDataURL);
            imgCapture.src = captureDataURL;
            canvas1(captureDataURL)
        });
    });
});


function canvas1(captureDataURL) {
  var canvas = document.getElementById("canvas2");
  var ctx = canvas.getContext("2d");
  var productImg = new Image();
  productImg.onload = function () {
      var iw = productImg.width;
      var ih = productImg.height;
      // console.log("height");

      canvas.width = iw;
      canvas.height = ih;

      ctx.drawImage(productImg, 0, 0, productImg.width, productImg.height,
          0, 0, iw, ih);
      loadUpperIMage();
  };

  productImg.src = "https://onlinedemolink.com/custom/Garrett-jay/assets/images/cup.png";

  function loadUpperIMage() {
      var img = new Image();
      img.src = captureDataURL;

      img.onload = function () {

          var iw = img.width;
          var ih = img.height;

          var xOffset = 141,
              yOffset = 80; //top padding

          var a = 153.0; //image width
          var b = 30; //roundness

          var scaleFactor = iw / (3 * a);

          // draw vertical slices
          for (var X = 0; X < iw; X += 1) {
              var y = b / a * Math.sqrt(a * a - (X - a) * (X - a)); // ellipsis equation
              ctx.drawImage(img, X * scaleFactor, 0, iw / 3, ih, X + xOffset, y + yOffset, 1, 304);
          }
      };
  }
}




setTimeout(function(){canvas1()} ,200);