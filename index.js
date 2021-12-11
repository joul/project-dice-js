
     //Player 1 Dice
     var RandomNumber1 = Math.floor(Math.random() * 6) + 1;
     var RandomImage1 = "images/dice"+RandomNumber1+".png";
     var image1 = document.querySelectorAll("img")[0];
     image1.setAttribute("src",RandomImage1);

     //Player 2 Dice
     var RandomNumber2 = Math.floor(Math.random() * 6) + 1;
     var RandomImage2 = "images/dice"+RandomNumber2+".png";
     var image2 = document.querySelectorAll("img")[1];
     image2.setAttribute("src",RandomImage2);

     //Header Display
     if (RandomNumber1 > RandomNumber2){
       document.querySelector("h1").innerHTML = "Player 1 Wins!!!";
     }
     else if (RandomNumber1 < RandomNumber2) {
       document.querySelector("h1").innerHTML = "Player 2 Wins!!!";
     }
     else {
       document.querySelector("h1").innerHTML = "DRAW!!!";
     }
     
     //Using DOM(Document Object Model) to manipulate HTML Elements
