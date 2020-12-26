const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



function preload() {
  polygonI = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(1,390,10000,20);

    g1 = new Ground(400,200,200,10);
   //base floor

    a = new Box(320,190,40,40);
    b = new Box(360,190,40,40);
    c = new Box(400,190,40,40);
    d = new Box(440,190,40,40);
    e = new Box(480,190,40,40);
    //2nd floor
    f = new Box(340,160,40,40);
    g = new Box(380,160,40,40);
    h = new Box(420,160.,40,40);
    i = new Box(460,160,40,40);
    //3rd floor 
    j = new Box(360,110,40,40);
    k = new Box(400,110,40,40);
    l = new Box(440,110,40,40);

    g2 = new Ground(800,300,200,10);

    //base floor 
    m = new Box(720,290,40,40);
    n = new Box(760,290,40,40);
    o = new Box(800,290,40,40);
    p = new Box(840,290,40,40);
    q = new Box(880,290,40,40);
    //2nd floor
    r = new Box(740,240,40,40);
    s = new Box(780,240,40,40);
    t = new Box(820,240,40,40);
    u = new Box(860,240,40,40);
    // 3rd floor 
    v = new Box(760,190,40,40);
    w = new Box(800,190,40,40);
    x = new Box(840,190,40,40);

    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);
   

    slingShot = new SlingShot(this.polygon,{x:100,y:200});

}

function draw(){
    background(255);
    Engine.update(engine);
    imageMode (CENTER)
    image(polygonI,polygon.position.x,polygon.position.y,40,40);
    ground.display();
    g1.display();
    a.display();
    b.display();
    c.display();
    d.display();
    e.display();   
     f.display(); 
     g.display();   
     h.display(); 
     i.display();  
     j.display();
     k.display();  
     l.display(); 


     g2.display();
     m.display();
     n.display();  
     o.display();
     p.display();  
     q.display(); 
     r.display();
     t.display();  
     u.display(); 
     s.display();
     v.display();  
     w.display(); 
     x.display();
     slingShot.display();
    
    drawSprites();
}
function mouseDragged(){
   
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
  
}


function mouseReleased(){
 slingShot.fly();
 
}



