// ===== DATA =====
const PHONES = [
  { id:'moto',name:'Motorola Edge 50 Fusion',short:'Motorola',rank:1,price:'199 \u20ac',priceLabel:'promo (PVC 449\u20ac)',img:'https://fdn2.gsmarena.com/vv/pics/motorola/motorola-edge50-fusion-1.jpg',tag:'Meilleur choix',tagClass:'tag-best',tagIcon:'fa-trophy',eliminate:false,reason:'',
    specs:{
      prix:{dispo:'Large (Fnac, Amazon, Boulanger)',sortie:'Mai 2024',lancement:'449 \u20ac'},
      perf:{proc:'Snapdragon 7s Gen 2 (4nm)',cpu:'4\u00d72.4GHz A78 + 4\u00d71.95GHz A55',gpu:'Adreno 710',antutu:'~580 000',geekbench:'~2 938',ram:'8 Go LPDDR4X',stockage:'256 Go UFS 2.2',microSD:'\u274c Non',wifi:'Wi-Fi 5 (ac)',bluetooth:'5.2',usb:'Type-C 2.0'},
      ecran:{dalle:'6,7" pOLED courbe \u2b50',def:'FHD+ 2400\u00d71080',ppi:395,rafraichissement:'144 Hz \u2b50',touch:'360 Hz (jeu)',luminosite:'1600 nits',hdr:'\u274c Non',protection:'Gorilla Glass 5 \u2b50',couleurs:'1,07 Md (10-bit) \u2b50',ratio:'92%'},
      batterie:{capacite:'5000 mAh',charge:'68W TurboPower \u2b50',t50:'15 min \u2b50',t100:'~45 min \u2b50',bypass:'\u274c Non',sansfil:'\u274c Non',autonomieGSMA:'12h40',jeu:'~6-7h',youtube:'~13h',chargeurInclus:'\u2705 68W'},
      photo:{principal:'50 MP f/1.88 OIS',secondaire:'13 MP ultra grand-angle 120\u00b0 \u2b50',selfie:'32 MP f/2.45 \u2b50',videoAr:'4K@30fps \u2b50',videoSelfie:'4K@30fps \u2b50',flash:'LED double ton \u2b50',nuit:'Vision nocturne Ultra-Res',qualite:'Bonne colorim\u00e9trie'},
      design:{poids:'174,9 g \u2b50',dimensions:'161,9\u00d773,1\u00d77,9 mm \u2b50',ip:'IP68 (1,5m/30min) \u2b50',verre:'Gorilla Glass 5 \u2b50',materiau:'Cuir v\u00e9gan / PMMA mat \u2b50',ecran:'Bords incurv\u00e9s \u2b50',coloris:'Forest Blue, Hot Pink, Marshmallow Blue'},
      logiciel:{os:'Android 14 \u2192 15',osGaranties:'2 versions (14\u219216)',secuGaranties:'4 ans / mensuels',interface:'Android quasi-stock + ThinkShield \u2b50',bloatware:'Minimal \u2b50'},
      connectivite:{esim:'\u2705 Oui \u2b50',nfc:'\u2705 Oui \u2b50',g5:'\u2705 Sub-6 SA/NSA',audio:'St\u00e9r\u00e9o + Dolby Atmos + Spatial \u2b50',jack:'\u274c Non',gps:'GPS, A-GPS, GLONASS, Galileo, BeiDou, QZSS',fmradio:'\u274c Non'},
      ia:{photo:'Magic Editor, Gomme magique, Photo Unblur \u2b50',systeme:'Circle to Search, Moto AI (r\u00e9sum\u00e9 texte) \u2b50',assistant:'Google Gemini \u2b50'},
    },
    pro:['Photo ultra grand-angle 13 MP','Charge 68W ultra-rapide','Design cuir v\u00e9gan premium','IP68 r\u00e9sistant \u00e0 l\'eau','Android stock, sans bloatware','eSIM + NFC + Dolby Atmos','L\u00e9ger (175 g)'],
    con:['Puce limit\u00e9e en gaming','Pas de HDR','Pas de microSD','Pas de Wi-Fi 6','Pas de charge sans fil'],
  },
  { id:'honor',name:'Honor 600 Lite 5G',short:'Honor 600L',rank:2,price:'199 \u20ac',priceLabel:'SFR/RED (699\u20ac\u2192199\u20ac)',img:'https://fdn2.gsmarena.com/vv/pics/honor/honor-600-lite-1.jpg',tag:'Batterie 6520 mAh',tagClass:'tag-durable',tagIcon:'fa-bolt',eliminate:false,reason:'',
    specs:{
      prix:{dispo:'SFR / RED by SFR (offre jusqu\u2019au 26/05)',sortie:'Mars 2026',lancement:'399 \u20ac'},
      perf:{proc:'MediaTek Dimensity 7100 Elite (6nm)',cpu:'4\u00d72.4GHz A78 + 4\u00d72.0GHz A55',gpu:'Mali-G610 MC2',antutu:'~680 000',geekbench:'~3 023',ram:'8 Go LPDDR4X',stockage:'256 Go UFS 2.2',microSD:'\u274c Non',wifi:'Wi-Fi 5 (ac)',bluetooth:'6.0 \u2b50',usb:'Type-C 2.0'},
      ecran:{dalle:'6,6\u2033 AMOLED plat \u2b50',def:'1,5K 1200\u00d72600',ppi:434,rafraichissement:'120 Hz',touch:'NC',        luminosite:'2000 nits HBM, 800 nits typ, 6500 nits peak \u2b50',hdr:'\u2705 1 Md couleurs (10-bit) \u2b50',protection:'Verre aluminosilicate',couleurs:'1,07 Md (10-bit) \u2b50',ratio:'90,1%'},
      batterie:{capacite:'6520 mAh \u2b50\u2b50',charge:'45W SuperCharge',t50:'~25 min',t100:'~65 min',bypass:'\u274c Non',sansfil:'\u274c Non (invers\u00e9e 6W filaire)',autonomieGSMA:'Non test\u00e9',jeu:'~10h \u2b50',youtube:'~18h \u2b50',chargeurInclus:'\u274c Non inclus'},
      photo:{principal:'108 MP f/1.75 PDAF',secondaire:'5 MP ultra grand-angle',selfie:'16 MP f/2.45',videoAr:'1080p@30fps',videoSelfie:'1080p@30fps',flash:'LED',nuit:'Mode Nuit IA',qualite:'Bonne de jour, pas d\'OIS'},
      design:{poids:'180 g',dimensions:'157,4\u00d775,4\u00d77,3 mm \u2b50',ip:'IP66 \u2b50',verre:'Aluminosilicate',materiau:'Aluminium monocoque + verre \u2b50',ecran:'Plat, bordures 1,23mm',coloris:'Sprout Green, Velvet Grey, Velvet Black'},
      logiciel:{os:'Android 16 natif \u2b50',osGaranties:'6 versions (16\u219222) \u2b50\u2b50',secuGaranties:'6 ans \u2b50\u2b50',interface:'MagicOS 10',bloatware:'Mod\u00e9r\u00e9 (Honor)'},
      connectivite:{esim:'\u2705 Oui \u2b50',nfc:'\u2705 Oui \u2b50',g5:'\u2705 Sub-6 SA/NSA',audio:'St\u00e9r\u00e9o sym\u00e9trique \u2b50',jack:'\u274c Non',gps:'GPS, A-GPS, GLONASS, Galileo, BeiDou',fmradio:'\u274c Non'},
      ia:{photo:'AI Eraser, AI Portrait, AI Motion Sensing \u2b50',systeme:'MagicOS AI Search, AI Semantic',assistant:'YOYO + Google Gemini \u2b50'},
    },
    pro:['Batterie 6520 mAh gigantesque \u2b50','6 ans mises \u00e0 jour Android + s\u00e9curit\u00e9','eSIM + NFC (Google Pay)','\u00c9cran AMOLED 120Hz 6500 nits peak','Charge rapide 45W','Design aluminium monocoque','IP66 r\u00e9sistant eau/poussi\u00e8re'],
    con:['Pas d\'OIS (photos moins nettes de nuit)','Pas de microSD (stockage fixe)','Vid\u00e9o limit\u00e9e \u00e0 1080p','Seulement 5 MP ultra grand-angle','Wi-Fi 5 (pas Wi-Fi 6)','MagicOS (bloatware mod\u00e9r\u00e9, pas stock)'],
  },

  { id:'xiaomi',name:'Xiaomi Redmi Note 15 5G',short:'Xiaomi RN15',rank:3,price:'269-299 \u20ac',priceLabel:'8/256 Go d\u00e8s ~269\u20ac',img:'https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-note-15-5g-1.jpg',tag:'\u00c9cran AMOLED 3200 nits',tagClass:'tag-value',tagIcon:'fa-bolt',eliminate:false,reason:'',
    specs:{
      prix:{dispo:'Moyenne (Xiaomi, Cdiscount, Amazon)',sortie:'Janvier 2026',lancement:'299 \u20ac'},
      perf:{proc:'Snapdragon 6 Gen 3 (4nm) \u2b50',cpu:'4\u00d72.4GHz A78 + 4\u00d71.8GHz A55',gpu:'Adreno 710',antutu:'~600 000',geekbench:'~2 800',ram:'8 Go LPDDR4X',stockage:'256 Go UFS 2.2',microSD:'\u2705 Oui (hybride, 1 To) \u2b50',wifi:'Wi-Fi 5 (ac)',bluetooth:'5.1',usb:'Type-C 2.0'},
      ecran:{dalle:'6,77" AMOLED incurv\u00e9 \u2b50',def:'2392\u00d71080',ppi:388,rafraichissement:'120 Hz',touch:'240 Hz / 2560 Hz (jeu)',luminosite:'3200 nits peak \u2b50',hdr:'\u274c Non',protection:'Gorilla Glass 7i \u2b50\u2b50',couleurs:'12-bit (DCI-P3) \u2b50',ratio:'92%'},
      batterie:{capacite:'5520 mAh',charge:'45W',t50:'~25 min',t100:'~60 min',bypass:'\u274c Non',sansfil:'\u274c Non (invers\u00e9e 18W)',autonomieGSMA:'Non test\u00e9',jeu:'~7h',youtube:'~14h',chargeurInclus:'\u274c Non inclus'},
      photo:{principal:'108 MP f/1.7 OIS \u2b50',secondaire:'8 MP ultra grand-angle',selfie:'20 MP f/2.2',videoAr:'4K@30fps \u2b50',videoSelfie:'1080p@30fps',flash:'LED',nuit:'Mode Nuit IA',qualite:'Bonne (108 MP OIS)'},
      design:{poids:'178 g \u2b50',dimensions:'164\u00d775,4\u00d77,35 mm \u2b50',ip:'IP65',verre:'Gorilla Glass 7i \u2b50\u2b50',materiau:'Plastique + cadre renforc\u00e9',ecran:'Incurv\u00e9',coloris:'Black, Glacier Blue, Mist Purple'},
      logiciel:{os:'Android 15 (HyperOS 2.0)',osGaranties:'4 versions (15\u219219) \u2b50',secuGaranties:'6 ans \u2b50',interface:'HyperOS 2.0',bloatware:'Significatif (pubs Xiaomi)'},
      connectivite:{esim:'\u274c Non',nfc:'\u2705 Oui \u2b50',g5:'\u2705',audio:'St\u00e9r\u00e9o + Dolby Atmos',jack:'\u274c Non',gps:'GPS, GLONASS, Galileo, BeiDou', fmradio:'\u274c Non'},
      ia:{photo:'AI Camera Enhance, AI Eraser 2.0 \u2b50',systeme:'HyperOS AI',assistant:'Google Assistant + Gemini'},
    },
    pro:['108 MP OIS + ultra grand-angle 8MP','\u00c9cran AMOLED 3200 nits, 12-bit, GG7i','6 ans mises \u00e0 jour s\u00e9curit\u00e9 \u2b50','4 versions OS (15\u219219) \u2b50','Batterie 5520 mAh + charge 45W','NFC + microSD 1 To','IP65 + Gorilla Glass 7i'],
    con:['Pas d\'eSIM','HyperOS avec pubs et bloatware','Wi-Fi 5 (pas Wi-Fi 6)','Bluetooth 5.1 (pas 5.3)','Chargeur non inclus','Pas de HDR','Pas de jack audio'],
  },
  { id:'redmi15',name:'Xiaomi Redmi 15 5G',short:'Xiaomi R15',rank:4,price:'158-180 \u20ac',priceLabel:'selon config',img:'https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-15-5g-1.jpg',tag:'Batterie 7000 mAh',tagClass:'tag-durable',tagIcon:'fa-bolt',eliminate:false,reason:'',
    specs:{
      prix:{dispo:'Moyenne (Xiaomi, Cdiscount, Amazon)',sortie:'Ao\u00fbt 2025',lancement:'~180 \u20ac'},
      perf:{proc:'Snapdragon 6s Gen 3 (6nm)',cpu:'2\u00d72.3GHz A78 + 6\u00d72.0GHz A55',gpu:'Adreno 619',antutu:'~460 000',geekbench:'~2 179',ram:'8 Go LPDDR4X',stockage:'256 Go UFS 2.2',microSD:'\u2705 Oui (hybride, 2 To) \u2b50',wifi:'Wi-Fi 5 (ac)',bluetooth:'5.1',usb:'Type-C 2.0'},
      ecran:{dalle:'6,9" IPS LCD 144Hz',def:'FHD+ 2340\u00d71080',ppi:374,rafraichissement:'144 Hz \u2b50',touch:'288 Hz',luminosite:'850 nits peak',hdr:'\u274c Non',protection:'Gorilla Glass 3',couleurs:'16,7 M',ratio:'~85,7%'},
      batterie:{capacite:'7000 mAh \u2b50\u2b50',charge:'33W',t50:'~35 min',t100:'~80 min',bypass:'\u274c Non',sansfil:'\u274c Non (invers\u00e9e 18W)',autonomieGSMA:'~67h endurance',jeu:'~9-10h \u2b50',youtube:'~16h \u2b50',chargeurInclus:'\u274c Non inclus'},
      photo:{principal:'50 MP f/1.8',secondaire:'Capteur auxiliaire \u274c',selfie:'8 MP f/2.0',videoAr:'1080p@30fps',videoSelfie:'1080p@30fps',flash:'LED',nuit:'Mode Nuit IA',qualite:'Correcte (pas d\'OIS)'},
      design:{poids:'217 g',dimensions:'169,5\u00d780,5\u00d78,4 mm',ip:'IP64',verre:'Gorilla Glass 3',materiau:'Plastique + cadre renforc\u00e9',ecran:'Plat',coloris:'Midnight Black, Titan Gray, Ripple Green'},
      logiciel:{os:'Android 15 (HyperOS 2.0)',osGaranties:'2 versions (15\u219217)',secuGaranties:'4 ans',interface:'HyperOS 2.0',bloatware:'Significatif (pubs Xiaomi)'},
      connectivite:{esim:'\u274c Non',nfc:'\u2705 Oui \u2b50',g5:'\u2705',audio:'Haut-parleur + Dolby Atmos',jack:'\u274c Non',gps:'GPS, GLONASS, Galileo, BeiDou',fmradio:'\u274c Non'},
      ia:{photo:'AI Eraser, AI Sky \u2b50',systeme:'HyperOS AI',assistant:'Google Assistant + Gemini'},
    },
    pro:['Batterie 7000 mAh record \u2b50','\u00c9cran 6,9" 144Hz fluide','NFC + microSD 2 To','IP64 r\u00e9sistant','Prix tr\u00e8s agressif ~160\u20ac','18W charge invers\u00e9e','Circle to Search + HyperOS 2.0'],
    con:['\u00c9cran IPS LCD (pas AMOLED)','Pas d\'ultra grand-angle','Selfie 8 MP seulement','SD 6s Gen 3 modeste','2 versions OS seulement','Chargeur non inclus','Lourd (217 g)'],
  },
  { id:'realme',name:'Realme 14 5G',short:'Realme 14',rank:5,price:'165-199 \u20ac',priceLabel:'12/256 Go',img:'https://fdn2.gsmarena.com/vv/pics/realme/realme-14-5g-1.jpg',tag:'Gaming + autonomie',tagClass:'tag-gaming',tagIcon:'fa-gamepad',eliminate:false,reason:'',
    specs:{
      prix:{dispo:'Moyenne (Cdiscount, AliExpress, Fnac)',sortie:'Mars 2025',lancement:'349 \u20ac'},
      perf:{proc:'Snapdragon 6 Gen 4 (4nm) \u2b50',cpu:'1\u00d72.3GHz A720s + 3\u00d72.2GHz A720s + 4\u00d71.8GHz A520s',gpu:'Adreno 810 \u2b50',antutu:'~760 000 \u2b50',geekbench:'~3 200 \u2b50',ram:'12 Go + 14 Go virtuelle',stockage:'256 Go UFS 3.1 \u2b50',microSD:'\u2705 Oui (hybride)',wifi:'Wi-Fi 6 (ax) \u2b50',bluetooth:'5.2',usb:'Type-C 2.0'},
      ecran:{dalle:'6,67" AMOLED plat Esport',def:'FHD+ 2400\u00d71080',ppi:395,rafraichissement:'120 Hz',touch:'180 Hz / 1500 Hz instantan\u00e9 \u2b50',luminosite:'2000 nits \u2b50',hdr:'\u2705 Oui (DCI-P3 111%) \u2b50',protection:'Mohs niveau 5',couleurs:'16,7 M (8-bit)',ratio:'92,65%'},
      batterie:{capacite:'6000 mAh Titan \u2b50',charge:'45W SuperVOOC',t50:'30 min',t100:'~65 min (1h19)',bypass:'\u2705 Zero Charge Mode \u2b50',sansfil:'\u274c Non',autonomieGSMA:'Non test\u00e9',jeu:'10,5h \u2b50',youtube:'17,5h \u2b50',chargeurInclus:'\u2705 45W'},
      photo:{principal:'50 MP f/1.8 SuperOIS',secondaire:'2 MP bokeh \u274c',selfie:'16 MP f/2.4',videoAr:'4K@30fps \u2b50',videoSelfie:'1080p@30fps',flash:'LED simple',nuit:'Mode Nuit IA',qualite:'Sur-saturation, nettet\u00e9 excessive'},
      design:{poids:'196 g',dimensions:'163,1\u00d775,7\u00d78 mm',ip:'IP66+IP68+IP69 \u2b50',verre:'Gorilla Glass 5 \u2b50',materiau:'Plastique textur\u00e9 Mecha',ecran:'Plat',coloris:'Mecha Silver, Storm Titanium, Warrior Pink'},
      logiciel:{os:'Android 15 natif \u2b50',osGaranties:'2 versions (15\u219217)',secuGaranties:'3 ans / trimestriels',interface:'Realme UI 6.0',bloatware:'Significatif (pubs, dark patterns)'},
      connectivite:{esim:'\u2705 Oui \u2b50',nfc:'\u274c Non en France',g5:'\u2705 Sub-6 SA/NSA',audio:'St\u00e9r\u00e9o (m\u00e9diocre)',jack:'\u274c Non',gps:'GPS, GLONASS, Galileo, BeiDou, QZSS',fmradio:'\u274c Non'},
      ia:{photo:'AI Group Photo Enhance, AI Camera',systeme:'AI Smart Loop, AI Screen Recognition',assistant:'Google Gemini \u2b50'},
    },
    pro:['Snapdragon 6 Gen 4 tr\u00e8s performant','6000 mAh (10,5h jeu)','IP69 (jets haute pression)','Zero Charge Mode (bypass)','Wi-Fi 6 + UFS 3.1','microSD + \u00e9cran HDR 2000 nits'],
    con:['Pas de NFC en France','Pas d\'ultra grand-angle','Bloatware agressif','Lourd (196 g)','2 mises \u00e0 jour OS seulement'],
  },

];

