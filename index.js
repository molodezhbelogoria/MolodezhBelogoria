document.addEventListener('DOMContentLoaded', () => {
    // 1. Sidebar Toggle Logic
    const menuIcon = document.querySelector('.menu-icon');
    const sidebar = document.querySelector('aside');
    
    // Check if we are on a small screen to handle overlay logic if needed
    // or simply toggle the 'hidden' class
    
    if (menuIcon && sidebar) {
        menuIcon.addEventListener('click', () => {
            // For the watch page, we might want to behave differently,
            // but for now, simple toggle:
            
            // If screen is small, use 'open' class for animation/overlay
            if (window.innerWidth <= 1000) {
                sidebar.classList.toggle('open');
            } else {
                // On large screens, just toggle display
                if (sidebar.style.display === 'none') {
                    sidebar.style.display = 'block';
                } else {
                    sidebar.style.display = 'none';
                }
            }
        });
    }

    // 2. Chips Selection Logic (Main Page)
    const chips = document.querySelectorAll('.chip');
    if (chips.length > 0) {
        chips.forEach(chip => {
            chip.addEventListener('click', () => {
                chips.forEach(c => c.classList.remove('active'));
                chip.classList.add('active');
            });
        });
    }

    // 3. Profile Tabs Logic (Profile Page)
    const tabs = document.querySelectorAll('.tab-item');
    if (tabs.length > 0) {
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
            });
        });
    }
});