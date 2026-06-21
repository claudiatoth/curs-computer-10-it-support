// ============================================
// FLASHCARDS - Computer & Büro Teil 10: IT-Support & Fehler beheben (A2/B1)
// Claudia Toth · 32 carduri cu TTS · substantive Sg·Pl
// ============================================

const flashcardsData = [
    { de: "das Problem · die Probleme", ro: "problema · problemele" },
    { de: "der Fehler · die Fehler", ro: "eroarea / greșeala · ... (identic)" },
    { de: "die Fehlermeldung · die Fehlermeldungen", ro: "mesajul de eroare · ..." },
    { de: "der IT-Support", ro: "suportul tehnic / IT (de obicei Sg.)" },
    { de: "der Techniker · die Techniker", ro: "tehnicianul · ... (identic)" },
    { de: "die Technikerin · die Technikerinnen", ro: "tehniciana · ..." },
    { de: "der Neustart · die Neustarts", ro: "repornirea · repornirile" },
    { de: "der Bildschirm · die Bildschirme", ro: "ecranul · ecranele" },
    { de: "der Knopf · die Knöpfe", ro: "butonul · butoanele" },
    { de: "die Taste · die Tasten", ro: "tasta · tastele" },
    { de: "das Kabel · die Kabel", ro: "cablul · ... (identic)" },
    { de: "der Stecker · die Stecker", ro: "ștecărul · ... (identic)" },
    { de: "die Lösung · die Lösungen", ro: "soluția · soluțiile" },
    { de: "der Router · die Router", ro: "routerul · ... (identic)" },
    { de: "das Programm · die Programme", ro: "programul · programele" },
    { de: "der Computer · die Computer", ro: "calculatorul · ... (identic)" },
    { de: "die Besprechung · die Besprechungen", ro: "ședința · ședințele" },
    { de: "kaputt / defekt", ro: "stricat / defect" },
    { de: "langsam", ro: "lent / încet" },
    { de: "eingefroren", ro: "înghețat / blocat" },
    { de: "schwarz", ro: "negru (ecran negru)" },
    { de: "funktionieren", ro: "a merge / a funcționa" },
    { de: "abstürzen", ro: "a se bloca / a crăpa (+ sein)" },
    { de: "reparieren", ro: "a repara" },
    { de: "lösen", ro: "a rezolva" },
    { de: "anrufen", ro: "a suna (pe cineva, + Akk)" },
    { de: "neu starten", ro: "a reporni" },
    { de: "drücken", ro: "a apăsa (un buton)" },
    { de: "prüfen", ro: "a verifica" },
    { de: "Können Sie mir bitte helfen?", ro: "Mă puteți ajuta, vă rog?" },
    { de: "Mein PC reagiert nicht mehr.", ro: "Calculatorul meu nu mai reacționează." },
    { de: "Jetzt funktioniert es wieder!", ro: "Acum merge din nou!" }
];

let currentCardIndex = 0;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 ${flashcardsData.length} carduri: vocabularul pentru probleme tehnice și IT-Support.</strong><br>
            Click pe card pentru traducere. Click pe 🔊 pentru pronunție germană automată.
        </div>
        <div class="flashcard-counter" id="flashcard-counter">Card 1 / ${flashcardsData.length}</div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <button class="flashcard-audio-btn" onclick="playFlashcardAudio(event)" title="Ascultă pronunția">🔊</button>
            <div class="flashcard-content"><div class="de" id="flashcard-de">${flashcardsData[0].de}</div><div class="ro" id="flashcard-ro">${flashcardsData[0].ro}</div></div>
            <div class="flashcard-hint">👆 Click pentru traducere</div>
        </div>
        <div class="flashcard-controls">
            <button class="flashcard-btn" onclick="prevCard()" id="prev-btn">← Anterior</button>
            <button class="flashcard-btn" onclick="nextCard()" id="next-btn">Următor →</button>
        </div>
    `;
    updateFlashcard();
}
function updateFlashcard() {
    const card = document.getElementById('flashcard'), de = document.getElementById('flashcard-de'), ro = document.getElementById('flashcard-ro');
    const counter = document.getElementById('flashcard-counter'), prevBtn = document.getElementById('prev-btn'), nextBtn = document.getElementById('next-btn');
    if (!card || !de || !ro || !counter) return;
    const c = flashcardsData[currentCardIndex];
    de.textContent = c.de; ro.textContent = c.ro; card.classList.remove('flipped');
    counter.textContent = `Card ${currentCardIndex + 1} / ${flashcardsData.length}`;
    if (prevBtn) prevBtn.disabled = currentCardIndex === 0;
    if (nextBtn) nextBtn.disabled = currentCardIndex === flashcardsData.length - 1;
}
function flipCard() { const card = document.getElementById('flashcard'); if (card) card.classList.toggle('flipped'); }
function nextCard() { if (currentCardIndex < flashcardsData.length - 1) { currentCardIndex++; updateFlashcard(); } }
function prevCard() { if (currentCardIndex > 0) { currentCardIndex--; updateFlashcard(); } }
function playFlashcardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCardIndex];
    if ('speechSynthesis' in window) { window.speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(card.de); u.lang = 'de-DE'; u.rate = 0.85; window.speechSynthesis.speak(u); }
    else { alert('Browser-ul tău nu suportă Text-to-Speech. Folosește Chrome, Edge sau Safari.'); }
}
document.addEventListener('DOMContentLoaded', function() { buildFlashcards(); });
