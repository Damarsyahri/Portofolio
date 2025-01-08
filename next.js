// JavaScript function to filter projects
function filterProjects(category) {
    // Get all portfolio items
    const items = document.querySelectorAll('.portfolio-item');
  
    // Show all items if "all" is selected
    if (category === 'all') {
      items.forEach(item => item.style.display = 'block');
    } else {
      // Hide all first
      items.forEach(item => item.style.display = 'none');
      // Show only selected category
      const selectedItems = document.querySelectorAll(`.${category}`);
      selectedItems.forEach(item => item.style.display = 'block');
    }
  }
  
  // Show all items by default on load
  window.onload = function() {
    filterProjects('all');
  };