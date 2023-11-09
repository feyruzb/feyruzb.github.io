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
// photo choosing
window.onload = function() {
  let photos = ["photo-horizontal.jpg", "stylish.jpg"];
  let photo = document.querySelector("#photo");
  if (photo) {
    photo.src = "rest/" + photos[Math.floor(Math.random() * photos.length)];
  }

  document.querySelectorAll("nav a").forEach(function(e) {
    if (e.href == window.location) {
        e.classList.add("active");
    }
  })
  
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
.catch(error => error);