const CATEGORIES = [
  {id:'prix',label:'\ud83d\udcb0 Prix & Disponibilit\u00e9',keys:['dispo','sortie','lancement']},
  {id:'perf',label:'\u26a1 Performances',keys:['proc','cpu','gpu','antutu','geekbench','ram','stockage','microSD','wifi','bluetooth','usb']},
  {id:'ecran',label:'\ud83d\udda5\ufe0f \u00c9cran',keys:['dalle','def','ppi','rafraichissement','touch','luminosite','hdr','protection','couleurs','ratio']},
  {id:'batterie',label:'\ud83d\udd0b Batterie & Charge',keys:['capacite','charge','t50','t100','bypass','sansfil','autonomieGSMA','jeu','youtube','chargeurInclus']},
  {id:'photo',label:'\ud83d\udcf7 Photo & Vid\u00e9o',keys:['principal','secondaire','selfie','videoAr','videoSelfie','flash','nuit','qualite']},
  {id:'design',label:'\ud83d\udee1\ufe0f Design & R\u00e9sistance',keys:['poids','dimensions','ip','verre','materiau','ecran','coloris']},
  {id:'logiciel',label:'\ud83d\udce6 Logiciel & M\u00e0J',keys:['os','osGaranties','secuGaranties','interface','bloatware']},
  {id:'connectivite',label:'\ud83d\udce1 Connectivit\u00e9 & Son',keys:['esim','nfc','g5','audio','jack','gps','fmradio']},
  {id:'ia',label:'\ud83e\udd16 IA & Logiciel',keys:['photo','systeme','assistant']},
];

