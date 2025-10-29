document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('section');
  const navButtons = document.querySelectorAll('nav button');

  function showSection(id) {
    sections.forEach(sec => {
      if (sec.id === id) {
        sec.classList.add('active');
      } else {
        sec.classList.remove('active');
      }
    });
  }

  navButtons.forEach(button => {
    button.addEventListener('click', () => {
      const target = button.getAttribute('data-target');
      if (target) {
        showSection(target);
      }
    });
  });

  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const target = card.getAttribute('data-target');
      if (target) {
        showSection(target);
      }
    });
  });

  // Initially show home section
  showSection('home');
});
