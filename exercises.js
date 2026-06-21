// ============================================
// EXERCIȚII - Computer & Büro Teil 10: IT-Support & Fehler beheben (A2/B1)
// Claudia Toth · 5 exerciții interactive
// ============================================

function normalizeAnswer(str) {
    return (str || '').toString().toLowerCase().trim()
        .replace(/ß/g, 'ss').replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/\s+/g, ' ').replace(/[.!?;:]/g, '');
}
function shuffleArr(arr) { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
function checkTextItems(items, prefix) {
    let correct = 0;
    items.forEach(item => {
        const input = document.getElementById(`${prefix}-${item.id}`), fb = document.getElementById(`${prefix}-f${item.id}`);
        if (!input || !fb) return;
        const ua = normalizeAnswer(input.value);
        const valid = [item.answer, ...(item.accept || [])].map(normalizeAnswer);
        if (ua && valid.includes(ua)) { fb.className = 'feedback correct'; fb.textContent = `✓ Corect: ${item.answer}`; correct++; }
        else { fb.className = 'feedback incorrect'; fb.textContent = `✗ Corect: ${item.answer}`; }
    });
    return { correct, total: items.length };
}
const mcPicked = {};
function buildMC(prefix, items, instruction) {
    const container = document.getElementById(prefix + '-container');
    if (!container) return;
    let html = `<div class="exercise-instruction">${instruction}</div>`;
    items.forEach((item, idx) => {
        let opts = '';
        item.options.forEach((opt, oi) => { opts += `<div class="mistake-opt" onclick="mcPick('${prefix}','${item.id}',${oi},this)"><span class="mistake-opt-letter">${String.fromCharCode(65 + oi)}.</span> ${opt}</div>`; });
        html += `<div class="exercise-item"><span class="exercise-number">${idx + 1}</span><div class="input-group"><label>${item.q}</label><div class="mistake-options" id="${prefix}-opts-${item.id}">${opts}</div></div><div class="feedback" id="${prefix}-f${item.id}"></div></div>`;
    });
    container.innerHTML = html;
}
function mcPick(prefix, itemId, optIdx, el) { mcPicked[prefix + '-' + itemId] = optIdx; const c = document.getElementById(`${prefix}-opts-${itemId}`); if (c) c.querySelectorAll('.mistake-opt').forEach(o => o.classList.remove('mistake-picked')); el.classList.add('mistake-picked'); }
function checkMC(prefix, items) {
    let correct = 0;
    items.forEach(item => {
        const fb = document.getElementById(`${prefix}-f${item.id}`);
        const pick = mcPicked[prefix + '-' + item.id], txt = item.options[item.correct];
        if (pick === item.correct) { fb.className = 'feedback correct'; fb.textContent = `✓ Corect: ${txt} — ${item.explanation}`; correct++; }
        else { fb.className = 'feedback incorrect'; fb.textContent = `✗ Corect: ${txt} — ${item.explanation}`; }
    });
    return { correct, total: items.length };
}
const dmState = {};
function buildClickMatch(prefix, pairs, instruction, deTitle, roTitle) {
    const container = document.getElementById(prefix + '-container');
    if (!container) return;
    dmState[prefix] = { matched: {}, selDE: null, selRO: null, pairs };
    const shuffledRO = shuffleArr(pairs.map(p => p.ro));
    let deHTML = ''; pairs.forEach(p => { deHTML += `<div class="dm-tile dm-de" data-de="${p.de}" onclick="dmClickDE('${prefix}',this)">${p.de}</div>`; });
    let roHTML = ''; shuffledRO.forEach(ro => { roHTML += `<div class="dm-tile dm-ro" data-ro="${ro}" onclick="dmClickRO('${prefix}',this)">${ro}</div>`; });
    container.innerHTML = `<div class="exercise-instruction">${instruction}</div>
        <div class="dm-board"><div class="dm-col"><div class="dm-col-title">${deTitle}</div>${deHTML}</div><div class="dm-col"><div class="dm-col-title">${roTitle}</div>${roHTML}</div></div>
        <div class="dm-status" id="${prefix}-status">Perechi formate: 0 / ${pairs.length}</div>`;
}
function dmClickDE(prefix, el) { if (el.classList.contains('dm-correct')) return; document.querySelectorAll(`#${prefix}-container .dm-de`).forEach(t => t.classList.remove('dm-selected')); el.classList.add('dm-selected'); dmState[prefix].selDE = el; dmTry(prefix); }
function dmClickRO(prefix, el) { if (el.classList.contains('dm-correct')) return; document.querySelectorAll(`#${prefix}-container .dm-ro`).forEach(t => t.classList.remove('dm-selected')); el.classList.add('dm-selected'); dmState[prefix].selRO = el; dmTry(prefix); }
function dmTry(prefix) {
    const s = dmState[prefix];
    if (!s.selDE || !s.selRO) return;
    const de = s.selDE.dataset.de, ro = s.selRO.dataset.ro;
    const pair = s.pairs.find(p => p.de === de);
    if (pair && pair.ro === ro) { s.selDE.classList.add('dm-correct'); s.selRO.classList.add('dm-correct'); s.selDE.classList.remove('dm-selected'); s.selRO.classList.remove('dm-selected'); s.matched[de] = ro; }
    else { const a = s.selDE, b = s.selRO; a.classList.add('dm-wrong'); b.classList.add('dm-wrong'); setTimeout(() => { a.classList.remove('dm-wrong', 'dm-selected'); b.classList.remove('dm-wrong', 'dm-selected'); }, 700); }
    s.selDE = null; s.selRO = null;
    const st = document.getElementById(`${prefix}-status`); if (st) st.textContent = `Perechi formate: ${Object.keys(s.matched).length} / ${s.pairs.length}`;
}

// ============================================
// EX1: Lückentext
// ============================================
const ex1Items = [
    { id: 'a', before: 'Mein Computer hat ein', after: ', er startet nicht. (problemă)', answer: 'Problem' },
    { id: 'b', before: 'Es erscheint eine', after: 'auf dem Bildschirm. (mesaj de eroare)', answer: 'Fehlermeldung' },
    { id: 'c', before: 'Ich rufe den', after: 'an, er kann mir helfen. (suportul tehnic)', answer: 'IT-Support', accept: ['IT Support', 'Support'] },
    { id: 'd', before: 'Oft hilft schon ein', after: '. (repornire)', answer: 'Neustart' },
    { id: 'e', before: 'Wenn das Programm', after: ', starte ich den PC neu. (a se bloca — Präsens, es)', answer: 'abstürzt' },
    { id: 'f', before: 'Der', after: 'bleibt schwarz, ich sehe nichts. (ecranul)', answer: 'Bildschirm' },
    { id: 'g', before: 'Prüf bitte, ob das', after: 'richtig steckt. (cablul)', answer: 'Kabel' },
    { id: 'h', before: 'Der Techniker', after: 'den Drucker. (a repara — Präsens, er)', answer: 'repariert' },
    { id: 'i', before: 'Wenn nichts hilft,', after: 'du den Support an. (a suna — Präsens, du)', answer: 'rufst' },
    { id: 'j', before: 'Super, das Problem ist', after: '! (rezolvat)', answer: 'gelöst' }
];
function buildEx1() {
    const container = document.getElementById('ex1-container');
    if (!container) return;
    let html = `<div class="exercise-instruction"><strong>✍️ Completează cu cuvântul potrivit.</strong><br>Cuvinte: <em>Problem · Fehlermeldung · IT-Support · Neustart · abstürzt · Bildschirm · Kabel · repariert · rufst · gelöst</em></div>`;
    ex1Items.forEach((item, idx) => { html += `<div class="exercise-item"><span class="exercise-number">${idx + 1}</span><div class="input-group"><label>${item.before} <input type="text" id="ex1-${item.id}" placeholder="..." style="width:175px;display:inline-block;"> ${item.after}</label></div><div class="feedback" id="ex1-f${item.id}"></div></div>`; });
    container.innerHTML = html;
}
function checkEx1() { return checkTextItems(ex1Items, 'ex1'); }
function resetEx1() { buildEx1(); const s = document.getElementById('score-1'); if (s) s.textContent = ''; }

// ============================================
// EX2: Multiple Choice (incl. Wenn-Sätze)
// ============================================
const ex2Items = [
    { id: 'a', q: 'Der Computer startet nicht. Was prüfst du zuerst?', options: ['das Kabel und den Stecker', 'die Kamera', 'den Chat'], correct: 0, explanation: 'Întâi verifici cablul și ștecărul (das Kabel und den Stecker).' },
    { id: 'b', q: 'Welcher Satz ist richtig? (verbul după „wenn" la final)', options: ['Wenn der PC nicht startet, drück den Knopf.', 'Wenn startet der PC nicht, drück den Knopf.', 'Wenn der PC startet nicht, drück den Knopf.'], correct: 0, explanation: 'După „wenn", verbul (startet) merge la FINAL: Wenn der PC nicht startet, ...' },
    { id: 'c', q: 'Was bedeutet „Das Programm ist abgestürzt"?', options: ['Programul s-a blocat/crăpat', 'Programul s-a actualizat', 'Programul s-a deschis'], correct: 0, explanation: 'abstürzen = a se bloca / a crăpa (programul).' },
    { id: 'd', q: 'Welches Wort passt? „Wenn nichts hilft, ___ den IT-Support an."', options: ['ruf', 'rufen', 'angerufen'], correct: 0, explanation: 'Imperativ: „ruf ... an" (a suna). anrufen e separabil → „an" la final.' },
    { id: 'e', q: 'Wann benutzt man „wann"?', options: ['nur in Fragen: „Wann kommt der Techniker?"', 'als Bedingung: „Wann es nicht geht..."', 'immer statt „wenn"'], correct: 0, explanation: '„wann" e DOAR pentru întrebări (când?). Pentru condiție folosești „wenn".' }
];
function buildEx2() { buildMC('ex2', ex2Items, '<strong>🎯 Alege varianta corectă.</strong>'); }
function checkEx2() { return checkMC('ex2', ex2Items); }
function resetEx2() { ex2Items.forEach(i => delete mcPicked['ex2-' + i.id]); buildEx2(); const s = document.getElementById('score-2'); if (s) s.textContent = ''; }

// ============================================
// EX3: Match vocabular DE ↔ RO
// ============================================
const ex3Pairs = [
    { de: 'das Problem', ro: 'problema' },
    { de: 'der Fehler', ro: 'eroarea' },
    { de: 'die Fehlermeldung', ro: 'mesajul de eroare' },
    { de: 'der IT-Support', ro: 'suportul tehnic' },
    { de: 'der Techniker', ro: 'tehnicianul' },
    { de: 'der Neustart', ro: 'repornirea' },
    { de: 'das Kabel', ro: 'cablul' },
    { de: 'der Stecker', ro: 'ștecărul' },
    { de: 'die Lösung', ro: 'soluția' },
    { de: 'kaputt', ro: 'stricat' }
];
function buildEx3() { buildClickMatch('ex3', ex3Pairs, '<strong>🔗 Potrivește termenul cu traducerea.</strong><br>Click pe cuvântul german, apoi pe traducerea corectă.', '🇩🇪 Begriff', '🇷🇴 Traducere'); }
function checkEx3() { const s = dmState['ex3']; return { correct: Object.keys(s.matched).length, total: ex3Pairs.length }; }
function resetEx3() { buildEx3(); const s = document.getElementById('score-3'); if (s) s.textContent = ''; }

// ============================================
// EX4: Traduceri RO → DE
// ============================================
const ex4Items = [
    { id: 'a', q: 'Calculatorul meu nu mai reacționează.', answer: 'Mein Computer reagiert nicht mehr.', accept: ['Mein PC reagiert nicht mehr.'] },
    { id: 'b', q: 'Mă puteți ajuta, vă rog?', answer: 'Können Sie mir bitte helfen?', accept: ['Koennen Sie mir bitte helfen?'] },
    { id: 'c', q: 'L-ați repornit deja?', answer: 'Haben Sie es schon neu gestartet?' },
    { id: 'd', q: 'Dacă nimic nu ajută, sună la suport.', answer: 'Wenn nichts hilft, ruf den Support an.', accept: ['Wenn nichts hilft, dann ruf den Support an.'] },
    { id: 'e', q: 'Apare un mesaj de eroare.', answer: 'Es kommt eine Fehlermeldung.', accept: ['Eine Fehlermeldung erscheint.'] },
    { id: 'f', q: 'Acum merge din nou!', answer: 'Jetzt funktioniert es wieder!' },
    { id: 'g', q: 'Dacă programul se blochează, repornesc calculatorul.', answer: 'Wenn das Programm abstürzt, starte ich den Computer neu.', accept: ['Wenn das Programm abstürzt, dann starte ich den Computer neu.'] },
    { id: 'h', q: 'Problema e rezolvată.', answer: 'Das Problem ist gelöst.' }
];
function buildEx4() {
    const container = document.getElementById('ex4-container');
    if (!container) return;
    let html = `<div class="exercise-instruction"><strong>🇷🇴→🇩🇪 Tradu în germană.</strong><br>Scrie propoziția în germană. (Diferențele mici de topică/articol sunt acceptate; punctul final e opțional — compară cu varianta-model.)</div>`;
    ex4Items.forEach((item, idx) => { html += `<div class="exercise-item"><span class="exercise-number">${idx + 1}</span><div class="input-group"><label>🇷🇴 ${item.q}</label><input type="text" id="ex4-${item.id}" placeholder="Scrie în germană..."></div><div class="feedback" id="ex4-f${item.id}"></div></div>`; });
    container.innerHTML = html;
}
function checkEx4() { return checkTextItems(ex4Items, 'ex4'); }
function resetEx4() { buildEx4(); const s = document.getElementById('score-4'); if (s) s.textContent = ''; }

// ============================================
// EX5: Potrivește situația cu expresia-cheie
// ============================================
const ex5Pairs = [
    { de: 'Prüf das Kabel und den Stecker.', ro: 'Calculatorul nu pornește' },
    { de: 'Starte den Computer neu.', ro: 'Programul s-a blocat' },
    { de: 'Starte den Router neu.', ro: 'Nu merge internetul' },
    { de: 'Lies mir die Meldung vor.', ro: 'Apare un mesaj de eroare' },
    { de: 'Ruf den IT-Support an.', ro: 'Nimic nu a ajutat' }
];
function buildEx5() { buildClickMatch('ex5', ex5Pairs, '<strong>🎭 Potrivește expresia cu situația.</strong><br>Click pe expresia germană, apoi pe situația potrivită.', '🇩🇪 Expresie', '🛠️ Situație'); }
function checkEx5() { const s = dmState['ex5']; return { correct: Object.keys(s.matched).length, total: ex5Pairs.length }; }
function resetEx5() { buildEx5(); const s = document.getElementById('score-5'); if (s) s.textContent = ''; }

document.addEventListener('DOMContentLoaded', function () { buildEx1(); buildEx2(); buildEx3(); buildEx4(); buildEx5(); });
