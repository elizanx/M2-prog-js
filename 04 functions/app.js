function superMooieGlobalFunction()
{
    console.log("Ik ben global");
    console.log("dus jij mag mij overal aanroepen");
}
superMooieGlobalFunction();
superMooieGlobalFunction();
superMooieGlobalFunction();

class App
{
    runApplication()
    {
        console.log("hello world");
        superMooieGlobalFunction();
        
    }
}

let app = new App();
app.runApplication();





