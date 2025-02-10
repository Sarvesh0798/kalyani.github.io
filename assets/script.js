document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link"); // Sidebar links
    const sidebar = document.querySelector(".offcanvas"); // Sidebar menu

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent instant jump
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            // Smooth scroll to section
            window.scrollTo({
                top: targetSection.offsetTop - 50, // Adjust for fixed navbar
                behavior: "smooth"
            });

            // Close sidebar if it's open
            if (sidebar.classList.contains("show")) {
                const closeButton = document.querySelector("[data-bs-dismiss='offcanvas']");
                closeButton.click(); // Simulate close button click
            }
        });
    });
});



document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        const profileSection = document.querySelector(".mobile-profile");
     
        const navbar = document.querySelector(".navbar"); // Ensure navbar gets updated


        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");  // Ensure navbar gets scrolled class
            profileSection.classList.add("scrolled");
       
        } else {
            navbar.classList.remove("scrolled");
            profileSection.classList.remove("scrolled");
    
        }
    });
});
