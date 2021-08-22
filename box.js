function Box(x,y,w,h,t){
    this.x = x; 
    this.y=y;
    this.w=w;
    this.h=h
    this.t=t;

    this.answers ;

    this.show = function(){
        noStroke()
        rect(this.x,this.y,this.w,this.h)
        textSize(30);
        textAlign(CENTER);
        text(this.t, this.x + this.w * 0.5, this.y + this.h * 0.7);
    }
    this.drop = function(){
        this.y+=1;
    }
}