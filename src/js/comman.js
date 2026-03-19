document.addEventListener("DOMContentLoaded", function () {

    /* ===============================
       MOBILE DROPDOWN
    =============================== */
    function toggleMobileDropdown(trigger, event) {
        if (event) event.stopPropagation();
        const dropdown = trigger.nextElementSibling;
        document.querySelectorAll(".mobile-dropdown-content").forEach(el => {
            if (el !== dropdown) el.classList.remove("active");
        });
        document.querySelectorAll(".mobile-dropdown-trigger").forEach(el => {
            if (el !== trigger) el.classList.remove("active");
        });
        if (dropdown) dropdown.classList.toggle("active");
        trigger.classList.toggle("active");
    }
    window.toggleMobileDropdown = toggleMobileDropdown;

    const sidenav = document.getElementById("mySidenav");
    if (sidenav) {
        sidenav.addEventListener("click", function (e) { e.stopPropagation(); });
    }

    document.addEventListener("click", function (e) {
        if (!e.target.closest(".mobile-dropdown")) {
            document.querySelectorAll(".mobile-dropdown-content").forEach(el => el.classList.remove("active"));
            document.querySelectorAll(".mobile-dropdown-trigger").forEach(el => el.classList.remove("active"));
        }
    });

    /* ===============================
       DESKTOP DROPDOWN (ONLY ON >= 992px)
    =============================== */
    if (window.matchMedia("(min-width: 992px)").matches) {
        const dropdownTriggers = document.querySelectorAll("[data-dropdown]");
        const headerWrapper = document.querySelector(".sazs-header-wrapper");
        let timeout = null;

        dropdownTriggers.forEach(trigger => {
            const menuItem = trigger.closest(".sazs-menu-item");
            const dropdownId = trigger.getAttribute("data-dropdown");
            const submenu = document.getElementById(dropdownId);
            if (!submenu || !menuItem) return;

            menuItem.addEventListener("mouseenter", () => {
                clearTimeout(timeout);
                document.querySelectorAll(".sazs-submenu").forEach(el => el.classList.remove("active"));
                document.querySelectorAll(".sazs-menu-item").forEach(el => el.classList.remove("active"));
                submenu.classList.add("active");
                menuItem.classList.add("active");
            });

            submenu.addEventListener("mouseenter", () => { clearTimeout(timeout); });

            submenu.addEventListener("mouseleave", () => {
                timeout = setTimeout(() => {
                    submenu.classList.remove("active");
                    menuItem.classList.remove("active");
                }, 200);
            });
        });

        if (headerWrapper) {
            headerWrapper.addEventListener("mouseleave", () => {
                timeout = setTimeout(() => {
                    document.querySelectorAll(".sazs-submenu").forEach(el => el.classList.remove("active"));
                    document.querySelectorAll(".sazs-menu-item").forEach(el => el.classList.remove("active"));
                }, 200);
            });
        }
    }

    /* ===============================
       SIDENAV
    =============================== */
    function openNav() {
        document.querySelectorAll(".mobile-dropdown-content").forEach(el => el.classList.remove("active"));
        document.querySelectorAll(".mobile-dropdown-trigger").forEach(el => el.classList.remove("active"));
        if (sidenav) {
            sidenav.style.width = "250px";
            document.addEventListener("click", closeNavOnClickOutside);
        }
    }

    function closeNav() {
        if (sidenav) {
            sidenav.style.width = "0";
            document.removeEventListener("click", closeNavOnClickOutside);
        }
    }

    function toggleNav() {
        if (!sidenav) return;
        sidenav.style.width === "250px" ? closeNav() : openNav();
    }

    function closeNavOnClickOutside(e) {
        if (!sidenav.contains(e.target) && !e.target.closest(".sazs-hamburger")) { closeNav(); }
    }

    window.openNav  = openNav;
    window.closeNav = closeNav;
    window.toggleNav = toggleNav;

    /* ===============================
       ANIMATED CONTENT MORPHING
    =============================== */
    const anprContent      = document.getElementById("anpr-content");
    const einvoiceContent  = document.getElementById("einvoice-content");
    const boomContent      = document.getElementById("boom-content");
    const biometricStatus  = document.getElementById("biometric-status");
    const statusIndicator  = document.getElementById("status-indicator");

    const anprVariations = [
        { title: "Smart Tech",  subtitle: "Auto Recognition" },
        { title: "Crushers",    subtitle: "Vehicle Tracking" },
        { title: "Quarries",    subtitle: "Entry Logging" }
    ];

    const einvoiceVariations = [
        { title: "Compliance",    subtitle: "GST Ready" },
        { title: "RMC",           subtitle: "Billing System" },
        { title: "Brick & Paver", subtitle: "Invoice Ready" }
    ];

    const boomVariations = [
        { top: "Security",   topLabel: "Gate Control" },
        { top: "Automated",  topLabel: "Access System" },
        { top: "Real-time",  topLabel: "Monitoring" },
        { top: "Smart",      topLabel: "Integration" },
        { top: "Advanced",   topLabel: "Security" },
        { top: "Seamless",   topLabel: "Operations" }
    ];

    const biometricVariations = [
        { status: "Fingerprint Scanner" },
        { status: "Face Recognition" },
        { status: "RFID Access" }
    ];

    let currentAnpr = 0, currentEinvoice = 0, currentBoom = 0, currentBiometric = 0;

    function morphContent(element, data, isBoom = false) {
        if (!element) return;
        element.style.transition = "opacity .4s ease, transform .4s ease";
        element.style.opacity = "0";
        element.style.transform = "scale(.95)";
        setTimeout(() => {
            if (isBoom) {
                element.innerHTML = `<strong>${data.top}</strong><span>${data.topLabel}</span>`;
            } else {
                element.innerHTML = `<strong>${data.title}</strong><span>${data.subtitle}</span>`;
            }
            element.style.opacity = "1";
            element.style.transform = "scale(1)";
        }, 400);
    }

    if (anprContent) {
        setInterval(() => {
            currentAnpr = (currentAnpr + 1) % anprVariations.length;
            morphContent(anprContent, anprVariations[currentAnpr]);
        }, 4000);
    }

    if (einvoiceContent) {
        setInterval(() => {
            currentEinvoice = (currentEinvoice + 1) % einvoiceVariations.length;
            morphContent(einvoiceContent, einvoiceVariations[currentEinvoice]);
        }, 5000);
    }

    if (boomContent) {
        setInterval(() => {
            currentBoom = (currentBoom + 1) % boomVariations.length;
            morphContent(boomContent, boomVariations[currentBoom], true);
        }, 6000);
    }

    if (biometricStatus && statusIndicator) {
        setInterval(() => {
            currentBiometric = (currentBiometric + 1) % biometricVariations.length;
            const data = biometricVariations[currentBiometric];
            biometricStatus.style.opacity = "0";
            statusIndicator.style.opacity = "0";
            setTimeout(() => {
                biometricStatus.textContent = data.status;
                statusIndicator.textContent = "";
                biometricStatus.style.opacity = "1";
                statusIndicator.style.opacity = "1";
            }, 400);
        }, 7000);
    }

});

window.addEventListener('pagehide', () => {
    if (window.mySocket) { window.mySocket.close(); }
});


