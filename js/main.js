const oldgreeting = require("./oldgreeting.js");
console.log("merge oefening leuk!")

oldgreeting.greet()


function basicHaiku()
{
    return ["Winter seclusion","We saw a batman descending","The sky was gray>"]
}
function basichaiku2(){

    return ["Over the wintry forest", "winds howl in rage", "with no leaves to blow."]
}
function basicHaiku3()
{
    return ["All the leaves were brown","The sky was gray","California dreaming."]
}
//zet hier je haiku functie neer, zie https://github.com/progsen/haikugitopdracht voor ideeen

haikus = [

    basicHaiku(),basichaiku2(), basicHaiku3()
]

function randomHaiku()
{

    let i = Math.floor(Math.random(haikus.length));
    return haikus[i];
}

function start()
{
    console.log("starting main")
    
    console.log(randomHaiku())

}

start()