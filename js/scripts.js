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