const CAT_ALIAS = {
  dispo:'Disponibilit\u00e9',sortie:'Date de sortie',lancement:'Prix de lancement',
  proc:'Processeur',cpu:'CPU',gpu:'GPU',antutu:'AnTuTu v10',geekbench:'GeekBench 6',ram:'RAM',stockage:'Stockage',microSD:'microSD',wifi:'Wi-Fi',bluetooth:'Bluetooth',usb:'USB',
  dalle:'Dalle',def:'D\u00e9finition',ppi:'Densit\u00e9',rafraichissement:'Rafra\u00eechissement',touch:'Touch sampling',luminosite:'Luminosit\u00e9 max',hdr:'HDR',protection:'Protection',couleurs:'Couleurs',ratio:'Ratio \u00e9cran/corps',
  capacite:'Capacit\u00e9',charge:'Charge rapide',t50:'0\u219250%',t100:'0\u2192100%',bypass:'Bypass gaming',sansfil:'Charge sans fil',autonomieGSMA:'Autonomie GSMArena',jeu:'Jeu intensif',youtube:'YouTube',chargeurInclus:'Chargeur inclus',
  principal:'Capteur principal',secondaire:'Capteur secondaire',selfie:'Capteur selfie',videoAr:'Vid\u00e9o arri\u00e8re',videoSelfie:'Vid\u00e9o selfie',flash:'Flash',nuit:'Mode nuit',qualite:'Qualit\u00e9 g\u00e9n\u00e9rale',
  poids:'Poids',dimensions:'Dimensions',ip:'\u00c9tanch\u00e9it\u00e9',verre:'Verre \u00e9cran',materiau:'Mat\u00e9riau',ecran:'Type \u00e9cran',coloris:'Coloris',
  os:'OS actuel',osGaranties:'M\u00e0J OS garanties',secuGaranties:'M\u00e0J s\u00e9curit\u00e9',interface:'Interface',bloatware:'Bloatware',
  esim:'eSIM',nfc:'NFC',g5:'5G',audio:'Audio',jack:'Jack 3,5mm',gps:'GPS',fmradio:'Radio FM',
  photo:'IA Photo',systeme:'IA Syst\u00e8me',assistant:'Assistant vocal',
};

