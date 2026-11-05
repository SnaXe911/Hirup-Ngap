// Handles user clicks on the bottom navigation icons
function handleNavigation(tabName) {
    console.log(`Navigating to: ${tabName}`);
    
    // Grab all navigation buttons
    const navButtons = document.querySelectorAll('.nav-btn');
    
    // Reset opacity on all buttons to simulate deselecting
    navButtons.forEach(btn => {
        btn.style.opacity = '0.6';
    });

    // Highlight the clicked button
    const activeBtn = event.currentTarget;
    activeBtn.style.opacity = '1';

    // Placeholder for actual page routing logic
    // window.location.href = `/${tabName}.html`;
}

// Initialize active state on load
document.addEventListener('DOMContentLoaded', () => {
    const activeNav = document.querySelector('.nav-btn.active');
    if(activeNav) {
        handleNavigation('location');
    }
});