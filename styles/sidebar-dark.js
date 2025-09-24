// Wymusza ciemny sidebar w Material MkDocs nawet przy shadow DOM
function setDarkSidebar() {
  var sidebar = document.querySelector('.md-sidebar--primary');
  if (sidebar) {
    sidebar.style.background = '#181a1b';
    sidebar.style.color = '#e0e0e0';
    sidebar.style.borderRight = '2px solid #222';
    sidebar.style.boxShadow = '2px 0 8px #000a';
    var links = sidebar.querySelectorAll('.md-nav__title, .md-nav__link');
    links.forEach(function(link) {
      link.style.color = '#e0e0e0';
    });
  }
}
document.addEventListener('DOMContentLoaded', setDarkSidebar);
document.addEventListener('pjax:success', setDarkSidebar); // dla Materiala z pjax