// ===== SCORE CONFIG =====
function num(str) {
  if (str === undefined || str === null) return 0;
  const s = String(str).replace(/LPDDR\d+X?/gi, '').replace(/UFS\s*[\d.]+/gi, '');
  const parts = s.split('/');
  let max = 0;
  parts.forEach(p => {
    const m = p.match(/(\d+[\s.,]?\d*)/);
    if (m) {
      const cleaned = m[1].replace(/\s/g, '');
      const v = parseFloat(cleaned.replace(',', '.'));
      if (!isNaN(v) && v > max) max = v;
    }
  });
  return max;
}

const SCORE_METRICS = [
  { id:'perf', label:'Performances (AnTuTu)', icon:'fa-microchip',
    get:p => num(p.specs.perf.antutu), suffix:'' },
  { id:'battery', label:'Batterie', icon:'fa-battery-full',
    get:p => num(p.specs.batterie.capacite), suffix:'mAh' },
  { id:'charge', label:'Charge rapide', icon:'fa-bolt',
    get:p => num(p.specs.batterie.charge), suffix:'W' },
  { id:'nits', label:'Écran (luminosité)', icon:'fa-sun',
    get:p => Math.min(num(p.specs.ecran.luminosite), 2500), suffix:'nits' },
  { id:'secu', label:'MàJ sécurité', icon:'fa-shield-halved',
    get:p => num(p.specs.logiciel.secuGaranties), suffix:'ans' },
  { id:'ram', label:'RAM', icon:'fa-memory',
    get:p => num(p.specs.perf.ram), suffix:'Go' },
];

// ===== STATE =====
let activePhones = new Set(PHONES.map(p=>p.id));
let activeCats = new Set(CATEGORIES.map(c=>c.id));
let duelMode = false;
let sortState = { catId: null, asc: true };
let radarChart = null;

// ===== PLACEHOLDER SVG =====
const PLACEHOLDER_SVG = 'data:image/svg+xml,' + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80">' +
  '<rect width="80" height="80" fill="#1a1a2e" rx="12"/>' +
  '<text x="40" y="40" text-anchor="middle" dominant-baseline="central" font-size="28" fill="#8888bb">\u2606</text>' +
  '<text x="40" y="62" text-anchor="middle" font-size="9" fill="#666699">t\u00e9l\u00e9phone</text>' +
  '</svg>'
);

