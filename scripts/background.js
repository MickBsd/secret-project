// const test = document.querySelector(".crawl-btn");
// test.addEventListener("click", runSeoAudit);



function runSeoAudit() {
    const url = window.location.href;
    const urlParts = url.split("/");
    const urlLastPart = urlParts[urlParts.length - 1];
    console.log(urlLastPart);
    isRunAudit = true;
    window.location.href = `https://webflow.com/dashboard/sites/${urlLastPart}/seo`;
    console.log("run audit function")
  }