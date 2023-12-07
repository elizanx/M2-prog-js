class App
{
    runApplication()
    {
        console.log("hello world");
    }

    marioFunction()
    {
        console.log("MARIO!!");
    }

    bwahahaFunction()
    {
        let bwahaha = "BWAHAHA!!!";
        return bwahaha;
    }

    rekenFunction(a,b)
    {
        let optellen = a + b;
        return optellen;
    }

    luigiFunction()
    {
        let luigi = "LUIGI!!";
        return luigi;
    }
}

let app = new App();
app.runApplication();
app.marioFunction();
console.log(app.bwahahaFunction());
console.log(app.rekenFunction(2,8));
console.log(app.luigiFunction("LUIGI!!"));
