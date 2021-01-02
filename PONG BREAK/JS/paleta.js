class paleta{

    constructor(tx, ty, lienzo){

        //DIMENSIONES DE LA PALETA
        this.tx = tx;
        this.ty = ty;

        //COORDENADAS INICIALES DE LA PALETA
        this.x = 430;
        this.y = 760;

        //REFERENCIA DEL LIENZO
        this.lienzo = lienzo;
    }

    paintPaleta(){

        this.lienzo.fillStyle = "white";
        this.lienzo.fillRect(this.x, this.y, this.tx, this.ty);

    }

    moverPaleta(x){
        
        if(this.x+x>0 && this.x+x<850){  this.x+=x; }

    }

    getY(){
        return this.y;
    }

    getX(){
        return this.x;
    }

    getTY(){
        return this.ty
    }

    getTX(){
        return this.tx;
    }
}