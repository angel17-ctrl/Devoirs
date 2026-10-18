const BoutonMath = document.getElementById("BoutonMath");
const BoutonPhysique = document.getElementById("BoutonPhysique");
const BoutonBio = document.getElementById("BoutonBio");
const BoutonDivers = document.getElementById("BoutonDivers");
const BoutonChimie = document.getElementById("BoutonChimie");
const Bouton_FC_Ch_C1 = document.getElementById("Bouton_FC_Ch_C1");


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

BoutonChimie.addEventListener("click", function () {
    window.location.href = "pages/Chimie.html";
  });

Bouton_FC_Ch_C1.addEventListener("click", function () {
    window.location.href = "../flashcards/Chimie/Chap1.html";
  });
