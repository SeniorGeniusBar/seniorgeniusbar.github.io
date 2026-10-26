// ======================================================================
// COMMON ICONS GUIDE
//
// This file draws the little icon "chips" shown in the Common Icons
// mini-guide on guides.html and fills in the guide's content. It loads
// AFTER assets/guide-data.js so it can reuse the icon-drawing functions
// (icoGear, icoPlus, icoPencil, icoMic, icoLock, icoWifi, icoSendArrow)
// and the Read Aloud voice picker already defined there.
// ======================================================================

/* ---- New icon-drawing functions not already in guide-data.js ---- */
function icoDotsVertical(cx,cy,scale=1,color='#fff'){
  return `<g transform="translate(${cx},${cy}) scale(${scale})">
    <circle cx="0" cy="-7" r="2.2" fill="${color}"/>
    <circle cx="0" cy="0" r="2.2" fill="${color}"/>
    <circle cx="0" cy="7" r="2.2" fill="${color}"/>
  </g>`;
}
function icoDotsHorizontal(cx,cy,scale=1,color='#fff'){
  return `<g transform="translate(${cx},${cy}) scale(${scale})">
    <circle cx="-7" cy="0" r="2.2" fill="${color}"/>
    <circle cx="0" cy="0" r="2.2" fill="${color}"/>
    <circle cx="7" cy="0" r="2.2" fill="${color}"/>
  </g>`;
}
function icoSearchGlass(cx,cy,scale=1,color='#fff'){
  return `<g transform="translate(${cx},${cy}) scale(${scale})">
    <circle cx="-2" cy="-2" r="7" fill="none" stroke="${color}" stroke-width="2.4"/>
    <line x1="3" y1="3" x2="9" y2="9" stroke="${color}" stroke-width="2.6" stroke-linecap="round"/>
  </g>`;
}
function icoHamburger(cx,cy,scale=1,color='#fff'){
  return `<g transform="translate(${cx},${cy}) scale(${scale})">
    <line x1="-9" y1="-6" x2="9" y2="-6" stroke="${color}" stroke-width="2.4" stroke-linecap="round"/>
    <line x1="-9" y1="0" x2="9" y2="0" stroke="${color}" stroke-width="2.4" stroke-linecap="round"/>
    <line x1="-9" y1="6" x2="9" y2="6" stroke="${color}" stroke-width="2.4" stroke-linecap="round"/>
  </g>`;
}
function icoChevronLeft(cx,cy,scale=1,color='#fff'){
  return `<g transform="translate(${cx},${cy}) scale(${scale})">
    <path d="M3,-9 L-6,0 L3,9" fill="none" stroke="${color}" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
  </g>`;
}
function icoArrowLeft(cx,cy,scale=1,color='#fff'){
  return `<g transform="translate(${cx},${cy}) scale(${scale})">
    <line x1="9" y1="0" x2="-8" y2="0" stroke="${color}" stroke-width="2.6" stroke-linecap="round"/>
    <path d="M-2,-7 L-9,0 L-2,7" fill="none" stroke="${color}" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
  </g>`;
}
function icoCloseX(cx,cy,scale=1,color='#fff'){
  return `<g transform="translate(${cx},${cy}) scale(${scale})">
    <line x1="-7" y1="-7" x2="7" y2="7" stroke="${color}" stroke-width="2.6" stroke-linecap="round"/>
    <line x1="7" y1="-7" x2="-7" y2="7" stroke="${color}" stroke-width="2.6" stroke-linecap="round"/>
  </g>`;
}
function icoHouse(cx,cy,scale=1,color='#fff'){
  return `<g transform="translate(${cx},${cy}) scale(${scale})">
    <path d="M-9,1 L0,-8 L9,1" fill="none" stroke="${color}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M-6,0 L-6,9 L6,9 L6,0" fill="none" stroke="${color}" stroke-width="2.4" stroke-linejoin="round"/>
  </g>`;
}
function icoTrashCan(cx,cy,scale=1,color='#fff'){
  return `<g transform="translate(${cx},${cy}) scale(${scale})">
    <path d="M-7,-5 L7,-5 L6,9 Q6,10 5,10 L-5,10 Q-6,10 -6,9 Z" fill="none" stroke="${color}" stroke-width="2.2" stroke-linejoin="round"/>
    <line x1="-9" y1="-5" x2="9" y2="-5" stroke="${color}" stroke-width="2.2" stroke-linecap="round"/>
    <line x1="-3" y1="-5" x2="-2" y2="-8" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
    <line x1="3" y1="-5" x2="2" y2="-8" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
    <line x1="-2" y1="-1" x2="-2" y2="6" stroke="${color}" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="2" y1="-1" x2="2" y2="6" stroke="${color}" stroke-width="1.8" stroke-linecap="round"/>
  </g>`;
}
function icoShareIOS(cx,cy,scale=1,color='#fff'){
  return `<g transform="translate(${cx},${cy}) scale(${scale})">
    <line x1="0" y1="-9" x2="0" y2="4" stroke="${color}" stroke-width="2.4" stroke-linecap="round"/>
    <path d="M-5,-4 L0,-9 L5,-4" fill="none" stroke="${color}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M-7,-1 L-7,8 Q-7,9 -6,9 L6,9 Q7,9 7,8 L7,-1" fill="none" stroke="${color}" stroke-width="2.2" stroke-linejoin="round"/>
  </g>`;
}
function icoShareAndroid(cx,cy,scale=1,color='#fff'){
  return `<g transform="translate(${cx},${cy}) scale(${scale})">
    <circle cx="-7" cy="0" r="2.6" fill="${color}"/>
    <circle cx="6" cy="-7" r="2.6" fill="${color}"/>
    <circle cx="6" cy="7" r="2.6" fill="${color}"/>
    <line x1="-5" y1="-1.3" x2="4" y2="-6" stroke="${color}" stroke-width="1.8"/>
    <line x1="-5" y1="1.3" x2="4" y2="6" stroke="${color}" stroke-width="1.8"/>
  </g>`;
}
function icoPaperclip2(cx,cy,scale=1,color='#fff'){
  return `<g transform="translate(${cx},${cy}) scale(${scale})">
    <path d="M-3,-8 L4,-8 Q8,-8 8,-4 L8,5 Q8,10 2,10 Q-4,10 -4,5 L-4,-3" fill="none" stroke="${color}" stroke-width="2.2" stroke-linecap="round"/>
  </g>`;
}
function icoSpeakerOn(cx,cy,scale=1,color='#fff'){
  return `<g transform="translate(${cx},${cy}) scale(${scale})">
    <path d="M-8,-3 L-8,3 L-4,3 L1,8 L1,-8 L-4,-3 Z" fill="${color}"/>
    <path d="M4,-4 Q8,0 4,4" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
    <path d="M7,-7 Q13,0 7,7" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
  </g>`;
}
function icoSpeakerMute(cx,cy,scale=1,color='#fff'){
  return `<g transform="translate(${cx},${cy}) scale(${scale})">
    <path d="M-8,-3 L-8,3 L-4,3 L1,8 L1,-8 L-4,-3 Z" fill="${color}"/>
    <line x1="5" y1="-5" x2="12" y2="5" stroke="${color}" stroke-width="2.2" stroke-linecap="round"/>
    <line x1="12" y1="-5" x2="5" y2="5" stroke="${color}" stroke-width="2.2" stroke-linecap="round"/>
  </g>`;
}
function icoBellRinger(cx,cy,scale=1,color='#fff'){
  return `<g transform="translate(${cx},${cy}) scale(${scale})">
    <path d="M0,-8 Q6,-8 6,-1 L6,3 L8,6 L-8,6 L-6,3 L-6,-1 Q-6,-8 0,-8 Z" fill="${color}"/>
    <path d="M-2.5,7 Q0,10 2.5,7" fill="none" stroke="${color}" stroke-width="1.8" stroke-linecap="round"/>
  </g>`;
}
function icoEyeOpen(cx,cy,scale=1,color='#fff'){
  return `<g transform="translate(${cx},${cy}) scale(${scale})">
    <path d="M-10,0 Q0,-8 10,0 Q0,8 -10,0 Z" fill="none" stroke="${color}" stroke-width="2.2" stroke-linejoin="round"/>
    <circle cx="0" cy="0" r="3" fill="${color}"/>
  </g>`;
}
function icoEyeClosed(cx,cy,scale=1,color='#fff'){
  return `<g transform="translate(${cx},${cy}) scale(${scale})">
    <path d="M-10,0 Q0,-8 10,0" fill="none" stroke="${color}" stroke-width="2.2" stroke-linecap="round"/>
    <line x1="-9" y1="4" x2="9" y2="4" stroke="${color}" stroke-width="2.2" stroke-linecap="round"/>
  </g>`;
}
function icoBluetooth(cx,cy,scale=1,color='#fff'){
  // Traced from the real Bluetooth rune's proportions (the merged
  // Younger Futhark "Hagall" + "Bjarkan" runes), not a rough triangle —
  // it needs the small side "flags" or it just reads as an hourglass.
  return `<g transform="translate(${cx},${cy}) scale(${scale})">
    <path d="M5.71,-4.29 L0,-10 L-1,-10 L-1,-2.41 L-5.59,-7 L-7,-5.59 L-1.41,0 L-7,5.59 L-5.59,7 L-1,2.41 L-1,10 L0,10 L5.71,4.29 L1.42,0 Z M1,-6.17 L2.88,-4.29 L1,-2.41 Z M1,6.17 L2.88,4.29 L1,2.41 Z" fill="${color}"/>
  </g>`;
}
function icoBatteryLevel(cx,cy,scale=1,color='#fff'){
  return `<g transform="translate(${cx},${cy}) scale(${scale})">
    <rect x="-11" y="-6" width="20" height="12" rx="2" fill="none" stroke="${color}" stroke-width="2"/>
    <rect x="9" y="-3" width="3" height="6" rx="1" fill="${color}"/>
    <rect x="-9" y="-4" width="13" height="8" fill="${color}"/>
  </g>`;
}

