//preparar e rodar um código
function setup() {
  createCanvas(400, 400);//criar tela
  background("rgb(124,17,17)");
}

//responsável por desenhar
function draw() {
  stroke("black");
  fill("rgb(37,37,122)");
  
  if(mouseIsPressed){
    rect(mouseX, mouseY, 40, 40);
    }
}