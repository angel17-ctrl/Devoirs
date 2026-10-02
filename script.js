const BoutonMath = document.getElementById("BoutonMath");
const BoutonPhysique = document.getElementById("BoutonPhysique");
const BoutonBio = document.getElementById("BoutonBio");
const BoutonManuel = document.getElementById("BoutonManuel");


BoutonMath.addEventListener("click", function () {
    window.location.href = "pages/Math.html";
  });

BoutonPhysique.addEventListener("click", function () {
    window.location.href = "pages/Physique.html";
  });

BoutonBio.addEventListener("click", function () {
    window.location.href = "pages/Bio.html";
  });

BoutonManuel.addEventListener("click", function () {
    window.location.href = "pages/Manuel.html";
  });
