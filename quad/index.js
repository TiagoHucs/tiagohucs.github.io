//criando canvas
var ca = new Canvas();

//criando pontos
let points = [];
for (let i = 1; i <= 100; i++) {
    let x = Random.int(0, ca.canvas.width);
    let y = Random.int(0, ca.canvas.height);
    let p = new Point(x, y, 1);
    points.push(p);
}

function meuMouseClick(mp){
    console.log(mp);
    let p = new Point(mp.x,mp.y,1);
    points.push(p);
}

ca.onMouseClick = meuMouseClick;

var rect = new Rectangle(0, 0, ca.canvas.width, ca.canvas.height);
var distance = 100;

var qt;

function update() {
    qt = new Quadtree(4, rect);
    points.forEach(p => {
        p.move();
        qt.add(p);
    });
}

function render(){
    ca.clear("black");
    qt.draw(ca);       
    //desenha linhas entre eles 
    for (var i = 0; i < points.length; i++) {
        let a = points[i];
        for (var c = i + 1; c < points.length; c++) {
            let b = points[c];

            let x = a.x - b.x;
            let y = a.y - b.y;
            let h = Math.hypot(x,y);

            if(h <= distance){
                let color = "rgb(000,255,000)";
                ca.line(a.x , a.y , b.x , b.y, color);
            }

        }
    }
}

function execute(){
    update();
    render();
    requestAnimationFrame(execute);
}

requestAnimationFrame(execute);
