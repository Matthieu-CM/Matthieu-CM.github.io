let isDrawing;
let tool = "pencil";

function onMouseDown(e, canva, ctx) {
    mouseX = e.offsetX * canva.width / canva.clientWidth | 0;
    mouseY = e.offsetY * canva.height / canva.clientHeight | 0;
    if (tool === "pencil") {
        ctx.strokeRect(mouseX, mouseY, 1, 1);
        isDrawing = true;
    } else if (tool === "line") {
        isLinning = true
        ctx.beginPath();
        ctx.moveTo(mouseX, mouseY);
    }
}

function onMouseMove(e, canva, ctx) {
    if (isDrawing === true) {
        mouseX = e.offsetX * canva.width / canva.clientWidth | 0;
        mouseY = e.offsetY * canva.height / canva.clientHeight | 0;
        ctx.strokeRect(mouseX, mouseY, 1, 1);
    }
}

function onMouseUp(e, canva, ctx) {
    if (isDrawing === true) {
        mouseX = e.offsetX * canva.width / canva.clientWidth | 0;
        mouseY = e.offsetY * canva.height / canva.clientHeight | 0;
        ctx.strokeRect(mouseX, mouseY, 1, 1);
        isDrawing = false;
    } else if (isLinning === true) {
        ctx.lineTo(mouseX, mouseY);
        ctx.stroke();
    }
}

function chooseTool(ctx) {
    let newTool = "";
    let pencil = document.getElementById("pencil")
    let line = document.getElementById("line")
    let clear = document.getElementById("clearCanva")
    pencil.onclick = () => {
        tool = "pencil"
        console.log(tool)
    }
    line.onclick = () => {
        tool = "line"
        console.log(tool)
    }
    clear.onclick = () => ctx.clearRect(0, 0, canva.width, canva.height);

}

function drawTool(canva, ctx) {
    canva.onmousedown = (e) => onMouseDown(e, canva, ctx);
    canva.onmousemove = (e) => onMouseMove(e, canva, ctx);
    canva.onmouseup = (e) => onMouseUp(e, canva, ctx)
}

window.onload = () => {
    document.body.style.backgroundColor = "black"
    let canva = document.getElementById("canva")
    canva.style.backgroundColor = "white"
    canva.attributes.width = window.innerWidth
    const rect = canva.getBoundingClientRect()
    var ctx = canva.getContext("2d");
    console.log(canva.width, canva.height)
    let pencil = document.getElementById("pencil")
    let line = document.getElementById("line")
    let clear = document.getElementById("clearCanva")
    pencil.onclick = () => {
        tool = "pencil"
        console.log(tool)
    }
    line.onclick = () => {
        tool = "line"
        console.log(tool)
    }
    clear.onclick = () => ctx.clearRect(0, 0, canva.width, canva.height);
    drawTool(canva, ctx)
}