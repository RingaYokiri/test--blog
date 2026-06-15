/* *.☆.* 月の導きメニュー(右上メニュー開閉) *.☆.* */
const button = document.getElementById("menuButton");
const menu = document.getElementById("menu");

button.addEventListener("click", () => {

    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }

});
