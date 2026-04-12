window.addEventListener("load", function() {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.pointerEvents = "none";
    window.location.href = "index.html";
  }, 2000);
});
