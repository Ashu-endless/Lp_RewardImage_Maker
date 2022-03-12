var img = ""
var bite = document.querySelector('#bite');
var img_choosen = document.getElementById('img-choosen')
var download_btn = document.querySelector('#work-js')
var name_inp = document.querySelector('#rewardee-name')
var bgsrc = ""
switch (localStorage.getItem("lastname")) {
    case ` 300 Lp`:
        bgsrc = "./300lp.jpeg"
        break;
    case ` 1370 Lp`:
        bgsrc = "./1370lp.jpeg"
        break;

    default:
        break;
}
download_btn.onclick = () => {
    // document.body.innerHTML = document.body.innerHTML + `<div id="main-container" style="position:absolute;">
    // <canvas id="main" style="border: 2px gold solid;position: absolute;top:36%;right: 9%;" ></canvas>

    //     <img id="child-container" src=${bgsrc} ></img>
    //     <p class="user-name"> ${document.getElementById('rewardee-name').value} </p>
    // </div>`

    // var canvas = new fabric.Canvas('main');
    // canvas.setHeight(220)
    // canvas.setWidth(220)
    // var user_img = document.querySelectorAll('.canvas-container')[1];
    // var user_name = document.querySelector('.user-name')
    // user_img.style.position = 'absolute';
    // user_img.style.right = '9%'
    // user_img.style.top = '36%'
    // user_name.style.position = 'absolute';
    // // user_name.style.right = '18%'
    // console.log((user_name.getBoundingClientRect().width/2))
    // console.log(user_name.style.width)
    // user_name.style.right = `${135 - (user_name.getBoundingClientRect().width/2)}px`
    // // user_name.style.right = `${100}px`
    // user_name.style.top = '62%'





    // var img_to_edit = document.querySelector('#rewardee-pic').files[0];
    // console.log(document.querySelector('#rewardee-pic').files)
    // console.log(img_to_edit)
    // console.log(img)
    // fabric.Image.fromURL(URL.createObjectURL(img), (img) => {
    //     console.log(img)
    //     img.scaleToWidth(canvas.width)
    //     img.scaleToHeight(canvas.height)
    //      canvas.backgroundImage = img
    //      console.log(canvas.backgroundImage)
    //      canvas.renderAll()
    // });
// new code
  modal.style.display = "grid"
   document.body.innerHTML = document.body.innerHTML + `<div id="main-container" style="position:absolute;">
  <canvas id="main" style="border-radius:50%;border: 2px gold solid;position: absolute;top:36%;right: 9%;" ></canvas>

      <img id="child-container" src=${bgsrc} ></img>
      <p class="user-name"> ${document.getElementById('rewardee-name').value} </p>
  </div>`

  var canvas = new fabric.Canvas('main');
  canvas.setHeight(220)
  canvas.setWidth(220)
  var user_img = document.querySelectorAll('.canvas-container')[1];
  var user_name = document.querySelector('.user-name')
  user_img.style.position = 'absolute';
  user_img.style.right = '9%'
  user_img.style.top = '36%'
  





  var img_to_edit = document.querySelector('#rewardee-pic').files[0];
  console.log(document.querySelector('#rewardee-pic').files)
  // console.log(img_to_edit)
  // console.log(img)
  fabric.Image.fromURL(URL.createObjectURL(img), (img) => {
      console.log(img)
      
      var shft_x = parseFloat(document.querySelector('.resize-drag').getAttribute('data-x')) || 0
      var shft_y = parseFloat(document.querySelector('.resize-drag').getAttribute('data-y')) || 0
      var ins_x = 220 -  (parseFloat(shft_x) + document.querySelector('.resize-drag').getBoundingClientRect().width)
      var ins_y = 220 -  (parseFloat(shft_y) + document.querySelector('.resize-drag').getBoundingClientRect().height)
  
      img.scaleToHeight(canvas.height )
      img.scaleToWidth(canvas.width )
      var choosen_w =document.querySelector('.resize-drag').getBoundingClientRect().width
      var choosen_y =document.querySelector('.resize-drag').getBoundingClientRect().height 
      // console.log(shft_x,shft_y)
      img.setCoords()
  

      var g = canvas.width/choosen_w
      var h = canvas.height/choosen_w
      var nsh = canvas.height*h
      var nsw = canvas.width*g
      // console.log(choosen_y,h) 
      
      
      // console.log(choosen_w,choosen_y,"choosen")
      
      
      // console.log(nsh,nsw,"nshw")


      img.scaleToHeight(nsh)
      img.scaleToWidth(nsw)


      var sx = (shft_x * (nsw)) / canvas.width
      var sy = (shft_y * (nsh)) / canvas.height
      img.set('left', -sx)
      img.set('top', -sy)
      
      // console.log(sx,sy)
      img.setCoords()
       canvas.backgroundImage = img
       console.log(canvas.backgroundImage)
       canvas.renderAll()
  });
  console.log(modal.style.display)
  user_name.style.top = '62%'

  console.log((user_name.getBoundingClientRect().width/2))
  console.log(user_name.style.width)
  // user_name.style.right = `${165 - (user_name.getBoundingClientRect().width/2)}px`
  // user_name.style.right = `${165 - (parseFloat(window.getComputedStyle(user_name).getPropertyValue('width'))/2)}px`
  
  console.log(user_name.getBoundingClientRect().width/2)
  console.log(user_name.style.right)
  // user_name.style.right = `${100}px`
  // document.querySelector('#modal').style.display = "none"
  setTimeout(() => {
    console.log((user_name.getBoundingClientRect().width/2))
  user_name.style.right = `${165 - (user_name.getBoundingClientRect().width/2)}px`

  }, 3000);



    //downloading
     setTimeout(() => {
        domtoimage.toJpeg(document.getElementById('main-container'), { quality: 1 })
    .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'my-image-name.jpeg';
        link.href = dataUrl;
        link.click();
        // console
       document.querySelector('#modal').style.display = "none"
        document.querySelector('#main-container').style.display = "none"
    }) 
     }, 3000);
    
    

}


