// ============================================
// TEORIE - Computer & Büro Teil 10: IT-Support & Fehler beheben (A2/B1)
// Claudia Toth · germană pentru probleme tehnice: descrii defecțiunea, ceri ajutor, repari
// MODEL v2: gramatică-vedetă Wenn-Sätze + cutie „⚠️ Capcana românului". Paletă v2.
// Sursă: extindere pe track-ul Computer & Büro — vocabular verificat.
// ============================================

const theoryHTML = `
    <!-- 0: Intro -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>📚 1. Probleme tehnice & ajutor IT (IT-Support & Fehler beheben)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-0')" id="btn-audio-0">▶</button>
                    <audio id="audio-0" preload="none"><source src="audio/01-intro.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>
            <div class="andreea-note">
                <img class="andreea-note-avatar" src="images/andreea.png" alt="Andreea">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea</div>
                    <div class="text">A zecea (și ultima!) lecție din seria <strong>Computer &amp; Büro</strong>! Azi învățăm ce faci când <strong>ceva nu merge</strong>: cum <strong>descrii o problemă tehnică</strong> (nu pornește, e blocat, s-a crăpat programul), cum <strong>ceri ajutor</strong> la <strong>IT-Support</strong> și cum urmezi <strong>pașii de reparare</strong>. Învățăm și o structură foarte utilă: <strong>„Wenn..., dann..."</strong> (dacă..., atunci...). La final ascult un dialog cu Herr Wolf de la IT-Support, când mi s-a blocat calculatorul.</div>
                </div>
            </div>
            <div class="theory-box" style="background:#dbeafe;border-color:#D4A574;">
                <h4>ℹ️ De ce contează vocabularul ăsta</h4>
                <p>Tehnica se strică mereu în cel mai prost moment. Trebuie să poți spune clar <strong>ce nu merge</strong> și să înțelegi ce-ți cere <strong>IT-Support</strong>-ul să faci. Cuvinte-cheie: <strong>das Problem</strong> (problema), <strong>der Fehler</strong> (eroarea), <strong>der IT-Support</strong> (suportul tehnic), <strong>der Neustart</strong> (repornirea). Verbe vedetă: <strong>funktionieren</strong> (a merge/funcționa), <strong>abstürzen</strong> (a se bloca), <strong>reparieren</strong> (a repara).</p>
            </div>
        </div>
    </div>

    <!-- 1: Vocabular -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>🛠️ 2. Vocabular: probleme & reparații (Grundwortschatz)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-1')" id="btn-audio-1">▶</button>
                    <audio id="audio-1" preload="none"><source src="audio/02-vocabular.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>
            <div class="theory-box" style="background:#F5F0E8;border-color:#D4A574;">
                <h4>🚨 Substantivele se învață ÎNTOTDEAUNA cu pluralul</h4>
                <p>În germană pluralul e imprevizibil (-e, -en, -s, Umlaut sau identic). De aceea fiecare substantiv apare aici la <strong>singular · plural</strong>. Învață-le împreună, ca pe o pereche.</p>
            </div>
            <table class="grammar-table">
                <thead><tr><th>Singular</th><th>Plural</th><th>Traducere RO</th><th>Exemplu (DE)</th></tr></thead>
                <tbody>
                    <tr><td class="verb">das Problem</td><td class="verb">die Probleme</td><td>problema · problemele</td><td><em>Ich habe ein Problem mit dem PC.</em></td></tr>
                    <tr><td class="verb">der Fehler</td><td class="verb">die Fehler</td><td>eroarea / greșeala · ... (identic)</td><td><em>Es gibt einen Fehler.</em></td></tr>
                    <tr><td class="verb">die Fehlermeldung</td><td class="verb">die Fehlermeldungen</td><td>mesajul de eroare · ...</td><td><em>Eine Fehlermeldung erscheint.</em></td></tr>
                    <tr><td class="verb">der IT-Support</td><td class="verb">— (de obicei Sg.)</td><td>suportul tehnic / IT</td><td><em>Ich rufe den IT-Support an.</em></td></tr>
                    <tr><td class="verb">der Techniker / die Technikerin</td><td class="verb">die Techniker / die Technikerinnen</td><td>tehnicianul / tehniciana · ...</td><td><em>Der Techniker hilft mir.</em></td></tr>
                    <tr><td class="verb">der Neustart</td><td class="verb">die Neustarts</td><td>repornirea · repornirile</td><td><em>Ein Neustart hilft oft.</em></td></tr>
                    <tr><td class="verb">der Bildschirm</td><td class="verb">die Bildschirme</td><td>ecranul · ecranele</td><td><em>Der Bildschirm bleibt schwarz.</em></td></tr>
                    <tr><td class="verb">der Knopf / die Taste</td><td class="verb">die Knöpfe / die Tasten</td><td>butonul / tasta · ...</td><td><em>Drück den Knopf fünf Sekunden.</em></td></tr>
                    <tr><td class="verb">das Kabel</td><td class="verb">die Kabel</td><td>cablul · ... (identic)</td><td><em>Prüf, ob das Kabel steckt.</em></td></tr>
                    <tr><td class="verb">der Stecker</td><td class="verb">die Stecker</td><td>ștecărul · ... (identic)</td><td><em>Der Stecker ist locker.</em></td></tr>
                    <tr><td class="verb">die Lösung</td><td class="verb">die Lösungen</td><td>soluția · soluțiile</td><td><em>Das ist die einfachste Lösung.</em></td></tr>
                    <tr><td class="verb">kaputt / defekt</td><td class="verb">—</td><td>stricat / defect (adjective)</td><td><em>Der Drucker ist kaputt.</em></td></tr>
                    <tr><td class="verb">langsam / eingefroren</td><td class="verb">—</td><td>lent / înghețat-blocat (adjective)</td><td><em>Der PC ist eingefroren.</em></td></tr>
                </tbody>
            </table>
        </div>
    </div>

    <!-- 2: GRAMATICA-VEDETĂ Wenn-Sätze -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>⭐ 3. Gramatica-vedetă: „Wenn..., dann..." (dacă..., atunci...)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-2')" id="btn-audio-2">▶</button>
                    <audio id="audio-2" preload="none"><source src="audio/03-wenn.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>
            <div class="theory-box" style="background:#FBF7EF;">
                <h4>💡 La ce folosește la IT-Support</h4>
                <p>Când rezolvi probleme tehnice, vorbești tot timpul în <strong>condiții</strong>: „<strong>Dacă</strong> nu pornește, <strong>atunci</strong> apasă butonul." În germană asta se spune cu <strong>„Wenn..., dann..."</strong>. E structura perfectă pentru instrucțiuni pas cu pas.</p>
            </div>
            <div class="theory-box">
                <h4>🔑 Regula de aur: în propoziția cu „wenn", verbul fuge la SFÂRȘIT</h4>
                <p><strong>wenn</strong> e o conjuncție subordonatoare (ca <em>weil</em>, <em>dass</em>): împinge verbul la <strong>capătul</strong> propoziției. Iar a doua propoziție începe cu <strong>dann + verbul</strong>:</p>
                <p class="de" style="margin-top:8px"><strong>Wenn</strong> der Computer nicht <strong>startet</strong>, <strong>dann drück</strong> den Knopf fünf Sekunden.</p>
                <p class="ro"><em>Dacă</em> calculatorul nu <em>pornește</em>, <em>atunci apasă</em> butonul cinci secunde.</p>
                <table class="grammar-table" style="margin-top:10px">
                    <thead><tr><th>Wenn-Satz (verbul la final)</th><th>Hauptsatz (dann + verb)</th></tr></thead>
                    <tbody>
                        <tr><td class="verb">Wenn das Programm abstürzt,</td><td>dann starte den PC neu.</td></tr>
                        <tr><td class="verb">Wenn der Bildschirm schwarz bleibt,</td><td>dann prüf das Kabel.</td></tr>
                        <tr><td class="verb">Wenn das Internet nicht geht,</td><td>dann starte den Router neu.</td></tr>
                        <tr><td class="verb">Wenn nichts hilft,</td><td>dann ruf den IT-Support an.</td></tr>
                    </tbody>
                </table>
                <p style="margin-top:8px">💡 <strong>„dann" e opțional</strong>, dar verbul din a doua propoziție vine oricum imediat: <em>Wenn nichts hilft, ruf den IT-Support an.</em></p>
            </div>
            <div class="theory-box" style="background:#FBF7EF;border-left:4px solid #b45309;">
                <h4 style="color:#b45309;">⚠️ Capcana românului</h4>
                <p>În română folosim un singur cuvânt — <strong>„când"</strong> / <strong>„dacă"</strong> — dar germana le împarte:</p>
                <ul style="margin:4px 0 0 18px;">
                    <li><strong>wenn</strong> → <em>dacă</em> / <em>de câte ori</em> (condiție sau ceva repetat): <em>Wenn der PC abstürzt, ...</em> (ori de câte ori se blochează).</li>
                    <li><strong>wann</strong> → DOAR în întrebări = <em>când?</em>: <em>Wann kommt der Techniker?</em> NU spui „wann der PC abstürzt" — e greșit!</li>
                    <li><strong>als</strong> → <em>când</em>, dar pentru o <strong>singură</strong> întâmplare din TRECUT: <em>Als der PC gestern abstürzte, rief ich den Support an.</em></li>
                </ul>
                <p style="margin-top:8px">Pe scurt: condiție/repetare → <strong>wenn</strong>; întrebare „când?" → <strong>wann</strong>; o dată în trecut → <strong>als</strong>.</p>
            </div>
            <div class="andreea-note">
                <img class="andreea-note-avatar" src="images/annette.png" alt="Annette">
                <div class="andreea-note-content">
                    <div class="speaker">Annette</div>
                    <div class="text">Truc simplu: după <strong>wenn</strong>, caută verbul — trebuie să fie la <strong>final</strong>. Iar dacă începi fraza cu „Wenn...", numeri o virgulă și pui <strong>dann</strong> + verbul. „<strong>Wenn</strong> es nicht <strong>funktioniert</strong>, <strong>dann ruf</strong> mich an!" Așa dai instrucțiuni clare, ca un adevărat IT-Support. 💚</div>
                </div>
            </div>
        </div>
    </div>

    <!-- 3: Situații practice -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>🎭 4. Situații practice (cele mai frecvente probleme)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-3')" id="btn-audio-3">▶</button>
                    <audio id="audio-3" preload="none"><source src="audio/04-situatii.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="theory-box"><h4>🖥️ Calculatorul nu pornește — Der Computer startet nicht</h4>
                <p class="de"><em>„Mein Computer startet nicht." — „Wenn er nicht startet, dann prüf zuerst das Kabel und den Stecker."</em></p>
                <p class="ro">Expresii: <strong>startet nicht</strong> (nu pornește) · <strong>das Kabel prüfen</strong> (a verifica cablul) · <strong>der Stecker</strong> (ștecărul)</p>
            </div>
            <div class="theory-box"><h4>🧊 Programul s-a blocat — Das Programm ist abgestürzt</h4>
                <p class="de"><em>„Das Programm reagiert nicht mehr." — „Wenn es abstürzt, dann starte den Computer neu."</em></p>
                <p class="ro">Expresii: <strong>reagiert nicht mehr</strong> (nu mai reacționează) · <strong>abstürzen</strong> (a se bloca / a crăpa) · <strong>neu starten</strong> (a reporni)</p>
            </div>
            <div class="theory-box"><h4>📶 Nu merge internetul — Das Internet geht nicht</h4>
                <p class="de"><em>„Ich habe kein Internet." — „Wenn das Internet nicht geht, dann starte den Router neu."</em></p>
                <p class="ro">Expresii: <strong>kein Internet haben</strong> (a nu avea internet) · <strong>geht nicht</strong> (nu merge) · <strong>den Router neu starten</strong> (a reporni routerul)</p>
            </div>
            <div class="theory-box"><h4>⚠️ Mesaj de eroare — Eine Fehlermeldung erscheint</h4>
                <p class="de"><em>„Es kommt eine Fehlermeldung." — „Was steht da genau? Lies mir die Meldung bitte vor."</em></p>
                <p class="ro">Expresii: <strong>eine Fehlermeldung</strong> (un mesaj de eroare) · <strong>was steht da?</strong> (ce scrie acolo?) · <strong>vorlesen</strong> (a citi cu voce tare)</p>
            </div>
            <div class="theory-box"><h4>📞 Suni la IT-Support — Du rufst den IT-Support an</h4>
                <p class="de"><em>„Können Sie mir bitte helfen? Mein PC ist abgestürzt." — „Klar. Wenn nichts hilft, kommt ein Techniker vorbei."</em></p>
                <p class="ro">Expresii: <strong>Können Sie mir helfen?</strong> (Mă puteți ajuta?) · <strong>den IT-Support anrufen</strong> (a suna la IT-Support) · <strong>ein Techniker kommt vorbei</strong> (vine un tehnician)</p>
            </div>
        </div>
    </div>

    <!-- 4: Expresii utile -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>💬 5. Expresii utile (IT-Support)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-4')" id="btn-audio-4">▶</button>
                    <audio id="audio-4" preload="none"><source src="audio/05-expresii.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>
            <table class="grammar-table">
                <thead><tr><th>Expresie (DE)</th><th>Traducere RO</th></tr></thead>
                <tbody>
                    <tr><td class="verb">Mein Computer funktioniert nicht.</td><td>Calculatorul meu nu merge.</td></tr>
                    <tr><td class="verb">Der PC reagiert nicht mehr.</td><td>Calculatorul nu mai reacționează.</td></tr>
                    <tr><td class="verb">Können Sie mir bitte helfen?</td><td>Mă puteți ajuta, vă rog?</td></tr>
                    <tr><td class="verb">Haben Sie es schon neu gestartet?</td><td>L-ați repornit deja?</td></tr>
                    <tr><td class="verb">Wenn nichts hilft, ruf den Support an.</td><td>Dacă nimic nu ajută, sună la suport.</td></tr>
                    <tr><td class="verb">Es kommt eine Fehlermeldung.</td><td>Apare un mesaj de eroare.</td></tr>
                    <tr><td class="verb">Jetzt funktioniert es wieder!</td><td>Acum merge din nou!</td></tr>
                    <tr><td class="verb">Das Problem ist gelöst.</td><td>Problema e rezolvată.</td></tr>
                </tbody>
            </table>
            <div class="andreea-note">
                <img class="andreea-note-avatar" src="images/annette.png" alt="Annette">
                <div class="andreea-note-content">
                    <div class="speaker">Annette</div>
                    <div class="text">Cu „Können Sie mir bitte helfen?", „Mein PC reagiert nicht mehr" și o propoziție bună cu „Wenn..., dann..." te descurci la orice IT-Support. Acum ascultă dialogul cu Herr Wolf — vei vedea cum trece Andreea de la panică la „Jetzt funktioniert es wieder!". Și cu asta închidem seria Computer &amp; Büro — bravo ție! 💚</div>
                </div>
            </div>
        </div>
    </div>
`;

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('theory-container');
    if (container) container.innerHTML = theoryHTML;
});