/* ---- Builds one icon "chip": a small rounded-square swatch, the same
   style used for every icon here so they read as one consistent set
   rather than mismatched screenshots. ---- */
function iconChip(iconFn, size, bg){
  size = size || 68;
  bg = bg || '#173463';
  const r = size / 2;
  return `<svg viewBox="0 0 ${size} ${size}" width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
    <rect x="1" y="1" width="${size-2}" height="${size-2}" rx="${Math.round(size*0.3)}" fill="${bg}"/>
    ${iconFn(r,r,1.7,'#fff')}
  </svg>`;
}

/* ---- Content ---- */
const coreIcons = [
  { label: 'Settings', desc: "Opens your phone or app's settings, where you can change how things work.", icon: icoGear },
  { label: 'More Options', desc: 'Opens a list of more choices, like Delete, Share, or Edit.',
    variants: [{ label: 'iPhone', icon: icoDotsHorizontal }, { label: 'Android', icon: icoDotsVertical }] },
  { label: 'Search', desc: "Opens a search box so you can find an app, contact, or setting by typing its name.", icon: icoSearchGlass }
];

const gettingAroundIcons = [
  { label: 'Menu', desc: 'Opens a hidden menu with more sections or options, usually from a corner of the screen.', icon: icoHamburger },
  { label: 'Go Back', desc: 'Takes you back to the screen you were just on.',
    variants: [{ label: 'iPhone', icon: icoChevronLeft }, { label: 'Android', icon: icoArrowLeft }] },
  { label: 'Close', desc: 'Closes the current screen, pop-up, or search box without saving changes.', icon: icoCloseX },
  { label: 'Home', desc: "Takes you to your phone's main Home Screen, or an app's main page.", icon: icoHouse }
];

