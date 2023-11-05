
document.body.onload = () => {
    document.querySelectorAll("nav a").forEach(function(e) {
        if (e.href == window.location) {
            e.classList.add("active");
        }
    })
}

// scroller animation **
const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {

    scroller.setAttribute("data-animated", true);


    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);


    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}


//listing projects

let projectsDiv = document.querySelector('.projects');
fetch('./rest/data.json')
  .then(response => response.json())
  .then(obj => obj.projects)
  .then(projects => {
      for (let project of projects) {
          projectsDiv.innerHTML += `
            <div class="col-12 d-flex justify-content-center">
              <div class="col-md-4 box col-10">
                <h3 class="project-title">${project.name}</h3>
                <p class="project-description">${project.description}</p>
                <a class="project-link" href="${project.link}" target="_blank">View Project</a>
              </div>
            </div>
          `;
      }
  })
.catch(error => console.error('Error:', error));


// fetch('./rest/data.json')
//     .then(response => response.json())
//     .then(obj => obj.projects)
    
//     // .then(console.log);
//     .then(projects => {
//         for (let project of projects) {
//             let projectDiv = document.createElement('div');
//             projectDiv.className = 'col-md-4 box col-10';

//             let projectTitle = document.createElement('h3');
//             projectTitle.className = 'project-title';
//             projectTitle.innerHTML = project.name;

//             let projectDescription = document.createElement('p');
//             projectDescription.className = 'project-description';
//             projectDescription.innerHTML = project.description;

//             let projectLink = document.createElement('a');
//             projectLink.className = 'project-link';
//             projectLink.href = project.link;
//             projectLink.target = '_blank';
//             projectLink.innerHTML = 'View Project';

//             projectDiv.appendChild(projectTitle);
//             projectDiv.appendChild(projectDescription);
//             projectDiv.appendChild(projectLink);


//             let wrapper = document.createElement('div');
//             wrapper.className = 'col-12 d-flex justify-content-center';
//             wrapper.appendChild(projectDiv);
            


//             document.querySelector('.projects').appendChild(wrapper);
            
//         }
//     })
//     .catch(error => console.error('Error:', error));


    
