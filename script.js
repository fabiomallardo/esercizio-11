window.onload = function() {
    let links = document.querySelectorAll('aside .list-unstyled li a');
    links.forEach(link => {
        if (link.textContent.trim() === 'Twitter') {
            link.parentElement.remove(); 
        }
    });
};
 
document.querySelectorAll('.stretched-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); 
        this.closest('.border').remove(); 
    });
});


document.querySelectorAll('.blog-post-meta a').forEach(authorLink => {
    authorLink.addEventListener('mouseover', function() {
        alert(`Autore: ${this.textContent.trim()}`);
    });
});
