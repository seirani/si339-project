let para1 = document.getElementById("nancy");
let para2 = document.getElementById("lorde");
let para3 = document.getElementById("phoebe");
let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");
let image3 = document.getElementById("image3");
let hover = document.getElementById("hover");
let clicked = false;

image1.querySelector("img").setAttribute("tabindex", 0);
image2.querySelector("img").setAttribute("tabindex", 0);
image3.querySelector("img").setAttribute("tabindex", 0);

document.getElementById("special-button").addEventListener("click", function(){
    clicked = true;
    hover.style.visibility = "visible";
});

document.getElementById("all-button").addEventListener("click", function(){
    clicked = false;
    hover.style.visibility = "hidden";
});

document.getElementById("tv-button").addEventListener("click", function(){
    clicked = false;
    hover.style.visibility = "hidden";
});

document.getElementById("music-button").addEventListener("click", function(){
    clicked = false;
    hover.style.visibility = "hidden";
});

document.getElementById("film-button").addEventListener("click", function(){
    clicked = false;
    hover.style.visibility = "hidden";
});

document.getElementById("books-button").addEventListener("click", function(){
    clicked = false;
    hover.style.visibility = "hidden";
});

document.getElementById("digital-button").addEventListener("click", function(){
    clicked = false;
    hover.style.visibility = "hidden";
});

image1.querySelector("img").addEventListener("mouseover", function(){
    if(clicked == true){
        para1.style.visibility = "visible";
        para1.style.gridColumn = "1 / span 1";
    }
    image1.querySelector("figcaption").innerHTML = "Design by Leah Hoogterp";
});

image1.querySelector("img").addEventListener("mouseout", function(){
    if(clicked == true){
        para1.style.visibility = "hidden";
    }
    image1.querySelector("figcaption").innerHTML = "On Nancy Drew, Scooby-Doo and the mysteries of childhood";
});

image2.querySelector("img").addEventListener("mouseover", function(){
    if(clicked == true){
        para2.style.visibility = "visible";
        para2.style.gridColumn = "2 / span 1";
    }
    image2.querySelector("figcaption").innerHTML = "Design by Priya Ganji";
});

image2.querySelector("img").addEventListener("mouseout", function(){
    if(clicked == true){
        para2.style.visibility = "hidden";
    }
    image2.querySelector("figcaption").innerHTML = "The concert, the sun and the holy spirit of Lorde’s 'Solar Power'";
});

image3.querySelector("img").addEventListener("mouseover", function(){
    if(clicked == true){
        para3.style.visibility = "visible";
        para3.style.gridColumn = "3 / span 1";
    }
    image3.querySelector("figcaption").innerHTML = "Design by Abby Schreck";
});

image3.querySelector("img").addEventListener("mouseout", function(){
    if(clicked == true){
        para3.style.visibility = "hidden";
    }
    image3.querySelector("figcaption").innerHTML = "Phoebe Bridgers knows the end, but how do we deal with the ending?";
});


image1.querySelector("img").addEventListener("focus", function(){
    if(clicked == true){
        para1.style.visibility = "visible";
        para1.style.gridColumn = "1 / span 1";
    }
    image1.querySelector("figcaption").innerHTML = "Design by Leah Hoogterp";
});

image1.querySelector("img").addEventListener("blur", function(){
    if(clicked == true){
        para1.style.visibility = "hidden";
    }
    image1.querySelector("figcaption").innerHTML = "On Nancy Drew, Scooby-Doo and the mysteries of childhood";
});

image2.querySelector("img").addEventListener("focus", function(){
    if(clicked == true){
        para2.style.visibility = "visible";
        para2.style.gridColumn = "2 / span 1";
    }
    image2.querySelector("figcaption").innerHTML = "Design by Priya Ganji";
});

image2.querySelector("img").addEventListener("blur", function(){
    if(clicked == true){
        para2.style.visibility = "hidden";
    }
    image2.querySelector("figcaption").innerHTML = "The concert, the sun and the holy spirit of Lorde’s 'Solar Power'";
});

image3.querySelector("img").addEventListener("focus", function(){
    if(clicked == true){
        para3.style.visibility = "visible";
        para3.style.gridColumn = "3 / span 1";
    }
    image3.querySelector("figcaption").innerHTML = "Design by Abby Schreck";
});

image3.querySelector("img").addEventListener("blur", function(){
    if(clicked == true){
        para3.style.visibility = "hidden";
    }
    image3.querySelector("figcaption").innerHTML = "Phoebe Bridgers knows the end, but how do we deal with the ending?";
});

