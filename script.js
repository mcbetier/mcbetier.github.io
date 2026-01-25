const data = {
    OVERALL: [
        { place: 1, nick: 'zerg2113', tiers: [{type:'uhc',label:'empty'},{type:'sword',label:'HT3'}], score: 3, avatar: 'places/overall_1.png' },
        { place: 2, nick: 'Пусто', tiers: [{type:'uhc',label:'empty'},{type:'sword',label:'empty'}], score: 0, avatar: 'places/overall_2.png' },
        { place: 3, nick: 'Пусто', tiers: [{type:'uhc',label:'empty'},{type:'sword',label:'empty'}], score: 0, avatar: 'places/overall_3.png' },
    ],
    UHC: [
        { place: 1, nick: 'Пусто', tiers: [{type:'uhc',label:'empty'}], score: 0, avatar: 'places/uhc_1.png' },
        { place: 2, nick: 'Пусто', tiers: [{type:'uhc',label:'empty'}], score: 0, avatar: 'places/uhc_2.png' },
        { place: 3, nick: 'Пусто', tiers: [{type:'uhc',label:'empty'}], score: 0, avatar: 'places/uhc_3.png' },
    ],
    NETHEROP: [
        { place: 1, nick: 'Пусто', tiers: [{type:'netherop',label:'empty'}], score: 0, avatar: 'places/overall_1.png' },
        { place: 2, nick: 'Пусто', tiers: [{type:'netherop',label:'empty'}], score: 0, avatar: 'places/overall_2.png' },
        { place: 3, nick: 'Пусто', tiers: [{type:'netherop',label:'empty'}], score: 0, avatar: 'places/overall_3.png' },
    ],
    SWORD: [
        { place: 1, nick: 'zerg2113', tiers: [{type:'sword',label:'HT3'}], score: 3, avatar: 'places/sword_1.png' },
        { place: 2, nick: 'Пусто', tiers: [{type:'sword',label:'empty'}], score: 0, avatar: 'places/sword_2.png' },
        { place: 3, nick: 'Пусто', tiers: [{type:'sword',label:'empty'}], score: 0, avatar: 'places/sword_3.png' },
    ],
    MACE: [
        { place: 1, nick: 'Пусто', tiers: [{type:'mace',label:'empty'}], score: 0, avatar: 'places/mace_1.png' },
        { place: 2, nick: 'Пусто', tiers: [{type:'mace',label:'empty'}], score: 0, avatar: 'places/mace_2.png' },
        { place: 3, nick: 'Пусто', tiers: [{type:'mace',label:'empty'}], score: 0, avatar: 'places/mace_3.png' },
    ],
    SMP: [
        { place: 1, nick: 'Пусто', tiers: [{type:'smp',label:'empty'}], score: 0, avatar: 'places/smp_1.png' },
        { place: 2, nick: 'Пусто', tiers: [{type:'smp',label:'empty'}], score: 0, avatar: 'places/smp_2.png' },
        { place: 3, nick: 'Пусто', tiers: [{type:'smp',label:'empty'}], score: 0, avatar: 'places/smp_3.png' },
    ],
};

const buttons = document.querySelectorAll(".modes button");
buttons.forEach(btn=>{
    btn.addEventListener("click",()=>{
        buttons.forEach(b=>b.classList.remove("active"));
        btn.classList.add("active");
        showMode(btn.dataset.mode);
    });
});

function showMode(mode){
    const content = document.getElementById("content");
    content.innerHTML="";

    data[mode].forEach(p=>{
        const row = document.createElement("div");
        row.className="player";

        if(p.place===1) row.classList.add("top1");
        else if(p.place===2) row.classList.add("top2");
        else if(p.place===3) row.classList.add("top3");

        const mainDiv = document.createElement("div");
        mainDiv.style.display="flex";
        mainDiv.style.flexDirection="column";

        const nickDiv = document.createElement("div");
        nickDiv.className="nickname";
        nickDiv.textContent = p.nick;

        const scoreDiv = document.createElement("div");
        scoreDiv.className="score";
        scoreDiv.textContent = "Очки: " + p.score;

        mainDiv.appendChild(nickDiv);
        mainDiv.appendChild(scoreDiv);

        row.appendChild(createAvatar(p.avatar));
        row.appendChild(mainDiv);

        if(p.tiers && p.tiers.length>0){
            const tiersDiv = document.createElement("div");
            tiersDiv.className="tiers";
            p.tiers.forEach(t=>{
                const tDiv = document.createElement("div");
                tDiv.className="tier-item";
                tDiv.innerHTML=`<img src="icons/${t.type}.svg"><span>${t.label}</span>`;
                tiersDiv.appendChild(tDiv);
            });
            row.appendChild(tiersDiv);
        }

        content.appendChild(row);
    });
}

function createAvatar(src){
    const img = document.createElement("img");
    img.className="avatar";
    img.src = src;
    return img;

}
