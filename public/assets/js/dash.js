document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    let tooltips = []; // Store tooltip instances

    function destroyTooltips() {
        tooltips.forEach(tooltip => {
            if (tooltip && typeof tooltip.dispose === 'function') {
                tooltip.dispose();
            }
        });
        tooltips = [];
    }

    function initializeTooltips() {
        destroyTooltips(); // Clear existing tooltips
        if (sidebar && sidebar.classList.contains('sidebar-narrow')) {
            const tooltipElements = sidebar.querySelectorAll('[data-bs-toggle="tooltip"]');
            tooltips = [...tooltipElements].map(el => {
                return new bootstrap.Tooltip(el, {
                    placement: 'right',
                    trigger: 'hover'
                });
            });
        }
    }

    // --- Sidebar Toggle Functionality (Desktop) ---
    if (sidebarToggle && sidebar) {
        // Check local storage for sidebar state, default to narrow if not set
        const storedState = localStorage.getItem('sidebarNarrow');
        if (storedState === 'false') {
            sidebar.classList.remove('sidebar-narrow');
            destroyTooltips();
        } else {
            // Ensure sidebar starts narrow by default
            sidebar.classList.add('sidebar-narrow');
            initializeTooltips();
        }

        sidebarToggle.addEventListener('click', function() {
            sidebar.classList.toggle('sidebar-narrow');
            
            // Store preference in local storage
            const isNarrow = sidebar.classList.contains('sidebar-narrow');
            localStorage.setItem('sidebarNarrow', isNarrow);
            
            if (isNarrow) {
                initializeTooltips();
            } else {
                destroyTooltips();
            }
        });
    }

    // Initialize tooltips since sidebar starts narrow by default
    initializeTooltips();

    // Handle mobile menu close on item click
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu) {
        const links = mobileMenu.getElementsByTagName('a');
        Array.from(links).forEach(link => {
            link.addEventListener('click', () => {
                const bsOffcanvas = bootstrap.Offcanvas.getInstance(mobileMenu);
                if (bsOffcanvas) {
                    bsOffcanvas.hide();
                }
            });
        });
    }
});