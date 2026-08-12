const ARROW = `<defs><marker id="arrow" markerWidth="7" markerHeight="7" refX="0.5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 z" fill="#c62828"/></marker></defs>`;
function phoneFrame(inner){
  return `<svg viewBox="0 0 300 560" width="300" height="560" xmlns="http://www.w3.org/2000/svg" role="img" style="width:100%;height:auto;display:block;">
    ${ARROW}
    <rect x="4" y="4" width="292" height="552" rx="36" fill="#0f1f3d" stroke="#000" stroke-width="2"/>
    <rect x="18" y="26" width="264" height="508" rx="18" fill="#ffffff"/>
    ${inner}
  </svg>`;
}
/* ---- Accurate small vector icons (replace emoji, which render inconsistently) ---- */
function icoCamera(cx,cy,scale=1,color='#fff'){
  return `<g transform="translate(${cx},${cy}) scale(${scale})">
    <rect x="-9" y="-6" width="14" height="12" rx="2" fill="${color}"/>
    <path d="M5,-3 L11,-7 L11,7 L5,3 Z" fill="${color}"/>
  </g>`;
}
function icoPhoneHandset(cx,cy,scale=1,color='#fff',rotate=0){
  return `<g transform="translate(${cx},${cy}) rotate(${rotate}) scale(${scale})">
    <path d="M-8,-2 c0,-3 2,-5 4,-5 l2,0 c1,0 2,1 2,2 l0,1.5 c0,0.8 -0.6,1 -1,1.2 c-0.7,0.3 -0.9,0.9 -0.5,1.6 c1,1.8 2.6,3.4 4.4,4.4 c0.7,0.4 1.3,0.2 1.6,-0.5 c0.2,-0.4 0.4,-1 1.2,-1 l1.5,0 c1,0 2,1 2,2 l0,2 c0,2 -2,4 -5,4 c-6,0 -12,-6 -12,-12 Z" fill="${color}"/>
  </g>`;
}
function icoPencil(cx,cy,scale=1,color='#fff'){
  return `<g transform="translate(${cx},${cy}) scale(${scale})">
    <line x1="-7" y1="7" x2="6" y2="-6" stroke="${color}" stroke-width="4" stroke-linecap="round"/>
    <path d="M-7,7 L-10,11 L-6,10 Z" fill="${color}"/>
  </g>`;
}
function icoCompose(cx,cy,scale=1,color='#fff'){
  return `<g transform="translate(${cx},${cy}) scale(${scale})">
    <rect x="-7" y="-7" width="11" height="14" rx="1.5" fill="none" stroke="${color}" stroke-width="1.6"/>
    <path d="M2,4 L9,-3 L12,0 L5,7 L1,8 Z" fill="${color}"/>
  </g>`;
}
function icoSendArrow(cx,cy,scale=1,color='#fff'){
  return `<g transform="translate(${cx},${cy}) scale(${scale})">
    <path d="M0,7 L0,-7 M-6,-1 L0,-7 L6,-1" fill="none" stroke="${color}" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
  </g>`;
}
function icoReply(cx,cy,scale=1,color='#2456a6'){
  return `<g transform="translate(${cx},${cy}) scale(${scale})">
    <path d="M6,-6 Q-8,-6 -8,4 L-8,7" fill="none" stroke="${color}" stroke-width="2.2" stroke-linecap="round"/>
    <path d="M-4,0 L-8,4 L-4,8" fill="none" stroke="${color}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
  </g>`;
}
function icoLock(cx,cy,scale=1,color='#555'){
  return `<g transform="translate(${cx},${cy}) scale(${scale})">
    <rect x="-5" y="-1" width="10" height="8" rx="1.5" fill="none" stroke="${color}" stroke-width="1.6"/>
    <path d="M-3,-1 L-3,-4 Q-3,-7 0,-7 Q3,-7 3,-4 L3,-1" fill="none" stroke="${color}" stroke-width="1.6"/>
  </g>`;
}
function icoWifi(cx,cy,scale=1,color='#2456a6'){
  return `<g transform="translate(${cx},${cy}) scale(${scale})">
    <path d="M-9,-2 Q0,-11 9,-2" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
    <path d="M-6,2 Q0,-5 6,2" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
    <circle cx="0" cy="6" r="1.8" fill="${color}"/>
  </g>`;
}
function icoWarning(cx,cy,scale=1,color='#c62828'){
  return `<g transform="translate(${cx},${cy}) scale(${scale})">
    <path d="M0,-9 L9,8 L-9,8 Z" fill="none" stroke="${color}" stroke-width="2" stroke-linejoin="round"/>
    <line x1="0" y1="-2" x2="0" y2="3" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
    <circle cx="0" cy="6" r="1" fill="${color}"/>
  </g>`;
}
function icoPlus(cx,cy,scale=1,color='#fff'){
  return `<g transform="translate(${cx},${cy}) scale(${scale})">
    <line x1="0" y1="-7" x2="0" y2="7" stroke="${color}" stroke-width="2.4" stroke-linecap="round"/>
    <line x1="-7" y1="0" x2="7" y2="0" stroke="${color}" stroke-width="2.4" stroke-linecap="round"/>
  </g>`;
}
function icoCheck(cx,cy,scale=1,color='#2e9e4f'){
  return `<g transform="translate(${cx},${cy}) scale(${scale})">
    <path d="M-6,0 L-2,4 L7,-6" fill="none" stroke="${color}" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
  </g>`;
}
function icoToggle(x,y,on){
  const track = on ? '#2e9e4f' : '#d6d9de';
  const knobX = on ? x+18 : x+4;
  return `<rect x="${x}" y="${y}" width="36" height="20" rx="10" fill="${track}"/><circle cx="${knobX}" cy="${y+10}" r="8" fill="#fff"/>`;
}
function icoGear(cx,cy,scale=1,color='#fff'){
  let teeth = '';
  for(let i=0;i<8;i++){
    const a = i*Math.PI/4;
    const x1=Math.cos(a)*7, y1=Math.sin(a)*7, x2=Math.cos(a)*10, y2=Math.sin(a)*10;
    teeth += `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="${color}" stroke-width="2.4" stroke-linecap="round"/>`;
  }
  return `<g transform="translate(${cx},${cy}) scale(${scale})">${teeth}<circle r="5" fill="none" stroke="${color}" stroke-width="2"/></g>`;
}
function icoChatBubble(cx,cy,scale=1,color='#fff'){
  return `<g transform="translate(${cx},${cy}) scale(${scale})">
    <path d="M-10,-7 Q-10,-11 -6,-11 L6,-11 Q10,-11 10,-7 L10,1 Q10,5 6,5 L-1,5 L-8,10 L-6.5,5 L-6,5 Q-10,5 -10,1 Z" fill="${color}"/>
  </g>`;
}
function icoEnvelope(cx,cy,scale=1,color='#fff'){
  return `<g transform="translate(${cx},${cy}) scale(${scale})">
    <rect x="-11" y="-8" width="22" height="16" rx="2" fill="${color}"/>
    <path d="M-11,-8 L0,2 L11,-8" fill="none" stroke="#173463" stroke-width="1.6" stroke-linejoin="round"/>
  </g>`;
}
function icoPersonAdd(cx,cy,scale=1,color='#fff'){
  return `<g transform="translate(${cx},${cy}) scale(${scale})">
    <circle cx="-2" cy="-6" r="5.5" fill="${color}"/>
    <path d="M-11,10 Q-11,-1 -2,-1 Q7,-1 7,10 Z" fill="${color}"/>
    <line x1="9" y1="-4" x2="9" y2="4" stroke="${color}" stroke-width="2.6" stroke-linecap="round"/>
    <line x1="5" y1="0" x2="13" y2="0" stroke="${color}" stroke-width="2.6" stroke-linecap="round"/>
  </g>`;
}
function icoImage(cx,cy,scale=1,color='#fff'){
  return `<g transform="translate(${cx},${cy}) scale(${scale})">
    <rect x="-11" y="-9" width="22" height="18" rx="2" fill="none" stroke="${color}" stroke-width="1.8"/>
    <circle cx="-4" cy="-3" r="2.2" fill="${color}"/>
    <path d="M-11,6 L-2,-3 L4,3 L7,-1 L11,6 Z" fill="${color}"/>
  </g>`;
}
function icoClock(cx,cy,scale=1,color='#fff'){
  return `<g transform="translate(${cx},${cy}) scale(${scale})">
    <circle cx="0" cy="0" r="9" fill="none" stroke="${color}" stroke-width="2"/>
    <line x1="0" y1="0" x2="0" y2="-5" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
    <line x1="0" y1="0" x2="4" y2="2" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
  </g>`;
}
function icoMic(cx,cy,scale=1,color='#fff'){
  return `<g transform="translate(${cx},${cy}) scale(${scale})">
    <rect x="-4" y="-9" width="8" height="14" rx="4" fill="${color}"/>
    <path d="M-8,0 Q-8,8 0,8 Q8,8 8,0" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
    <line x1="0" y1="8" x2="0" y2="12" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
    <line x1="-5" y1="12" x2="5" y2="12" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
  </g>`;
}
function icoMapPin(cx,cy,scale=1,color='#fff'){
  return `<g transform="translate(${cx},${cy}) scale(${scale})">
    <path d="M0,-9 C5,-9 8,-5 8,-1 C8,4 0,10 0,10 C0,10 -8,4 -8,-1 C-8,-5 -5,-9 0,-9 Z" fill="${color}"/>
    <circle cx="0" cy="-1" r="3" fill="#173463"/>
  </g>`;
}
function icoPower(cx,cy,scale=1,color='#fff'){
  return `<g transform="translate(${cx},${cy}) scale(${scale})">
    <line x1="0" y1="-9" x2="0" y2="-2" stroke="${color}" stroke-width="2.4" stroke-linecap="round"/>
    <path d="M-6,-5 A9,9 0 1,0 6,-5" fill="none" stroke="${color}" stroke-width="2.4" stroke-linecap="round"/>
  </g>`;
}
function searchFrame(iconFn, tileColor, label){
  // Every device has a search feature, and it's a far more reliable way to
  // find an app than hunting for an icon (which sits in a different spot
  // on every phone, tablet, and computer).
  return phoneFrame(`
    <rect x="18" y="26" width="264" height="508" fill="#f4f6fa"/>
    <text x="150" y="58" fill="#173463" font-size="16" font-weight="700" text-anchor="middle" font-family="Arial">Search</text>
    <rect x="34" y="76" width="232" height="44" rx="22" fill="#fff" stroke="#98a2b3" stroke-width="1.6"/>
    <circle cx="58" cy="98" r="7" fill="none" stroke="#555" stroke-width="2"/>
    <line x1="63" y1="103" x2="68" y2="108" stroke="#555" stroke-width="2" stroke-linecap="round"/>
    <text x="78" y="104" font-size="16" font-family="Arial" fill="#173463" font-weight="700">${label}</text>
    <rect x="34" y="140" width="232" height="66" rx="14" fill="#fff" stroke="#c62828" stroke-width="3.5"/>
    <rect x="48" y="153" width="40" height="40" rx="10" fill="${tileColor}"/>
    ${iconFn(68,173,1.05,'#fff')}
    <text x="102" y="179" font-size="16" font-family="Arial" fill="#111" font-weight="700">${label}</text>
    <line x1="46" y1="248" x2="66" y2="212" stroke="#c62828" stroke-width="3" marker-end="url(#arrow)"/>
    <text x="150" y="278" font-size="13" text-anchor="middle" fill="#173463" font-weight="700" font-family="Arial">Tap the result to open it</text>
    <text x="150" y="420" font-size="13" text-anchor="middle" fill="#555" font-family="Arial">Searching works for finding any app —</text>
    <text x="150" y="440" font-size="13" text-anchor="middle" fill="#555" font-family="Arial">and Aiden's always happy to help too!</text>
  `);
}
function confirmFrame(title, lines){
  const lineText = lines.map((l,i)=>`<text x="150" y="${300+i*24}" font-size="14" text-anchor="middle" font-family="Arial" fill="#444">${l}</text>`).join('');
  return phoneFrame(`
    <rect x="18" y="26" width="264" height="508" fill="#f3faf5"/>
    <circle cx="150" cy="190" r="54" fill="#2e9e4f"/>
    ${icoCheck(150,190,3.4,'#fff')}
    <text x="150" y="270" font-size="19" font-weight="700" text-anchor="middle" font-family="Arial" fill="#173463">${title}</text>
    ${lineText}
  `);
}
const guides = [
  {
    title: "Make a Video Call",
    summary: "See and talk face-to-face with the people you love.",
    steps: [
      { caption: "Swipe down or tap the search icon on your device, then type \"FaceTime\" and tap the result to open it. Searching works for finding any app — and Aiden's always happy to help if you get stuck.",
        img: searchFrame(icoPhoneHandset, '#2e9e4f', 'FaceTime') },
      { caption: "Find the person you want to talk to in your list, then tap the green video-camera icon next to their name.",
        img: phoneFrame(`
        <rect x="18" y="26" width="264" height="40" fill="#173463"/>
        <text x="150" y="52" fill="#fff" font-size="20" font-weight="700" text-anchor="middle" font-family="Arial">Contacts</text>
        <text x="34" y="110" font-size="20" font-family="Arial" fill="#111">Mom</text>
        <circle cx="248" cy="102" r="15" fill="#2e9e4f"/>
        ${icoCamera(248,102,0.9)}
        <circle cx="248" cy="102" r="26" fill="none" stroke="#c62828" stroke-width="4"/>
        <line x1="172" y1="188" x2="222" y2="127" stroke="#c62828" stroke-width="3" marker-end="url(#arrow)"/>
        <text x="34" y="170" font-size="20" font-family="Arial" fill="#111">David</text>
        <circle cx="248" cy="162" r="15" fill="#2e9e4f"/>
        ${icoCamera(248,162,0.9)}
        <text x="34" y="230" font-size="20" font-family="Arial" fill="#111">Susan</text>
        <circle cx="248" cy="222" r="15" fill="#2e9e4f"/>
        ${icoCamera(248,222,0.9)}
      `) },
      { caption: "Your call will connect and you'll see their face on your screen. When you're ready to say goodbye, tap the red button to hang up.",
        img: phoneFrame(`
        <rect x="18" y="26" width="264" height="508" fill="#0b2340"/>
        <circle cx="150" cy="170" r="60" fill="#8fa8cf"/>
        <text x="150" y="260" fill="#fff" font-size="18" text-anchor="middle" font-family="Arial">Calling Mom…</text>
        <circle cx="150" cy="460" r="34" fill="#c62828" stroke="#fff" stroke-width="4"/>
        ${icoPhoneHandset(150,460,1.3,'#fff',135)}
        <text x="150" y="522" fill="#fff" font-size="14" text-anchor="middle" font-family="Arial">Tap the red button to hang up when done</text>
      `) }
    ]
  },
  {
    title: "Send a Text Message",
    summary: "A quick way to say hello without picking up the phone.",
    steps: [
      { caption: "Swipe down or tap the search icon, then type \"Messages\" and tap the result to open it. This trick works for finding any app — and Aiden's always happy to help if you get stuck.",
        img: searchFrame(icoChatBubble, '#2e9e4f', 'Messages') },
      { caption: "Tap the compose icon in the top corner to start a brand new message.",
        img: phoneFrame(`
        <rect x="18" y="26" width="264" height="40" fill="#173463"/>
        <text x="150" y="52" fill="#fff" font-size="20" font-weight="700" text-anchor="middle" font-family="Arial">Messages</text>
        <rect x="238" y="34" width="26" height="24" rx="4" fill="#173463"/>
        ${icoCompose(251,46,0.9)}
        <circle cx="251" cy="46" r="24" fill="none" stroke="#c62828" stroke-width="4"/>
        <line x1="198" y1="118" x2="230" y2="70" stroke="#c62828" stroke-width="3" marker-end="url(#arrow)"/>
        <rect x="30" y="90" width="240" height="1" fill="#ddd"/>
        <text x="34" y="120" font-size="18" font-family="Arial" fill="#111">David: See you Sat!</text>
        <text x="34" y="160" font-size="18" font-family="Arial" fill="#111">Susan: Thanks for calling</text>
      `) },
      { caption: "Type the person's name at the top, then type your message at the bottom and tap the green arrow to send it.",
        img: phoneFrame(`
        <rect x="18" y="26" width="264" height="40" fill="#173463"/>
        <text x="150" y="52" fill="#fff" font-size="18" text-anchor="middle" font-family="Arial">New Message</text>
        <rect x="30" y="80" width="240" height="34" rx="8" fill="#eee"/>
        <text x="40" y="103" font-size="16" font-family="Arial" fill="#888">To: Type a name...</text>
        <rect x="30" y="470" width="190" height="40" rx="20" fill="#eee"/>
        <text x="46" y="496" font-size="16" font-family="Arial" fill="#888">Type your message</text>
        <circle cx="248" cy="490" r="22" fill="#2e9e4f"/>
        ${icoSendArrow(248,490,0.9)}
        <circle cx="248" cy="490" r="32" fill="none" stroke="#c62828" stroke-width="4"/>
        <text x="150" y="440" font-size="14" text-anchor="middle" fill="#555" font-family="Arial">Type your message, then tap the green arrow to send</text>
      `) }
    ]
  },
  {
    title: "Check &amp; Reply to Email",
    summary: "Read messages from friends and family, and write back.",
    steps: [
      { caption: "Swipe down or tap the search icon, then type \"Mail\" and tap the result to see your messages. Searching works for finding any app — and Aiden's always happy to help if you get stuck.",
        img: searchFrame(icoEnvelope, '#2456a6', 'Mail') },
      { caption: "Tap on an email in your list to open and read it.",
        img: phoneFrame(`
        <rect x="18" y="26" width="264" height="40" fill="#173463"/>
        <text x="150" y="52" fill="#fff" font-size="20" font-weight="700" text-anchor="middle" font-family="Arial">Inbox</text>
        <rect x="18" y="66" width="264" height="46" fill="#eef2f9"/>
        <text x="34" y="88" font-size="16" font-weight="700" font-family="Arial" fill="#111">Susan Miller</text>
        <text x="34" y="106" font-size="14" font-family="Arial" fill="#555">Photos from the reunion!</text>
        <circle cx="255" cy="89" r="5" fill="#c62828"/>
        <line x1="255" y1="130" x2="255" y2="112" stroke="#c62828" stroke-width="3" marker-end="url(#arrow)"/>
        <text x="200" y="150" font-size="12" text-anchor="middle" fill="#c62828" font-weight="700" font-family="Arial">Tap this email to open it</text>
        <text x="34" y="176" font-size="16" font-family="Arial" fill="#111">David Lee</text>
        <text x="34" y="194" font-size="14" font-family="Arial" fill="#555">Call me when you can</text>
      `) },
      { caption: "Read the message, then tap the reply arrow at the bottom to write back.",
        img: phoneFrame(`
        <rect x="18" y="26" width="264" height="40" fill="#173463"/>
        <text x="150" y="52" fill="#fff" font-size="18" text-anchor="middle" font-family="Arial">Photos from the reunion!</text>
        <text x="34" y="90" font-size="15" font-family="Arial" fill="#111">From: Susan Miller</text>
        <rect x="34" y="110" width="232" height="70" rx="8" fill="#f4f6fa"/>
        <text x="46" y="132" font-size="14" font-family="Arial" fill="#333">So good to see everyone —</text>
        <text x="46" y="150" font-size="14" font-family="Arial" fill="#333">here are the pictures I took!</text>
        <rect x="18" y="470" width="264" height="46" fill="#f4f6fa"/>
        ${icoReply(60,493,1.2)}
        <circle cx="60" cy="493" r="24" fill="none" stroke="#c62828" stroke-width="4"/>
        <line x1="130" y1="530" x2="82" y2="505" stroke="#c62828" stroke-width="3" marker-end="url(#arrow)"/>
        <text x="150" y="545" font-size="13" text-anchor="middle" fill="#555" font-family="Arial">Tap the reply arrow to write back</text>
      `) }
    ]
  },
  {
    title: "Add a New Contact",
    summary: "Save someone's number so you can reach them anytime.",
    steps: [
      { caption: "Swipe down or tap the search icon, then type \"Contacts\" and tap the result to open it. This trick works for finding any app — and Aiden's always happy to help if you get stuck.",
        img: searchFrame(icoPersonAdd, '#173463', 'Contacts') },
      { caption: "Tap the plus (+) button to add someone new.",
        img: phoneFrame(`
        <rect x="18" y="26" width="264" height="40" fill="#173463"/>
        <text x="150" y="52" fill="#fff" font-size="20" font-weight="700" text-anchor="middle" font-family="Arial">Contacts</text>
        <circle cx="255" cy="46" r="15" fill="#2e9e4f"/>
        ${icoPlus(255,46,0.9)}
        <circle cx="255" cy="46" r="26" fill="none" stroke="#c62828" stroke-width="4"/>
        <line x1="205" y1="115" x2="238" y2="66" stroke="#c62828" stroke-width="3" marker-end="url(#arrow)"/>
        <text x="34" y="110" font-size="20" font-family="Arial" fill="#111">David</text>
        <text x="34" y="170" font-size="20" font-family="Arial" fill="#111">Susan</text>
        <text x="150" y="230" font-size="13" text-anchor="middle" fill="#555" font-family="Arial">Tap the + to add someone new</text>
      `) },
      { caption: "Type in their first name and phone number, then tap Save.",
        img: phoneFrame(`
        <rect x="18" y="26" width="264" height="40" fill="#173463"/>
        <text x="150" y="52" fill="#fff" font-size="18" text-anchor="middle" font-family="Arial">New Contact</text>
        <rect x="30" y="80" width="240" height="34" rx="8" fill="#eee"/>
        <text x="40" y="103" font-size="16" font-family="Arial" fill="#888">First name</text>
        <rect x="30" y="124" width="240" height="34" rx="8" fill="#eee"/>
        <text x="40" y="147" font-size="16" font-family="Arial" fill="#888">Phone number</text>
        <rect x="86" y="470" width="128" height="40" rx="20" fill="#2e9e4f"/>
        ${icoCheck(120,490,1)}
        <text x="150" y="497" font-size="16" font-weight="700" text-anchor="middle" fill="#fff" font-family="Arial">Save</text>
        <circle cx="150" cy="490" r="46" fill="none" stroke="#c62828" stroke-width="4"/>
        <line x1="150" y1="420" x2="150" y2="440" stroke="#c62828" stroke-width="3" marker-end="url(#arrow)"/>
        <text x="150" y="400" font-size="13" text-anchor="middle" fill="#555" font-family="Arial">Fill in the name and number, then tap Save</text>
      `) }
    ]
  },
  {
    title: "Share a Photo",
    summary: "Send a favorite picture to someone who'd love to see it.",
    steps: [
      { caption: "Swipe down or tap the search icon, then type \"Photos\" and tap the result to open your pictures. Searching works for finding any app — and Aiden's always happy to help if you get stuck.",
        img: searchFrame(icoImage, '#2456a6', 'Photos') },
      { caption: "Open the photo you want to share, then tap the share icon — the little box with an arrow — at the bottom of the screen.",
        img: phoneFrame(`
        <rect x="18" y="26" width="264" height="508" fill="#ffffff"/>
        <rect x="40" y="60" width="220" height="300" rx="10" fill="#bcd9f5"/>
        <circle cx="150" cy="110" r="22" fill="#f4d58d"/>
        <path d="M40,300 L100,190 L140,240 L180,160 L260,300 Z" fill="#6f93c4"/>
        <rect x="40" y="372" width="220" height="50" rx="8" fill="#eef2f9"/>
        <path d="M78,404 L78,414 Q78,417 81,417 L99,417 Q102,417 102,414 L102,404"
              fill="none" stroke="#2456a6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <line x1="90" y1="384" x2="90" y2="408" stroke="#2456a6" stroke-width="3" stroke-linecap="round"/>
        <path d="M83,392 L90,383 L97,392" fill="none" stroke="#2456a6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <rect x="203" y="392" width="14" height="18" rx="2" fill="none" stroke="#98a2b3" stroke-width="2"/>
        <line x1="201" y1="390" x2="219" y2="390" stroke="#98a2b3" stroke-width="2" stroke-linecap="round"/>
        <circle cx="90" cy="399" r="27" fill="none" stroke="#c62828" stroke-width="4"/>
        <line x1="140" y1="455" x2="113" y2="424" stroke="#c62828" stroke-width="3" marker-end="url(#arrow)"/>
        <text x="150" y="500" font-size="13" text-anchor="middle" fill="#333" font-family="Arial">Tap the share icon — the box with the arrow</text>
      `) },
      { caption: "Choose Messages or Email, then pick who you want to send the photo to.",
        img: phoneFrame(`
        <rect x="18" y="26" width="264" height="508" fill="#fff"/>
        <text x="150" y="70" font-size="18" font-weight="700" text-anchor="middle" font-family="Arial" fill="#111">Share with...</text>
        <circle cx="70" cy="130" r="26" fill="#8fa8cf"/>
        <text x="70" y="172" font-size="13" text-anchor="middle" font-family="Arial">Messages</text>
        <circle cx="150" cy="130" r="26" fill="#8fa8cf"/>
        <text x="150" y="172" font-size="13" text-anchor="middle" font-family="Arial">Email</text>
        <circle cx="150" cy="130" r="34" fill="none" stroke="#c62828" stroke-width="4"/>
        <circle cx="230" cy="130" r="26" fill="#8fa8cf"/>
        <text x="230" y="172" font-size="13" text-anchor="middle" font-family="Arial">Save</text>
        <text x="150" y="230" font-size="14" text-anchor="middle" fill="#555" font-family="Arial">Choose Email or Messages to send the photo to family</text>
      `) }
    ]
  },
  {
    title: "Back Up Your Photos",
    summary: "Keep your pictures safe, even if something happens to your phone.",
    steps: [
      { caption: "Open Settings, tap your name at the top, then tap Photos.",
        img: phoneFrame(`
        <rect x="18" y="26" width="264" height="40" fill="#173463"/>
        <text x="150" y="52" fill="#fff" font-size="20" font-weight="700" text-anchor="middle" font-family="Arial">Settings</text>
        <text x="34" y="110" font-size="18" font-family="Arial" fill="#111">Your Name</text>
        <text x="34" y="150" font-size="18" font-family="Arial" fill="#111">Photos</text>
        <rect x="18" y="130" width="264" height="36" fill="none" stroke="#c62828" stroke-width="4" rx="6"/>
        <line x1="150" y1="205" x2="150" y2="172" stroke="#c62828" stroke-width="3" marker-end="url(#arrow)"/>
        <text x="34" y="190" font-size="18" font-family="Arial" fill="#111">Storage</text>
      `) },
      { caption: "Turn on Back Up This Device. Green means it's on.",
        img: phoneFrame(`
        <rect x="18" y="26" width="264" height="40" fill="#173463"/>
        <text x="150" y="52" fill="#fff" font-size="18" text-anchor="middle" font-family="Arial">Photos</text>
        <text x="34" y="106" font-size="17" font-family="Arial" fill="#111">Back Up This Device</text>
        ${icoToggle(220,90,true)}
        <circle cx="238" cy="100" r="30" fill="none" stroke="#c62828" stroke-width="4"/>
        <line x1="170" y1="150" x2="220" y2="118" stroke="#c62828" stroke-width="3" marker-end="url(#arrow)"/>
        <text x="150" y="190" font-size="13" text-anchor="middle" fill="#555" font-family="Arial">Green means it's on and your photos are backed up</text>
      `) },
      { caption: "That's it — your photos will now back up safely on their own, even if something happens to your phone.",
        img: confirmFrame("All Done!", ["Your photos are backing up", "safely, all by themselves."]) }
    ]
  },
  {
    title: "Make Text Bigger",
    summary: "Make everything on your screen easier to read.",
    steps: [
      { caption: "Swipe down or tap the search icon, then type \"Settings\" and tap the result to open it. Searching works for finding any app — and Aiden's always happy to help if you get stuck.",
        img: searchFrame(icoGear, '#8a8f98', 'Settings') },
      { caption: "Tap General, then tap Display &amp; Brightness.",
        img: phoneFrame(`
        <rect x="18" y="26" width="264" height="40" fill="#173463"/>
        <text x="150" y="52" fill="#fff" font-size="20" font-weight="700" text-anchor="middle" font-family="Arial">Settings</text>
        <text x="34" y="110" font-size="18" font-family="Arial" fill="#111">General</text>
        <text x="34" y="150" font-size="18" font-family="Arial" fill="#111">Display &amp; Brightness</text>
        <rect x="18" y="130" width="264" height="36" fill="none" stroke="#c62828" stroke-width="4" rx="6"/>
        <line x1="150" y1="205" x2="150" y2="172" stroke="#c62828" stroke-width="3" marker-end="url(#arrow)"/>
        <text x="34" y="190" font-size="18" font-family="Arial" fill="#111">Sounds</text>
      `) },
      { caption: "Tap Text Size, then slide it to the right to make everything on your screen bigger.",
        img: phoneFrame(`
        <rect x="18" y="26" width="264" height="40" fill="#173463"/>
        <text x="150" y="52" fill="#fff" font-size="18" text-anchor="middle" font-family="Arial">Text Size</text>
        <text x="150" y="150" font-size="34" text-anchor="middle" font-family="Arial" fill="#111">Aa</text>
        <rect x="40" y="230" width="220" height="8" rx="4" fill="#cdd7e6"/>
        <circle cx="200" cy="234" r="16" fill="#2456a6"/>
        <circle cx="200" cy="234" r="26" fill="none" stroke="#c62828" stroke-width="4"/>
        <line x1="168" y1="283" x2="185" y2="257" stroke="#c62828" stroke-width="3" marker-end="url(#arrow)"/>
        <text x="150" y="330" font-size="14" text-anchor="middle" fill="#555" font-family="Arial">Slide right for bigger text, left for smaller</text>
      `) }
    ]
  },
  {
    title: "Connect to Wi-Fi",
    summary: "Get your device online at home.",
    steps: [
      { caption: "Swipe down or tap the search icon, then type \"Settings\" and tap the result to open it. Searching works for finding any app — and Aiden's always happy to help if you get stuck.",
        img: searchFrame(icoGear, '#8a8f98', 'Settings') },
      { caption: "Tap Wi-Fi near the top of the list.",
        img: phoneFrame(`
        <rect x="18" y="26" width="264" height="40" fill="#173463"/>
        <text x="150" y="52" fill="#fff" font-size="20" font-weight="700" text-anchor="middle" font-family="Arial">Settings</text>
        <rect x="18" y="80" width="264" height="36" fill="none" stroke="#c62828" stroke-width="4" rx="6"/>
        ${icoWifi(38,98,0.8)}
        <text x="52" y="104" font-size="18" font-family="Arial" fill="#111">Wi-Fi</text>
        <text x="255" y="104" font-size="14" font-family="Arial" fill="#888">Off ›</text>
        <line x1="150" y1="165" x2="150" y2="122" stroke="#c62828" stroke-width="3" marker-end="url(#arrow)"/>
        <text x="34" y="150" font-size="18" font-family="Arial" fill="#111">Bluetooth</text>
      `) },
      { caption: "Tap your home network's name, then type in the Wi-Fi password to connect.",
        img: phoneFrame(`
        <rect x="18" y="26" width="264" height="40" fill="#173463"/>
        <text x="150" y="52" fill="#fff" font-size="18" text-anchor="middle" font-family="Arial">Wi-Fi</text>
        <text x="34" y="110" font-size="18" font-family="Arial" fill="#111">HomeNetwork_2.4G</text>
        ${icoLock(258,104,0.9,'#888')}
        <rect x="18" y="90" width="264" height="34" fill="none" stroke="#c62828" stroke-width="4" rx="6"/>
        <line x1="150" y1="175" x2="150" y2="130" stroke="#c62828" stroke-width="3" marker-end="url(#arrow)"/>
        <text x="150" y="230" font-size="14" text-anchor="middle" fill="#555" font-family="Arial">Tap your home network, then type the Wi-Fi password</text>
      `) },
      { caption: "Once you're connected, you'll see a checkmark next to your network's name.",
        img: confirmFrame("You're Connected!", ["Your device is now online", "and ready to use."]) }
    ]
  },
  {
    title: "Create a Strong Password",
    summary: "Let your phone create and remember a safe password for you.",
    steps: [
      { caption: "When a website or app asks you to create a password, you'll see a screen like this one.",
        img: phoneFrame(`
        <rect x="18" y="26" width="264" height="40" fill="#173463"/>
        <text x="150" y="52" fill="#fff" font-size="18" text-anchor="middle" font-family="Arial">Create Account</text>
        <text x="34" y="100" font-size="16" font-family="Arial" fill="#111">Email</text>
        <rect x="30" y="110" width="240" height="32" rx="6" fill="#eee"/>
        <text x="34" y="180" font-size="16" font-family="Arial" fill="#111">Password</text>
        <rect x="30" y="190" width="240" height="32" rx="6" fill="#eee"/>
        <circle cx="150" cy="206" r="46" fill="none" stroke="#c62828" stroke-width="4"/>
        <text x="150" y="270" font-size="13" text-anchor="middle" fill="#555" font-family="Arial">Tap in the Password box</text>
      `) },
      { caption: "Look for &quot;Use Strong Password?&quot; and tap Use Suggested Password — no need to make one up yourself.",
        img: phoneFrame(`
        <rect x="18" y="26" width="264" height="40" fill="#173463"/>
        <text x="150" y="52" fill="#fff" font-size="18" text-anchor="middle" font-family="Arial">Create Account</text>
        <rect x="30" y="90" width="240" height="80" rx="10" fill="#eef2f9" stroke="#2456a6" stroke-width="1.5"/>
        ${icoLock(52,115,1,'#2456a6')}
        <text x="66" y="120" font-size="13" font-family="Arial" fill="#173463" font-weight="700">Use Strong Password?</text>
        <text x="42" y="139" font-size="12" font-family="Arial" fill="#444">Suggested: bk4$Wp9!qLZr</text>
        <rect x="42" y="147" width="200" height="16" fill="none" stroke="#98a2b3" stroke-width="1.4" rx="3"/>
        <rect x="70" y="325" width="160" height="40" rx="20" fill="#2456a6"/>
        <text x="150" y="350" font-size="15" font-weight="700" text-anchor="middle" fill="#fff" font-family="Arial">Use Suggested Password</text>
        <circle cx="150" cy="345" r="50" fill="none" stroke="#c62828" stroke-width="4"/>
        <line x1="150" y1="255" x2="150" y2="293" stroke="#c62828" stroke-width="3" marker-end="url(#arrow)"/>
      `) },
      { caption: "Your phone remembers this password for you, so you'll never have to.",
        img: confirmFrame("Password Saved!", ["Your phone will fill this in", "for you next time — safely."]) }
    ]
  },
  {
    title: "Spot a Scam Text",
    summary: "Learn to recognize a trick message — and know just what to do.",
    steps: [
      { caption: "Real companies never rush you or ask you to click a strange link. An unexpected message with urgent language or an odd link is usually a scam.",
        img: phoneFrame(`
        <rect x="18" y="26" width="264" height="508" fill="#f2f4f8"/>
        <text x="34" y="44" font-size="14" font-family="Arial" fill="#333">From: +1 (555) 019-2231</text>
        <rect x="28" y="30" width="192" height="20" fill="none" stroke="#c62828" stroke-width="3" rx="4"/>
        ${icoWarning(40,68,0.8)}
        <text x="54" y="72" font-size="12" font-family="Arial" fill="#c62828" font-weight="700">Unknown sender</text>
        <rect x="34" y="80" width="232" height="90" rx="14" fill="#e2e2e2"/>
        <text x="46" y="105" font-size="14" font-family="Arial" fill="#111">Your package could NOT be</text>
        <text x="46" y="125" font-size="14" font-family="Arial" fill="#111">delivered. Act now or it will</text>
        <text x="46" y="145" font-size="14" font-family="Arial" fill="#111">be returned: bit.ly/xyz123</text>
        <rect x="40" y="132" width="150" height="20" fill="none" stroke="#c62828" stroke-width="3" rx="4"/>
        ${icoWarning(40,198,0.8)}
        <text x="54" y="202" font-size="12" font-family="Arial" fill="#c62828" font-weight="700">Strange short link — don't tap it</text>
        <text x="150" y="245" font-size="13" text-anchor="middle" font-family="Arial" fill="#c62828" font-weight="700">⚠ "Act now" pressure language</text>
        <text x="150" y="264" font-size="12" text-anchor="middle" font-family="Arial" fill="#555">is a classic scam trick</text>
      `) },
      { caption: "Don't tap the link. Instead, call the company using a number you already know and trust, or send it to Aiden and he'll happily check it for you.",
        img: phoneFrame(`
        <rect x="18" y="26" width="264" height="508" fill="#eef6ff"/>
        <text x="150" y="80" font-size="18" font-weight="700" text-anchor="middle" font-family="Arial" fill="#173463">Instead, do this:</text>
        <circle cx="150" cy="180" r="46" fill="#2456a6"/>
        ${icoPhoneHandset(150,180,2.4,'#fff',135)}
        <text x="150" y="255" font-size="14" text-anchor="middle" font-family="Arial" fill="#333">Call the company using a number</text>
        <text x="150" y="275" font-size="14" text-anchor="middle" font-family="Arial" fill="#333">you already know and trust.</text>
        <circle cx="150" cy="365" r="40" fill="#2e9e4f"/>
        ${icoCheck(150,365,2.6,'#fff')}
        <text x="150" y="435" font-size="14" text-anchor="middle" font-family="Arial" fill="#333">Or send it to Aiden —</text>
        <text x="150" y="455" font-size="14" text-anchor="middle" font-family="Arial" fill="#333">he's happy to check it for you.</text>
      `) }
    ]
  },
  {
    title: "Take a Screenshot and Share It",
    summary: "Capture what's on your screen and send it to someone in a text.",
    steps: [
      { caption: "On most phones, press two buttons on the edges of the phone at the same time — often the side (power) button and the volume-up button. You'll see a quick flash and hear a click, which means it worked. This is slightly different on every device, so ask Aiden if yours looks different.",
        img: phoneFrame(`
        <rect x="18" y="26" width="264" height="508" fill="#f4f6fa"/>
        <rect x="18" y="26" width="264" height="508" fill="#ffffff" opacity="0.5"/>
        <line x1="150" y1="130" x2="150" y2="160" stroke="#d4a24a" stroke-width="3" stroke-linecap="round"/>
        <line x1="120" y1="145" x2="180" y2="145" stroke="#d4a24a" stroke-width="3" stroke-linecap="round"/>
        <line x1="128" y1="125" x2="172" y2="165" stroke="#d4a24a" stroke-width="3" stroke-linecap="round"/>
        <line x1="172" y1="125" x2="128" y2="165" stroke="#d4a24a" stroke-width="3" stroke-linecap="round"/>
        <circle cx="4" cy="200" r="26" fill="none" stroke="#c62828" stroke-width="4"/>
        <circle cx="296" cy="240" r="26" fill="none" stroke="#c62828" stroke-width="4"/>
        <text x="150" y="330" font-size="16" font-weight="700" text-anchor="middle" font-family="Arial" fill="#173463">Press Both Side Buttons</text>
        <text x="150" y="356" font-size="13" text-anchor="middle" font-family="Arial" fill="#555">at the same time</text>
        <text x="150" y="378" font-size="13" text-anchor="middle" font-family="Arial" fill="#555">(exact buttons vary by device)</text>
      `) },
      { caption: "Your screenshot is saved automatically — usually to your Photos app. Right after you take it, you may also see a small preview appear in the corner of your screen; tap it to open it right away.",
        img: phoneFrame(`
        <rect x="18" y="26" width="264" height="508" fill="#fff"/>
        <rect x="40" y="60" width="220" height="260" rx="10" fill="#bcd9f5"/>
        <circle cx="150" cy="110" r="22" fill="#f4d58d"/>
        <path d="M40,260 L100,160 L140,210 L180,140 L260,260 Z" fill="#6f93c4"/>
        <rect x="204" y="300" width="60" height="60" rx="8" fill="#fff" stroke="#c62828" stroke-width="3.5"/>
        <rect x="210" y="306" width="48" height="48" rx="4" fill="#e8eef7"/>
        <line x1="224" y1="390" x2="232" y2="362" stroke="#c62828" stroke-width="3" marker-end="url(#arrow)"/>
        <text x="150" y="430" font-size="13" text-anchor="middle" font-family="Arial" fill="#555">Tap the small preview to open it,</text>
        <text x="150" y="450" font-size="13" text-anchor="middle" font-family="Arial" fill="#555">or find it later in Photos</text>
      `) },
      { caption: "Open the screenshot, tap the share icon — the box with an arrow — then choose Messages and pick who you want to send it to.",
        img: phoneFrame(`
        <rect x="18" y="26" width="264" height="508" fill="#ffffff"/>
        <rect x="210" y="330" width="60" height="60" rx="8" fill="#e8eef7" stroke="#2456a6" stroke-width="2"/>
        <path d="M228,362 L228,372 Q228,375 231,375 L249,375 Q252,375 252,372 L252,362" fill="none" stroke="#2456a6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <line x1="240" y1="342" x2="240" y2="366" stroke="#2456a6" stroke-width="3" stroke-linecap="round"/>
        <path d="M233,350 L240,341 L247,350" fill="none" stroke="#2456a6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="240" cy="360" r="40" fill="none" stroke="#c62828" stroke-width="4"/>
        <text x="150" y="470" font-size="14" text-anchor="middle" font-family="Arial" fill="#333">Tap the share icon, then choose</text>
        <text x="150" y="490" font-size="14" text-anchor="middle" font-family="Arial" fill="#333">Messages and pick who to send it to</text>
      `) }
    ]
  },
  {
    title: "Share a Link in a Text or Email",
    summary: "Send a webpage or article to someone else with just a couple of taps.",
    steps: [
      { caption: "While looking at a webpage in your browser, look for the share icon — a small box with an arrow pointing up. It's usually near the address bar at the top, or along the bottom of the screen.",
        img: phoneFrame(`
        <rect x="18" y="26" width="264" height="508" fill="#fff"/>
        <rect x="30" y="46" width="240" height="34" rx="8" fill="#eee"/>
        <text x="42" y="68" font-size="13" font-family="Arial" fill="#555">example.com/article</text>
        <rect x="235" y="46" width="34" height="34" rx="8" fill="none" stroke="#c62828" stroke-width="3.5"/>
        <path d="M245,68 L245,74 Q245,76 247,76 L259,76 Q261,76 261,74 L261,68" fill="none" stroke="#2456a6" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
        <line x1="253" y1="52" x2="253" y2="70" stroke="#2456a6" stroke-width="2.4" stroke-linecap="round"/>
        <path d="M248,58 L253,52 L258,58" fill="none" stroke="#2456a6" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
        <line x1="200" y1="130" x2="252" y2="88" stroke="#c62828" stroke-width="3" marker-end="url(#arrow)"/>
        <text x="150" y="160" font-size="13" text-anchor="middle" font-family="Arial" fill="#555">Tap the share icon near the address bar</text>
        <rect x="40" y="210" width="220" height="16" rx="4" fill="#e4e4e4"/>
        <rect x="40" y="236" width="180" height="16" rx="4" fill="#e4e4e4"/>
        <rect x="40" y="262" width="200" height="16" rx="4" fill="#e4e4e4"/>
      `) },
      { caption: "Choose Messages or Email from the share menu, then pick who you want to send it to.",
        img: phoneFrame(`
        <rect x="18" y="26" width="264" height="508" fill="#fff"/>
        <text x="150" y="70" font-size="18" font-weight="700" text-anchor="middle" font-family="Arial" fill="#111">Share with...</text>
        <circle cx="70" cy="130" r="26" fill="#8fa8cf"/>
        <text x="70" y="172" font-size="13" text-anchor="middle" font-family="Arial">Messages</text>
        <circle cx="150" cy="130" r="26" fill="#8fa8cf"/>
        <text x="150" y="172" font-size="13" text-anchor="middle" font-family="Arial">Email</text>
        <circle cx="150" cy="130" r="34" fill="none" stroke="#c62828" stroke-width="4"/>
        <circle cx="230" cy="130" r="26" fill="#8fa8cf"/>
        <text x="230" y="172" font-size="13" text-anchor="middle" font-family="Arial">Copy</text>
        <text x="150" y="230" font-size="14" text-anchor="middle" fill="#555" font-family="Arial">Choose Email or Messages to share the link</text>
      `) },
      { caption: "The link will appear in your message, ready to send. Pick the person, then tap the green arrow to send it.",
        img: phoneFrame(`
        <rect x="18" y="26" width="264" height="40" fill="#173463"/>
        <text x="150" y="52" fill="#fff" font-size="18" text-anchor="middle" font-family="Arial">New Message</text>
        <rect x="30" y="80" width="240" height="34" rx="8" fill="#eee"/>
        <text x="40" y="103" font-size="16" font-family="Arial" fill="#888">To: Type a name...</text>
        <rect x="30" y="440" width="240" height="60" rx="10" fill="#eef2f9"/>
        <text x="42" y="462" font-size="13" font-family="Arial" fill="#2456a6">example.com/article</text>
        <text x="42" y="482" font-size="12" font-family="Arial" fill="#555">Check this out!</text>
        <circle cx="248" cy="520" r="22" fill="#2e9e4f"/>
        ${icoSendArrow(248,520,0.9)}
        <circle cx="248" cy="520" r="32" fill="none" stroke="#c62828" stroke-width="4"/>
        <text x="130" y="545" font-size="13" text-anchor="middle" fill="#555" font-family="Arial">Tap the green arrow to send</text>
      `) }
    ]
  },
  {
    title: "Adjust Brightness and Sound",
    summary: "Make your screen easier to see and your phone easier to hear.",
    steps: [
      { caption: "Swipe down from the top-right of your screen (or up from the bottom, depending on your device) to open quick controls, including a brightness slider shown with a sun icon.",
        img: phoneFrame(`
        <rect x="18" y="26" width="264" height="508" fill="#173463"/>
        <rect x="34" y="46" width="232" height="90" rx="16" fill="#22406e"/>
        <circle cx="60" cy="80" r="10" fill="#ffd166"/>
        <line x1="60" y1="60" x2="60" y2="66" stroke="#ffd166" stroke-width="2"/>
        <line x1="60" y1="94" x2="60" y2="100" stroke="#ffd166" stroke-width="2"/>
        <line x1="46" y1="80" x2="40" y2="80" stroke="#ffd166" stroke-width="2"/>
        <rect x="84" y="72" width="160" height="16" rx="8" fill="#3a5a8a"/>
        <circle cx="200" cy="80" r="10" fill="#fff"/>
        <text x="60" y="118" font-size="12" font-family="Arial" fill="#fff">Brightness</text>
        <circle cx="200" cy="80" r="20" fill="none" stroke="#c62828" stroke-width="4"/>
        <text x="150" y="230" font-size="14" text-anchor="middle" font-family="Arial" fill="#fff">Slide right for brighter,</text>
        <text x="150" y="250" font-size="14" text-anchor="middle" font-family="Arial" fill="#fff">left for dimmer</text>
      `) },
      { caption: "In that same panel, look for the volume slider — usually shown with a speaker icon — and slide it to make your phone louder or quieter.",
        img: phoneFrame(`
        <rect x="18" y="26" width="264" height="508" fill="#173463"/>
        <rect x="34" y="46" width="232" height="90" rx="16" fill="#22406e"/>
        ${icoWifi(60,80,0.9,'#ffd166')}
        <rect x="84" y="72" width="160" height="16" rx="8" fill="#3a5a8a"/>
        <circle cx="160" cy="80" r="10" fill="#fff"/>
        <text x="60" y="118" font-size="12" font-family="Arial" fill="#fff">Volume</text>
        <circle cx="160" cy="80" r="20" fill="none" stroke="#c62828" stroke-width="4"/>
        <text x="150" y="230" font-size="14" text-anchor="middle" font-family="Arial" fill="#fff">Slide right for louder,</text>
        <text x="150" y="250" font-size="14" text-anchor="middle" font-family="Arial" fill="#fff">left for quieter</text>
      `) },
      { caption: "For more control over ringtones, alerts, and call volume, open Settings and tap Sounds.",
        img: phoneFrame(`
        <rect x="18" y="26" width="264" height="40" fill="#173463"/>
        <text x="150" y="52" fill="#fff" font-size="20" font-weight="700" text-anchor="middle" font-family="Arial">Settings</text>
        <text x="34" y="110" font-size="18" font-family="Arial" fill="#111">General</text>
        <text x="34" y="150" font-size="18" font-family="Arial" fill="#111">Sounds</text>
        <rect x="18" y="130" width="264" height="36" fill="none" stroke="#c62828" stroke-width="4" rx="6"/>
        <line x1="150" y1="205" x2="150" y2="172" stroke="#c62828" stroke-width="3" marker-end="url(#arrow)"/>
        <text x="34" y="190" font-size="18" font-family="Arial" fill="#111">Notifications</text>
      `) }
    ]
  },
  {
    title: "Adjust Notifications",
    summary: "Choose which apps can send you alerts, and how loud or quiet they are.",
    steps: [
      { caption: "Swipe down or tap the search icon, then type \"Settings\" and tap the result to open it. Searching works for finding any app — and Aiden's always happy to help if you get stuck.",
        img: searchFrame(icoGear, '#8a8f98', 'Settings') },
      { caption: "Tap Notifications to see which apps are allowed to alert you.",
        img: phoneFrame(`
        <rect x="18" y="26" width="264" height="40" fill="#173463"/>
        <text x="150" y="52" fill="#fff" font-size="20" font-weight="700" text-anchor="middle" font-family="Arial">Settings</text>
        <text x="34" y="110" font-size="18" font-family="Arial" fill="#111">Sounds</text>
        <text x="34" y="150" font-size="18" font-family="Arial" fill="#111">Notifications</text>
        <rect x="18" y="130" width="264" height="36" fill="none" stroke="#c62828" stroke-width="4" rx="6"/>
        <line x1="150" y1="205" x2="150" y2="172" stroke="#c62828" stroke-width="3" marker-end="url(#arrow)"/>
        <text x="34" y="190" font-size="18" font-family="Arial" fill="#111">Privacy</text>
      `) },
      { caption: "Tap an app's name, then turn its notifications on or off. Green means notifications are turned on for that app.",
        img: phoneFrame(`
        <rect x="18" y="26" width="264" height="40" fill="#173463"/>
        <text x="150" y="52" fill="#fff" font-size="18" text-anchor="middle" font-family="Arial">Notifications</text>
        <text x="34" y="106" font-size="17" font-family="Arial" fill="#111">Messages</text>
        ${icoToggle(220,90,true)}
        <circle cx="238" cy="100" r="30" fill="none" stroke="#c62828" stroke-width="4"/>
        <text x="34" y="150" font-size="17" font-family="Arial" fill="#111">Email</text>
        ${icoToggle(220,134,false)}
        <line x1="170" y1="150" x2="220" y2="118" stroke="#c62828" stroke-width="3" marker-end="url(#arrow)"/>
        <text x="150" y="200" font-size="13" text-anchor="middle" fill="#555" font-family="Arial">Green means notifications are turned on</text>
      `) }
    ]
  },
  {
    title: "Answer or Decline a Phone Call",
    summary: "Pick up when you want to talk, or send it to voicemail if it's not a good time.",
    steps: [
      { caption: "When someone calls, you'll see their name on the screen along with a green button and a red button.",
        img: phoneFrame(`
        <rect x="18" y="26" width="264" height="508" fill="#0b2340"/>
        <circle cx="150" cy="150" r="50" fill="#8fa8cf"/>
        <text x="150" y="230" fill="#fff" font-size="20" font-weight="700" text-anchor="middle" font-family="Arial">Incoming Call</text>
        <text x="150" y="256" fill="#cdd7e6" font-size="16" text-anchor="middle" font-family="Arial">David</text>
        <circle cx="90" cy="460" r="34" fill="#c62828" stroke="#fff" stroke-width="4"/>
        ${icoPhoneHandset(90,460,1.3,'#fff',135)}
        <circle cx="210" cy="460" r="34" fill="#2e9e4f" stroke="#fff" stroke-width="4"/>
        ${icoPhoneHandset(210,460,1.3,'#fff',0)}
        <text x="90" y="510" fill="#fff" font-size="13" text-anchor="middle" font-family="Arial">Decline</text>
        <text x="210" y="510" fill="#fff" font-size="13" text-anchor="middle" font-family="Arial">Answer</text>
      `) },
      { caption: "To take the call, tap or slide the green button.",
        img: phoneFrame(`
        <rect x="18" y="26" width="264" height="508" fill="#0b2340"/>
        <circle cx="150" cy="150" r="50" fill="#8fa8cf"/>
        <text x="150" y="230" fill="#fff" font-size="20" font-weight="700" text-anchor="middle" font-family="Arial">Incoming Call</text>
        <text x="150" y="256" fill="#cdd7e6" font-size="16" text-anchor="middle" font-family="Arial">David</text>
        <circle cx="90" cy="460" r="34" fill="#c62828" stroke="#fff" stroke-width="4"/>
        ${icoPhoneHandset(90,460,1.3,'#fff',135)}
        <circle cx="210" cy="460" r="34" fill="#2e9e4f" stroke="#fff" stroke-width="4"/>
        ${icoPhoneHandset(210,460,1.3,'#fff',0)}
        <circle cx="210" cy="460" r="46" fill="none" stroke="#c62828" stroke-width="4"/>
        <line x1="165" y1="410" x2="198" y2="440" stroke="#c62828" stroke-width="3" marker-end="url(#arrow)"/>
        <text x="90" y="510" fill="#fff" font-size="13" text-anchor="middle" font-family="Arial">Decline</text>
        <text x="210" y="510" fill="#fff" font-size="13" text-anchor="middle" font-family="Arial">Answer</text>
      `) },
      { caption: "If it's not a good time, tap the red button instead — the call goes to voicemail, and they can leave you a message.",
        img: phoneFrame(`
        <rect x="18" y="26" width="264" height="508" fill="#0b2340"/>
        <circle cx="150" cy="150" r="50" fill="#8fa8cf"/>
        <text x="150" y="230" fill="#fff" font-size="20" font-weight="700" text-anchor="middle" font-family="Arial">Incoming Call</text>
        <text x="150" y="256" fill="#cdd7e6" font-size="16" text-anchor="middle" font-family="Arial">David</text>
        <circle cx="90" cy="460" r="34" fill="#c62828" stroke="#fff" stroke-width="4"/>
        ${icoPhoneHandset(90,460,1.3,'#fff',135)}
        <circle cx="210" cy="460" r="34" fill="#2e9e4f" stroke="#fff" stroke-width="4"/>
        ${icoPhoneHandset(210,460,1.3,'#fff',0)}
        <circle cx="90" cy="460" r="46" fill="none" stroke="#c62828" stroke-width="4"/>
        <line x1="135" y1="410" x2="102" y2="440" stroke="#c62828" stroke-width="3" marker-end="url(#arrow)"/>
        <text x="90" y="510" fill="#fff" font-size="13" text-anchor="middle" font-family="Arial">Decline</text>
        <text x="210" y="510" fill="#fff" font-size="13" text-anchor="middle" font-family="Arial">Answer</text>
      `) }
    ]
  },
  {
    title: "Set a Reminder or Alarm",
    summary: "Never forget an appointment or medicine time again.",
    steps: [
      { caption: "Swipe down or tap the search icon, then type \"Clock\" and tap the result to open it. Searching works for finding any app — and Aiden's always happy to help if you get stuck.",
        img: searchFrame(icoClock, '#8a8f98', 'Clock') },
      { caption: "Tap Alarm near the top, then tap the plus (+) button to add a new one.",
        img: phoneFrame(`
        <rect x="18" y="26" width="264" height="40" fill="#173463"/>
        <text x="150" y="52" fill="#fff" font-size="20" font-weight="700" text-anchor="middle" font-family="Arial">Alarms</text>
        <circle cx="255" cy="46" r="15" fill="#2e9e4f"/>
        ${icoPlus(255,46,0.9)}
        <circle cx="255" cy="46" r="26" fill="none" stroke="#c62828" stroke-width="4"/>
        <line x1="205" y1="115" x2="238" y2="66" stroke="#c62828" stroke-width="3" marker-end="url(#arrow)"/>
        <text x="34" y="110" font-size="18" font-family="Arial" fill="#111">7:00 AM — Weekdays</text>
        <text x="150" y="230" font-size="13" text-anchor="middle" fill="#555" font-family="Arial">Tap the + to add a new alarm</text>
      `) },
      { caption: "Set the time you want, then tap Save — your phone will ring at that time every day.",
        img: phoneFrame(`
        <rect x="18" y="26" width="264" height="40" fill="#173463"/>
        <text x="150" y="52" fill="#fff" font-size="18" text-anchor="middle" font-family="Arial">New Alarm</text>
        <text x="150" y="170" font-size="38" text-anchor="middle" font-family="Arial" fill="#111" font-weight="700">9:00 AM</text>
        <rect x="86" y="470" width="128" height="40" rx="20" fill="#2e9e4f"/>
        ${icoCheck(120,490,1)}
        <text x="150" y="497" font-size="16" font-weight="700" text-anchor="middle" fill="#fff" font-family="Arial">Save</text>
        <circle cx="150" cy="490" r="46" fill="none" stroke="#c62828" stroke-width="4"/>
        <line x1="150" y1="420" x2="150" y2="440" stroke="#c62828" stroke-width="3" marker-end="url(#arrow)"/>
        <text x="150" y="400" font-size="13" text-anchor="middle" fill="#555" font-family="Arial">Set the time, then tap Save</text>
      `) }
    ]
  },
  {
    title: "Join a Zoom Video Call",
    summary: "Join a video call for a class, church service, or family gathering with one tap.",
    steps: [
      { caption: "You'll usually get a link by text or email, like this one. Just tap the blue link to join — there's no need to type anything.",
        img: phoneFrame(`
        <rect x="18" y="26" width="264" height="508" fill="#f4f6fa"/>
        <rect x="30" y="80" width="240" height="70" rx="10" fill="#fff" stroke="#98a2b3" stroke-width="1.5"/>
        <text x="42" y="105" font-size="13" font-family="Arial" fill="#333">Join us for the family call:</text>
        <text x="42" y="128" font-size="13" font-family="Arial" fill="#2456a6" text-decoration="underline">zoom.us/j/123456789</text>
        <rect x="36" y="118" width="180" height="18" fill="none" stroke="#c62828" stroke-width="3" rx="4"/>
        <line x1="150" y1="200" x2="126" y2="150" stroke="#c62828" stroke-width="3" marker-end="url(#arrow)"/>
        <text x="150" y="230" font-size="13" text-anchor="middle" fill="#555" font-family="Arial">Tap the blue link to join — no typing needed</text>
      `) },
      { caption: "If asked, tap \"Join with Video\" and \"Join with Audio\" so the others on the call can see and hear you.",
        img: phoneFrame(`
        <rect x="18" y="26" width="264" height="508" fill="#0b2340"/>
        <text x="150" y="90" fill="#fff" font-size="18" font-weight="700" text-anchor="middle" font-family="Arial">Ready to join?</text>
        <rect x="60" y="150" width="180" height="44" rx="22" fill="#2456a6"/>
        <text x="150" y="177" font-size="15" font-weight="700" text-anchor="middle" fill="#fff" font-family="Arial">Join with Video</text>
        <rect x="60" y="210" width="180" height="44" rx="22" fill="#2e9e4f"/>
        <text x="150" y="237" font-size="15" font-weight="700" text-anchor="middle" fill="#fff" font-family="Arial">Join with Audio</text>
        <circle cx="150" cy="172" r="55" fill="none" stroke="#c62828" stroke-width="4"/>
        <line x1="150" y1="120" x2="150" y2="145" stroke="#c62828" stroke-width="3" marker-end="url(#arrow)"/>
        <text x="150" y="290" font-size="13" text-anchor="middle" fill="#cdd7e6" font-family="Arial">Tap both so others can see and hear you</text>
      `) },
      { caption: "That's it — you're in the meeting! Tap the red button anytime you're ready to leave.",
        img: phoneFrame(`
        <rect x="18" y="26" width="264" height="508" fill="#0b2340"/>
        <rect x="34" y="50" width="232" height="360" rx="10" fill="#1a3a63"/>
        <circle cx="150" cy="200" r="50" fill="#8fa8cf"/>
        <text x="150" y="420" fill="#cdd7e6" font-size="13" text-anchor="middle" font-family="Arial">You're in the meeting</text>
        <circle cx="150" cy="470" r="30" fill="#c62828" stroke="#fff" stroke-width="4"/>
        ${icoPhoneHandset(150,470,1.1,'#fff',135)}
        <text x="150" y="522" fill="#fff" font-size="13" text-anchor="middle" font-family="Arial">Tap the red button anytime to leave</text>
      `) }
    ]
  },
  {
    title: "Use Voice Typing Instead of Typing",
    summary: "Speak your message out loud and let your phone type it for you.",
    steps: [
      { caption: "When you see a keyboard, look for the small microphone icon, usually near the spacebar.",
        img: phoneFrame(`
        <rect x="18" y="26" width="264" height="508" fill="#fff"/>
        <rect x="30" y="440" width="240" height="70" rx="8" fill="#eee"/>
        <text x="40" y="465" font-size="15" font-family="Arial" fill="#888">Type your message</text>
        <circle cx="245" cy="475" r="16" fill="#2456a6"/>
        ${icoMic(245,475,0.9)}
        <circle cx="245" cy="475" r="26" fill="none" stroke="#c62828" stroke-width="4"/>
        <line x1="200" y1="410" x2="230" y2="452" stroke="#c62828" stroke-width="3" marker-end="url(#arrow)"/>
        <text x="150" y="390" font-size="13" text-anchor="middle" fill="#555" font-family="Arial">Look for the small microphone icon</text>
      `) },
      { caption: "Tap the microphone and start speaking clearly. Your words appear as text right on the screen.",
        img: phoneFrame(`
        <rect x="18" y="26" width="264" height="508" fill="#fff"/>
        <rect x="30" y="440" width="240" height="70" rx="8" fill="#eef2f9" stroke="#2456a6" stroke-width="1.5"/>
        <text x="42" y="465" font-size="14" font-family="Arial" fill="#173463">Listening…</text>
        <circle cx="245" cy="475" r="16" fill="#c62828"/>
        ${icoMic(245,475,0.9)}
        <line x1="60" y1="480" x2="60" y2="465" stroke="#2456a6" stroke-width="3" stroke-linecap="round"/>
        <line x1="75" y1="485" x2="75" y2="460" stroke="#2456a6" stroke-width="3" stroke-linecap="round"/>
        <line x1="90" y1="480" x2="90" y2="470" stroke="#2456a6" stroke-width="3" stroke-linecap="round"/>
        <text x="150" y="400" font-size="13" text-anchor="middle" fill="#555" font-family="Arial">Speak clearly — your words appear as text</text>
      `) },
      { caption: "Tap the text box when you're done to go back to typing, then send your message as usual.",
        img: phoneFrame(`
        <rect x="18" y="26" width="264" height="508" fill="#fff"/>
        <rect x="30" y="440" width="240" height="70" rx="8" fill="#eee"/>
        <text x="40" y="465" font-size="14" font-family="Arial" fill="#111">Hi Susan, see you Saturday!</text>
        <circle cx="245" cy="475" r="16" fill="#2e9e4f"/>
        ${icoSendArrow(245,475,0.8)}
        <circle cx="245" cy="475" r="26" fill="none" stroke="#c62828" stroke-width="4"/>
        <text x="150" y="400" font-size="13" text-anchor="middle" fill="#555" font-family="Arial">Tap the box to type more, or send as usual</text>
      `) }
    ]
  },
  {
    title: "Restart Your Device",
    summary: "A simple trick that fixes many problems — try this first when something isn't working right.",
    steps: [
      { caption: "Press and hold the side (power) button for a few seconds until you see a slider or a power symbol appear.",
        img: phoneFrame(`
        <rect x="18" y="26" width="264" height="508" fill="#f4f6fa"/>
        <rect x="18" y="26" width="264" height="508" fill="#ffffff" opacity="0.5"/>
        <rect x="292" y="120" width="10" height="60" rx="4" fill="#d4a24a"/>
        <circle cx="297" cy="150" r="26" fill="none" stroke="#c62828" stroke-width="4"/>
        <text x="150" y="330" font-size="16" font-weight="700" text-anchor="middle" font-family="Arial" fill="#173463">Press and Hold the Side Button</text>
        <text x="150" y="356" font-size="13" text-anchor="middle" font-family="Arial" fill="#555">for a few seconds</text>
      `) },
      { caption: "Slide the power symbol (or tap Restart), then wait about 30 seconds while your device turns off and back on.",
        img: phoneFrame(`
        <rect x="18" y="26" width="264" height="508" fill="#0b2340"/>
        ${icoPower(150,150,2.4,'#fff')}
        <rect x="70" y="220" width="160" height="44" rx="22" fill="#3a5a8a"/>
        <circle cx="90" cy="242" r="18" fill="#fff"/>
        <text x="160" y="248" font-size="14" text-anchor="middle" fill="#cdd7e6" font-family="Arial">slide to power off</text>
        <circle cx="150" cy="242" r="46" fill="none" stroke="#c62828" stroke-width="4"/>
        <text x="150" y="320" font-size="13" text-anchor="middle" fill="#cdd7e6" font-family="Arial">Slide across, then wait about 30 seconds</text>
      `) },
      { caption: "That's it — many small problems, like a frozen screen or an app acting strange, are fixed simply by restarting.",
        img: confirmFrame("All Done!", ["Your device restarted —", "many small problems are now fixed."]) }
    ]
  },
  {
    title: "Get Directions with Maps",
    summary: "Find your way somewhere new, with turn-by-turn directions read out loud.",
    steps: [
      { caption: "Swipe down or tap the search icon, then type \"Maps\" and tap the result to open it. Searching works for finding any app — and Aiden's always happy to help if you get stuck.",
        img: searchFrame(icoMapPin, '#2e9e4f', 'Maps') },
      { caption: "Tap the search bar at the top and type where you want to go — a store name, address, or \"Dr. Smith's office\" all work.",
        img: phoneFrame(`
        <rect x="18" y="26" width="264" height="508" fill="#eaf3e6"/>
        <rect x="34" y="46" width="232" height="40" rx="20" fill="#fff" stroke="#98a2b3" stroke-width="1.6"/>
        <circle cx="56" cy="66" r="7" fill="none" stroke="#555" stroke-width="2"/>
        <line x1="61" y1="71" x2="66" y2="76" stroke="#555" stroke-width="2" stroke-linecap="round"/>
        <text x="78" y="72" font-size="14" font-family="Arial" fill="#888">Search for a place</text>
        <rect x="34" y="46" width="232" height="40" fill="none" stroke="#c62828" stroke-width="4" rx="20"/>
        <line x1="150" y1="140" x2="150" y2="96" stroke="#c62828" stroke-width="3" marker-end="url(#arrow)"/>
        <text x="150" y="170" font-size="13" text-anchor="middle" fill="#333" font-family="Arial">Type a store, address, or name</text>
      `) },
      { caption: "Tap Start — your phone will read the directions out loud as you drive or walk.",
        img: phoneFrame(`
        <rect x="18" y="26" width="264" height="508" fill="#eaf3e6"/>
        <rect x="34" y="380" width="232" height="120" rx="14" fill="#fff"/>
        <text x="150" y="410" font-size="15" font-weight="700" text-anchor="middle" font-family="Arial" fill="#111">12 minutes away</text>
        <rect x="70" y="425" width="160" height="42" rx="21" fill="#2456a6"/>
        <text x="150" y="451" font-size="15" font-weight="700" text-anchor="middle" fill="#fff" font-family="Arial">Start</text>
        <circle cx="150" cy="446" r="50" fill="none" stroke="#c62828" stroke-width="4"/>
        <text x="150" y="500" font-size="13" text-anchor="middle" fill="#333" font-family="Arial">Tap Start — directions are read aloud as you go</text>
      `) }
    ]
  }
];
let currentGuide = 0, currentStep = 0;
function renderThumb(idx){
  const g = guides[idx];
  const stepCount = g.steps.length;
  return `<div class="guide-card">
    <button class="guide-thumb" onclick="openModal(${idx})" aria-label="View picture guide: ${g.title}">
      ${g.steps[0].img}
    </button>
    <h3>${g.title}</h3>
    <p class="step-count">${stepCount} step${stepCount>1?'s':''} — tap to see them one at a time</p>
    <p class="caption">${g.summary}</p>
    <div class="guide-actions">
      <button class="chip-btn" onclick="openModal(${idx})">View Big Step-by-Step Pictures</button>
      <button class="chip-btn" onclick="printGuide(${idx})">🖨️ Print</button>
    </div>
  </div>`;
}
const featuredGuideIndexes = new Set([1,4,6,7,8,9]);
document.getElementById('guideGrid').innerHTML = guides
  .map((g,i)=> featuredGuideIndexes.has(i) ? '' : renderThumb(i))
  .join('');