const doingThingsIcons = [
  { label: 'Add', desc: 'Starts adding something new, like a contact, event, or message.', icon: icoPlus },
  { label: 'Edit', desc: "Lets you change or write text that's already there.", icon: icoPencil },
  { label: 'Delete', desc: 'Removes the item for good — make sure before you tap it.', icon: icoTrashCan },
  { label: 'Share', desc: 'Opens a list of ways to send something to someone else, like by text, email, or another app.',
    variants: [{ label: 'iPhone', icon: icoShareIOS }, { label: 'Android', icon: icoShareAndroid }] },
  { label: 'Attach', desc: 'Lets you add a photo or file to a message.', icon: icoPaperclip2 },
  { label: 'Send', desc: 'Sends your message, photo, or file.', icon: icoSendArrow }
];

const soundIcons = [
  { label: 'Volume / Mute', desc: 'Shows and controls how loud the sound is, or mutes it completely.',
    variants: [{ label: 'Sound On', icon: icoSpeakerOn }, { label: 'Muted', icon: icoSpeakerMute }] },
  { label: 'Talk Instead of Type', desc: 'Lets you speak instead of typing — tap it and say what you want to write.', icon: icoMic },
  { label: 'Notifications', desc: 'Shows alerts and messages waiting for your attention.', icon: icoBellRinger }
];

