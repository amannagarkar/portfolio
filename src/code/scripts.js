document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1); // Get the target section's ID
      const targetSection = document.getElementById(targetId); // Get the target section

      if (targetSection) {
        // Scroll smoothly to the target section
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });


  document.addEventListener('keydown', function(event) {
    // Close the search overlay on 'Esc' key press
    if (event.key === 'Escape') {
      document.getElementById('searchOverlay').style.display = 'none';
    }
  });