var img_inp = document.querySelector('#rewardee-pic')
var modal = document.getElementById('modal');

img_inp.addEventListener('input',function (){
    img = this.files[0]
modal.style.display = 'block'
var c_canvas = new fabric.Canvas('resize-img');
    c_canvas.setHeight(220)
    c_canvas.setWidth(220)
    fabric.Image.fromURL(URL.createObjectURL(this.files[0]), (img) => {
        var sclacc = ""
        img.height > img.width ? sclacc = img.height : sclacc = img.width;
        console.log(sclacc)
        if (img.height > img.width){
            img.scaleToHeight(c_canvas.height)
            img.scaleToWidth(c_canvas.height)
        }else{
            img.scaleToHeight(c_canvas.width)
            img.scaleToWidth(c_canvas.width)
            bite.style.height = `${img.height * img.scaleY }px`
        }
        console.log(img)
        // img.scaleToHeight(sclacc)
        // img.scaleToWidth(sclacc)
        // img.set('left', -25)
        // img.setCoords()
        // 

         c_canvas.backgroundImage = img
         console.log(c_canvas.backgroundImage)
        //  console.log(c_canvas.backgroundImage)
         c_canvas.renderAll()
    });

})
console.log(interact)
interact('.resize-drag')
  .resizable({
    // resize from all edges and corners
    edges: { left: true, right: true, bottom: true, top: true },

    listeners: {
      move (event) {
        var target = event.target
        var x = (parseFloat(target.getAttribute('data-x')) || 0)
        var y = (parseFloat(target.getAttribute('data-y')) || 0)
        // var y = (parseFloat(target.getAttribute('data-x')) || 0)

        // update the element's style
        target.style.width = event.rect.width + 'px'
        target.style.height = event.rect.width + 'px'

        // translate when resizing from top or left edges
        x += event.deltaRect.left
        y += event.deltaRect.top
        // y += event.deltaRect.left

        target.style.transform = 'translate(' + x + 'px,' + y + 'px)'

        target.setAttribute('data-x', x)
        target.setAttribute('data-y', y)
        //target.textContent = Math.round(event.rect.width) + '\u00D7' + Math.round(event.rect.height)
      }
    },
    modifiers: [
      // keep the edges inside the parent
      interact.modifiers.restrictEdges({
        outer: 'parent'
      }),

      // minimum size
      interact.modifiers.restrictSize({
        min: { width: 100, height: 100 }
      })
    ],

    inertia: true
  })


//   !!!!!!!!!!!!!!!!!!!!!!!
  interact('.draggable')
  .draggable({
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of it's parent
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: 'parent',
        endOnly: true
      })
    ],
    // enable autoScroll
    autoScroll: true,

    listeners: {
      // call this function on every dragmove event
      move: dragMoveListener,

      // call this function on every dragend event
      end (event) {
        var textEl = event.target.querySelector('p')

        textEl && (textEl.textContent =
          'moved a distance of ' +
          (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
                     Math.pow(event.pageY - event.y0, 2) | 0))
            .toFixed(2) + 'px')
      }
    }
  })

