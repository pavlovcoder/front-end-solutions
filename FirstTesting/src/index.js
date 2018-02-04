document.getElementsByClassName("animBtn")[0].addEventListener("click", function() {
    animationCloseBtn(this);
});

function animationCloseBtn(x) {
    x.classList.toggle("change");
}