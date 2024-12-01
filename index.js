var allClicks = document.querySelectorAll(".letters").length;

for (i = 0;i < allClicks; i++){
document.querySelectorAll("button")[i].addEventListener("click", playMusic)

}


function playMusic(){
    var eachLetter = this.innerHTML;
  theMusic(eachLetter);
  animation(eachLetter)

}
document.addEventListener("keydown" , theButtons)


function theButtons(event){
    animation(event.key)
    theMusic(event.key);
}


function theMusic(key){ 

    switch(key){
        case "d":
            var shatta = new Audio("./sounds/wash.mp3");
            shatta.play();
            document.querySelector("h2").innerHTML = "You Are Now Listening To <span class=music>Shatta Wale! Refresh</span> The Page To <span class=music>Select</span> Different Music "

            break;
        
        case "e":
            var smoke1 = new Audio("./sounds/agyekum.mp3");
            smoke1.play();
            document.querySelector("h2").innerHTML = "You Are Now Listening To <span class=music>Kweku Smoke! Refresh</span> The Page To <span class=music>Select</span> Different Music "

            break;
        
        case "c":
            var blacko1 = new Audio("./sounds/christ.mp3");
            blacko1.play();
            document.querySelector("h2").innerHTML = "You Are Now Listening To <span class=music>Black Sheriff! Refresh</span> The Page To <span class=music>Select</span> Different Music "

            break;
        
         case "e":
            var smoke2 = new Audio("./sounds/agyekum.mp3");
            smoke2.play();
            document.querySelector("h2").innerHTML = "You Are Now Listening To <span class=music>Kweku Smoke! Refresh</span> The Page To <span class=music>Select</span> Different Music "

            break;
        case "m":
            var blacko2 = new Audio("./sounds/shut.mp3");
            blacko2.play();
            document.querySelector("h2").innerHTML = "You Are Now Listening To <span class=music>Black Sheriff! Refresh</span> The Page To <span class=music>Select</span> Different Music "

            break;
        
        case "b":
            var blacko3 = new Audio("./sounds/rebel.mp3");
            blacko3.play();
            document.querySelector("h2").innerHTML = "You Are Now Listening To <span class=music>Black Sheriff! Refresh</span> The Page To <span class=music>Select</span> Different Music "

            break;
        
        case "e":
            var smoke3 = new Audio("./sounds/agyekum.mp3");
            smoke3.play();
            document.querySelector("h2").innerHTML = "You Are Now Listening To <span class=music>Kweku Smoke! Refresh</span> The Page To <span class=music>Select</span> Different Music "

            break;
        
        case "r":
            var blacko4 = new Audio("./sounds/mere.mp3");
            blacko4.play();
            document.querySelector("h2").innerHTML = "You Are Now Listening To <span class=music>Kweku Smoke! Refresh</span> The Page To <span class=music>Select</span> Different Music "
            break;
        
        default:
        
        
        
           }

   }

   function animation(currentKey){
var alphabets = document.querySelector("."+currentKey);
 alphabets.classList.add("pressed")
 
 setTimeout(function(){
    alphabets.classList.remove("pressed")
 },100)

   }