document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      targetElement.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Animate features on scroll
  const features = document.querySelectorAll('.feature');

  window.addEventListener('scroll', () => {
    features.forEach(feature => {
      const featureTop = feature.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (featureTop < windowHeight * 0.8) {
        feature.classList.add('animate');
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const video = document.getElementById('demoVideo');
  video.play();
});

document.addEventListener('DOMContentLoaded', function() {
  const visitAppButton = document.querySelector('.btn');

  visitAppButton.addEventListener('click', function() {
    const deployedAppUrl = 'https://sdprediction.streamlit.app/';
    window.open(deployedAppUrl, '_blank');
  });
});
