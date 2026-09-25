/* SLR Risk Assessment Dashboard v1. Renders the risk data embedded in the HTML file that loads it. */
(function(){
"use strict";
const SRC=document.documentElement.outerHTML;
const CSS=":root{--ink:#1E1E1E;--soft:#565D4F;--paper:#F6F6F2;--line:#DCDACD;--gd:#263326;--lime:#D6F591;--tint:#EEF7DB}\n*{box-sizing:border-box}\nbody{margin:0;background:var(--paper);color:var(--ink);font:14px/1.45 Figtree,\"Segoe UI\",Arial,sans-serif}\nheader{background:linear-gradient(135deg,#1B241B,#3C533C);color:#F6F6F2;padding:18px 28px;display:flex;flex-wrap:wrap;gap:12px;align-items:center}\nheader h1{margin:0;font-size:21px}\n.sub{font-size:13px;opacity:.8}\n.acts{margin-left:auto;display:flex;gap:8px;flex-wrap:wrap}\nbutton,select,input,textarea{font:inherit;font-size:13px}\n.btn{padding:6px 12px;border-radius:7px;border:1px solid var(--line);background:#fff;color:var(--ink);cursor:pointer}\n.btn.p{background:var(--lime);border-color:var(--lime);color:var(--gd);font-weight:600}\n.panel{margin:16px 28px;background:#fff;border:1px solid var(--line);border-radius:10px;padding:16px 18px}\nh2{margin:0 0 6px;font-size:15px}\n.note{margin:12px 28px 0;padding:8px 12px;border-radius:8px;background:#FFF9E8;border:1px solid #E9DBA6;font-size:13px}\n.row{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin-bottom:10px}\n.row h2{margin:0}\n.sp{flex:1}\n.row select,.row input[type=search]{padding:5px 7px;border:1px solid var(--line);border-radius:6px;background:#fff}\n.hint{font-size:12px;color:var(--soft)}\n.stats{display:grid;grid-template-columns:repeat(5,1fr);gap:10px;margin-bottom:12px}\n.stat{border:1px solid var(--line);border-radius:8px;padding:8px;text-align:center;cursor:pointer}\n.stat b{display:block;font-size:24px}\n.on{outline:3px solid var(--gd);outline-offset:-3px}\n.mx{border-spacing:5px}\n.mx th{font-size:11px;color:var(--soft);font-weight:600;padding:2px 6px}\n.mx td{width:74px;height:50px;text-align:center;border-radius:7px;cursor:pointer;font-weight:700;font-size:18px}\n.mx small{display:block;font-size:9px;text-transform:uppercase;font-weight:600}\n.reg{border-collapse:collapse;width:100%;font-size:13px}\n.reg th,.reg td{border:1px solid var(--line);padding:6px 8px;text-align:left;vertical-align:top}\n.reg th{background:#F0F0E8;font-size:11px;text-transform:uppercase;color:var(--soft)}\n.reg tbody tr{cursor:pointer}\n.reg tbody tr:hover td{background:var(--tint)}\n.reg ul,#ctx ul{margin:0;padding-left:18px}\n.pill{display:inline-block;padding:1px 8px;border-radius:12px;color:#fff;font-size:12px;font-weight:600}\n.wrap{overflow-x:auto}\n.ov{position:fixed;inset:0;background:rgba(20,22,17,.45);display:none;justify-content:flex-end;z-index:9}\n.ov.show{display:flex}\n.dr{width:560px;max-width:100%;height:100%;overflow:auto;background:#fff;padding:20px 22px}\n.f{margin-bottom:10px}\n.f>label{display:block;font-size:11px;text-transform:uppercase;color:var(--soft);margin-bottom:3px}\n.f textarea,.f select{width:100%;padding:6px;border:1px solid var(--line);border-radius:6px}\n.f textarea{min-height:52px}\n.two{display:grid;grid-template-columns:1fr 1fr;gap:10px}\n.ck{display:inline-flex;gap:4px;margin:0 12px 4px 0}\n.err{color:#A73434}\n@media(max-width:700px){.stats{grid-template-columns:repeat(3,1fr)}.panel,.note{margin:10px}.two{grid-template-columns:1fr}header{padding:14px}}\n@media print{.acts,.ov,.row select,.row input,.row button,.row label{display:none!important}}\n.tabs{display:flex;gap:6px;margin-top:4px}\n.tab{padding:7px 14px;border:1px solid var(--line);border-radius:18px;background:#fff;cursor:pointer;font-weight:600;color:var(--soft)}\n.tab.on{background:var(--gd);border-color:var(--gd);color:#fff}\n.f input{width:100%;padding:6px;border:1px solid var(--line);border-radius:6px}\n.three{display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px}\nsvg.spr text{font-size:12px;fill:var(--ink)}\nsvg.spr text.ch{font-weight:700;fill:var(--soft);text-transform:uppercase;font-size:11px}\nsvg.spr text.cnt{fill:var(--soft);font-weight:700}\n.nd{cursor:pointer}.nd rect{fill:#fff;stroke:#BDBBAE}.nd:hover rect{fill:var(--tint)}.nd.on rect{fill:var(--tint);stroke:var(--gd);stroke-width:2.5}\n.lk{cursor:pointer}.lk path{fill:none;stroke-width:2.5;opacity:.75}.lk:hover path{stroke-width:5;opacity:1}\n.dim{opacity:.12}\n#sprSel a{color:var(--gd);font-weight:700}\n";
const APP='<header><div><h1 id="title">Risk Dashboard</h1><div class="sub" id="subtitle"></div></div><div class="acts"><button class="btn" id="bAdd">Add risks</button><button class="btn" id="bCsv">Export to Excel (CSV)</button><button class="btn p" id="bSave">Save copy</button></div></header><div id="msg"></div><div class="panel" id="ctx"></div><div class="panel"><div class="row"><select id="fTax"></select><select id="fPh"></select><input id="fQ" type="search" placeholder="Search"><label><input type="checkbox" id="fFl"> Flagged only</label><span class="sp"></span><label><input type="radio" name="view" value="inh" checked> Inherent</label><label><input type="radio" name="view" value="res"> Residual</label><button class="btn" id="bClr">Clear filters</button></div><div class="tabs" role="tablist"><button class="tab on" data-t="tReg" role="tab" aria-selected="true">Matrix and register</button><button class="tab" data-t="tSpr" role="tab" aria-selected="false">Pathway diagram</button></div></div><div id="tReg"><div class="panel"><h2>Risk matrix</h2><div class="stats" id="stats"></div><div class="wrap" id="matrix"></div></div><div class="panel"><div class="row"><h2>Risk register</h2><span class="sp"></span><button class="btn" id="bNew">+ New risk</button></div><div class="wrap" id="reg"></div></div></div><div id="tSpr" hidden><div class="panel"><h2>Source, pathway and receptor</h2><p class="hint" id="sprHint"></p><div class="wrap" id="spr"></div><div id="sprSel"></div></div></div><div class="ov" id="ov"><div class="dr" id="dr" role="dialog" aria-modal="true"></div></div><div class="ov" id="ovA"><div class="dr" role="dialog" aria-modal="true"><h3>Add risks from the agent</h3><p>Paste the code block of extra risks from the agent.</p><div class="f"><textarea id="aTxt" style="min-height:45vh" spellcheck="false"></textarea></div><p class="err" id="aErr"></p><button class="btn p" id="aGo">Add risks</button> <button class="btn" id="aX">Cancel</button></div></div>';
document.head.insertAdjacentHTML("beforeend",'<link href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;600;700&display=swap" rel="stylesheet"><style>'+CSS+"</style>");
document.body.insertAdjacentHTML("afterbegin",APP);
const bootEl=document.getElementById("boot");if(bootEl)bootEl.remove();
const $=id=>document.getElementById(id);
const COL={Low:["#5C8A5C","#E4EDE0"],Medium:["#C99A2E","#F6E9C9"],High:["#C4652B","#F5DDC8"],Extreme:["#A73434","#F2D4D2"]};
const RATINGS=["Low","Medium","High","Extreme"];
const LIKE=["Almost Certain","Likely","Possible","Unlikely","Rare"];
const CONS=["Insignificant","Minor","Moderate","Major","Severe"];
const CONS_D=["Slight","Minor","Moderate","Major","Severe"];
function grid(cons,rows){const m={};LIKE.forEach((l,i)=>{m[l]={};cons.forEach((c,j)=>{m[l][c]={L:"Low",M:"Medium",H:"High",E:"Extreme"}[rows[i][j]];});});return m;}
const M5=grid(CONS,["MHHEE","MMHEE","LMMHE","LLMHH","LLMMH"]);
const MD=grid(CONS_D,["MHHEE","MMHHE","LMMHE","LMMMH","LLMMH"]);
const SIG=["Not significant","Potentially significant (confirm)","Significant residual impact (offset required)"];
const EMP_PH=["Construction","Operation","Decommissioning","Closure / rehabilitation"];
const EMP_TXT=[["envObjective","Environmental outcome"],["triggerThreshold","Trigger and threshold criteria"],["responseActions","Management and response actions"],["monitoring","Monitoring and reporting"],["offsetNotes","Offset notes"],["comments","Residual risk comments"]];
const NOTE="Default 5x5 matrix. Confirm against the proponent's matrix.";
const FW={
mdcp:{name:"MDCP / DMPE Risk Matrix (2025b)",cons:CONS,like:LIKE,m:M5,top:"Factor",sub:"Indicator",
fi:{"Flora, vegetation and fauna":["Ecosystem function","Flora and vegetation","Fauna","Environmental threats"],
"Inland waters":["Surface water quality","Surface water quantity","Ground water quality","Ground water quantity"],
"Terrestrial environmental quality":["Soil resources","Land contamination","Landscape"],
"Rehabilitation and Mine Closure":["Landscape","Physical safety","Post mining land use","Physical and geotechnical stability","Land contamination"]},
dom:["Mining Area","Mine Waste Land Forms","Tailings Storage Facility","Infrastructure Area","Water Facilities","Landfills","Water Management Structures","Topsoil Stockpile / Growth Medium Storage"],
ph:["Construction","Operation","Care & maintenance","Closure","Decommissioning"],sel:[],txt:[["outcome","Site-specific outcome and notes"]]},
dwer:{name:"DWER Works Approval Risk Framework",cons:CONS_D,like:LIKE,m:MD,top:"Receptor category",rc:["Environment","Public health and amenity"],
ph:["Construction","Commissioning","Operation"],sel:[],txt:[["comments","Residual risk comments"]]},
"epa-emp":{name:"EP Act Part IV EMP (EPA WA factors)",note:NOTE,cons:CONS,like:LIKE,m:M5,top:"EPA theme",sub:"Environmental factor",
fi:{"Sea":["Benthic Communities and Habitats","Coastal Processes","Marine Environmental Quality","Marine Fauna"],
"Land":["Flora and Vegetation","Landforms","Subterranean Fauna","Terrestrial Environmental Quality","Terrestrial Fauna"],
"Water":["Inland Waters"],"Air":["Air Quality","Greenhouse Gas Emissions"],"People":["Social Surroundings","Human Health"]},
ph:EMP_PH,sel:[["provisionType","Provision type",["Outcome-based","Management-based"]],["residualSignificance","Residual impact significance",SIG]],txt:EMP_TXT},
"epbc-emp":{name:"EPBC Act EMP (MNES)",note:NOTE,cons:CONS,like:LIKE,m:M5,top:"Matter of NES",sub:"Protected value",
fi:{"Listed threatened species and ecological communities":["Threatened fauna","Threatened flora","Threatened ecological community"],
"Listed migratory species":["Migratory species"],"Wetlands of international importance (Ramsar)":["Ramsar wetland"],
"World Heritage properties":["World Heritage values"],"National Heritage places":["National Heritage values"],
"Commonwealth marine areas":["Commonwealth marine environment"],"Great Barrier Reef Marine Park":["GBRMP values"],
"Nuclear actions":["Nuclear action (incl. uranium mining)"],"Water resources (CSG / large coal mining)":["Water resource"],
"Commonwealth land / agency actions":["Commonwealth land"]},
ph:EMP_PH,sel:[["residualSignificance","Residual impact significance",SIG]],txt:EMP_TXT}
};
const FLAG="\u{1F6A9}";
const LBL={inhCons:"inherent consequence",inhLike:"inherent likelihood",resCons:"residual consequence",resLike:"residual likelihood"};
let D,F,ISS={},view="inh",cell=null,rfilt=null,dirty=false,tab="tReg",sprSel=null;
const esc=s=>String(s==null?"":s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
const norm=s=>String(s==null?"":s).toLowerCase().replace(/&/g,"and").replace(/[^a-z0-9]/g,"");
function pick(v,o){if(v==null||String(v).trim()==="")return "";const n=norm(v);let h=o.find(x=>norm(x)===n);
if(h===undefined)h=o.find(x=>norm(x).replace(/s$/,"")===n.replace(/s$/,""));return h===undefined?null:h;}
const rate=(c,l)=>(F.m[l]&&F.m[l][c])||"";
const RK=r=>rate(r[view+"Cons"],r[view+"Like"]);
const pill=r=>r?'<span class="pill" style="background:'+COL[r][0]+'">'+r+"</span>":"-";
function customFw(c){
if(!c||!Array.isArray(c.consLevels)||!Array.isArray(c.likeLevels)||!c.matrix)throw new Error("customFramework needs consLevels, likeLevels and matrix.");
const bad=[];c.likeLevels.forEach(l=>c.consLevels.forEach(k=>{if(!RATINGS.includes(c.matrix[l]&&c.matrix[l][k]))bad.push(l+" / "+k);}));
if(bad.length)throw new Error("customFramework matrix has missing or invalid cells: "+bad.join(", "));
const arr=(a,d)=>Array.isArray(a)&&a.length?a:d;
return{name:c.name||"Custom risk matrix",cons:c.consLevels,like:c.likeLevels,m:c.matrix,top:"Receptor category",
rc:arr(c.receptorCategories,["Environment","Public health and amenity"]),ph:arr(c.phaseOptions,null),sel:[],txt:[["comments","Residual risk comments"]]};}
function clean(r){
const p=[];
const list=(v,o,w)=>{const a=Array.isArray(v)?v:(typeof v==="string"&&v.trim()?v.split(/[,;]/):[]),out=[];
a.forEach(x=>{const m=pick(x,o);if(m===null)p.push(w+' "'+String(x).trim()+'" not recognised');else if(m&&!out.includes(m))out.push(m);});return out;};
["source","pathway","receptor"].forEach(k=>{r[k]=String(r[k]==null?"":r[k]).trim();if(!r[k])p.push(k+" is blank");});
const t=r.treatment;
r.treatment=(Array.isArray(t)?t.map(String):String(t==null?"":t).replace(/<\/?(li|ul|ol|br|p)[^>]*>/gi,"\n").replace(/<[^>]+>/g,"").split("\n")).map(x=>x.replace(/^\s*[-*\u2022]\s*/,"").trim()).filter(Boolean);
if(F.fi){const fs=Object.keys(F.fi);let f=pick(r.factor,fs);
if(!f){const own=fs.filter(x=>pick(r.indicator,F.fi[x]));if(own.length===1)f=own[0];}
if(!f){p.push(F.top+' "'+(r.factor||"")+'" not recognised');r.factor="";r.indicator="";}
else{r.factor=f;const i=pick(r.indicator,F.fi[f]);if(!i){p.push(F.sub+' "'+(r.indicator||"")+'" not valid under '+f);r.indicator="";}else r.indicator=i;}}
else{const c=pick(r.receptorCategory,F.rc);if(!c){p.push('category "'+(r.receptorCategory||"")+'" not recognised');r.receptorCategory="";}else r.receptorCategory=c;}
if(F.dom)r.domains=list(r.domains,F.dom,"domain");
if(F.ph){r.phases=list(r.phases,F.ph,"phase");if(!r.phases.length)p.push("no phase");}
[["inhCons",F.cons],["inhLike",F.like],["resCons",F.cons],["resLike",F.like]].forEach(([k,o])=>{const v=pick(r[k],o);
if(!v){p.push(LBL[k]+(v===null?' "'+r[k]+'" not in this framework':" missing"));r[k]="";}else r[k]=v;});
F.sel.forEach(([k,l,o])=>{const v=pick(r[k],o);if(v===null){p.push(l+' "'+r[k]+'" not recognised');r[k]="";}else r[k]=v;});
F.txt.forEach(([k])=>{r[k]=r[k]==null?"":String(r[k]);});
["sourceShort","pathwayShort","receptorShort"].forEach(k=>{r[k]=r[k]==null?"":String(r[k]).trim();});
const i=rate(r.inhCons,r.inhLike),s=rate(r.resCons,r.resLike);
if(i&&s&&RATINGS.indexOf(s)>RATINGS.indexOf(i))p.push("residual higher than inherent");
r.flagged=r.flagged===true||r.flagged==="true"||r._flagged===true||p.length>0;
delete r._flagged;delete r.inhRating;delete r.resRating;
return p;}
function fail(m){$("msg").innerHTML='<div class="note err">'+esc(m)+"</div>";document.querySelectorAll(".panel,.acts,#tReg,#tSpr").forEach(e=>e.style.display="none");}
function load(){
const raw=$("risk-data").textContent.trim();
if(raw.charAt(0)!=="{")return fail("No risk data in this file yet. Ask the Risk Assessment agent to build your dashboard.");
try{D=JSON.parse(raw);}catch(e){return fail("The data in this file has an error ("+e.message+"). Ask the agent to re-issue the dashboard.");}
try{F=D.customFramework?customFw(D.customFramework):FW[String(D.framework||"").toLowerCase()];
if(!F)throw new Error('Unknown framework "'+D.framework+'". Use mdcp, dwer, epa-emp or epbc-emp.');}catch(e){return fail(e.message);}
D.risks=(Array.isArray(D.risks)?D.risks:[]).filter(r=>r&&typeof r==="object"&&!Array.isArray(r));
const ids=D.risks.map(r=>r.id),ok=ids.every(x=>Number.isInteger(x)&&x>0)&&new Set(ids).size===ids.length;
D.risks.forEach((r,i)=>{if(!ok)r.id=i+1;const p=clean(r);if(p.length)ISS[r.id]=p;});
setup();render();}
function setup(){
document.title=(D.project||"Project")+" risk dashboard";
$("title").textContent=D.project||"Untitled project";
$("subtitle").textContent=[D.proponent,D.location,F.name].filter(Boolean).join(" | ");
const a=Array.isArray(D.assumptions)?D.assumptions:[];
$("ctx").innerHTML="<h2>Project context</h2><p>"+esc(D.summary||"No summary provided.")+"</p>"+(a.length?"<h2>Assumptions</h2><ul>"+a.map(x=>"<li>"+esc(x)+"</li>").join("")+"</ul>":"")+(F.note?'<p class="hint">'+esc(F.note)+"</p>":"");
$("fTax").innerHTML='<option value="">'+esc(F.top)+": all</option>"+(F.fi?Object.keys(F.fi):F.rc).map(x=>"<option>"+esc(x)+"</option>").join("");
if(F.ph)$("fPh").innerHTML='<option value="">Phase: all</option>'+F.ph.map(x=>"<option>"+esc(x)+"</option>").join("");else $("fPh").style.display="none";
["fTax","fPh","fFl"].forEach(id=>$(id).onchange=()=>{cell=null;render();});
$("fQ").oninput=()=>render();
document.querySelectorAll('input[name="view"]').forEach(x=>x.onchange=()=>{view=x.value;cell=null;rfilt=null;render();});
$("bClr").onclick=()=>{$("fTax").value="";$("fPh").value="";$("fQ").value="";$("fFl").checked=false;cell=null;rfilt=null;render();};
$("bNew").onclick=()=>openDr(null);
$("bAdd").onclick=()=>{$("aErr").textContent="";$("ovA").classList.add("show");$("aTxt").focus();};
$("aX").onclick=()=>$("ovA").classList.remove("show");
document.querySelectorAll(".tab").forEach(b=>b.onclick=()=>{tab=b.dataset.t;document.querySelectorAll(".tab").forEach(x=>{x.classList.toggle("on",x===b);x.setAttribute("aria-selected",String(x===b));});$("tReg").hidden=tab!=="tReg";$("tSpr").hidden=tab!=="tSpr";});
$("aGo").onclick=addRisks;$("bSave").onclick=saveCopy;$("bCsv").onclick=csv;}
function base(){const t=$("fTax").value,ph=$("fPh").value,q=$("fQ").value.trim().toLowerCase(),fl=$("fFl").checked;
return D.risks.filter(r=>(!t||(F.fi?r.factor:r.receptorCategory)===t)&&(!ph||(r.phases||[]).includes(ph))&&(!fl||r.flagged)&&
(!q||[r.id,r.source,r.pathway,r.receptor,r.factor,r.indicator,r.receptorCategory].join(" ").toLowerCase().includes(q)));}
function render(){const b=base();drawStats(b);const byR=rfilt?b.filter(r=>RK(r)===rfilt):b;drawMatrix(byR);
const list=cell?byR.filter(r=>r[view+"Like"]===cell[0]&&r[view+"Cons"]===cell[1]):byR;drawReg(list);drawSpr(list);msgs();}
function msgs(){const n=D.risks.filter(r=>r.flagged).length;
$("msg").innerHTML=(n?'<div class="note">'+FLAG+" "+n+" risk"+(n>1?"s are":" is")+" flagged (assumptions or values to check). Tick Flagged only, then click a row to see why.</div>":"")+
(dirty?'<div class="note"><b>Unsaved changes.</b> Click Save copy to download an updated file. Share that file, not the old one.</div>':"");}
function drawStats(list){const c={};RATINGS.forEach(x=>c[x]=0);list.forEach(r=>{const k=RK(r);if(k)c[k]++;});
$("stats").innerHTML='<div class="stat'+(rfilt?"":" on")+'" data-r=""><b>'+list.length+"</b>Total</div>"+RATINGS.map(x=>'<div class="stat'+(rfilt===x?" on":"")+'" data-r="'+x+'"><b style="color:'+COL[x][0]+'">'+c[x]+"</b>"+x+"</div>").join("");
$("stats").querySelectorAll(".stat").forEach(s=>s.onclick=()=>{rfilt=s.dataset.r&&rfilt!==s.dataset.r?s.dataset.r:null;cell=null;render();});}
function drawMatrix(list){let h='<table class="mx"><tr><th></th>'+F.cons.map(c=>"<th>"+esc(c)+"</th>").join("")+"</tr>";
F.like.forEach(l=>{h+='<tr><th style="text-align:right">'+esc(l)+"</th>";F.cons.forEach(c=>{const rt=F.m[l][c],n=list.filter(r=>r[view+"Cons"]===c&&r[view+"Like"]===l).length,on=cell&&cell[0]===l&&cell[1]===c;
h+='<td class="'+(on?"on":"")+'" data-l="'+esc(l)+'" data-c="'+esc(c)+'" style="background:'+COL[rt][1]+";color:"+COL[rt][0]+";opacity:"+(n?1:.45)+'"><small>'+rt+"</small>"+(n||"")+"</td>";});h+="</tr>";});
$("matrix").innerHTML=h+'</table><p class="hint">Rows are likelihood. Columns are consequence. Click a cell or a card to filter the register.</p>';
$("matrix").querySelectorAll("td").forEach(td=>td.onclick=()=>{const l=td.dataset.l,c=td.dataset.c;cell=cell&&cell[0]===l&&cell[1]===c?null:[l,c];render();});}
function drawReg(list){if(!list.length){$("reg").innerHTML='<p class="hint">'+(D.risks.length?"No risks match these filters.":"No risks yet. Click + New risk or ask the agent.")+"</p>";return;}
$("reg").innerHTML='<table class="reg"><thead><tr><th>#</th><th>'+esc(F.fi?F.top+" / "+F.sub:F.top)+"</th><th>Source</th><th>Pathway</th><th>Receptor</th>"+(F.ph?"<th>Phases</th>":"")+"<th>Inherent</th><th>Treatment</th><th>Residual</th></tr></thead><tbody>"+
list.map(r=>'<tr tabindex="0" data-id="'+r.id+'"><td>'+r.id+(r.flagged?" "+FLAG:"")+"</td><td>"+esc(F.fi?[r.factor,r.indicator].filter(Boolean).join(" / "):r.receptorCategory)+"</td><td>"+esc(r.source)+"</td><td>"+esc(r.pathway)+"</td><td>"+esc(r.receptor)+"</td>"+
(F.ph?"<td>"+esc((r.phases||[]).join(", "))+"</td>":"")+"<td>"+pill(rate(r.inhCons,r.inhLike))+"</td><td>"+(r.treatment.length?"<ul>"+r.treatment.map(x=>"<li>"+esc(x)+"</li>").join("")+"</ul>":"")+"</td><td>"+pill(rate(r.resCons,r.resLike))+"</td></tr>").join("")+"</tbody></table>";
$("reg").querySelectorAll("tr[data-id]").forEach(tr=>{tr.onclick=()=>openDr(+tr.dataset.id);tr.onkeydown=e=>{if(e.key==="Enter")openDr(+tr.dataset.id);};});}
function openDr(id){const isNew=id==null;
const r=isNew?{id:D.risks.reduce((m,x)=>Math.max(m,x.id),0)+1,treatment:[],flagged:false}:D.risks.find(x=>x.id===id);
const opt=(o,v)=>'<option value="">-</option>'+o.map(x=>"<option"+(x===v?" selected":"")+">"+esc(x)+"</option>").join("");
const cks=(n,o,v)=>o.map(x=>'<label class="ck"><input type="checkbox" name="'+n+'" value="'+esc(x)+'"'+((v||[]).includes(x)?" checked":"")+">"+esc(x)+"</label>").join("");
const ta=(k,l,v)=>'<div class="f"><label>'+esc(l)+'</label><textarea id="e_'+k+'">'+esc(v)+"</textarea></div>";
let h="<h3>"+(isNew?"New risk":"Risk "+r.id)+"</h3>"+(ISS[r.id]?'<div class="note" style="margin:0 0 10px">To check: '+esc(ISS[r.id].join("; "))+"</div>":"")+
'<p><label><input type="checkbox" id="e_flag"'+(r.flagged?" checked":"")+"> Flag for review</label></p>";
h+=F.fi?'<div class="two"><div class="f"><label>'+esc(F.top)+'</label><select id="e_factor">'+opt(Object.keys(F.fi),r.factor)+'</select></div><div class="f"><label>'+esc(F.sub)+'</label><select id="e_indicator">'+opt(F.fi[r.factor]||[],r.indicator)+"</select></div></div>"
:'<div class="f"><label>'+esc(F.top)+'</label><select id="e_rc">'+opt(F.rc,r.receptorCategory)+"</select></div>";
if(F.dom)h+='<div class="f"><label>Domains</label>'+cks("dom",F.dom,r.domains)+"</div>";
h+=ta("source","Source",r.source)+ta("pathway","Pathway",r.pathway)+ta("receptor","Receptor",r.receptor);
h+='<div class="f"><label>Diagram labels (short. The same words merge boxes)</label><div class="three">'+[["sourceShort","Source"],["pathwayShort","Pathway"],["receptorShort","Receptor"]].map(([k,l])=>'<input id="e_'+k+'" placeholder="'+l+'" value="'+esc(r[k]||"")+'">').join("")+"</div></div>";
if(F.ph)h+='<div class="f"><label>Phases</label>'+cks("ph",F.ph,r.phases)+"</div>";
h+='<div class="two">'+["inh","res"].map(p=>"<div><b>"+(p==="inh"?"Inherent":"Residual")+'</b><div class="f"><label>Consequence</label><select id="e_'+p+'Cons">'+opt(F.cons,r[p+"Cons"])+'</select></div><div class="f"><label>Likelihood</label><select id="e_'+p+'Like">'+opt(F.like,r[p+"Like"])+'</select></div><div id="e_'+p+'R"></div></div>').join("")+"</div>";
h+=ta("treatment","Treatment (one control per line)",(r.treatment||[]).join("\n"));
F.sel.forEach(([k,l,o])=>{h+='<div class="f"><label>'+esc(l)+'</label><select id="e_'+k+'">'+opt(o,r[k])+"</select></div>";});
F.txt.forEach(([k,l])=>{h+=ta(k,l,r[k]);});
h+='<p><button class="btn p" id="eSave">Save</button> <button class="btn" id="eX">Cancel</button>'+(isNew?"":' <button class="btn err" id="eDel">Delete</button>')+"</p>";
$("dr").innerHTML=h;$("ov").classList.add("show");
const prev=()=>["inh","res"].forEach(p=>{$("e_"+p+"R").innerHTML="Rating: "+pill(rate($("e_"+p+"Cons").value,$("e_"+p+"Like").value));});
["inhCons","inhLike","resCons","resLike"].forEach(k=>$("e_"+k).onchange=prev);prev();
if(F.fi)$("e_factor").onchange=()=>{$("e_indicator").innerHTML=opt(F.fi[$("e_factor").value]||[],"");};
$("eX").onclick=closeDr;
if(!isNew)$("eDel").onclick=()=>{if(confirm("Delete risk "+r.id+"?")){D.risks=D.risks.filter(x=>x!==r);delete ISS[r.id];closeDr();changed();}};
$("eSave").onclick=()=>{const v=k=>$("e_"+k).value,got=n=>[...document.querySelectorAll('#dr input[name="'+n+'"]:checked')].map(x=>x.value);
if(F.fi){r.factor=v("factor");r.indicator=v("indicator");}else r.receptorCategory=v("rc");
if(F.dom)r.domains=got("dom");if(F.ph)r.phases=got("ph");
["source","pathway","receptor","sourceShort","pathwayShort","receptorShort"].forEach(k=>r[k]=v(k).trim());["inhCons","inhLike","resCons","resLike"].forEach(k=>r[k]=v(k));
r.treatment=v("treatment").split("\n").map(x=>x.trim()).filter(Boolean);
F.sel.forEach(([k])=>r[k]=v(k));F.txt.forEach(([k])=>r[k]=v(k));
r.flagged=$("e_flag").checked;delete ISS[r.id];const p=clean(r);if(p.length)ISS[r.id]=p;if(isNew)D.risks.push(r);closeDr();changed();};}
const cut=(s,n)=>s.length>n?s.slice(0,n-1)+"\u2026":s;
const lab=(r,k)=>String(r[k+"Short"]||r[k]||"").trim()||"(blank)";
function drawSpr(list){
$("sprHint").textContent="Each line is one risk, coloured by its "+(view==="inh"?"inherent":"residual")+" rating. Boxes with the same wording merge. Click a box to highlight its risks. Click a line to edit that risk. The filters above apply here too.";
if(!list.length){$("spr").innerHTML='<p class="hint">No risks match these filters.</p>';$("sprSel").innerHTML="";return;}
const K=["source","pathway","receptor"],cols=[[],[],[]],maps=[new Map(),new Map(),new Map()],RN=new Map();
list.forEach(r=>{RN.set(r,K.map((k,ci)=>{const l=lab(r,k),kk=norm(l)||l;let n=maps[ci].get(kk);if(!n){n={ci:ci,k:kk,label:l,risks:[]};maps[ci].set(kk,n);cols[ci].push(n);}n.risks.push(r);return n;}));});
const setO=ci=>cols[ci].forEach((n,i)=>{n.o=i;});cols.forEach((c,ci)=>setO(ci));
const mean=(n,ci)=>n.risks.reduce((s,r)=>s+RN.get(r)[ci].o,0)/n.risks.length;
const sortC=ci=>{cols[ci].sort((a,b)=>a.b-b.b);setO(ci);};
for(let it=0;it<4;it++){cols[0].forEach(n=>{n.b=mean(n,1);});sortC(0);cols[2].forEach(n=>{n.b=mean(n,1);});sortC(2);cols[1].forEach(n=>{n.b=(mean(n,0)+mean(n,2))/2;});sortC(1);}
const X=[0,390,780],NW=220,SL=9,GAP=12,TOP=28;
cols.forEach(c=>c.forEach(n=>{n.h=Math.max(30,n.risks.length*SL+12);}));
const colH=cols.map(c=>c.reduce((s,n)=>s+n.h,0)+GAP*(c.length-1)),H=Math.max(...colH);
cols.forEach((c,ci)=>{let y=TOP+(H-colH[ci])/2;c.forEach(n=>{n.y=y;y+=n.h+GAP;});});
cols.forEach((c,ci)=>c.forEach(n=>{if(ci<2)n.R=n.risks.slice().sort((a,b)=>RN.get(a)[ci+1].o-RN.get(b)[ci+1].o);if(ci>0)n.L=n.risks.slice().sort((a,b)=>RN.get(a)[ci-1].o-RN.get(b)[ci-1].o);}));
const sy=(n,arr,r)=>n.y+6+(arr.indexOf(r)+0.5)*(n.h-12)/arr.length;
const curve=(x1,y1,x2,y2)=>{const m=(x1+x2)/2;return "M"+x1+" "+y1.toFixed(1)+"C"+m+" "+y1.toFixed(1)+" "+m+" "+y2.toFixed(1)+" "+x2+" "+y2.toFixed(1);};
const hit=sprSel&&maps[sprSel.ci].get(sprSel.k)?sprSel:null;
const on=r=>!hit||RN.get(r)[hit.ci].k===hit.k;
let s='<svg class="spr" viewBox="0 0 1000 '+Math.ceil(H+TOP+8)+'" width="100%" style="min-width:760px" role="img" aria-label="Source, pathway and receptor diagram">';
["Source","Pathway","Receptor"].forEach((t,ci)=>{s+='<text class="ch" x="'+(X[ci]+NW/2)+'" y="14" text-anchor="middle">'+t+"</text>";});
list.forEach(r=>{const n=RN.get(r),rt=RK(r),col=rt?COL[rt][0]:"#9A9A8F";
s+='<g class="lk'+(on(r)?"":" dim")+'" data-rid="'+r.id+'" style="stroke:'+col+'"><title>#'+r.id+": "+esc(r.source)+" \u2192 "+esc(r.pathway)+" \u2192 "+esc(r.receptor)+(rt?" ("+rt+")":"")+'</title><path d="'+curve(X[0]+NW,sy(n[0],n[0].R,r),X[1],sy(n[1],n[1].L,r))+'"/><path d="'+curve(X[1]+NW,sy(n[1],n[1].R,r),X[2],sy(n[2],n[2].L,r))+'"/></g>';});
cols.forEach((c,ci)=>c.forEach(n=>{const sel=hit&&hit.ci===ci&&hit.k===n.k,lit=!hit||n.risks.some(on),m=n.risks.length;
s+='<g class="nd'+(sel?" on":"")+(lit?"":" dim")+'" data-ci="'+ci+'" data-k="'+esc(n.k)+'" tabindex="0"><title>'+esc(n.label)+" ("+m+" risk"+(m>1?"s":"")+')</title><rect x="'+X[ci]+'" y="'+n.y.toFixed(1)+'" width="'+NW+'" height="'+n.h+'" rx="6"/><text x="'+(X[ci]+8)+'" y="'+(n.y+n.h/2+4).toFixed(1)+'">'+esc(cut(n.label,m>1?30:34))+"</text>"+(m>1?'<text class="cnt" x="'+(X[ci]+NW-8)+'" y="'+(n.y+n.h/2+4).toFixed(1)+'" text-anchor="end">'+m+"</text>":"")+"</g>";}));
$("spr").innerHTML=s+"</svg>";
$("spr").querySelectorAll(".nd").forEach(g=>{const f=()=>{const ci=+g.dataset.ci,k=g.dataset.k;sprSel=sprSel&&sprSel.ci===ci&&sprSel.k===k?null:{ci:ci,k:k};drawSpr(list);};g.onclick=f;g.onkeydown=e=>{if(e.key==="Enter")f();};});
$("spr").querySelectorAll(".lk").forEach(g=>{g.onclick=()=>openDr(+g.dataset.rid);});
if(hit){const n=maps[hit.ci].get(hit.k);$("sprSel").innerHTML='<p><b>'+esc(n.label)+"</b>: "+n.risks.map(r=>'<a href="#" data-rid="'+r.id+'">#'+r.id+"</a> "+pill(RK(r))).join(" &nbsp; ")+"</p>";
$("sprSel").querySelectorAll("a").forEach(a=>{a.onclick=e=>{e.preventDefault();openDr(+a.dataset.rid);};});}
else $("sprSel").innerHTML='<p class="hint">Line colours: '+RATINGS.map(x=>'<span class="pill" style="background:'+COL[x][0]+'">'+x+"</span>").join(" ")+"</p>";}
function closeDr(){$("ov").classList.remove("show");}
function changed(){dirty=true;render();}
function parseLoose(t){t=String(t||"").replace(/`{3}[a-zA-Z]*/g,"").trim();
const s=[t.indexOf("["),t.indexOf("{")].filter(i=>i>=0);if(!s.length)throw new Error("No risks found. Copy the whole code block.");
const st=Math.min(...s),en=Math.max(t.lastIndexOf("]"),t.lastIndexOf("}"));
if(en<st)throw new Error("The code block looks cut off. Ask the agent for a smaller batch.");
const b=t.slice(st,en+1);try{return JSON.parse(b);}catch(e){try{return JSON.parse(b.replace(/,\s*([}\]])/g,"$1"));}catch(e2){throw new Error("That isn't valid JSON ("+e.message+"). Copy the block again.");}}}
function addRisks(){try{const d=parseLoose($("aTxt").value),list=Array.isArray(d)?d:(d&&Array.isArray(d.risks)?d.risks:null);
if(!list||!list.length)throw new Error("No risks found in that block.");
if(!Array.isArray(d)&&d.framework&&norm(d.framework)!==norm(D.framework))throw new Error('These risks are for "'+d.framework+'" but this dashboard uses "'+D.framework+'".');
let id=D.risks.reduce((m,x)=>Math.max(m,x.id),0),n=0;
list.forEach(x=>{if(!x||typeof x!=="object"||Array.isArray(x))return;const r=JSON.parse(JSON.stringify(x));r.id=++id;const p=clean(r);if(p.length)ISS[r.id]=p;D.risks.push(r);n++;});
$("aTxt").value="";$("ovA").classList.remove("show");changed();alert("Added "+n+" risk"+(n===1?"":"s")+". Click Save copy to keep them.");}
catch(e){$("aErr").textContent=e.message;}}
const fname=()=>String(D.project||"risks").replace(/[^a-z0-9]+/gi,"_")+"_risk_dashboard";
function dl(name,text,type){const a=document.createElement("a");a.href=URL.createObjectURL(new Blob([text],{type:type}));a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(a.href),2000);}
function saveCopy(){const json=JSON.stringify(D,null,1).replace(/<\//g,"<\\/");
dl(fname()+".html","<!DOCTYPE html>\n"+SRC.replace(/(<script type="application\/json" id="risk-data">)[\s\S]*?(<\/script>)/,(a,b,c)=>b+json+c),"text/html");dirty=false;render();}
function csv(){const cols=[["ID",r=>r.id],["Flagged",r=>r.flagged?"Yes":""]].concat(F.fi?[[F.top,r=>r.factor],[F.sub,r=>r.indicator]]:[[F.top,r=>r.receptorCategory]],
F.dom?[["Domains",r=>(r.domains||[]).join("; ")]]:[],[["Source",r=>r.source],["Pathway",r=>r.pathway],["Receptor",r=>r.receptor]],F.ph?[["Phases",r=>(r.phases||[]).join("; ")]]:[],
[["Inherent consequence",r=>r.inhCons],["Inherent likelihood",r=>r.inhLike],["Inherent rating",r=>rate(r.inhCons,r.inhLike)],["Treatment",r=>r.treatment.join("\n")],
["Residual consequence",r=>r.resCons],["Residual likelihood",r=>r.resLike],["Residual rating",r=>rate(r.resCons,r.resLike)]],F.sel.map(([k,l])=>[l,r=>r[k]]),F.txt.map(([k,l])=>[l,r=>r[k]]));
const q=v=>'"'+String(v==null?"":v).replace(/"/g,'""')+'"';
dl(fname()+".csv","\ufeff"+[cols.map(c=>q(c[0])).join(",")].concat(D.risks.map(r=>cols.map(c=>q(c[1](r))).join(","))).join("\r\n"),"text/csv");}
document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeDr();$("ovA").classList.remove("show");}});
window.addEventListener("beforeunload",e=>{if(dirty){e.preventDefault();e.returnValue="";}});
load();
})();
