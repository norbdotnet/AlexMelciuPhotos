document.addEventListener('DOMContentLoaded', function () {
    fetch('_header.html')
        .then(response => response.text())
        .then(data => {
            document.head.innerHTML += data;
        });
    fetch('_navbar.html')
        .then(response => response.text())
        .then(data => {
            const navbarContainer  = document.getElementById('amf-navbar-container');
            if (navbarContainer ) {
                navbarContainer.innerHTML = data;
            }
            // Set the active link
            const currentPage = window.location.pathname.split('/').pop();
            const activeLinkId = currentPage === '' ? 'index-link' : `${currentPage.split('.')[0]}-link`;
            document.getElementById(activeLinkId).classList.add('active');
        });
});

addBootstrapScripts();

function addBootstrapScripts() {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js';
    script.integrity = 'sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz';
    script.crossOrigin = 'anonymous';
    document.body.appendChild(script);
}

function addImages(commonPath, imageNames, photoGallery, carouselItems) {
    imageNames.forEach((src, index) => {
        // Create gallery item
        const col = document.createElement('div');
        col.className = 'col-6 d-flex align-items-center';
        col.innerHTML = `<img src="${commonPath+src}" class="img-fluid gallery-item" data-bs-toggle="modal" data-bs-target="#photoModal" data-index="${index}">`;
        photoGallery.appendChild(col);
    
        // Add carousel item
        const carouselItem = document.createElement('div');
        carouselItem.className = `carousel-item ${index === 0 ? 'active' : ''}`;
        carouselItem.innerHTML = `<img src="${commonPath+src}" class="d-block w-100">`;
        carouselItems.appendChild(carouselItem);
    });
}