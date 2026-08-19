(() => {
    const carousel = document.querySelector('.showcase-container');

    if (!carousel) {
        return;
    }

    const slides = Array.from(carousel.querySelectorAll('.showcase-slide'));
    const previousButton = carousel.querySelector('.showcase-prev');
    const nextButton = carousel.querySelector('.showcase-next');
    const toggleButton = carousel.querySelector('.showcase-toggle');
    const status = carousel.querySelector('.showcase-status');
    const slideInterval = 6000;

    if (slides.length < 2 || !previousButton || !nextButton || !toggleButton) {
        return;
    }

    let currentSlide = 0;
    let timerId;
    let isPaused = false;

    const showSlide = (newIndex, announce = true) => {
        currentSlide = (newIndex + slides.length) % slides.length;

        slides.forEach((slide, index) => {
            const isActive = index === currentSlide;
            slide.classList.toggle('is-active', isActive);
            slide.setAttribute('aria-hidden', String(!isActive));
        });

        if (announce && status) {
            status.textContent = `Showing image ${currentSlide + 1} of ${slides.length}`;
        }
    };

    const stopTimer = () => {
        window.clearInterval(timerId);
        timerId = undefined;
    };

    const startTimer = () => {
        stopTimer();

        if (!isPaused && !document.hidden) {
            timerId = window.setInterval(() => {
                showSlide(currentSlide + 1, false);
            }, slideInterval);
        }
    };

    const updateToggleButton = () => {
        toggleButton.setAttribute('aria-pressed', String(isPaused));
        toggleButton.setAttribute('aria-label', isPaused ? 'Resume slideshow' : 'Pause slideshow');
        toggleButton.classList.toggle('is-paused', isPaused);
    };

    previousButton.addEventListener('click', () => {
        showSlide(currentSlide - 1);
        startTimer();
    });

    nextButton.addEventListener('click', () => {
        showSlide(currentSlide + 1);
        startTimer();
    });

    toggleButton.addEventListener('click', () => {
        isPaused = !isPaused;
        updateToggleButton();
        startTimer();

        if (status) {
            status.textContent = isPaused ? 'Slideshow paused' : 'Slideshow resumed';
        }
    });

    carousel.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') {
            previousButton.click();
        } else if (event.key === 'ArrowRight') {
            nextButton.click();
        }
    });

    document.addEventListener('visibilitychange', startTimer);

    showSlide(0, false);
    updateToggleButton();
    startTimer();
})();
