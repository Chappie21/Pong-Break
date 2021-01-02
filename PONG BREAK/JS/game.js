
var lienzo;
var raqueta;
var teclas = [];// MANEJO DEL MOVIMIENTO
var blocks = [];// ARREGLO DE BLOQUES

window.onload = () =>{

    lienzo = document.getElementById("lienzo").getContext('2d');
    
    // EVENTOS
    window.onkeydown = CaptarTeclas;
    window.onkeyup = CaptarTeclas;

    // CREACION DE LA PELETA
    raqueta = new paleta(150, 10, lienzo);

    // CREACION DE LOS BLOQUES
    let y = 20;
    let x = 15;
    for(let i = 0; i<15; i++){
        blocks.push([]);
        for( j = 0; j<10; j++){
            blocks[i].push(new Block(x, y, 60, 30, lienzo));
            console.log("Bloque creado");
            y += 35;
        }
        x += 65; y = 20;
    }

    // CREACION DE LA PELOTA
    pelota = new Pelota(raqueta.getX(), raqueta.getY(), raqueta, blocks, lienzo);

    setInterval(Actualizar,20);
}

function CaptarTeclas(evento){
    
    switch(evento.type){
        case "keydown": teclas[evento.keyCode] = true;  break;
        case "keyup": teclas[evento.keyCode] = false;  break;
    }

}

function MoverPaleta(){
    if(teclas && teclas[65]){ raqueta.moverPaleta(-10); }
    if(teclas && teclas[68]){ raqueta.moverPaleta(10); }
}

function Dibujar_Bloques(){
    
    for(let i = 0; i<blocks.length; i++){
        for(let j = 0; j<blocks[i].length; j++){
            blocks[i][j].paintBlock();
        }
    }

}

function Actualizar(){

    lienzo.clearRect(0, 0, 1000, 820);
    MoverPaleta();// ACTUALIZAR POSICION DE LA RAQUETA CADA REDIBUJADO
    Dibujar_Bloques();
    raqueta.paintPaleta();
    pelota.paintPelota();

}
