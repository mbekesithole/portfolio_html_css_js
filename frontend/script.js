function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  if (menu && icon) {
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  } else {
    console.error("Menu or icon element not found.");
  }
}

window.addEventListener("DOMContentLoaded", (event) => {
  getVisitCount();
});

const functionApiUrl =
  "https://getportfoliocounter.azurewebsites.net/api/GetPortfolioCounter?code=KYToOWBeMBlSHxOqXCSxDPx2khb7yFKN-4KZ8XWABa09AzFuIa9TEQ%3D%3D";
const localfunctionApi = "http://localhost:7071/api/GetPortfolioCounter";

const getVisitCount = () => {
  fetch(functionApiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Website called function API!");
      const count = data.count;
      document.getElementById("counter").innerText = count;
    })
    .catch(function (error) {
      console.error("Error:", error);
    });
};
