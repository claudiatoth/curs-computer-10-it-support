// ============================================
// VERB-KONJUGATION - Computer & Büro Teil 10: IT-Support & Fehler beheben (A2/B1)
// Claudia Toth · verbe pentru probleme tehnice · PONS-verified
// Präteritum = IMPERFECT. Perfekt = timp vorbit. Paletă v2.
// ============================================

const verbsData = [
    {
        infinitiv: 'abstürzen', ro: 'a se bloca / a crăpa (programul)', type: 'weak', aux: 'sein',
        praesens: [
            { p: 'ich', f: 'stürze ... ab', ro: 'mă blochez (rar pt persoane)' },
            { p: 'du', f: 'stürzt ... ab', ro: 'te blochezi' },
            { p: 'er/sie/es', f: 'stürzt ... ab', ro: 'se blochează' },
            { p: 'wir', f: 'stürzen ... ab', ro: 'ne blocăm' },
            { p: 'ihr', f: 'stürzt ... ab', ro: 'vă blocați' },
            { p: 'sie/Sie', f: 'stürzen ... ab', ro: 'se blochează / vă blocați' }
        ],
        praeteritum: [
            { p: 'ich', f: 'stürzte ... ab', ro: 'mă blocam' },
            { p: 'du', f: 'stürztest ... ab', ro: 'te blocai' },
            { p: 'er/sie/es', f: 'stürzte ... ab', ro: 'se bloca' },
            { p: 'wir', f: 'stürzten ... ab', ro: 'ne blocam' },
            { p: 'ihr', f: 'stürztet ... ab', ro: 'vă blocați' },
            { p: 'sie/Sie', f: 'stürzten ... ab', ro: 'se blocau' }
        ],
        perfekt: 'der Computer ist abgestürzt', perfektRo: 'calculatorul s-a blocat',
        notes: 'Verb regulat SEPARABIL (ab-) DAR formează Perfekt cu „sein" (schimbare de stare): „Der PC IST abgestürzt." Se folosește mai ales la persoana a III-a (computerul/programul). Perfekt: ab-ge-stürzt.'
    },
    {
        infinitiv: 'herunterfahren', ro: 'a închide (corect) calculatorul', type: 'strong', aux: 'haben',
        praesens: [
            { p: 'ich', f: 'fahre ... herunter', ro: 'închid' },
            { p: 'du', f: 'fährst ... herunter', ro: 'închizi' },
            { p: 'er/sie/es', f: 'fährt ... herunter', ro: 'închide' },
            { p: 'wir', f: 'fahren ... herunter', ro: 'închidem' },
            { p: 'ihr', f: 'fahrt ... herunter', ro: 'închideți' },
            { p: 'sie/Sie', f: 'fahren ... herunter', ro: 'închid / închideți' }
        ],
        praeteritum: [
            { p: 'ich', f: 'fuhr ... herunter', ro: 'închideam' },
            { p: 'du', f: 'fuhrst ... herunter', ro: 'închideai' },
            { p: 'er/sie/es', f: 'fuhr ... herunter', ro: 'închidea' },
            { p: 'wir', f: 'fuhren ... herunter', ro: 'închideam (noi)' },
            { p: 'ihr', f: 'fuhrt ... herunter', ro: 'închideați' },
            { p: 'sie/Sie', f: 'fuhren ... herunter', ro: 'închideau' }
        ],
        perfekt: 'ich habe den Computer heruntergefahren', perfektRo: 'am închis calculatorul',
        notes: 'Verb TARE SEPARABIL (herunter- + fahren → fuhr → gefahren). Atenție la a→ä în Präsens: du fährst herunter, er fährt herunter. Opusul: „hochfahren" (a porni calculatorul). Perfekt: herunter-ge-fahren.'
    },
    {
        infinitiv: 'reparieren', ro: 'a repara', type: 'weak', aux: 'haben',
        praesens: [
            { p: 'ich', f: 'repariere', ro: 'repar' },
            { p: 'du', f: 'reparierst', ro: 'repari' },
            { p: 'er/sie/es', f: 'repariert', ro: 'repară' },
            { p: 'wir', f: 'reparieren', ro: 'reparăm' },
            { p: 'ihr', f: 'repariert', ro: 'reparați' },
            { p: 'sie/Sie', f: 'reparieren', ro: 'repară / reparați' }
        ],
        praeteritum: [
            { p: 'ich', f: 'reparierte', ro: 'reparam' },
            { p: 'du', f: 'repariertest', ro: 'reparai' },
            { p: 'er/sie/es', f: 'reparierte', ro: 'repara' },
            { p: 'wir', f: 'reparierten', ro: 'reparam (noi)' },
            { p: 'ihr', f: 'repariertet', ro: 'reparați' },
            { p: 'sie/Sie', f: 'reparierten', ro: 'reparau' }
        ],
        perfekt: 'der Techniker hat den Drucker repariert', perfektRo: 'tehnicianul a reparat imprimanta',
        notes: 'Verb regulat în -ieren. ATENȚIE: verbele în -ieren NU primesc „ge-" la Perfekt → repariert (nu „gerepariert"). Sinonim mai general: „in Ordnung bringen".'
    },
    {
        infinitiv: 'lösen', ro: 'a rezolva', type: 'weak', aux: 'haben',
        praesens: [
            { p: 'ich', f: 'löse', ro: 'rezolv' },
            { p: 'du', f: 'löst', ro: 'rezolvi' },
            { p: 'er/sie/es', f: 'löst', ro: 'rezolvă' },
            { p: 'wir', f: 'lösen', ro: 'rezolvăm' },
            { p: 'ihr', f: 'löst', ro: 'rezolvați' },
            { p: 'sie/Sie', f: 'lösen', ro: 'rezolvă / rezolvați' }
        ],
        praeteritum: [
            { p: 'ich', f: 'löste', ro: 'rezolvam' },
            { p: 'du', f: 'löstest', ro: 'rezolvai' },
            { p: 'er/sie/es', f: 'löste', ro: 'rezolva' },
            { p: 'wir', f: 'lösten', ro: 'rezolvam (noi)' },
            { p: 'ihr', f: 'löstet', ro: 'rezolvați' },
            { p: 'sie/Sie', f: 'lösten', ro: 'rezolvau' }
        ],
        perfekt: 'ich habe das Problem gelöst', perfektRo: 'am rezolvat problema',
        notes: 'Verb regulat → Perfekt cu „ge-": gelöst. Stem-ul se termină în -s, deci du/er au doar -t (du löst, er löst). „das Problem lösen" (a rezolva problema) · „eine Aufgabe lösen" (a rezolva o sarcină).'
    },
    {
        infinitiv: 'anrufen', ro: 'a suna (pe cineva)', type: 'strong', aux: 'haben',
        praesens: [
            { p: 'ich', f: 'rufe ... an', ro: 'sun' },
            { p: 'du', f: 'rufst ... an', ro: 'suni' },
            { p: 'er/sie/es', f: 'ruft ... an', ro: 'sună' },
            { p: 'wir', f: 'rufen ... an', ro: 'sunăm' },
            { p: 'ihr', f: 'ruft ... an', ro: 'sunați' },
            { p: 'sie/Sie', f: 'rufen ... an', ro: 'sună / sunați' }
        ],
        praeteritum: [
            { p: 'ich', f: 'rief ... an', ro: 'sunam' },
            { p: 'du', f: 'riefst ... an', ro: 'sunai' },
            { p: 'er/sie/es', f: 'rief ... an', ro: 'suna' },
            { p: 'wir', f: 'riefen ... an', ro: 'sunam (noi)' },
            { p: 'ihr', f: 'rieft ... an', ro: 'sunați' },
            { p: 'sie/Sie', f: 'riefen ... an', ro: 'sunau' }
        ],
        perfekt: 'ich habe den IT-Support angerufen', perfektRo: 'am sunat la IT-Support',
        notes: 'Verb TARE SEPARABIL (an- + rufen → rief → gerufen). 🚨 CERE ACUZATIV, nu Dativ: „jemanden anrufen" (Ich rufe DICH an, NU „dir anrufen"). Perfekt: an-ge-rufen.'
    }
];