// ===== HELPER: sanitize HTML =====
function esc(str) {
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

// ===== HELPERS =====
function getPrice(p){
  const m = String(p.price).match(/(\d+)/);
  return m ? parseInt(m[1]) : 999;
}

function getRadarScores(p){
  return {
    perf: Math.min(num(p.specs.perf.antutu) / 7600, 100),
    batterie: Math.min(num(p.specs.batterie.capacite) / 70, 100),
    charge: Math.min(num(p.specs.batterie.charge) * 1.5, 100),
    ecran: Math.min(num(p.specs.ecran.luminosite) / 25, 100),
    ram: Math.min(num(p.specs.perf.ram) * 12.5, 100),
  };
}

function renderRadar(){
  const canvas = document.getElementById('radarChart');
  const wrap = document.getElementById('radarWrap');
  if (!canvas || !wrap) return;
  const active = PHONES.filter(p => activePhones.has(p.id) && getPrice(p) <= maxBudget);
  if (active.length < 2) { wrap.style.display = 'none'; return; }
  wrap.style.display = '';

  if (typeof Chart === 'undefined') return;

  if (radarChart) radarChart.destroy();

  const labels = ['Perf','Batterie','Charge','Écran','RAM'];
  const colors = ['#fbbf24','#94a3b8','#cd7f32','#6b7280','#6b7280'];

  const radarKeys = { Perf:'perf', Batterie:'batterie', Charge:'charge', 'Écran':'ecran', RAM:'ram' };
  radarChart = new Chart(canvas, {
    type: 'radar',
    data: {
      labels,
      datasets: active.map((p,i) => {
        const s = getRadarScores(p);
        return {
          label: p.short,
          data: labels.map(l => s[radarKeys[l]] || 0),
          borderColor: colors[p.rank-1] || '#6b7280',
          backgroundColor: (colors[p.rank-1] || '#6b7280') + '22',
          pointBackgroundColor: colors[p.rank-1] || '#6b7280',
          borderWidth: 2,
        };
      }),
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      scales: { r: { min: 0, max: 100, ticks: { stepSize: 25, backdropColor:'transparent', color:'#8888bb' }, grid: { color:'#2a2a4a' }, angleLines: { color:'#2a2a4a' }, pointLabels: { color:'#e0e0f0', font: { size:11 } } } },
      plugins: { legend: { labels: { color:'#e0e0f0', font: { size:11 }, boxWidth:12, padding:12 } } },
    },
  });
}

let maxBudget = 300;
function applyPriceFilter(){
  PHONES.forEach(p => {
    const cards = document.querySelectorAll(`.phone-card[data-phone="${p.id}"]`);
    const chips = document.querySelectorAll(`.filter-chip[data-phone="${p.id}"]`);
    const hidden = getPrice(p) > maxBudget;
    cards.forEach(c => c.classList.toggle('hidden', hidden || !activePhones.has(p.id)));
    chips.forEach(c => c.style.display = hidden ? 'none' : '');
  });
}

// ===== RENDER FUNCTIONS =====
function renderPhoneStrip(){
  const strip = document.getElementById('phoneStrip');
  if (!strip) return;
  strip.innerHTML = PHONES.filter(p => getPrice(p) <= maxBudget).map(p => {
    const isActive = activePhones.has(p.id);
    const selected = duelMode && isActive;
    return '<div class="phone-card' + (isActive ? '' : ' hidden') + (selected ? ' selected' : '') + '" data-phone="' + esc(p.id) + '">' +
      '<div class="rank rank-' + p.rank + '"><i class="fas ' + esc(p.tagIcon) + '"></i></div>' +
      '<div class="img-wrap">' +
        '<img src="' + p.img + '" alt="' + esc(p.name) + '" loading="lazy" onerror="this.onerror=null;this.parentElement.innerHTML=\'<div class=placeholder>\u2606</div>\'">' +
      '</div>' +
      '<h3>' + esc(p.name) + '</h3>' +
      '<div class="price">' + esc(p.price) + '</div>' +
      '<div class="price-label">' + esc(p.priceLabel) + '</div>' +
      '<div class="badge ' + (p.eliminate ? 'badge-elim' : 'badge-best') + '">' +
        (p.eliminate ? '\u274c ' + esc(p.reason) : esc(p.tag)) +
      '</div>' +
    '</div>';
  }).join('');
}

function renderPhoneFilters(){
  const el = document.getElementById('phoneFilters');
  if (!el) return;
  el.innerHTML = PHONES.map(p =>
    '<label class="filter-chip' + (activePhones.has(p.id) ? ' active' : '') + '" data-phone="' + p.id + '">' +
      '<input type="checkbox" ' + (activePhones.has(p.id) ? 'checked' : '') + '>' +
      '<span class="dot"></span> ' + esc(p.short) +
      (p.eliminate ? ' <span class="warn">\u26a0\ufe0f</span>' : '') +
    '</label>'
  ).join('');

  // Click handler on label (reliable: no pointer-events issues)
  el.querySelectorAll('.filter-chip').forEach(label => {
    label.addEventListener('click', function(e){
      e.preventDefault();
      if (e.target.closest && e.target.closest('.warn')) return;
      const inp = this.querySelector('input');
      if (!inp) return;
      const pid = this.dataset.phone;
      if (duelMode) {
        // In duel mode: clicking an active phone deselects it; clicking an inactive one selects only it (if none selected) or becomes 2nd
        if (activePhones.has(pid)) {
          activePhones.delete(pid);
        } else if (activePhones.size < 2) {
          activePhones.add(pid);
        } else {
          // Replace the first selected
          const first = activePhones.values().next().value;
          activePhones.delete(first);
          activePhones.add(pid);
        }
      } else {
        inp.checked = !inp.checked;
        if (inp.checked) activePhones.add(pid);
        else activePhones.delete(pid);
      }
      // Sync checkboxes
      el.querySelectorAll('.filter-chip').forEach(l => {
        const li = l.querySelector('input');
        if (!li) return;
        li.checked = activePhones.has(l.dataset.phone);
        l.classList.toggle('active', li.checked);
      });
      renderAll();
    });
  });
}

function renderCatFilters(){
  const container = document.getElementById('catFilters');
  if (!container) return;

  container.querySelectorAll('.filter-chip').forEach(label => {
    label.addEventListener('click', function(e){
      e.preventDefault();
      if (e.target.tagName === 'INPUT') return;
      const inp = this.querySelector('input');
      if (!inp) return;
      inp.checked = !inp.checked;
      this.classList.toggle('active', inp.checked);

      const cat = this.dataset.cat;
      if (cat === 'all') {
        const checked = inp.checked;
        container.querySelectorAll('.filter-chip').forEach(l => {
          if (l.dataset.cat && l.dataset.cat !== 'all') {
            const li = l.querySelector('input');
            if (li) li.checked = checked;
            l.classList.toggle('active', checked);
            if (checked) activeCats.add(l.dataset.cat);
            else activeCats.delete(l.dataset.cat);
          }
        });
      } else {
        if (inp.checked) activeCats.add(cat);
        else activeCats.delete(cat);
        // Sync "Toutes" checkbox
        const allLabel = container.querySelector('.filter-chip[data-cat="all"]');
        if (allLabel) {
          const allInp = allLabel.querySelector('input');
          const allActive = container.querySelectorAll('.filter-chip[data-cat]:not([data-cat="all"]).active').length === CATEGORIES.length;
          if (allInp) allInp.checked = allActive;
          allLabel.classList.toggle('active', allActive);
        }
      }
      renderTable();
      renderVerdict();
    });
  });
}

function renderTable(){
  const activePhoneArr = PHONES.filter(p => activePhones.has(p.id));
  const activePhoneIds = new Set(activePhoneArr.map(p=>p.id));
  const el = document.getElementById('tableWrap');
  if (!el) return;

  if (activePhoneArr.length === 0) {
    el.innerHTML = '<div class="empty-state"><i class="fas fa-search"></i><p>S\u00e9lectionne au moins un t\u00e9l\u00e9phone</p></div>';
    return;
  }

  let html = '<table><thead><tr><th>Caract\u00e9ristique</th>';
  activePhoneArr.forEach(p => { html += '<th data-col="' + p.id + '">' + esc(p.short) + '</th>'; });
  html += '</tr></thead><tbody>';

  const sortedPhones = [...activePhoneArr];
  if (sortState.catId) {
    const sortCat = CATEGORIES.find(c => c.id === sortState.catId);
    if (sortCat) {
      const sortKey = sortCat.keys[0];
      sortedPhones.sort((a, b) => {
        const va = num(a.specs[sortState.catId] && a.specs[sortState.catId][sortKey]);
        const vb = num(b.specs[sortState.catId] && b.specs[sortState.catId][sortKey]);
        return sortState.asc ? va - vb : vb - va;
      });
    }
  }

  CATEGORIES.forEach(cat => {
    if (!activeCats.has(cat.id)) return;
    const isSorted = sortState.catId === cat.id;
    const arrow = isSorted ? (sortState.asc ? ' \u25B2' : ' \u25BC') : ' \u25B4\u25BE';
    const sortClass = 'cat-header sortable' + (isSorted ? (sortState.asc ? ' sort-asc' : ' sort-desc') : '');
    html += '<tr class="' + sortClass + '" data-cat="' + cat.id + '"><td colspan="' + (activePhoneArr.length + 1) + '"><span class="sort-arrow">' + arrow + '</span> ' + cat.label + '</td></tr>';
    cat.keys.forEach(key => {
      html += '<tr>';
      html += '<td>' + (CAT_ALIAS[key] || key) + '</td>';
      sortedPhones.forEach(p => {
        const val = p.specs[cat.id] && p.specs[cat.id][key] !== undefined ? String(p.specs[cat.id][key]) : '\u2014';
        const hasStar = val.indexOf('\u2b50') !== -1;
        const hasCross = val.indexOf('\u274c') !== -1;
        const displayVal = val.replace(/\u2b50/g, '').trim();
        html += '<td data-col="' + p.id + '" class="' + (hasStar ? 'winner' : hasCross ? 'loser' : '') + '">' + displayVal + '</td>';
      });
      html += '</tr>';
    });
  });

  html += '</tbody></table>';
  el.innerHTML = html;

  // Hide columns for deselected phones
  el.querySelectorAll('[data-col]').forEach(td => {
    td.classList.toggle('hidden-col', !activePhoneIds.has(td.dataset.col));
  });
  el.querySelectorAll('thead th').forEach(th => {
    if (!th.dataset.col) return;
    th.classList.toggle('hidden-col', !activePhoneIds.has(th.dataset.col));
  });

  // Column hover highlighting
  el.querySelectorAll('thead th[data-col]').forEach(th => {
    th.addEventListener('mouseenter', function(){
      const col = this.dataset.col;
      el.querySelectorAll('td[data-col="' + col + '"], th[data-col="' + col + '"]').forEach(c => c.classList.add('highlight'));
    });
    th.addEventListener('mouseleave', function(){
      const col = this.dataset.col;
      el.querySelectorAll('td[data-col="' + col + '"], th[data-col="' + col + '"]').forEach(c => c.classList.remove('highlight'));
    });
  });

  // Sort click handlers
  el.querySelectorAll('.cat-header.sortable').forEach(tr => {
    tr.addEventListener('click', function(){
      const catId = this.dataset.cat;
      if (sortState.catId === catId) {
        sortState.asc = !sortState.asc;
      } else {
        sortState.catId = catId;
        sortState.asc = true;
      }
      renderTable();
      renderVerdict();
      renderRadar();
    });
  });
}

function renderVerdict(){
  const el = document.getElementById('verdictGrid');
  if (!el) return;
  const activePhoneArr = PHONES.filter(p => activePhones.has(p.id));
  const emojis = ['\ud83e\udd47','\ud83e\udd48','\ud83e\udd49','4\ufe0f\u20e3','5\ufe0f\u20e3'];

  el.innerHTML = activePhoneArr.map(p => {
    const emoji = emojis[p.rank - 1] || '';
    return '<div class="verdict-card">' +
      '<span class="emoji">' + emoji + '</span>' +
      '<h4>' + esc(p.name) + '</h4>' +
      '<div class="tag ' + p.tagClass + '"><i class="fas ' + p.tagIcon + '"></i> ' + esc(p.tag) + '</div>' +
      (p.eliminate ? '<div style="margin-top:6px;font-size:11px;color:var(--red)"><i class="fas fa-triangle-exclamation"></i> ' + esc(p.reason) + '</div>' : '') +
      '<div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:10px">' +
        '<div>' +
          '<p style="font-size:11px;font-weight:600;color:var(--green);margin-bottom:3px"><i class="fas fa-thumbs-up"></i> Pour</p>' +
          '<ul>' + p.pro.map(t => '<li><span class="pro"><i class="fas fa-circle-plus"></i></span> ' + esc(t) + '</li>').join('') + '</ul>' +
        '</div>' +
        '<div>' +
          '<p style="font-size:11px;font-weight:600;color:var(--red);margin-bottom:3px"><i class="fas fa-thumbs-down"></i> Contre</p>' +
          '<ul>' + p.con.map(t => '<li><span class="con"><i class="fas fa-circle-minus"></i></span> ' + esc(t) + '</li>').join('') + '</ul>' +
        '</div>' +
      '</div>' +
    '</div>';
  }).join('');
}

function renderReco(){
  const el = document.getElementById('recoBox');
  if (!el) return;
  el.innerHTML =
    '<h3>\ud83c\udfaf Recommandation personnalis\u00e9e</h3>' +
    '<p class="sub">Bas\u00e9 sur ton profil : usage polyvalent, NFC indispensable, eSIM souhait\u00e9, budget 180-200\u20ac</p>' +
    '<div class="reco-items">' +
      '<div class="reco-item"><i class="fas fa-circle-check"></i><span>NFC indispensable \u2192 Motorola, Honor, Xiaomi RN15, Xiaomi R15 \u2705 (pas Realme \u274c)</span></div>' +
      '<div class="reco-item"><i class="fas fa-circle-check"></i><span>eSIM souhait\u00e9 \u2192 Motorola, Honor, Realme (pas Xiaomi R15, RN15)</span></div>' +
      '<div class="reco-item"><i class="fas fa-circle-check"></i><span>Budget 180-200\u20ac \u2192 Motorola, Honor, Realme, Xiaomi R15 (Xiaomi RN15 ~269\u20ac)</span></div>' +
      '<div class="reco-item"><i class="fas fa-circle-check"></i><span>256 Go suffisent \u2192 Tous</span></div>' +
      '<div class="reco-item"><i class="fas fa-star"></i><span><strong>\ud83e\udd47 Motorola Edge 50 Fusion</strong> \u2014 Le meilleur choix pour toi</span></div>' +
      '<div class="reco-item"><i class="fas fa-star"></i><span><strong>\ud83e\udd48 Honor 600 Lite 5G (Nouveau !)</strong> \u2014 Batterie 6520 mAh monstre + 6 ans m\u00e0j</span></div>' +
      '<div class="reco-item"><i class="fas fa-bolt"></i><span><strong>Xiaomi Redmi 15 5G</strong> \u2014 7000 mAh monstre, NFC, 144Hz, ~160\u20ac (IPS LCD, pas eSIM)</span></div>' +
    '</div>';
}

function renderScoreBars(){
  const el = document.getElementById('scoreBars');
  if (!el) return;
  const active = PHONES.filter(p => activePhones.has(p.id));
  if (active.length < 2) { el.innerHTML = ''; return; }

  const maxes = {};
  SCORE_METRICS.forEach(m => { maxes[m.id] = Math.max(...active.map(p => m.get(p)), 1); });

  const colors = ['#fbbf24','#94a3b8','#cd7f32','#6b7280','#6b7280'];
  let html = '<div class="score-bars">' +
    '<h2 class="section-title"><i class="fas fa-chart-simple" style="color:var(--accent)"></i> Comparaison rapide</h2>';

  SCORE_METRICS.forEach(m => {
    html += '<div class="metric-group"><div class="metric-label"><i class="fas ' + m.icon + '"></i> ' + m.label + '</div>';
    active.forEach(p => {
      const val = m.get(p);
      const pct = Math.round((val / maxes[m.id]) * 100);
      const color = colors[p.rank - 1] || '#6b7280';
      html += '<div class="bar-row">' +
        '<span class="bar-label">' + esc(p.short) + '</span>' +
        '<div class="bar-track"><div class="bar-fill" style="width:' + pct + '%;background:' + color + '"></div></div>' +
        '<span class="bar-val">' + val + (m.suffix ? ' <span class="bar-unit">' + m.suffix + '</span>' : '') + '</span>' +
      '</div>';
    });
    html += '</div>';
  });
  html += '<p class="score-note">* Normalis\u00e9 au meilleur de chaque cat\u00e9gorie (=100%)</p></div>';
  el.innerHTML = html;
}

function renderBoxContent(){
  const el = document.getElementById('boxContent');
  if (!el) return;
  const active = PHONES.filter(p => activePhones.has(p.id));
  if (active.length < 2) { el.innerHTML = ''; return; }

  const boxRows = [
    { label:'Chargeur', key:'chargeur', get:p => p.specs.batterie.chargeurInclus || '\u2014' },
    { label:'C\u00e2ble USB-C', key:'cable', get:p => '\u2705 Oui' },
    { label:'Coque', key:'coque', get:p => p.id === 'realme' || p.id === 'redmi15' ? '\u2705 Oui' : '\u274c Non' },
    { label:'Film \u00e9cran', key:'film', get:p => p.id === 'honor' ? '\u2705 Oui (pr\u00e9-install\u00e9)' : '\u274c Non' },
    { label:'Outil SIM', key:'sim', get:p => '\u2705 Oui' },
  ];

  let html = '<h2 class="section-title"><i class="fas fa-box-open" style="color:var(--orange)"></i> Contenu de la bo\u00eete</h2>' +
    '<div class="box-table-wrap"><table class="box-table"><thead><tr><th>Accessoire</th>';
  active.forEach(p => { html += '<th>' + esc(p.short) + '</th>'; });
  html += '</tr></thead><tbody>';
  boxRows.forEach(r => {
    html += '<tr><td>' + r.label + '</td>';
    active.forEach(p => { html += '<td>' + r.get(p) + '</td>'; });
    html += '</tr>';
  });
  html += '</tbody></table></div>';
  el.innerHTML = html;
}

function renderReadme(){
  const el = document.getElementById('readmeContent');
  if (!el) return;
  const emojis = ['\ud83e\udd47','\ud83e\udd48','\ud83e\udd49','4\ufe0f\u20e3','5\ufe0f\u20e3'];
  el.innerHTML =
    '<h1>Comparatif Smartphones - Moins de 200\u20ac</h1>' +
    '<p><strong>Date :</strong> Mai 2026 \u00b7 Donn\u00e9es v\u00e9rifi\u00e9es</p><hr>' +
    '<h2>\ud83d\udcf1 Les 5 smartphones compar\u00e9s</h2>' +
    '<table><thead><tr><th>#</th><th>T\u00e9l\u00e9phone</th><th>Prix</th><th>Tag</th></tr></thead><tbody>' +
    PHONES.map(p => '<tr><td>' + (emojis[p.rank-1] || '') + '</td><td><strong>' + esc(p.name) + '</strong></td><td>' + p.price + '</td><td>' + esc(p.tag) + '</td></tr>').join('') +
    '</tbody></table>' +
    '<h2>\ud83c\udfaf Verdict pour ton profil</h2>' +
    '<p><strong>Besoins :</strong> Usage polyvalent \u00b7 NFC indispensable \u00b7 eSIM souhait\u00e9 \u00b7 Budget 180-200\u20ac \u00b7 256 Go</p>' +
    '<ol>' +
      '<li><strong>\ud83e\udd47 Motorola Edge 50 Fusion</strong> \u2014 Le meilleur tout-round : photo, charge 68W, design cuir v\u00e9gan, IP68, Android stock, eSIM + NFC. L\u00e9ger (175g). <em>\u2705 Recommand\u00e9</em></li>' +
      '<li><strong>\ud83e\udd48 Honor 600 Lite 5G</strong> \u2014 Batterie 6520 mAh monstre, 6 ans m\u00e0j, eSIM+NFC, \u00e9cran AMOLED 120Hz 6500 nits, charge 45W, IP66, 180g. Design aluminium premium.</li>' +
      '<li><strong>Xiaomi Redmi Note 15 5G</strong> \u2014 108 MP OIS, \u00e9cran AMOLED 3200 nits, GG7i, 6 ans s\u00e9curit\u00e9, 5520 mAh. HyperOS avec pubs, pas d\'eSIM.</li>' +
      '<li><strong>Xiaomi Redmi 15 5G</strong> \u2014 7000 mAh record, \u00e9cran 6,9" 144Hz, NFC, microSD, ~160\u20ac. IPS LCD, pas d\'UW, SD 6s Gen 3 modeste.</li>' +
      '<li><strong>Realme 14 5G</strong> \u2014 Champion gaming (SD 6 Gen 4, eSIM, 6000 mAh, IP69). \u274c Pas de NFC en France.</li>' +
    '</ol>' +
    '<h2>\ud83d\udcca Cat\u00e9gories compar\u00e9es</h2><ul>' +
      '<li><strong>\ud83d\udcb0 Prix & Disponibilit\u00e9</strong> \u2014 Prix actuels, disponibilit\u00e9 France, date de sortie</li>' +
      '<li><strong>\u26a1 Performances</strong> \u2014 Processeur, CPU/GPU, AnTuTu, RAM, stockage, microSD, Wi-Fi, Bluetooth</li>' +
      '<li><strong>\ud83d\udda5\ufe0f \u00c9cran</strong> \u2014 dalle, d\u00e9finition, taux de rafra\u00eechissement, luminosit\u00e9, HDR, protection</li>' +
      '<li><strong>\ud83d\udd0b Batterie & Charge</strong> \u2014 capacit\u00e9, vitesse de charge, autonomie, bypass, chargeur inclus</li>' +
      '<li><strong>\ud83d\udcf7 Photo & Vid\u00e9o</strong> \u2014 capteurs principal/secondaire/selfie, vid\u00e9o, flash, qualit\u00e9</li>' +
      '<li><strong>\ud83d\udee1\ufe0f Design & R\u00e9sistance</strong> \u2014 poids, dimensions, IP, verre, mat\u00e9riau</li>' +
      '<li><strong>\ud83d\udce6 Logiciel & M\u00e0J</strong> \u2014 OS, versions garanties, interface, bloatware</li>' +
      '<li><strong>\ud83d\udce1 Connectivit\u00e9 & Son</strong> \u2014 eSIM, NFC, 5G, audio, jack, GPS, Radio FM</li>' +
      '<li><strong>\ud83e\udd16 IA & Logiciel</strong> \u2014 IA photo, IA syst\u00e8me, assistant vocal</li>' +
    '</ul>' +
    '<h2>\ud83d\udcdd Notes importantes</h2><ul>' +
      '<li>Le NFC du Realme 14 5G n\'est <strong>pas disponible en France</strong> (source : 01net, Realme France)</li>' +
      '<li>Le Xiaomi Redmi Note 15 5G <strong>n\'inclut pas de chargeur</strong> dans la bo\u00eete</li>' +
      '<li>Le Xiaomi Redmi 15 5G <strong>n\'inclut pas de chargeur</strong> non plus</li>' +
      '<li>Le Honor 600 Lite 5G est \u00e0 <strong>199\u20ac chez SFR/RED jusqu\'au 26 mai 2026</strong> (sinon 399\u20ac ailleurs)</li>' +
      '<li>Les prix sont ceux de Mai 2026 \u2014 v\u00e9rifie sur Idealo.fr pour les derni\u00e8res offres</li>' +
    '</ul><hr>' +
    '<p><strong>Sources :</strong> Motorola.com \u00b7 Honor.com \u00b7 Xiaomi.com \u00b7 SFR.fr \u00b7 RED-by-SFR.fr \u00b7 GSMArena \u00b7 NotebookCheck \u00b7 LesMobiles \u00b7 01net \u00b7 PhoneArena \u00b7 Idealo.fr \u00b7 Fnac \u00b7 Frandroid \u00b7 Les Num\u00e9riques \u00b7 Que Choisir \u00b7 TrustedReviews \u00b7 Pokde \u00b7 Beebom \u00b7 Gizmochina \u00b7 Kimovil.com \u00b7 Phonandroid \u00b7 Absolute Geeks</p>' +
    '<p><em>Fiche g\u00e9n\u00e9r\u00e9e le 11 mai 2026</em></p>';
}

function renderAll(){
  document.body.classList.toggle('duel-active', duelMode);
  applyPriceFilter();
  renderPhoneStrip();
  renderScoreBars();
  renderTable();
  renderVerdict();
  renderReco();
  renderBoxContent();
  renderRadar();
}

// ===== FEATURES INIT =====
function initDuel(){
  const btn = document.getElementById('duelToggle');
  if (!btn) return;
  btn.addEventListener('click', function(e){
    e.preventDefault();
    duelMode = !duelMode;
    this.classList.toggle('active', duelMode);
    this.querySelector('input').checked = duelMode;
    if (duelMode && activePhones.size > 2) {
      // Keep only first 2
      const arr = [...activePhones];
      activePhones = new Set(arr.slice(0,2));
    }
    renderAll();
  });
}

function initBudget(){
  const range = document.getElementById('budgetRange');
  const val = document.getElementById('budgetVal');
  if (!range || !val) return;
  range.addEventListener('input', function(){
    maxBudget = parseInt(this.value);
    val.textContent = maxBudget;
    renderAll();
  });
}

// ===== FILTER INIT =====
function initFilters(){
  renderPhoneFilters();
  renderCatFilters();
}

// ===== TAB SWITCHING =====
function initTabs(){
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function(){
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      const tabContent = document.getElementById('tab-' + this.dataset.tab);
      if (tabContent) tabContent.classList.add('active');
      window.scrollTo({top:0});
    });
  });
  // Select all / none phones
  const allBtn = document.getElementById('selectAllPhones');
  const noneBtn = document.getElementById('selectNonePhones');
  if (allBtn) allBtn.addEventListener('click', function(e){ e.preventDefault();
    activePhones = new Set(PHONES.map(p=>p.id));
    renderPhoneFilters(); renderAll();
  });
  if (noneBtn) noneBtn.addEventListener('click', function(e){ e.preventDefault();
    activePhones = new Set();
    renderPhoneFilters(); renderAll();
  });

  // Footer readme link
  const footerLink = document.getElementById('footerReadmeLink');
  if (footerLink) {
    footerLink.addEventListener('click', function(e){
      e.preventDefault();
      const readmeBtn = document.querySelector('.tab-btn[data-tab="readme"]');
      if (readmeBtn) readmeBtn.click();
    });
  }
}

