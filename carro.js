//codigo dos carros
let yCarros=[40,96,150]
let velocidadeCarros=[2,2.5,3.5]
let xCarros=[600,600,600]

function mostraCarro(){
  image (imagemCarro,xCarros[0],yCarros[0], 50, 40)
  image(imagemCarro2,xCarros[1],yCarros[1],50,40)
  image(imagemCarro3,xCarros[2],yCarros[2],50,40)
  print(yCarros)
}
function movimentaCarro(){
  xCarros[0]-= velocidadeCarros[0]
  xCarros[1] -= velocidadeCarros[1]
  xCarros[2] -= velocidadeCarros[2]
}

function voltaPosicaoInicialDoCarro(){
  if (xCarros[0] <-50){
    xCarros[0]=600
  }
  if (xCarros[1] <-50){
    xCarros[1]=600
  }
  if (xCarros[2] <-50){
    xCarros[2]=600
  }
}
