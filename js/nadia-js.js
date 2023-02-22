//Denne funktion bruges til at finde det ønskede element
function feedback(x){
    return document.getElementById(x);
}

//variabler for bubble array, bubble index & setInterval()
let ba, bi=0, intrvl;

//bca - bubble content Array
let bca = [
    '<h2>heading Number 1</h2> <p>Content for section 1</p>',
    '<h2>heading Number 2</h2> <p>Content for section 2</p>',
    '<h2>heading Number 3</h2> <p>Content for section 3</p>',
    '<h2>heading Number 4</h2> <p>Content for section 4</p>'
];

function slideshow(bi){
    //fade-out tekst
    feedback("indhold").style.opacity = 0;

    //loop hen over bobblerne + skift baggrundsfarve
    for(let i=0; i < ba.length; i++){
        ba[i].style.background = "rgba (0,0,0.1)";
    }


//skifter baggrundsfarven på den bobble der er i fokus til at være mørkere end de andre
ba[bi].style.background = "#999";

//timer så koden skifter efter 300ms
setTimeout(function(){
    //skift indholdet 
    feedback("indhold").innerHTML = bca[bi];
    //fade-in tekst
    feedback("indhold").style.opacity = 1;
}, 300);
}

//Ny funktionen som skal køre hver 5 sekund
function bubbleslide(){
   //øger bubble index tallet
    bi++; 
    //hvis bubble index er i lig med det totale antal bobbler
    if (bi==ba.length){
        bi= 0; //nulstiller bubble index til 0 så den laver et loop tilbage til starten
    }
    slideshow(bi);
}

//tilføjer en event så slideshow starter når documentet er loadet 
window.addEventListener("load", function(){
    //forbinder til ... array
    ba = feedback("slideshow").children,
    //indstiller hastigheden på interval timingen til slideshowet
    intrvl = setInterval (bubbleslide, 3000);
});  

