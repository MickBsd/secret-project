window.addEventListener("load", () => {
  console.log("DOM entièrement chargé et analysé");
  setTimeout(init, 2000);
});

function init() {
  buttonCreation();
  panelCreation();
}

function buttonCreation() {
  const sidebar = document.querySelector(".left-sidebar-links");
  const spButton = document.createElement("div");
  spButton.classList.add("button");
  spButton.classList.add("top");
  spButton.classList.add("sp-button");
  spButton.textContent = "SP";
  spButton.style.color = "#9f9f9f";
  sidebar.appendChild(spButton);
  spButton.addEventListener("click", displayOrHideComponent);
}

function panelCreation() {
  const body = document.querySelector("body");
  const spComponent = document.createElement("div");
  const spComponentBar = document.createElement("div");
  const spComponentTitle = document.createElement("h2");
  const spComponentClose = document.createElement("div");
  spComponent.classList.add("sp-component");
  spComponentBar.classList.add("sp-component-bar");
  spComponentTitle.classList.add("sp-title");
  spComponentTitle.textContent = "Secret Project";
  spComponentClose.classList.add("sp-close");
  spComponentClose.textContent = "X";
  spComponent.style.display = "none";
  spComponentBar.style.display = "none";

  body.appendChild(spComponent);
  spComponent.appendChild(spComponentBar);
  spComponent.appendChild(spComponentTitle);
  spComponentTitle.appendChild(spComponentClose);

  spComponentClose.addEventListener("click", displayOrHideComponent);
}

function displayOrHideComponent() {
  const spComponent = document.querySelector(".sp-component");
  const spComponentBar = document.querySelector(".sp-component-bar");
  const spButton = document.querySelector(".sp-button");

  if (spComponent.style.display === "none") {
    spButton.style.color = "#cfcfcf";
    spButton.classList.toggle("active");
    spComponent.style.display = "flex";
    spComponentBar.style.display = "block";
  } else {
    spButton.style.color = "#9f9f9f";
    spButton.classList.toggle("active");
    spComponent.style.display = "none";
    spComponentBar.style.display = "none";
  }
}

/* Block pour voir l'indexation du sous domaine, 

function runSeoTab() {
    const indexingToggle = document.querySelector(".switch");
    const toggleValue = indexingToggle.lastChild;
    const seoBlock = document.querySelector("#search-engine-optimization");

    const advertizing = document.createElement("span");
    advertizing.classList.add("advertizing");

    seoBlock.appendChild(advertizing);

    console.log(indexingToggle);
    console.log(toggleValue.textContent);
    console.log(seoBlock);

    indexingToggle.addEventListener("click", (event) => {
      console.log(event); 

      if (toggleValue.textContent === "No") {
          console.log("c'est no");
          advertizing.style.color = "red";
          advertizing.textContent = "!!   Votre sous domaine est indéxé. ";
          advertizing.style.fontWeight = "bold";
      } else {
          console.log("c'est yes");
          advertizing.textContent = "=D   Votre sous-domaine est désindexé.";
          advertizing.style.color = "green";
          advertizing.style.fontWeight = "bold";
      }
  });
}

*/
