gsap.registerPlugin(ScrollTrigger, SplitText);

window.addEventListener('DOMContentLoaded', () => {
    const splitTextInstances = [];
    let heroAllChars = []; // To store all characters from .hero h1

    const heroH1Element = document.querySelector(".hero h1");

    if (heroH1Element) {
        // --- REVISED SPLITTING ORDER ---

        // 1. Split the main H1 content first.
        //    This will wrap non-gradient text in <span class="char">.
        //    Crucially, it will IGNORE the content inside any child .gradient-text elements.
        const h1OuterSplit = new SplitText(heroH1Element, {
            type: "chars",
            charsClass: "char", // Characters here get only 'char'
            reduce: true,
            ignore: ".gradient-text" // Prevent this split from touching .gradient-text content
        });
        splitTextInstances.push(h1OuterSplit);

        // 2. Now, find all .gradient-text elements within H1.
        //    Their internal text is still original because they were ignored by the split above.
        //    Split their content now. Characters here get 'char gradient-char'.
        const gradientTextsInHero = heroH1Element.querySelectorAll('.gradient-text');
        gradientTextsInHero.forEach(gtElement => {
            if (gtElement.textContent.trim() !== '') {
                const gradientChildSplit = new SplitText(gtElement, {
                    type: "chars",
                    charsClass: "char gradient-char", // Add both 'char' and 'gradient-char'
                    reduce: true
                });
                splitTextInstances.push(gradientChildSplit);
            }
        });

        // 3. Collect ALL characters. querySelectorAll will get them in DOM order.
        //    Each original character should now correspond to a single <span>.
        heroAllChars = Array.from(heroH1Element.querySelectorAll('.char'));

        // --- Debugging Output ---
        // console.log(`Found ${heroAllChars.length} characters in .hero h1 to animate.`);
        // heroAllChars.forEach((char, index) => {
        //     console.log(`HeroChar ${index}: '${char.textContent}' Classes: '${char.className}'`);
        // });
        // --- End Debugging ---

        if (heroAllChars.length > 0) {
            gsap.from(heroAllChars, {
                opacity: 0,
                y: 50,
                rotateX: -90,
                stagger: 0.02,
                duration: 1.5,
                ease: "back.out(1.7)",
                onComplete: () => {
                    splitTextInstances.forEach(stInstance => {
                        if (stInstance && typeof stInstance.revert === 'function') {
                            stInstance.revert();
                        }
                    });
                    // console.log("SplitText instances for hero reverted.");
                }
            });
        } else {
            console.warn("No characters found in .hero h1 to animate after splitting.");
        }

    } else {
        console.warn(".hero h1 element not found.");
    }

    // --- THE REST OF YOUR GSAP ANIMATIONS AND LOGIC ---
    let heroAnimationDuration = 0;
    if (heroAllChars.length > 0) {
        heroAnimationDuration = 1.5 + (heroAllChars.length * 0.02); // duration + total stagger time
    } else {
        heroAnimationDuration = 1.5; // Fallback if no chars, though unlikely with h1 text
    }


    gsap.from('.hero p', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: heroAnimationDuration * 0.3 // Adjust delay based on character animation
    });

    gsap.from('.hero .button', {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: heroAnimationDuration * 0.6 // Adjust delay based on character animation
    });


    // ... (Keep the rest of your well-tested JavaScript from the previous full code)
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPath = window.location.search;

    navLinks.forEach(link => link.classList.remove('active'));

    if (!currentPath || currentPath === '?a=home') {
        const homeLink = document.querySelector('.nav-link[href="?a=home"]');
        if (homeLink) homeLink.classList.add('active');
    } else {
        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentPath) {
                link.classList.add('active');
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    const bentoCards = gsap.utils.toArray('.bento-card');
    bentoCards.forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top bottom-=100",
                toggleActions: "play none none none"
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            delay: i * 0.15
        });
    });

    gsap.from('.about-us h2', {
        scrollTrigger: {
            trigger: '.about-us',
            start: "top bottom-=50",
            toggleActions: "play none none none"
        },
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    });

    gsap.from('.about-us > .container > .row:first-child p', {
        scrollTrigger: {
            trigger: '.about-us',
            start: "top bottom-=50",
            toggleActions: "play none none none"
        },
        y: 20,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power2.out"
    });

    const statsTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.statistics',
            start: "top bottom-=100",
            toggleActions: "play none none none"
        }
    });

    statsTimeline.from('.stats-icon', {
        scale: 0,
        opacity: 0,
        rotation: -180,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)"
    });

    const statsNumbers = document.querySelectorAll('.statistics .gradient-text');
    statsNumbers.forEach(numberElement => {
        let endValue = parseInt(numberElement.textContent.replace(/[^0-9]/g, ''), 10) || 0;
        gsap.fromTo(numberElement, {
            textContent: 0,
        }, {
            textContent: endValue,
            duration: 2,
            ease: "power1.inOut",
            snap: {
                textContent: 1
            },
            scrollTrigger: {
                trigger: numberElement,
                start: "top bottom-=50",
                toggleActions: "play none none none"
            }
        });
    });

    gsap.from('.statistics p', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.statistics',
            start: "top bottom-=100",
            toggleActions: "play none none none"
        }
    });

    const transactionsTriggerOriginal = '.transacrions';
    const transactionsTriggerCorrected = '.transactions';
    let transactionsTrigger = transactionsTriggerCorrected;
    if (document.querySelector(transactionsTriggerOriginal)) {
        transactionsTrigger = transactionsTriggerOriginal;
    } else if (!document.querySelector(transactionsTriggerCorrected)) {
        transactionsTrigger = null;
    }


    if (transactionsTrigger && document.querySelector(transactionsTrigger)) {
        const transactionsTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: transactionsTrigger,
                start: "top bottom-=100",
                toggleActions: "play none none none",
            }
        });

        transactionsTimeline.from(`${transactionsTrigger} .card-header`, {
            y: -30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out"
        });

        gsap.from(`${transactionsTrigger} .item`, {
            y: 30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: transactionsTrigger,
                start: "top bottom-=100",
                toggleActions: "play none none none",
            }
        });

        gsap.from(`${transactionsTrigger} .currency img`, {
            scale: 0,
            rotation: 45,
            opacity: 0,
            duration: 0.5,
            stagger: 0.05,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: transactionsTrigger,
                start: "top bottom-=100",
                toggleActions: "play none none none",
            }
        });
    }


    // --- REFERRAL SECTION (MATCHING TIMING) ---
    const referralTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.referrals',
            start: "top bottom-=100",
            toggleActions: "play none none none"
        }
    });

    referralTimeline
        .from('.referrals h2', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        })
        .from('.referrals .lead', {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        }, "-=0.5");

    gsap.from('.referral-card', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
            trigger: '.referrals',
            start: "top bottom-=100",
            toggleActions: "play none none none"
        }
    });

    document.querySelectorAll('.referral-card .percentage').forEach(el => {
        const originalText = el.textContent;
        const endVal = parseInt(originalText.replace(/[^0-9]/g, ''), 10) || 0;
        gsap.fromTo(el, {
            textContent: 0
        }, {
            textContent: endVal,
            duration: 2,
            ease: "power1.inOut",
            snap: {
                textContent: 1
            },
            onUpdate: function() {
                const currentNum = Math.round(parseFloat(this.targets()[0].textContent));
                if (originalText.includes('%')) {
                    this.targets()[0].textContent = currentNum + '%';
                } else {
                    this.targets()[0].textContent = currentNum;
                }
            },
            onComplete: function() {
                this.targets()[0].textContent = originalText;
            },
            scrollTrigger: {
                trigger: el.closest('.referral-card') || '.referrals',
                start: "top bottom-=100",
                toggleActions: "play none none none"
            }
        });
    });


    // --- CTA SECTION (MATCHING TIMING) ---
    gsap.from('.cta-section .bento-card', {
        scrollTrigger: {
            trigger: '.cta-section',
            start: "top bottom-=100",
            toggleActions: "play none none none"
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15
    });

    gsap.from('.cta-section .cta-buttons .button', {
        scrollTrigger: {
            trigger: '.cta-section',
            start: "top bottom-=100",
            toggleActions: "play none none none"
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        delay: 0.2
    });

    gsap.from('.footer .footer-logo', {
        scrollTrigger: {
            trigger: '.footer',
            start: "top bottom-=50",
            toggleActions: "play none none none"
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
    });

    gsap.from('.footer h5', {
        scrollTrigger: {
            trigger: '.footer',
            start: "top bottom-=50",
            toggleActions: "play none none none"
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out"
    });

    gsap.from('.footer .footer-links li', {
        scrollTrigger: {
            trigger: '.footer',
            start: "top bottom-=50",
            toggleActions: "play none none none"
        },
        x: -20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: "power2.out"
    });

    gsap.utils.toArray('.approach-item').forEach((item, i) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: "top bottom-=100",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 40,
            duration: 0.6,
            delay: i * 0.1
        });
    });

    gsap.utils.toArray('.roadmap-item').forEach((item, i) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: "top bottom-=100",
                toggleActions: "play none none none",
            },
            opacity: 0,
            x: -50,
            duration: 0.7,
            delay: i * 0.2
        });
    });
}); // End of DOMContentLoaded