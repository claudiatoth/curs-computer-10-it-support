// ============================================
// DIALOGS.JS — IT-Support & Fehler beheben: dialog animat
// Andreea ↔ Herr Wolf (IT-Support) · calculator blocat înainte de ședință: reparare pas cu pas
// sync pe audio.currentTime + timer fallback · fără TTS
// ============================================

const dialog1Data = {
    id: 'dialog1',
    title: 'Mein Computer streikt!',
    context: 'Andreei i s-a blocat calculatorul exact înainte de o ședință importantă. Sună la IT-Support, iar Herr Wolf o ajută calm, pas cu pas, până când totul merge din nou.',
    audioFile: 'audio/dialog-01.mp3',
    totalDuration: 104,
    replici: [
        { id: 1, speaker: 'andreea', start: 0,  duration: 8, de: 'Guten Tag, hier ist Andreea. Mein Computer reagiert nicht mehr. Können Sie mir bitte helfen?', ro: 'Bună ziua, sunt Andreea. Calculatorul meu nu mai reacționează. Mă puteți ajuta, vă rog?' },
        { id: 2, speaker: 'wolf', start: 8,  duration: 8, de: 'Guten Tag, Andreea. Kein Problem, das kriegen wir hin. Haben Sie es schon neu gestartet?', ro: 'Bună ziua, Andreea. Nicio problemă, rezolvăm noi. L-ați repornit deja?' },
        { id: 3, speaker: 'andreea', start: 16, duration: 7, de: 'Noch nicht. Der Bildschirm ist schwarz und nichts passiert.', ro: 'Încă nu. Ecranul e negru și nu se întâmplă nimic.' },
        { id: 4, speaker: 'wolf', start: 23, duration: 9, de: 'Gut. Wenn der Bildschirm schwarz bleibt, dann drücken Sie den Knopf fünf Sekunden lang.', ro: 'Bine. Dacă ecranul rămâne negru, atunci apăsați butonul timp de cinci secunde.' },
        { id: 5, speaker: 'andreea', start: 32, duration: 7, de: 'Okay... der Computer geht aus. Soll ich ihn wieder einschalten?', ro: 'Bine... calculatorul se stinge. Să-l pornesc din nou?' },
        { id: 6, speaker: 'wolf', start: 39, duration: 8, de: 'Genau. Schalten Sie ihn wieder ein und warten Sie eine Minute. Kommt eine Fehlermeldung?', ro: 'Exact. Porniți-l din nou și așteptați un minut. Apare vreun mesaj de eroare?' },
        { id: 7, speaker: 'andreea', start: 47, duration: 8, de: 'Ja, eine Meldung erscheint. Es steht: „Ein Programm reagiert nicht."', ro: 'Da, apare un mesaj. Scrie: „Un program nu reacționează."' },
        { id: 8, speaker: 'wolf', start: 55, duration: 9, de: 'Alles klar. Wenn ein Programm abstürzt, dann schließen Sie es einfach und öffnen es neu.', ro: 'În regulă. Dacă un program se blochează, atunci îl închideți pur și simplu și îl deschideți din nou.' },
        { id: 9, speaker: 'andreea', start: 64, duration: 7, de: 'Moment... ich schließe es. Jetzt funktioniert es wieder!', ro: 'O clipă... îl închid. Acum merge din nou!' },
        { id: 10, speaker: 'wolf', start: 71, duration: 8, de: 'Sehr gut! Und wenn das noch einmal passiert, dann starten Sie den Computer einfach neu.', ro: 'Foarte bine! Și dacă se mai întâmplă o dată, atunci reporniți pur și simplu calculatorul.' },
        { id: 11, speaker: 'andreea', start: 79, duration: 7, de: 'Vielen Dank, Herr Wolf! Sie haben mir wirklich geholfen. Meine Besprechung kann beginnen.', ro: 'Mulțumesc mult, domnule Wolf! Chiar m-ați ajutat. Ședința mea poate să înceapă.' },
        { id: 12, speaker: 'wolf', start: 86, duration: 8, de: 'Gern geschehen! Wenn wieder etwas ist, dann rufen Sie mich einfach an. Schönen Tag noch!', ro: 'Cu plăcere! Dacă mai e ceva, atunci sunați-mă pur și simplu. O zi frumoasă în continuare!' }
    ]
};

const dialogsById = { dialog1: dialog1Data };

function speakerLabel(s) { return s === 'andreea' ? '🇷🇴 Andreea' : '🛠️ Herr Wolf'; }
function avatarHTML(speaker) {
    if (speaker === 'andreea') return `<div class="character-avatar"><img src="images/andreea.png" alt="Andreea"></div>`;
    return `<div class="character-avatar wolf-avatar">🛠️</div>`;
}

