class App
{
    runApplication()
    {
        console.log("hello world");
        let appnaam = "App";
        let versienummer = "0.9"
        let versiedatum = new Date();
        let autheur = "Eliza Nabibaks"
        let copyright = "copyright";
        let darkmode = true;
        console.log("appnaam: " + appnaam  + "\nversienummer: " + versienummer + "\nversiedatum: " + versiedatum + "\nautheur: " + autheur + "\ncopyright: " + copyright + "\ndarkmode: " + darkmode ) 
    }
}

let app = new App();
app.runApplication();