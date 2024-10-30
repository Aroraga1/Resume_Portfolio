const canvas = document.getElementById('canvasi');
const context = canvas.getContext('2d');

let condition = false;
function start(e){
    condition = true;
    draw();
}

function end(){
    condition = false;
    context.beginPath();
}

function draw(e){
    if(!condition) return;
    context.lineWidth = 0.5;
    context.lineCap = 'round';
    context.strokeStyle = 'black';
    console.log(e.clientX-canvas.offsetLeft,e.clientY - canvas.offsetTop);
    context.lineTo(e.clientX - canvas.offsetLeft,e.clientY - canvas.offsetTop);
    console.log("hello");
    // context.lineTo(e.clientX - canvas.offsetLeft,e.clientY - canvas.offsetTop);
    context.stroke();
}

canvas.addEventListener('mousedown',start);
canvas.addEventListener('mousemove',draw);
canvas.addEventListener('mouseup',end);