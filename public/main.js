var thumbUp = document.getElementsByClassName("fa-thumbs-up");
var thumbDown = document.getElementsByClassName("fa-thumbs-down");
var trash = document.getElementsByClassName("fa-trash");

Array.from(thumbUp).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[7].innerText)
        fetch('messages', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
            'comment': msg,
            'thumbUp':thumbUp
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

Array.from(thumbDown).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        const thumbDown = parseFloat(this.parentNode.parentNode.childNodes[9].innerText)
        fetch('messages2', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
            'comment': msg,
            'thumbDown':thumbDown
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'msg': msg
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});

let date =  new Date();

document.getElementById("date").innerHTML = date;

document.getElementById('imageFileInput').addEventListener('change', function() {
         var img = this.files[0];
         // Image is accessible using JavaScript
         uploadImage(img, '/image/upload', function(response) {
             // Image upload to server response
             // Show the image using setImageUrl(URL)
         })
         getBase64ImageUrl(img, function(getBase64ImageUrl) {
             setImageUrl(getBase64ImageUrl);
         });
     }, false);

     function setImageUrl(url) {
         document.getElementById('preview').setAttribute('src', url);
     };

     function getBase64ImageUrl(img, callback) {
         var reader = new FileReader();
         reader.readAsDataURL(img);
         reader.onload = function() {
             callback && callback(reader.result);
         };
         reader.onerror = function(error) {
             console.log('Error: ', error);
         };
     };

     function uploadImage(img, url, callback) {
         var xhr = new XMLHttpRequest();
         var fd = new FormData();
         xhr.open("POST", url, true);
         xhr.onreadystatechange = function() {
             if (xhr.readyState == 4 && xhr.status == 200) {
                 callback && callback(xhr.responseText);
             }
         };
         fd.append("upload_image", img);
         xhr.send(fd);
     };

// function upload(){
//   let x = getElementById("profile")
//   let image = new SimpleImage (x)
// }
