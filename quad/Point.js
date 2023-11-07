class Point {

    constructor(x,y,weight,color){
        this.x = x;
        this.y = y;
        this.weight = weight;
        this.i = 1; //instability
        this.ismoving = true;
        this.color = color || 'white';
        this.age = 0;
    }

    move(){
        if(this.ismoving){
            const i = this.i;
            this.x += i == 0 ? 0 : Random.number(-i,i);
            this.y += i == 0 ? 0 : Random.number(-i,i);
        }
    }

    stop(){
        this.ismoving = false;
    }

}