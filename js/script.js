// ======================================
// Wait until page loads
// ======================================

document.addEventListener("DOMContentLoaded", () => {


// ======================================
// Typing Animation
// ======================================

const article = document.getElementById("article");
const typing = document.getElementById("typing");

const roles = [
    "Software Engineer",
    "AI Developer",
    "Full Stack Developer",
    "Machine Learning Enthusiast",
    "Problem Solver"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

    if(!article || !typing) return;

    const current = roles[roleIndex];

    article.textContent =
    /^[AEIOU]/i.test(current) ? "an" : "a";

    if(!deleting){

        typing.textContent =
        current.substring(0,charIndex);

        charIndex++;

        if(charIndex > current.length){

            deleting = true;

            setTimeout(typeEffect,1500);

            return;

        }

    }

    else{

        typing.textContent =
        current.substring(0,charIndex);

        charIndex--;

        if(charIndex < 0){

            deleting = false;

            roleIndex++;

            if(roleIndex >= roles.length)
                roleIndex = 0;

        }

    }

    setTimeout(typeEffect,deleting ? 50 : 100);

}

typeEffect();


// ======================================
// Theme Toggle
// ======================================

// const themeToggle = document.getElementById("theme-toggle");
// const body = document.body;
// const icon = themeToggle.querySelector("i");

// // Load saved theme
// const savedTheme = localStorage.getItem("theme");

// if (savedTheme === "light") {
//     body.classList.add("light-theme");
//     icon.classList.replace("fa-moon", "fa-sun");
// }

// Toggle theme
// themeToggle.addEventListener("click", () => {
//     body.classList.toggle("light-theme");

//     if (body.classList.contains("light-theme")) {
//         icon.classList.replace("fa-moon", "fa-sun");
//         localStorage.setItem("theme", "light");
//     } else {
//         icon.classList.replace("fa-sun", "fa-moon");
//         localStorage.setItem("theme", "dark");
//     }
// });


// ======================================
// Smooth Scroll
// ======================================

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{

anchor.addEventListener("click",e=>{

e.preventDefault();

const target =
document.querySelector(
anchor.getAttribute("href")
);

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});


// ======================================
// Navbar
// ======================================

const navbar =
document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY > 80){

navbar.classList.add("sticky");

}

else{

navbar.classList.remove("sticky");

}

});
// ======================================
// Reveal Animations
// ======================================

const revealElements = document.querySelectorAll(
`
section,
.about-card,
.info-card,
.stat-box,
.education-card,
.skill-category,
.service-card,
.project-item,
.certificate-card,
.contact-box,
.contact-form,
.footer
`
);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");
            entry.target.classList.remove("hidden");

        }

    });

},{
    threshold:0.15
});

revealElements.forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});


// ======================================
// Active Navigation
// ======================================

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav-links a");

function updateActiveNav(){

    let current = "";

    sections.forEach(section=>{

        const sectionTop =
        section.offsetTop - 180;

        if(window.scrollY >= sectionTop){

            current = section.id;

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){

            link.classList.add("active");

        }

    });

}


// ======================================
// Scroll Progress Bar
// ======================================

const progressBar =
document.getElementById("progress-bar");

function updateProgressBar(){

    if(!progressBar) return;

    const totalHeight =
    document.documentElement.scrollHeight -
    window.innerHeight;

    const progress =
    (window.scrollY / totalHeight) * 100;

    progressBar.style.width =
    progress + "%";

}


// ======================================
// Cursor Glow
// ======================================

const glow =
document.createElement("div");

glow.className = "cursor-glow";

document.body.appendChild(glow);

document.addEventListener("mousemove",e=>{

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});


// ======================================
// Counter Animation
// ======================================

const counters =
document.querySelectorAll(".stat-box h2");

let counterStarted = false;

function startCounters(){

    if(counterStarted) return;

    counterStarted = true;

    counters.forEach(counter=>{

        const target =
        parseInt(counter.textContent);

        if(isNaN(target)) return;

        let count = 0;

        const speed =
        Math.max(20,Math.floor(1200/target));

        const timer = setInterval(()=>{

            count++;

            counter.textContent =
            count + "+";

            if(count>=target){

                clearInterval(timer);

                counter.textContent =
                target + "+";

            }

        },speed);

    });

}


// ======================================
// Main Scroll Event
// ======================================

window.addEventListener("scroll",()=>{

    updateProgressBar();

    updateActiveNav();

    if(window.scrollY >
       document.querySelector("#about").offsetTop - 300){

        startCounters();

    }

});

updateProgressBar();

updateActiveNav();
// ======================================
// Toast Function
// ======================================

function showToast(title, message, success = true){

    const toast = document.getElementById("toast");

    if(!toast) return;

    const icon = toast.querySelector("i");
    const heading = toast.querySelector("h4");
    const text = toast.querySelector("p");

    heading.textContent = title;
    text.textContent = message;

    if(success){

        icon.className = "fas fa-circle-check";
        icon.style.color = "#22c55e";

    }else{

        icon.className = "fas fa-circle-xmark";
        icon.style.color = "#ef4444";

    }

    toast.classList.add("show");

    setTimeout(()=>{

        toast.classList.remove("show");

    },4000);

}


// ======================================
// EmailJS
// ======================================

if(typeof emailjs !== "undefined"){

    emailjs.init("tStG8weppitxiYqtn");

    const contactForm =
    document.getElementById("contact-form");

    if(contactForm){

        contactForm.addEventListener("submit",function(e){

            e.preventDefault();

            const button =
            contactForm.querySelector("button");

            button.disabled = true;
            button.innerHTML = "Sending...";

            emailjs.sendForm(

                "service_8jxla2o",
                "template_w5blqk2",
                this

            )

            .then(()=>{

                contactForm.reset();

                button.disabled = false;
                button.innerHTML = "Send Message";

                showToast(

                    "Message Sent!",

                    "Thank you for reaching out."

                );

            })

            .catch(()=>{

                button.disabled = false;
                button.innerHTML = "Send Message";

                showToast(

                    "Oops!",

                    "Something went wrong.",

                    false

                );

            });

        });

    }

}


// ======================================
// Initial Load
// ======================================

window.dispatchEvent(new Event("scroll"));


// ======================================
// Close DOMContentLoaded
// ======================================

});