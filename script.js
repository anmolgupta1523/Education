// Smooth scroll for navigation
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        let target = this.getAttribute("href");
        document.querySelector(target).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Notification message on button click
document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", () => {
        alert("This course content will open soon!");
    });
});
