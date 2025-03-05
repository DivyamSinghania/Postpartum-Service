document.addEventListener("DOMContentLoaded", function () {
    const accordions = document.querySelectorAll(".accordion");

    accordions.forEach(acc => {
        acc.addEventListener("click", function () {
            this.classList.toggle("active");
            let panel = this.nextElementSibling;

            if (panel.classList.contains("active")) {
                panel.classList.remove("active");
            } else {
                document.querySelectorAll(".panel").forEach(p => p.classList.remove("active"));
                panel.classList.add("active");
            }
        });
    });
});
