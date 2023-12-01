class App
{
    runApplication()
    {
        console.log("hello world");
        //document.getElementById("newstitle")
        //document.getElementByClassName("gamesnews headline")
        //document.getElementByClassName("gamenews")
        let title = document.getElementById("newstitle");
        console.log(title);

        let random = Math.random();
        console.log(random);
        if(random < 0.2)
        {
            title.style.backgroundColor = "#FF0000";
        }
        else if(random > 0.2 && random < 0.6){
            title.style.backgroundColor ="#FA58F4";
        }
        else if(random > 0.6 && random < 0.75){
            title.style.backgroundColor = "#8258FA";
        } else if(random > 0.75){
            title.style.backgroundColor = "#FA5882";
        }

        let newsitem1 = document.getElementsByClassName("gamenews")[0];
        let newsitem2 = document.getElementsByClassName("gamenews")[1];

        if(random < 0.2)
        {
            newsitem1.style.backgroundColor = "#FFC0CB";
        }
        else if(random > 0.2 && random < 0.6)
        {
            newsitem1.style.backgroundColor = "#7FFFD4";
        }
        else if(random > 0.6 && random < 0.75)
        {
            newsitem1.style.backgroundColor = "#00008B";
        }
        else if(random > 0.75)
        {
            newsitem1.style.backgroundColor = "#FFA500";
        }

        if(random < 0.2)
        {
            newsitem2.style.backgroundColor = "#FFFF00";
        }
        else if(random > 0.2 && random < 0.6)
        {
            newsitem2.style.backgroundColor = "#808000";
        }
        else if(random > 0.6 && random < 0.75)
        {
            newsitem2.style.backgroundColor = "#800000";
        }
        else if(random > 0.75)
        {
            newsitem2.style.backgroundColor = "#ADD8E6";
        }
    }
}

let app = new App();
app.runApplication();

