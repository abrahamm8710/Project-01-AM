window.addEventListener("load", function() {
  const loader = document.getElementById("loader");

  // Only show loader and redirect if this is the first visit
  if (!sessionStorage.getItem("loaderShown")) {
    sessionStorage.setItem("loaderShown", "true");
    
    setTimeout(() => {
      loader.style.opacity = "0";
      loader.style.pointerEvents = "none";
      window.location.href = "index.html";
    }, 2000);
  } else {
    // On subsequent visits, hide loader immediately
    loader.style.opacity = "0";
    loader.style.pointerEvents = "none";
  }
});
