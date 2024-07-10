// JavaScript for lazy loading images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src][loading="lazy"]');
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('Image is intersecting:', entry.target);
                const img = entry.target;
                img.src = img.dataset.src;
                img.onload = () => console.log('Image loaded:', img.src);
                img.onerror = () => console.error('Image failed to load:', img.src);
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    }, options);

    images.forEach(img => {
        observer.observe(img);
    });
}

// Call lazyLoadImages function when the document is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded event fired');
    if ('IntersectionObserver' in window) {
        lazyLoadImages();
    } else {
        // Fallback for browsers that do not support Intersection Observer
        const images = document.querySelectorAll('img[data-src][loading="lazy"]');
        images.forEach(img => {
            img.src = img.dataset.src;
            img.onload = () => console.log('Image loaded:', img.src);
            img.onerror = () => console.error('Image failed to load:', img.src);
            img.removeAttribute('data-src');
        });
    }
});

// Handle promise rejection
window.addEventListener('unhandledrejection', function(event) {
    console.warn('Unhandled Promise Rejection:', event.reason);
});