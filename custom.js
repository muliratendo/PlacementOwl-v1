// Price Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
  const priceToggle = document.getElementById('checkbox');
  const monthlyPrices = document.getElementsByClassName('monthlyPrices');
  const yearlyPrices = document.getElementsByClassName('yearlyPrices');

  priceToggle.addEventListener('change', function() {
    if (this.checked) { 
      Array.from(monthlyPrices).forEach(el => el.classList.add('visually-hidden'));
      Array.from(yearlyPrices).forEach(el => el.classList.remove('visually-hidden'));
  } else { 
      Array.from(yearlyPrices).forEach(el => el.classList.add('visually-hidden'));
      Array.from(monthlyPrices).forEach(el => el.classList.remove('visually-hidden'));
    }
  });
});

// Hide the Price Toggle on Students Tab Click
document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('.nav-link');
  const elementToHide = document.getElementById('elementToHide');
  const triggerTabId = 'students-tab'; 

  tabs.forEach(tab => {
    tab.addEventListener('click', function(event) {
      event.preventDefault(); 
      
      const clickedTabId = this.id; 

      if (clickedTabId === triggerTabId) {
        elementToHide.classList.add('visually-hidden');
      } else {
        elementToHide.classList.remove('visually-hidden');
      }
    });
  });
});

// Scroll Progress Bar
window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (scrollTop / scrollHeight) * 100;
  document.getElementById('scrollProgress').style.width = scrolled + '%';
});

// Smooth Scrolling for Anchor Links
document.addEventListener('DOMContentLoaded', function() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});