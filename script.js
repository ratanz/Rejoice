const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

function cursorEffect() {
    var page1Content = document.querySelector(".page1-content")
    var cursor = document.querySelector(".cursor")

    page1Content.addEventListener("mousemove", function (dets) {
        gsap.to(".cursor", {
            x: dets.x,
            y: dets.y
        })
    })

    page1Content.addEventListener("mouseenter", function () {
        gsap.to(cursor, {
            scale: 1
        })
    })

    page1Content.addEventListener("mouseleave", function () {
        gsap.to(cursor, {
            scale: 0
        })
    })
}

function page2Animation() {
    gsap.from(".page2 .text2 span", {
        y: 10,
        stagger: 0.25,
        duration: 1,
        scrollTrigger: {
            trigger: ".page2",
            scroller: lenis.wrapper, // Use Lenis wrapper as scroller
            start: "top 47%",
            end: "top 37%",
            scrub: 2
        }
    });
}

function animatePage4SVG() {
    const page4 = document.querySelector('.page4');
    const circle = page4.querySelector('svg circle');

    gsap.set(circle, {
        strokeDasharray: 565.48, // 2 * PI * 90 (circle radius)
        strokeDashoffset: 565.48,
        rotation: -90,
        transformOrigin: "center"
    });

    const tl = gsap.timeline({
        repeat: -1,
        defaults: { duration: 5, ease: "linear" }
    });

    tl.to(circle, {
        strokeDashoffset: 0,
        rotation: 270, // Rotate 360 degrees from -90 to 270
        transformOrigin: "center"
    })

}

function swiperjs() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: true,
        }
    });
}

function loaderAnimation(){

    var tl = gsap.timeline()

    tl.from(".loader h3", {
        x: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1
    })
    
    tl.to(".loader h3", {
        opacity: 0,
        x: -10,
        stagger: 0.1,
        duration: 1
    })
    
    
    tl.to(".loader", {
        opacity: 0,
    
    })
    
    tl.from(".page1-content h1 span", {
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 0.7,
        delay: -0.5
    })
    
    tl.to(".loader", {
        display: "none"
    })
}

function menuAnimation() {
    const menuToggle = document.getElementById('menuToggle');
    const menuToggleClose = document.getElementById('menuToggleClose');
    const menu = document.querySelector('.menu');

    if (!menuToggle || !menu || !menuToggleClose) {
        console.error('Menu toggle or menu element not found.');
        return;
    }

    function toggleMenu() {
        menu.classList.toggle('active');
        console.log('Menu toggled. Current state:', menu.classList.contains('active') ? 'Open' : 'Closed');
        if (menu.classList.contains('active')) {
            menuToggleClose.textContent = 'Close';
        } else {
            menuToggleClose.textContent = 'Menu';
        }
    }

    menuToggle.addEventListener('click', toggleMenu);
    menuToggleClose.addEventListener('click', toggleMenu);

    document.querySelectorAll('.menu a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            toggleMenu();

            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                lenis.scrollTo(targetElement, {
                    offset: 0,
                    duration: 1.2,
                    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
                });
            }
        });
    });
}

function aboutAnimation(){
   
gsap.fromTo(".bottom-text h1::before",
    {
        x: "-100%" 
    },
    {
        x: "100%", 
        duration: 0.5, 
        ease: "power1.inOut",
        paused: true 
    }
);

// Event listeners for hover effect
document.querySelector('.bottom-text h1').addEventListener('mouseenter', () => {
    gsap.to(".bottom-text h1::before", { x: "0%", duration: 0.5, ease: "power1.inOut" });
});

document.querySelector('.bottom-text h1').addEventListener('mouseleave', () => {
    gsap.to(".bottom-text h1::before", { x: "100%", duration: 0.5, ease: "power1.inOut" });
});

}

function footerAnimation() {
    let tl = gsap.timeline({ paused: true });
    
    tl.from(".footer-content", {
        y: -90, 
        opacity: 0, 
        stagger: 0.7, 
        duration: 0.5,
    });

    
    tl.to(".bottom-part2 h1 span", {
        y: 80, 
        opacity: 1, 
        stagger: 0.2,  
        duration: 0.1, 
    });

    // Select the footer element
    const footerElement = document.querySelector('.footer');

    // Ensure the element exists
    if (footerElement) {
        // event listeners to play and reverse the animation on hover
        footerElement.addEventListener('mouseenter', () => {
            tl.restart(); // Restart the animation on mouse enter
        });

        footerElement.addEventListener('mouseleave', () => {
            tl.reverse(); // Reverse the animation on mouse leave
        });
    } 
}


loaderAnimation()
cursorEffect()
menuAnimation()
page2Animation()
aboutAnimation()
footerAnimation()
animatePage4SVG()
swiperjs()