function buildAnimatedDialog(data) {
    const repliciHTML = data.replici.map(r => `
        <div class="reply-item" data-reply-id="${r.id}" data-speaker="${r.speaker}">
            <div class="reply-header">
                <span class="reply-num">${r.id}.</span>
                <span class="reply-speaker speaker-${r.speaker}">${speakerLabel(r.speaker)}</span>
                <button class="btn-replay-reply" onclick="replayReply('${data.id}', ${r.id})">🔁</button>
            </div>
            <div class="reply-de">${r.de}</div>
            <div class="reply-ro">${r.ro}</div>
        </div>
    `).join('');

    return `
        <div class="animated-dialog" id="dialog-${data.id}" data-dialog-id="${data.id}">
            <div class="dialog-context"><strong>📍 Situația:</strong> ${data.context}</div>
            <div class="stage-container">
                <div class="stage">
                    <div class="character-wrapper character-andreea" data-speaker="andreea">
                        ${avatarHTML('andreea')}
                        <div class="character-label">Andreea 🇷🇴</div>
                        <div class="speech-bubble speech-andreea" id="bubble-${data.id}-andreea"><div class="bubble-de"></div><div class="bubble-ro"></div></div>
                    </div>
                    <div class="character-wrapper character-wolf" data-speaker="wolf">
                        ${avatarHTML('wolf')}
                        <div class="character-label">Herr Wolf 🛠️</div>
                        <div class="speech-bubble speech-wolf" id="bubble-${data.id}-wolf"><div class="bubble-de"></div><div class="bubble-ro"></div></div>
                    </div>
                </div>
                <div class="dialog-controls">
                    <button class="btn-dialog btn-play" id="btn-play-${data.id}" onclick="playDialog('${data.id}')">▶️ Pornește</button>
                    <button class="btn-dialog btn-pause" id="btn-pause-${data.id}" onclick="pauseDialog('${data.id}')" disabled>⏸ Pauză</button>
                    <button class="btn-dialog btn-reset" id="btn-reset-${data.id}" onclick="resetDialog('${data.id}')">🔄 Reset</button>
                </div>
                <div class="dialog-progress">
                    <div class="progress-bar" id="progress-${data.id}"><div class="progress-fill" id="progress-fill-${data.id}"></div></div>
                    <div class="progress-text" id="progress-text-${data.id}">Replica 0 / ${data.replici.length}</div>
                </div>
                <audio id="audio-${data.id}" preload="none"><source src="${data.audioFile}" type="audio/mpeg"></audio>
            </div>
            <details class="transcript-details">
                <summary>📜 Vezi transcriptul complet (bilingv)</summary>
                <div class="transcript-list">${repliciHTML}</div>
            </details>
        </div>
    `;
}

const dialogState = {};
function initDialogState(dialogId) {
    if (!dialogState[dialogId]) {
        dialogState[dialogId] = { isPlaying: false, currentReply: 0, lastDisplayedIdx: -1, mode: null, timeouts: [], timeUpdateHandler: null, endedHandler: null, data: dialogsById[dialogId] };
    }
    return dialogState[dialogId];
}

function playDialog(dialogId) {
    const state = initDialogState(dialogId);
    if (state.isPlaying) return;
    state.isPlaying = true;
    const data = state.data;
    const audio = document.getElementById(`audio-${dialogId}`);
    document.getElementById(`btn-play-${dialogId}`).disabled = true;
    document.getElementById(`btn-pause-${dialogId}`).disabled = false;

    if (audio && !state.timeUpdateHandler) {
        state.timeUpdateHandler = () => {
            if (!state.isPlaying || state.mode === 'timer') return;
            if (audio.currentTime > 0) state.mode = 'audio';
            const t = audio.currentTime;
            let currentIdx = -1;
            for (let i = 0; i < data.replici.length; i++) { if (t >= data.replici[i].start) currentIdx = i; else break; }
            if (currentIdx >= 0 && currentIdx !== state.lastDisplayedIdx) {
                state.lastDisplayedIdx = currentIdx; state.currentReply = currentIdx + 1;
                showReply(dialogId, data.replici[currentIdx]); updateProgress(dialogId);
            }
        };
        audio.addEventListener('timeupdate', state.timeUpdateHandler);
        state.endedHandler = () => { if (state.mode === 'audio') endDialog(dialogId); };
        audio.addEventListener('ended', state.endedHandler);
        audio.addEventListener('error', () => startTimerFallback(dialogId));
    }

    if (audio) {
        if (state.currentReply >= data.replici.length) { try { audio.currentTime = 0; } catch (e) {} state.currentReply = 0; state.lastDisplayedIdx = -1; }
        const p = audio.play();
        if (p && p.catch) p.catch(() => startTimerFallback(dialogId));
        setTimeout(() => { if (state.isPlaying && state.mode !== 'audio' && (audio.paused || !audio.currentTime)) startTimerFallback(dialogId); }, 500);
    } else {
        startTimerFallback(dialogId);
    }
}

