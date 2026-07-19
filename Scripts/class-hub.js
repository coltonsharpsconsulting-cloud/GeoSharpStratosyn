// Class Hub — the live operating surface for ONE course: this week's lesson +
// the whole arc as a clickable build-out strip. render(ctx, {course, hue}).
export function render(ctx, opts){
  opts = opts || {};
  const { app, component } = ctx;
  const course = opts.course, HUE = opts.hue || "#00e5ff";
  const DAY=864e5;
  const rgba=(h,a)=>{const n=parseInt(h.slice(1),16);return `rgba(${(n>>16)&255},${(n>>8)&255},${n&255},${a})`;};
  const alpha=d=>d<=0?0.12:d<=2?0.32:d<=4?0.55:d<=6?0.78:1;
  function parseYMD(s){const m=String(s).match(/(\d{4})-(\d{2})-(\d{2})/);return m?new Date(+m[1],+m[2]-1,+m[3]):null;}
  function toDate(v){return v instanceof Date?parseYMD(v.toISOString().slice(0,10)):parseYMD(v);}
  function scan(){
    const wk={}; let maxW=0, curW=null, nextW=null, nextS=Infinity; const today=Date.now();
    for(const f of app.vault.getMarkdownFiles()){
      const parts=f.path.split("/"); if(parts[0]!=="Curriculum") continue;
      const c=app.metadataCache.getFileCache(f), fm=c&&c.frontmatter;
      if(!fm||fm.kind!=="week") continue;
      const m=f.basename.match(/(\d+)/); if(!m) continue;
      const n=parseInt(m[1],10);
      const s=fm.start?toDate(fm.start):null, e=(fm.end||fm.endDate)?toDate(fm.end||fm.endDate):null;
      // shared school-week from ANY dated curriculum week
      if(s&&e&&today>=s.getTime()&&today<=e.getTime()+DAY) curW=n;
      if(s&&s.getTime()>today&&s.getTime()<nextS){nextS=s.getTime();nextW=n;}
      // this course's own weeks (topic + density for the arc)
      if(parts[1]===course){
        const dens=(c.headings||[]).filter(h=>h.level>=2).length;
        wk[n]={dens,topic:fm.topic||fm.title||"",path:f.path};
        if(n>maxW)maxW=n;
      }
    }
    return {wk,maxW,curW,nextW,nextS};
  }
  const root=createDiv({cls:"chub"});
  function paint(){
    root.empty();
    const {wk,maxW,curW,nextW,nextS}=scan();
    if(maxW===0){ root.createDiv({cls:"chub-head",text:"No weeks generated for this course yet."}); return; }
    const wn = curW!=null?curW:nextW, upcoming = curW==null&&nextW!=null;
    const head=root.createDiv({cls:"chub-head"});
    head.setText(`${curW!=null?"THIS WEEK":upcoming?"NEXT WEEK":"WEEK"} ${wn!=null?String(wn).padStart(2,"0"):"—"}${upcoming&&nextS<Infinity?" · starts "+new Date(nextS).toLocaleDateString(undefined,{month:"short",day:"numeric"}):""} · ${maxW} weeks`);
    const cur = wn!=null ? wk[wn] : null;
    if(cur){
      const card=root.createDiv({cls:"chub-now is-link"}); card.style.setProperty("--row-hue",HUE);
      card.createDiv({cls:"chub-now-topic",text:cur.topic||"(no topic yet)"});
      card.createDiv({cls:"chub-now-open",text:"open the week →"});
      card.onclick=()=>{const fl=app.vault.getAbstractFileByPath(cur.path); if(fl)app.workspace.getLeaf(false).openFile(fl);};
    }
    const arc=root.createDiv({cls:"chub-arc"});
    for(let n=1;n<=maxW;n++){
      const d=wk[n];
      const cell=arc.createDiv({cls:"chub-cell"});
      if(!d){ cell.addClass("is-empty"); continue; }
      cell.style.background=rgba(HUE,alpha(d.dens));
      if(n===wn) cell.addClass("is-now");
      cell.title=`Week ${String(n).padStart(2,"0")}${d.topic?" · "+d.topic:""} · ${d.dens} sections`;
      cell.onclick=()=>{const fl=app.vault.getAbstractFileByPath(d.path); if(fl)app.workspace.getLeaf(false).openFile(fl);};
    }
  }
  paint();
  const id=setInterval(paint,300000);
  try{component.register(()=>clearInterval(id));}catch(e){}
  return root;
}
