const BoutonMath = document.getElementById("BoutonMath");
const BoutonPhysique = document.getElementById("BoutonPhysique");
const BoutonBio = document.getElementById("BoutonBio");
const BoutonDivers = document.getElementById("BoutonDivers");


BoutonMath.addEventListener("click", function () {
    window.location.href = "pages/Math.html";
  });

BoutonPhysique.addEventListener("click", function () {
    window.location.href = "pages/Physique.html";
  });

BoutonBio.addEventListener("click", function () {
    window.location.href = "pages/Bio.html";
  });

BoutonDivers.addEventListener("click", function () {
    window.location.href = "pages/Divers/divers.html";
  });
