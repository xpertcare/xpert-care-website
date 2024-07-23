const url = "https://eorhfjpils7ry4q.m.pipedream.net";

async function sendMessage(data = {}) {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  const response = await fetch(url, {
    method: "POST",
    headers,
    mode: "cors",
    body: JSON.stringify(data),
  });
  return true;
}

const getEl = (id) => document.getElementById(id);
const getVal = (id) => getEl(id).value;
const hide = (id) => {
  getEl(id).style.display = "none";
};
const show = (id) => {
  getEl(id).style.display = "block";
};
const form = getEl("form");
const loadingDiv = getEl("loading");
const successDiv = getEl("success");
const spinnerDiv = getEl("spinner");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    name: getVal("name"),
    email: getVal("email"),
    phone: getVal("phone"),
    message: getVal("message"),
  };
  form.style.display = "none";
  loadingDiv.style.display = "block";
  spinnerDiv.innerHTML = '<div class="spinner"></div>';
  sendMessage(data).then(() => {
    spinnerDiv.innerHTML = "";
    loadingDiv.style.display = "none";
    successDiv.style.display = "block";
  });
  return false;
});

const servicesSection = getEl("services");
const stickyPoint =
  servicesSection.getBoundingClientRect().top + window.scrollY - 64;
const nav = getEl("nav");
const logo = getEl("nav-logo");
function checkScroll() {
  const curr = window.scrollY;
  if (curr > stickyPoint) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}
window.addEventListener("scroll", checkScroll);
checkScroll();
