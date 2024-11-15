document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease-out',
        once: true
    });

    const downloadBtn = document.querySelector('.download-btn');
    
    if(downloadBtn) {
        downloadBtn.addEventListener('click', function() {
            // Optional: Add analytics tracking here
            console.log('Download started');
        });
    }
});