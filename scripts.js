function menuClick() {
    const click = document.getElementById("mobileLinks");

    if (click.style.display === "grid") {
        document.getElementById("menuToggle").src = './assets/menu.svg';
        click.style.display = "none";
    } else {
        document.getElementById("menuToggle").src = './assets/exit.svg';
        click.style.display = "grid";
    }


}
