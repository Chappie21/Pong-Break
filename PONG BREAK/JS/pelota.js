class Pelota{

    constructor(px, py, paleta, bloques, lienzo){

        // CONSTANTES DE MOVIMIENTO
        this.__dx = 10;
        this.__dy = -10;

        // RADIO DE LA PELOTA
        this.__radio = 10;

        // COORDENADAS
        this.__x = px+150/2;
        this.__y = py-this.__radio;
        
        // REFERENCIA DE LA PALETA
        this.__paleta = paleta;

        // REFERENCIA DE LOS BLOQUES
        this.__bloques = bloques;

        this.__lienzo = lienzo; // LIENZO DE REFERENCIA
    }

    paintPelota(){

        // COLISION CON LAS PAREDES

        if((this.__x > 1000 - this.__radio) || (this.__x < 0 + this.__radio)){ this.__dx = -this.__dx }
        if((this.__y < 0 + this.__radio) || this.__ColisionPaleta()){this.__dy = -this.__dy}

        //  COLISION CON BLOQUES
        for(let i = 0; i<this.__bloques.length; i++){
            for(let j = 0; j<this.__bloques[i].length; j++){

               if(!this.__bloques[i][j].isBreak()){
                    this.__ColisionBloque(this.__bloques[i][j]);
               }

            }
        }

        this.__x += this.__dx;
        this.__y += this.__dy;
        
        // PROCESO DE DIBUJADO
        this.__lienzo.beginPath();
        this.__lienzo.arc(this.__x, this.__y, this.__radio, 0, 2 * Math.PI, false);

        this.__lienzo.fillStyle = "white";

        this.__lienzo.fill();
        this.__lienzo.closePath();
    }

    // DETETCAR COLISION CON LA PALETA
    __ColisionPaleta(){

       if(this.__x >= this.__paleta.getX() && this.__x <= this.__paleta.getX() + 150 ){
            if(this.__y + this.__radio > this.__paleta.getY()){  return true; } // COLISION CON LA PALETA
       }

       return false; // EN CASO DE NO COLISIONAR RETORNA FALSE
    }

    // DETECTAR COLISION CON BLOQUE
    __ColisionBloque(bloque){


        // COLISION FRONTAL POR DEBAJO
        if(this.__x + this.__radio > bloque.getPX() && this.__x < bloque.getPX() + bloque.getTX()){ 
            if(this.__y + this.__radio <= bloque.getPY() + bloque.getTY()){
                bloque.PonchBlock();
                this.__dy = -this.__dy 
            } 
        }
        

    }


}