var typed = new Typed('.typing', {
    strings: ["","Web Developer", "Student", "Software Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})


const nav = document.querySelector('.nav'),
    navList = nav.querySelectorAll('li'),
    totalNavList = navList.length,
    allSection = document.querySelectorAll('.section'),
    totalSection = allSection.length;
for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector('a');
    a.addEventListener('click', function () {

        removeBackSection();
        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector('a').classList.contains("active")) {
                addBackSection(j);
                //allSection[j].classList.add('back-section');
            }
            navList[j].querySelector('a').classList.remove('active')
        }
        this.classList.add('active');
        showSection(this);
        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    })
}

function removeBackSection() {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove('back-section');
    }
}
function addBackSection(num) {
    allSection[num].classList.add('back-section');
}
function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove('active');
    }
    const target = element.getAttribute('href').split('#')[1];
    document.querySelector('#' + target).classList.add('active');

}

function updateNav(element) {
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector('a').classList.remove('active');
        const target = element.getAttribute('href').split('#')[1];
        if (target === navList[i].querySelector('a').getAttribute('href').split('#')[1]) {
            navList[i].querySelector('a').classList.add('active');
        }
    }
}

document.querySelector('.hire-me').addEventListener('click', function () {
    const sectionIdex = this.getAttribute('data-section-index');

    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIdex);
})

const navTogglerBtn = document.querySelector('.nav-toggler'),
    aside = document.querySelector('.aside');

if (navTogglerBtn && aside) {
    navTogglerBtn.addEventListener('click', () => {
        asideSectionTogglerBtn();
    });

    function asideSectionTogglerBtn() {
        aside.classList.toggle('open');
        navTogglerBtn.classList.toggle('open');
    }
}


document.addEventListener("mousemove", function(e) {
    const cursor = document.querySelector(".custom-cursor");
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
});




document.addEventListener("DOMContentLoaded", function () {
    const lazyElements = document.querySelectorAll(".lazy-load");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target); // Stop observeren na laden
                }
            });
        },
        { threshold: 0.1 } // Activeer als 10% van het element zichtbaar is
    );

    lazyElements.forEach((element) => {
        observer.observe(element);
    });
});
