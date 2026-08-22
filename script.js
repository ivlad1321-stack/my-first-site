ocument.addEventListener("DOMContentLoaded", function () {

    // Кнопка "Узнать больше" на главной
    const button = document.querySelector("#moreButton");
    const info = document.querySelector("#info");

    if (button && info) {
        button.addEventListener("click", function () {
            info.style.display = "block";
        });
    }

    // Форма контактов
    const form = document.querySelector("#contactForm");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            alert("Спасибо! Сообщение отправлено.");

            form.reset();
        });
    }

});
function showService(id) {
    const info = document.getElementById(id);

    if (info.style.display === "block") {
        info.style.display = "none";
    } else {
        info.style.display = "block";
    }
}