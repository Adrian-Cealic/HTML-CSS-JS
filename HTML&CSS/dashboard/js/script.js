document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('sidebarbuttonId');
    const navigationList = document.getElementById('sidebarId');
    const collapseClassOpen = 'open';
    function collapseMenu() {
        if (navigationList.classList.contains(collapseClassOpen)) {
            navigationList.classList.remove(collapseClassOpen);
        } else {
            navigationList.classList.add(collapseClassOpen);
        }
    }
    button.onclick = () => {
        collapseMenu();
    }
  })