let sitcom = document.getElementById("sitcom");
sitcom.querySelector("img").setAttribute("tabindex", 0);

sitcom.querySelector("img").addEventListener("mouseover", function(){
    sitcom.querySelector("figcaption").innerHTML = "Design by Leah Hoogterp";
});

sitcom.querySelector("img").addEventListener("mouseout", function(){
    sitcom.querySelector("figcaption").innerHTML = "Not-your-average family sitcom pilot";
});

sitcom.querySelector("img").addEventListener("focus", function(){
    sitcom.querySelector("figcaption").innerHTML = "Design by Leah Hoogterp";
});

sitcom.querySelector("img").addEventListener("blur", function(){
    sitcom.querySelector("figcaption").innerHTML = "Not-your-average family sitcom pilot";
});

let luke = document.getElementById("luke");
luke.querySelector("img").setAttribute("tabindex", 0);

luke.querySelector("img").addEventListener("mouseover", function(){
    luke.querySelector("figcaption").innerHTML = "Design by Sara Fang";
});

luke.querySelector("img").addEventListener("mouseout", function(){
    luke.querySelector("figcaption").innerHTML = "This is not the Luke Skywalker you’re looking for";
});

luke.querySelector("img").addEventListener("focus", function(){
    luke.querySelector("figcaption").innerHTML = "Design by Sara Fang";
});

luke.querySelector("img").addEventListener("blur", function(){
    luke.querySelector("figcaption").innerHTML = "This is not the Luke Skywalker you’re looking for";
});

let spielberg = document.getElementById("spielberg");
spielberg.querySelector("img").setAttribute("tabindex", 0);

spielberg.querySelector("img").addEventListener("mouseover", function(){
    spielberg.querySelector("figcaption").innerHTML = "Design by Leah Hoogterp";
});

spielberg.querySelector("img").addEventListener("mouseout", function(){
    spielberg.querySelector("figcaption").innerHTML = "Spielberg’s ‘The Fabelmans’ through the looking glass";
});

spielberg.querySelector("img").addEventListener("focus", function(){
    spielberg.querySelector("figcaption").innerHTML = "Design by Leah Hoogterp";
});

spielberg.querySelector("img").addEventListener("blur", function(){
    spielberg.querySelector("figcaption").innerHTML = "Spielberg’s ‘The Fabelmans’ through the looking glass";
});

let xmas = document.getElementById("xmas");
xmas.querySelector("img").setAttribute("tabindex", 0);

xmas.querySelector("img").addEventListener("mouseover", function(){
    xmas.querySelector("figcaption").innerHTML = "Design by Evelyn Mousigian";
});

xmas.querySelector("img").addEventListener("mouseout", function(){
    xmas.querySelector("figcaption").innerHTML = "All I want for Christmas is cable TV";
});

xmas.querySelector("img").addEventListener("focus", function(){
    xmas.querySelector("figcaption").innerHTML = "Design by Evelyn Mousigian";
});

xmas.querySelector("img").addEventListener("blur", function(){
    xmas.querySelector("figcaption").innerHTML = "All I want for Christmas is cable TV";
});

let thank = document.getElementById("thank");
thank.querySelector("img").setAttribute("tabindex", 0);

thank.querySelector("img").addEventListener("mouseover", function(){
    thank.querySelector("figcaption").innerHTML = "Design by Francie Ahrens";
});

thank.querySelector("img").addEventListener("mouseout", function(){
    thank.querySelector("figcaption").innerHTML = "Thankful for Thanksgiving TV";
});

thank.querySelector("img").addEventListener("focus", function(){
    thank.querySelector("figcaption").innerHTML = "Design by Francie Ahrens";
});

thank.querySelector("img").addEventListener("blur", function(){
    thank.querySelector("figcaption").innerHTML = "Thankful for Thanksgiving TV";
});

let teen = document.getElementById("teen");
teen.querySelector("img").setAttribute("tabindex", 0);

teen.querySelector("img").addEventListener("mouseover", function(){
    teen.querySelector("figcaption").innerHTML = "Design by Tye Kalinovic";
});

teen.querySelector("img").addEventListener("mouseout", function(){
    teen.querySelector("figcaption").innerHTML = "The fatal flaw of teen TV";
});

teen.querySelector("img").addEventListener("focus", function(){
    teen.querySelector("figcaption").innerHTML = "Design by Tye Kalinovic";
});

teen.querySelector("img").addEventListener("blur", function(){
    teen.querySelector("figcaption").innerHTML = "The fatal flaw of teen TV";
});

let haunt = document.getElementById("haunt");
haunt.querySelector("img").setAttribute("tabindex", 0);