function dragMoveListener (event) {
  var target = event.target
  // keep the dragged position in the data-x/data-y attributes
  var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
  var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

  // translate the element
  target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

  // update the posiion attributes
  target.setAttribute('data-x', x)
  target.setAttribute('data-y', y)
}

img_choosen.onclick=()=>{
  // document.body.innerHTML = document.body.innerHTML + `<div id="main-container" style="position:absolute;">
  // <canvas id="main" style="border-radius:50%;border: 2px gold solid;position: absolute;top:36%;right: 9%;" ></canvas>

  //     <img id="child-container" src=${bgsrc} ></img>
  //     <p class="user-name"> ${document.getElementById('rewardee-name').value} </p>
  // </div>`

  // var canvas = new fabric.Canvas('main');
  // canvas.setHeight(220)
  // canvas.setWidth(220)
  // var user_img = document.querySelectorAll('.canvas-container')[1];
  // var user_name = document.querySelector('.user-name')
  // user_img.style.position = 'absolute';
  // user_img.style.right = '9%'
  // user_img.style.top = '36%'
  





  // var img_to_edit = document.querySelector('#rewardee-pic').files[0];
  // console.log(document.querySelector('#rewardee-pic').files)
  // // console.log(img_to_edit)
  // // console.log(img)
  // fabric.Image.fromURL(URL.createObjectURL(img), (img) => {
  //     console.log(img)
      
  //     var shft_x = parseFloat(document.querySelector('.resize-drag').getAttribute('data-x')) || 0
  //     var shft_y = parseFloat(document.querySelector('.resize-drag').getAttribute('data-y')) || 0
  //     var ins_x = 220 -  (parseFloat(shft_x) + document.querySelector('.resize-drag').getBoundingClientRect().width)
  //     var ins_y = 220 -  (parseFloat(shft_y) + document.querySelector('.resize-drag').getBoundingClientRect().height)
  
  //     img.scaleToHeight(canvas.height )
  //     img.scaleToWidth(canvas.width )
  //     var choosen_w =document.querySelector('.resize-drag').getBoundingClientRect().width
  //     var choosen_y =document.querySelector('.resize-drag').getBoundingClientRect().height 
  //     // console.log(shft_x,shft_y)
  //     img.setCoords()
  //     var g = canvas.width/choosen_w
  //     var h = canvas.height/choosen_w
  //     var nsh = canvas.height*h
  //     var nsw = canvas.width*g
  //     // console.log(choosen_y,h) 
      
      
  //     // console.log(choosen_w,choosen_y,"choosen")
      
      
  //     // console.log(nsh,nsw,"nshw")


  //     img.scaleToHeight(nsh)
  //     img.scaleToWidth(nsw)


  //     var sx = (shft_x * (nsw)) / canvas.width
  //     var sy = (shft_y * (nsh)) / canvas.height
  //     img.set('left', -sx)
  //     img.set('top', -sy)
      
  //     // console.log(sx,sy)
  //     img.setCoords()
  //      canvas.backgroundImage = img
  //      console.log(canvas.backgroundImage)
  //      canvas.renderAll()
  // });
  // user_name.style.top = '62%'

  // console.log((user_name.getBoundingClientRect().width/2))
  // console.log(user_name.style.width)
  // // user_name.style.right = `${165 - (user_name.getBoundingClientRect().width/2)}px`
  // // user_name.style.right = `${165 - (parseFloat(window.getComputedStyle(user_name).getPropertyValue('width'))/2)}px`
  
  // console.log(user_name.getBoundingClientRect().width/2)
  // console.log(user_name.style.right)
  // // user_name.style.right = `${100}px`
  // // document.querySelector('#modal').style.display = "none"
  // setTimeout(() => {
  //   console.log((user_name.getBoundingClientRect().width/2))
  // user_name.style.right = `${165 - (user_name.getBoundingClientRect().width/2)}px`

  // }, 3000);
  if(name_inp.value != ""){
    download_btn.style.display = "grid"
  }
  
  modal.style.display = "none"
}



name_inp.oninput=()=>{
  if(img_inp.files.length != 0 ){
    download_btn.style.display = "grid"
  }
}