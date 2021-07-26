//definicion de varible unviersales
var canvas = document.getElementById('canvas-paint')
var contexto = canvas.getContext( '2d');
var canvaRect = canvas.getBoundingClientRect()
var coordernadas = [0, 0], pintura = 'black', grosor= 1, draw = false;

contexto.save();

document.getElementById('btnClean').addEventListener("click", function(e){
    contexto.beginPath();
    contexto.clearRect(0,0,1000,500)
})

function setColor(e){
 pintura = e;
}
function setGrosor(g){
    grosor =g;
}



console.log("ctx", contexto)

canvas.addEventListener("mousedown", function(e){
    coordernadas[0] = e.clientX - canvaRect.left;
    coordernadas[1] = e.clientY - canvaRect.top;
    draw = true;

})
document.addEventListener("mousemove", function(e){
    if(draw === true){
        dibujar(coordernadas[0], coordernadas[1],  e.clientX - canvaRect.left, e.clientY - canvaRect.top );
        coordernadas[0] = e.clientX - canvaRect.left;
        coordernadas[1] = e.clientY - canvaRect.top;
    }
})

document.addEventListener("mouseup", function(e){
    if(draw === true){
        dibujar(coordernadas[0], coordernadas[1],  e.clientX - canvaRect.left, e.clientY - canvaRect.top );
        coordernadas[0] = e.clientX - canvaRect.left;
        coordernadas[1] = e.clientY - canvaRect.top;
        draw = false;
    }
})


function dibujar(x1, y1, x2, y2){
    contexto.beginPath();
    contexto.strokeStyle = pintura;
    contexto.lineWidth = grosor;
    contexto.moveTo(x1, y1);
    contexto.lineTo(x2, y2);
    contexto.stroke();
    contexto.closePath();
}