function openModal(idx, stepIdx){
  currentGuide = idx; currentStep = stepIdx || 0;
  document.getElementById('modalBackdrop').classList.add('open');
  renderModal();
}
function closeModal(){
  document.getElementById('modalBackdrop').classList.remove('open');
  if('speechSynthesis' in window) window.speechSynthesis.cancel();
}
function renderModal(){
  const g = guides[currentGuide];
  const step = g.steps[currentStep];
  document.getElementById('modalTitle').textContent = g.title;
  document.getElementById('modalSvgHolder').innerHTML = step.img;
  document.getElementById('modalCaption').textContent = step.caption;
  document.getElementById('stepDots').textContent = `Step ${currentStep+1} of ${g.steps.length}`;
  document.getElementById('btnBack').disabled = currentStep === 0;
  document.getElementById('btnNext').textContent = currentStep === g.steps.length-1 ? 'Done ✓' : 'Next ▶';
}
function stepGuide(dir){
  if('speechSynthesis' in window) window.speechSynthesis.cancel();
  const g = guides[currentGuide];
  if(dir>0 && currentStep === g.steps.length-1){ closeModal(); return; }
  currentStep = Math.min(g.steps.length-1, Math.max(0, currentStep+dir));
  renderModal();
}
/* ---- Read Aloud voice selection ----
   Chrome/Safari often default to a flat, robotic voice unless we pick one
   explicitly. This looks for the warmest, most natural-sounding English
   voice the browser/OS makes available, and falls back gracefully if
   nothing better is found. Voices can load asynchronously, so we cache
   the choice and refresh it if the browser reports the list has changed. */
