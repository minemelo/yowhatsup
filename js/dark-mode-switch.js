(function() {
  var darkSwitch = document.getElementById("darkSwitch");
  if (darkSwitch) {
    initTheme();
    changelogo();
    darkSwitch.addEventListener("change", function(event) {
      resetTheme();
      changelogo();
    });
    function initTheme() {
      var darkThemeSelected =
        localStorage.getItem("darkSwitch") !== null &&
        localStorage.getItem("darkSwitch") === "light";
      darkSwitch.checked = darkThemeSelected;
      darkThemeSelected
        ? document.body.setAttribute("data-theme", "light")
        : document.body.removeAttribute("data-theme");

    }
    function resetTheme() {
      if (darkSwitch.checked) {
        document.body.setAttribute("data-theme", "light");
        localStorage.setItem("darkSwitch", "light");
      } else {
        document.body.removeAttribute("data-theme");
        localStorage.removeItem("darkSwitch");
      }
    }
    function changelogo() {
      logo = document.getElementsByClassName("logo")[0];
      if (darkSwitch.checked) {
        logo.setAttribute("src","../images/logo-lightmode.png")
        document.getElementById('btn-darkmode').innerHTML = "Light Mode"
      } else {
        logo.setAttribute("src","../images/logo-darkmode.png")
        document.getElementById('btn-darkmode').innerHTML = "Dark Mode"
      }
    }
  }
})();
