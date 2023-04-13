let para1 = document.getElementById("nancy");
let para2 = document.getElementById("lorde");
let para3 = document.getElementById("phoebe");
let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");
let image3 = document.getElementById("image3");
let hover = document.getElementById("hover");
let clicked = false;

document.getElementById("special-button").addEventListener("click", function(){
    clicked = true;
    image1.setAttribute("tabindex", 0);
    image2.setAttribute("tabindex", 0);
    image3.setAttribute("tabindex", 0);
});

document.getElementById("all-button").addEventListener("click", function(){
    clicked = false;
});

document.getElementById("tv-button").addEventListener("click", function(){
    clicked = false;
});

document.getElementById("music-button").addEventListener("click", function(){
    clicked = false;
});

document.getElementById("film-button").addEventListener("click", function(){
    clicked = false;
});

document.getElementById("books-button").addEventListener("click", function(){
    clicked = false;
});

document.getElementById("digital-button").addEventListener("click", function(){
    clicked = false;
});

image1.addEventListener("mouseover", function(){
    if(clicked == true){
        para1.style.visibility = "visible";
        para1.style.gridColumn = "1 / span 1";
    }
});

image1.addEventListener("mouseout", function(){
    if(clicked == true){
        para1.style.visibility = "hidden";
    }
});

image2.addEventListener("mouseover", function(){
    if(clicked == true){
        para2.style.visibility = "visible";
        para2.style.gridColumn = "2 / span 1";
    }
});

image2.addEventListener("mouseout", function(){
    if(clicked == true){
        para2.style.visibility = "hidden";
    }
});

image3.addEventListener("mouseover", function(){
    if(clicked == true){
        para3.style.visibility = "visible";
        para3.style.gridColumn = "3 / span 1";
    }
});

image3.addEventListener("mouseout", function(){
    if(clicked == true){
        para3.style.visibility = "hidden";
    }
});


image1.addEventListener("focus", function(){
    if(clicked == true){
        para1.style.visibility = "visible";
        para1.style.gridColumn = "1 / span 1";
    }
});

image1.addEventListener("blur", function(){
    if(clicked == true){
        para1.style.visibility = "hidden";
    }
});

image2.addEventListener("focus", function(){
    if(clicked == true){
        para2.style.visibility = "visible";
        para2.style.gridColumn = "2 / span 1";
    }
});

image2.addEventListener("blur", function(){
    if(clicked == true){
        para2.style.visibility = "hidden";
    }
});

image3.addEventListener("focus", function(){
    if(clicked == true){
        para3.style.visibility = "visible";
        para3.style.gridColumn = "3 / span 1";
    }
});

image3.addEventListener("blur", function(){
    if(clicked == true){
        para3.style.visibility = "hidden";
    }
});