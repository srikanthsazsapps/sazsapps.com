        function animateCountUp(element, target) {
            let start = 0;
            let duration = 2000; // Animation duration in milliseconds
            let step = Math.ceil(target / (duration / 16)); // Approximate steps per frame

            function updateNumber() {
                start += step;
                if (start >= target) {
                    element.textContent = target + "+"; // Ensure final value is correct
                } else {
                    element.textContent = start;
                    requestAnimationFrame(updateNumber);
                }
            }

            updateNumber();
        }

        function startCounterOnView(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    let card = entry.target;
                    card.classList.add("visible"); // Fade-in effect

                    card.querySelectorAll(".succeed-text").forEach(el => {
                        let target = parseInt(el.textContent.replace("+", "").trim(), 10);
                        if (!el.dataset.animated) { // Prevent multiple triggers
                            el.textContent = "0"; // Start from 0
                            animateCountUp(el, target);
                            el.dataset.animated = "true"; // Mark as animated
                        }
                    });

                    observer.unobserve(card); // Stop observing after animation starts
                }
            });
        }

// ADD:
document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver(startCounterOnView, { 
        threshold: 0.5,
        rootMargin: '0px'
    });
    document.querySelectorAll(".feature-card").forEach(card => {
        observer.observe(card);
    });
});        document.addEventListener("DOMContentLoaded", () => {
            const buttons = document.querySelectorAll('.accordion-button');

            buttons.forEach(button => {
                button.addEventListener('click', () => {
                    const content = button.nextElementSibling;
                    const arrow = button.querySelector('.arrow');

                    // Toggle content visibility
                    if (content.style.maxHeight) {
                        content.style.maxHeight = null;
                        arrow.innerHTML = "&#9660;"; // Down Arrow
                    } else {
                        content.style.maxHeight = content.scrollHeight + "px";
                        arrow.innerHTML = "&#9650;"; // Up Arrow
                    }
                });
            });
        });




// ADD THIS at top of file:
const header = document.querySelector('.sazs-header');
let lastScrollTop = 0;
let ticking = false;

function handleScroll() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
        header.classList.add("hide");
    } else {
        header.classList.remove("hide");
    }
    if (currentScroll <= 0) {
        header.classList.remove("fixed");
    } else if (currentScroll > 100) {
        header.classList.add("fixed");
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(handleScroll);
        ticking = true;
    }
}, { passive: true });


        function toggleDropdown() {
            const dropdown = document.getElementById("aboutDropdown");
            dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
        }
        // Function to highlight the current page in the navbar
        function highlightActivePage() {
            const currentPath = window.location.pathname;
            const links = document.querySelectorAll(".nav-link");

            links.forEach(link => {
                // Get the page identifier from the data attribute
                const page = link.getAttribute("data-page");

                // Check if the current URL includes the page identifier
                if (currentPath.includes(page)) {
                    link.classList.add("active");
                } else {
                    link.classList.remove("active");
                }
            });
        }

        // Run function on page load
        document.addEventListener("DOMContentLoaded", highlightActivePage);
        function toggleNav() {
            const sidenav = document.getElementById("mySidenav");
            const isOpen = sidenav.style.width === "250px";

            if (isOpen) {
                sidenav.style.width = "0";
                document.removeEventListener("click", closeNavOnClickOutside);
            } else {
                sidenav.style.width = "250px";
                setTimeout(() => document.addEventListener("click", closeNavOnClickOutside), 100);
            }
        }

        function closeNavOnClickOutside(event) {
            const sidenav = document.getElementById("mySidenav");
            if (!sidenav.contains(event.target) && !event.target.closest(".icon")) {
                sidenav.style.width = "0";
                document.removeEventListener("click", closeNavOnClickOutside);
            }
        }
        // Scroll to top functionality
        // document.querySelector('.scroll-top').addEventListener('click', () => {
        //     window.scrollTo({
        //         top: 0,
        //         behavior: 'smooth'
        //     });
        // });

        // Show/hide scroll button based on scroll position
        window.addEventListener('scroll', () => {
            const scrollButton = document.querySelector('.scroll-top');
            if (window.scrollY > 200) {
                scrollButton.style.display = 'flex';
            } else {
                scrollButton.style.display = 'none';
            }
        });
// ADD — lazy init observer only when needed:
document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // stop watching after animate
            }
        });
    }, { threshold: 0.2, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll(".fade-in, .slide-in, .zoom-in")
        .forEach((el) => observer.observe(el));
});



// ADD THIS at the very end:
window.addEventListener('pagehide', () => {
    if (window.mySocket) {
        window.mySocket.close();
    }
});

// REMOVE the visibilitychange listener and replace with pagehide:
// DELETE THIS:
// document.addEventListener('visibilitychange', () => {
//     if (document.visibilityState === 'hidden') {
//         if (window.mySocket) { window.mySocket.close(); }
//     }
// });