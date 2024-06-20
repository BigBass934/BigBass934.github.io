const sectionsList = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlight);

function navHighlight() {
    let scrollY = window.scrollY;

    sectionsList.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = (current.getBoundingClientRect().top + window.scrollY) - 150;
        sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".bottom-bar a[href*=" + sectionId + "]").classList.add("active");
        } else {
            document.querySelector(".bottom-bar a[href*=" + sectionId + "]").classList.add("active");
        }
    })
}