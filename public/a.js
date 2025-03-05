document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: "smooth"
                });
            }
        });
    });

    // FAQ Toggle Effect
    document.querySelectorAll(".faq-item h3").forEach(question => {
        question.addEventListener("click", function () {
            const answer = this.nextElementSibling;
            answer.style.display = answer.style.display === "block" ? "none" : "block";
        });
    });

    // Contact Form Validation & Submission
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission
        
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();
        let formMessage = document.getElementById("formMessage");

        if (name === "" || email === "" || message === "") {
            alert("Please fill out all fields.");
            return;
        }

        // Simulating successful form submission
        formMessage.classList.remove("hidden");
        formMessage.style.color = "green";

        setTimeout(() => {
            formMessage.classList.add("hidden");
            document.getElementById("contactForm").reset();
        }, 3000);
    });

    // Optional: Auto-Slider for Testimonials
    let testimonialIndex = 0;
    const testimonials = document.querySelectorAll(".testimonial-card");

    function showTestimonial() {
        testimonials.forEach((testimonial, index) => {
            testimonial.style.display = index === testimonialIndex ? "block" : "none";
        });

        testimonialIndex = (testimonialIndex + 1) % testimonials.length;
        setTimeout(showTestimonial, 5000); // Change every 5 seconds
    }

    if (testimonials.length > 1) {
        showTestimonial();
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        item.addEventListener("click", function () {
            this.classList.toggle("active");
        });
    });
});