function toggleMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    let content = document.getElementById("DarkModetext");

    /*Change to dark mode*/
    if (content.innerText == "Dark") {
        document.getElementById("topnav").style.backgroundColor = "#333";
        var elements = document.querySelectorAll("#topnav_a");

        for (var i = 0; i < elements.length; i++) {
        elements[i].style.color = "#f2f2f2";
        }

        document.getElementById("topnav").style.backgroundColor = "#333";

        var links = document.querySelectorAll('.topnav a');
        links.forEach(function(link) {
            if (!link.classList.contains('active')) {
                link.addEventListener("mouseover", function() {
                    link.style.backgroundColor = "#4b4b4b";
                });

                link.addEventListener("mouseout", function() {
                    link.style.backgroundColor = "";
                });
            }
        });

        var elements = document.querySelectorAll("#container");

        for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "#161b22";
        }

        content.style.backgroundColor = "#333"

        content.innerText = "Light";
        content.style.background = "url('./dark.png') no-repeat center center";
        document.cookie = "darkMode=1; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
    
    /*Change to light mode*/
    } else {
        document.getElementById("topnav").style.backgroundColor = "#f1eeee";
        var elements = document.querySelectorAll("#topnav_a");

        for (var i = 0; i < elements.length; i++) {
        elements[i].style.color = "black";
        }

        var links = document.querySelectorAll('.topnav a');
        links.forEach(function(link) {
            if (!link.classList.contains('active')) {
                link.addEventListener("mouseover", function() {
                    link.style.backgroundColor = "#ddd";
                });

                link.addEventListener("mouseout", function() {
                    link.style.backgroundColor = "";
                });
            }
        });

        var elements = document.querySelectorAll("#container");

        for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "#faf8f8";
        }

        content.style.backgroundColor = "#f1eeee"

        content.innerText = "Dark";
        content.style.background = "url('./light.png') no-repeat center center";
        document.cookie = "darkMode=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
    }
}