// const mk = ""
for(let bt of document.querySelectorAll('.candy') ){
    bt.onclick=(e)=>{
        // window.gts = this.innerHTML
        // console.log(mk)
        localStorage.setItem("lastname",e.target.innerHTML)

        window.location.href = './editor.html';
    }
}


const bg_img_input = document.getElementById('bg_img_input');

// bg_img_input.addEventListener('change', function() {
//     var img_to_edit = this.files[0];
//     fabric.Image.fromURL(URL.createObjectURL(img_to_edit), (img) => {
//         img = img.scaleToWidth(canvas.width)
//         img_ = img.scaleToHeight(canvas.height);
//         canvas.backgroundImage = img_
//         canvas.renderAll()
//     });

// });