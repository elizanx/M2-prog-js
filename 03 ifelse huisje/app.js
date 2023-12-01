class App
{
    runApplication()
    {
        console.log("hello world");
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        console.log(canvas);
        g.beginPath();
        g.moveTo(30,10);
        g.fillStyle = "pink";
        g.lineTo(20,30);
        g.lineTo(60,40);
        g.lineTo(80,30);
        g.lineTo(70,20);
        g.closePath();
        g.stroke();
        g.fill();
        g.fillStyle = "purple";
        g.beginPath();
        g.moveTo(20,50);
        g.lineTo(60,60);
        g.lineTo(80,50);
        g.lineTo(80,30);
        g.lineTo(60,40);
        g.lineTo(20,30)
        g.closePath();
        g.stroke();
        g.fill();
        g.beginPath();
        g.moveTo(30,36);
        g.lineTo(30,42);
        g.lineTo(38,44);
        g.lineTo(38,38);
        g.closePath();
        g.stroke();
        let randomGetal = Math.random();
        if (randomGetal < 0.5){
            g.fillStyle = "black";
            g.fill();
        }
        else if (randomGetal > 0.5){
            g.fillStyle = "yellow";
            g.fill();
        }
       
    }
}

let app = new App();
app.runApplication();