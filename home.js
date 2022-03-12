var canvas = new fabric.Canvas('main');
// console.log(canvas)
//canvas.height = '200px'
// var rect = new fabric.Rect();
canvas.setHeight(200)
canvas.setWidth(200)
console.log(canvas.height)

// canvas.add(rect);
//var img_to_edit = this.files[0];
    fabric.Image.fromURL('./user.jpeg', (img) => {
       //var img_ = img.scaleToWidth(canvas.width)
       //var img__ = img_.scaleToHeight(canvas.height);
       img.scaleToHeight(canvas.height)
       img.scaleToWidth(canvas.width)
        canvas.backgroundImage = img
        canvas.renderAll()
    });    

// var text = new fabric.Text('hello world', { left: 100, top: 100 });
// canvas.add(text);
// text.top = 0
let selected_LP = "";
let achiever_img = "";
let achiever_name = document.querySelector('.user-name');
document.querySelector('#download-img').onclick=()=>{
    domtoimage.toJpeg(document.getElementById('main-container'), { quality: 1 })
    .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'my-image-name.jpeg';
        link.href = dataUrl;
        link.click();
    });
} 


$("p").arctext({radius: 150, dir: -1})
document.getElementById('user-name-inp').oninput=(e)=>{
    //achiever_name.innerHTML = e.target.value
    console.log($("p"))
    // $("p").arctext('set',{radius: 200, dir: -1})
    $("p").arctext('set',{radius: e.target.value, dir: -1})
}

