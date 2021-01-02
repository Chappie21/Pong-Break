class Block{

    constructor(px, py, tx, ty, linezo){

        // POSICION DEL BLOQUE
        this.__x = px;
        this.__y = py;

        //  TAMAÑO DEL BLOQUE
        this.__dx = tx;
        this.__dy = ty;

        // LIENZO DE REFERENCIA
        this.__lienzo = linezo;

        // BLOQUE DESTRUIDO
        this.__life = 3;
    }

    // METODO DE DIBUJADO
    paintBlock(){

        // SIEMPRE Y CUANDO EL BLOQUE NO HAYA SIDO DESTRUIDO SE DIBIJARÁ
        if(!this.isBreak()){
            
            switch(this.__life){
                case 1: this.__lienzo.fillStyle = "rgba(255, 255, 255, 0.2)"; break;
                case 2: this.__lienzo.fillStyle = "rgba(255, 255, 255, 0.5)"; break;
                case 3: this.__lienzo.fillStyle = "white"; break;
            }

            this.__lienzo.fillRect(this.__x, this.__y, this.__dx, this.__dy);
        }

    }

    // DESTRUIR BLOQUE
    PonchBlock(){
        this.__life--; // __BREAK ES VERDADERO CUANDO LA PELOTA TOCA ESTE
    }

    // GETTERS AND SETTERS

    getPX(){
        return this.__x; // RETORNA COORDENADA X DEL BLOQUE
    }

    getPY(){
        return this.__y // RETORNA COORDENADA Y DEL BLOQUE
    }

    getTY(){
        return this.__dy
    }

    getTX(){
        return this.__dx;
    }

    isBreak(){
        
        if(this.__life == 0){
            return true;
        }else{
            return false;
        }

    }
}
