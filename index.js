// About Panel
const sidebar = document.getElementById("aboutPanel");
const openBtn = document.getElementById("openAboutBtn");
const closeBtn = document.getElementById("closeAboutBtn");

openBtn.addEventListener("click", () => {
  sidebar.style.transform = "translateY(0)";
});

closeBtn.addEventListener("click", () => {
  sidebar.style.transform = "translateY(-100%)";
});

// Education panel
const educationSidebar = document.getElementById("educationPanel");
const openEducationBtn = document.getElementById("openEducationBtn");
const closeEducationBtn = document.getElementById("closeEducationBtn");

openEducationBtn.addEventListener("click", () => {
  educationSidebar.style.transform = "translateY(0)";
});
closeEducationBtn.addEventListener("click", () => {
  educationSidebar.style.transform = "translateY(-100%)";
});

// Work panel
const workSidebar = document.getElementById("workPanel");
const openWorkBtn = document.getElementById("openWorkBtn");
const closeWorkBtn = document.getElementById("closeWorkBtn");

openWorkBtn.addEventListener("click", () => {
  workSidebar.style.transform = "translateY(0)";
});
closeWorkBtn.addEventListener("click", () => {
  workSidebar.style.transform = "translateY(-100%)";
});

// Resume panel
const resumeSidebar = document.getElementById("resumePanel");
const openResumeBtn = document.getElementById("openResumeBtn");
const closeResumeBtn = document.getElementById("closeResumeBtn");

openResumeBtn.addEventListener("click", () => {
  resumeSidebar.style.transform = "translateY(0)";
});
closeResumeBtn.addEventListener("click", () => {
  resumeSidebar.style.transform = "translateY(-100%)";
});

setTimeout(function () {
  $("#loading").addClass("animated fadeOut");
  setTimeout(function () {
    $("#loading").removeClass("animated fadeOut");
    $("#loading").css("display", "none");
    $("#box").css("display", "none");
    $("#menu").removeClass("animated fadeIn"); //added
    //   $("#about").removeClass("animated fadeIn");
    //   $("#contact").removeClass("animated fadeIn");
    //   $("#work").removeClass("animated fadeIn");
  }, 1000);
}, 1500);
