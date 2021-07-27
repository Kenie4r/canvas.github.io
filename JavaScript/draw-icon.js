var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var height = c.height, width = c.width;


ctx.strokeStyle = "#A86124"
ctx.lineWidth = 4
ctx.strokeRect(115, 20, 200, 130);


ctx.rotate(15 * Math.PI / 180)
ctx.fillStyle = "#A86124"
ctx.fillRect(210, 80, 25, 105);


ctx.rotate(-30 * Math.PI / 180)
ctx.fillStyle = "#A86124"
ctx.fillRect(18, 195, 25, 105);

ctx.rotate( 15 * Math.PI / 180)
ctx.fillStyle = "#A86124";
ctx.fillRect(205, 135, 25, 105);



ctx.fillStyle = "#A86124";
ctx.fillRect(165,130 , 100, 30);