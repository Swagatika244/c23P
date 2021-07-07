class Player{
    constructor(image,x,y,w,h){
      this.x=x;
      this.y =y;
      this.width=w;
      this.height =h;
      this.image=loadImage(image);
      var opt={
        isStatic:true
      }
      this.body= Bodies.rectangle(x,y,this.width,this.height,opt);
      World.add(world,this.body);
    }display(){
  
      let posx=this.body.position.x;
      let posy=this.body.position.y;
        push ();
        translate(posx,posy);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop ();
    }
  }