function startTimerFallback(dialogId) {
    const state = initDialogState(dialogId);
    if (state.mode) return;
    state.mode = 'timer';
    const data = state.data;
    const startFromReply = state.currentReply;
    const offsetMs = startFromReply > 0 ? data.replici[startFromReply - 1].start * 1000 : 0;
    for (let i = startFromReply; i < data.replici.length; i++) {
        const reply = data.replici[i];
        const delayMs = (reply.start * 1000) - offsetMs;
        const timeout = setTimeout(() => {
            if (!state.isPlaying) return;
            state.lastDisplayedIdx = i; showReply(dialogId, reply); state.currentReply = i + 1; updateProgress(dialogId);
            if (i === data.replici.length - 1) setTimeout(() => endDialog(dialogId), reply.duration * 1000);
        }, delayMs);
        state.timeouts.push(timeout);
    }
}

function showReply(dialogId, reply) {
    const activeChar = document.querySelector(`#dialog-${dialogId} .character-${reply.speaker}`);
    const sameSpeakerContinues = activeChar && activeChar.classList.contains('speaking');
    document.querySelectorAll(`#dialog-${dialogId} .character-wrapper`).forEach(c => { if (c !== activeChar) c.classList.remove('speaking'); });
    if (activeChar) activeChar.classList.add('speaking');
    document.querySelectorAll(`#dialog-${dialogId} .speech-bubble`).forEach(b => { if (!b.id.endsWith('-' + reply.speaker)) b.classList.remove('visible'); });
    const bubble = document.getElementById(`bubble-${dialogId}-${reply.speaker}`);
    if (!bubble) return;
    if (sameSpeakerContinues) {
        bubble.classList.add('text-fading');
        setTimeout(() => { bubble.querySelector('.bubble-de').textContent = reply.de; bubble.querySelector('.bubble-ro').textContent = reply.ro; bubble.classList.remove('text-fading'); }, 180);
    } else {
        bubble.querySelector('.bubble-de').textContent = reply.de; bubble.querySelector('.bubble-ro').textContent = reply.ro; bubble.classList.add('visible');
    }
    document.querySelectorAll(`#dialog-${dialogId} .reply-item`).forEach(r => r.classList.remove('active'));
    const ri = document.querySelector(`#dialog-${dialogId} .reply-item[data-reply-id="${reply.id}"]`);
    if (ri) ri.classList.add('active');
}

function pauseDialog(dialogId) {
    const state = dialogState[dialogId];
    if (!state || !state.isPlaying) return;
    state.isPlaying = false; state.mode = null;
    state.timeouts.forEach(t => clearTimeout(t)); state.timeouts = [];
    const audio = document.getElementById(`audio-${dialogId}`); if (audio) audio.pause();
    document.getElementById(`btn-play-${dialogId}`).disabled = false;
    document.getElementById(`btn-pause-${dialogId}`).disabled = true;
}

function resetDialog(dialogId) {
    pauseDialog(dialogId);
    const state = initDialogState(dialogId);
    state.currentReply = 0; state.lastDisplayedIdx = -1; state.timeouts = [];
    document.querySelectorAll(`#dialog-${dialogId} .character-wrapper`).forEach(c => c.classList.remove('speaking'));
    document.querySelectorAll(`#dialog-${dialogId} .speech-bubble`).forEach(b => b.classList.remove('visible'));
    document.querySelectorAll(`#dialog-${dialogId} .reply-item`).forEach(r => r.classList.remove('active'));
    const audio = document.getElementById(`audio-${dialogId}`); if (audio) { audio.pause(); audio.currentTime = 0; }
    updateProgress(dialogId);
    document.getElementById(`btn-play-${dialogId}`).disabled = false;
    document.getElementById(`btn-pause-${dialogId}`).disabled = true;
}

function endDialog(dialogId) {
    const state = dialogState[dialogId];
    if (!state) return;
    state.isPlaying = false; state.mode = null; state.currentReply = state.data.replici.length; state.timeouts = [];
    document.getElementById(`btn-play-${dialogId}`).disabled = false;
    document.getElementById(`btn-pause-${dialogId}`).disabled = true;
}

function updateProgress(dialogId) {
    const state = dialogState[dialogId];
    if (!state) return;
    const total = state.data.replici.length, pct = total > 0 ? (state.currentReply / total) * 100 : 0;
    const fill = document.getElementById(`progress-fill-${dialogId}`), text = document.getElementById(`progress-text-${dialogId}`);
    if (fill) fill.style.width = pct + '%';
    if (text) text.textContent = `Replica ${state.currentReply} / ${total}`;
}

function replayReply(dialogId, replyId) {
    const data = dialogsById[dialogId];
    const idx = data.replici.findIndex(r => r.id === replyId);
    if (idx < 0) return;
    const reply = data.replici[idx];
    const state = initDialogState(dialogId);
    state.lastDisplayedIdx = -1; showReply(dialogId, reply); state.currentReply = idx + 1; updateProgress(dialogId);
    const audio = document.getElementById(`audio-${dialogId}`);
    if (audio) {
        audio.currentTime = reply.start;
        if (audio.paused) { state.isPlaying = true; audio.play().catch(() => {}); document.getElementById(`btn-play-${dialogId}`).disabled = true; document.getElementById(`btn-pause-${dialogId}`).disabled = false; }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const c = document.getElementById('dialog1-container');
    if (c) c.innerHTML = buildAnimatedDialog(dialog1Data);
});
