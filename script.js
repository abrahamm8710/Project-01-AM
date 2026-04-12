window.addEventListener("load", function() {
  const loader = document.getElementById("loader");

  if (!sessionStorage.getItem("loaderShown")) {
    sessionStorage.setItem("loaderShown", "true");

    setTimeout(() => {
      loader.style.opacity = "0";
      loader.style.pointerEvents = "none";
    }, 4000);
  } else {
    loader.style.opacity = "0";
    loader.style.pointerEvents = "none";
  }
});