const safetyIcons = [
  { label: 'Secure / Locked', desc: 'Means the page or connection is safe, or that your phone is locked.', icon: icoLock },
  { label: 'Show / Hide Password', desc: 'Tap to reveal the password you typed, so you can check it is correct.',
    variants: [{ label: 'Show', icon: icoEyeOpen }, { label: 'Hide', icon: icoEyeClosed }] },
  { label: 'Wi-Fi Signal', desc: 'Shows how strong your internet connection is.', icon: icoWifi },
  { label: 'Bluetooth', desc: 'Means your phone can connect wirelessly to things like hearing aids, wireless earbuds, a speaker, or your car.', icon: icoBluetooth },
  { label: 'Battery', desc: 'Shows how much charge is left on your device.', icon: icoBatteryLevel }
];

function renderIconChips(item, size){
  if(item.variants){
    return '<div class="icon-ref-chips">' + item.variants.map(v =>
      `<span class="icon-ref-chip-wrap">${iconChip(v.icon, size)}<small>${v.label}</small></span>`
    ).join('') + '</div>';
  }
  return `<div class="icon-ref-chips"><span class="icon-ref-chip-wrap">${iconChip(item.icon, size)}</span></div>`;
}

function renderIconRow(item){
  return `<div class="icon-ref-row">
    ${renderIconChips(item, 60)}
    <div class="icon-ref-text"><strong>${item.label}</strong><span>${item.desc}</span></div>
  </div>`;
}

function renderIconGroup(title, items){
  return `<div class="icon-group"><h3>${title}</h3><div class="icon-ref-list">${items.map(renderIconRow).join('')}</div></div>`;
}

/* ---- Render into the page (see the #mini-icons section in guides.html) ---- */
(function(){
  const coreGrid = document.getElementById('iconCoreGrid');
  if(coreGrid){
    coreGrid.innerHTML = coreIcons.map(item =>
      `<div class="icon-core-item">${renderIconChips(item, 76)}<strong>${item.label}</strong><span>${item.desc}</span></div>`
    ).join('');
  }
  const groupsHolder = document.getElementById('iconGroupsHolder');
  if(groupsHolder){
    groupsHolder.innerHTML =
      renderIconGroup('Getting Around', gettingAroundIcons) +
      renderIconGroup('Doing Things', doingThingsIcons) +
      renderIconGroup('Sound, Voice &amp; Alerts', soundIcons) +
      renderIconGroup('Safety &amp; Status', safetyIcons);
  }
})();

/* ---- Read Aloud for this guide, reusing the voice picker from
   guide-data.js so it sounds the same as the picture guides. ---- */
function speakAllIcons(){
  if(!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const all = [...coreIcons, ...gettingAroundIcons, ...doingThingsIcons, ...soundIcons, ...safetyIcons];
  const text = 'Common icon meanings. Learn these three first: Settings, More Options, and Search. ' +
    all.map(i => `${i.label}. ${i.desc}`).join(' ');
  const u = new SpeechSynthesisUtterance(text);
  const voice = (typeof cachedVoice !== 'undefined' && cachedVoice) ||
    (typeof pickReadAloudVoice === 'function' ? pickReadAloudVoice() : null);
  if(voice) u.voice = voice;
  u.lang = (voice && voice.lang) || 'en-US';
  u.rate = 0.92;
  u.pitch = 1.02;
  window.speechSynthesis.speak(u);
}
