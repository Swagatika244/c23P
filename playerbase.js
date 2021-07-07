class Playerbase{
    constructor(x,y,width,height){
      this.x =x;
      this.y =y;
      this.width = width;
      this.height = height;
      this.image = loadImage('base2.png');
      var opt ={
        isStatic:true
      }
      this.body = Bodies.rectangle(x,y,width,height,opt);
    }display(){
  
      let posx=this.body.position.x;
      let posy=this.body.position.y;
  
      push ();
      translate(posx,posy);
      imageMode (CENTER);
      image (this.image,0,0,this.width,this.height);
      pop ();
    }
  }