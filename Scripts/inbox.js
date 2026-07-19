// inbox.js — Carol's one-tap capture + live inbox.
// A "New note" button opens a popup she types into (no editing/source mode),
// writes the note into Inbox/, and lists everything waiting to be processed.
// Invoke:  return (await engine.importJs("Scripts/inbox.js")).render({app, component, engine});
export function render(ctx, opts){
  opts = opts || {};
  const { app, component } = ctx;
  const FOLDER = (opts.folder || "Inbox").replace(/\/+$/,"");
  const pad = n => String(n).padStart(2,"0");

  // ---- one-time styles (Stratosyn palette, degrades if tokens absent) ----
  const STYLE_ID = "ck-inbox-style";
  if(!document.getElementById(STYLE_ID)){
    const st = document.createElement("style"); st.id = STYLE_ID;
    st.textContent = `
    .ck-inbox-btn{display:inline-flex;align-items:center;gap:8px;font-family:var(--ss-mono,ui-monospace,monospace);font-size:13px;letter-spacing:.04em;color:#0d1322;background:var(--ss-gold,#f5c842);border:none;border-radius:9px;padding:11px 20px;cursor:pointer;font-weight:600;}
    .ck-inbox-btn:hover{filter:brightness(1.08);}
    .ck-inbox-hint{font-family:var(--ss-mono,ui-monospace,monospace);font-size:11px;color:var(--ss-mist,#9aabd0);margin:9px 0 16px;}
    .ck-inbox-count{font-family:var(--ss-mono,ui-monospace,monospace);font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--ss-mist,#9aabd0);margin:2px 0 6px;}
    .ck-inbox-list{display:flex;flex-direction:column;gap:8px;margin-top:4px;}
    .ck-inbox-row{border:1px solid var(--ss-border,#2a3142);border-left:3px solid var(--ss-gold,#f5c842);border-radius:7px;background:var(--ss-ink,#161d31);padding:10px 13px;cursor:pointer;transition:filter .12s;}
    .ck-inbox-row:hover{filter:brightness(1.16);}
    .ck-inbox-row .t{font-family:var(--ss-serif,Georgia,serif);font-style:italic;font-size:15px;color:var(--ss-bone,#e8ecf3);}
    .ck-inbox-row .m{font-family:var(--ss-mono,ui-monospace,monospace);font-size:10.5px;color:var(--ss-mist,#9aabd0);margin-top:2px;}
    .ck-inbox-row .x{font-size:12.5px;color:var(--ss-mist,#9aabd0);margin-top:5px;line-height:1.4;}
    .ck-inbox-empty{font-family:var(--ss-mono,ui-monospace,monospace);font-size:12px;color:var(--ss-mist,#9aabd0);opacity:.85;padding:12px 0;}
    .ck-modal-bg{position:fixed;inset:0;background:rgba(6,10,20,.66);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px;}
    .ck-modal{width:min(620px,94vw);background:var(--ss-void,#0d1322);border:1px solid var(--ss-border,#2a3142);border-radius:14px;box-shadow:0 24px 70px -20px #000;padding:20px 22px;}
    .ck-modal h3{font-family:var(--ss-serif,Georgia,serif);font-style:italic;font-size:22px;color:var(--ss-pearl,#b8cfff);margin:0 0 14px;}
    .ck-modal input,.ck-modal textarea{width:100%;box-sizing:border-box;background:var(--ss-ink,#161d31);border:1px solid var(--ss-border,#2a3142);border-radius:8px;color:var(--ss-bone,#e8ecf3);font-family:var(--ss-body,inherit);padding:11px 13px;margin-bottom:12px;font-size:15px;}
    .ck-modal input{font-family:var(--ss-serif,Georgia,serif);font-style:italic;font-size:18px;}
    .ck-modal textarea{min-height:210px;line-height:1.6;resize:vertical;}
    .ck-modal input:focus,.ck-modal textarea:focus{outline:none;border-color:var(--ss-gold,#f5c842);}
    .ck-modal-row{display:flex;justify-content:flex-end;gap:10px;align-items:center;}
    .ck-modal-cancel{background:transparent;border:1px solid var(--ss-border,#2a3142);color:var(--ss-mist,#9aabd0);border-radius:8px;padding:9px 16px;cursor:pointer;font-family:var(--ss-mono,ui-monospace,monospace);font-size:12px;}
    .ck-modal-save{background:var(--ss-gold,#f5c842);border:none;color:#0d1322;border-radius:8px;padding:9px 18px;cursor:pointer;font-family:var(--ss-mono,ui-monospace,monospace);font-size:12px;font-weight:600;}
    .ck-modal-save[disabled]{opacity:.6;cursor:default;}
    `;
    document.head.appendChild(st);
  }

  const root = createDiv({cls:"ck-inbox"});
  const btn = root.createEl("button",{cls:"ck-inbox-btn",text:"✏️  New note"});
  root.createDiv({cls:"ck-inbox-hint",text:"Tap, type in the popup, save — it lands here for us to pick up. No editing mode needed."});
  const countEl = root.createDiv({cls:"ck-inbox-count"});
  const listEl = root.createDiv({cls:"ck-inbox-list"});

  const sanitize = s => (s||"").replace(/[\\/:*?"<>|#^\[\]]/g,"").replace(/\s+/g," ").trim();

  async function ensureFolder(){
    if(!app.vault.getAbstractFileByPath(FOLDER)){
      try{ await app.vault.createFolder(FOLDER); }catch(e){}
    }
  }

  async function saveNote(title, body){
    await ensureFolder();
    const d = new Date();
    const stamp = `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())} ${pad(d.getHours())}${pad(d.getMinutes())}`;
    const clean = sanitize(title) || "Note";
    const base = `${FOLDER}/${stamp} ${clean}`.slice(0,180);
    let path = `${base}.md`, i = 2;
    while(app.vault.getAbstractFileByPath(path)){ path = `${base} (${i++}).md`; }
    const iso = `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
    const content = `---\ntags:\n  - inbox\ncaptured: ${iso}\nsource: Carol\nstatus: new\n---\n# ${clean}\n\n${body||""}\n`;
    return app.vault.create(path, content);
  }

  function openModal(){
    const bg = document.body.createDiv({cls:"ck-modal-bg"});
    const m = bg.createDiv({cls:"ck-modal"});
    m.createEl("h3",{text:"New note"});
    const titleI = m.createEl("input"); titleI.type = "text"; titleI.placeholder = "Title (optional)";
    const bodyT = m.createEl("textarea"); bodyT.placeholder = "Type your note…";
    const rowr = m.createDiv({cls:"ck-modal-row"});
    const cancel = rowr.createEl("button",{cls:"ck-modal-cancel",text:"Cancel"});
    const save = rowr.createEl("button",{cls:"ck-modal-save",text:"Save to inbox"});
    const close = ()=>{ bg.remove(); document.removeEventListener("keydown",onKey); };
    const onKey = e => { if(e.key === "Escape") close(); };
    document.addEventListener("keydown",onKey);
    bg.onclick = e => { if(e.target === bg) close(); };
    cancel.onclick = close;
    save.onclick = async () => {
      const t = titleI.value.trim(), b = bodyT.value;
      if(!t && !b.trim()){ close(); return; }
      save.disabled = true; save.textContent = "Saving…";
      try{
        await saveNote(t || b.trim().split("\n")[0].slice(0,60), b);
      }catch(e){ console.error("inbox save failed",e); save.textContent = "Error — try again"; save.disabled = false; return; }
      close(); paint();
    };
    setTimeout(()=>titleI.focus(), 40);
  }
  btn.onclick = openModal;

  function fmt(ts){ const d=new Date(ts); return d.toLocaleDateString(undefined,{month:"short",day:"numeric"})+" · "+pad(d.getHours())+":"+pad(d.getMinutes()); }

  function collect(){
    return app.vault.getMarkdownFiles().filter(f => {
      if(f.path === FOLDER || f.path.startsWith(FOLDER + "/")) return true;
      const c = app.metadataCache.getFileCache(f);
      let tags = (c && c.frontmatter && c.frontmatter.tags) || [];
      if(!Array.isArray(tags)) tags = [tags];
      return tags.includes("inbox");
    }).sort((a,b) => b.stat.ctime - a.stat.ctime);
  }

  async function paint(){
    listEl.empty();
    const files = collect();
    countEl.setText(files.length ? `${files.length} waiting` : "");
    if(!files.length){
      listEl.createDiv({cls:"ck-inbox-empty",text:"Inbox empty — tap ✏️ New note to capture your first thought."});
      return;
    }
    for(const f of files){
      const row = listEl.createDiv({cls:"ck-inbox-row"});
      row.createDiv({cls:"t",text:f.basename});
      row.createDiv({cls:"m",text:fmt(f.stat.ctime)});
      const ex = row.createDiv({cls:"x"});
      try{
        const raw = await app.vault.cachedRead(f);
        const body = raw.replace(/^---\n[\s\S]*?\n---\n/,"").replace(/^#.*\n/,"").trim().replace(/\s+/g," ");
        ex.setText(body ? (body.length > 120 ? body.slice(0,120) + "…" : body) : "(no text yet)");
      }catch(e){ ex.setText(""); }
      row.onclick = () => { app.workspace.getLeaf(false).openFile(f); };
    }
  }
  paint();

  // keep the list live as notes are captured / processed
  try{
    component.registerEvent(app.vault.on("create", () => paint()));
    component.registerEvent(app.vault.on("delete", () => paint()));
    component.registerEvent(app.vault.on("rename", () => paint()));
  }catch(e){}
  return root;
}
