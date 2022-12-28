import * as runSeoTab from './seoTab.js';

window.addEventListener("load", () => {
  console.log("DOM entièrement chargé et analysé");
  setTimeout(init, 1500);
});

function init() {
  let url = window.location.href;
  if (url.includes("design")) {
    console.log("In the designer");
    createButton();
    createPanel();

    if (sessionStorage.getItem("isFinishedAudit")) {
      console.log("Audit finished");
    }

  } else if (url.includes("general")) {
    console.log("In the general tab");
    const seo = document.querySelector(".seo");
    console.log(seo);
    seo.addEventListener("click", () => {
      console.log("go seo tab");
      setTimeout(runSeoTab, 1500);
    });

  } else if (url.includes("seo")) {
    console.log("In the SEO tab");
    runSeoTab();

    //If run audit launch
    let isRunAudit = sessionStorage.getItem("isRunAudit");
    if (isRunAudit) {
      runSeoAudit();
    }

  } else if (url.includes("publishing")) {
    console.log("In the publishing tab");
    //runPublishingTab();

    //If run audit launch
    let isRunAudit = sessionStorage.getItem("isRunAudit");
    if (isRunAudit) {
      runPublishingAudit();
    }

  }
}

function createButton() {
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

function createPanel() {
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

  crawlBtn.addEventListener("click", function () {
    sessionStorage.setItem("isRunAudit", true);
    console.log(sessionStorage.getItem("isRunAudit"));
    runAudit();
  });
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
    const robotsTxt = document.createElement("span");
    const canonical = document.createElement("span");

    const toggle = document.querySelectorAll(".switch-description");
    const textAreas = document.querySelectorAll("textarea");
    const canonicalBalise = document.querySelector("input[name='globalCanonicalTag']");
    console.log(toggle);
    console.log(textAreas);
    console.log(canonicalBalise);
  
    statusWrapper.classList.add("status-wrapper");
    index.classList.add("seo-toggle-status");
    index.setAttribute("id", "index");
    sitemap.classList.add("seo-toggle-status");
    sitemap.setAttribute("id", "sitemap");
    robotsTxt.classList.add("seo-toggle-status");
    robotsTxt.setAttribute("id", "robotsTxt");
    canonical.classList.add("seo-toggle-status");
    canonical.setAttribute("id", "canonicalBalise");
    statusWrapper.appendChild(index);
    statusWrapper.appendChild(sitemap);
    statusWrapper.appendChild(robotsTxt);
    statusWrapper.appendChild(canonical);
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

    if (textAreas[0].value === "" ) {
      robotsTxt.style.color = "red";
      robotsTxt.textContent = "!!   Votre robots.txt est vide. ";
      robotsTxt.style.fontWeight = "bold";
    } else {
      robotsTxt.textContent = "=D   Votre robots.txt est généré.";
      robotsTxt.style.color = "green";
      robotsTxt.style.fontWeight = "bold";
    }

    if (canonicalBalise.value === "" ) {
      canonical.style.color = "red";
      canonical.textContent = "!!   Votre balise canonical est vide. ";
      canonical.style.fontWeight = "bold";
    } else {
      canonical.textContent = "=D   Votre balise canonical est générée.";
      canonical.style.color = "green";
      canonical.style.fontWeight = "bold";
    }
}

function runPublishingTab() {
  console.log("run publishing function");
}

function runAudit() {
  const loader = document.createElement("div");
  const loaderText = document.createElement("p");
  loader.classList.add("loader");
  loaderText.classList.add("loader-text");
  loaderText.textContent = "Audit in progress...";
  loader.appendChild(loaderText);
  document.querySelector("body").appendChild(loader);

  const url = window.location.href;
  const urlParts = url.split("/");
  const urlLastPart = urlParts[urlParts.length - 1];
  console.log(urlLastPart);
  window.location.href = `https://webflow.com/dashboard/sites/${urlLastPart}/seo`;
}

function runSeoAudit() {
  //check toggle status x2, sitemap and robot.txt in seo tab
  console.log("run seo audit function");
  const url = window.location.href;
  const urlParts = url.split("/");
  const urlLastPart = urlParts[urlParts.length - 2];
  console.log(url);
  console.log(urlParts);
  console.log(urlLastPart);
  setTimeout(window.location.href = `https://webflow.com/dashboard/sites/${urlLastPart}/publishing`,5000)
}

function runPublishingAudit() {
  //check toggle status in publishing tab
  console.log("run publishing audit function");
  const url = window.location.href;
  const urlParts = url.split("/");
  const urlLastPart = urlParts[urlParts.length - 2];
  console.log(url);
  console.log(urlParts);
  console.log(urlLastPart);
  sessionStorage.removeItem("isRunAudit");
  sessionStorage.setItem("isFinishedAudit", true);
  console.log(sessionStorage.getItem("isRunAudit"));
  setTimeout(window.location.href = `https://webflow.com/design/${urlLastPart}`,5000)
}