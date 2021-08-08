const scrolledToElement = document.querySelectorAll(".scrolled-to");

const inView = (element) => {
    const top = element.getBoundingClientRect().top;
    return (top <=
        (window.innerHeight || document.documentElement.clientHeight) / 1.5);
}

const addAnimation = (element) => {
    element.classList.add("animate");
}

const handleScrollAnimation = () => {
    scrolledToElement.forEach((element) => {
        if (inView(element)) {
            addAnimation(element);
        }
    });
}

window.addEventListener("scroll", () => {
    handleScrollAnimation();
});