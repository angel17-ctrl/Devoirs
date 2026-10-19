const liens = {
  BoutonMath: "pages/Math.html",
  BoutonPhysique: "pages/Physique.html",
  BoutonBio: "pages/Bio.html",
  BoutonDivers: "pages/Divers/divers.html",
  BoutonChimie: "pages/Chimie.html",
  Bouton_FC_Ch_C1: "../flashcards/Chimie/Chap1.html",
  Bouton_FC_PhMec_C2_p1: "../flashcards/Physique/mecanique/ch2_p1.html",
  Bouton_FC_PhMec_C2_p2: "../flashcards/Physique/mecanique/ch2_p2.html",
  Bouton_FC_PhMec_C2_p3: "../flashcards/Physique/mecanique/ch2_p3.html",
  Bouton_FC_PhMec_C2_p4: "../flashcards/Physique/mecanique/ch2_p4.html",
  Bouton_FC_PhMec_C2_p5: "../flashcards/Physique/mecanique/ch2_p5.html",
  Bouton_FC_PhMec_C2_p6: "../flashcards/Physique/mecanique/ch2_p6.html",
  Bouton_FC_PhMec_C2_p7: "../flashcards/Physique/mecanique/ch2_p7.html",
  Bouton_FC_PhMec_C3_p1: "../flashcards/Physique/mecanique/ch3_p1.html",
  Bouton_FC_PhMec_C3_p2: "../flashcards/Physique/mecanique/ch3_p2.html",
  Bouton_FC_PhMec_C3_p3: "../flashcards/Physique/mecanique/ch3_p3.html",
  Bouton_FC_PhMec_C3_p4: "../flashcards/Physique/mecanique/ch3_p4.html",
  Bouton_FC_PhMec_C3_p5: "../flashcards/Physique/mecanique/ch3_p5.html",
  Bouton_FC_PhMec_C3_p6: "../flashcards/Physique/mecanique/ch3_p6.html",
  Bouton_FC_PhMec_C3_p7: "../flashcards/Physique/mecanique/ch3_p7.html",
};

for (const id in liens) {
  const bouton = document.getElementById(id);
  if (bouton) {
    bouton.addEventListener("click", function () {
      window.location.href = liens[id];
    });
  }
}