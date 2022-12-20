window.addEventListener("load", () => {
  console.log("DOM entièrement chargé et analysé");
  setTimeout(init, 1500);
});

function init() {
  let url = window.location.href;
  if (url.includes("design")) {
    console.log("In the designer");
    buttonCreation();
    panelCreation();
  } else if (url.includes("general")) {
    console.log("In the general tab");
    const seo = document.querySelector(".seo");
    console.log(seo);
    seo.addEventListener("click", ()=> {
      console.log("click");
      setTimeout(runSeoTab, 1500);
    });

  } else if (url.includes("seo")) {
    console.log("In the SEO tab");
    //const seo = document.querySelector(".seo");
    runSeoTab();
  } else if (url.includes("publishing")) {
    console.log("In the publishing tab");
    runPublishingTab();
  }
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
  const componentWrapper = document.createElement("div");
  const spComponentBar = document.createElement("div");
  const spComponentTitle = document.createElement("h2");
  const spComponentClose = document.createElement("div");
  const crawlBtn = document.createElement("button");

  spComponent.classList.add("sp-component");
  componentWrapper.classList.add("component-wrapper");
  spComponentBar.classList.add("sp-component-bar");
  spComponentTitle.classList.add("sp-title");
  spComponentClose.classList.add("sp-close");
  crawlBtn.classList.add("crawl-btn");

  spComponentTitle.textContent = "Secret Project";
  spComponentClose.textContent = "X";
  crawlBtn.textContent = "Run SEO audit";

  spComponent.style.display = "none";
  spComponentBar.style.display = "none";

  body.appendChild(spComponent);
  spComponent.appendChild(spComponentBar);
  spComponent.appendChild(componentWrapper);
  componentWrapper.appendChild(spComponentTitle);
  componentWrapper.appendChild(crawlBtn);
  spComponentTitle.appendChild(spComponentClose);
  spComponentClose.addEventListener("click", displayOrHideComponent);

  crawlBtn.addEventListener("click", runSeoAudit);
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

function runSeoTab() {
    const seoBlock = document.querySelector("#search-engine-optimization");
    const statusWrapper = document.createElement("div");
    const index = document.createElement("span");
    const sitemap = document.createElement("span");
    const toggle = document.querySelectorAll(".switch-description");
    console.log(toggle);
    statusWrapper.classList.add("status-wrapper");
    index.classList.add("seo-toggle-status");
    index.setAttribute("id", "index");
    sitemap.classList.add("seo-toggle-status");
    sitemap.setAttribute("id", "sitemap");
    statusWrapper.appendChild(index);
    statusWrapper.appendChild(sitemap);
    seoBlock.appendChild(statusWrapper);

    if (toggle[0].textContent.includes("enabled")) {
      index.style.color = "red";
      index.textContent = "!!   Votre sous domaine est indéxé. ";
      index.style.fontWeight = "bold";
    } else {
      index.textContent = "=D   Votre sous-domaine est désindexé.";
      index.style.color = "green";
      index.style.fontWeight = "bold";
    }

    if (toggle[1].textContent.includes("custom")) {
      sitemap.style.color = "red";
      sitemap.textContent = "!!   Votre sitemap n'est pas généré. ";
      sitemap.style.fontWeight = "bold";
    } else {
      sitemap.textContent = "=D   Votre sitemap est généré.";
      sitemap.style.color = "green";
      sitemap.style.fontWeight = "bold";
    }
}

function runPublishingTab() {
  console.log("run publishing function");
}

function runSeoAudit() {
  const url = window.location.href;
  const urlParts = url.split("/");
  const urlLastPart = urlParts[urlParts.length - 1];
  console.log(urlLastPart);
  window.location.href = `https://webflow.com/dashboard/sites/${urlLastPart}/seo`;
  }