/* ============================================================
   Nandani Kumari — Portfolio
   script.js — Mobile navigation toggle
   ------------------------------------------------------------
   Used only for the accessible collapsible mobile navigation.
   The menu can be opened/closed with keyboard, updates
   aria-expanded, and closes after a navigation link is selected.
   ============================================================ */

(function () {
    'use strict';

    var currentYear = document.getElementById('currentYear');
    if (currentYear) {
        currentYear.textContent = String(new Date().getFullYear());
    }

    var navToggle = document.getElementById('navToggle');
    var navMenu = document.getElementById('navMenu');

    if (navToggle && navMenu) {
        /* Toggle the mobile menu open / closed */
        function toggleMenu() {
            var isOpen = navToggle.getAttribute('aria-expanded') === 'true';
            var nextState = String(!isOpen);
            navToggle.setAttribute('aria-expanded', nextState);
            navMenu.classList.toggle('open', nextState === 'true');
        }

        /* Close the mobile menu */
        function closeMenu() {
            navToggle.setAttribute('aria-expanded', 'false');
            navMenu.classList.remove('open');
        }

        navToggle.addEventListener('click', function (e) {
            e.stopPropagation();
            toggleMenu();
        });

        /* Close menu when a nav link is clicked */
        var navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                closeMenu();
            });
        });

        /* Close menu when clicking outside */
        document.addEventListener('click', function (e) {
            if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
                closeMenu();
            }
        });

        /* Close menu on Escape key */
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
                var wasOpen = navToggle.getAttribute('aria-expanded') === 'true';
                closeMenu();
                if (wasOpen) navToggle.focus();
            }
        });

        /* Close menu when resizing to desktop */
        window.addEventListener('resize', function () {
            if (window.innerWidth > 1300) {
                closeMenu();
            }
        });
    }

    var pageSections = Array.prototype.slice.call(document.querySelectorAll('main section[id]'));
    var sectionLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

    function setActiveSection(sectionId) {
        sectionLinks.forEach(function (link) {
            var isActive = link.getAttribute('href') === '#' + sectionId;
            link.classList.toggle('is-active', isActive);
            if (isActive) {
                link.setAttribute('aria-current', 'page');
            } else {
                link.removeAttribute('aria-current');
            }
        });
    }

    function updateActiveSection() {
        var siteHeader = document.querySelector('.site-header');
        if (!siteHeader) return;
        siteHeader.classList.toggle('is-scrolled', window.scrollY > 8);
        var activationLine = siteHeader.getBoundingClientRect().bottom + 40;
        var activeSection = pageSections[0];

        pageSections.forEach(function (section) {
            if (section.getBoundingClientRect().top <= activationLine) {
                activeSection = section;
            }
        });

        if (activeSection) {
            setActiveSection(activeSection.id);
        }
    }

    if (pageSections.length && sectionLinks.length) {
        var activeSectionFrame = 0;
        window.addEventListener('scroll', function () {
            if (activeSectionFrame) return;
            activeSectionFrame = window.requestAnimationFrame(function () {
                updateActiveSection();
                activeSectionFrame = 0;
            });
        }, { passive: true });

        window.addEventListener('resize', updateActiveSection);
        updateActiveSection();
    }

    var typingText = document.getElementById('typingText');
    var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (typingText && !reducedMotion.matches) {
        var phrases = [
            "Hi, I'm Nandani Kumari",
            "I'm an Aspiring Software Developer",
            "I Build Web Applications"
        ];
        var phraseIndex = 0;
        var characterIndex = phrases[0].length;
        var deleting = true;
        var typingTimer;

        function typeNextCharacter() {
            var phrase = phrases[phraseIndex];

            if (deleting) {
                characterIndex -= 1;
                typingText.textContent = phrase.slice(0, characterIndex);
                if (characterIndex === 0) {
                    deleting = false;
                    phraseIndex = (phraseIndex + 1) % phrases.length;
                    typingTimer = window.setTimeout(typeNextCharacter, 320);
                    return;
                }
                typingTimer = window.setTimeout(typeNextCharacter, 72);
                return;
            }

            characterIndex += 1;
            typingText.textContent = phrase.slice(0, characterIndex);
            if (characterIndex === phrase.length) {
                deleting = true;
                typingTimer = window.setTimeout(typeNextCharacter, 2100);
                return;
            }
            typingTimer = window.setTimeout(typeNextCharacter, 120);
        }

        typingTimer = window.setTimeout(typeNextCharacter, 2100);

        reducedMotion.addEventListener('change', function (event) {
            if (event.matches) {
                window.clearTimeout(typingTimer);
                typingText.textContent = phrases[0];
            }
        });
    }

    var revealTargets = document.querySelectorAll(
        '.section-header, .about-card, .skill-group, .project-card, .timeline, .timeline-item, .cert-card, .activity-card, .contact-panel'
    );

    if (!reducedMotion.matches && 'IntersectionObserver' in window && revealTargets.length) {
        var revealObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.12,
            rootMargin: '0px 0px -36px 0px'
        });

        document.documentElement.classList.add('reveal-enabled');
        revealTargets.forEach(function (target) {
            target.classList.add('reveal-item');
            revealObserver.observe(target);
        });
    }

    var contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            var fields = contactForm.querySelectorAll('input, textarea');
            fields.forEach(function (field) {
                field.setCustomValidity(field.value.trim() ? '' : 'Please fill out this field.');
            });

            if (!contactForm.reportValidity()) return;

            var name = contactForm.querySelector('[name="name"]').value.trim();
            var email = contactForm.querySelector('[name="email"]').value.trim();
            var subject = contactForm.querySelector('[name="subject"]').value.trim();
            var message = contactForm.querySelector('[name="message"]').value.trim();
            var body = 'Name: ' + name + '\nEmail: ' + email + '\n\n' + message;
            var mailto = 'mailto:nandanikumari0414@gmail.com?subject='
                + encodeURIComponent(subject)
                + '&body=' + encodeURIComponent(body);

            window.location.href = mailto;
        });

        contactForm.querySelectorAll('input, textarea').forEach(function (field) {
            field.addEventListener('input', function () {
                field.setCustomValidity('');
            });
        });
    }
})();