haunt.querySelector("img").addEventListener("mouseover", function(){
    haunt.querySelector("figcaption").innerHTML = "Design by Tamara Turner";
});

haunt.querySelector("img").addEventListener("mouseout", function(){
    haunt.querySelector("figcaption").innerHTML = "Why ‘The Haunting of Hill House’ is a perfect adaptation";
});

haunt.querySelector("img").addEventListener("focus", function(){
    haunt.querySelector("figcaption").innerHTML = "Design by Tamara Turner";
});

haunt.querySelector("img").addEventListener("blur", function(){
    haunt.querySelector("figcaption").innerHTML = "Why ‘The Haunting of Hill House’ is a perfect adaptation";
});

let dune = document.getElementById("dune");
dune.querySelector("img").setAttribute("tabindex", 0);

dune.querySelector("img").addEventListener("mouseover", function(){
    dune.querySelector("figcaption").innerHTML = "Design by Tamara Turner";
});

dune.querySelector("img").addEventListener("mouseout", function(){
    dune.querySelector("figcaption").innerHTML = "‘Dune’ isn’t worthy of your praise";
});

dune.querySelector("img").addEventListener("focus", function(){
    dune.querySelector("figcaption").innerHTML = "Design by Tamara Turner";
});

dune.querySelector("img").addEventListener("blur", function(){
    dune.querySelector("figcaption").innerHTML = "‘Dune’ isn’t worthy of your praise";
});

let spooky = document.getElementById("spooky");
spooky.querySelector("img").setAttribute("tabindex", 0);

spooky.querySelector("img").addEventListener("mouseover", function(){
    spooky.querySelector("figcaption").innerHTML = "Design by Grace Filbin";
});

spooky.querySelector("img").addEventListener("mouseout", function(){
    spooky.querySelector("figcaption").innerHTML = "Six spooky horror-comedies to kick off October right";
});

spooky.querySelector("img").addEventListener("focus", function(){
    spooky.querySelector("figcaption").innerHTML = "Design by Grace Filbin";
});

spooky.querySelector("img").addEventListener("blur", function(){
    spooky.querySelector("figcaption").innerHTML = "Six spooky horror-comedies to kick off October right";
});

let bodies = document.getElementById("bodies");
bodies.querySelector("img").setAttribute("tabindex", 0);

bodies.querySelector("img").addEventListener("mouseover", function(){
    bodies.querySelector("figcaption").innerHTML = "Design by Serena Shen";
});

bodies.querySelector("img").addEventListener("mouseout", function(){
    bodies.querySelector("figcaption").innerHTML = "‘Bodies Bodies Bodies,’ internet gossip and pseudo-intellectual arts criticism";
});

bodies.querySelector("img").addEventListener("focus", function(){
    bodies.querySelector("figcaption").innerHTML = "Design by Serena Shen";
});

bodies.querySelector("img").addEventListener("blur", function(){
    bodies.querySelector("figcaption").innerHTML = "‘Bodies Bodies Bodies,’ internet gossip and pseudo-intellectual arts criticism";
});

let netflix = document.getElementById("netflix");
netflix.querySelector("img").setAttribute("tabindex", 0);

netflix.querySelector("img").addEventListener("mouseover", function(){
    netflix.querySelector("figcaption").innerHTML = "Design by Erin Ruark";
});

netflix.querySelector("img").addEventListener("mouseout", function(){
    netflix.querySelector("figcaption").innerHTML = "Whether you realize it or not, Netflix is just another social media app";
});

netflix.querySelector("img").addEventListener("focus", function(){
    netflix.querySelector("figcaption").innerHTML = "Design by Erin Ruark";
});

netflix.querySelector("img").addEventListener("blur", function(){
    netflix.querySelector("figcaption").innerHTML = "Whether you realize it or not, Netflix is just another social media app";
});

let romcom = document.getElementById("romcom");
romcom.querySelector("img").setAttribute("tabindex", 0);

romcom.querySelector("img").addEventListener("mouseover", function(){
    romcom.querySelector("figcaption").innerHTML = "Design by Jennie Vang";
});

romcom.querySelector("img").addEventListener("mouseout", function(){
    romcom.querySelector("figcaption").innerHTML = "Why I hate classic rom-com endings";
});

romcom.querySelector("img").addEventListener("focus", function(){
    romcom.querySelector("figcaption").innerHTML = "Design by Jennie Vang";
});

romcom.querySelector("img").addEventListener("blur", function(){
    romcom.querySelector("figcaption").innerHTML = "Why I hate classic rom-com endings";
});