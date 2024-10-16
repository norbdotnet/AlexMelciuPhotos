document.addEventListener('DOMContentLoaded', function () {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('afterbegin', data);
            // Set the active link
            const currentPage = window.location.pathname.split('/').pop();
            const activeLinkId = currentPage === '' ? 'index-link' : `${currentPage.split('.')[0]}-link`;
            document.getElementById(activeLinkId).classList.add('active');
        });
});