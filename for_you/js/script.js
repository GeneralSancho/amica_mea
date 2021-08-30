window.onload = function menuF () {
    var menu = document.getElementById("MyTopnav");
    menu.onclick = function myFunction() {
        
        if (menu.className === "topnav") {
        
            menu.className += " responsive";
        } else {
            menu.className = "topnav";

        }
    }
}

    
