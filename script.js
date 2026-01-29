const data = {
  OVERALL: [
    { place: 1, nick: 'zerg2113', tiers:[{type:'uhc',label:'LT3'},{type:'sword',label:'HT3'}], score:4, avatar:'places/overall_1.png' },
    { place: 2, nick: 'Firel1x', tiers:[{type:'uhc',label:'LT3'},{type:'sword',label:'LT4'}], score:3, avatar:'places/overall_2.png' },
    { place: 3, nick: 'Sh1dwME', tiers:[{type:'uhc',label:'LT4'},{type:'sword',label:'LT4'}], score:2, avatar:'places/overall_3.png' },
    { place: 4, nick: 'Spinner707', tiers:[{type:'uhc',label:'LT4'},{type:'sword',label:'LT4'}], score:2, avatar:'places/overall_4.png' },
    { place: 5, nick: 'Пусто', tiers:[{type:'uhc',label:'empty'}], score:0, avatar:'places/overall_5.png' },
    { place: 6, nick: 'Пусто', tiers:[{type:'uhc',label:'empty'}], score:0, avatar:'places/overall_6.png' },
    { place: 7, nick: 'Пусто', tiers:[{type:'uhc',label:'empty'}], score:0, avatar:'places/overall_7.png' },
    { place: 8, nick: 'Пусто', tiers:[{type:'uhc',label:'empty'}], score:0, avatar:'places/overall_8.png' },
  ],

  UHC: [
    { place:1, nick:'zerg2113', tiers:[{type:'uhc',label:'LT3'}], score:2, avatar:'places/uhc_1.png' },
    { place:2, nick:'Firel1x', tiers:[{type:'uhc',label:'LT3'}], score:1, avatar:'places/uhc_2.png' },
    { place:3, nick:'Sh1dwME', tiers:[{type:'uhc',label:'LT4'}], score:1, avatar:'places/uhc_3.png' },
    { place:4, nick:'Spinner707', tiers:[{type:'uhc',label:'LT4'}], score:1, avatar:'places/uhc_4.png' },
    { place:5, nick:'Пусто', tiers:[{type:'uhc',label:'empty'}], score:0, avatar:'places/uhc_5.png' },
    { place:6, nick:'Пусто', tiers:[{type:'uhc',label:'empty'}], score:0, avatar:'places/uhc_6.png' },
    { place:7, nick:'Пусто', tiers:[{type:'uhc',label:'empty'}], score:0, avatar:'places/uhc_7.png' },
    { place:8, nick:'Пусто', tiers:[{type:'uhc',label:'empty'}], score:0, avatar:'places/uhc_8.png' },
  ],

  SWORD: [
    { place:1, nick:'zerg2113', tiers:[{type:'sword',label:'HT3'}], score:2, avatar:'places/sword_1.png' },
    { place:2, nick:'Firel1x', tiers:[{type:'sword',label:'LT4'}], score:1, avatar:'places/sword_2.png' },
    { place:3, nick:'Sh1dwME', tiers:[{type:'sword',label:'LT4'}], score:1, avatar:'places/sword_3.png' },
    { place:4, nick:'Spinner707', tiers:[{type:'sword',label:'LT4'}], score:1, avatar:'places/sword_4.png' },
    { place:5, nick:'Пусто', tiers:[{type:'sword',label:'empty'}], score:0, avatar:'places/sword_5.png' },
    { place:6, nick:'Пусто', tiers:[{type:'sword',label:'empty'}], score:0, avatar:'places/sword_6.png' },
    { place:7, nick:'Пусто', tiers:[{type:'sword',label:'empty'}], score:0, avatar:'places/sword_7.png' },
    { place:8, nick:'Пусто', tiers:[{type:'sword',label:'empty'}], score:0, avatar:'places/sword_8.png' },
  ],
};

const buttons=document.querySelectorAll(".modes button");
buttons.forEach(b=>b.onclick=()=>{
  buttons.forEach(x=>x.classList.remove("active"));
  b.classList.add("active");
  showMode(b.dataset.mode);
});

function showMode(mode){
  const c=document.getElementById("content");
  c.innerHTML="";
  data[mode].forEach(p=>{
    const r=document.createElement("div");
    r.className="player";
    if(p.place<=3) r.classList.add("top"+p.place);

    r.appendChild(Object.assign(document.createElement("img"),{className:"avatar",src:p.avatar}));

    const m=document.createElement("div");
    m.innerHTML=`<div class="nickname">${p.nick}</div><div class="score">Очки: ${p.score}</div>`;
    r.appendChild(m);

    const t=document.createElement("div");
    t.className="tiers";
    p.tiers.forEach(x=>{
      t.innerHTML+=`<div class="tier-item"><img src="icons/${x.type}.svg"><span>${x.label}</span></div>`;
    });
    r.appendChild(t);
    c.appendChild(r);
  });
}