// ===== THEME TOGGLE =====
function initTheme(){
  const themeToggle = document.getElementById('themeToggle');
  if (!themeToggle) return;
  const html = document.documentElement;
  themeToggle.querySelector('i').className = html.getAttribute('data-theme') === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
  themeToggle.addEventListener('click', function(){
    const isDark = html.getAttribute('data-theme') === 'dark';
    html.setAttribute('data-theme', isDark ? 'light' : 'dark');
    this.querySelector('i').className = isDark ? 'fas fa-sun' : 'fas fa-moon';
  });
}

// ===== BACK TO TOP =====
function initBackTop(){
  const backTop = document.getElementById('backTop');
  if (!backTop) return;
  window.addEventListener('scroll', function(){
    backTop.classList.toggle('show', window.scrollY > 400);
  });
  backTop.addEventListener('click', function(){
    window.scrollTo({top:0, behavior:'smooth'});
  });
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', function(){
  try {
    renderPhoneStrip();
    initFilters();
    initDuel();
    initBudget();
    renderScoreBars();
    renderTable();
    renderVerdict();
    renderReco();
    renderBoxContent();
    renderReadme();
    renderRadar();
    initTabs();
    initTheme();
    initBackTop();
  } catch(e) {
    console.error('Init error:', e);
  }
});
