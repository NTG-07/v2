
const images = ["MEDIA/img1.jpg", "MEDIA/img2.jpg", "MEDIA/img3.jpg"]; 
let currentIndex = 0;
const slider = document.getElementById("slider");

function changeImage() {
  currentIndex = (currentIndex + 1) % images.length; 
  slider.style.opacity = 0; 
  setTimeout(() => {
    slider.src = images[currentIndex];
    slider.style.opacity = 1; 
  }, 500); 
}
setInterval(changeImage, 3000); 


function updateDateTime() {
  const now = new Date();
  const date = now.toLocaleDateString();
  const time = now.toLocaleTimeString();
  document.getElementById("date").textContent = `Fecha: ${date}`;
  document.getElementById("time").textContent = `Hora: ${time}`;
}
setInterval(updateDateTime, 1000);


const tableContainer = document.querySelector(".table-container");
let scrollPosition = 0;

function autoScrollTable() {
  scrollPosition += 1; 
  tableContainer.scrollTop = scrollPosition;

  if (scrollPosition >= tableContainer.scrollHeight - tableContainer.clientHeight) {
    scrollPosition = 0; 
  }
}
setInterval(autoScrollTable, 50); 

