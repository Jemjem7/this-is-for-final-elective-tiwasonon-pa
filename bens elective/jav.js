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
    scrollToElement('about');
  });

// project section

 // Function to toggle project details inside the project box
 function toggleProjectDetails(projectIndex) {
  const projectBoxes = document.querySelectorAll('.project');
  const projectDetails = [
      `<a href="https://github.com/Jemjem7/singlePage_it21c" target="_blank">Single Page</a>`,
      `<a href="https://github.com/Jemjem7/it21c-iteration" target="_blank">Iteration</a>`,
      `<a href="https://github.com/Jemjem7/karaan-elct" target="_blank">Drop Down</a>`
      
  ];

  projectBoxes.forEach((box, index) => {
      if (index === projectIndex) {
          // Toggle the class to show/hide details
          box.classList.toggle('show-details');

         
          const projectDetailsContainer = box.querySelector('.project-details');
          if (box.classList.contains('show-details')) {
              projectDetailsContainer.innerHTML = `<p class="textsaabout">${projectDetails[index]}</p>`;
          } else {
              projectDetailsContainer.innerHTML = '';
          }
      } else {
          
          box.classList.remove('show-details');
          const projectDetailsContainer = box.querySelector('.project-details');
          projectDetailsContainer.innerHTML = '';
      }
  });
}

// project
const projects = document.querySelectorAll('.project');

projects.forEach((project, index) => {
  project.addEventListener('click', () => {
      toggleProjectDetails(index);
  });
}); 




//resume part

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
    scrollToElement('about');
  });

// project section

 // Function to toggle project details inside the project box
 function toggleProjectDetails(projectIndex) {
  const projectBoxes = document.querySelectorAll('.project');
  const projectDetails = [
      `<a href="https://github.com/Jemjem7/singlePage_it21c" target="_blank">Single Page</a>`,
      `<a href="https://github.com/Jemjem7/it21c-iteration" target="_blank">Iteration</a>`,
      `<a href="https://github.com/Jemjem7/karaan-elct" target="_blank">Drop Down</a>`
      
  ];

  projectBoxes.forEach((box, index) => {
      if (index === projectIndex) {
          // Toggle the class to show/hide details
          box.classList.toggle('show-details');

         
          const projectDetailsContainer = box.querySelector('.project-details');
          if (box.classList.contains('show-details')) {
              projectDetailsContainer.innerHTML = `<p class="textsaabout">${projectDetails[index]}</p>`;
          } else {
              projectDetailsContainer.innerHTML = '';
          }
      } else {
          
          box.classList.remove('show-details');
          const projectDetailsContainer = box.querySelector('.project-details');
          projectDetailsContainer.innerHTML = '';
      }
  });
}

// project
const projects = document.querySelectorAll('.project');

projects.forEach((project, index) => {
  project.addEventListener('click', () => {
      toggleProjectDetails(index);
  });
}); 




//resume part

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
    scrollToElement('about');
  });

// project section

 // Function to toggle project details inside the project box
 function toggleProjectDetails(projectIndex) {
  const projectBoxes = document.querySelectorAll('.project');
  const projectDetails = [
      `<a href="https://github.com/Jemjem7/singlePage_it21c" target="_blank">Single Page</a>`,
      `<a href="https://github.com/Jemjem7/it21c-iteration" target="_blank">Iteration</a>`,
      `<a href="https://github.com/Jemjem7/karaan-elct" target="_blank">Drop Down</a>`
      
  ];

  projectBoxes.forEach((box, index) => {
      if (index === projectIndex) {
          // Toggle the class to show/hide details
          box.classList.toggle('show-details');

         
          const projectDetailsContainer = box.querySelector('.project-details');
          if (box.classList.contains('show-details')) {
              projectDetailsContainer.innerHTML = `<p class="textsaabout">${projectDetails[index]}</p>`;
          } else {
              projectDetailsContainer.innerHTML = '';
          }
      } else {
          
          box.classList.remove('show-details');
          const projectDetailsContainer = box.querySelector('.project-details');
          projectDetailsContainer.innerHTML = '';
      }
  });
}

// project
const projects = document.querySelectorAll('.project');

projects.forEach((project, index) => {
  project.addEventListener('click', () => {
      toggleProjectDetails(index);
  });
}); 




//resume part

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
    scrollToElement('about');
  });

// project section

 // Function to toggle project details inside the project box
 function toggleProjectDetails(projectIndex) {
  const projectBoxes = document.querySelectorAll('.project');
  const projectDetails = [
      `<a href="https://github.com/Jemjem7/singlePage_it21c" target="_blank">Single Page</a>`,
      `<a href="https://github.com/Jemjem7/it21c-iteration" target="_blank">Iteration</a>`,
      `<a href="https://github.com/Jemjem7/karaan-elct" target="_blank">Drop Down</a>`
      
  ];

  projectBoxes.forEach((box, index) => {
      if (index === projectIndex) {
          // Toggle the class to show/hide details
          box.classList.toggle('show-details');

         
          const projectDetailsContainer = box.querySelector('.project-details');
          if (box.classList.contains('show-details')) {
              projectDetailsContainer.innerHTML = `<p class="textsaabout">${projectDetails[index]}</p>`;
          } else {
              projectDetailsContainer.innerHTML = '';
          }
      } else {
          
          box.classList.remove('show-details');
          const projectDetailsContainer = box.querySelector('.project-details');
          projectDetailsContainer.innerHTML = '';
      }
  });
}

// project
const projects = document.querySelectorAll('.project');

projects.forEach((project, index) => {
  project.addEventListener('click', () => {
      toggleProjectDetails(index);
  });
}); 




//resume part

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
    scrollToElement('about');
  });

// project section

 // Function to toggle project details inside the project box
 function toggleProjectDetails(projectIndex) {
  const projectBoxes = document.querySelectorAll('.project');
  const projectDetails = [
      `<a href="https://github.com/Jemjem7/singlePage_it21c" target="_blank">Single Page</a>`,
      `<a href="https://github.com/Jemjem7/it21c-iteration" target="_blank">Iteration</a>`,
      `<a href="https://github.com/Jemjem7/karaan-elct" target="_blank">Drop Down</a>`
      
  ];

  projectBoxes.forEach((box, index) => {
      if (index === projectIndex) {
          // Toggle the class to show/hide details
          box.classList.toggle('show-details');

         
          const projectDetailsContainer = box.querySelector('.project-details');
          if (box.classList.contains('show-details')) {
              projectDetailsContainer.innerHTML = `<p class="textsaabout">${projectDetails[index]}</p>`;
          } else {
              projectDetailsContainer.innerHTML = '';
          }
      } else {
          
          box.classList.remove('show-details');
          const projectDetailsContainer = box.querySelector('.project-details');
          projectDetailsContainer.innerHTML = '';
      }
  });
}

// project
const projects = document.querySelectorAll('.project');

projects.forEach((project, index) => {
  project.addEventListener('click', () => {
      toggleProjectDetails(index);
  });
}); 




//resume part

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
