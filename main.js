function showDiv(id) {
    var sections = document.querySelectorAll('.content > div');
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }
    document.getElementById(id).style.display = 'block';
}
function reloadPage() {
    location.reload();
}
