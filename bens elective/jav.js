document.addEventListener('DOMContentLoaded', function () {
    // Function to smoothly scroll to a target element
    function scrollToElement(targetId) {
      const targetElement = document.getElementById(targetId);
      window.scrollTo({
        top: targetElement.offsetTop - 50,
        behavior: 'smooth'
      });
    }
  
    // Toggle additional info in About Me with smooth scroll
    const toggleButton = document.getElementById('toggleContent');
    const additionalInfo = document.getElementById('additionalInfo');
  
    toggleButton.addEventListener('click', function (e) {
      e.preventDefault();
      additionalInfo.style.display = additionalInfo.style.display === 'none' ? 'block' : 'none';
      scrollToElement('about'); // Scroll to the About Me section
    });
  
    // project
    const projects = document.querySelectorAll('.project');
    const frames = document.querySelectorAll('.project-frame');
  
    // Initially hide all frames
    frames.forEach((frame) => {
      frame.style.display = 'none';
    });
  
    projects.forEach((project, index) => {
      project.addEventListener('click', () => {
        // Toggle visibility of the corresponding frame
        frames[index].style.display = frames[index].style.display === 'none' ? 'block' : 'none';
  
        // Hide all other frames
        frames.forEach((frame, i) => {
          if (i !== index) {
            frame.style.display = 'none';
          }
        });
      });
    });
  
   // Function to toggle resume details visibility
   function toggleResumeDetails(resumeId) {
      const resumeDetails = document.getElementById(resumeId);
      resumeDetails.style.display = resumeDetails.style.display === 'none' ? 'block' : 'none';
    }
  
    // Function to scroll to the Resume section
    function scrollToElement(elementId) {
      const element = document.getElementById(elementId);
      element.scrollIntoView({ behavior: 'smooth' });
    }
  
    // Event listeners for resume toggle buttons
    document.getElementById('toggleResumeJeram').addEventListener('click', function (e) {
      e.preventDefault();
      toggleResumeDetails('resumeDetailsJeram');
      scrollToElement('resume');
    });
  
    document.getElementById('toggleResumeArji').addEventListener('click', function (e) {
      e.preventDefault();
      toggleResumeDetails('resumeDetailsArji');
      scrollToElement('resume');
    });
    
  
  
    // Add smooth scrolling to navigation links
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
  
        scrollToElement(targetId); // Scroll to the target section
      });
    });
  });
  