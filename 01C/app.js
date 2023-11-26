class App
{
    runApplication()
    {
        console.log("hello world");
        this.appnaam = "App";
        this.versienummer = "0.9"
        this.versiedatum = new Date();
        this.autheur = "Eliza Nabibaks"
        this.copyright = "copyright";
        this.darkmode = true;
        //console.log("appnaam: " + appnaam  + "\nversienummer: " + versienummer + "\nversiedatum: " + versiedatum + "\nautheur: " + autheur + "\ncopyright: " + copyright + "\ndarkmode: " + darkmode )
        this.greeting = "Starting up!";
        this.eenboolean = true;
        this.eennumber = 21;
        this.eenstring = "string";
        console.log(this.eenboolean);
        console.log(this.eenstring);
        console.log(this.eennumber);
    }   
}

let app = new App();
app.runApplication();
console.log(app.greeting);
console.log("appnaam: " + app.appnaam);
console.log("versienummer: " + app.versienummer);
console.log("versiedatum" + app.versiedatum);
console.log("autheur: " + app.autheur);
console.log("copyright: " + app.copyright);
console.log("darkmode: " + app.darkmode);
console.log("eenboolean " + app.eenboolean);
console.log("eenstring " + app.eenstring);
console.log("eennumber " + app.eennumber);