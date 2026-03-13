function toggleMobileDropdown(t, e) {
    e && e.stopPropagation();
    const n = t.nextElementSibling;
    document.querySelectorAll(".mobile-dropdown-content").forEach(e => {
        e !== n && e.classList.remove("active")
    });
    document.querySelectorAll(".mobile-dropdown-trigger").forEach(e => {
        e !== t && e.classList.remove("active")
    });
    n.classList.toggle("active");
    t.classList.toggle("active");
}

const sidenav = document.getElementById("mySidenav");
sidenav && sidenav.addEventListener("click", function(e) {
    e.stopPropagation()
});

document.addEventListener("click", function(e) {
    e.target.closest(".mobile-dropdown") || (
        document.querySelectorAll(".mobile-dropdown-content").forEach(e => e.classList.remove("active")),
        document.querySelectorAll(".mobile-dropdown-trigger").forEach(e => e.classList.remove("active"))
    )
});

if (window.innerWidth > 991) {
    const e = document.querySelectorAll("[data-dropdown]"),
        t = document.querySelector(".sazs-header-wrapper");
    let n = null;
    
    e.forEach(e => {
        const o = e.closest(".sazs-menu-item"),
            s = e.getAttribute("data-dropdown"),
            c = document.getElementById(s);
        
        c && o && (
            o.addEventListener("mouseenter", () => {
                clearTimeout(n);
                document.querySelectorAll(".sazs-submenu").forEach(e => e.classList.remove("active"));
                document.querySelectorAll(".sazs-menu-item").forEach(e => e.classList.remove("active"));
                c.classList.add("active");
                o.classList.add("active");
            }),
            c.addEventListener("mouseenter", () => {
                clearTimeout(n)
            }),
            c.addEventListener("mouseleave", () => {
                n = setTimeout(() => {
                    c.classList.remove("active");
                    o.classList.remove("active");
                }, 200);
            })
        )
    });
    
    t && t.addEventListener("mouseleave", () => {
        n = setTimeout(() => {
            document.querySelectorAll(".sazs-submenu").forEach(e => e.classList.remove("active"));
            document.querySelectorAll(".sazs-menu-item").forEach(e => e.classList.remove("active"));
        }, 200);
    });
}

function openNav() {
    document.querySelectorAll(".mobile-dropdown-content").forEach(e => e.classList.remove("active"));
    document.querySelectorAll(".mobile-dropdown-trigger").forEach(e => e.classList.remove("active"));
    sidenav.style.width = "250px";
    document.addEventListener("click", closeNavOnClickOutside);
}

function closeNav() {
    sidenav.style.width = "0";
    document.removeEventListener("click", closeNavOnClickOutside);
}

function toggleNav() {
    "250px" === sidenav.style.width ? closeNav() : openNav();
}

function closeNavOnClickOutside(e) {
    sidenav.contains(e.target) || e.target.closest(".sazs-hamburger") || closeNav();
}

if (window.innerWidth > 991) {
    const e = document.querySelectorAll("[data-dropdown]");
    let t = null;
    
    e.forEach(e => {
        const n = e.closest(".sazs-menu-item"),
            o = e.getAttribute("data-dropdown"),
            s = document.getElementById(o);
        
        s && n && (
            n.addEventListener("mouseenter", () => {
                clearTimeout(t);
                document.querySelectorAll(".sazs-submenu").forEach(e => e.classList.remove("active"));
                document.querySelectorAll(".sazs-menu-item").forEach(e => e.classList.remove("active"));
                s.classList.add("active");
                n.classList.add("active");
            }),
            s.addEventListener("mouseleave", () => {
                t = setTimeout(() => {
                    s.classList.remove("active");
                    n.classList.remove("active");
                }, 200);
            })
        )
    });
}

const anprContent = document.getElementById("anpr-content"),
    einvoiceContent = document.getElementById("einvoice-content"),
    boomContent = document.getElementById("boom-content"),
    biometricStatus = document.getElementById("biometric-status"),
    statusIndicator = document.getElementById("status-indicator"),
    anprVariations = [
        { title: "Smart Tech", subtitle: "Auto Recognition" },
        { title: "Crushers", subtitle: "Vehicle Tracking" },
        { title: "Quarries", subtitle: "Entry Logging" }
    ],
    einvoiceVariations = [
        { title: "Compliance", subtitle: "GST Ready" },
        { title: "RMC", subtitle: "Billing System" },
        { title: "Brick & Paver", subtitle: "Invoice Ready" }
    ],
    boomVariations = [
        { top: "Security", topLabel: "Gate Control" },
        { top: "Automated", topLabel: "Access System" },
        { top: "Real-time", topLabel: "Monitoring" },
        { top: "Smart", topLabel: "Integration" },
        { top: "Advanced", topLabel: "Security" },
        { top: "Seamless", topLabel: "Operations" }
    ],
    biometricVariations = [
        { status: "Fingerprint Scanner" },
        { status: "Face Recognition" },
        { status: "RFID Access" }
    ];

let currentAnpr = 0,
    currentEinvoice = 0,
    currentBoom = 0,
    currentBiometric = 0;

function morphContent(e, t, n = !1) {
    e.style.transition = "opacity .4s ease, transform .4s ease";
    e.style.opacity = "0";
    e.style.transform = "scale(.95)";
    
    setTimeout(() => {
        n ? e.innerHTML = `<strong>${t.top}</strong><span>${t.topLabel}</span>` : e.innerHTML = `<strong>${t.title}</strong><span>${t.subtitle}</span>`;
        e.style.opacity = "1";
        e.style.transform = "scale(1)";
    }, 400);
}

setInterval(() => {
    currentAnpr = (currentAnpr + 1) % anprVariations.length;
    morphContent(anprContent, anprVariations[currentAnpr]);
}, 4e3);

setInterval(() => {
    currentEinvoice = (currentEinvoice + 1) % einvoiceVariations.length;
    morphContent(einvoiceContent, einvoiceVariations[currentEinvoice]);
}, 5e3);

setInterval(() => {
    currentBoom = (currentBoom + 1) % boomVariations.length;
    morphContent(boomContent, boomVariations[currentBoom], !0);
}, 6e3);

setInterval(() => {
    currentBiometric = (currentBiometric + 1) % biometricVariations.length;
    const e = biometricVariations[currentBiometric];
    biometricStatus.style.transition = "opacity .4s ease, transform .4s ease";
    statusIndicator.style.transition = "opacity .4s ease, transform .4s ease";
    biometricStatus.style.opacity = "0";
    statusIndicator.style.opacity = "0";
    
    setTimeout(() => {
        biometricStatus.textContent = e.status;
        statusIndicator.textContent = e.indicator;
        biometricStatus.style.opacity = "1";
        statusIndicator.style.opacity = "1";
    }, 400);
}, 7e3);