let cachedVoice = null;
function pickReadAloudVoice(){
  if(!('speechSynthesis' in window)) return null;
  const voices = window.speechSynthesis.getVoices();
  if(!voices.length) return null;
  const preferredNames = [
    'Google US English',
    'Samantha',
    'Microsoft Aria Online (Natural)',
    'Microsoft Jenny Online (Natural)',
    'Microsoft Guy Online (Natural)',
    'Alex',
    'Google UK English Female'
  ];
  for(const name of preferredNames){
    const match = voices.find(v => v.name === name);
    if(match) return match;
  }
  const enhanced = voices.find(v => /^en/i.test(v.lang) && /natural|enhanced|premium/i.test(v.name));
  if(enhanced) return enhanced;
  const english = voices.find(v => /^en/i.test(v.lang));
  if(english) return english;
  return voices[0];
}
if('speechSynthesis' in window){
  window.speechSynthesis.onvoiceschanged = () => { cachedVoice = pickReadAloudVoice(); };
  cachedVoice = pickReadAloudVoice();
}
function speakCaption(){
  if(!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel(); // stop any previous line so taps never overlap
  const g = guides[currentGuide];
  const step = g.steps[currentStep];
  const text = g.steps.length > 1 ? `Step ${currentStep+1} of ${g.steps.length}. ${step.caption}` : step.caption;
  const u = new SpeechSynthesisUtterance(text);
  const voice = cachedVoice || pickReadAloudVoice();
  if(voice) u.voice = voice;
  u.lang = (voice && voice.lang) || 'en-US';
  u.rate = 0.92;
  u.pitch = 1.02;
  window.speechSynthesis.speak(u);
}
function printGuide(idx){
  const g = guides[idx];
  const w = window.open('', '_blank');
  w.document.write(`<html><head><title>${g.title}</title></head><body style="font-family:Arial;padding:30px;">
    <h1>${g.title}</h1>
    ${g.steps.map((s,i)=>`<div style="margin-bottom:24px;"><h3>Step ${i+1}</h3>${s.img}<p style="font-size:18px;">${s.caption}</p></div>`).join('')}
  </body></html>`);
  w.document.close();
  w.print();
}
document.getElementById('modalBackdrop').addEventListener('click', e=>{
  if(e.target.id === 'modalBackdrop') closeModal();
});
document.addEventListener('keydown', e=>{
  if(!document.getElementById('modalBackdrop').classList.contains('open')) return;
  if(e.key==='Escape') closeModal();
  if(e.key==='ArrowRight') stepGuide(1);
  if(e.key==='ArrowLeft') stepGuide(-1);
});