function buildVerbs() {
    const container = document.getElementById('verbs-container');
    if (!container) return;
    let html = `
        <div class="theory-box" style="background:#F5F0E8;border-left:4px solid #D4A574">
            <h4>📌 Verbe pentru probleme tehnice</h4>
            <p><strong>abstürzen</strong> e regulat SEPARABIL cu Perfekt + SEIN (ist abgestürzt). <strong>herunterfahren</strong> e TARE SEPARABIL (a→ä: fährt herunter). <strong>reparieren</strong> e în -ieren (Perfekt fără ge-: repariert). <strong>lösen</strong> e regulat (gelöst). <strong>anrufen</strong> e TARE SEPARABIL și cere ACUZATIV (ich rufe dich an).</p>
            <p style="margin-top:8px"><strong>Reamintire:</strong> Präteritum = IMPERFECT (reparam, rezolvam). Perfekt = perfect compus (am reparat, am rezolvat).</p>
        </div>
    `;
    verbsData.forEach((v, idx) => {
        const auxColor = v.aux === 'sein' ? '#D4A574' : '#10b981';
        const typeColor = v.type === 'strong' ? '#dc2626' : '#10b981';
        const typeLabel = v.type === 'strong' ? 'TARE (neregulat)' : 'REGULAT';
        let praesensRows = ''; v.praesens.forEach(r => { praesensRows += `<tr><td><strong>${r.p}</strong></td><td class="verb">${r.f}</td><td class="ro-text">${r.ro}</td></tr>`; });
        let praeteritumRows = ''; v.praeteritum.forEach(r => { praeteritumRows += `<tr><td><strong>${r.p}</strong></td><td class="verb">${r.f}</td><td class="ro-text">${r.ro}</td></tr>`; });
        html += `
            <div class="sub-section">
                <div class="sub-section-header" onclick="toggleSubSection(${idx + 100})">
                    <span><strong>${idx + 1}. ${v.infinitiv}</strong> — <em>${v.ro}</em>
                        <span style="background:${typeColor};color:white;padding:2px 8px;border-radius:4px;font-size:0.8rem;margin-left:8px">${typeLabel}</span>
                        <span style="background:${auxColor};color:white;padding:2px 8px;border-radius:4px;font-size:0.8rem;margin-left:4px">Perfekt + ${v.aux}</span>
                    </span>
                    <span class="sub-arrow">▼</span>
                </div>
                <div class="sub-section-content" id="sub-section-${idx + 100}">
                    <h4 style="color:#065f46;margin-bottom:8px">📘 Präsens</h4>
                    <table class="grammar-table"><thead><tr><th>Pronume</th><th>Formă</th><th>Traducere RO</th></tr></thead><tbody>${praesensRows}</tbody></table>
                    <h4 style="color:#065f46;margin:14px 0 8px">📗 Präteritum (imperfect / timp scris)</h4>
                    <table class="grammar-table"><thead><tr><th>Pronume</th><th>Formă</th><th>Traducere RO</th></tr></thead><tbody>${praeteritumRows}</tbody></table>
                    <h4 style="color:#065f46;margin:14px 0 8px">📕 Perfekt (timp vorbit)</h4>
                    <div class="example-box"><div class="de">${v.perfekt}</div><div class="ro">${v.perfektRo}</div></div>
                    <div class="theory-box" style="margin-top:12px;background:#FBF7EF"><p><strong>📌 Notă:</strong> ${v.notes}</p></div>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
}

buildVerbs();
