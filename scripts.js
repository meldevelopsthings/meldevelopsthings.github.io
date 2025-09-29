function menuClick() {
    const click = document.getElementById("mobileLinks");

    if (click.style.display === "flex") {
        click.style.display = "none";
    } else {
        click.style.display = "flex";
    }
}

function menuToggle() {
    if (document.getElementById("menuToggle").src == "./assets/menu.svg") {
        document.getElementById("menuToggle").src = "./assets/exit.svg";
    } else {
        document.getElementById("menuToggle").src = "./assets/menu.svg";
    }
}