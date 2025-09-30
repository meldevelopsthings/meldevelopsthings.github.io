function menuClick() {
    const click = document.getElementById("mobileLinks");

    if (click.style.display === "flex") {
        click.style.display = "none";
        document.getElementById("menuButton").setAttribute("d", "M4 16H28M4 8H28M4 24H28");
    } else {
        click.style.display = "flex";
        document.getElementById("menuButton").setAttribute("d", "M24 8L8 24M8 8L24 24");
    }
}

document.getElementById("theme").addEventListener("click", function() {
    const theme = document.getElementById("body");
    const contains = theme.classList.contains("dark");
    const image = document.getElementById("moon");

    if (contains) {
        theme.classList.remove("dark");
        image.setAttribute("d", "M21 12.79C20.8427 14.4922 20.2039 16.1144 19.1582 17.4668C18.1126 18.8192 16.7035 19.8458 15.0957 20.4265C13.4879 21.0073 11.748 21.1181 10.0795 20.7461C8.41101 20.3741 6.88299 19.5345 5.67422 18.3258C4.46545 17.117 3.62593 15.589 3.2539 13.9205C2.88187 12.252 2.99271 10.5121 3.57345 8.9043C4.1542 7.29651 5.18082 5.88737 6.53321 4.84175C7.88559 3.79614 9.50779 3.15731 11.21 3C10.2134 4.34827 9.73384 6.00945 9.85852 7.68141C9.98321 9.35338 10.7039 10.9251 11.8894 12.1106C13.0749 13.2961 14.6466 14.0168 16.3186 14.1415C17.9905 14.2662 19.6517 13.7866 21 12.79Z")
    } else {
        theme.classList.add("dark");
        image.setAttribute("d", "M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z")
    }
});