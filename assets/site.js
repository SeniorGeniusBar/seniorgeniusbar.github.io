
let fontStep = Number(localStorage.getItem("fontStep") || 0);
function applyTextSize(){document.documentElement.style.setProperty("--font-scale",1+(fontStep*.12));localStorage.setItem("fontStep",fontStep)}
function changeTextSize(d){fontStep=Math.max(0,Math.min(4,fontStep+d));applyTextSize()}
function resetTextSize(){fontStep=0;applyTextSize()}
applyTextSize();

let contrastOn = localStorage.getItem("contrastMode") === "on";
function applyContrast(){
  document.body.classList.toggle("contrast", contrastOn);
  localStorage.setItem("contrastMode", contrastOn ? "on" : "off");
  const btn = document.getElementById("contrastToggle");
  if(btn){ btn.textContent = contrastOn ? "Normal Contrast" : "High Contrast"; btn.setAttribute("aria-pressed", contrastOn ? "true" : "false"); }
}
function toggleContrast(){ contrastOn = !contrastOn; applyContrast(); }
applyContrast();

function printPageGuide(){ window.print(); }
