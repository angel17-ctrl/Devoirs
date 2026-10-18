const liens = {
  BoutonMath: "pages/Math.html",
  BoutonPhysique: "pages/Physique.html",
  BoutonBio: "pages/Bio.html",
  BoutonDivers: "pages/Divers/divers.html",
  BoutonChimie: "pages/Chimie.html",
  Bouton_FC_Ch_C1: "../flashcards/Chimie/Chap1.html",
  Bouton_FC_PhMec_C2: "../flashcards/Physique/Meca_ch2_partie1.html"
};

for (const id in liens) {
  const bouton = document.getElementById(id);
  if (bouton) {
    bouton.addEventListener("click", function () {
      window.location.href = liens[id];
    });
  }
}