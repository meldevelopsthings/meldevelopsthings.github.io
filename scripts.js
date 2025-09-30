function menuClick() {
    const click = document.getElementById("mobileLinks");

    if (click.style.display === "flex") {
        click.style.display = "none";
        document.getElementById("menuButton").setAttribute("d", "M18 6L6 18M6 6L18 18");
    } else {
        click.style.display = "flex";
        document.getElementById("menuButton").setAttribute("d", "M4 16H28M4 8H28M4 24H28");
    }
}

/*document.getElementById("menuToggle").addEventListener("click", function() {
    if (document.getElementById("mobileLinks").style.display === "flex") {
        document.getElementById("menuButton").setAttribute("d", "M18 6L6 18M6 6L18 18");
    } else {
        document.getElementById("menuButton").setAttribute("d", "M4 16H28M4 8H28M4 24H28");
    }
});*/