/* SLR Risk Assessment Dashboard v4 (full + SPR model + AI review). Hosted build of the Generic Risk Dashboard.
   Renders the project data embedded in the HTML file that loads it. */
var __RD_ME = (document.currentScript && document.currentScript.src) || "";
var __RD_SRC = document.documentElement.outerHTML;
(function(){
  document.head.insertAdjacentHTML("beforeend", "<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n<link href=\"https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&family=Playfair+Display:ital,wght@0,400;0,500;1,400&display=swap\" rel=\"stylesheet\">\n<style>\n  :root{\n    --ink:#1E1E1E; --ink-soft:#565D4F;\n    --paper:#F6F6F2; --paper-raised:#FFFFFF; --line:#DCDACD;\n    --slr-green:#3C533C; --slr-green-deep:#263326; --slr-lime:#D6F591; --slr-tint:#EEF7DB;\n    --low:#5C8A5C; --low-bg:#E4EDE0;\n    --med:#C99A2E; --med-bg:#F6E9C9;\n    --high:#C4652B; --high-bg:#F5DDC8;\n    --extreme:#A73434; --extreme-bg:#F2D4D2;\n    --font-body:\"Figtree\",\"Segoe UI\",\"Helvetica Neue\",Arial,sans-serif;\n    --font-display:\"Playfair Display\",Georgia,serif;\n    --shadow:0 1px 2px rgba(28,27,24,0.06), 0 4px 14px rgba(28,27,24,0.06);\n  }\n  *{box-sizing:border-box;}\n  html,body{margin:0;padding:0;}\n  body{background:var(--paper); color:var(--ink); font-family:var(--font-body); padding-bottom:60px;}\n  .header{background:linear-gradient(135deg,#1B241B 0%,#263326 50%,#3C533C 100%); color:#F6F6F2; padding:22px 32px;}\n  .header{display:flex; align-items:center; gap:16px; flex-wrap:wrap;}\n  .header .btn.agent{margin-left:auto; background:var(--slr-lime); color:var(--slr-green-deep); border-color:var(--slr-lime); font-weight:600; padding:9px 16px;}\n  .header .btn.agent:hover{background:#E4FAB3; border-color:#E4FAB3;}\n  .header .btn.agent:focus-visible{outline:2px solid #fff; outline-offset:2px;}\n  .header h1{margin:0 0 4px; font-size:22px; font-weight:700;}\n  .eyebrow{font-size:12px; letter-spacing:.04em; text-transform:uppercase; opacity:.75;}\n  .scope-note{background:#FFF9E8; border-bottom:1px solid #E9DBA6; color:#6B5A1E; font-size:12.5px; padding:8px 32px;}\n  .setup-bar{display:flex; flex-wrap:wrap; gap:10px; align-items:center; padding:14px 32px; background:var(--paper-raised); border-bottom:1px solid var(--line);}\n  .setup-bar label{font-size:11.5px; color:var(--ink-soft); text-transform:uppercase; letter-spacing:.03em; margin-right:4px;}\n  select, input[type=text]{font-family:var(--font-body); font-size:13.5px; padding:6px 8px; border:1px solid var(--line); border-radius:6px; background:#fff; color:var(--ink);}\n  .btn{font-family:var(--font-body); font-size:13px; padding:7px 13px; border-radius:7px; border:1px solid var(--line); background:#fff; color:var(--ink); cursor:pointer;}\n  .btn:hover{border-color:var(--slr-green);}\n  .btn.primary{background:var(--slr-green); color:#fff; border-color:var(--slr-green);}\n  .btn.primary:hover{background:var(--slr-green-deep);}\n  .btn.danger{color:#A73434; border-color:#E5B9B9;}\n  .spacer{flex:1 1 auto;}\n  .panel{margin:20px 32px; background:var(--paper-raised); border:1px solid var(--line); border-radius:10px; box-shadow:var(--shadow); overflow:hidden;}\n  .panel-head{padding:14px 18px; border-bottom:1px solid var(--line); display:flex; align-items:center; gap:12px; flex-wrap:wrap;}\n  .panel-head h2{margin:0; font-size:15px;}\n  .panel-sub{font-size:12px; color:var(--ink-soft);}\n  .panel-body{padding:16px 18px;}\n  table{border-collapse:collapse; width:100%; font-size:13px;}\n  th,td{border:1px solid var(--line); padding:7px 9px; text-align:left; vertical-align:top;}\n  th{background:#F0F0E8; font-size:11.5px; text-transform:uppercase; letter-spacing:.02em; color:var(--ink-soft);}\n  td.wrap{max-width:260px; white-space:pre-wrap;}\n  .rating{display:inline-block; padding:2px 9px; border-radius:20px; font-size:12px; font-weight:600; color:#fff;}\n  .rating.Low{background:var(--low);} .rating.Medium{background:var(--med);}\n  .rating.High{background:var(--high);} .rating.Extreme{background:var(--extreme);}\n  .matrix-table td{text-align:center; cursor:pointer; font-size:12.5px; font-weight:600; color:#3a3a2f;}\n  .matrix-table td.hdr{background:#F0F0E8; cursor:default; font-weight:600; color:var(--ink-soft); font-size:11px; text-transform:uppercase;}\n  .matrix-table td.Low{background:var(--low-bg);} .matrix-table td.Medium{background:var(--med-bg);}\n  .matrix-table td.High{background:var(--high-bg);} .matrix-table td.Extreme{background:var(--extreme-bg);}\n  .matrix-table td.active-cell{outline:3px solid var(--slr-green-deep); outline-offset:-3px;}\n  .matrix-table td.gap-cell{background:#F5F5F0; color:#B0AFA0;}\n  .risk-matrix table.matrix-table{border-collapse:separate; border-spacing:6px; width:auto;}\n  .risk-matrix td{border:none; padding:0;}\n  .risk-matrix td.hdr{font-size:11px; font-weight:700; color:var(--ink-soft); text-transform:uppercase; letter-spacing:.4px; text-align:center; padding:4px; cursor:default; background:none;}\n  .risk-matrix td.axis-label-x{text-align:center; font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:1px; color:var(--ink-soft); padding-bottom:2px;}\n  .risk-matrix td.axis-label-y{writing-mode:vertical-rl; transform:rotate(180deg); font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:1px; color:var(--ink-soft); text-align:center; padding-right:4px;}\n  .risk-matrix td.like-label{font-size:12px; font-weight:600; text-align:right; padding-right:10px; white-space:nowrap; color:var(--ink); background:none;}\n  .risk-matrix td.rate-cell{\n    width:78px; height:60px; border-radius:8px; text-align:center; vertical-align:middle;\n    cursor:pointer; position:relative; transition:transform .12s ease, box-shadow .12s ease; border:2px solid transparent;\n  }\n  .risk-matrix td.rate-cell:hover{transform:translateY(-2px); box-shadow:0 4px 10px rgba(0,0,0,.18);}\n  .risk-matrix td.rate-cell.active-cell{border-color:var(--slr-green); box-shadow:0 0 0 2px rgba(60,83,60,.18) inset; outline:none;}\n  .risk-matrix .rating-tag{display:block; font-size:8.5px; text-transform:uppercase; letter-spacing:.5px; font-weight:700; opacity:.85;}\n  .risk-matrix .cell-count{display:block; font-size:20px; font-weight:800; font-family:var(--font-display); line-height:1.15;}\n  .risk-matrix td.rate-cell.empty-cell{opacity:.35;}\n  .risk-matrix td.rate-cell.Low{background:var(--low-bg); color:var(--low);}\n  .risk-matrix td.rate-cell.Medium{background:var(--med-bg); color:#8A6A18;}\n  .risk-matrix td.rate-cell.High{background:var(--high-bg); color:var(--high);}\n  .risk-matrix td.rate-cell.Extreme{background:var(--extreme-bg); color:var(--extreme);}\n  .empty-state{padding:40px 18px; text-align:center; color:var(--ink-soft); font-size:14px;}\n  .drawer-overlay{position:fixed; inset:0; background:rgba(20,22,17,.45); display:none; align-items:flex-start; justify-content:flex-end; z-index:50;}\n  .drawer-overlay.show{display:flex;}\n  .drawer{width:520px; max-width:94vw; height:100%; background:var(--paper-raised); overflow-y:auto; padding:22px 24px; box-shadow:-8px 0 24px rgba(0,0,0,.15);}\n  .drawer h3{margin-top:0;}\n  .field{margin-bottom:14px;}\n  .field label{display:block; font-size:11.5px; text-transform:uppercase; letter-spacing:.03em; color:var(--ink-soft); margin-bottom:4px;}\n  .field textarea, .field select, .field input[type=text]{width:100%; padding:8px; border:1px solid var(--line); border-radius:6px; font-family:var(--font-body); font-size:13.5px;}\n  .field textarea{min-height:64px; resize:vertical;}\n  .two-col{display:grid; grid-template-columns:1fr 1fr; gap:10px;}\n  .rating-preview{margin-top:6px;}\n  .drawer-actions{display:flex; gap:8px; margin-top:18px; padding-top:14px; border-top:1px solid var(--line);}\n  .chip-row{display:flex; gap:6px; flex-wrap:wrap;}\n  .chip{font-size:11.5px; padding:3px 9px; border-radius:14px; border:1px solid var(--line); background:#fff; cursor:pointer; user-select:none;}\n  .chip.active{background:var(--slr-tint); border-color:var(--slr-green);}\n  footer{padding:16px 32px; font-size:11.5px; color:var(--ink-soft); line-height:1.5;}\n  .hidden{display:none !important;}\n  .rich-toolbar{display:flex; gap:4px; margin-bottom:4px;}\n  .rich-toolbar button{font-size:11px; padding:3px 7px; border:1px solid var(--line); border-radius:4px; background:#fff; cursor:pointer; font-family:var(--font-body);}\n  .rich-toolbar button:hover{background:var(--slr-tint); border-color:var(--slr-green);}\n  .rich-box{min-height:56px; border:1px solid var(--line); border-radius:6px; padding:8px; font-size:13.5px; background:#fff; overflow-y:auto;}\n  .rich-box:focus{outline:2px solid var(--slr-green-light); outline-offset:1px;}\n  .rich-box ul, .rich-box ol{margin:4px 0 4px 18px; padding:0;}\n  .accent-source{border-left:4px solid #3C6E8F;}\n  .accent-pathway{border-left:4px solid #4F7942;}\n  .accent-receptor{border-left:4px solid #A73434;}\n  td.accent-source{border-left:3px solid #3C6E8F;}\n  td.accent-pathway{border-left:3px solid #4F7942;}\n  td.accent-receptor{border-left:3px solid #A73434;}\n  mark{background:#FFE9A8; padding:0 1px;}\n  .filter-row{display:flex; align-items:center; gap:8px; flex-wrap:wrap; margin-bottom:10px;}\n  .filter-row .flabel{font-size:11px; text-transform:uppercase; letter-spacing:.03em; color:var(--ink-soft); margin-right:2px;}\n  .filter-row input[type=text]{flex:1; min-width:180px;}\n  .stat-cards{display:grid; grid-template-columns:repeat(5, 1fr); gap:10px; margin-bottom:14px;}\n  .stat-card{border:1px solid var(--line); border-radius:8px; padding:10px 12px; text-align:center; cursor:pointer; background:#fff; transition:transform .1s ease;}\n  .stat-card:hover{transform:translateY(-2px);}\n  .stat-card.active{border-color:var(--slr-green); box-shadow:0 0 0 2px rgba(60,83,60,0.14) inset;}\n  .stat-card .stat-num{font-size:26px; font-weight:700; font-family:var(--font-display); line-height:1.15;}\n  .stat-card .stat-label{font-size:11px; text-transform:uppercase; letter-spacing:.03em; color:var(--ink-soft); margin-top:2px;}\n  .stat-card .stat-hint{font-size:10px; color:var(--ink-soft); margin-top:2px;}\n  .stat-card.total .stat-num{color:var(--ink);}\n  .stat-card.Low .stat-num{color:var(--low);} .stat-card.Medium .stat-num{color:var(--med);}\n  .stat-card.High .stat-num{color:var(--high);} .stat-card.Extreme .stat-num{color:var(--extreme);}\n  .active-filters{display:flex; align-items:center; gap:8px; flex-wrap:wrap; background:var(--slr-tint); border:1px solid #D8E6C4; border-radius:8px; padding:8px 12px; margin-bottom:12px;}\n  .active-filters .af-label{font-size:12px; font-weight:700; color:var(--slr-green-deep);}\n  .af-chip{font-size:11.5px; background:#fff; border:1px solid var(--line); border-radius:14px; padding:3px 8px 3px 10px; display:inline-flex; align-items:center; gap:6px;}\n  .af-x{cursor:pointer; color:var(--ink-soft); font-weight:700;}\n  .af-x:hover{color:var(--extreme);}\n  .af-clearall{font-size:11.5px; text-decoration:underline; cursor:pointer; color:var(--ink-soft); margin-left:auto;}\n  .matrix-count{font-size:15px; font-weight:800;}\n  .inline-rating-select{font-size:11px; padding:2px 3px; border:1px solid var(--line); border-radius:4px; max-width:92px; background:#fff;}\n  .export-menu{position:absolute; top:calc(100% + 4px); right:0; background:var(--paper-raised); border:1px solid var(--line);\n    border-radius:8px; box-shadow:var(--shadow); padding:6px; display:none; flex-direction:column; gap:2px; min-width:220px; z-index:20;}\n  .export-menu.show{display:flex;}\n  .export-menu-item{text-align:left; border:none; background:none; border-radius:6px;}\n  .export-menu-item:hover{background:var(--slr-tint);}\n\n\n  /* ---- Assessments bar, transfer, outcomes, groups ---- */\n  .assess-bar{display:flex; align-items:center; gap:10px; padding:10px 32px; background:#F0F3EA; border-bottom:1px solid var(--line); flex-wrap:wrap;}\n  .assess-bar .flabel{font-size:11px; text-transform:uppercase; letter-spacing:.03em; color:var(--ink-soft);}\n  .assess-tabs{display:flex; gap:6px; flex-wrap:wrap;}\n  .assess-tab{font-family:var(--font-body); font-size:13px; padding:6px 12px; border-radius:18px; border:1px solid var(--line); background:#fff; cursor:pointer; display:inline-flex; gap:6px; align-items:center;}\n  .assess-tab.active{background:var(--slr-green); color:#fff; border-color:var(--slr-green);}\n  .assess-count{font-size:11px; font-weight:700; background:rgba(0,0,0,.08); border-radius:10px; padding:0 6px;}\n  .assess-tab.active .assess-count{background:rgba(255,255,255,.2);}\n  .assess-review{font-size:11px; color:#8A6A18; font-weight:700;}\n  .assess-tab.active .assess-review{color:var(--slr-lime);}\n  .unsaved-pill{display:inline-block; margin-left:8px; font-size:11px; letter-spacing:0; text-transform:none; background:#F6E9C9; color:#6B5A1E; border-radius:10px; padding:1px 8px; opacity:1;}\n  .drawer.wide{width:760px;}\n  .check-line{display:flex; gap:8px; align-items:flex-start; font-size:13px; margin:8px 0; cursor:pointer;}\n  .check-line input{margin-top:2px;}\n  .transfer-list{max-height:46vh; overflow-y:auto; border:1px solid var(--line); border-radius:8px;}\n  .transfer-row{display:flex; gap:8px; align-items:flex-start; padding:7px 10px; border-bottom:1px solid var(--line); font-size:13px; cursor:pointer;}\n  .transfer-row:last-child{border-bottom:none;}\n  .transfer-row.linked{opacity:.6;}\n  .transfer-box{background:#FFF9E8; border:1px solid #E9DBA6; border-radius:8px; padding:10px 12px; margin-bottom:14px; font-size:13px; color:#4E4217;}\n  .transfer-box ul{margin:6px 0 8px 18px; padding:0;}\n  .link-box{background:var(--slr-tint); border:1px solid #D8E6C4; border-radius:8px; padding:8px 12px; margin-bottom:14px; font-size:13px;}\n  .link-badge{display:inline-block; font-size:11px; border:1px solid #BFD3A8; background:var(--slr-tint); color:var(--slr-green-deep); border-radius:10px; padding:1px 7px; white-space:nowrap;}\n  .coverage-note{font-size:12.5px; background:#FFF9E8; border:1px solid #E9DBA6; color:#6B5A1E; border-radius:8px; padding:7px 12px; margin-bottom:10px;}\n  .outcome-chip{display:inline-block; font-size:11px; font-weight:700; border-radius:5px; padding:1px 6px; background:#E3EDF3; color:#2F5873; border:1px solid #C3D6E3;}\n  .outcome-chip.closure{background:#F2E6DA; color:#7A4A22; border-color:#E2CDB7;}\n  .outcome-list{max-height:220px; overflow-y:auto; border:1px solid var(--line); border-radius:6px; background:#fff;}\n  .outcome-row{display:flex; gap:8px; align-items:flex-start; padding:6px 8px; border-bottom:1px solid #EEEDE4; font-size:12.5px; line-height:1.35; cursor:pointer;}\n  .outcome-row input{margin-top:2px; flex:none;}\n  .outcome-empty{font-size:12.5px; color:var(--ink-soft); display:flex; gap:10px; align-items:center; flex-wrap:wrap;}\n  .harvest-box{background:var(--slr-tint); border:1px solid #D8E6C4; border-radius:8px; padding:10px 12px; margin-bottom:14px; font-size:13px;}\n  .theme-section{margin-bottom:16px;}\n  .theme-section-head{font-size:12px; font-weight:700; text-transform:uppercase; color:var(--slr-green-deep); margin-bottom:6px;}\n  .theme-row{display:flex; gap:6px; align-items:center; margin-bottom:4px; flex-wrap:wrap;}\n  .theme-row input[type=text]{flex:1 1 160px; min-width:0;}\n  .ai-box, .group-box{border:1px solid var(--line); border-radius:8px; padding:8px 12px; margin:12px 0;}\n  .ai-box summary, .group-box summary{cursor:pointer; font-weight:600; font-size:13px;}\n  .scroll-x{overflow-x:auto; -webkit-overflow-scrolling:touch;}\n  .scroll-x > svg{min-width:640px;}\n  .badge-cell{white-space:nowrap;}\n  .muted-cell{color:var(--ink-soft); font-size:12px;}\n\n  /* ---- Mobile ---- */\n  @media (max-width: 900px){\n    .assess-bar{ padding-left:14px; padding-right:14px; }\n    .drawer.wide{ width:100%; }\n  }\n  @media (max-width: 700px){\n    .header{ padding:14px; }\n    .setup-bar{ flex-direction:column; align-items:stretch; gap:8px; }\n    .setup-bar .spacer{ display:none; }\n    .setup-bar > *{ width:100%; }\n    #project-name{ width:100% !important; }\n    .export-menu{ right:auto; left:0; width:100%; }\n    #export-menu-btn{ width:100%; }\n    .assess-bar{ flex-direction:column; align-items:stretch; }\n    .assess-tabs{ flex-wrap:nowrap; overflow-x:auto; padding-bottom:2px; }\n    .assess-tab{ flex:none; }\n    .panel{ margin:10px 8px; border-radius:8px; }\n    .panel-head, .panel-body{ padding:12px; }\n    .panel-head .chip-row{ width:100%; overflow-x:auto; flex-wrap:nowrap; }\n    .panel-head .chip{ flex:none; }\n    .filter-row .chip-row{ flex-wrap:nowrap; overflow-x:auto; padding-bottom:2px; }\n    .filter-row .chip{ flex:none; }\n    .risk-matrix{ overflow-x:auto; }\n    .risk-matrix td.rate-cell{ width:50px; height:44px; }\n    .risk-matrix .cell-count{ font-size:16px; }\n    .risk-matrix .rating-tag{ font-size:7.5px; }\n    .risk-matrix td.like-label{ font-size:11px; padding-right:4px; white-space:normal; }\n    .stat-cards{ grid-template-columns:repeat(3, 1fr); gap:6px; }\n    .stat-card{ padding:8px 4px; }\n    .stat-card .stat-num{ font-size:21px; }\n    .stat-card .stat-hint{ display:none; }\n    /* Register becomes a stack of cards */\n    #register-body{ overflow-x:visible !important; }\n    #register-body > table, #register-body > table > tbody, #register-body > table > tbody > tr, #register-body > table > tbody > tr > td{ display:block; width:100%; }\n    #register-body > table > thead{ display:none; }\n    #register-body > table > tbody > tr{ border:1px solid var(--line); border-radius:10px; margin-bottom:10px; padding:8px 12px; background:#fff; box-shadow:var(--shadow); position:relative; }\n    #register-body > table > tbody > tr > td{ border:none; padding:4px 0; max-width:none; }\n    #register-body > table > tbody > tr > td.accent-source, #register-body > table > tbody > tr > td.accent-pathway, #register-body > table > tbody > tr > td.accent-receptor{ padding-left:8px; margin:4px 0; }\n    #register-body td[data-label]::before{ content:attr(data-label); display:block; font-size:10.5px; text-transform:uppercase; letter-spacing:.03em; color:var(--ink-soft); margin-bottom:1px; }\n    #register-body td.id-cell{ font-weight:700; font-size:15px; }\n    #register-body td.id-cell::before{ display:inline !important; margin-right:4px; }\n    #register-body td.badge-cell:empty, #register-body td[data-label]:empty{ display:none; }\n    .drawer{ max-width:100vw; }\n    #register-body td.edit-cell .btn{ width:100%; }\n    .inline-rating-select{ max-width:none; }\n    .drawer{ padding:16px 14px 0; }\n    .drawer-actions{ position:sticky; bottom:0; background:var(--paper-raised); padding:10px 0 14px; flex-wrap:wrap; margin-top:12px; z-index:2; }\n    .theme-row select{ flex:1 1 100%; }\n    #outcome-table table, #outcome-table tbody, #outcome-table tr, #outcome-table td{ display:block; width:100%; }\n    #outcome-table thead{ display:none; }\n    #outcome-table tr{ border:1px solid var(--line); border-radius:8px; margin-bottom:8px; padding:6px; }\n    #outcome-table td{ border:none; }\n  }\n  @media (pointer: coarse){\n    .btn, .assess-tab{ min-height:40px; }\n    .chip{ padding:7px 11px; font-size:12.5px; }\n    select, input[type=text], textarea, .rich-box, .field textarea, .field select, .field input[type=text]{ font-size:16px; } /* stops iOS zooming on focus */\n    .inline-rating-select{ font-size:14px; padding:5px; }\n    .outcome-row, .transfer-row{ padding:10px; }\n  }\n\n  /* ---- Responsive ---- */\n  @media (max-width: 900px){\n    .header, .scope-note, .setup-bar{ padding-left:14px; padding-right:14px; }\n    .panel{ margin:12px; }\n    .stat-cards{ grid-template-columns:repeat(2, 1fr); }\n    .drawer{ width:100%; }\n    #register-body, #matrix-body, #pathway-analysis-body, .panel-body > table{ overflow-x:auto; }\n    table{ font-size:12px; }\n  }\n  @media (max-width: 520px){\n    .two-col{ grid-template-columns:1fr; }\n    .header h1{ font-size:19px; }\n  }\n\n  /* ---- Print ---- */\n  @media print{\n    body{ background:#fff; padding-bottom:0; }\n    .header{ background:none !important; color:#000 !important; border-bottom:2px solid #000; }\n    .header .eyebrow{ opacity:1; color:#333; }\n    .scope-note, .setup-bar, .assess-bar, .drawer-overlay, .rich-toolbar, footer,\n    .btn, .chip, .export-menu, #flag-filter-chip, #archived-filter-chip{ display:none !important; }\n    .panel{ box-shadow:none; border:1px solid #999; break-inside:avoid; margin:0 0 16px; }\n    a[href]:after{ content:\"\"; }\n  }\n\n  #rd-save-copy{background:#fff; color:var(--slr-green-deep); border-color:#fff; font-weight:600; padding:9px 16px;}\n  .header .btn.agent{margin-left:auto;}\n  .header .btn.agent + #rd-save-copy{margin-left:0;}\n  .rd-notice{display:flex; gap:12px; align-items:flex-start; margin:14px 28px 0; padding:10px 14px; border-radius:8px; background:#FFF9E8; border:1px solid #E9DBA6; font-size:13px; white-space:pre-line;}\n  .rd-notice .btn{padding:2px 8px; font-size:12px;}\n  .rd-context{margin:14px 28px 0; background:#fff; border:1px solid var(--slr-line, #DCDACD); border-radius:10px; padding:12px 16px; font-size:13.5px;}\n  .rd-context summary{cursor:pointer; font-weight:700;}\n  .rd-context p{margin:8px 0 4px;}\n  .rd-context h4{margin:10px 0 4px; font-size:13px;}\n  .rd-context ul{margin:0; padding-left:20px;}\n  @media print{ #rd-save-copy, .rd-notice{display:none !important;} }\n  @media (max-width:700px){ .rd-context, .rd-notice{margin:12px 12px 0;} }\n  .spr-s{color:#3C6E8F; font-weight:600;} .spr-p{color:#4F7942; font-weight:600;} .spr-r{color:#A73434; font-weight:600;} .spr-i{color:#8A6A18; font-weight:600;}\n  .spr-badge{display:inline-block; padding:2px 8px; border-radius:20px; font-size:11.5px; font-weight:700; white-space:nowrap;}\n  .spr-ok{background:var(--low-bg); color:#3F6B3F;} .spr-draft{background:#E3EDF3; color:#2F5873;} .spr-bad{background:var(--extreme-bg); color:var(--extreme);}\n  .spr-legend{display:flex; flex-wrap:wrap; gap:14px; align-items:center; font-size:12px; margin:0 0 8px;}\n  .spr-legend span{display:inline-flex; align-items:center; gap:6px;}\n  .spr-legend i{display:inline-block; width:22px; height:5px; border-radius:3px;}\n  .spr-legend i.dash{height:0; border-top:3px dashed #8A8A80; border-radius:0;}\n  .spr-node{cursor:pointer;} .spr-node:hover rect:first-of-type{filter:brightness(.97);} .spr-node:focus{outline:none;} .spr-node:focus rect:first-of-type{stroke-width:2.5;}\n  .spr-edge{cursor:pointer; transition:opacity .15s;} .spr-edge:hover{opacity:1 !important;}\n  .spr-split{display:grid; grid-template-columns:minmax(0,1.5fr) minmax(300px,.85fr); gap:14px; align-items:start;}\n  .spr-queue{max-height:560px; overflow:auto; border:1px solid var(--line); border-radius:8px;}\n  .spr-queue table th{position:sticky; top:0; z-index:1;}\n  .spr-row{cursor:pointer;} .spr-row:hover td{background:var(--slr-tint);} .spr-row.sel td{background:#E4F2C8;}\n  .spr-detail{position:sticky; top:10px; border:1px solid var(--line); border-radius:10px; padding:14px 16px; background:#fff;}\n  .spr-detail .field input[type=text]{width:100%;}\n  .spr-quality{display:grid; grid-template-columns:1fr 1fr; gap:14px;}\n  .spr-card{border:1px solid var(--line); border-radius:10px; padding:12px 16px; background:#fff;}\n  .spr-card h4{margin:0 0 6px; font-size:13px;}\n  .spr-checks{list-style:none; margin:0; padding:0;}\n  .spr-checks li{display:flex; justify-content:space-between; gap:12px; padding:7px 0; border-bottom:1px solid #EEEDE4; font-size:13px;}\n  .spr-checks li:last-child{border-bottom:none;}\n  .spr-count{font-weight:800; min-width:32px; text-align:right;} .spr-count.good{color:#3F6B3F;} .spr-count.warn{color:#8A6A18;} .spr-count.bad{color:var(--extreme);}\n  @media (max-width:900px){ .spr-split, .spr-quality{grid-template-columns:1fr;} .spr-detail{position:static;} }\n  .rd-tabs{display:flex; gap:4px; padding:0 32px; background:var(--paper-raised); border-bottom:1px solid var(--line);}\n  .rd-tab{font-family:var(--font-body); font-size:14px; font-weight:600; color:var(--ink-soft); background:none; border:none; border-bottom:3px solid transparent; padding:12px 16px 10px; cursor:pointer; display:inline-flex; gap:8px; align-items:center;}\n  .rd-tab:hover{color:var(--ink);}\n  .rd-tab.active{color:var(--slr-green-deep); border-bottom-color:var(--slr-green);}\n  .rd-tab-badge{font-size:11px; font-weight:700; color:#8A6A18; background:#F6E9C9; border-radius:10px; padding:1px 7px;}\n  .rd-tab-badge[hidden]{display:none;}\n  #rd-view-spr .panel{margin-top:16px;}\n  .spr-toolbar{display:flex; flex-wrap:wrap; gap:8px; align-items:center; padding:10px 12px; margin-bottom:12px; background:#F7F7F2; border:1px solid var(--line); border-radius:8px;}\n  .spr-toolbar select{max-width:175px;}\n  .spr-toolbar input[type=search]{min-width:190px; flex:0 1 240px; padding:6px 8px; border:1px solid var(--line); border-radius:6px; font-family:var(--font-body); font-size:13px;}\n  .spr-check{display:inline-flex; gap:6px; align-items:center; font-size:13px;}\n  .spr-fig{border:1px solid var(--line); border-radius:10px; background:#fff;}\n  .spr-fig svg{display:block; width:100%; height:auto; min-width:900px;}\n  .spr-fig .spr-node{cursor:pointer; outline:none;} .spr-fig .spr-node:focus rect:first-of-type{stroke-width:2.6;}\n  .spr-fig .spr-edge{cursor:pointer; transition:opacity .12s;}\n  .spr-fig svg.hovering .spr-edge{opacity:.08 !important;} .spr-fig svg.hovering .spr-edge.hl{opacity:1 !important;}\n  .spr-detail-list{margin-top:14px; padding-top:14px; border-top:1px solid var(--line);}\n  .spr-detail-head{display:flex; align-items:center; gap:10px; margin-bottom:8px; flex-wrap:wrap;}\n  .spr-warn{color:#8A6A18; font-weight:700; white-space:nowrap;} .spr-okmark{color:#3F6B3F; font-weight:700;}\n  .spr-checklist{list-style:none; margin:0 0 12px; padding:0;}\n  .spr-checklist li{font-size:12.5px; padding:6px 10px 6px 28px; border-radius:6px; margin-bottom:4px; position:relative;}\n  .spr-checklist li.warn{background:#FFF9E8; color:#6B5A1E;} .spr-checklist li.bad{background:var(--extreme-bg); color:#7A2626;}\n  .spr-checklist li::before{position:absolute; left:9px; top:6px; content:\"\u26a0\";}\n  .spr-checkok{font-size:12.5px; color:#3F6B3F; background:var(--low-bg); border-radius:6px; padding:6px 10px; margin-bottom:12px;}\n  .spr-issues div{font-size:12px; margin-bottom:2px;} .spr-issues .bad{color:var(--extreme);} .spr-issues .warn{color:#6B5A1E;}\n  .spr-detail-top{display:flex; align-items:center; gap:10px; margin-bottom:4px;} .spr-detail-top h3{margin:0;}\n  .spr-asis{font-size:12.5px; margin-bottom:10px; line-height:1.45;}\n  .spr-hint{text-transform:none; letter-spacing:0; font-size:11px; color:#8A8A80;}\n  .spr-guide-lead{font-size:14px; max-width:900px; margin:0 0 14px;}\n  .spr-guide-grid{display:grid; grid-template-columns:repeat(auto-fill, minmax(280px, 1fr)); gap:12px; margin-bottom:14px;}\n  .spr-guide-grid p{margin:0; font-size:13px; line-height:1.5; color:#3A3D35;}\n  @media (max-width:700px){ .rd-tabs{padding:0 8px;} .rd-tab{padding:10px 10px 8px;} .spr-toolbar input[type=search]{min-width:0; flex:1 1 100%;} }\n  @media print{ .rd-tabs, .spr-toolbar{display:none !important;} #rd-view-spr[hidden], #rd-view-register[hidden]{display:block !important;} }\n  #rd-help-btn{background:transparent; color:#F6F6F2; border-color:rgba(246,246,242,.55); font-weight:600; padding:9px 14px;}\n  #rd-help-btn:hover{background:rgba(255,255,255,.1); border-color:#F6F6F2;}\n  .rd-help{font-size:14px; line-height:1.5;} .rd-help-head{display:flex; align-items:center; justify-content:space-between; gap:10px;}\n  .rd-help h3{margin:0;} .rd-help h4{margin:16px 0 4px; font-size:14px; color:var(--slr-green-deep);} .rd-help ul{margin:0; padding-left:20px;} .rd-help li{margin:3px 0;}\n  .spr-id{display:inline-block; font-size:10.5px; font-weight:700; color:#6B6F63; background:#F0F0E8; border-radius:4px; padding:0 4px; margin-right:5px; vertical-align:1px;}\n  .spr-matrix{border-collapse:separate; border-spacing:0; width:auto; min-width:100%;}\n  .spr-matrix th, .spr-matrix td{border:1px solid var(--line); padding:6px 8px; vertical-align:top;}\n  .spr-matrix thead th{background:#F8EEEE; color:#7A2626; font-size:12px; text-transform:none; letter-spacing:0; min-width:120px; position:sticky; top:0;}\n  .spr-matrix tbody th{background:#EEF4F8; color:#2B4F66; font-size:12px; text-transform:none; letter-spacing:0; text-align:left; min-width:170px;}\n  .spr-matrix th.corner{background:#F7F7F2; color:var(--ink-soft); font-size:11px; min-width:170px;}\n  .spr-matrix td.empty{background:#FBFBF8;}\n  .spr-mchip{display:flex; align-items:center; gap:6px; width:100%; text-align:left; font-family:var(--font-body); font-size:12px; background:#fff; border:1.5px solid; border-radius:14px; padding:3px 9px; margin:2px 0; cursor:pointer; color:var(--ink);}\n  .spr-mchip i{display:inline-block; width:8px; height:8px; border-radius:50%; flex:none;} .spr-mchip b{margin-left:auto; font-size:11px; color:var(--ink-soft);}\n  .spr-mchip.dashed{border-style:dashed;} .spr-mchip.on{background:#EAF7C9;} .spr-mchip:hover{background:var(--slr-tint);}\n  .spr-merge-box{background:#FFF9E8; border:1px solid #E9DBA6; border-radius:8px; padding:10px 14px; margin-bottom:14px; font-size:13px;}\n  .spr-merge-row{display:flex; flex-wrap:wrap; align-items:center; gap:8px; padding:5px 0; border-top:1px solid #F0E6C4;} .spr-merge-row:first-of-type{border-top:none;}\n  .spr-merge-row .btn{padding:3px 10px; font-size:12px;}\n  .spr-model-grid{display:grid; grid-template-columns:repeat(auto-fit, minmax(460px, 1fr)); gap:14px;}\n  .spr-model-head{display:flex; align-items:center; justify-content:space-between; gap:8px; margin-bottom:8px;} .spr-model-head h4{margin:0;}\n  .spr-model-table{width:100%; font-size:12.5px;} .spr-model-table th{font-size:10.5px;} .spr-model-table td{padding:4px 6px; vertical-align:middle;}\n  .spr-model-table input[type=text]{width:100%; font-size:12.5px; padding:5px 7px;}\n  .spr-model-table select{font-size:12px; padding:4px; max-width:120px;}\n  .spr-model-table th:nth-child(2){width:36%;} .spr-model-table th:nth-child(3){width:38%;}\n  .spr-idcell{font-weight:700; color:#6B6F63; white-space:nowrap;} .spr-num{text-align:center;} .spr-actions{white-space:nowrap;}\n  .spr-actions .btn{padding:3px 8px; font-size:11.5px;}\n  .spr-ruled{margin-top:14px; border:1px solid var(--line); border-radius:8px; padding:8px 12px;} .spr-ruled summary{cursor:pointer; font-weight:600; font-size:13px;}\n  .spr-ruled table{margin-top:8px;}\n  .spr-quality3{display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:14px;}\n  .spr-item-select{width:100%;}\n  @media (max-width:700px){ .spr-model-grid{grid-template-columns:1fr;} }\n  .rd-ai{display:inline-block; font-size:11px; font-weight:700; border-radius:10px; padding:1px 7px; white-space:nowrap; background:#F6E9C9; color:#8A6A18; border:1px solid #E9D39B;}\n  .rd-ai.ok{background:#E4EDE0; color:#3F6B3F; border-color:#C6DABE;} .rd-ai.bad{background:#F2D4D2; color:#A73434; border-color:#E5B9B9;}\n  .rd-review-box{border:1px solid #E9D39B; background:#FFF9E8; border-radius:8px; padding:10px 12px; margin:0 0 14px; font-size:13px;}\n  .rd-review-box.ok{border-color:#C6DABE; background:#F1F7EC;} .rd-review-box.bad{border-color:#E5B9B9; background:#FBEDEC;}\n  .rd-review-box select{max-width:220px;}\n  .rd-ai-note{font-size:12.5px; background:#FFF9E8; border:1px solid #E9D39B; color:#6B5A1E; border-radius:6px; padding:6px 10px; margin-bottom:8px;}\n  #rd-approve-shown{border-color:#E9D39B; background:#FFF9E8; color:#6B5A1E; font-weight:600;}\n</style>");
  document.body.insertAdjacentHTML("afterbegin", "<div class=\"header\">\n  <div>\n    <div class=\"eyebrow\">Framework \u00b7 Project \u00b7 Session</div>\n    <h1>Risk Assessment Dashboard</h1>\n    <div class=\"eyebrow\" id=\"header-sub\">No project loaded</div>\n  </div>\n  <button class=\"btn agent\" id=\"paste-agent-btn\" type=\"button\" title=\"Paste a code block from the Risk Assessment agent\">Paste from agent\u2026</button>\n  <button class=\"btn\" id=\"rd-save-copy\" type=\"button\" title=\"Download this dashboard as an .html file to keep and share\">Save copy</button>\n  <button class=\"btn\" id=\"rd-help-btn\" type=\"button\" title=\"How to use this dashboard\">? Help</button>\n</div>\n\n\n<div id=\"rd-notice\"></div>\n\n<div class=\"setup-bar\">\n  <label>Framework</label>\n  <select id=\"framework-select\">\n    <option value=\"mdcp\">MDCP / DMPE Risk Matrix (2025b)</option>\n    <option value=\"dwer\">DWER Works Approval Risk Framework</option>\n    <option value=\"epa-emp\">EP Act Part IV EMP (EPA WA factors)</option>\n    <option value=\"epbc-emp\">EPBC Act EMP (MNES / DCCEEW)</option>\n    <option value=\"custom\">Custom (load file)\u2026</option>\n  </select>\n  <input type=\"file\" id=\"custom-framework-file\" accept=\"application/json\" style=\"display:none;\">\n  <button class=\"btn\" id=\"download-framework-template-btn\" style=\"font-size:11.5px; padding:5px 9px;\">Example framework file \u2b07</button>\n\n  <span class=\"spacer\"></span>\n\n  <label>Project</label>\n  <input type=\"text\" id=\"project-name\" placeholder=\"Project name\" style=\"width:220px;\">\n  <button class=\"btn\" id=\"new-project-btn\">New project</button>\n  <button class=\"btn\" id=\"load-session-btn\">Load data (.json)\u2026</button>\n  <input type=\"file\" id=\"load-session-file\" accept=\"application/json\" style=\"display:none;\">\n  <button class=\"btn\" id=\"save-session-btn\">Save data (.json)</button>\n\n  <span class=\"spacer\"></span>\n\n  <div style=\"position:relative;\">\n    <button class=\"btn\" id=\"export-menu-btn\" aria-label=\"Export options\" aria-haspopup=\"true\">Export \u25be</button>\n    <div class=\"export-menu\" id=\"export-menu\">\n      <button class=\"btn export-menu-item\" id=\"export-flat-btn\">Excel: this register</button>\n      <button class=\"btn export-menu-item\" id=\"rd-export-all-btn\">Excel: all registers in this project</button>\n      <button class=\"btn export-menu-item\" id=\"rd-export-png-btn\">Image: this register (PNG)</button>\n      <button class=\"btn export-menu-item hidden\" id=\"export-mdcp-btn\">Export to MDCP template\u2026</button>\n      <button class=\"btn export-menu-item hidden\" id=\"export-csm-btn\">Export to CSM spreadsheet</button>\n    </div>\n  </div>\n  <input type=\"file\" id=\"mdcp-template-file\" accept=\".xlsx\" style=\"display:none;\">\n</div>\n\n<div class=\"assess-bar\" id=\"assess-bar\"></div>\n\n<div class=\"rd-tabs\" role=\"tablist\"><button class=\"rd-tab active\" type=\"button\" role=\"tab\" aria-selected=\"true\" data-view=\"register\">Risk register <span class=\"rd-tab-badge\" id=\"rd-tab-reg-count\" hidden></span></button><button class=\"rd-tab\" type=\"button\" role=\"tab\" aria-selected=\"false\" data-view=\"spr\">SPR model <span class=\"rd-tab-badge\" id=\"rd-tab-spr-count\" hidden></span></button></div>\n<div id=\"rd-view-register\">\n<div class=\"panel\">\n  <div class=\"panel-head\">\n    <h2>Risk rating matrix</h2>\n    <span class=\"panel-sub\" id=\"matrix-sub\"></span>\n    <span class=\"spacer\"></span>\n    <div class=\"chip-row\">\n      <span class=\"chip active\" data-view=\"inh\" id=\"view-inh\">Inherent</span>\n      <span class=\"chip\" data-view=\"res\" id=\"view-res\">Residual</span>\n    </div>\n  </div>\n  <div class=\"panel-body\">\n    <div id=\"filter-controls\"></div>\n    <div id=\"active-filters-bar\"></div>\n    <div id=\"stat-cards\"></div>\n    <div id=\"matrix-body\"></div>\n  </div>\n</div>\n\n<div class=\"panel\">\n  <div class=\"panel-head\">\n    <h2>Risk register</h2>\n    <span class=\"panel-sub\" id=\"register-sub\"></span>\n    <span class=\"spacer\"></span>\n    <button class=\"btn hidden\" id=\"outcome-lib-btn\" type=\"button\">Outcome library\u2026</button>\n    <span class=\"chip hidden\" id=\"review-filter-chip\">\u26a0 Needs review</span>\n    <span class=\"chip hidden\" id=\"rd-approval-chip\">Needs approval</span>\n    <button class=\"btn hidden\" id=\"rd-approve-shown\" type=\"button\">Approve shown\u2026</button>\n    <span class=\"chip\" id=\"flag-filter-chip\">\ud83d\udea9 Flagged only</span>\n    <span class=\"chip\" id=\"archived-filter-chip\">\ud83d\uddc4 Show archived</span>\n    <button class=\"btn primary\" id=\"add-risk-btn\">+ Add risk</button>\n  </div>\n  <div class=\"panel-body\" id=\"register-body\"></div>\n</div>\n\n</div>\n<div id=\"rd-view-spr\" hidden>\n<div class=\"panel\">\n  <div class=\"panel-head\">\n    <h2>Source\u2013pathway\u2013receptor model</h2>\n    <span class=\"spacer\"></span>\n    <div class=\"chip-row\">\n      <span class=\"chip active\" data-tab=\"spr\" id=\"tab-spr\">Figure</span>\n      <span class=\"chip\" data-tab=\"matrix\" id=\"tab-matrix\">Matrix</span>\n      <span class=\"chip\" data-tab=\"review\" id=\"tab-review\">Linkages</span>\n      <span class=\"chip\" data-tab=\"model\" id=\"tab-model\">Model</span>\n      <span class=\"chip\" data-tab=\"quality\" id=\"tab-quality\">Checks</span>\n      <span class=\"chip\" data-tab=\"guide\" id=\"tab-guide\">Guidance</span>\n    </div>\n    <button class=\"btn hidden\" id=\"auto-detect-themes-btn\" title=\"Group risks that share the same (or nearly the same) Source / Pathway / Receptor phrase\">\u2728 Group by phrase</button>\n    <button class=\"btn hidden\" id=\"manage-themes-btn\">Manage groups\u2026</button>\n  </div>\n  <div class=\"panel-body\" id=\"pathway-analysis-body\"></div>\n</div>\n\n</div>\n\n<footer id=\"footer-note\"></footer>\n\n<div class=\"drawer-overlay\" id=\"overlay\">\n  <div class=\"drawer\" id=\"drawer\" role=\"dialog\" aria-modal=\"true\" aria-label=\"Edit risk\"></div>\n</div>\n\n<div class=\"drawer-overlay\" id=\"theme-overlay\">\n  <div class=\"drawer\" id=\"theme-drawer\" role=\"dialog\" aria-modal=\"true\" aria-label=\"Manage pathway themes\"></div>\n</div>\n\n<div class=\"drawer-overlay\" id=\"outcome-overlay\" style=\"z-index:60;\">\n  <div class=\"drawer wide\" id=\"outcome-drawer\" role=\"dialog\" aria-modal=\"true\" aria-label=\"Outcome library\"></div>\n</div>\n\n<div class=\"drawer-overlay\" id=\"transfer-overlay\">\n  <div class=\"drawer wide\" id=\"transfer-drawer\" role=\"dialog\" aria-modal=\"true\" aria-label=\"Transfer risks\"></div>\n</div>\n\n<div class=\"drawer-overlay\" id=\"paste-overlay\">\n  <div class=\"drawer wide\" id=\"paste-drawer\" role=\"dialog\" aria-modal=\"true\" aria-label=\"Paste from agent\">\n    <h3>Paste risks from the agent</h3>\n    <p class=\"panel-sub\" style=\"margin-top:-6px;\">Paste a code block from the Risk Assessment agent: a batch of extra risks, or a whole dashboard. Ratings are re-checked against the framework matrix as they load.</p>\n    <div class=\"field\">\n      <label for=\"paste-text\">Agent output</label>\n      <textarea id=\"paste-text\" spellcheck=\"false\" style=\"min-height:42vh; font-family:Consolas,Menlo,monospace; font-size:12.5px;\" placeholder='{ \"formatVersion\": 2, ... }'></textarea>\n    </div>\n    <label class=\"check-line\"><input type=\"radio\" name=\"paste-mode\" value=\"replace\" checked> Replace what's open (new project or updated register)</label>\n    <label class=\"check-line\"><input type=\"radio\" name=\"paste-mode\" value=\"add\"> Add to what's open (extra batch of risks)</label>\n    <div id=\"paste-error\" class=\"transfer-box hidden\" role=\"alert\"></div>\n    <div class=\"drawer-actions\">\n      <button class=\"btn primary\" id=\"paste-go\" type=\"button\">Load into dashboard</button>\n      <button class=\"btn\" id=\"paste-cancel\" type=\"button\">Cancel</button>\n    </div>\n  </div>\n</div>\n\n<div class=\"drawer-overlay\" id=\"domain-overlay\">\n  <div class=\"drawer\" id=\"domain-drawer\" role=\"dialog\" aria-modal=\"true\" aria-label=\"Manage domains\"></div>\n</div>\n<div class=\"drawer-overlay\" id=\"rd-help-overlay\" style=\"z-index:70;\">\n  <div class=\"drawer wide\" id=\"rd-help\" role=\"dialog\" aria-modal=\"true\" aria-label=\"Help\"></div>\n</div>");
  var boot = document.getElementById("boot"); if(boot) boot.remove();
})();

/* =========================================================================
   FRAMEWORK DEFINITIONS
   Each framework is a self-contained config: rating scales + matrix, the
   taxonomy shape used to categorise a risk, and which exports it supports.
   A "custom" framework loaded from file must match this same shape.
   ========================================================================= */

const FRAMEWORKS = {
  mdcp: {
    id: "mdcp",
    name: "MDCP / DMPE Risk Matrix (2025b)",
    consLevels: ["Insignificant","Minor","Moderate","Major","Severe"],
    likeLevels: ["Almost Certain","Likely","Possible","Unlikely","Rare"],
    ratingCategories: ["Low","Medium","High","Extreme"],
    matrix: {
      "Almost Certain": {"Insignificant":"Medium","Minor":"High","Moderate":"High","Major":"Extreme","Severe":"Extreme"},
      "Likely":         {"Insignificant":"Medium","Minor":"Medium","Moderate":"High","Major":"Extreme","Severe":"Extreme"},
      "Possible":       {"Insignificant":"Low","Minor":"Medium","Moderate":"Medium","Major":"High","Severe":"Extreme"},
      "Unlikely":       {"Insignificant":"Low","Minor":"Low","Moderate":"Medium","Major":"High","Severe":"High"},
      "Rare":           {"Insignificant":"Low","Minor":"Low","Moderate":"Medium","Major":"Medium","Severe":"High"}
    },
    trackInherentResidual: true,
    taxonomyType: "factor-indicator",
    factorIndicators: {
      "Flora, vegetation and fauna": ["Ecosystem function","Flora and vegetation","Fauna","Environmental threats"],
      "Inland waters": ["Surface water quality","Surface water quantity","Ground water quality","Ground water quantity"],
      "Terrestrial environmental quality": ["Soil resources","Land contamination","Landscape"],
      "Rehabilitation and Mine Closure": ["Landscape","Physical safety","Post mining land use","Physical and geotechnical stability","Land contamination"]
    },
    domainsEnabled: true,
    domainOptions: ["Mining Area","Mine Waste Land Forms","Tailings Storage Facility","Infrastructure Area",
      "Water Facilities","Landfills","Water Management Structures","Topsoil Stockpile / Growth Medium Storage"],
    phasesEnabled: true,
    phaseOptions: ["Construction","Operation","Care & maintenance","Closure","Decommissioning"],
    taxonomyLabels: { top: "Factor", sub: "Indicator" },
    phaseLabel: "Phase of mine life",
    // Standard environmental / closure outcomes are picked from the project's outcome
    // library (see OUTCOMES LIBRARY); r.outcome stays as the free-text / site-specific field.
    outcomesEnabled: true,
    extraTextFields: [
      { key: "outcome", label: "Site-specific outcome / notes" }
    ],
    showComments: false,
    exports: ["flat", "mdcp-template"]
  },

  dwer: {
    id: "dwer",
    name: "DWER Works Approval Risk Framework",
    consLevels: ["Slight","Minor","Moderate","Major","Severe"],
    likeLevels: ["Almost Certain","Likely","Possible","Unlikely","Rare"],
    ratingCategories: ["Low","Medium","High","Extreme"],
    matrix: {
      "Almost Certain": {"Slight":"Medium","Minor":"High","Moderate":"High","Major":"Extreme","Severe":"Extreme"},
      "Likely":         {"Slight":"Medium","Minor":"Medium","Moderate":"High","Major":"High","Severe":"Extreme"},
      "Possible":       {"Slight":"Low","Minor":"Medium","Moderate":"Medium","Major":"High","Severe":"Extreme"},
      "Unlikely":       {"Slight":"Low","Minor":"Medium","Moderate":"Medium","Major":"Medium","Severe":"High"},
      "Rare":           {"Slight":"Low","Minor":"Low","Moderate":"Medium","Major":"Medium","Severe":"High"}
    },
    trackInherentResidual: true,
    taxonomyType: "receptor-category",
    receptorCategories: ["Environment","Public health and amenity"],
    // Table 3 \u2014 Risk event acceptability, keyed by rating category
    acceptability: {
      "Extreme": "Unacceptable \u2014 risk event will not be tolerated",
      "High": "May be acceptable subject to multiple regulatory controls",
      "Medium": "Acceptable, generally subject to regulatory controls",
      "Low": "Acceptable, generally not controlled"
    },
    domainsEnabled: false,
    phasesEnabled: true,
    phaseLabel: "Phase",
    phaseOptions: ["Construction","Commissioning","Operation"],
    exports: ["flat", "csm"]
  },

  /* ---- EP Act (WA) Part IV EMP ----
     Taxonomy = the EPA's five themes and fourteen environmental factors. Provision type and
     trigger/threshold fields follow the outcome-based vs management-based structure used for
     Part IV EMPs. The consequence/likelihood matrix is a DEFAULT 5x5 (same shape as MDCP) \u2014
     replace it with the proponent's or company matrix via a custom framework file if needed. */
  "epa-emp": {
    id: "epa-emp",
    name: "EP Act Part IV EMP (EPA WA factors)",
    matrixNote: "Default 5\u00d75 matrix \u2014 confirm against the proponent's / company matrix",
    consLevels: ["Insignificant","Minor","Moderate","Major","Severe"],
    likeLevels: ["Almost Certain","Likely","Possible","Unlikely","Rare"],
    ratingCategories: ["Low","Medium","High","Extreme"],
    matrix: {
      "Almost Certain": {"Insignificant":"Medium","Minor":"High","Moderate":"High","Major":"Extreme","Severe":"Extreme"},
      "Likely":         {"Insignificant":"Medium","Minor":"Medium","Moderate":"High","Major":"Extreme","Severe":"Extreme"},
      "Possible":       {"Insignificant":"Low","Minor":"Medium","Moderate":"Medium","Major":"High","Severe":"Extreme"},
      "Unlikely":       {"Insignificant":"Low","Minor":"Low","Moderate":"Medium","Major":"High","Severe":"High"},
      "Rare":           {"Insignificant":"Low","Minor":"Low","Moderate":"Medium","Major":"Medium","Severe":"High"}
    },
    trackInherentResidual: true,
    taxonomyType: "factor-indicator",
    taxonomyLabels: { top: "EPA theme", sub: "Environmental factor" },
    factorIndicators: {
      "Sea": ["Benthic Communities and Habitats","Coastal Processes","Marine Environmental Quality","Marine Fauna"],
      "Land": ["Flora and Vegetation","Landforms","Subterranean Fauna","Terrestrial Environmental Quality","Terrestrial Fauna"],
      "Water": ["Inland Waters"],
      "Air": ["Air Quality","Greenhouse Gas Emissions"],
      "People": ["Social Surroundings","Human Health"]
    },
    domainsEnabled: false,
    phasesEnabled: true,
    phaseLabel: "Phase",
    phaseOptions: ["Construction","Operation","Decommissioning","Closure / rehabilitation"],
    extraSelectFields: [
      { key: "provisionType", label: "Provision type", options: ["Outcome-based","Management-based"] }
    ],
    extraTextFields: [
      { key: "envObjective", label: "Environmental outcome / objective" },
      { key: "triggerThreshold", label: "Trigger & threshold criteria (or management targets)" },
      { key: "responseActions", label: "Management / response actions" },
      { key: "monitoring", label: "Monitoring & reporting" }
    ],
    offsetsEnabled: true,
    showComments: true,
    exports: ["flat"]
  },

  /* ---- EPBC Act EMP (DCCEEW / National EPA) ----
     Taxonomy = matters of national environmental significance (plus Commonwealth land).
     Same caveat on the matrix. Commonwealth approval tests, standards and offset rules are
     changing through 2026, so treat the extra fields as a starting structure. */
  "epbc-emp": {
    id: "epbc-emp",
    name: "EPBC Act EMP (MNES / DCCEEW guidelines)",
    matrixNote: "Default 5\u00d75 matrix \u2014 confirm against the proponent's / company matrix",
    consLevels: ["Insignificant","Minor","Moderate","Major","Severe"],
    likeLevels: ["Almost Certain","Likely","Possible","Unlikely","Rare"],
    ratingCategories: ["Low","Medium","High","Extreme"],
    matrix: {
      "Almost Certain": {"Insignificant":"Medium","Minor":"High","Moderate":"High","Major":"Extreme","Severe":"Extreme"},
      "Likely":         {"Insignificant":"Medium","Minor":"Medium","Moderate":"High","Major":"Extreme","Severe":"Extreme"},
      "Possible":       {"Insignificant":"Low","Minor":"Medium","Moderate":"Medium","Major":"High","Severe":"Extreme"},
      "Unlikely":       {"Insignificant":"Low","Minor":"Low","Moderate":"Medium","Major":"High","Severe":"High"},
      "Rare":           {"Insignificant":"Low","Minor":"Low","Moderate":"Medium","Major":"Medium","Severe":"High"}
    },
    trackInherentResidual: true,
    taxonomyType: "factor-indicator",
    taxonomyLabels: { top: "Matter of NES", sub: "Protected value" },
    factorIndicators: {
      "Listed threatened species and ecological communities": ["Threatened fauna","Threatened flora","Threatened ecological community"],
      "Listed migratory species": ["Migratory species"],
      "Wetlands of international importance (Ramsar)": ["Ramsar wetland"],
      "World Heritage properties": ["World Heritage values"],
      "National Heritage places": ["National Heritage values"],
      "Commonwealth marine areas": ["Commonwealth marine environment"],
      "Great Barrier Reef Marine Park": ["GBRMP values"],
      "Nuclear actions": ["Nuclear action (incl. uranium mining)"],
      "Water resources (CSG / large coal mining)": ["Water resource"],
      "Commonwealth land / agency actions": ["Commonwealth land"]
    },
    domainsEnabled: false,
    phasesEnabled: true,
    phaseLabel: "Phase",
    phaseOptions: ["Construction","Operation","Decommissioning","Closure / rehabilitation"],
    extraTextFields: [
      { key: "envObjective", label: "Environmental outcome" },
      { key: "triggerThreshold", label: "Performance criteria / trigger" },
      { key: "responseActions", label: "Management & corrective actions" },
      { key: "monitoring", label: "Monitoring & reporting" }
    ],
    offsetsEnabled: true,
    showComments: true,
    exports: ["flat"]
  }
};

// Residual-impact significance options used by frameworks with offsetsEnabled. Offsets are
// only considered for significant residual impacts that remain after the mitigation
// hierarchy (avoid, minimise, rehabilitate) has been applied.
const DEFAULT_SIGNIFICANCE_OPTIONS = ["Not significant","Potentially significant \u2014 confirm","Significant residual impact \u2014 offset required"];
function taxLabels(fw){ fw = fw || activeFramework;
  if(fw.taxonomyType==="factor-indicator") return Object.assign({top:"Factor", sub:"Indicator"}, fw.taxonomyLabels||{});
  return {top:"Receptor category", sub:"Receptor category"};
}
function phaseLabelOf(fw){ fw = fw || activeFramework; return fw.phaseLabel || "Phase"; }

function validateFrameworkConfig(fw){
  const errors = [];
  const required = ["id","name","consLevels","likeLevels","ratingCategories","matrix","taxonomyType"];
  required.forEach(k=>{ if(!(k in fw)) errors.push(`Missing required field "${k}"`); });
  if(errors.length) throw new Error(errors.join("; "));

  if(!Array.isArray(fw.consLevels) || fw.consLevels.length < 1) errors.push('"consLevels" must be a non-empty array');
  if(!Array.isArray(fw.likeLevels) || fw.likeLevels.length < 1) errors.push('"likeLevels" must be a non-empty array');
  if(!Array.isArray(fw.ratingCategories) || fw.ratingCategories.length < 1) errors.push('"ratingCategories" must be a non-empty array');

  if(Array.isArray(fw.consLevels) && Array.isArray(fw.likeLevels) && Array.isArray(fw.ratingCategories) && fw.matrix && typeof fw.matrix === "object"){
    fw.likeLevels.forEach(like=>{
      if(!fw.matrix[like]){ errors.push(`"matrix" is missing an entry for likelihood "${like}"`); return; }
      fw.consLevels.forEach(cons=>{
        const val = fw.matrix[like][cons];
        if(val === undefined) errors.push(`"matrix.${like}.${cons}" is missing`);
        else if(!fw.ratingCategories.includes(val)) errors.push(`"matrix.${like}.${cons}" = "${val}" is not one of ratingCategories [${fw.ratingCategories.join(", ")}]`);
      });
    });
  }

  if(fw.taxonomyType === "factor-indicator"){
    if(!fw.factorIndicators || typeof fw.factorIndicators !== "object" || !Object.keys(fw.factorIndicators).length){
      errors.push('taxonomyType "factor-indicator" requires a non-empty "factorIndicators" object (factor name -> array of indicators)');
    } else {
      Object.entries(fw.factorIndicators).forEach(([factor, inds])=>{
        if(!Array.isArray(inds) || !inds.length) errors.push(`"factorIndicators.${factor}" must be a non-empty array of indicator names`);
      });
    }
  } else if(fw.taxonomyType === "receptor-category"){
    if(!Array.isArray(fw.receptorCategories) || !fw.receptorCategories.length){
      errors.push('taxonomyType "receptor-category" requires a non-empty "receptorCategories" array');
    }
  } else {
    errors.push(`"taxonomyType" must be "factor-indicator" or "receptor-category" (got "${fw.taxonomyType}")`);
  }

  if(fw.domainsEnabled && (!Array.isArray(fw.domainOptions) || !fw.domainOptions.length)){
    errors.push('"domainsEnabled" is true but "domainOptions" is missing or empty');
  }
  if(fw.phasesEnabled && (!Array.isArray(fw.phaseOptions) || !fw.phaseOptions.length)){
    errors.push('"phasesEnabled" is true but "phaseOptions" is missing or empty');
  }
  if(fw.extraTextFields !== undefined){
    if(!Array.isArray(fw.extraTextFields)) errors.push('"extraTextFields" must be an array of {key, label} objects');
    else fw.extraTextFields.forEach((f,i)=>{
      if(!f || typeof f.key !== "string" || !f.key) errors.push(`"extraTextFields[${i}].key" must be a non-empty string`);
      if(!f || typeof f.label !== "string" || !f.label) errors.push(`"extraTextFields[${i}].label" must be a non-empty string`);
    });
  }
  if(fw.extraSelectFields !== undefined){
    if(!Array.isArray(fw.extraSelectFields)) errors.push('"extraSelectFields" must be an array of {key, label, options} objects');
    else fw.extraSelectFields.forEach((f,i)=>{
      if(!f || typeof f.key !== "string" || !f.key) errors.push(`"extraSelectFields[${i}].key" must be a non-empty string`);
      if(!f || !Array.isArray(f.options) || !f.options.length) errors.push(`"extraSelectFields[${i}].options" must be a non-empty array`);
    });
  }
  if(fw.acceptability !== undefined && typeof fw.acceptability !== "object"){
    errors.push('"acceptability" must be an object keyed by rating category');
  }

  if(errors.length) throw new Error(`This framework file has ${errors.length} problem${errors.length===1?"":"s"}:\n\u2013 ` + errors.join("\n\u2013 "));
  if(!Array.isArray(fw.exports)) fw.exports = ["flat"];
  return fw;
}

function buildExampleFrameworkTemplate(){
  return {
    _notes: "This is a starting-point framework file, not a finished one \u2014 replace the example values and delete this _notes block " +
      "before using it for real work. Required fields: id, name, consLevels, likeLevels, ratingCategories, matrix, taxonomyType. " +
      "matrix must have one entry per likelihood level, each with one value per consequence level, and every value must be a " +
      "member of ratingCategories. taxonomyType is either \"factor-indicator\" (needs factorIndicators) or \"receptor-category\" " +
      "(needs receptorCategories). Everything else (domainsEnabled/domainOptions, phasesEnabled/phaseOptions, extraTextFields, " +
      "showComments, acceptability, exports) is optional and defaults to off/absent if omitted.",
    id: "custom",
    name: "Example Custom Framework",
    consLevels: ["Low","Medium","High"],
    likeLevels: ["Unlikely","Possible","Likely"],
    ratingCategories: ["Low","Medium","High","Extreme"],
    matrix: {
      "Unlikely": {"Low":"Low",    "Medium":"Low",    "High":"Medium"},
      "Possible": {"Low":"Low",    "Medium":"Medium", "High":"High"},
      "Likely":   {"Low":"Medium", "Medium":"High",   "High":"Extreme"}
    },
    trackInherentResidual: true,
    taxonomyType: "receptor-category",
    receptorCategories: ["Environment","Community","Asset / infrastructure"],
    domainsEnabled: false,
    phasesEnabled: false,
    extraTextFields: [
      { key: "outcome", label: "Target outcome (optional example field)" }
    ],
    showComments: true,
    acceptability: {
      "Extreme": "Unacceptable",
      "High": "Acceptable only with significant controls",
      "Medium": "Acceptable with standard controls",
      "Low": "Acceptable"
    },
    exports: ["flat"]
  };
}
document.getElementById("download-framework-template-btn").addEventListener("click", ()=>{
  const blob = new Blob([JSON.stringify(buildExampleFrameworkTemplate(), null, 2)], {type:"application/json"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = "example_custom_framework.json";
  document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
});

/* =========================================================================
   STATE
   ========================================================================= */

let activeFramework = FRAMEWORKS.mdcp;
let project = { name: "", themes: { source: [], pathway: [], receptor: [] } };
let RISKS = [];
let assessmentLabel = "";
let themeFilter = null; // {role: "source"|"pathway"|"receptor"|"gap", id, taxValue?} for pathway-analysis click-to-filter
let pathwayTab = "gap"; // "gap" | "spr"
let viewMode = "inh"; // "inh" | "res"
let activeCell = null; // {like, cons} for matrix filter
let showFlaggedOnly = false;
let showArchived = false;
let sortByRecent = false;
let filters = { search: "", taxonomy: "All", phases: [], domains: [], rating: null };

const RATING_ORDER = ["Low","Medium","High","Extreme"];
const PHASE_ABBR = {"Construction":"Con","Commissioning":"Com","Operation":"Ops","Care & maintenance":"C&M","Closure":"Clo","Decommissioning":"Dec","Closure / rehabilitation":"Clo/Rehab"};
function formatTimestamp(iso){
  if(!iso) return "\u2014";
  const d = new Date(iso);
  if(isNaN(d.getTime())) return "\u2014";
  return d.toLocaleString(undefined, {year:"numeric", month:"short", day:"numeric", hour:"2-digit", minute:"2-digit"});
}

function computeRating(fw, cons, like){
  if(!fw.matrix[like]) return "\u2014";
  return fw.matrix[like][cons] || "\u2014";
}
function nextId(){ return RISKS.reduce((m,r)=>Math.max(m,r.id),0) + 1; }
function esc(s){ return (s||"").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }

/* =========================================================================
   RICH TEXT \u2014 minimal formatting for Source / Pathway / Receptor / Treatment.
   Stored as a small safe HTML subset; sanitized on every save so a loaded
   session file can never inject anything beyond this allow-list.
   ========================================================================= */
const RTE_ALLOWED_TAGS = new Set(["B","STRONG","I","EM","U","UL","OL","LI","BR","P","DIV","MARK"]);
function sanitizeRichHtml(html){
  const tmp = document.createElement("div");
  tmp.innerHTML = html || "";
  (function clean(node){
    [...node.childNodes].forEach(child=>{
      if(child.nodeType === 1){
        if(!RTE_ALLOWED_TAGS.has(child.tagName)){
          while(child.firstChild) node.insertBefore(child.firstChild, child);
          node.removeChild(child);
        } else {
          [...child.attributes].forEach(a=>child.removeAttribute(a.name));
          clean(child);
        }
      } else if(child.nodeType !== 3){
        node.removeChild(child);
      }
    });
  })(tmp);
  return tmp.innerHTML;
}
// Accepts either already-sanitized rich HTML (passed through) or legacy plain text
// (escaped, newlines converted to <br>), so old session files still display correctly.
function richHtmlFor(val){
  if(!val) return "";
  if(/<(b|strong|i|em|u|ul|ol|li|br|p|div|mark)[ >]/i.test(val)) return sanitizeRichHtml(val);
  return esc(val).replace(/\n/g,"<br>");
}
function richHtmlToPlainText(html){
  const tmp = document.createElement("div");
  tmp.innerHTML = richHtmlFor(html);
  let out = "";
  tmp.childNodes.forEach(node=>{
    if(node.nodeType===3){ out += node.textContent; }
    else if(node.tagName==="UL" || node.tagName==="OL"){
      [...node.children].forEach(li=> out += "\u2022 " + li.textContent.trim() + "\n");
    } else if(node.tagName==="BR"){ out += "\n"; }
    else if(node.tagName==="P" || node.tagName==="DIV"){ out += node.textContent + "\n"; }
    else { out += node.textContent; }
  });
  return out.trim();
}
function richBoxHtml(id, value, accentClass){
  return `<div class="rich-toolbar" data-target="${id}">
      <button type="button" data-cmd="bold"><b>B</b></button>
      <button type="button" data-cmd="italic"><i>I</i></button>
      <button type="button" data-cmd="underline"><u>U</u></button>
      <button type="button" data-cmd="insertUnorderedList">\u2022 List</button>
      <button type="button" data-cmd="insertOrderedList">1. List</button>
      <button type="button" data-cmd="highlight">Highlight</button>
    </div>
    <div class="rich-box ${accentClass||""}" id="${id}" contenteditable="true">${richHtmlFor(value)}</div>`;
}
function wireRichToolbars(root){
  root.querySelectorAll(".rich-toolbar").forEach(toolbar=>{
    const targetId = toolbar.dataset.target;
    toolbar.querySelectorAll("button").forEach(btn=>{
      btn.addEventListener("mousedown", (e)=>{
        e.preventDefault(); // keep the text selection alive
        const box = document.getElementById(targetId);
        box.focus();
        const cmd = btn.dataset.cmd;
        if(cmd === "highlight") wrapSelectionInMark(box);
        else document.execCommand(cmd, false, null);
      });
    });
  });
}
function wrapSelectionInMark(box){
  const sel = window.getSelection();
  if(!sel.rangeCount || sel.isCollapsed) return;
  const range = sel.getRangeAt(0);
  if(!box.contains(range.commonAncestorContainer)) return;
  const mark = document.createElement("mark");
  try{ range.surroundContents(mark); }
  catch(e){ const content = range.extractContents(); mark.appendChild(content); range.insertNode(mark); }
}

/* =========================================================================
   PATHWAY ANALYSIS \u2014 Gap Matrix + Source\u2192Pathway\u2192Receptor flow.
   Theme lists are project-level config (label + keywords), defined per
   project rather than hardcoded, since which "causes" or "receptors" are
   worth clustering is specific to each project's actual risk wording.
   ========================================================================= */
function risksSourceThemes(r){ return themesForRole(r, "source"); }
function risksPathwayThemes(r){ return themesForRole(r, "pathway"); }
function risksReceptorThemes(r){ return themesForRole(r, "receptor"); }
function activeRisksForAnalysis(){ return RISKS.filter(r=>!r._archived); }
function titleCaseWords(s){ return s.replace(/\b\w/g, c=>c.toUpperCase()); }
function taxonomyValueOf(r){
  return activeFramework.taxonomyType === "factor-indicator" ? (r.indicator||"(none)") : (r.receptorCategory||"(none)");
}
function topTaxonomyValueOf(r){
  return activeFramework.taxonomyType === "factor-indicator" ? (r.factor||"(none)") : (r.receptorCategory||"(none)");
}
function topTaxonomyOptions(){
  const fw = activeFramework;
  return fw.taxonomyType === "factor-indicator" ? Object.keys(fw.factorIndicators) : fw.receptorCategories;
}
function topTaxonomyLabel(){
  return taxLabels().top;
}
function taxonomyColumnValues(){
  const fw = activeFramework;
  if(fw.taxonomyType === "factor-indicator") return [...new Set(Object.values(fw.factorIndicators).flat())];
  return fw.receptorCategories;
}

function renderPathwayAnalysis(){
  if(pathwayTab === "gap") renderGapMatrix();
  else if(pathwayTab === "net") renderFactorNetwork();
  else renderSPRFlow();
}

function themeDetailHtml(){
  if(!themeFilter) return `<div class="panel-sub" style="margin-top:10px;">Click a cell or node above to see the matching risks here.</div>`;
  const matches = visibleRisks();
  let label = "";
  if(themeFilter.role === "gap"){
    const theme = (project.themes.source||[]).find(t=>t.id===themeFilter.themeId);
    label = `${theme?theme.label:themeFilter.themeId} \u00d7 ${themeFilter.taxValue}`;
  } else if(themeFilter.role === "tax"){
    label = themeFilter.taxKey.replace("::"," \u203a ");
  } else if(themeFilter.themeId === "__none"){
    label = "(no source group)";
  } else {
    const theme = (project.themes[themeFilter.role]||[]).find(t=>t.id===themeFilter.themeId);
    label = theme ? theme.label : themeFilter.themeId;
  }
  let html = `<div style="margin-top:14px; padding-top:14px; border-top:1px solid var(--line);">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:8px;">
      <strong style="font-size:13px;">${esc(label)}</strong>
      <span class="panel-sub">${matches.length} risk${matches.length===1?"":"s"}</span>
      <span class="spacer"></span>
      <span class="chip" id="clear-theme-filter">Clear</span>
    </div>`;
  if(!matches.length){
    html += `<div class="empty-state" style="padding:16px;">No risks match this combination yet.</div>`;
  } else {
    html += `<table><thead><tr><th>ID</th><th>Source</th><th>Receptor</th><th>Inh. rating</th><th>Res. rating</th><th></th></tr></thead><tbody>`;
    matches.forEach(r=>{
      html += `<tr>
        <td>${r.id}</td>
        <td class="wrap">${richHtmlFor(r.source)}</td>
        <td class="wrap">${richHtmlFor(r.receptor)}</td>
        <td>${r.inhRating?`<span class="rating ${r.inhRating}">${r.inhRating}</span>`:"\u2014"}</td>
        <td>${r.resRating?`<span class="rating ${r.resRating}">${r.resRating}</span>`:"\u2014"}</td>
        <td><button class="btn" data-edit="${r.id}">Edit</button></td>
      </tr>`;
    });
    html += `</tbody></table>`;
  }
  html += `</div>`;
  return html;
}
function wireThemeDetailEvents(){
  const clearBtn = document.getElementById("clear-theme-filter");
  if(clearBtn) clearBtn.addEventListener("click", ()=>{ themeFilter=null; renderPathwayAnalysis(); renderRegister(); });
  document.querySelectorAll("#pathway-analysis-body [data-edit]").forEach(b=>b.addEventListener("click", ()=>openDrawer(Number(b.dataset.edit))));
}

function renderGapMatrix(){
  const container = document.getElementById("pathway-analysis-body");
  const themes = project.themes.source||[];
  const cols = taxonomyColumnValues();
  if(!themes.length){
    container.innerHTML = `<div class="empty-state">No Source groups yet. Click \u201c\u2728 Group by phrase\u201d to group risks by their actual source, so you can spot where a source has no coverage across your ${esc(taxLabels().sub.toLowerCase())}s.</div>`;
    return;
  }
  let html = `<div class="scroll-x"><table class="matrix-table" style="font-size:12px;"><tr><td class="hdr"></td>`;
  cols.forEach(c=> html += `<td class="hdr">${esc(c)}</td>`);
  html += `</tr>`;
  themes.forEach(theme=>{
    html += `<tr><td class="hdr" style="text-align:left;">${esc(theme.label)}</td>`;
    cols.forEach(col=>{
      const count = activeRisksForAnalysis().filter(r=> risksSourceThemes(r).includes(theme.id) && taxonomyValueOf(r)===col).length;
      const isActive = themeFilter && themeFilter.role==="gap" && themeFilter.themeId===theme.id && themeFilter.taxValue===col;
      html += `<td class="${count?'':'gap-cell'}${isActive?' active-cell':''}" data-theme="${esc(theme.id)}" data-tax="${esc(col)}">${count||0}</td>`;
    });
    html += `</tr>`;
  });
  html += `</table></div>`;
  html += themeDetailHtml();
  container.innerHTML = html;
  container.querySelectorAll("td[data-theme]").forEach(td=>{
    td.addEventListener("click", ()=>{
      const themeId = td.dataset.theme, taxValue = td.dataset.tax;
      if(themeFilter && themeFilter.role==="gap" && themeFilter.themeId===themeId && themeFilter.taxValue===taxValue) themeFilter=null;
      else themeFilter = {role:"gap", themeId, taxValue};
      renderGapMatrix(); renderRegister();
    });
  });
  wireThemeDetailEvents();
}

function themeFilterRiskIds(){
  if(!themeFilter) return null;
  if(themeFilter.role==="tax") return new Set(activeRisksForAnalysis().filter(r=>taxKeyOf(r)===themeFilter.taxKey).map(r=>r.id));
  const matcherFn = themeFilter.role==="source" ? risksSourceThemes
    : themeFilter.role==="pathway" ? risksPathwayThemes
    : themeFilter.role==="receptor" ? risksReceptorThemes : null;
  if(!matcherFn) return null;
  return new Set(activeRisksForAnalysis().filter(r=>matcherFn(r).includes(themeFilter.themeId)).map(r=>r.id));
}
function renderSPRFlow(){
  const container = document.getElementById("pathway-analysis-body");
  const { source, pathway, receptor } = project.themes;
  if(!source.length || !pathway.length || !receptor.length){
    container.innerHTML = `<div class="empty-state">No Source / Pathway / Receptor groups yet. Click \u201c\u2728 Group by phrase\u201d to build them from each risk's whole Source / Pathway / Receptor phrase, then tidy them in \u201cManage groups\u2026\u201d.</div>`;
    return;
  }
  const countFor = (theme, matcherFn) => activeRisksForAnalysis().filter(r=>matcherFn(r).includes(theme.id)).length;
  const srcNodes = source.map(t=>({...t, count: countFor(t, risksSourceThemes)})).filter(n=>n.count>0);
  const pathNodes = pathway.map(t=>({...t, count: countFor(t, risksPathwayThemes)})).filter(n=>n.count>0);
  const recNodes = receptor.map(t=>({...t, count: countFor(t, risksReceptorThemes)})).filter(n=>n.count>0);
  if(!srcNodes.length || !pathNodes.length || !recNodes.length){
    container.innerHTML = `<div class="empty-state">No risks currently match all three theme roles' keywords. Check the keywords in "Manage themes\u2026", or that risks have Source/Pathway/Receptor text filled in.</div>`;
    return;
  }
  const activeIds = themeFilterRiskIds();
  const nodeH = t => 24 + Math.min(t.count, 8)*4;
  const layout = (nodes) => { let y=0; const laid = nodes.map(n=>{ const h=nodeH(n); const item={node:n,y,h}; y+=h+10; return item; }); return {laid, totalH: Math.max(y-10,0)}; };
  const srcL = layout(srcNodes), pathL = layout(pathNodes), recL = layout(recNodes);
  const maxH = Math.max(srcL.totalH, pathL.totalH, recL.totalH, 60);
  const colW = 190, gap = 90, topPad = 28, width = colW*3 + gap*2 + 20, height = maxH + topPad + 20;
  const colX = [10, 10+colW+gap, 10+(colW+gap)*2];
  const place = (layoutRes) => { const off = (maxH-layoutRes.totalH)/2; return layoutRes.laid.map(it=>({...it, y: it.y+off+topPad})); };
  const srcPlaced = place(srcL), pathPlaced = place(pathL), recPlaced = place(recL);
  const midY = (placed, id) => { const it = placed.find(x=>x.node.id===id); return it ? it.y + it.h/2 : 0; };
  const riskIdsForNode = (matcherFn, themeId) => activeRisksForAnalysis().filter(r=>matcherFn(r).includes(themeId)).map(r=>r.id);

  let edgesHtml = "";
  const drawEdges = (aNodes, aPlaced, aFn, bNodes, bPlaced, bFn, x1, x2) => {
    aNodes.forEach(a=> bNodes.forEach(b=>{
      const edgeIds = activeRisksForAnalysis().filter(r=> aFn(r).includes(a.id) && bFn(r).includes(b.id)).map(r=>r.id);
      const w = edgeIds.length;
      if(!w) return;
      const isEdgeActive = activeIds ? edgeIds.some(id=>activeIds.has(id)) : false;
      const y1 = midY(aPlaced, a.id), y2 = midY(bPlaced, b.id), mx=(x1+x2)/2;
      const stroke = activeIds ? (isEdgeActive ? "#3C533C" : "#DDDCD0") : "#8BA982";
      const strokeOpacity = activeIds ? (isEdgeActive ? 0.95 : 0.5) : 0.55;
      const strokeW = isEdgeActive ? Math.min(2+w,9) : Math.min(1+w,8);
      edgesHtml += `<path d="M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}" stroke="${stroke}" stroke-width="${strokeW}" fill="none" opacity="${strokeOpacity}"/>`;
    }));
  };
  drawEdges(srcNodes, srcPlaced, risksSourceThemes, pathNodes, pathPlaced, risksPathwayThemes, colX[0]+colW, colX[1]);
  drawEdges(pathNodes, pathPlaced, risksPathwayThemes, recNodes, recPlaced, risksReceptorThemes, colX[1]+colW, colX[2]);

  const nodeRects = (placed, x, role, matcherFn) => placed.map(it=>{
    const isSelected = themeFilter && themeFilter.role===role && themeFilter.themeId===it.node.id;
    const isConnected = (activeIds && !isSelected) ? riskIdsForNode(matcherFn, it.node.id).some(id=>activeIds.has(id)) : false;
    const label = it.node.label.length>24 ? it.node.label.slice(0,23)+"\u2026" : it.node.label;
    let fill="#EEF7DB", stroke="#8BA982", sw=1, opacity=1;
    if(isSelected){ fill="#D6F591"; stroke="#263326"; sw=2; }
    else if(activeIds){
      if(isConnected){ stroke="#4F7942"; sw=2; }
      else { opacity=0.3; }
    }
    return `<g class="spr-node" data-role="${role}" data-theme="${esc(it.node.id)}" style="cursor:pointer;" opacity="${opacity}"><title>${esc(it.node.label)}</title>
      <rect x="${x}" y="${it.y}" width="${colW}" height="${it.h}" rx="6" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>
      <text x="${x+10}" y="${it.y+it.h/2+4}" font-size="12" fill="#1E1E1E">${esc(label)} (${it.node.count})</text>
    </g>`;
  }).join("");
  const colHeader = (x, text) => `<text x="${x+colW/2}" y="16" font-size="11" text-anchor="middle" fill="#565D4F" style="font-weight:700; text-transform:uppercase; letter-spacing:.03em;">${esc(text)}</text>`;

  const ungrouped = SPR_ROLES.map(role=>({role, n: activeRisksForAnalysis().filter(r=>richHtmlToPlainText(r[role]).trim() && !themesForRole(r,role).length).length})).filter(x=>x.n);
  const svg = `${ungrouped.length?`<div class="panel-sub" style="margin-bottom:6px;">Not shown \u2014 ungrouped risks: ${ungrouped.map(x=>`${x.n} ${x.role}`).join(", ")}. Use \u201cGroup by phrase\u201d or assign them in \u201cManage groups\u2026\u201d.</div>`:""}<div class="scroll-x"><svg viewBox="0 0 ${width} ${height}" style="width:100%; height:auto;">
    ${colHeader(colX[0],"Source")}${colHeader(colX[1],"Pathway")}${colHeader(colX[2],"Receptor")}
    ${edgesHtml}
    ${nodeRects(srcPlaced, colX[0], "source", risksSourceThemes)}
    ${nodeRects(pathPlaced, colX[1], "pathway", risksPathwayThemes)}
    ${nodeRects(recPlaced, colX[2], "receptor", risksReceptorThemes)}
  </svg></div>`;

  container.innerHTML = svg + themeDetailHtml();
  container.querySelectorAll(".spr-node").forEach(g=>{
    g.addEventListener("click", ()=>{
      const role = g.dataset.role, themeId = g.dataset.theme;
      if(themeFilter && themeFilter.role===role && themeFilter.themeId===themeId) themeFilter = null;
      else themeFilter = {role, themeId};
      renderSPRFlow(); renderRegister();
    });
  });
  wireThemeDetailEvents();
}

function renderDomainManager(){
  ensureProjectDomainOptions();
  const local = [...(project.domainOptions||[])];
  function renderList(){
    document.getElementById("domain-drawer").innerHTML = `
      <h3>Manage domains</h3>
      <p class="panel-sub" style="margin-bottom:16px;">The domains offered when tagging a risk (e.g. site infrastructure areas). Specific to this project \u2014 editing this list doesn't retag any existing risk.</p>
      <div id="domain-list"></div>
      <div style="display:flex; gap:6px; margin-top:10px;">
        <input type="text" id="new-domain-input" placeholder="New domain name">
        <button class="btn" id="add-domain-btn">+ Add</button>
      </div>
      <div class="drawer-actions">
        <button class="btn primary" id="domain-save">Save & close</button>
        <button class="btn" id="domain-cancel">Cancel</button>
      </div>
    `;
    const listEl = document.getElementById("domain-list");
    listEl.innerHTML = local.map((d,i)=>`
      <div style="display:flex; gap:6px; align-items:center; margin-bottom:4px;">
        <span style="flex:1; font-size:13px;">${esc(d)}</span>
        <button class="btn danger" data-remove-domain="${i}" style="padding:3px 8px; font-size:11px;">Remove</button>
      </div>`).join("") || `<div class="panel-sub">No domains yet.</div>`;
    listEl.querySelectorAll("[data-remove-domain]").forEach(b=>{
      b.addEventListener("click", ()=>{ local.splice(Number(b.dataset.removeDomain),1); renderList(); });
    });
    document.getElementById("add-domain-btn").addEventListener("click", ()=>{
      const input = document.getElementById("new-domain-input");
      const val = input.value.trim();
      if(!val) return;
      if(local.some(d=>d.toLowerCase()===val.toLowerCase())){ alert("That domain already exists."); return; }
      local.push(val); input.value=""; renderList();
      document.getElementById("new-domain-input").focus();
    });
    document.getElementById("domain-cancel").addEventListener("click", closeDomainManager);
    document.getElementById("domain-save").addEventListener("click", ()=>{
      project.domainOptions = local;
      closeDomainManager();
      renderAll();
      scheduleAutosave();
    });
    makeChipsFocusable(document.getElementById("domain-drawer"));
  }
  renderList();
  document.getElementById("domain-overlay").classList.add("show");
  document.getElementById("new-domain-input").focus();
}
function closeDomainManager(){ document.getElementById("domain-overlay").classList.remove("show"); }
document.getElementById("domain-overlay").addEventListener("click", (e)=>{ if(e.target.id==="domain-overlay") closeDomainManager(); });
document.getElementById("theme-overlay").addEventListener("click", (e)=>{ if(e.target.id==="theme-overlay") closeThemeManager(); });

/* =========================================================================
   FRAMEWORK SWITCHING
   ========================================================================= */

document.getElementById("framework-select").addEventListener("change", (e)=>{
  const val = e.target.value;
  if(val === "custom-load" || (val === "custom" && !frameworkFor("custom"))){
    e.target.value = activeFramework.id in FRAMEWORKS ? activeFramework.id : "custom"; // revert until file loads
    document.getElementById("custom-framework-file").click();
    return;
  }
  if(val === activeFramework.id) return;
  stashActive();
  const targetHasRisks = ASSESSMENTS[val] && ASSESSMENTS[val].risks.length;
  e.target.value = activeFramework.id in FRAMEWORKS ? activeFramework.id : "custom";
  if(!targetHasRisks && RISKS.some(r=>!r._archived)){
    // Switching no longer clears anything: offer to build the new assessment from the current one.
    openTransferDialog(val, {fromSelect:true});
    return;
  }
  activateAssessment(val);
});

document.getElementById("custom-framework-file").addEventListener("change", (e)=>{
  const file = e.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = (evt)=>{
    try{
      const fw = validateFrameworkConfig(JSON.parse(evt.target.result));
      fw.id = "custom";
      stashActive();
      const prev = ASSESSMENTS.custom;
      if(prev && prev.risks.length && !confirm(`This project already has a custom-framework assessment (${prev.risks.length} risks under "${prev.customFramework.name}"). Replace that framework definition? Its risks are kept but may need re-rating.`)) return;
      ASSESSMENTS.custom = { frameworkId:"custom", customFramework: fw, label: prev ? prev.label : "", risks: prev ? prev.risks : [] };
      syncFrameworkSelect();
      if(activeFramework.id !== "custom" && RISKS.some(r=>!r._archived) && !(prev && prev.risks.length)) openTransferDialog("custom", {fromSelect:true});
      else activateAssessment("custom");
    }catch(err){ alert("Couldn't load that framework file: " + err.message); }
  };
  reader.readAsText(file);
  e.target.value = "";
});

/* =========================================================================
   PROJECT / SESSION
   ========================================================================= */

document.getElementById("project-name").addEventListener("change", (e)=>{ project.name = e.target.value; renderHeader(); });

/* =========================================================================
   AUTOSAVE / CRASH RECOVERY
   Best-effort only: everything still lives in RAM until "Save session" is
   clicked. This just means a closed tab or a crash doesn't have to mean
   losing an entire working session's edits.
   ========================================================================= */
const AUTOSAVE_KEY = "riskDashboardAutosave_v1";
let autosaveTimer = null;
const AUTOSAVE_ENABLED = (()=>{
  try{ const k="__rdtest__"; localStorage.setItem(k,"1"); localStorage.removeItem(k); return true; }
  catch(e){ return false; }
})();
function scheduleAutosave(){
  if(!AUTOSAVE_ENABLED) return;
  clearTimeout(autosaveTimer);
  autosaveTimer = setTimeout(doAutosave, 800);
}
function doAutosave(){
  if(!AUTOSAVE_ENABLED) return;
  try{
    if(!hasUnsavedChanges()) return;
    const payload = Object.assign(serializeProject(), { savedAt: new Date().toISOString() });
    localStorage.setItem(rdAutosaveKey(), JSON.stringify(payload));
  }catch(e){ /* storage full/blocked \u2014 autosave is best-effort, fail silently */ }
}
function clearAutosave(){
  if(!AUTOSAVE_ENABLED) return;
  try{ localStorage.removeItem(rdAutosaveKey()); }catch(e){}
}
function checkForAutosaveRecovery(){
  if(!AUTOSAVE_ENABLED) return;
  let raw;
  try{ raw = localStorage.getItem(rdAutosaveKey()); }catch(e){ return; }
  if(!raw) return;
  let data;
  try{ data = JSON.parse(raw); }catch(e){ return; }
  if(!data) return;
  const riskCount = data.assessments ? Object.values(data.assessments).reduce((n,a)=>n+((a&&a.risks)||[]).length,0) : (data.risks||[]).length;
  if(!riskCount) return;
  const when = formatTimestamp(data.savedAt);
  if(!confirm(`Found unsaved work from ${when} (${riskCount} risk${riskCount===1?"":"s"}${data.assessments && Object.keys(data.assessments).length>1?` across ${Object.keys(data.assessments).length} assessments`:""}) that was never saved to a session file. Restore it?`)){
    clearAutosave();
    return;
  }
  try{
    applyLoadedData(data);
    renderAll();
  }catch(err){
    alert("Couldn't restore the autosaved work: " + err.message);
  }
}

function normalizeProject(p){
  p = p || {};
  if(!p.themes) p.themes = {};
  if(!Array.isArray(p.outcomeLibrary)) p.outcomeLibrary = [];
  ["source","pathway","receptor"].forEach(role=>{ if(!Array.isArray(p.themes[role])) p.themes[role] = []; });
  return p;
}
function ensureProjectDomainOptions(){
  const fw = activeFramework;
  if(fw.domainsEnabled && !Array.isArray(project.domainOptions)){
    project.domainOptions = [...(fw.domainOptions||[])];
  }
}
function currentDomainOptions(){
  ensureProjectDomainOptions();
  return project.domainOptions || activeFramework.domainOptions || [];
}

document.getElementById("new-project-btn").addEventListener("click", ()=>{
  if(hasUnsavedChanges() && !confirm("Start a new project? You have unsaved changes \u2014 they'll be lost unless you Save copy first.")) return;
  RISKS = [];
  ASSESSMENTS = {};
  assessmentLabel = "";
  resetViewState();
  document.getElementById("project-name").value = "";
  project = normalizeProject({ name: "" });
  ensureOutcomeLibrary();
  stashActive();
  clearAutosave();
  renderAll();
  markSaved();
  renderHeader();
});

document.getElementById("save-session-btn").addEventListener("click", ()=>{
  const payload = Object.assign(serializeProject(), { exportedAt: new Date().toISOString() });
  const blob = new Blob([JSON.stringify(payload, null, 1)], {type:"application/json"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  const stamp = new Date().toISOString().replace(/[:T]/g,"-").slice(0,16);
  const safeName = (project.name || "risk_session").replace(/[^a-z0-9]+/gi,"_");
  a.href = url; a.download = `${safeName}_${stamp}.json`;
  document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
  clearAutosave();
  markSaved();
  renderHeader();
});

document.getElementById("load-session-btn").addEventListener("click", ()=>{
  if(hasUnsavedChanges() && !confirm("Loading a session replaces what's open now, and you have unsaved changes. Continue without saving?")) return;
  document.getElementById("load-session-file").click();
});
document.getElementById("load-session-file").addEventListener("change", (e)=>{
  const file = e.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = (evt)=>{
    try{
      const data = JSON.parse(evt.target.result);
      applyLoadedData(data);
      renderAll();
      markSaved();
      renderHeader();
    }catch(err){ alert("Couldn't read that session file: " + err.message); }
  };
  reader.readAsText(file);
  e.target.value = "";
});

/* =========================================================================
   RENDERING
   ========================================================================= */

function renderHeader(){
  const dirty = lastSavedJson !== null && hasUnsavedChanges();
  document.getElementById("header-sub").innerHTML =
    esc((project.name || "Untitled project") + " \u00b7 " + activeFramework.name) +
    (dirty ? ' <span class="unsaved-pill" title="Changes since the last save (a browser autosave is kept as a backup)">\u25cf Unsaved changes</span>' : "");
  document.getElementById("register-sub").textContent = `${RISKS.length} risk${RISKS.length===1?"":"s"}`;
  document.getElementById("footer-note").textContent =
    `Framework: ${activeFramework.name}. Ratings derived from its risk matrix using the recorded consequence and likelihood. ` +
    (activeFramework.matrixNote ? activeFramework.matrixNote + ". " : "") +
    `Live edits stay in this browser tab \u2014 use "Save copy" to download an updated file; you'll be warned before leaving with unsaved changes.`;
}

function renderFilterControls(){
  const fw = activeFramework;
  const el = document.getElementById("filter-controls");
  const taxOptions = ["All", ...topTaxonomyOptions()];
  let html = `<div class="filter-row">
    <span class="flabel">${esc(topTaxonomyLabel())}</span>
    <div class="chip-row">${taxOptions.map(t=>`<span class="chip ${filters.taxonomy===t?'active':''}" data-taxonomy="${esc(t)}">${esc(t)}</span>`).join("")}</div>
  </div>`;
  if(fw.phasesEnabled){
    html += `<div class="filter-row">
      <span class="flabel">${esc(phaseLabelOf())}</span>
      <div class="chip-row">${fw.phaseOptions.map(p=>`<span class="chip ${filters.phases.includes(p)?'active':''}" data-phase="${esc(p)}">${esc(p)}</span>`).join("")}</div>
      ${filters.phases.length ? '<span class="af-clearall" id="clear-phases" style="margin-left:6px;">Clear phases \u2715</span>' : ""}
    </div>`;
  }
  if(fw.domainsEnabled){
    html += `<div class="filter-row">
      <span class="flabel">Domain</span>
      <div class="chip-row">${currentDomainOptions().map(d=>`<span class="chip ${filters.domains.includes(d)?'active':''}" data-domain="${esc(d)}">${esc(d)}</span>`).join("")}</div>
      ${filters.domains.length ? '<span class="af-clearall" id="clear-domains" style="margin-left:6px;">Clear domains \u2715</span>' : ""}
      <button class="btn" id="manage-domains-btn" style="font-size:11px; padding:3px 8px; margin-left:6px;">Manage domains\u2026</button>
    </div>`;
  }
  html += `<div class="filter-row"><input type="text" id="risk-search" placeholder="Search ID, Source, Pathway, Receptor\u2026" aria-label="Search risks" value="${esc(filters.search)}"></div>`;
  el.innerHTML = html;

  el.querySelectorAll("[data-taxonomy]").forEach(chip=>{
    chip.addEventListener("click", ()=>{ filters.taxonomy = chip.dataset.taxonomy; activeCell=null; renderAll(); });
  });
  el.querySelectorAll("[data-phase]").forEach(chip=>{
    chip.addEventListener("click", ()=>{
      const p = chip.dataset.phase;
      filters.phases = filters.phases.includes(p) ? filters.phases.filter(x=>x!==p) : [...filters.phases, p];
      renderAll();
    });
  });
  el.querySelectorAll("[data-domain]").forEach(chip=>{
    chip.addEventListener("click", ()=>{
      const d = chip.dataset.domain;
      filters.domains = filters.domains.includes(d) ? filters.domains.filter(x=>x!==d) : [...filters.domains, d];
      renderAll();
    });
  });
  const clearPhases = document.getElementById("clear-phases");
  if(clearPhases) clearPhases.addEventListener("click", ()=>{ filters.phases=[]; renderAll(); });
  const clearDomains = document.getElementById("clear-domains");
  if(clearDomains) clearDomains.addEventListener("click", ()=>{ filters.domains=[]; renderAll(); });
  const manageDomainsBtn = document.getElementById("manage-domains-btn");
  if(manageDomainsBtn) manageDomainsBtn.addEventListener("click", renderDomainManager);

  const searchInput = document.getElementById("risk-search");
  searchInput.addEventListener("input", (e)=>{ filters.search = e.target.value; activeCell=null; renderAll();
    document.getElementById("risk-search").focus();
    const val = document.getElementById("risk-search").value;
    document.getElementById("risk-search").setSelectionRange(val.length, val.length);
  });
}

function renderActiveFiltersBar(){
  const el = document.getElementById("active-filters-bar");
  const chips = [];
  if(filters.taxonomy !== "All") chips.push({key:"taxonomy", label:`${topTaxonomyLabel()}: ${filters.taxonomy}`});
  if(filters.phases.length) chips.push({key:"phases", label:`Phase: ${filters.phases.join(", ")}`});
  if(filters.domains.length) chips.push({key:"domains", label:`Domain: ${filters.domains.join(", ")}`});
  if(filters.rating) chips.push({key:"rating", label:`Rating (${viewMode==="inh"?"inherent":"residual"}): ${filters.rating}`});
  if(activeCell) chips.push({key:"cell", label:`Matrix cell: ${activeCell.like} \u00d7 ${activeCell.cons}`});
  if(filters.search) chips.push({key:"search", label:`Search: "${filters.search}"`});
  if(showFlaggedOnly) chips.push({key:"flagged", label:"Flagged only"});
  if(showNeedsReview) chips.push({key:"review", label:"Needs review"});
  if(!chips.length){ el.innerHTML=""; return; }
  const matchCount = visibleRisks().length;
  el.innerHTML = `<div class="active-filters">
    <span class="af-label">Filtered \u2014 ${matchCount} risk${matchCount===1?"":"s"}</span>
    ${chips.map(c=>`<span class="af-chip">${esc(c.label)}<span class="af-x" data-key="${c.key}">\u2715</span></span>`).join("")}
    <span class="af-clearall" id="af-clear-all">Clear all</span>
  </div>`;
  el.querySelectorAll(".af-x").forEach(x=>{
    x.addEventListener("click", ()=>{
      const key = x.dataset.key;
      if(key==="taxonomy") filters.taxonomy = "All";
      if(key==="phases") filters.phases = [];
      if(key==="domains") filters.domains = [];
      if(key==="rating") filters.rating = null;
      if(key==="cell") activeCell = null;
      if(key==="search") filters.search = "";
      if(key==="flagged") showFlaggedOnly = false;
      if(key==="review") showNeedsReview = false;
      renderAll();
    });
  });
  document.getElementById("af-clear-all").addEventListener("click", ()=>{
    filters = { search:"", taxonomy:"All", phases:[], domains:[], rating:null };
    activeCell = null; showFlaggedOnly = false; showArchived = false; showNeedsReview = false;
    renderAll();
  });
}

function renderStatCards(){
  const el = document.getElementById("stat-cards");
  const key = viewMode==="inh" ? "inhRating" : "resRating";
  const base = baseFilteredRisks();
  const counts = {Low:0, Medium:0, High:0, Extreme:0};
  base.forEach(r=>{ if(counts[r[key]]!==undefined) counts[r[key]]++; });
  const cards = [
    {rating:null, cls:"total", label:"Total risks", num:base.length, hint: filters.rating?"Click to clear":"All ratings"},
    {rating:"Low", cls:"Low", label:"Low", num:counts.Low, hint:"Click to filter"},
    {rating:"Medium", cls:"Medium", label:"Medium", num:counts.Medium, hint:"Click to filter"},
    {rating:"High", cls:"High", label:"High", num:counts.High, hint:"Click to filter"},
    {rating:"Extreme", cls:"Extreme", label:"Extreme", num:counts.Extreme, hint:"Click to filter"}
  ];
  el.innerHTML = `<div class="stat-cards">${cards.map(c=>{
    const isActive = c.rating===null ? !filters.rating : filters.rating===c.rating;
    return `<div class="stat-card ${c.cls} ${isActive?'active':''}" data-rating="${c.rating||''}">
      <div class="stat-num">${c.num}</div><div class="stat-label">${esc(c.label)}</div><div class="stat-hint">${esc(c.hint)}</div>
    </div>`;
  }).join("")}</div>`;
  el.querySelectorAll(".stat-card").forEach(card=>{
    card.addEventListener("click", ()=>{
      const rating = card.dataset.rating;
      if(!rating){ filters.rating = null; activeCell = null; renderAll(); }
      else setRatingFilter(rating);
    });
  });
}

function renderMatrix(){
  const fw = activeFramework;
  document.getElementById("matrix-sub").textContent = fw.name + (fw.matrixNote ? " \u00b7 " + fw.matrixNote : "");
  const consKey = viewMode==="inh" ? "inhCons" : "resCons";
  const likeKey = viewMode==="inh" ? "inhLike" : "resLike";
  const rows = ratingFilteredRisks();
  let html = '<div class="risk-matrix"><table class="matrix-table">';
  html += `<tr><td></td><td></td><td colspan="${fw.consLevels.length}" class="axis-label-x">Consequence \u2192</td></tr>`;
  html += '<tr><td></td><td></td>' + fw.consLevels.map(c=>`<td class="hdr">${esc(c)}</td>`).join("") + '</tr>';
  fw.likeLevels.forEach((like, i) => {
    html += "<tr>";
    if(i===0) html += `<td class="axis-label-y" rowspan="${fw.likeLevels.length}">Likelihood</td>`;
    html += `<td class="like-label">${esc(like)}</td>`;
    fw.consLevels.forEach(cons => {
      const rating = computeRating(fw, cons, like);
      const isActive = activeCell && activeCell.like===like && activeCell.cons===cons;
      const count = rows.filter(r=> r[consKey]===cons && r[likeKey]===like).length;
      html += `<td class="rate-cell ${rating}${count?'':' empty-cell'}${isActive?' active-cell':''}" data-like="${esc(like)}" data-cons="${esc(cons)}">
        <span class="rating-tag">${esc(rating)}</span><span class="cell-count">${count||""}</span></td>`;
    });
    html += '</tr>';
  });
  html += '</table></div>';
  document.getElementById("matrix-body").innerHTML = html;
  document.querySelectorAll(".matrix-table td[data-like]").forEach(td=>{
    td.addEventListener("click", ()=>{
      const like = td.dataset.like, cons = td.dataset.cons;
      if(activeCell && activeCell.like===like && activeCell.cons===cons) activeCell = null;
      else activeCell = { like, cons };
      filters.rating = null; // an exact cell is more specific than a whole rating category
      renderAll();
    });
  });
}

function passesBase(r){
  if(!showArchived && r._archived) return false;
  if(showFlaggedOnly && !r._flagged) return false;
  if(showNeedsReview && !r._needsReview) return false;
  if(filters.taxonomy !== "All" && topTaxonomyValueOf(r) !== filters.taxonomy) return false;
  if(filters.phases.length){ const rp = r.phases||[]; if(!filters.phases.some(p=>rp.includes(p))) return false; }
  if(filters.domains.length){ const rd = r.domains||[]; if(!filters.domains.some(d=>rd.includes(d))) return false; }
  if(filters.search){
    const s = filters.search.toLowerCase();
    const hay = [String(r.id), richHtmlToPlainText(r.source), richHtmlToPlainText(r.pathway), richHtmlToPlainText(r.receptor),
      r.factor||"", r.indicator||"", r.receptorCategory||"", r.sourceGroup||"", r.pathwayGroup||"", r.receptorGroup||"", r.impact||""].join(" ").toLowerCase();
    if(!hay.includes(s)) return false;
  }
  return true;
}
// Every filter except rating \u2014 used for the stat-card / legend counts, so all
// categories stay comparable and clickable regardless of which one is active.
function baseFilteredRisks(){ return RISKS.filter(passesBase); }
// Base filters plus the rating filter \u2014 used for the matrix cell counts, which
// narrow to the active category the same way the original GGM dashboard did.
function ratingFilteredRisks(){
  let list = baseFilteredRisks();
  if(filters.rating){
    const key = viewMode==="inh" ? "inhRating" : "resRating";
    list = list.filter(r => r[key] === filters.rating);
  }
  return list;
}
function setRatingFilter(rating){
  filters.rating = (filters.rating===rating) ? null : rating;
  activeCell = null; // a whole rating category is less specific than an exact cell \u2014 clear the cell when picking one
  renderAll();
}

function visibleRisks(){
  let list = ratingFilteredRisks();
  if(activeCell){
    const consKey = viewMode==="inh" ? "inhCons" : "resCons";
    const likeKey = viewMode==="inh" ? "inhLike" : "resLike";
    list = list.filter(r => r[consKey]===activeCell.cons && r[likeKey]===activeCell.like);
  }
  if(themeFilter){
    if(themeFilter.role === "gap"){
      list = list.filter(r => risksSourceThemes(r).includes(themeFilter.themeId) && taxonomyValueOf(r)===themeFilter.taxValue);
    } else if(themeFilter.role === "tax"){
      list = list.filter(r => !r._archived && taxKeyOf(r)===themeFilter.taxKey);
    } else if(themeFilter.role === "source" && themeFilter.themeId === "__none"){
      list = list.filter(r => !r._archived && !risksSourceThemes(r).length);
    } else if(themeFilter.role === "source"){
      list = list.filter(r => risksSourceThemes(r).includes(themeFilter.themeId));
    } else if(themeFilter.role === "pathway"){
      list = list.filter(r => risksPathwayThemes(r).includes(themeFilter.themeId));
    } else if(themeFilter.role === "receptor"){
      list = list.filter(r => risksReceptorThemes(r).includes(themeFilter.themeId));
    }
  }
  list = [...list];
  if(sortByRecent){
    list.sort((a,b) => new Date(b._lastEditedAt||0) - new Date(a._lastEditedAt||0));
  } else {
    list.sort((a,b) => a.id - b.id);
  }
  return list;
}

function taxonomyCellHtml(r){
  const fw = activeFramework;
  if(fw.taxonomyType === "factor-indicator"){
    return `<td data-label="${esc(taxLabels().top)}">${esc(r.factor||"")}</td><td data-label="${esc(taxLabels().sub)}">${esc(r.indicator||"")}</td>`;
  }
  return `<td data-label="Receptor category">${esc(r.receptorCategory||"")}</td>`;
}
function taxonomyHeaderHtml(){
  const fw = activeFramework;
  if(fw.taxonomyType === "factor-indicator") return `<th>${esc(taxLabels().top)}</th><th>${esc(taxLabels().sub)}</th>`;
  return "<th>Receptor category</th>";
}
/* Framework-specific extra columns, in display order: standard outcomes (library picks),
   select fields, free-text fields, then residual-significance / offset fields. */
function extraColumns(fw){
  fw = fw || activeFramework;
  const cols = [];
  if(fw.outcomesEnabled) cols.push({key:"outcomeCodes", label:"Standard outcomes", kind:"outcomes",
    plain: r=>outcomeCodesText(r,false), full: r=>outcomeCodesText(r,true)});
  (fw.extraSelectFields||[]).forEach(f=>cols.push({key:f.key, label:f.label, kind:"select", options:f.options, plain:r=>r[f.key]||""}));
  (fw.extraTextFields||[]).forEach(f=>cols.push({key:f.key, label:f.label, kind:"text", plain:r=>r[f.key]||""}));
  if(fw.offsetsEnabled){
    cols.push({key:"residualSignificance", label:"Residual impact significance", kind:"select",
      options: fw.significanceOptions || DEFAULT_SIGNIFICANCE_OPTIONS, plain:r=>r.residualSignificance||""});
    cols.push({key:"offsetNotes", label:"Offset notes", kind:"text", plain:r=>r.offsetNotes||""});
  }
  return cols;
}
function extraFieldsHeaderHtml(){
  return extraColumns().map(c=>`<th>${esc(c.label)}</th>`).join("");
}
function extraFieldsCellHtml(r){
  return extraColumns().map(c=>{
    if(c.kind==="outcomes"){
      const codes = r.outcomeCodes||[];
      return `<td data-label="${esc(c.label)}">${codes.map(code=>{ const o = findOutcome(code);
        return `<span class="outcome-chip ${o&&o.type==="closure"?"closure":""}" title="${esc(o?o.text:"Not in this project's outcome library")}">${esc(code)}</span>`; }).join(" ")}</td>`;
    }
    return `<td class="wrap" data-label="${esc(c.label)}">${esc(c.plain(r))}</td>`;
  }).join("");
}
function phasesHeaderHtml(){ return activeFramework.phasesEnabled ? "<th>Phases</th>" : ""; }
function phasesCellHtml(r){
  if(!activeFramework.phasesEnabled) return "";
  return `<td data-label="${esc(phaseLabelOf())}">${(r.phases||[]).map(p=>PHASE_ABBR[p]||p).join(", ")}</td>`;
}
function flagCellHtml(r){
  const bits = [];
  if(r._flagged) bits.push('<span class="rating" style="background:#C99A2E;">Flagged</span>');
  if(r._archived) bits.push('<span class="rating" style="background:#8A8A80;">Archived</span>');
  if(r._needsReview) bits.push(`<span class="rating" style="background:#6B5A1E;" title="${esc(((r._transfer||{}).notes||[]).join(" "))}">\u26a0 Review</span>`);
  if(linkedCopies(r).length) bits.push(`<span class="link-badge" title="Linked to: ${esc(linkedCopies(r).map(l=>shortFwName(l.fw)+" #"+l.risk.id).join(", "))}">\u21c4 ${esc(linkedCopies(r).map(l=>shortFwName(l.fw)).join(", "))}</span>`);
  return `<td class="badge-cell">${bits.join(" ")}</td>`;
}
function lastEditedCellHtml(r){
  return `<td data-label="Last edited" class="muted-cell">${esc(formatTimestamp(r._lastEditedAt))}</td>`;
}
function inlineConsSelect(r, field){
  const fw = activeFramework;
  const opts = fw.consLevels.map(c=>`<option value="${esc(c)}" ${r[field]===c?"selected":""}>${esc(c)}</option>`).join("");
  return `<select class="inline-rating-select" data-risk="${r.id}" data-field="${field}"><option value="">\u2014</option>${opts}</select>`;
}
function inlineLikeSelect(r, field){
  const fw = activeFramework;
  const opts = fw.likeLevels.map(l=>`<option value="${esc(l)}" ${r[field]===l?"selected":""}>${esc(l)}</option>`).join("");
  return `<select class="inline-rating-select" data-risk="${r.id}" data-field="${field}"><option value="">\u2014</option>${opts}</select>`;
}

function renderRegister(){
  document.getElementById("flag-filter-chip").classList.toggle("active", showFlaggedOnly);
  document.getElementById("archived-filter-chip").classList.toggle("active", showArchived);
  document.getElementById("outcome-lib-btn").classList.toggle("hidden", !activeFramework.outcomesEnabled);
  const reviewCount = RISKS.filter(r=>r._needsReview && !r._archived).length;
  const reviewChip = document.getElementById("review-filter-chip");
  reviewChip.classList.toggle("hidden", !reviewCount && !showNeedsReview);
  reviewChip.classList.toggle("active", showNeedsReview);
  reviewChip.textContent = `\u26a0 Needs review (${reviewCount})`;
  const fw = activeFramework;
  const rows = visibleRisks();
  if(!RISKS.length){
    document.getElementById("register-body").innerHTML =
      `<div class="empty-state">No risks yet. Click "+ Add risk" to start this project's register under the ${esc(fw.name)} framework.</div>`;
    return;
  }
  let html = `<table><thead><tr><th></th><th>ID</th>${taxonomyHeaderHtml()}<th>Source</th><th>Pathway</th><th>Receptor</th>${phasesHeaderHtml()}
    <th>Inh. C/L</th><th>Inh. rating</th><th>Res. C/L</th><th>Res. rating</th>${extraFieldsHeaderHtml()}
    <th id="last-edited-header" style="cursor:pointer;" title="Click to sort by most recently edited">Last edited ${sortByRecent?"\u25be":""}</th><th></th></tr></thead><tbody>`;
  rows.forEach(r=>{
    html += `<tr${r._archived ? ' style="opacity:.55;"' : ""}>
      ${flagCellHtml(r)}
      <td class="id-cell" data-label="ID">${r.id}</td>
      ${taxonomyCellHtml(r)}
      <td class="wrap accent-source" data-label="Source">${richHtmlFor(r.source)}</td>
      <td class="wrap accent-pathway" data-label="Pathway">${richHtmlFor(r.pathway)}</td>
      <td class="wrap accent-receptor" data-label="Receptor">${richHtmlFor(r.receptor)}</td>
      ${phasesCellHtml(r)}
      <td data-label="Inherent C / L">${inlineConsSelect(r,"inhCons")} ${inlineLikeSelect(r,"inhLike")}</td>
      <td data-label="Inherent rating">${r.inhRating ? `<span class="rating ${r.inhRating}">${r.inhRating}</span>` : "\u2014"}</td>
      <td data-label="Residual C / L">${inlineConsSelect(r,"resCons")} ${inlineLikeSelect(r,"resLike")}</td>
      <td data-label="Residual rating">${r.resRating ? `<span class="rating ${r.resRating}">${r.resRating}</span>` : "\u2014"}</td>
      ${extraFieldsCellHtml(r)}
      ${lastEditedCellHtml(r)}
      <td class="edit-cell"><button class="btn" data-edit="${r.id}">Edit</button></td>
    </tr>`;
  });
  html += "</tbody></table>";
  if(fw.phasesEnabled){
    const active = RISKS.filter(r=>!r._archived);
    const uncovered = fw.phaseOptions.filter(p=>!active.some(r=>(r.phases||[]).includes(p)));
    if(active.length && uncovered.length) html = `<div class="coverage-note">No active risks yet cover: <strong>${uncovered.map(esc).join(", ")}</strong>. ${fw.id==="mdcp"?"MDCP risk assessments need to cover all phases of mine life, including closure.":""}</div>` + html;
  }
  document.getElementById("register-body").innerHTML = html;
  document.getElementById("last-edited-header").addEventListener("click", ()=>{
    sortByRecent = !sortByRecent;
    renderRegister();
  });
  document.querySelectorAll("[data-edit]").forEach(b=>b.addEventListener("click", ()=>openDrawer(Number(b.dataset.edit))));
  document.querySelectorAll(".inline-rating-select").forEach(sel=>{
    sel.addEventListener("change", ()=>{
      const riskId = Number(sel.dataset.risk), field = sel.dataset.field;
      const r = RISKS.find(x=>x.id===riskId);
      if(!r) return;
      r[field] = sel.value;
      r._lastEditedAt = new Date().toISOString();
      if(field==="inhCons"||field==="inhLike") r.inhRating = computeRating(activeFramework, r.inhCons, r.inhLike);
      if(field==="resCons"||field==="resLike") r.resRating = computeRating(activeFramework, r.resCons, r.resLike);
      renderAll();
    });
  });
}

function renderExportButtons(){
  const fw = activeFramework;
  document.getElementById("export-mdcp-btn").classList.toggle("hidden", !fw.exports.includes("mdcp-template"));
  document.getElementById("export-csm-btn").classList.toggle("hidden", !fw.exports.includes("csm"));
}

document.getElementById("export-menu-btn").addEventListener("click", (e)=>{
  e.stopPropagation();
  document.getElementById("export-menu").classList.toggle("show");
});
document.querySelectorAll(".export-menu-item").forEach(btn=>{
  btn.addEventListener("click", ()=> document.getElementById("export-menu").classList.remove("show"));
});
document.addEventListener("click", (e)=>{
  const menu = document.getElementById("export-menu");
  if(!menu.contains(e.target) && e.target.id !== "export-menu-btn") menu.classList.remove("show");
});

function renderAll(){
  renderAssessmentBar(); renderHeader(); renderFilterControls(); renderActiveFiltersBar(); renderStatCards(); renderMatrix(); renderRegister(); renderExportButtons(); renderPathwayAnalysis();
  makeChipsFocusable();
  scheduleAutosave();
}

document.getElementById("view-inh").addEventListener("click", ()=>{ viewMode="inh"; activeCell=null; filters.rating=null;
  document.getElementById("view-inh").classList.add("active"); document.getElementById("view-res").classList.remove("active");
  renderAll(); });
document.getElementById("view-res").addEventListener("click", ()=>{ viewMode="res"; activeCell=null; filters.rating=null;
  document.getElementById("view-res").classList.add("active"); document.getElementById("view-inh").classList.remove("active");
  renderAll(); });

/* SPR sub-tab listeners live in the SPR module */

/* =========================================================================
   DRAWER (add / edit risk)
   ========================================================================= */

function taxonomyFieldsHtml(r){
  const fw = activeFramework;
  if(fw.taxonomyType === "factor-indicator"){
    const factors = Object.keys(fw.factorIndicators);
    const factor = r.factor || factors[0];
    const indicators = fw.factorIndicators[factor] || [];
    return `
      <div class="two-col">
        <div class="field"><label>${esc(taxLabels().top)}</label>
          <select id="f-factor">${factors.map(f=>`<option value="${esc(f)}" ${f===factor?"selected":""}>${esc(f)}</option>`).join("")}</select>
        </div>
        <div class="field"><label>${esc(taxLabels().sub)}</label>
          <select id="f-indicator">${indicators.map(i=>`<option value="${esc(i)}" ${i===r.indicator?"selected":""}>${esc(i)}</option>`).join("")}</select>
        </div>
      </div>
      ${fw.domainsEnabled ? `<div class="field"><label>Domains</label><div class="chip-row" id="f-domains">
        ${currentDomainOptions().map(d=>`<span class="chip ${((r.domains||[]).includes(d))?"active":""}" data-domain="${esc(d)}">${esc(d)}</span>`).join("")}
      </div></div>` : ""}
    `;
  }
  // receptor-category taxonomy
  return `<div class="field"><label>Receptor category</label>
    <select id="f-receptor-category">
      ${fw.receptorCategories.map(c=>`<option value="${esc(c)}" ${c===r.receptorCategory?"selected":""}>${esc(c)}</option>`).join("")}
    </select></div>`;
}
function extraFieldsDrawerHtml(r){
  return extraColumns().map(c=>{
    if(c.kind==="outcomes") return outcomePickerHtml(r);
    if(c.kind==="select") return `<div class="field"><label>${esc(c.label)}</label><select id="f-extra-${esc(c.key)}"><option value="">\u2014</option>
      ${c.options.map(o=>`<option value="${esc(o)}" ${r[c.key]===o?"selected":""}>${esc(o)}</option>`).join("")}</select></div>`;
    return `<div class="field"><label>${esc(c.label)}</label><textarea id="f-extra-${esc(c.key)}">${esc(r[c.key])}</textarea></div>`;
  }).join("");
}

function phasesFieldHtml(r){
  const fw = activeFramework;
  if(!fw.phasesEnabled) return "";
  return `<div class="field"><label>${esc(phaseLabelOf())}</label><div class="chip-row" id="f-phases">
    ${fw.phaseOptions.map(p=>`<span class="chip ${((r.phases||[]).includes(p))?"active":""}" data-phase="${esc(p)}">${esc(p)}</span>`).join("")}
  </div></div>`;
}

function openDrawer(id){
  const fw = activeFramework;
  const isNew = id == null;
  const r = isNew ? { id: nextId(), linkId: newLinkId() } : RISKS.find(x=>x.id===id);
  if(!r.linkId) r.linkId = newLinkId();
  const links = isNew ? [] : linkedCopies(r);
  const transferBox = r._needsReview ? `<div class="transfer-box">
      <strong>\u26a0 Transferred from ${esc((r._transfer||{}).fromFramework||"another framework")}${(r._transfer||{}).fromId?` #${esc(String(r._transfer.fromId))}`:""} \u2014 needs review</strong>
      <ul>${(((r._transfer||{}).notes)||[]).map(n=>`<li>${esc(n)}</li>`).join("")}</ul>
      <label class="check-line" style="margin:0;"><input type="checkbox" id="f-reviewed"> Transfer review complete</label>
    </div>` : "";
  const linkBox = links.length ? `<div class="link-box">\u21c4 Linked to ${links.map(l=>`<a href="#" data-openlink="${esc(l.key)}:${l.risk.id}">${esc(shortFwName(l.fw))} #${l.risk.id}</a> <span class="panel-sub">(${esc(l.risk.inhRating||"\u2014")}/${esc(l.risk.resRating||"\u2014")})</span>`).join(", ")}</div>` : "";
  const consOpts = fw.consLevels.map(c=>`<option value="${esc(c)}">${esc(c)}</option>`).join("");
  const likeOpts = fw.likeLevels.map(l=>`<option value="${esc(l)}">${esc(l)}</option>`).join("");

  document.getElementById("drawer").innerHTML = `
    <h3>${isNew ? "New risk" : "Edit risk #"+r.id}</h3>
    <div class="panel-sub" style="margin-bottom:14px;">${isNew ? "Not yet saved" : "Last edited " + esc(formatTimestamp(r._lastEditedAt))}${r._archived ? ' \u00b7 <strong style="color:var(--ink-soft);">Archived</strong>' : ""}</div>
    ${transferBox}${linkBox}
    <div class="field" style="display:flex; align-items:center; gap:8px;">
      <input type="checkbox" id="f-flagged" ${r._flagged?"checked":""} style="width:auto;">
      <label style="margin:0; text-transform:none; font-size:13px; color:var(--ink);">Flag this risk for review</label>
    </div>
    ${taxonomyFieldsHtml(r)}
    <div class="field"><label>Source</label>${richBoxHtml("f-source", r.source, "accent-source")}</div>
    <div class="field"><label>Pathway</label>${richBoxHtml("f-pathway", r.pathway, "accent-pathway")}</div>
    <div class="field"><label>Receptor</label>${richBoxHtml("f-receptor", r.receptor, "accent-receptor")}</div>
    ${phasesFieldHtml(r)}

    <div class="two-col" style="gap:18px;">
      <div>
        <div style="font-size:12px; font-weight:700; color:var(--slr-green-deep); margin-bottom:6px; text-transform:uppercase; letter-spacing:.03em;">Inherent risk</div>
        <div class="field"><label>Consequence</label><select id="f-inhCons"><option value="">\u2014</option>${consOpts}</select></div>
        <div class="field"><label>Likelihood</label><select id="f-inhLike"><option value="">\u2014</option>${likeOpts}</select></div>
        <div class="rating-preview">Rating: <span id="f-inhRating-preview">\u2014</span></div>
      </div>
      <div>
        <div style="font-size:12px; font-weight:700; color:var(--slr-green-deep); margin-bottom:6px; text-transform:uppercase; letter-spacing:.03em;">Residual risk</div>
        <div class="field"><label>Consequence</label><select id="f-resCons"><option value="">\u2014</option>${consOpts}</select></div>
        <div class="field"><label>Likelihood</label><select id="f-resLike"><option value="">\u2014</option>${likeOpts}</select></div>
        <div class="rating-preview">Rating: <span id="f-resRating-preview">\u2014</span></div>
      </div>
    </div>

    <div class="field" style="margin-top:16px;"><label>Risk treatment</label>${richBoxHtml("f-treatment", r.treatment)}</div>
    ${fw.showComments !== false ? `<div class="field"><label>Residual risk comments</label><textarea id="f-comments">${esc(r.comments)}</textarea></div>` : ""}
    ${extraFieldsDrawerHtml(r)}
    ${sprGroupingDrawerHtml(r)}

    <div class="drawer-actions">
      <button class="btn primary" id="drawer-save">Save</button>
      <button class="btn" id="drawer-cancel">Cancel</button>
      <span class="spacer"></span>
      ${!isNew ? '<button class="btn" id="drawer-duplicate">Duplicate</button>' : ""}
      ${!isNew && !r._archived ? '<button class="btn danger" id="drawer-archive">Archive</button>' : ""}
      ${!isNew && r._archived ? '<button class="btn" id="drawer-restore">Restore</button><button class="btn danger" id="drawer-delete">Delete permanently</button>' : ""}
    </div>
  `;

  wireRichToolbars(document.getElementById("drawer"));
  if(fw.outcomesEnabled) renderOutcomeBrowser();
  document.querySelectorAll("#drawer [data-openlink]").forEach(a=>a.addEventListener("click", (e)=>{
    e.preventDefault();
    if(!confirm("Open the linked risk? Unsaved edits in this drawer will be discarded.")) return;
    const [key, rid] = a.dataset.openlink.split(":");
    closeDrawer(); activateAssessment(key); openDrawer(Number(rid));
  }));
  ["f-inhCons","f-inhLike"].forEach(id=>document.getElementById(id).value = r[id==="f-inhCons"?"inhCons":"inhLike"] || "");
  ["f-resCons","f-resLike"].forEach(id=>document.getElementById(id).value = r[id==="f-resCons"?"resCons":"resLike"] || "");
  if(fw.taxonomyType==="factor-indicator"){
    document.getElementById("f-factor").addEventListener("change", (e)=>{
      const indicators = fw.factorIndicators[e.target.value] || [];
      const sel = document.getElementById("f-indicator");
      sel.innerHTML = indicators.map(i=>`<option value="${esc(i)}">${esc(i)}</option>`).join("");
      if(fw.outcomesEnabled) renderOutcomeBrowser();
    });
    if(fw.domainsEnabled){
      document.querySelectorAll("#f-domains .chip").forEach(chip=>{
        chip.addEventListener("click", ()=> chip.classList.toggle("active"));
      });
    }
  }
  if(fw.phasesEnabled){
    document.querySelectorAll("#f-phases .chip").forEach(chip=>{
      chip.addEventListener("click", ()=> chip.classList.toggle("active"));
    });
  }

  const updatePreview = ()=>{
    const inhR = computeRating(fw, document.getElementById("f-inhCons").value, document.getElementById("f-inhLike").value);
    const resR = computeRating(fw, document.getElementById("f-resCons").value, document.getElementById("f-resLike").value);
    document.getElementById("f-inhRating-preview").innerHTML = inhR!=="\u2014" ? `<span class="rating ${inhR}">${inhR}</span>` : "\u2014";
    document.getElementById("f-resRating-preview").innerHTML = resR!=="\u2014" ? `<span class="rating ${resR}">${resR}</span>` : "\u2014";
  };
  ["f-inhCons","f-inhLike","f-resCons","f-resLike"].forEach(id=>document.getElementById(id).addEventListener("change", updatePreview));
  updatePreview();

  document.getElementById("drawer-cancel").addEventListener("click", closeDrawer);
  document.getElementById("drawer-save").addEventListener("click", ()=>{
    const inhCons = document.getElementById("f-inhCons").value, inhLike = document.getElementById("f-inhLike").value;
    const resCons = document.getElementById("f-resCons").value, resLike = document.getElementById("f-resLike").value;
    if((!inhCons || !inhLike) || (!resCons || !resLike)){
      const missing = [];
      if(!inhCons || !inhLike) missing.push("inherent");
      if(!resCons || !resLike) missing.push("residual");
      if(!confirm(`This risk is missing its ${missing.join(" and ")} consequence/likelihood, so that rating will show as "\u2014". Save anyway?`)) return;
    }
    r._flagged = document.getElementById("f-flagged").checked;
    r._lastEditedAt = new Date().toISOString();
    if(fw.taxonomyType==="factor-indicator"){
      r.factor = document.getElementById("f-factor").value;
      r.indicator = document.getElementById("f-indicator").value;
      if(fw.domainsEnabled){
        r.domains = [...document.querySelectorAll("#f-domains .chip.active")].map(c=>c.dataset.domain);
      }
    } else {
      r.receptorCategory = document.getElementById("f-receptor-category").value;
    }
    r.source = sanitizeRichHtml(document.getElementById("f-source").innerHTML);
    r.pathway = sanitizeRichHtml(document.getElementById("f-pathway").innerHTML);
    r.receptor = sanitizeRichHtml(document.getElementById("f-receptor").innerHTML);
    if(fw.phasesEnabled){
      r.phases = [...document.querySelectorAll("#f-phases .chip.active")].map(c=>c.dataset.phase);
    }
    r.inhCons = inhCons; r.inhLike = inhLike;
    r.inhRating = computeRating(fw, r.inhCons, r.inhLike);
    r.treatment = sanitizeRichHtml(document.getElementById("f-treatment").innerHTML);
    r.resCons = resCons; r.resLike = resLike;
    r.resRating = computeRating(fw, r.resCons, r.resLike);
    r.comments = fw.showComments !== false ? document.getElementById("f-comments").value : r.comments;
    extraColumns(fw).forEach(c=>{
      if(c.kind==="outcomes") r.outcomeCodes = readOutcomePicker();
      else r[c.key] = document.getElementById("f-extra-"+c.key).value;
    });
    rdReadSprFields(r);
    const reviewed = document.getElementById("f-reviewed");
    if(reviewed && reviewed.checked){ r._needsReview = false; if(r._transfer) r._transfer.reviewedAt = new Date().toISOString(); }
    if(isNew) RISKS.push(r);
    // Keep linked copies in other frameworks in step with the shared descriptive text.
    const sharedKeys = ["source","pathway","receptor","treatment"];
    const stale = links.filter(l=>sharedKeys.some(k=>(l.risk[k]||"") !== (r[k]||"")));
    if(stale.length && confirm(`Also update Source / Pathway / Receptor / treatment in the linked ${stale.map(l=>shortFwName(l.fw)+" #"+l.risk.id).join(", ")}? (Their ratings and classification are left alone.)`)){
      stale.forEach(l=>{ sharedKeys.forEach(k=>{ l.risk[k] = r[k]; }); l.risk._lastEditedAt = new Date().toISOString(); });
    }
    closeDrawer();
    renderAll();
    scheduleAutosave();
  });
  if(!isNew){
    document.getElementById("drawer-duplicate").addEventListener("click", ()=>{
      const copy = JSON.parse(JSON.stringify(r));
      copy.id = nextId();
      copy.linkId = newLinkId();
      delete copy._transfer; copy._needsReview = false;
      copy._flagged = false;
      copy._archived = false;
      copy._lastEditedAt = new Date().toISOString();
      RISKS.push(copy);
      closeDrawer();
      renderAll();
      scheduleAutosave();
      openDrawer(copy.id);
    });
    const archiveBtn = document.getElementById("drawer-archive");
    if(archiveBtn) archiveBtn.addEventListener("click", ()=>{
      r._archived = true;
      r._lastEditedAt = new Date().toISOString();
      closeDrawer();
      renderAll();
      scheduleAutosave();
    });
    const restoreBtn = document.getElementById("drawer-restore");
    if(restoreBtn) restoreBtn.addEventListener("click", ()=>{
      r._archived = false;
      r._lastEditedAt = new Date().toISOString();
      closeDrawer();
      renderAll();
      scheduleAutosave();
    });
    const deleteBtn = document.getElementById("drawer-delete");
    if(deleteBtn) deleteBtn.addEventListener("click", ()=>{
      if(!confirm("Permanently delete this risk? This can't be undone.")) return;
      RISKS = RISKS.filter(x=>x.id!==r.id);
      closeDrawer();
      renderAll();
      scheduleAutosave();
    });
  }

  document.getElementById("overlay").classList.add("show");
  makeChipsFocusable(document.getElementById("drawer"));
  const firstField = document.getElementById(fw.taxonomyType==="factor-indicator" ? "f-factor" : "f-receptor-category");
  if(firstField) firstField.focus();
}
function closeDrawer(){ document.getElementById("overlay").classList.remove("show"); }
document.getElementById("add-risk-btn").addEventListener("click", ()=>openDrawer(null));
document.getElementById("flag-filter-chip").addEventListener("click", ()=>{
  showFlaggedOnly = !showFlaggedOnly;
  document.getElementById("flag-filter-chip").classList.toggle("active", showFlaggedOnly);
  renderAll();
});
document.getElementById("outcome-lib-btn").addEventListener("click", ()=>renderOutcomeManager());
document.getElementById("review-filter-chip").addEventListener("click", ()=>{
  showNeedsReview = !showNeedsReview;
  renderAll();
});
document.getElementById("archived-filter-chip").addEventListener("click", ()=>{
  showArchived = !showArchived;
  document.getElementById("archived-filter-chip").classList.toggle("active", showArchived);
  renderAll();
});
// Deliberately no click-outside-to-close here: the risk drawer can hold a lot of
// typed/edited work, and an accidental click on the backdrop shouldn't discard it.
// Save, Cancel, Archive, Restore or Delete (the drawer's own buttons) are the only way out.

/* =========================================================================
   ASSESSMENTS (one project \u2192 several framework assessments)
   A project can hold one assessment per framework (e.g. a DWER works approval
   assessment and an MDCP assessment). Risks carry a linkId that is shared by
   their copies in other frameworks, so a DWER risk transferred into the MDCP
   assessment stays linked to it: shared text can be pushed across, the SPR
   groupings (which key off linkId) carry over, and nothing is retyped.
   ========================================================================= */
let ASSESSMENTS = {}; // frameworkKey -> {frameworkId, customFramework?, label, risks}
let showNeedsReview = false;

function newLinkId(){ return "L" + Date.now().toString(36) + Math.random().toString(36).slice(2,8); }
function ensureLinkIds(risks){ (risks||[]).forEach(r=>{ if(!r.linkId) r.linkId = newLinkId(); }); return risks; }
function frameworkFor(key){
  if(FRAMEWORKS[key]) return FRAMEWORKS[key];
  const a = ASSESSMENTS[key];
  return (a && a.customFramework) ? a.customFramework : null;
}
function shortFwName(fw){
  return ({mdcp:"MDCP", dwer:"DWER", "epa-emp":"EP Act Part IV EMP", "epbc-emp":"EPBC EMP"})[fw.id] || fw.name;
}
function stashActive(){
  ASSESSMENTS[activeFramework.id] = {
    frameworkId: activeFramework.id,
    customFramework: (activeFramework.id in FRAMEWORKS) ? undefined : activeFramework,
    label: assessmentLabel,
    risks: RISKS
  };
}
function resetViewState(){
  activeCell = null; themeFilter = null; showFlaggedOnly = false; showArchived = false; showNeedsReview = false;
  filters = { search:"", taxonomy:"All", phases:[], domains:[], rating:null };
}
function syncFrameworkSelect(){
  const sel = document.getElementById("framework-select");
  const custom = frameworkFor("custom");
  [...sel.options].filter(o=>o.value==="custom").forEach(o=>o.remove());
  const opt = document.createElement("option");
  opt.value = "custom"; opt.textContent = custom ? custom.name + " (custom)" : "Custom (load file)\u2026";
  sel.appendChild(opt);
  if(custom){
    const loadOpt = document.createElement("option");
    [...sel.options].filter(o=>o.value==="custom-load").forEach(o=>o.remove());
    loadOpt.value = "custom-load"; loadOpt.textContent = "Load a different custom framework\u2026";
    sel.appendChild(loadOpt);
  } else {
    [...sel.options].filter(o=>o.value==="custom-load").forEach(o=>o.remove());
  }
  sel.value = activeFramework.id in FRAMEWORKS ? activeFramework.id : "custom";
}
function activateAssessment(key){
  stashActive();
  const fw = frameworkFor(key);
  if(!fw) return;
  if(!ASSESSMENTS[key]) ASSESSMENTS[key] = { frameworkId:key, customFramework: key in FRAMEWORKS ? undefined : fw, label:"", risks:[] };
  activeFramework = fw;
  RISKS = ensureLinkIds(ASSESSMENTS[key].risks);
  assessmentLabel = ASSESSMENTS[key].label || "";
  resetViewState();
  syncFrameworkSelect();
  renderAll();
}
function linkedCopies(r){
  const out = [];
  Object.entries(ASSESSMENTS).forEach(([key,a])=>{
    if(key === activeFramework.id) return;
    (a.risks||[]).forEach(x=>{ if(x.linkId && x.linkId===r.linkId) out.push({key, risk:x, fw: frameworkFor(key)}); });
  });
  return out;
}

function renderAssessmentBar(){
  stashActive();
  const el = document.getElementById("assess-bar");
  const keys = Object.keys(ASSESSMENTS).filter(k=> k===activeFramework.id || (ASSESSMENTS[k].risks||[]).length);
  const activeCount = r => (r||[]).filter(x=>!x._archived).length;
  el.innerHTML = `<span class="flabel">Assessments in this project</span>
    <div class="assess-tabs">${keys.map(k=>{ const fw = frameworkFor(k); if(!fw) return "";
      const a = ASSESSMENTS[k]; const review = (a.risks||[]).filter(x=>x._needsReview && !x._archived).length;
      return `<button class="assess-tab ${k===activeFramework.id?"active":""}" data-assess="${esc(k)}" type="button">
        ${esc(shortFwName(fw))} <span class="assess-count">${activeCount(a.risks)}</span>${review?`<span class="assess-review" title="${review} transferred risk(s) still need review">\u26a0 ${review}</span>`:""}</button>`;
    }).join("")}</div>
    <button class="btn" id="transfer-btn" type="button" ${RISKS.some(r=>!r._archived) ? "" : "disabled"}>\u21c4 Transfer risks to another framework\u2026</button>`;
  el.querySelectorAll("[data-assess]").forEach(b=>b.addEventListener("click", ()=>{ if(b.dataset.assess!==activeFramework.id) activateAssessment(b.dataset.assess); }));
  document.getElementById("transfer-btn").addEventListener("click", ()=>openTransferDialog(null, {}));
}

/* ---- Mapping one risk across frameworks ---------------------------------- */
const PHASE_ALIASES = {
  "construction":["construction"],
  "commissioning":["commissioning","operation","operations"],
  "operation":["operation","operations"], "operations":["operation","operations"],
  "care & maintenance":["care & maintenance","care and maintenance","operation"],
  "care and maintenance":["care & maintenance","care and maintenance","operation"],
  "decommissioning":["decommissioning","closure / rehabilitation","closure"],
  "closure":["closure","closure / rehabilitation","decommissioning"],
  "closure / rehabilitation":["closure / rehabilitation","closure","decommissioning"],
  "rehabilitation":["closure / rehabilitation","closure","decommissioning"]
};
function mapPhase(p, toOptions){
  const lc = (p||"").toLowerCase();
  const exact = toOptions.find(o=>o.toLowerCase()===lc);
  if(exact) return exact;
  for(const alias of (PHASE_ALIASES[lc]||[])){ const hit = toOptions.find(o=>o.toLowerCase()===alias); if(hit) return hit; }
  return null;
}
function mapLevel(val, fromLevels, toLevels){
  if(!val) return {v:"", changed:false};
  const exact = toLevels.find(l=>l.toLowerCase()===val.toLowerCase());
  if(exact) return {v:exact, changed:false};
  const i = fromLevels.indexOf(val);
  if(i<0) return {v:"", changed:true};
  const j = fromLevels.length===1 ? 0 : Math.round(i*(toLevels.length-1)/(fromLevels.length-1));
  return {v:toLevels[j], changed:true};
}
// Keyword hints for suggesting a taxonomy value in the target framework. subject words must hit
// for a value to score at all; qualifier words then separate e.g. water quality from quantity.
const WATER_S = ["surface water","creek","river","drainage line","stormwater","storm water","runoff","wetland","watercourse","ephemeral"];
const GW_S = ["groundwater","ground water","aquifer","seepage","water table","bore"];
const QUAL_Q = ["contamin","quality","turbid","sediment","hydrocarbon","spill","pollut","salin","metal","acid","leach","cyanide"];
const FAUNA_S = ["fauna","animal","bird","bat","mammal","reptile","wildlife","troglofauna","stygofauna","vertebrate","invertebrate"];
const FLORA_S = ["vegetation","flora","plant","shrub","tree","understorey"];
const THREAT_Q = ["threatened","endangered","vulnerable","listed","conservation significant","epbc","mnes"];
const TAX_HINTS = {
  // MDCP
  "ecosystem function":{s:["ecosystem","ecological function","habitat connectivity"]},
  "flora and vegetation":{s:FLORA_S},
  "fauna":{s:FAUNA_S},
  "environmental threats":{s:["weed","pathogen","dieback","feral","pest","introduced species"]},
  "surface water quality":{s:WATER_S, q:QUAL_Q},
  "surface water quantity":{s:WATER_S, q:["flow","flood","diversion","ponding","shadow","quantity","hydrology","drainage pattern"]},
  "ground water quality":{s:GW_S, q:QUAL_Q},
  "ground water quantity":{s:GW_S, q:["drawdown","dewater","mound","level","abstraction","recharge","quantity"]},
  "soil resources":{s:["soil","topsoil","growth medium","subsoil"]},
  "land contamination":{s:["land","soil","ground"], q:["contamin","hydrocarbon","spill","chemical","acid","paf","amd","residual material"]},
  "landscape":{s:["landscape","landform","visual","amenity"]},
  "physical safety":{s:["safety","void","abandonment","public access","injury to people"]},
  "post mining land use":{s:["post mining land use","post-mining land use","land use","pmlu","pastoral"]},
  "physical and geotechnical stability":{s:["stability","geotechnical","slump","erosion","collapse","embankment","slope","structural failure"]},
  "rehabilitation and mine closure":{s:["closure","rehabilitat","completion criteria","post mining","post-mining","decommission"]},
  "inland waters":{s:[...WATER_S, ...GW_S, "water resource"]},
  "flora, vegetation and fauna":{s:[...FLORA_S, ...FAUNA_S]},
  "terrestrial environmental quality":{s:["soil","land","topsoil","landform"]},
  // DWER receptor categories
  "public health and amenity":{s:["resident","community","public","human","amenity","neighbour","town","odour","noise","health"]},
  "environment":{s:["water","soil","vegetation","fauna","flora","habitat","land","ecosystem","groundwater","environment"]},
  // EPA WA factors
  "benthic communities and habitats":{s:["benthic","seagrass","coral","reef","macroalgae"]},
  "coastal processes":{s:["coastal","shoreline","beach","dune","sediment transport"]},
  "marine environmental quality":{s:["marine","seawater","estuar","ocean"], q:QUAL_Q},
  "marine fauna":{s:["marine fauna","turtle","dugong","whale","dolphin","fish"]},
  "landforms":{s:["landform","ridge","breakaway","range","outcrop"]},
  "subterranean fauna":{s:["subterranean","troglofauna","stygofauna","troglo","stygo"]},
  "terrestrial fauna":{s:FAUNA_S},
  "air quality":{s:["dust","air","emission","particulate","odour"]},
  "greenhouse gas emissions":{s:["greenhouse","ghg","carbon","scope 1","methane"]},
  "social surroundings":{s:["heritage","cultural","aboriginal","amenity","noise","visual","light","social"]},
  "human health":{s:["human health","resident","community","public","radiation","exposure"]},
  // EPBC MNES
  "threatened fauna":{s:THREAT_Q, q:FAUNA_S},
  "threatened flora":{s:THREAT_Q, q:FLORA_S},
  "threatened ecological community":{s:["threatened ecological","ecological community","tec"]},
  "migratory species":{s:["migratory","shorebird","wader"]},
  "ramsar wetland":{s:["ramsar"]},
  "world heritage values":{s:["world heritage"]},
  "national heritage values":{s:["national heritage"]},
  "commonwealth marine environment":{s:["commonwealth marine","commonwealth waters"]},
  "gbrmp values":{s:["great barrier reef","gbr"]},
  "nuclear action (incl. uranium mining)":{s:["uranium","nuclear","radioactive waste"]},
  "water resource":{s:["coal seam","large coal"]},
  "commonwealth land":{s:["commonwealth land","defence land"]}
};
// Short keywords ("tec", "gbr", "bat") only count as whole words so they don't match inside
// longer words ("protection", "bath").
function hasKw(text, k){ return k.length <= 4 ? new RegExp("\\b"+k.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+"s?\\b").test(text) : text.includes(k); }
function hintScore(name, text){
  const lname = (name||"").toLowerCase();
  const h = TAX_HINTS[lname];
  const nameHit = text.includes(lname) ? 3 : 0;
  if(!h) return nameHit;
  // With hints defined, the subject words decide relevance \u2014 e.g. "water resource" (the EPBC
  // CSG / large-coal trigger) must not fire just because a risk mentions surface water resources.
  const sHits = (h.s||[]).filter(k=>hasKw(text,k)).length;
  if(!sHits) return 0;
  return nameHit + 2*sHits + (h.q||[]).filter(k=>hasKw(text,k)).length;
}
function suggestTaxonomy(r, toFw){
  const rec = richHtmlToPlainText(r.receptor).toLowerCase();
  const rest = (richHtmlToPlainText(r.pathway)+" "+richHtmlToPlainText(r.source)).toLowerCase();
  const old = [r.factor, r.indicator, r.receptorCategory].filter(Boolean).join(" ").toLowerCase();
  const closureish = (r.phases||[]).some(p=>/closure|decommission|rehab/i.test(p));
  const score = name => 2*hintScore(name, rec) + hintScore(name, rest) + hintScore(name, old);
  if(toFw.taxonomyType === "factor-indicator"){
    let best = null, bestScore = 0;
    Object.entries(toFw.factorIndicators).forEach(([factor, inds])=>{
      let fScore = score(factor);
      if(/closure/i.test(factor) && closureish) fScore += 2;
      inds.forEach(ind=>{
        const iScore = score(ind);
        if(!iScore) return;
        const total = iScore*2 + fScore;
        if(total > bestScore){ bestScore = total; best = {factor, indicator:ind}; }
      });
    });
    if(best) return {...best, mapped:true};
    const f0 = Object.keys(toFw.factorIndicators)[0];
    return {factor:f0, indicator:toFw.factorIndicators[f0][0], mapped:false};
  }
  let best = null, bestScore = 0;
  toFw.receptorCategories.forEach(c=>{ const sc = score(c); if(sc>bestScore){ bestScore = sc; best = c; } });
  return {receptorCategory: best || toFw.receptorCategories[0], mapped: !!best};
}
function mapRiskToFramework(r, fromFw, toFw){
  const notes = [];
  const out = {
    linkId: r.linkId,
    source: r.source, pathway: r.pathway, receptor: r.receptor, treatment: r.treatment, comments: r.comments,
    sourceGroup: r.sourceGroup, pathwayGroup: r.pathwayGroup, receptorGroup: r.receptorGroup, impact: r.impact,
    relationshipStatus: r.relationshipStatus, confidence: r.confidence, reviewStatus: r.reviewStatus, evidenceReference: r.evidenceReference, controlPoint: r.controlPoint,
    sprIds: r.sprIds ? Object.assign({}, r.sprIds) : undefined, origin: r.origin, riskStatus: r.riskStatus, riskApprovedBy: r.riskApprovedBy, riskApprovedAt: r.riskApprovedAt,
    sprOrigin: r.sprOrigin, sprApprovedBy: r.sprApprovedBy, sprApprovedAt: r.sprApprovedAt,
    _flagged: !!r._flagged, _needsReview: true
  };
  const tax = suggestTaxonomy(r, toFw);
  if(toFw.taxonomyType==="factor-indicator"){ out.factor = tax.factor; out.indicator = tax.indicator; }
  else out.receptorCategory = tax.receptorCategory;
  const tl = taxLabels(toFw);
  const tlName = toFw.taxonomyType==="factor-indicator" ? `${tl.top} / ${tl.sub}` : tl.top;
  notes.push(tax.mapped ? `${tlName} suggested from the risk wording \u2014 check it.` : `No ${tl.sub.toLowerCase()} match found \u2014 defaulted to the first option; set it manually or archive if not relevant.`);
  if(toFw.phasesEnabled){
    const src = r.phases || [];
    const mapped = [...new Set(src.map(p=>mapPhase(p, toFw.phaseOptions)).filter(Boolean))];
    const lost = src.filter(p=>!mapPhase(p, toFw.phaseOptions));
    out.phases = mapped;
    if(!src.length) notes.push(`No phases in the source assessment \u2014 set ${phaseLabelOf(toFw).toLowerCase()}.`);
    const renamed = src.filter(p=>{ const m = mapPhase(p, toFw.phaseOptions); return m && m.toLowerCase()!==p.toLowerCase(); });
    if(renamed.length) notes.push(`Phases mapped: ${renamed.map(p=>`${p} \u2192 ${mapPhase(p, toFw.phaseOptions)}`).join(", ")}.`);
    if(lost.length) notes.push(`Phases with no equivalent dropped: ${lost.join(", ")}.`);
    const uncovered = toFw.phaseOptions.filter(p=>!mapped.includes(p));
    if(uncovered.length && src.length) notes.push(`Consider whether this pathway also applies in: ${uncovered.join(", ")}.`);
  }
  if(toFw.domainsEnabled && Array.isArray(r.domains)) out.domains = [...r.domains];
  let levelChanged = false;
  [["inhCons","consLevels"],["resCons","consLevels"],["inhLike","likeLevels"],["resLike","likeLevels"]].forEach(([k,lv])=>{
    const m = mapLevel(r[k], fromFw[lv], toFw[lv]); out[k] = m.v; if(m.changed) levelChanged = true;
  });
  out.inhRating = computeRating(toFw, out.inhCons, out.inhLike);
  out.resRating = computeRating(toFw, out.resCons, out.resLike);
  if(levelChanged) notes.push("Consequence/likelihood scales differ \u2014 levels mapped by position; re-check against the target descriptors.");
  if(r.inhRating && out.inhRating !== r.inhRating) notes.push(`Inherent rating ${r.inhRating} \u2192 ${out.inhRating} under the target matrix.`);
  if(r.resRating && out.resRating !== r.resRating) notes.push(`Residual rating ${r.resRating} \u2192 ${out.resRating} under the target matrix.`);
  extraColumns(toFw).forEach(c=>{
    if(c.kind==="outcomes"){ if(Array.isArray(r.outcomeCodes)) out.outcomeCodes = [...r.outcomeCodes]; }
    else if(r[c.key] !== undefined) out[c.key] = r[c.key];
  });
  if(toFw.outcomesEnabled && !(out.outcomeCodes||[]).length) notes.push("Select the standard environmental / closure outcome(s) that apply.");
  if(toFw.offsetsEnabled && !out.residualSignificance) notes.push("Record whether the residual impact is significant (offset trigger).");
  out._transfer = { fromFramework: fromFw.name, fromKey: fromFw.id, fromId: r.id, at: new Date().toISOString(), notes };
  out._lastEditedAt = new Date().toISOString();
  return out;
}

/* ---- Transfer dialog ----------------------------------------------------- */
function openTransferDialog(presetTarget, opts){
  stashActive();
  opts = opts || {};
  const allTargets = [...Object.keys(FRAMEWORKS), ...(frameworkFor("custom") ? ["custom"] : [])];
  const sources = Object.keys(ASSESSMENTS).filter(k=>(ASSESSMENTS[k].risks||[]).some(r=>!r._archived));
  let fromKey = sources.includes(activeFramework.id) ? activeFramework.id : sources[0];
  let toKey = presetTarget || allTargets.find(k=>k!==fromKey);
  let updateLinked = false;
  let includeArchived = false;
  let excluded = new Set();
  const drawer = document.getElementById("transfer-drawer");
  function candidates(){
    const fromFw = frameworkFor(fromKey), toFw = frameworkFor(toKey);
    const target = (ASSESSMENTS[toKey] && ASSESSMENTS[toKey].risks) || [];
    const targetLinks = new Set(target.map(x=>x.linkId));
    return (ASSESSMENTS[fromKey].risks||[]).filter(r=>includeArchived || !r._archived).map(r=>{
      const mapped = mapRiskToFramework(ensureLinkIds([r])[0], fromFw, toFw);
      const linked = targetLinks.has(r.linkId);
      return {r, mapped, linked, taxMapped: !/No .* match/.test(mapped._transfer.notes[0])};
    });
  }
  function draw(){
    const fromFw = frameworkFor(fromKey), toFw = frameworkFor(toKey);
    const list = candidates();
    if(toKey==="epbc-emp" && !drawer.dataset.touched){ list.forEach(c=>{ if(!c.taxMapped) excluded.add(c.r.linkId); }); }
    const tl = taxLabels(toFw);
    const newOnes = list.filter(c=>!c.linked && !excluded.has(c.r.linkId));
    const linkedOnes = list.filter(c=>c.linked);
    drawer.innerHTML = `
      <h3>Transfer risks between frameworks</h3>
      <p class="panel-sub">Copies risks into another framework's assessment in this project, keeping them linked. Source, Pathway, Receptor,
        treatment and phases carry over; ${esc(toFw.taxonomyType==="factor-indicator" ? (tl.top+" / "+tl.sub).toLowerCase() : tl.top.toLowerCase())} and ratings are suggested and every transferred risk is marked
        <strong>\u26a0 Needs review</strong> until you confirm it.</p>
      <div class="two-col">
        <div class="field"><label>From</label><select id="tr-from">${sources.map(k=>`<option value="${esc(k)}" ${k===fromKey?"selected":""}>${esc(frameworkFor(k).name)}</option>`).join("")}</select></div>
        <div class="field"><label>To</label><select id="tr-to">${allTargets.filter(k=>k!==fromKey).map(k=>`<option value="${esc(k)}" ${k===toKey?"selected":""}>${esc(frameworkFor(k).name)}${(ASSESSMENTS[k]&&ASSESSMENTS[k].risks.length)?` (${ASSESSMENTS[k].risks.length} existing)`:""}</option>`).join("")}</select></div>
      </div>
      <label class="check-line"><input type="checkbox" id="tr-archived" ${includeArchived?"checked":""}> Include archived risks</label>
      ${linkedOnes.length ? `<label class="check-line"><input type="checkbox" id="tr-update" ${updateLinked?"checked":""}> Update the ${linkedOnes.length} already-linked risk${linkedOnes.length===1?"":"s"} with the latest Source / Pathway / Receptor / treatment text (their ratings are left alone)</label>` : ""}
      <div class="panel-sub" style="margin:10px 0 6px;"><strong>${newOnes.length}</strong> new risk${newOnes.length===1?"":"s"} will be added${linkedOnes.length?` \u00b7 ${linkedOnes.length} already in the target`:""}. Untick any that don't belong in the ${esc(shortFwName(toFw))} assessment.
        <a href="#" id="tr-all">Tick all</a> \u00b7 <a href="#" id="tr-none">Untick all</a></div>
      <div class="transfer-list">${list.map(c=>{
        const tax = toFw.taxonomyType==="factor-indicator" ? `${c.mapped.factor} \u203a ${c.mapped.indicator}` : c.mapped.receptorCategory;
        return `<label class="transfer-row ${c.linked?"linked":""}">
          <input type="checkbox" data-tr="${esc(c.r.linkId)}" ${c.linked?"disabled checked":(excluded.has(c.r.linkId)?"":"checked")}>
          <span><strong>#${c.r.id}</strong> ${esc(richHtmlToPlainText(c.r.source).slice(0,70))}
            <span class="panel-sub">\u2192 ${c.linked?"already linked":esc(tax)}${!c.linked && !c.taxMapped?' <span style="color:var(--high);">(no match)</span>':""}
            \u00b7 ${esc(c.mapped.inhRating||"\u2014")}/${esc(c.mapped.resRating||"\u2014")}</span></span>
        </label>`; }).join("")}</div>
      <div class="drawer-actions">
        <button class="btn primary" id="tr-go" type="button" ${(newOnes.length || (updateLinked && linkedOnes.length))?"":"disabled"}>Transfer ${newOnes.length} &amp; open ${esc(shortFwName(toFw))}</button>
        ${opts.fromSelect ? `<button class="btn" id="tr-blank" type="button">Start a blank ${esc(shortFwName(toFw))} assessment</button>` : ""}
        <button class="btn" id="tr-cancel" type="button">Cancel</button>
      </div>`;
    document.getElementById("tr-from").addEventListener("change", e=>{ fromKey = e.target.value; if(toKey===fromKey) toKey = allTargets.find(k=>k!==fromKey); excluded = new Set(); delete drawer.dataset.touched; draw(); });
    document.getElementById("tr-to").addEventListener("change", e=>{ toKey = e.target.value; excluded = new Set(); delete drawer.dataset.touched; draw(); });
    document.getElementById("tr-archived").addEventListener("change", e=>{ includeArchived = e.target.checked; draw(); });
    const upd = document.getElementById("tr-update"); if(upd) upd.addEventListener("change", e=>{ updateLinked = e.target.checked; draw(); });
    drawer.querySelectorAll("[data-tr]").forEach(cb=>cb.addEventListener("change", ()=>{
      drawer.dataset.touched = "1";
      if(cb.checked) excluded.delete(cb.dataset.tr); else excluded.add(cb.dataset.tr); draw();
    }));
    document.getElementById("tr-all").addEventListener("click", e=>{ e.preventDefault(); drawer.dataset.touched = "1"; excluded = new Set(); draw(); });
    document.getElementById("tr-none").addEventListener("click", e=>{ e.preventDefault(); drawer.dataset.touched = "1"; excluded = new Set(list.filter(c=>!c.linked).map(c=>c.r.linkId)); draw(); });
    document.getElementById("tr-cancel").addEventListener("click", closeTransferDialog);
    const blank = document.getElementById("tr-blank"); if(blank) blank.addEventListener("click", ()=>{ closeTransferDialog(); activateAssessment(toKey); });
    document.getElementById("tr-go").addEventListener("click", ()=>{
      const toFw = frameworkFor(toKey);
      if(!ASSESSMENTS[toKey]) ASSESSMENTS[toKey] = { frameworkId:toKey, customFramework: toKey in FRAMEWORKS ? undefined : toFw, label:"", risks:[] };
      const target = ASSESSMENTS[toKey].risks;
      let nextTargetId = target.reduce((m,x)=>Math.max(m,x.id),0) + 1;
      let added = 0, updated = 0;
      list.forEach(c=>{
        if(c.linked){
          if(!updateLinked) return;
          const t = target.find(x=>x.linkId===c.r.linkId);
          ["source","pathway","receptor","treatment"].forEach(k=>{ t[k] = c.r[k]; });
          t._needsReview = true; t._lastEditedAt = new Date().toISOString();
          t._transfer = Object.assign({}, t._transfer||{}, {notes:[...(((t._transfer||{}).notes)||[]), `Shared text updated from ${fromFw.name} #${c.r.id}.`]});
          updated++;
          return;
        }
        if(excluded.has(c.r.linkId)) return;
        const m = c.mapped; m.id = nextTargetId++; target.push(m); added++;
      });
      closeTransferDialog();
      activateAssessment(toKey);
      showNeedsReview = true;
      renderAll();
      alert(`${added} risk${added===1?"":"s"} transferred into ${toFw.name}${updated?`, ${updated} linked risk${updated===1?"":"s"} updated`:""}.\n\nThey're marked "\u26a0 Needs review" \u2014 the register is filtered to them now. Open each one to confirm the suggested classification, ratings and phases, then tick "Transfer review complete".`);
    });
  }
  draw();
  document.getElementById("transfer-overlay").classList.add("show");
}
function closeTransferDialog(){ document.getElementById("transfer-overlay").classList.remove("show"); }

/* ---- Project (de)serialisation ------------------------------------------- */
function serializeProject(){
  stashActive();
  const assessments = {};
  Object.entries(ASSESSMENTS).forEach(([k,a])=>{ if(k===activeFramework.id || (a.risks||[]).length) assessments[k] = a; });
  return { formatVersion: 2, activeFrameworkId: activeFramework.id, project, assessments };
}
function applyLoadedData(data){
  let assessments = {}, activeKey;
  if(data.assessments && typeof data.assessments === "object"){
    Object.entries(data.assessments).forEach(([k,a])=>{
      if(!a || !Array.isArray(a.risks)) return;
      let customFramework;
      if(!FRAMEWORKS[k]){
        if(!a.customFramework) return;
        customFramework = validateFrameworkConfig(a.customFramework); customFramework.id = "custom"; k = "custom";
      }
      assessments[k] = { frameworkId:k, customFramework, label:a.label||"", risks: ensureLinkIds(a.risks) };
    });
    activeKey = assessments[data.activeFrameworkId] ? data.activeFrameworkId : Object.keys(assessments)[0];
    if(!activeKey) throw new Error("No assessments found in file.");
  } else {
    // formatVersion 1: a single framework + risks
    if(!Array.isArray(data.risks)) throw new Error("No risks array found in file.");
    let fw;
    if(data.frameworkId === "custom" && data.customFramework){ fw = validateFrameworkConfig(data.customFramework); fw.id = "custom"; }
    else if(FRAMEWORKS[data.frameworkId]) fw = FRAMEWORKS[data.frameworkId];
    else throw new Error(`Unknown framework "${data.frameworkId}" \u2014 no matching preset and no embedded custom framework.`);
    assessments[fw.id] = { frameworkId: fw.id, customFramework: fw.id in FRAMEWORKS ? undefined : fw, label: data.assessmentLabel||"", risks: ensureLinkIds(data.risks) };
    activeKey = fw.id;
  }
  ASSESSMENTS = assessments;
  project = normalizeProject(data.project);
  activeFramework = frameworkFor(activeKey);
  RISKS = ASSESSMENTS[activeKey].risks;
  assessmentLabel = ASSESSMENTS[activeKey].label || "";
  document.getElementById("project-name").value = project.name || "";
  resetViewState();
  syncFrameworkSelect();
}

/* ---- Unsaved-changes tracking -------------------------------------------- */
let lastSavedJson = null;
function currentJson(){ return JSON.stringify(serializeProject()); }
function markSaved(){ lastSavedJson = currentJson(); }
function hasUnsavedChanges(){
  const hasContent = Object.values(ASSESSMENTS).some(a=>(a.risks||[]).length) || RISKS.length;
  if(!hasContent && lastSavedJson === null) return false;
  return currentJson() !== lastSavedJson || document.getElementById("overlay").classList.contains("show");
}
window.addEventListener("beforeunload", (e)=>{
  if(!hasUnsavedChanges()) return;
  e.preventDefault();
  e.returnValue = ""; // browsers show their own generic "Leave site?" wording
  return "";
});

/* =========================================================================
   OUTCOMES LIBRARY (MDCP standard environmental & closure outcomes)
   The library is stored on the project (so it travels in the session file
   and is shared by every assessment in the project) and can also be kept as
   a per-browser default so new projects start with it. Nothing is hard-coded:
   paste the outcomes table from the MDCP guideline (Appendix 5), or load a
   library JSON someone in the team has already built, and it's parsed into
   {code, type, group, text} entries that risks then reference by code.
   ========================================================================= */
const OUTCOME_LIB_KEY = "riskDashboardOutcomeLibrary_v1";
function outcomeLibrary(){ return Array.isArray(project.outcomeLibrary) ? project.outcomeLibrary : []; }
function findOutcome(code){ return outcomeLibrary().find(o=>o.code===code); }
function outcomeCodesText(r, full){
  const codes = r.outcomeCodes || [];
  if(!full) return codes.join(", ");
  return codes.map(c=>{ const o = findOutcome(c); return o ? `${c} ${o.text}` : c; }).join("\n");
}
function loadDefaultOutcomeLibrary(){
  if(!AUTOSAVE_ENABLED) return null;
  try{ const raw = localStorage.getItem(OUTCOME_LIB_KEY); return raw ? JSON.parse(raw) : null; }catch(e){ return null; }
}
function ensureOutcomeLibrary(){
  if(!Array.isArray(project.outcomeLibrary) || !project.outcomeLibrary.length){
    const def = loadDefaultOutcomeLibrary();
    project.outcomeLibrary = (Array.isArray(def) && def.length) ? JSON.parse(JSON.stringify(def)) : (project.outcomeLibrary || []);
  }
}
function guessOutcomeType(code){ return /^C/i.test(code) ? "closure" : "environmental"; }
// Code prefixes as used in DMPE's standard outcome numbering (e.g. W2.0, F5.0, T4.0, C1.0) \u2014
// only used to group outcomes and to star the ones matching a risk's factor in the picker.
const OUTCOME_PREFIX_GROUPS = { W:"Inland waters", F:"Flora, vegetation and fauna", T:"Terrestrial environmental quality", C:"Rehabilitation and Mine Closure" };
function guessOutcomeGroup(code){ const m = /^([A-Z])/i.exec(code||""); return m ? (OUTCOME_PREFIX_GROUPS[m[1].toUpperCase()]||"") : ""; }
const OUTCOME_LINE_RE = /^\s*([A-Z]{1,3}\d{1,3}(?:\.\d{1,3})?)[.):]?\s+(.+)$/;
// Scan risks' free-text outcome fields (every assessment) for coded standard outcomes such as
// "W2.0 Surface water managed \u2026". Returns the distinct outcomes plus a per-risk split of
// codes vs remaining site-specific text, so a register built before the picker existed can be
// converted without retyping.
function harvestOutcomesFromRisks(){
  stashActive();
  const found = new Map(); const perRisk = [];
  Object.entries(ASSESSMENTS).forEach(([key,a])=>{
    const fw = frameworkFor(key); if(!fw || !fw.outcomesEnabled) return;
    (a.risks||[]).forEach(r=>{
      const lines = String(r.outcome||"").split(/\r?\n/);
      const codes = []; const rest = [];
      lines.forEach(line=>{
        const m = line.match(OUTCOME_LINE_RE);
        if(m){ codes.push(m[1]); const text = m[2].trim().replace(/\s+/g," ");
          if(!found.has(m[1]) || found.get(m[1]).text.length < text.length) found.set(m[1], {code:m[1], type:guessOutcomeType(m[1]), group:guessOutcomeGroup(m[1]), text}); }
        else rest.push(line);
      });
      if(codes.length) perRisk.push({r, codes, rest: rest.join("\n").replace(/^\s+|\s+$/g,"")});
    });
  });
  return { outcomes:[...found.values()], perRisk };
}
// Accepts: a JSON array / {outcomes:[...]}; tab- or comma-separated "code, [type,] text" rows;
// or plain text pasted from a PDF where each outcome starts with its code (e.g. "F5. No increase ...").
function parseOutcomeText(text){
  text = (text||"").trim();
  if(!text) return [];
  if(/^[\[{]/.test(text)){
    let data = JSON.parse(text);
    if(!Array.isArray(data)) data = data.outcomes || data.outcomeLibrary || [];
    return data.filter(o=>o && o.code && o.text).map(o=>({code:String(o.code).trim(), type:o.type||guessOutcomeType(o.code), group:o.group||guessOutcomeGroup(o.code), text:String(o.text).trim()}));
  }
  const lines = text.split(/\r?\n/);
  const codeRe = OUTCOME_LINE_RE;
  if(lines.filter(l=>/\t/.test(l)).length >= Math.max(1, lines.length*0.5)){
    return lines.map(l=>l.split("\t").map(x=>x.trim())).filter(c=>c.length>=2 && c[0] && c[c.length-1]).map(c=>({
      code:c[0], type: c.length>=3 && /closure|environment/i.test(c[1]) ? (/closure/i.test(c[1])?"closure":"environmental") : guessOutcomeType(c[0]),
      group:guessOutcomeGroup(c[0]), text:c[c.length-1]}));
  }
  const out = []; let current = null; let group = ""; let pendingHeading = "";
  lines.forEach(raw=>{
    const line = raw.replace(/\s+/g," ").trim();
    if(!line) return;
    const m = line.match(codeRe);
    if(m){
      if(pendingHeading){ group = pendingHeading; pendingHeading = ""; }
      current = {code:m[1], type:guessOutcomeType(m[1]), group: group || guessOutcomeGroup(m[1]), text:m[2]};
      out.push(current);
      return;
    }
    // A short line with no closing punctuation, sitting after a finished outcome, is treated as a
    // section heading (e.g. an environmental factor name) rather than a continuation line.
    const prevDone = !current || /[.;:]$/.test(current.text);
    if(prevDone && line.length < 70 && !/[.;]$/.test(line)){ pendingHeading = line; return; }
    if(current) current.text += " " + line;
  });
  return out;
}
function mergeOutcomes(existing, incoming){
  const map = new Map(existing.map(o=>[o.code,o]));
  incoming.forEach(o=>map.set(o.code, o));
  return [...map.values()].sort((a,b)=> a.code.localeCompare(b.code, undefined, {numeric:true}));
}

let drawerOutcomeSel = new Set();
let drawerOutcomeType = "all";
function outcomePickerHtml(r){
  ensureOutcomeLibrary();
  drawerOutcomeSel = new Set(r.outcomeCodes || []);
  drawerOutcomeType = "all";
  return `<div class="field" id="f-outcomes-field"><label>Standard environmental / closure outcomes</label>
    <div class="chip-row" id="f-outcomes-selected" style="margin-bottom:6px;"></div>
    <div id="f-outcome-browser"></div>
  </div>`;
}
function renderOutcomeBrowser(){
  const host = document.getElementById("f-outcome-browser");
  if(!host) return;
  const lib = outcomeLibrary();
  const selEl = document.getElementById("f-outcomes-selected");
  selEl.innerHTML = [...drawerOutcomeSel].map(code=>{ const o = findOutcome(code);
    return `<span class="af-chip" title="${esc(o?o.text:"")}"><span class="outcome-chip ${o&&o.type==="closure"?"closure":""}">${esc(code)}</span> ${esc(o?o.text.slice(0,48)+(o.text.length>48?"\u2026":""):"")}<span class="af-x" data-unsel="${esc(code)}">\u2715</span></span>`;
  }).join("") || `<span class="panel-sub">None selected.</span>`;
  selEl.querySelectorAll("[data-unsel]").forEach(x=>x.addEventListener("click", ()=>{ drawerOutcomeSel.delete(x.dataset.unsel); renderOutcomeBrowser(); }));
  if(!lib.length){
    host.innerHTML = `<div class="outcome-empty">No outcome library loaded for this project yet.
      <button class="btn" id="f-outcome-setup" type="button">Set up outcome library\u2026</button></div>`;
    document.getElementById("f-outcome-setup").addEventListener("click", ()=>renderOutcomeManager(renderOutcomeBrowser));
    return;
  }
  const searchVal = (document.getElementById("f-outcome-search")||{}).value || "";
  const factorSel = document.getElementById("f-factor");
  const factorWords = factorSel ? (factorSel.value.toLowerCase().match(/[a-z]{5,}/g)||[]) : [];
  const q = searchVal.toLowerCase();
  let list = lib.filter(o=> drawerOutcomeType==="all" || o.type===drawerOutcomeType)
    .filter(o=> !q || (o.code+" "+o.text+" "+(o.group||"")).toLowerCase().includes(q));
  const suggested = o => factorWords.length && (o.group||"") && factorWords.some(w=>o.group.toLowerCase().includes(w));
  list = [...list].sort((a,b)=> (suggested(b)?1:0)-(suggested(a)?1:0));
  host.innerHTML = `
    <div style="display:flex; gap:6px; flex-wrap:wrap; align-items:center; margin-bottom:6px;">
      <input type="text" id="f-outcome-search" placeholder="Search code or wording\u2026" value="${esc(searchVal)}" style="flex:1; min-width:140px;">
      <div class="chip-row">${[["all","All"],["environmental","Environmental"],["closure","Closure"]].map(([k,l])=>
        `<span class="chip ${drawerOutcomeType===k?"active":""}" data-otype="${k}">${l}</span>`).join("")}</div>
    </div>
    <div class="outcome-list">${list.map(o=>`
      <label class="outcome-row">
        <input type="checkbox" data-ocode="${esc(o.code)}" ${drawerOutcomeSel.has(o.code)?"checked":""}>
        <span><span class="outcome-chip ${o.type==="closure"?"closure":""}">${esc(o.code)}</span>${suggested(o)?' <span title="Matches this risk&#39;s factor">\u2605</span>':""}
        ${esc(o.text)}${o.group?`<span class="panel-sub"> \u00b7 ${esc(o.group)}</span>`:""}</span>
      </label>`).join("") || `<div class="panel-sub" style="padding:8px;">No outcomes match.</div>`}</div>
    <div class="panel-sub" style="margin-top:4px;">${lib.length} outcomes in library \u00b7 <a href="#" id="f-outcome-manage">Manage library\u2026</a></div>`;
  host.querySelectorAll("[data-ocode]").forEach(cb=>cb.addEventListener("change", ()=>{
    if(cb.checked) drawerOutcomeSel.add(cb.dataset.ocode); else drawerOutcomeSel.delete(cb.dataset.ocode);
    renderOutcomeBrowser();
  }));
  host.querySelectorAll("[data-otype]").forEach(ch=>ch.addEventListener("click", ()=>{ drawerOutcomeType = ch.dataset.otype; renderOutcomeBrowser(); }));
  const search = document.getElementById("f-outcome-search");
  search.addEventListener("input", ()=>{ const pos = search.selectionStart; renderOutcomeBrowser();
    const s2 = document.getElementById("f-outcome-search"); s2.focus(); s2.setSelectionRange(pos,pos); });
  document.getElementById("f-outcome-manage").addEventListener("click", (e)=>{ e.preventDefault(); renderOutcomeManager(renderOutcomeBrowser); });
  makeChipsFocusable(host);
}
function readOutcomePicker(){ return [...drawerOutcomeSel]; }

function renderOutcomeManager(onClose){
  ensureOutcomeLibrary();
  let local = JSON.parse(JSON.stringify(outcomeLibrary()));
  let harvest = harvestOutcomesFromRisks();
  let convertOnSave = false;
  const drawer = document.getElementById("outcome-drawer");
  function draw(){
    drawer.innerHTML = `
      <h3>Outcome library</h3>
      <p class="panel-sub">Standard environmental and closure outcomes offered in the risk drawer. Paste the outcomes table from the
        MDCP guideline (Appendix 5) \u2014 each outcome should start with its code, e.g. \u201cF5.\u201d or \u201cC2.0\u201d \u2014 or load a library file a
        colleague exported. Codes starting with \u201cC\u201d are treated as closure outcomes; change any type below.</p>
      <div class="field"><label>Paste outcomes (text, tab-separated or JSON)</label>
        <textarea id="outcome-paste" style="min-height:110px;" placeholder="F5. No increase in the diversity, distribution\u2026&#10;C2.0 The placement of mined materials\u2026"></textarea></div>
      <div style="display:flex; gap:6px; flex-wrap:wrap; margin-bottom:14px;">
        <button class="btn" id="outcome-parse" type="button">Parse &amp; add</button>
        <button class="btn" id="outcome-import-file-btn" type="button">Load library file\u2026</button>
        <input type="file" id="outcome-import-file" accept="application/json,.json,.txt,.csv,.tsv" style="display:none;">
        <button class="btn" id="outcome-export" type="button" ${local.length?"":"disabled"}>Export library \u2b07</button>
        <button class="btn" id="outcome-add-blank" type="button">+ Add one</button>
      </div>
      ${harvest.outcomes.length ? `<div class="harvest-box">Found <strong>${harvest.outcomes.length}</strong> coded outcome${harvest.outcomes.length===1?"":"s"}
        (${esc(harvest.outcomes.map(o=>o.code).slice(0,12).join(", "))}${harvest.outcomes.length>12?"\u2026":""}) typed into the outcome text of
        ${harvest.perRisk.length} risk${harvest.perRisk.length===1?"":"s"} in this project.
        <button class="btn" id="outcome-harvest" type="button">Add them to the library &amp; convert those risks</button>
        <div class="panel-sub" style="margin-top:4px;">Converting ticks the codes in each risk's outcome picker and leaves any site-specific wording in the notes field.</div></div>` : ""}
      <div id="outcome-table">${local.length ? `<table><thead><tr><th>Code</th><th>Type</th><th>Group</th><th>Wording</th><th></th></tr></thead><tbody>
        ${local.map((o,i)=>`<tr>
          <td data-label="Code"><input type="text" data-oi="${i}" data-of="code" value="${esc(o.code)}" style="width:70px;"></td>
          <td data-label="Type"><select data-oi="${i}" data-of="type"><option value="environmental" ${o.type!=="closure"?"selected":""}>Environmental</option><option value="closure" ${o.type==="closure"?"selected":""}>Closure</option></select></td>
          <td data-label="Group"><input type="text" data-oi="${i}" data-of="group" value="${esc(o.group||"")}" style="width:120px;"></td>
          <td data-label="Wording"><textarea data-oi="${i}" data-of="text" style="width:100%; min-height:44px;">${esc(o.text)}</textarea></td>
          <td><button class="btn danger" data-odel="${i}" type="button" style="padding:3px 8px; font-size:11px;">Remove</button></td></tr>`).join("")}
        </tbody></table>` : `<div class="empty-state" style="padding:18px;">Library is empty.</div>`}</div>
      <div class="drawer-actions">
        <button class="btn primary" id="outcome-save" type="button">Save to project</button>
        <button class="btn" id="outcome-save-default" type="button" ${AUTOSAVE_ENABLED?"":"disabled"} title="Also keep this library in this browser so new projects start with it">Save + make my default</button>
        <button class="btn" id="outcome-cancel" type="button">Cancel</button>
      </div>`;
    drawer.querySelectorAll("[data-oi]").forEach(el=>el.addEventListener("change", ()=>{ local[Number(el.dataset.oi)][el.dataset.of] = el.value.trim(); }));
    drawer.querySelectorAll("[data-odel]").forEach(b=>b.addEventListener("click", ()=>{ local.splice(Number(b.dataset.odel),1); draw(); }));
    document.getElementById("outcome-parse").addEventListener("click", ()=>{
      try{
        const parsed = parseOutcomeText(document.getElementById("outcome-paste").value);
        if(!parsed.length){ alert("No outcomes found. Each outcome needs to start with its code (e.g. \"F5.\" or \"C2.0\")."); return; }
        local = mergeOutcomes(local, parsed); draw();
        alert(`Added/updated ${parsed.length} outcome${parsed.length===1?"":"s"}. Check the wording and types below before saving \u2014 PDF copy/paste can split or join lines.`);
      }catch(err){ alert("Couldn't parse that: " + err.message); }
    });
    document.getElementById("outcome-add-blank").addEventListener("click", ()=>{ local.push({code:"", type:"environmental", group:"", text:""}); draw(); });
    const hv = document.getElementById("outcome-harvest");
    if(hv) hv.addEventListener("click", ()=>{
      local = mergeOutcomes(local, harvest.outcomes.filter(o=>!local.some(x=>x.code===o.code)));
      convertOnSave = true;
      const n = harvest.perRisk.length; harvest = {outcomes:[], perRisk: harvest.perRisk};
      draw();
      alert(`Added to the library below. ${n} risk${n===1?"":"s"} will be converted when you save.`);
    });
    document.getElementById("outcome-import-file-btn").addEventListener("click", ()=>document.getElementById("outcome-import-file").click());
    document.getElementById("outcome-import-file").addEventListener("change", (e)=>{
      const f = e.target.files[0]; if(!f) return;
      const rd = new FileReader();
      rd.onload = ev=>{ try{ local = mergeOutcomes(local, parseOutcomeText(ev.target.result)); draw(); }catch(err){ alert("Couldn't read that file: "+err.message); } };
      rd.readAsText(f);
    });
    document.getElementById("outcome-export").addEventListener("click", ()=>{
      const blob = new Blob([JSON.stringify({outcomes: local}, null, 1)], {type:"application/json"});
      const url = URL.createObjectURL(blob); const a = document.createElement("a");
      a.href = url; a.download = "outcome_library.json"; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
    });
    const commit = (asDefault)=>{
      const clean = local.filter(o=>o.code && o.text);
      const dupes = clean.map(o=>o.code).filter((c,i,arr)=>arr.indexOf(c)!==i);
      if(dupes.length){ alert("Duplicate codes: " + [...new Set(dupes)].join(", ")); return; }
      project.outcomeLibrary = clean;
      if(convertOnSave){
        harvest.perRisk.forEach(({r, codes, rest})=>{
          r.outcomeCodes = [...new Set([...(r.outcomeCodes||[]), ...codes])];
          r.outcome = rest; r._lastEditedAt = new Date().toISOString();
        });
      }
      if(asDefault){ try{ localStorage.setItem(OUTCOME_LIB_KEY, JSON.stringify(clean)); }catch(e){ alert("Couldn't store the default library in this browser."); } }
      closeOutcomeManager();
      if(onClose) onClose(); else renderAll();
      scheduleAutosave();
    };
    document.getElementById("outcome-save").addEventListener("click", ()=>commit(false));
    document.getElementById("outcome-save-default").addEventListener("click", ()=>commit(true));
    document.getElementById("outcome-cancel").addEventListener("click", closeOutcomeManager);
  }
  draw();
  document.getElementById("outcome-overlay").classList.add("show");
}
function closeOutcomeManager(){ document.getElementById("outcome-overlay").classList.remove("show"); }

/* =========================================================================
   SPR GROUPING
   Each risk belongs to ONE Source group, ONE Pathway group and ONE Receptor
   group. Membership is explicit (theme.members holds risk linkIds, so it
   carries across framework assessments) wherever it has been set \u2014 by
   "Group by phrase", by the AI-assisted import, or by hand in the risk
   drawer. Keyword matching is only the fallback for risks with no explicit
   group, and even then a risk goes to its single most specific keyword match
   rather than every theme whose keyword appears (which is what split
   "Seepage from the TSF" into separate "TSF" and "Seepage" nodes before).
   ========================================================================= */
const SPR_ROLES = ["source","pathway","receptor"];
function themesForRole(r, role){
  const list = (project.themes && project.themes[role]) || [];
  const explicit = list.filter(t=>(t.members||[]).includes(r.linkId)).map(t=>t.id);
  if(explicit.length) return explicit;
  const text = richHtmlToPlainText(r[role]||"").toLowerCase();
  if(!text.trim()) return [];
  let best = null, bestLen = 0; const all = [];
  list.forEach(t=>(t.keywords||[]).forEach(k=>{
    if(k && text.includes(k.toLowerCase())){ all.push(t.id); if(k.length > bestLen){ bestLen = k.length; best = t.id; } }
  }));
  if(project.themes.multiMatch) return [...new Set(all)];
  return best ? [best] : [];
}
function explicitThemeFor(r, role){
  const t = ((project.themes && project.themes[role])||[]).find(t=>(t.members||[]).includes(r.linkId));
  return t ? t.id : "";
}
function setExplicitTheme(r, role, themeId){
  (project.themes[role]||[]).forEach(t=>{ if(t.members) t.members = t.members.filter(x=>x!==r.linkId); });
  if(themeId){ const t = project.themes[role].find(t=>t.id===themeId); if(t){ t.members = t.members||[]; t.members.push(r.linkId); } }
}

/* ---- Group by phrase: cluster each role's whole phrase, not its words ---- */
const GROUP_STOP = new Set(("the a an of to in on from and or with via through by as at is are was were for into that this which due during resulting result results "+
  "causing cause causes could may might potential risk risks area areas site sites activity activities associated related impact impacts across within without not no if "+
  "then than such other also its their them they been being will would can should must having have has had between over under around near adjacent leading lead leads "+
  "resultant all any e g eg etc including include includes reduced reduction existing ongoing continued unmanaged does do").split(" "));
const GROUP_IMPACT = new Set(("contamination contaminating contaminated contaminate contaminant resource health condition death injury failure fail achieve achievement "+
  "preventing prevent compromising poor persisting cumulative contributing smothering downstream receiving environment damage loss increased increase decreased decrease reducing").split(" "));
function groupNormToken(tok){
  tok = tok.replace(/(\D{2,})\d+[a-z]?$/,"$1");               // tsf1b / tsf1 -> tsf
  if(tok.length>4 && tok.endsWith("ies")) tok = tok.slice(0,-3)+"y";
  else if(tok.length>3 && tok.endsWith("s") && !tok.endsWith("ss")) tok = tok.slice(0,-1);
  return tok;
}
function groupTokens(text, role){
  const first = (text||"").split(/[.;]/)[0];
  const words = (first.toLowerCase().match(/[a-z0-9]+/g)||[]).filter(w=>!GROUP_STOP.has(w) && w.length>1).map(groupNormToken).filter(w=>!GROUP_STOP.has(w));
  return [...new Set(words.filter(w=> role==="source" || !GROUP_IMPACT.has(w)))];
}
function groupSimilarity(a, b, role){
  const A = new Set(a); const inter = b.filter(x=>A.has(x)).length;
  const mn = Math.min(a.length, b.length);
  if(!mn) return 0;
  // A lone shared word ("tsf") must not glue two different sources together; for receptors a
  // single-word receptor ("vegetation") may still join a longer phrase that contains it.
  if(inter < 2 && !(mn===1 && (role!=="source" || (a.length===1 && b.length===1)))) return 0;
  return inter / mn;
}
function groupByPhrase(role, risks){
  const items = risks.map(r=>({r, raw: richHtmlToPlainText(r[role]||"").trim(), t: groupTokens(richHtmlToPlainText(r[role]||""), role)})).filter(i=>i.t.length);
  const clusters = [];
  items.forEach(it=>{
    let best = null, bs = 0;
    clusters.forEach(c=>{ const s = groupSimilarity(c.m[0].t, it.t, role); if(s>bs){ bs = s; best = c; } });
    if(best && bs >= 0.6) best.m.push(it); else clusters.push({m:[it]});
  });
  return clusters.map(c=>{
    let label;
    if(role==="source"){
      const phrase = c.m.map(m=>m.raw.split(/[.;]/)[0].trim()).sort((a,b)=>a.length-b.length)[0];
      label = phrase.charAt(0).toUpperCase() + phrase.slice(1);
    } else {
      const common = c.m[0].t.filter(w=>c.m.every(m=>m.t.includes(w)));
      label = titleCaseWords((common.length ? common : c.m[0].t).slice(0,5).join(" "));
    }
    if(label.length > 60) label = label.slice(0,58).trim() + "\u2026";
    return { id: role[0] + "-g-" + Math.random().toString(36).slice(2,9), label, keywords: [], members: c.m.map(m=>m.r.linkId) };
  }).sort((a,b)=> b.members.length - a.members.length || a.label.localeCompare(b.label));
}
function allProjectRisks(){ stashActive(); const seen = new Set(); const out = [];
  Object.values(ASSESSMENTS).forEach(a=>(a.risks||[]).forEach(r=>{ if(!r._archived && !seen.has(r.linkId)){ seen.add(r.linkId); out.push(r); } }));
  return out;
}
document.getElementById("auto-detect-themes-btn").addEventListener("click", ()=>{
  const risks = allProjectRisks();
  if(!risks.length){ alert("Add some risks first \u2014 grouping reads each risk's Source / Pathway / Receptor text."); return; }
  const existing = SPR_ROLES.reduce((n,role)=>n+(project.themes[role]||[]).length, 0);
  if(existing && !confirm(`Rebuild the Source / Pathway / Receptor groups from each risk's whole phrase?\n\nThis replaces the ${existing} existing group${existing===1?"":"s"} (including any manual assignments).`)) return;
  SPR_ROLES.forEach(role=>{ project.themes[role] = groupByPhrase(role, risks); });
  themeFilter = null;
  renderAll();
  alert(`Grouped \u2014 Source: ${project.themes.source.length}, Pathway: ${project.themes.pathway.length}, Receptor: ${project.themes.receptor.length} groups.\n\n`+
    `Risks with the same (or nearly the same) phrase share a group, so "Seepage from the TSF" is one source, not "TSF" + "seepage". `+
    `Rename or merge groups in "Manage groups\u2026", or reassign a single risk from its drawer.`);
});

/* ---- AI-assisted grouping (copy a prompt out, paste the JSON back) -------- */
function buildAiGroupingPrompt(){
  const risks = activeRisksForAnalysis();
  const lines = risks.map(r=>`R${r.id} | Source: ${richHtmlToPlainText(r.source).replace(/\s+/g," ").trim()} | Pathway: ${richHtmlToPlainText(r.pathway).replace(/\s+/g," ").trim()} | Receptor: ${richHtmlToPlainText(r.receptor).replace(/\s+/g," ").trim()}`);
  return `You are helping an environmental scientist group the risk pathways in an environmental risk register into a source\u2013pathway\u2013receptor (SPR) model.

Rules:
- Group by the actual real-world SOURCE as a whole phrase. "Seepage from the TSF" is one source group \u2014 do NOT split it into a "TSF" group and a "Seepage" group.
- Risks describing the same source in different words (e.g. "Unmanaged seepage from the base of TSF1b" and "Seepage from the TSFs") belong in the same group.
- Do the same for PATHWAY (the transport/exposure mechanism) and RECEPTOR (what is affected \u2014 e.g. groundwater, surface water, native vegetation, fauna, closure criteria). Ignore impact verbs like "resulting in contamination of".
- Every risk goes in exactly one group per role. Use short, plain-English group labels (max ~6 words).

Return ONLY JSON, no commentary or code fences, in this shape:
{"source":[{"label":"...","risks":["R1","R5"]}],"pathway":[...],"receptor":[...]}

Risks:
${lines.join("\n")}`;
}
function applyAiGrouping(text){
  const clean = (text||"").replace(/```json|```/g,"").trim();
  const data = JSON.parse(clean);
  const byId = new Map(activeRisksForAnalysis().map(r=>[String(r.id), r]));
  const result = {}; let assigned = 0, unknown = 0;
  SPR_ROLES.forEach(role=>{
    if(!Array.isArray(data[role])) throw new Error(`Missing "${role}" array.`);
    result[role] = data[role].map(g=>{
      const members = (g.risks||[]).map(x=>String(x).replace(/^R/i,"")).map(id=>{ const r = byId.get(id); if(!r){ unknown++; return null; } assigned++; return r.linkId; }).filter(Boolean);
      return { id: role[0]+"-ai-"+Math.random().toString(36).slice(2,9), label: String(g.label||"Group").slice(0,60), keywords: [], members };
    }).filter(g=>g.members.length);
  });
  SPR_ROLES.forEach(role=>{ project.themes[role] = result[role]; });
  return {assigned, unknown};
}
function copyTextToClipboard(text){
  if(navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text).then(()=>true, ()=>false);
  const ta = document.createElement("textarea"); ta.value = text; ta.style.position="fixed"; ta.style.opacity="0";
  document.body.appendChild(ta); ta.select(); let ok = false; try{ ok = document.execCommand("copy"); }catch(e){} ta.remove();
  return Promise.resolve(ok);
}

/* ---- Group manager -------------------------------------------------------- */
function renderThemeManager(){
  const local = JSON.parse(JSON.stringify(project.themes));
  SPR_ROLES.forEach(role=>{ local[role] = local[role]||[]; });
  const risks = allProjectRisks();
  const drawer = document.getElementById("theme-drawer");
  const countFor = (role, t) => risks.filter(r=>{
    const explicit = local[role].find(x=>(x.members||[]).includes(r.linkId));
    if(explicit) return explicit.id===t.id;
    const saved = project.themes; project.themes = local; const ids = themesForRole(r, role); project.themes = saved;
    return ids.includes(t.id);
  }).length;
  function draw(){
    const section = (role, label) => {
      const unassigned = risks.filter(r=>{ const saved = project.themes; project.themes = local; const n = themesForRole(r, role).length; project.themes = saved; return !n && richHtmlToPlainText(r[role]).trim(); }).length;
      return `<div class="theme-section">
        <div class="theme-section-head">${label} groups <span class="panel-sub">${local[role].length} group${local[role].length===1?"":"s"}${unassigned?` \u00b7 <span style="color:var(--high);">${unassigned} risk${unassigned===1?"":"s"} ungrouped</span>`:""}</span></div>
        ${local[role].map((t,i)=>`<div class="theme-row">
          <input type="text" data-tlabel="${role}:${i}" value="${esc(t.label)}" aria-label="Group label">
          <span class="panel-sub" title="${esc((t.keywords||[]).join(", "))}">${countFor(role,t)} risk${countFor(role,t)===1?"":"s"}${(t.keywords||[]).length?` \u00b7 kw: ${esc((t.keywords||[]).join(", ").slice(0,40))}`:""}</span>
          <select data-tmerge="${role}:${i}" aria-label="Merge into"><option value="">Merge into\u2026</option>${local[role].map((o,j)=>j===i?"":`<option value="${j}">${esc(o.label)}</option>`).join("")}</select>
          <button class="btn danger" data-tremove="${role}:${i}" type="button" style="padding:3px 8px; font-size:11px;">Remove</button>
        </div>`).join("") || `<div class="panel-sub">No ${role} groups yet.</div>`}
        <div class="theme-row" style="margin-top:6px;">
          <input type="text" id="new-theme-label-${role}" placeholder="New group label">
          <input type="text" id="new-theme-keywords-${role}" placeholder="fallback keywords, comma separated">
          <button class="btn" data-add-theme="${role}" type="button">+ Add</button>
        </div>
      </div>`;
    };
    drawer.innerHTML = `
      <h3>Manage Source / Pathway / Receptor groups</h3>
      <p class="panel-sub" style="margin-bottom:12px;">Each risk sits in one group per role. Groups built by \u201cGroup by phrase\u201d or the AI import list their risks explicitly;
        keyword groups only catch risks that have no explicit group, and a risk goes to its single most specific keyword match.
        Merge groups here, or reassign a single risk from its drawer (\u201cPathway analysis grouping\u201d).</p>
      ${section("source","Source")}${section("pathway","Pathway")}${section("receptor","Receptor")}
      <label class="check-line"><input type="checkbox" id="theme-multimatch" ${local.multiMatch?"checked":""}> Let keyword groups match a risk more than once (old behaviour \u2014 can double-count)</label>
      <details class="ai-box"><summary>AI-assisted grouping (optional)</summary>
        <p class="panel-sub">For wording the phrase grouping can't untangle: copy the prompt, paste it into Claude (or your company's approved AI tool), then paste the JSON reply below.
          Nothing is sent anywhere by the dashboard itself.</p>
        <button class="btn" id="ai-copy-prompt" type="button">Copy prompt for ${activeRisksForAnalysis().length} risks</button>
        <textarea id="ai-paste" placeholder='Paste the JSON reply here: {"source":[...],"pathway":[...],"receptor":[...]}' style="width:100%; min-height:90px; margin-top:8px;"></textarea>
        <button class="btn" id="ai-apply" type="button" style="margin-top:6px;">Apply AI grouping</button>
      </details>
      <div class="drawer-actions">
        <button class="btn primary" id="theme-save" type="button">Save &amp; close</button>
        <button class="btn" id="theme-cancel" type="button">Cancel</button>
      </div>`;
    drawer.querySelectorAll("[data-tlabel]").forEach(inp=>inp.addEventListener("change", ()=>{ const [role,i] = inp.dataset.tlabel.split(":"); local[role][Number(i)].label = inp.value.trim() || local[role][Number(i)].label; }));
    drawer.querySelectorAll("[data-tmerge]").forEach(sel=>sel.addEventListener("change", ()=>{
      if(sel.value==="") return;
      const [role,i] = sel.dataset.tmerge.split(":"); const from = local[role][Number(i)], into = local[role][Number(sel.value)];
      into.members = [...new Set([...(into.members||[]), ...(from.members||[])])];
      into.keywords = [...new Set([...(into.keywords||[]), ...(from.keywords||[])])];
      local[role].splice(Number(i),1); draw();
    }));
    drawer.querySelectorAll("[data-tremove]").forEach(b=>b.addEventListener("click", ()=>{ const [role,i] = b.dataset.tremove.split(":"); local[role].splice(Number(i),1); draw(); }));
    drawer.querySelectorAll("[data-add-theme]").forEach(b=>b.addEventListener("click", ()=>{
      const role = b.dataset.addTheme;
      const label = document.getElementById("new-theme-label-"+role).value.trim();
      const keywords = document.getElementById("new-theme-keywords-"+role).value.split(",").map(s=>s.trim()).filter(Boolean);
      if(!label){ alert("Give the group a label."); return; }
      local[role].push({ id: role[0]+"-"+label.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")+"-"+Date.now().toString(36).slice(-4), label, keywords, members: [] });
      draw();
    }));
    document.getElementById("theme-multimatch").addEventListener("change", e=>{ local.multiMatch = e.target.checked; draw(); });
    document.getElementById("ai-copy-prompt").addEventListener("click", ()=>{
      const prompt = buildAiGroupingPrompt();
      copyTextToClipboard(prompt).then(ok=>{
        if(ok) alert("Prompt copied. Paste it into your AI tool, then paste the JSON reply back here.");
        else { document.getElementById("ai-paste").value = prompt; alert("Couldn't reach the clipboard \u2014 the prompt has been put in the box below; copy it from there (then clear the box before pasting the reply)."); }
      });
    });
    document.getElementById("ai-apply").addEventListener("click", ()=>{
      const saved = project.themes; project.themes = local;
      try{
        const {assigned, unknown} = applyAiGrouping(document.getElementById("ai-paste").value);
        Object.assign(local, project.themes);
        alert(`Applied: ${assigned} assignments${unknown?`, ${unknown} unknown risk reference${unknown===1?"":"s"} ignored`:""}. Review the groups, then Save & close.`);
      }catch(err){ alert("Couldn't read that reply as grouping JSON: " + err.message); }
      finally{ const applied = project.themes; project.themes = saved; SPR_ROLES.forEach(r=>{ local[r] = applied[r]; }); }
      draw();
    });
    document.getElementById("theme-cancel").addEventListener("click", closeThemeManager);
    document.getElementById("theme-save").addEventListener("click", ()=>{ project.themes = local; themeFilter = null; closeThemeManager(); renderAll(); });
    makeChipsFocusable(drawer);
  }
  draw();
  document.getElementById("theme-overlay").classList.add("show");
}
function closeThemeManager(){ document.getElementById("theme-overlay").classList.remove("show"); }
document.getElementById("manage-themes-btn").addEventListener("click", renderThemeManager);

function sprGroupingDrawerHtml(r){
  const rows = SPR_ROLES.map(role=>{
    const cur = explicitThemeFor(r, role);
    const list = project.themes[role]||[];
    return `<div class="field"><label>${role.charAt(0).toUpperCase()+role.slice(1)} group</label>
      <select id="f-group-${role}"><option value="">Auto (keyword match)</option>${list.map(t=>`<option value="${esc(t.id)}" ${t.id===cur?"selected":""}>${esc(t.label)}</option>`).join("")}</select></div>`;
  }).join("");
  return `<details class="group-box" ${SPR_ROLES.some(role=>(project.themes[role]||[]).length)?"":""}><summary>Pathway analysis grouping</summary>
    <p class="panel-sub">Which Source / Pathway / Receptor node this risk appears under in the diagrams. Shared with linked risks in other frameworks.</p>${rows}</details>`;
}

/* ---- Factor / indicator network (the GGM-style second network) ---------- */
function taxKeyOf(r){ return activeFramework.taxonomyType==="factor-indicator" ? (r.factor||"(none)")+"::"+(r.indicator||"(none)") : (r.receptorCategory||"(none)"); }
function renderFactorNetwork(){
  const fw = activeFramework;
  const container = document.getElementById("pathway-analysis-body");
  const risks = activeRisksForAnalysis();
  const tl = taxLabels();
  if(!risks.length){ container.innerHTML = `<div class="empty-state">No active risks yet.</div>`; return; }
  const ratingKey = viewMode==="inh" ? "inhRating" : "resRating";
  // right column: every taxonomy value (so un-covered indicators show up as gaps), grouped by factor
  const groups = [];
  if(fw.taxonomyType==="factor-indicator"){
    Object.entries(fw.factorIndicators).forEach(([f, inds])=> groups.push({factor:f, items: inds.map(i=>({key:f+"::"+i, label:i}))}));
    risks.forEach(r=>{ const k = taxKeyOf(r); if(!groups.some(g=>g.items.some(it=>it.key===k))){
      let g = groups.find(g=>g.factor===(r.factor||"(none)")); if(!g){ g = {factor:r.factor||"(none)", items:[]}; groups.push(g); }
      g.items.push({key:k, label:r.indicator||"(none)"}); } });
  } else {
    groups.push({factor:null, items: fw.receptorCategories.map(c=>({key:c, label:c}))});
  }
  const srcList = (project.themes.source||[]);
  const srcNodes = srcList.map(t=>({id:t.id, label:t.label})).concat([{id:"__none", label:"(no source group)"}]);
  const edgeMap = {}; const srcCount = {}; const taxCount = {};
  risks.forEach(r=>{
    let s = themesForRole(r,"source"); if(!s.length) s = ["__none"];
    const k = taxKeyOf(r);
    taxCount[k] = (taxCount[k]||0)+1;
    s.forEach(sid=>{ srcCount[sid] = (srcCount[sid]||0)+1; (edgeMap[sid+"||"+k] = edgeMap[sid+"||"+k] || []).push(r); });
  });
  const usedSrc = srcNodes.filter(n=>srcCount[n.id]);
  const activeIds = (()=>{ if(!themeFilter) return null;
    if(themeFilter.role==="source") return new Set(risks.filter(r=>{ const s = themesForRole(r,"source"); return themeFilter.themeId==="__none" ? !s.length : s.includes(themeFilter.themeId); }).map(r=>r.id));
    if(themeFilter.role==="tax") return new Set(risks.filter(r=>taxKeyOf(r)===themeFilter.taxKey).map(r=>r.id));
    return null; })();
  const nodeH = 26, gapY = 8, bandH = 22;
  const leftW = 270, rightW = 250, midGap = 170, x1 = 10, x2 = x1+leftW+midGap;
  let yL = 30; const leftPos = {};
  usedSrc.forEach(n=>{ leftPos[n.id] = yL; yL += nodeH+gapY; });
  let yR = 30; const rightPos = {}; const bands = [];
  groups.forEach(g=>{
    if(g.factor!==null){ bands.push({label:g.factor, y:yR}); yR += bandH; }
    g.items.forEach(it=>{ rightPos[it.key] = yR; yR += nodeH+gapY; });
    yR += 6;
  });
  const height = Math.max(yL, yR) + 10, width = x2 + rightW + 10;
  const off = Math.max(0, (yR - yL)/2);
  Object.keys(leftPos).forEach(k=>leftPos[k] += off);
  const RCOL = {Low:"#5C8A5C", Medium:"#C99A2E", High:"#C4652B", Extreme:"#A73434"};
  let edges = "";
  Object.entries(edgeMap).forEach(([key, list])=>{
    const [sid, tk] = key.split("||");
    if(leftPos[sid]===undefined || rightPos[tk]===undefined) return;
    const top = list.map(r=>r[ratingKey]).filter(Boolean).sort((a,b)=>RATING_ORDER.indexOf(b)-RATING_ORDER.indexOf(a))[0];
    const isActive = activeIds ? list.some(r=>activeIds.has(r.id)) : false;
    const ya = leftPos[sid]+nodeH/2, yb = rightPos[tk]+nodeH/2, xa = x1+leftW, xb = x2, mx = (xa+xb)/2;
    const op = activeIds ? (isActive ? .95 : .12) : .6;
    edges += `<path d="M${xa},${ya} C${mx},${ya} ${mx},${yb} ${xb},${yb}" stroke="${RCOL[top]||"#8BA982"}" stroke-width="${Math.min(1.5+list.length*1.5, 10)}" fill="none" opacity="${op}"><title>${esc(list.length+" risk"+(list.length===1?"":"s")+" \u00b7 highest "+(viewMode==="inh"?"inherent":"residual")+": "+(top||"\u2014"))}</title></path>`;
  });
  const trunc = (s,n)=> s.length>n ? s.slice(0,n-1)+"\u2026" : s;
  const leftNodes = usedSrc.map(n=>{
    const sel = themeFilter && themeFilter.role==="source" && themeFilter.themeId===n.id;
    const dim = activeIds && !sel && !risks.some(r=>activeIds.has(r.id) && (themesForRole(r,"source").includes(n.id) || (n.id==="__none" && !themesForRole(r,"source").length)));
    return `<g class="net-node" data-src="${esc(n.id)}" style="cursor:pointer;" opacity="${dim?.3:1}"><title>${esc(n.label)}</title>
      <rect x="${x1}" y="${leftPos[n.id]}" width="${leftW}" height="${nodeH}" rx="6" fill="${sel?"#D6F591":(n.id==="__none"?"#F5F5F0":"#EEF7DB")}" stroke="${sel?"#263326":"#8BA982"}" stroke-width="${sel?2:1}" ${n.id==="__none"?'stroke-dasharray="4 3"':""}/>
      <text x="${x1+8}" y="${leftPos[n.id]+17}" font-size="11.5" fill="#1E1E1E">${esc(trunc(n.label,38))} (${srcCount[n.id]})</text></g>`;
  }).join("");
  const bandSvg = bands.map(b=>`<text x="${x2}" y="${b.y+15}" font-size="10.5" font-weight="700" fill="#263326" style="text-transform:uppercase; letter-spacing:.04em;">${esc(trunc(b.label.toUpperCase(),38))}</text>`).join("");
  const rightNodes = groups.flatMap(g=>g.items).map(it=>{
    const c = taxCount[it.key]||0;
    const sel = themeFilter && themeFilter.role==="tax" && themeFilter.taxKey===it.key;
    const dim = activeIds && !sel && !risks.some(r=>activeIds.has(r.id) && taxKeyOf(r)===it.key);
    return `<g class="net-node" data-tax="${esc(it.key)}" style="cursor:${c?"pointer":"default"};" opacity="${dim?.3:1}"><title>${esc(it.label)}${c?"":" \u2014 no risks (possible gap)"}</title>
      <rect x="${x2}" y="${rightPos[it.key]}" width="${rightW}" height="${nodeH}" rx="6" fill="${sel?"#D6F591":(c?"#FFFFFF":"#F5F5F0")}" stroke="${sel?"#263326":(c?"#3C533C":"#C9C8BA")}" stroke-width="${sel?2:1}" ${c?"":'stroke-dasharray="4 3"'}/>
      <text x="${x2+8}" y="${rightPos[it.key]+17}" font-size="11.5" fill="${c?"#1E1E1E":"#9A998C"}">${esc(trunc(it.label,30))} ${c?`(${c})`:"\u2014 gap"}</text></g>`;
  }).join("");
  const header = `<text x="${x1}" y="16" font-size="11" font-weight="700" fill="#565D4F">SOURCE GROUP</text>
    <text x="${x2}" y="16" font-size="11" font-weight="700" fill="#565D4F">${esc((fw.taxonomyType==="factor-indicator" ? tl.top+" \u203a "+tl.sub : tl.top).toUpperCase())}</text>`;
  container.innerHTML = `<div class="panel-sub" style="margin-bottom:8px;">Each line links a source group to the ${esc(tl.sub.toLowerCase())} its risks affect; line width = number of risks, colour = highest ${viewMode==="inh"?"inherent":"residual"} rating. Dashed boxes have no risks yet (possible gaps). Click a box to filter the register.${srcList.length?"":` <strong>No source groups yet \u2014 click \u201c\u2728 Group by phrase\u201d.</strong>`}</div>
    <div class="scroll-x"><svg viewBox="0 0 ${width} ${height}" style="width:100%; height:auto;" role="img" aria-label="Source to ${esc(tl.sub)} network">${header}${edges}${leftNodes}${bandSvg}${rightNodes}</svg></div>` + themeDetailHtml();
  container.querySelectorAll("[data-src]").forEach(g=>g.addEventListener("click", ()=>{
    const id = g.dataset.src;
    themeFilter = (themeFilter && themeFilter.role==="source" && themeFilter.themeId===id) ? null : {role:"source", themeId:id};
    renderPathwayAnalysis(); renderRegister();
  }));
  container.querySelectorAll("[data-tax]").forEach(g=>g.addEventListener("click", ()=>{
    const k = g.dataset.tax; if(!taxCount[k]) return;
    themeFilter = (themeFilter && themeFilter.role==="tax" && themeFilter.taxKey===k) ? null : {role:"tax", taxKey:k};
    renderPathwayAnalysis(); renderRegister();
  }));
  wireThemeDetailEvents();
}

/* =========================================================================
   XLSX WRITER \u2014 dependency-free (stored/uncompressed ZIP), reused as-is
   from the GGM TSF1b dashboard's flat-export implementation.
   ========================================================================= */

const CRC_TABLE = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) { let c = n; for (let k=0;k<8;k++) c = (c&1) ? (0xEDB88320 ^ (c>>>1)) : (c>>>1); t[n]=c>>>0; }
  return t;
})();
function crc32(bytes){ let c=0xFFFFFFFF; for(let i=0;i<bytes.length;i++) c = CRC_TABLE[(c^bytes[i])&0xFF]^(c>>>8); return (c^0xFFFFFFFF)>>>0; }
function strBytes(s){ return new TextEncoder().encode(s); }
function dosDateTime(d){
  const time = ((d.getHours()&0x1F)<<11)|((d.getMinutes()&0x3F)<<5)|((d.getSeconds()/2)&0x1F);
  const date = (((d.getFullYear()-1980)&0x7F)<<9)|(((d.getMonth()+1)&0x0F)<<5)|(d.getDate()&0x1F);
  return {time,date};
}
function buildZip(files){
  const now = new Date(); const {time,date} = dosDateTime(now);
  const chunks=[], central=[]; let offset=0;
  for(const f of files){
    const nameBytes = strBytes(f.name); const crc = crc32(f.data); const size = f.data.length;
    const local = new Uint8Array(30+nameBytes.length); const lv = new DataView(local.buffer);
    lv.setUint32(0,0x04034b50,true); lv.setUint16(4,20,true); lv.setUint16(6,0,true); lv.setUint16(8,0,true);
    lv.setUint16(10,time,true); lv.setUint16(12,date,true); lv.setUint32(14,crc,true);
    lv.setUint32(18,size,true); lv.setUint32(22,size,true); lv.setUint16(26,nameBytes.length,true); lv.setUint16(28,0,true);
    local.set(nameBytes,30);
    chunks.push(local,f.data);
    const cd = new Uint8Array(46+nameBytes.length); const cv = new DataView(cd.buffer);
    cv.setUint32(0,0x02014b50,true); cv.setUint16(4,20,true); cv.setUint16(6,20,true); cv.setUint16(8,0,true); cv.setUint16(10,0,true);
    cv.setUint16(12,time,true); cv.setUint16(14,date,true); cv.setUint32(16,crc,true); cv.setUint32(20,size,true); cv.setUint32(24,size,true);
    cv.setUint16(28,nameBytes.length,true); cv.setUint16(30,0,true); cv.setUint16(32,0,true); cv.setUint16(34,0,true); cv.setUint16(36,0,true);
    cv.setUint32(38,0,true); cv.setUint32(42,offset,true);
    cd.set(nameBytes,46); central.push(cd);
    offset += local.length + size;
  }
  const centralSize = central.reduce((a,c)=>a+c.length,0);
  const end = new Uint8Array(22); const ev = new DataView(end.buffer);
  ev.setUint32(0,0x06054b50,true); ev.setUint16(8,files.length,true); ev.setUint16(10,files.length,true);
  ev.setUint32(12,centralSize,true); ev.setUint32(16,offset,true);
  const total = offset+centralSize+22; const out = new Uint8Array(total); let p=0;
  for(const c of chunks){ out.set(c,p); p+=c.length; }
  for(const c of central){ out.set(c,p); p+=c.length; }
  out.set(end,p);
  return out;
}
function escXml(s){ return String(s==null?"":s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g,""); }
function colLetter(n){ let s=""; while(n>0){ const m=(n-1)%26; s=String.fromCharCode(65+m)+s; n=Math.floor((n-1)/26);} return s; }
function sheetXml(rows, styleFor, colCount){
  let out = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
    + '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">'
    + '<sheetViews><sheetView workbookViewId="0"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>'
    + '<sheetFormatPr defaultRowHeight="15"/><sheetData>';
  rows.forEach((row,r)=>{
    out += `<row r="${r+1}">`;
    row.forEach((cell,c)=>{
      if(cell===null||cell===undefined||cell==="") return;
      const ref = colLetter(c+1)+(r+1); const sid = styleFor?styleFor(r,c):0; const sAttr = sid?` s="${sid}"`:"";
      if(typeof cell === "number") out += `<c r="${ref}"${sAttr}><v>${cell}</v></c>`;
      else out += `<c r="${ref}"${sAttr} t="inlineStr"><is><t xml:space="preserve">${escXml(cell)}</t></is></c>`;
    });
    out += '</row>';
  });
  out += `</sheetData><autoFilter ref="A1:${colLetter(colCount)}1"/></worksheet>`;
  return out;
}
function stylesXml(){
  return '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
    + '<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">'
    + '<fonts count="3"><font><sz val="11"/><name val="Calibri"/></font>'
    + '<font><b/><sz val="11"/><color rgb="FFF6F6F2"/><name val="Calibri"/></font>'
    + '<font><b/><sz val="11"/><name val="Calibri"/></font></fonts>'
    + '<fills count="8"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill>'
    + '<fill><patternFill patternType="solid"><fgColor rgb="FF3C533C"/><bgColor indexed="64"/></patternFill></fill>'
    + '<fill><patternFill patternType="solid"><fgColor rgb="FFE4EDE0"/><bgColor indexed="64"/></patternFill></fill>'
    + '<fill><patternFill patternType="solid"><fgColor rgb="FFF6E9C9"/><bgColor indexed="64"/></patternFill></fill>'
    + '<fill><patternFill patternType="solid"><fgColor rgb="FFF5DDC8"/><bgColor indexed="64"/></patternFill></fill>'
    + '<fill><patternFill patternType="solid"><fgColor rgb="FFF2D4D2"/><bgColor indexed="64"/></patternFill></fill>'
    + '<fill><patternFill patternType="solid"><fgColor rgb="FFEEF7DB"/><bgColor indexed="64"/></patternFill></fill></fills>'
    + '<borders count="2"><border><left/><right/><top/><bottom/><diagonal/></border>'
    + '<border><left style="thin"><color rgb="FFBFBFBF"/></left><right style="thin"><color rgb="FFBFBFBF"/></right>'
    + '<top style="thin"><color rgb="FFBFBFBF"/></top><bottom style="thin"><color rgb="FFBFBFBF"/></bottom><diagonal/></border></borders>'
    + '<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>'
    + '<cellXfs count="6">'
    + '<xf numFmtId="0" fontId="0" fillId="0" borderId="1" applyBorder="1" applyAlignment="1"><alignment vertical="top" wrapText="1"/></xf>'
    + '<xf numFmtId="0" fontId="1" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment vertical="center" wrapText="1"/></xf>'
    + '<xf numFmtId="0" fontId="2" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment vertical="top" horizontal="center"/></xf>'
    + '<xf numFmtId="0" fontId="2" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment vertical="top" horizontal="center"/></xf>'
    + '<xf numFmtId="0" fontId="2" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment vertical="top" horizontal="center"/></xf>'
    + '<xf numFmtId="0" fontId="2" fillId="6" borderId="1" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment vertical="top" horizontal="center"/></xf>'
    + '</cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles></styleSheet>';
}
function buildWorkbook(sheets){
  const files = [];
  let ct = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">'
    + '<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>'
    + '<Default Extension="xml" ContentType="application/xml"/>'
    + '<Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>'
    + '<Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>';
  sheets.forEach((s,i)=> ct += `<Override PartName="/xl/worksheets/sheet${i+1}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>`);
  ct += '</Types>';
  files.push({name:"[Content_Types].xml", data: strBytes(ct)});
  files.push({name:"_rels/.rels", data: strBytes('<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>')});
  let wb = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets>';
  sheets.forEach((s,i)=> wb += `<sheet name="${escXml(s.name)}" sheetId="${i+1}" r:id="rId${i+1}"/>`);
  wb += '</sheets></workbook>';
  files.push({name:"xl/workbook.xml", data: strBytes(wb)});
  let wbr = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">';
  sheets.forEach((s,i)=> wbr += `<Relationship Id="rId${i+1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet${i+1}.xml"/>`);
  wbr += `<Relationship Id="rId${sheets.length+1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>`;
  files.push({name:"xl/_rels/workbook.xml.rels", data: strBytes(wbr)});
  files.push({name:"xl/styles.xml", data: strBytes(stylesXml())});
  sheets.forEach((s,i)=> files.push({name:`xl/worksheets/sheet${i+1}.xml`, data: strBytes(sheetXml(s.rows, s.styleFor, s.colCount))}));
  return buildZip(files);
}
function downloadWorkbook(bytes, filename){
  const blob = new Blob([bytes], {type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = filename;
  document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
}
function ratingStyleId(rating){ return {Low:2, Medium:3, High:4, Extreme:5}[rating] || 0; }

/* =========================================================================
   MDCP TEMPLATE WRITE-BACK EXPORT
   Edits the project's own original .xlsx template in place: matches risks to
   existing "Risk Register" rows by ID, clones the row structure (formulas,
   styles, VML phase checkboxes) for any risk beyond the template's pre-built
   rows, and writes values only into the fields the template actually has \u2014
   the Consequence/Likelihood/Risk-rating formulas are left as formulas so
   Excel recalculates them itself. This is deliberately project-specific:
   it depends on the uploaded file actually being shaped like a Risk Register
   sheet with this column layout, not a generic capability.
   ========================================================================= */
async function inflateRawBytes(bytes){
  const ds = new DecompressionStream("deflate-raw");
  const stream = new Blob([bytes]).stream().pipeThrough(ds);
  const buf = await new Response(stream).arrayBuffer();
  return new Uint8Array(buf);
}
async function readZipEntries(arrayBuffer){
  const data = new Uint8Array(arrayBuffer);
  const dv = new DataView(data.buffer, data.byteOffset, data.byteLength);
  let eocdOffset = -1;
  for(let i = data.length - 22; i >= 0; i--){ if(dv.getUint32(i, true) === 0x06054b50){ eocdOffset = i; break; } }
  if(eocdOffset < 0) throw new Error("This doesn't look like a valid .xlsx file (no zip directory found).");
  const cdEntries = dv.getUint16(eocdOffset+10, true);
  const cdOffset = dv.getUint32(eocdOffset+16, true);
  const centralEntries = []; let p = cdOffset;
  for(let i=0;i<cdEntries;i++){
    const compMethod = dv.getUint16(p+10, true);
    const compSize = dv.getUint32(p+20, true);
    const nameLen = dv.getUint16(p+28, true);
    const extraLen = dv.getUint16(p+30, true);
    const commentLen = dv.getUint16(p+32, true);
    const localHeaderOffset = dv.getUint32(p+42, true);
    const name = new TextDecoder().decode(data.slice(p+46, p+46+nameLen));
    centralEntries.push({ name, compMethod, compSize, localHeaderOffset });
    p += 46 + nameLen + extraLen + commentLen;
  }
  const result = new Map();
  for(const meta of centralEntries){
    const lp = meta.localHeaderOffset;
    const lNameLen = dv.getUint16(lp+26, true);
    const lExtraLen = dv.getUint16(lp+28, true);
    const dataStart = lp + 30 + lNameLen + lExtraLen;
    const compBytes = data.slice(dataStart, dataStart + meta.compSize);
    let outBytes;
    if(meta.compMethod === 0) outBytes = compBytes;
    else if(meta.compMethod === 8) outBytes = await inflateRawBytes(compBytes);
    else throw new Error(`Unsupported zip compression method ${meta.compMethod} for ${meta.name}.`);
    result.set(meta.name, outBytes);
  }
  return result;
}
function parseXmlText(text){
  const doc = new DOMParser().parseFromString(text, "application/xml");
  if(doc.getElementsByTagName("parsererror").length) throw new Error("Couldn't parse XML inside the template file.");
  return doc;
}
function serializeXmlDoc(doc){
  let s = new XMLSerializer().serializeToString(doc);
  if(!s.startsWith("<?xml")) s = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r\n' + s;
  return s;
}
function mdcpNs(doc){ return doc.documentElement.namespaceURI; }
function mdcpParseCellAddr(addr){ const m = addr.match(/^(\$?)([A-Z]+)(\$?)(\d+)$/); return {col:m[2], row:parseInt(m[4],10)}; }
function mdcpShiftRangeIfBeyond(ref, threshold, delta){
  const [startAddr,endAddr] = ref.split(":");
  const s = mdcpParseCellAddr(startAddr), e = endAddr ? mdcpParseCellAddr(endAddr) : s;
  if(s.row>threshold) return s.col+(s.row+delta)+(endAddr? (":"+e.col+(e.row+delta)) : "");
  return null;
}
function mdcpShiftFormulaSelfRefs(formula, oldRow, newRow){
  const re = new RegExp("!(\\$?[A-Z]+)\\$?" + oldRow + "(?!\\d)", "g");
  return formula.replace(re, (m, col) => "!" + col + newRow);
}
function mdcpCellValueText(rowEl, col){
  if(!rowEl) return null;
  const rn = rowEl.getAttribute("r");
  for(const c of rowEl.getElementsByTagName("c")){
    if(c.getAttribute("r") === col + rn){
      const isEl = c.getElementsByTagName("is")[0], vEl = c.getElementsByTagName("v")[0];
      if(isEl) return [...isEl.getElementsByTagName("t")].map(x=>x.textContent).join("");
      if(vEl) return vEl.textContent;
      return null;
    }
  }
  return null;
}
function mdcpColToNum(col){ let n=0; for(const ch of col) n = n*26 + (ch.charCodeAt(0)-64); return n; }
function mdcpGetOrCreateCell(doc, rowEl, col, rowNum){
  const ref = col+rowNum;
  for(const c of rowEl.getElementsByTagName("c")){ if(c.getAttribute("r")===ref) return c; }
  const cellEl = doc.createElementNS(mdcpNs(doc), "c");
  cellEl.setAttribute("r", ref);
  let inserted = false;
  for(const c of rowEl.getElementsByTagName("c")){
    const existingCol = c.getAttribute("r").match(/^[A-Z]+/)[0];
    if(mdcpColToNum(existingCol) > mdcpColToNum(col)){ rowEl.insertBefore(cellEl, c); inserted = true; break; }
  }
  if(!inserted) rowEl.appendChild(cellEl);
  return cellEl;
}
function mdcpSetCellText(doc, rowEl, col, rowNum, value){
  const cellEl = mdcpGetOrCreateCell(doc, rowEl, col, rowNum);
  while(cellEl.firstChild) cellEl.removeChild(cellEl.firstChild);
  cellEl.removeAttribute("t");
  if(value === null || value === undefined || value === "") return;
  cellEl.setAttribute("t", "inlineStr");
  const isEl = doc.createElementNS(mdcpNs(doc), "is");
  const tEl = doc.createElementNS(mdcpNs(doc), "t");
  tEl.setAttribute("xml:space","preserve");
  tEl.textContent = String(value);
  isEl.appendChild(tEl);
  cellEl.appendChild(isEl);
}
function mdcpSetCellRichRuns(doc, rowEl, col, rowNum, runs){
  const cellEl = mdcpGetOrCreateCell(doc, rowEl, col, rowNum);
  while(cellEl.firstChild) cellEl.removeChild(cellEl.firstChild);
  const nonEmpty = runs.filter(r=>r.text);
  if(!nonEmpty.length){ cellEl.removeAttribute("t"); return; }
  cellEl.setAttribute("t", "inlineStr");
  const isEl = doc.createElementNS(mdcpNs(doc), "is");
  nonEmpty.forEach(run=>{
    const rEl = doc.createElementNS(mdcpNs(doc), "r");
    if(run.color){
      const rPr = doc.createElementNS(mdcpNs(doc), "rPr");
      const colorEl = doc.createElementNS(mdcpNs(doc), "color");
      colorEl.setAttribute("rgb","FF"+run.color);
      rPr.appendChild(colorEl);
      rEl.appendChild(rPr);
    }
    const tEl = doc.createElementNS(mdcpNs(doc), "t");
    tEl.setAttribute("xml:space","preserve");
    tEl.textContent = run.text;
    rEl.appendChild(tEl);
    isEl.appendChild(rEl);
  });
  cellEl.appendChild(isEl);
}
function mdcpClearFormulaCache(rowEl, col, rowNum){
  const ref = col+rowNum;
  for(const c of rowEl.getElementsByTagName("c")){
    if(c.getAttribute("r")===ref){ [...c.getElementsByTagName("v")].forEach(v=>c.removeChild(v)); c.removeAttribute("t"); }
  }
}
function mdcpCloneRowForNewRisk(doc, templateRowEl, oldRowNum, newRowNum){
  const clone = templateRowEl.cloneNode(true);
  clone.setAttribute("r", String(newRowNum));
  for(const c of clone.getElementsByTagName("c")){
    const ref = c.getAttribute("r");
    if(ref){ const col = ref.match(/^[A-Z]+/)[0]; c.setAttribute("r", col+newRowNum); }
    for(const f of c.getElementsByTagName("f")){ f.textContent = mdcpShiftFormulaSelfRefs(f.textContent, oldRowNum, newRowNum); }
    if(c.getElementsByTagName("f").length){ [...c.getElementsByTagName("v")].forEach(v=>c.removeChild(v)); }
  }
  return clone;
}
function mdcpParseShapeBlock(block){
  const idMatch = block.match(/id="(_x0000_s\d+)"/);
  const anchorMatch = block.match(/<x:Anchor>\s*([^<]+)<\/x:Anchor>/);
  const anchor = anchorMatch[1].split(",").map(s=>parseInt(s.trim(),10));
  const labelMatch = block.match(/<font[^>]*>([\s\S]*?)<\/font>/);
  const label = labelMatch ? labelMatch[1].replace(/<[^>]+>/g,"").replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/\s+/g," ").trim() : "";
  return { id: idMatch[1], anchor, label, raw: block };
}
function mdcpSetCheckedInBlock(block, shouldCheck){
  const hasChecked = /<x:Checked>1<\/x:Checked>/.test(block);
  if(shouldCheck && !hasChecked) return block.replace("</x:ClientData>", "<x:Checked>1</x:Checked></x:ClientData>");
  if(!shouldCheck && hasChecked) return block.replace(/<x:Checked>1<\/x:Checked>/, "");
  return block;
}
function mdcpShiftMarginTop(block, deltaPt){
  return block.replace(/margin-top:([\d.]+)pt/, (m, val) => "margin-top:" + (Math.round((parseFloat(val)+deltaPt)*100)/100) + "pt");
}
const MDCP_CONS_XLSX = {"Insignificant":"Insignificant ","Minor":"Minor ","Moderate":"Moderate ","Major":"Major ","Severe":"Severe "};
const MDCP_LIKE_XLSX = {"Rare":"Rare ","Unlikely":"Unlikely ","Possible":"Possible ","Likely":"Likely  ","Almost Certain":"Almost certain "};

async function buildMdcpTemplateExport(templateArrayBuffer, risks){
  const entries = await readZipEntries(templateArrayBuffer);
  const decoder = new TextDecoder("utf-8");
  const encoder = new TextEncoder();
  const R_NS = "http://schemas.openxmlformats.org/officeDocument/2006/relationships";

  if(!entries.has("xl/workbook.xml")) throw new Error("This doesn't look like a valid .xlsx workbook.");
  const wbDoc = parseXmlText(decoder.decode(entries.get("xl/workbook.xml")));
  const relsDoc = parseXmlText(decoder.decode(entries.get("xl/_rels/workbook.xml.rels")));
  let sheetRId = null;
  for(const sheetEl of wbDoc.getElementsByTagName("sheet")){
    if(sheetEl.getAttribute("name") === "Risk Register"){ sheetRId = sheetEl.getAttributeNS(R_NS,"id"); break; }
  }
  if(!sheetRId) throw new Error('This template has no sheet named "Risk Register" \u2014 can\'t map risks to it.');
  let sheetTarget = null;
  for(const relEl of relsDoc.getElementsByTagName("Relationship")){
    if(relEl.getAttribute("Id") === sheetRId){ sheetTarget = relEl.getAttribute("Target"); break; }
  }
  const sheetPath = "xl/" + sheetTarget.replace(/^\.?\//, "");
  const sheetRelsPath = sheetPath.replace(/\/([^/]+)$/, "/_rels/$1.rels");

  let vmlPath = null;
  let sheetRelsDoc = null;
  let ctrlPropTarget = null;
  let maxSheetRelId = 0;
  if(entries.has(sheetRelsPath)){
    sheetRelsDoc = parseXmlText(decoder.decode(entries.get(sheetRelsPath)));
    for(const relEl of sheetRelsDoc.getElementsByTagName("Relationship")){
      const idNum = parseInt((relEl.getAttribute("Id")||"").replace("rId",""),10);
      if(!isNaN(idNum) && idNum > maxSheetRelId) maxSheetRelId = idNum;
      if(relEl.getAttribute("Type").endsWith("/vmlDrawing")){
        vmlPath = new URL(relEl.getAttribute("Target"), "https://x/xl/worksheets/").pathname.replace(/^\//,"");
      }
      if(relEl.getAttribute("Type").endsWith("/ctrlProp") && !ctrlPropTarget){
        ctrlPropTarget = relEl.getAttribute("Target");
      }
    }
  }

  const sheetDoc = parseXmlText(decoder.decode(entries.get(sheetPath)));
  const sheetDataEl = sheetDoc.getElementsByTagName("sheetData")[0];
  const rowByNum = new Map([...sheetDataEl.getElementsByTagName("row")].map(r=>[parseInt(r.getAttribute("r"),10), r]));

  let firstDataRow = null;
  for(const rn of [...rowByNum.keys()].sort((a,b)=>a-b)){
    if(mdcpCellValueText(rowByNum.get(rn), "A") === "1"){ firstDataRow = rn; break; }
  }
  if(firstDataRow == null) throw new Error('Couldn\'t find the first risk row (expected "1" in column A) on the "Risk Register" sheet.');

  let lastTemplateRow = firstDataRow, lastPrebuiltId = 1;
  for(let rn = firstDataRow+1; ; rn++){
    const rowEl = rowByNum.get(rn);
    if(!rowEl) break;
    if(mdcpCellValueText(rowEl, "A") !== String(lastPrebuiltId+1)) break;
    let hasFormula = false;
    for(const c of rowEl.getElementsByTagName("c")){ if(c.getAttribute("r")==="I"+rn && c.getElementsByTagName("f").length) hasFormula = true; }
    if(!hasFormula) break;
    lastTemplateRow = rn; lastPrebuiltId++;
  }
  const templateRowEl = rowByNum.get(lastTemplateRow);

  const sortedRisks = [...risks].sort((a,b)=>a.id-b.id);
  const prebuiltRisks = sortedRisks.slice(0, lastPrebuiltId);
  const overflowRisks = sortedRisks.slice(lastPrebuiltId);
  const newRowsNeeded = overflowRisks.length;

  if(newRowsNeeded > 0){
    const rowsToShift = [...rowByNum.keys()].filter(rn=>rn>lastTemplateRow).sort((a,b)=>b-a);
    rowsToShift.forEach(rn=>{
      const rowEl = rowByNum.get(rn);
      const newRn = rn+newRowsNeeded;
      rowEl.setAttribute("r", String(newRn));
      for(const c of rowEl.getElementsByTagName("c")){
        const ref = c.getAttribute("r");
        if(ref){ const col = ref.match(/^[A-Z]+/)[0]; c.setAttribute("r", col+newRn); }
      }
      rowByNum.delete(rn); rowByNum.set(newRn, rowEl);
    });
    const mergeCellsEl = sheetDoc.getElementsByTagName("mergeCells")[0];
    if(mergeCellsEl){
      for(const mc of mergeCellsEl.getElementsByTagName("mergeCell")){
        const shifted = mdcpShiftRangeIfBeyond(mc.getAttribute("ref"), lastTemplateRow, newRowsNeeded);
        if(shifted) mc.setAttribute("ref", shifted);
      }
    }
    overflowRisks.forEach((risk, idx)=>{
      const newRowNum = lastTemplateRow + 1 + idx;
      const clone = mdcpCloneRowForNewRisk(sheetDoc, templateRowEl, lastTemplateRow, newRowNum);
      sheetDataEl.appendChild(clone);
      rowByNum.set(newRowNum, clone);
    });
    const allRows = [...sheetDataEl.getElementsByTagName("row")];
    allRows.sort((a,b)=> parseInt(a.getAttribute("r"),10) - parseInt(b.getAttribute("r"),10));
    allRows.forEach(r=> sheetDataEl.appendChild(r));
    const dimEl = sheetDoc.getElementsByTagName("dimension")[0];
    if(dimEl){
      const [startAddr,endAddr] = dimEl.getAttribute("ref").split(":");
      const start = mdcpParseCellAddr(startAddr);
      const newMaxRow = Math.max(...[...rowByNum.keys()]);
      const endCol = endAddr ? mdcpParseCellAddr(endAddr).col : start.col;
      dimEl.setAttribute("ref", startAddr + ":" + endCol + newMaxRow);
    }
  }

  function targetRowFor(risk){
    if(prebuiltRisks.includes(risk)) return firstDataRow + prebuiltRisks.indexOf(risk);
    return lastTemplateRow + 1 + overflowRisks.indexOf(risk);
  }
  function writeRiskIntoRow(risk, rowNum){
    const rowEl = rowByNum.get(rowNum);
    mdcpSetCellText(sheetDoc, rowEl, "A", rowNum, String(risk.id));
    mdcpSetCellText(sheetDoc, rowEl, "B", rowNum, risk.factor || "");
    mdcpSetCellText(sheetDoc, rowEl, "C", rowNum, risk.indicator || "");
    mdcpSetCellText(sheetDoc, rowEl, "D", rowNum, (risk.domains||[]).join(", "));
    const srcTxt = richHtmlToPlainText(risk.source), pathTxt = richHtmlToPlainText(risk.pathway), recTxt = richHtmlToPlainText(risk.receptor);
    mdcpSetCellRichRuns(sheetDoc, rowEl, "E", rowNum, [
      {text: srcTxt ? srcTxt+" " : "", color:"3C6E8F"},
      {text: pathTxt ? pathTxt+" " : "", color:"4F7942"},
      {text: recTxt || "", color:"A73434"}
    ]);
    mdcpSetCellText(sheetDoc, rowEl, "F", rowNum, "");
    mdcpSetCellText(sheetDoc, rowEl, "G", rowNum, MDCP_CONS_XLSX[risk.inhCons] || "");
    mdcpSetCellText(sheetDoc, rowEl, "H", rowNum, MDCP_LIKE_XLSX[risk.inhLike] || "");
    mdcpClearFormulaCache(rowEl, "I", rowNum);
    mdcpSetCellText(sheetDoc, rowEl, "J", rowNum, richHtmlToPlainText(risk.treatment));
    mdcpSetCellText(sheetDoc, rowEl, "K", rowNum, MDCP_CONS_XLSX[risk.resCons] || "");
    mdcpSetCellText(sheetDoc, rowEl, "L", rowNum, MDCP_LIKE_XLSX[risk.resLike] || "");
    mdcpClearFormulaCache(rowEl, "M", rowNum);
    mdcpSetCellText(sheetDoc, rowEl, "N", rowNum, [outcomeCodesText(risk,true), risk.outcome||""].filter(Boolean).join("\n"));
    mdcpSetCellText(sheetDoc, rowEl, "O", rowNum, "");
  }
  function blankRow(rowNum){
    const rowEl = rowByNum.get(rowNum);
    ["B","C","D","E","F","G","H","J","K","L","N","O"].forEach(col=> mdcpSetCellText(sheetDoc, rowEl, col, rowNum, ""));
    mdcpClearFormulaCache(rowEl, "I", rowNum);
    mdcpClearFormulaCache(rowEl, "M", rowNum);
  }
  for(let i=0; i<lastPrebuiltId; i++){
    const rn = firstDataRow + i;
    const risk = prebuiltRisks[i];
    if(risk) writeRiskIntoRow(risk, rn); else blankRow(rn);
  }
  overflowRisks.forEach((risk)=> writeRiskIntoRow(risk, targetRowFor(risk)));

  let newVmlBytes = null;
  let plannedNewCheckboxes = []; // kept in sync with the x14 <controls> collection below
  if(vmlPath && entries.has(vmlPath)){
    const vmlText = decoder.decode(entries.get(vmlPath));
    const firstShapeIdx = vmlText.indexOf('<v:shape id="_x0000_s');
    const lastShapeEndIdx = vmlText.lastIndexOf('</v:shape>') + '</v:shape>'.length;
    const header = vmlText.slice(0, firstShapeIdx);
    const footer = vmlText.slice(lastShapeEndIdx);
    const shapes = vmlText.slice(firstShapeIdx, lastShapeEndIdx)
      .split(/(?=<v:shape id="_x0000_s)/).filter(Boolean).map(mdcpParseShapeBlock);
    let maxShapeId = Math.max(...shapes.map(s=>parseInt(s.id.replace('_x0000_s',''),10)));

    const updatedExisting = shapes.map(s=>{
      const excelRow = s.anchor[2]+1;
      if(excelRow < firstDataRow || excelRow > lastTemplateRow) return s.raw;
      const risk = prebuiltRisks[excelRow - firstDataRow];
      return mdcpSetCheckedInBlock(s.raw, risk ? (risk.phases||[]).includes(s.label) : false);
    });
    const templateCheckboxes = shapes.filter(s=> (s.anchor[2]+1) === lastTemplateRow);
    const templateRowHeightPt = parseFloat(templateRowEl.getAttribute("ht")) || 15;
    const newBlocks = [];
    overflowRisks.forEach((risk)=>{
      const newRowNum = targetRowFor(risk);
      const rowsBelowTemplate = newRowNum - lastTemplateRow;
      templateCheckboxes.forEach(tpl=>{
        maxShapeId++;
        let block = tpl.raw.replace(/id="_x0000_s\d+"/, `id="_x0000_s${maxShapeId}"`);
        block = block.replace(/(<x:Anchor>\s*)([^<]+)(<\/x:Anchor>)/, (m,pre,anchorStr,post)=>{
          const parts = anchorStr.split(",").map(s=>s.trim());
          parts[2] = String(newRowNum-1); parts[6] = String(newRowNum-1);
          return pre + parts.join(", ") + post;
        });
        block = mdcpShiftMarginTop(block, rowsBelowTemplate * templateRowHeightPt);
        block = mdcpSetCheckedInBlock(block, (risk.phases||[]).includes(tpl.label));
        newBlocks.push(block);
        plannedNewCheckboxes.push({ shapeId: maxShapeId, sourceShapeId: tpl.id.replace('_x0000_s',''), rowNum: newRowNum });
      });
    });
    newVmlBytes = encoder.encode(header + updatedExisting.join("") + newBlocks.join("") + footer);
  }

  entries.set(sheetPath, encoder.encode(serializeXmlDoc(sheetDoc)));
  if(newVmlBytes) entries.set(vmlPath, newVmlBytes);

  // Modern Excel positions these checkboxes from a *second*, separate collection
  // (the x14 <controls> block in the worksheet XML) rather than the legacy VML
  // alone. Leaving that out of sync with the VML is exactly what caused the
  // checkbox-duplication problem in the original dashboard \u2014 every new row's
  // checkboxes need a matching new entry here too, not just a new VML shape.
  if(plannedNewCheckboxes.length){
    let sheetXmlWithControls = decoder.decode(entries.get(sheetPath));
    const controlsStart = sheetXmlWithControls.indexOf("<controls>");
    const controlsEnd = sheetXmlWithControls.indexOf("</controls>");
    if(controlsStart >= 0 && controlsEnd > controlsStart){
      const inner = sheetXmlWithControls.slice(controlsStart + "<controls>".length, controlsEnd);
      const blocks = inner.match(/<mc:AlternateContent[^>]*>[\s\S]*?<\/mc:AlternateContent>/g) || [];
      const bySourceId = new Map(blocks.map(b=>[b.match(/shapeId="(\d+)"/)[1], b]));
      let maxCheckBoxNum = 0;
      blocks.forEach(b=>{ const m = b.match(/name="Check Box (\d+)"/); if(m) maxCheckBoxNum = Math.max(maxCheckBoxNum, parseInt(m[1],10)); });

      const newControlBlocks = [];
      plannedNewCheckboxes.forEach(planned=>{
        const src = bySourceId.get(planned.sourceShapeId);
        if(!src) return; // every VML shape we cloned from should have a matching control \u2014 defensive skip if not
        maxSheetRelId++; maxCheckBoxNum++;
        const newRId = "rId" + maxSheetRelId;
        const row0 = planned.rowNum - 1;
        let block = src.replace(/shapeId="\d+"/, `shapeId="${planned.shapeId}"`);
        block = block.replace(/r:id="rId\d+"/, `r:id="${newRId}"`);
        block = block.replace(/name="Check Box \d+"/, `name="Check Box ${maxCheckBoxNum}"`);
        block = block.replace(/(<from>[\s\S]*?<\/from>)/, m => m.replace(/<xdr:row>\d+<\/xdr:row>/, `<xdr:row>${row0}</xdr:row>`));
        block = block.replace(/(<to>[\s\S]*?<\/to>)/, m => m.replace(/<xdr:row>\d+<\/xdr:row>/, `<xdr:row>${row0}</xdr:row>`));
        newControlBlocks.push(block);
        if(sheetRelsDoc){
          const relEl = sheetRelsDoc.createElement("Relationship");
          relEl.setAttribute("Id", newRId);
          relEl.setAttribute("Type", "http://schemas.openxmlformats.org/officeDocument/2006/relationships/ctrlProp");
          relEl.setAttribute("Target", ctrlPropTarget || "../ctrlProps/ctrlProp1.xml");
          sheetRelsDoc.documentElement.appendChild(relEl);
        }
      });
      sheetXmlWithControls = sheetXmlWithControls.slice(0, controlsEnd) + newControlBlocks.join("") + sheetXmlWithControls.slice(controlsEnd);
      entries.set(sheetPath, encoder.encode(sheetXmlWithControls));
    }
  }
  if(sheetRelsDoc) entries.set(sheetRelsPath, encoder.encode(serializeXmlDoc(sheetRelsDoc)));

  let wbXmlText = decoder.decode(entries.get("xl/workbook.xml"));
  if(/<calcPr\b[^>]*\/>/.test(wbXmlText)){
    if(!/fullCalcOnLoad/.test(wbXmlText)) wbXmlText = wbXmlText.replace(/<calcPr\b([^>]*)\/>/, '<calcPr$1 fullCalcOnLoad="1"/>');
  } else {
    wbXmlText = wbXmlText.replace('</workbook>', '<calcPr fullCalcOnLoad="1"/></workbook>');
  }
  entries.set("xl/workbook.xml", encoder.encode(wbXmlText));

  const files = [...entries.entries()].map(([name,data])=>({name,data}));
  const summary = {
    totalRisks: sortedRisks.length,
    intoExistingRows: prebuiltRisks.length,
    newRowsAdded: overflowRisks.length,
    blankedUnusedRows: lastPrebuiltId - prebuiltRisks.length
  };
  return { bytes: buildZip(files), summary };
}

/* =========================================================================
   EXPORTS
   ========================================================================= */

/* Register Excel export lives in the review and export module */

document.getElementById("export-mdcp-btn").addEventListener("click", ()=> document.getElementById("mdcp-template-file").click());
document.getElementById("mdcp-template-file").addEventListener("change", async (e)=>{
  const file = e.target.files[0];
  if(!file) return;
  try{
    const buf = await file.arrayBuffer();
    const { bytes, summary } = await buildMdcpTemplateExport(buf, rdExportRisks());
    downloadWorkbook(bytes, file.name.replace(/\.xlsx$/i, "") + "_updated.xlsx");
    let msg = `Wrote ${summary.totalRisks} risk${summary.totalRisks===1?"":"s"} into the template \u2014 ${summary.intoExistingRows} into existing rows`;
    if(summary.newRowsAdded) msg += `, ${summary.newRowsAdded} new row${summary.newRowsAdded===1?"":"s"} added`;
    if(summary.blankedUnusedRows) msg += `, ${summary.blankedUnusedRows} unused template row${summary.blankedUnusedRows===1?"":"s"} cleared`;
    msg += ".";
    if(RISKS.some(r=>r._archived)) msg += ` (${RISKS.filter(r=>r._archived).length} archived risk${RISKS.filter(r=>r._archived).length===1?"":"s"} excluded.)`;
    alert(msg);
  }catch(err){
    alert("Couldn't write into that template: " + err.message);
  }
  e.target.value = "";
});

document.getElementById("export-csm-btn").addEventListener("click", ()=>{
  const fw = activeFramework;
  const phaseHdr = fw.phasesEnabled ? [phaseLabelOf(fw)] : [];
  const headers = ["ID","Flagged","Source","Pathway","Receptor","Receptor category", ...phaseHdr,
    "Inh. Consequence","Inh. Likelihood","Inh. Rating","Controls / Treatment",
    "Res. Consequence","Res. Likelihood","Res. Rating","Acceptability","Comments","Last edited"];
  const rows = [headers];
  rdExportRisks().forEach(r=>{
    rows.push([r.id, r._flagged ? "Yes" : "", richHtmlToPlainText(r.source), richHtmlToPlainText(r.pathway), richHtmlToPlainText(r.receptor), r.receptorCategory||"",
      ...(fw.phasesEnabled ? [(r.phases||[]).join(", ")] : []),
      r.inhCons||"", r.inhLike||"", r.inhRating||"", richHtmlToPlainText(r.treatment),
      r.resCons||"", r.resLike||"", r.resRating||"",
      (fw.acceptability && r.resRating) ? fw.acceptability[r.resRating] || "" : "",
      r.comments||"", formatTimestamp(r._lastEditedAt)]);
  });
  const inhRatingCol = headers.indexOf("Inh. Rating"), resRatingCol = headers.indexOf("Res. Rating");
  const styleFor = (r,c)=>{
    if(r===0) return 1;
    if(c===inhRatingCol) return ratingStyleId(rows[r][inhRatingCol]);
    if(c===resRatingCol) return ratingStyleId(rows[r][resRatingCol]);
    return 0;
  };
  const bytes = buildWorkbook([{name:"CSM risk summary", rows, styleFor, colCount: headers.length}]);
  downloadWorkbook(bytes, `${(project.name||"csm").replace(/[^a-z0-9]+/gi,"_")}_CSM_export.xlsx`);
});

/* =========================================================================
   ACCESSIBILITY: keyboard support for chip "buttons", Escape-to-close for
   the two modal overlays, and focus handed to the drawer's first field
   when it opens.
   ========================================================================= */
function makeChipsFocusable(root){
  (root||document).querySelectorAll(".chip:not([tabindex])").forEach(el=>{
    el.setAttribute("tabindex","0");
    el.setAttribute("role","button");
  });
}
document.addEventListener("keydown", (e)=>{
  if((e.key==="Enter"||e.key===" ") && e.target.classList && e.target.classList.contains("chip")){
    e.preventDefault();
    e.target.click();
  }
  if(e.key==="Escape"){
    if(document.getElementById("paste-overlay").classList.contains("show")) closePasteDialog();
    else if(document.getElementById("domain-overlay").classList.contains("show")) closeDomainManager();
    else if(document.getElementById("theme-overlay").classList.contains("show")) closeThemeManager();
    else if(document.getElementById("transfer-overlay").classList.contains("show")) closeTransferDialog();
    // Risk drawer deliberately excluded \u2014 Save/Cancel/Archive/Restore/Delete are the only way to close it.
  }
});

/* =========================================================================
   PASTE FROM AGENT
   Loads the JSON block produced by the Risk Assessment agent. Nothing is
   trusted as-is: ids are renumbered, ratings are recomputed from the target
   framework's matrix, and any value that isn't in the framework's lists is
   cleared and the risk flagged (\ud83d\udea9) so it gets a human look.
   ========================================================================= */
function pasteNorm(s){
  return String(s==null?"":s).toLowerCase().replace(/&/g,"and").replace(/[^a-z0-9]/g,"");
}
// "" for empty input, null for no match, otherwise the framework's own spelling.
function pasteMatch(value, options){
  if(value==null || String(value).trim()==="") return "";
  const n = pasteNorm(value);
  const opts = options || [];
  let hit = opts.find(o=>pasteNorm(o)===n);
  if(hit===undefined){ const ns = n.replace(/s$/,""); hit = opts.find(o=>pasteNorm(o).replace(/s$/,"")===ns); }
  return hit===undefined ? null : hit;
}
function pasteList(val, options, what, probs){
  const arr = Array.isArray(val) ? val : (typeof val==="string" && val.trim() ? val.split(/[,;]/) : []);
  const out = [];
  arr.forEach(v=>{
    const m = pasteMatch(v, options);
    if(m===null) probs.push(`${what} "${String(v).trim()}" not recognised`);
    else if(m && !out.includes(m)) out.push(m);
  });
  return out;
}
function pasteRich(v){
  if(v==null) return "";
  if(Array.isArray(v)) return v.length ? "<ul>" + v.map(x=>"<li>"+esc(String(x==null?"":x))+"</li>").join("") + "</ul>" : "";
  const s = String(v).replace(/<br\s*\/?>/gi,"<br>");
  return /<(b|strong|i|em|u|ul|ol|li|br|p|div|mark)[ >]/i.test(s) ? sanitizeRichHtml(s) : s;
}
function pastePlain(v){
  if(v==null) return "";
  if(Array.isArray(v)) return v.map(x=>"\u2022 "+String(x==null?"":x).trim()).join("\n");
  const s = String(v);
  return /<[a-z][^>]*>/i.test(s) ? richHtmlToPlainText(s) : s;
}

function parseAgentJson(text){
  let t = String(text||"").trim();
  if(!t) throw new Error("Nothing to load. Paste the agent's JSON code block first.");
  t = t.replace(/```[a-zA-Z]*/g,"").trim();
  const rdEmb = t.match(/id=["']risk-data["'][^>]*>([\s\S]*?)<\/script>/i);
  if(rdEmb) t = rdEmb[1].trim();
  const starts = [t.indexOf("{"), t.indexOf("[")].filter(i=>i>=0);
  const end = Math.max(t.lastIndexOf("}"), t.lastIndexOf("]"));
  if(!starts.length) throw new Error("No JSON found. Copy the whole code block from the agent, from the first { to the last }.");
  if(end < Math.min(...starts)) throw new Error("The JSON looks cut off (it never closes). Ask the agent to re-issue it in smaller batches.");
  const body = t.slice(Math.min(...starts), end+1);
  try{ return JSON.parse(body); }
  catch(e1){
    try{ return JSON.parse(body.replace(/,\s*([}\]])/g,"$1")); }
    catch(e2){ throw new Error("That isn't valid JSON (" + e1.message + "). The block may be cut off. Copy it again, or ask the agent to re-issue the JSON in batches."); }
  }
}

function pasteFrameworkKey(key, a){
  const k = String(key==null?"":key).trim().toLowerCase();
  if(FRAMEWORKS[k]) return k;
  const aliases = {"dmpe":"mdcp","works approval":"dwer","epa":"epa-emp","part iv":"epa-emp","epbc":"epbc-emp"};
  if(aliases[k]) return aliases[k];
  if(a && a.frameworkId){ const f = String(a.frameworkId).trim().toLowerCase(); if(FRAMEWORKS[f]) return f; if(aliases[f]) return aliases[f]; }
  if(a && a.customFramework) return "custom";
  return null;
}

function pasteAssessmentsFrom(data){
  if(Array.isArray(data)) data = { risks: data };
  if(!data || typeof data!=="object") throw new Error("The pasted JSON isn't a risk register.");
  const out = [];
  const addIn = (key, fw, label, risks)=>{
    const prev = out.find(o=>o.key===key);
    if(prev) prev.risks = prev.risks.concat(risks); else out.push({key, fw, label, risks});
  };
  const customFw = (cf)=>{ const fw = validateFrameworkConfig(rdFullCustom(JSON.parse(JSON.stringify(cf)))); fw.id = "custom"; return fw; };
  if(data.assessments && typeof data.assessments==="object" && !Array.isArray(data.assessments)){
    Object.entries(data.assessments).forEach(([k,a])=>{
      if(!a || !Array.isArray(a.risks)) return;
      const key = pasteFrameworkKey(k, a);
      if(!key) throw new Error(`Unknown framework "${k}". Use mdcp, dwer, epa-emp or epbc-emp, or "custom" with a customFramework.`);
      addIn(key, key==="custom" ? customFw(a.customFramework) : FRAMEWORKS[key], a.label||"", a.risks);
    });
  } else if(Array.isArray(data.risks)){
    let key = null;
    const fid = data.frameworkId || data.framework;
    if(fid){
      key = pasteFrameworkKey(fid, data);
      if(!key) throw new Error(`Unknown framework "${fid}".`);
    } else key = activeFramework.id in FRAMEWORKS ? activeFramework.id : "custom";
    const fw = key==="custom" ? (data.customFramework ? customFw(data.customFramework) : activeFramework) : FRAMEWORKS[key];
    addIn(key, fw, data.assessmentLabel||"", data.risks);
  }
  if(!out.length || !out.some(o=>o.risks.length)) throw new Error("No risks found in the pasted JSON.");
  return out;
}

function cleanAgentRisks(fw, list, startId, issues, fixes, useProjectDomains){
  const now = new Date().toISOString();
  const tl = taxLabels(fw);
  const factors = fw.taxonomyType==="factor-indicator" ? Object.keys(fw.factorIndicators) : [];
  const domainOpts = fw.domainsEnabled ? [...new Set([...(fw.domainOptions||[]), ...(useProjectDomains && Array.isArray(project.domainOptions)?project.domainOptions:[])])] : [];
  const cats = fw.ratingCategories || RATING_ORDER;
  const names = {inhCons:"Inherent consequence", inhLike:"Inherent likelihood", resCons:"Residual consequence", resLike:"Residual likelihood"};
  let id = startId;
  const out = [];
  let agentFlags = 0;
  list.forEach((raw, idx)=>{
    if(!raw || typeof raw!=="object" || Array.isArray(raw)){ issues.push(`Item ${idx+1} skipped (not a risk).`); return; }
    const r = JSON.parse(JSON.stringify(raw));
    const probs = [];
    if(r._flagged===undefined && r.flagged!==undefined) r._flagged = (r.flagged===true || r.flagged==="true");
    delete r.flagged;
    ["sourceShort","pathwayShort","receptorShort"].forEach(k=>{ r[k] = r[k]==null ? "" : String(r[k]).trim(); });
    r.id = id++;
    r.linkId = newLinkId();
    ["source","pathway","receptor","treatment"].forEach(k=>{ r[k] = pasteRich(r[k]); });
    if(!pastePlain(r.source).trim() || !pastePlain(r.pathway).trim() || !pastePlain(r.receptor).trim()) probs.push("source, pathway or receptor is blank");

    if(fw.taxonomyType==="factor-indicator"){
      let f = pasteMatch(r.factor, factors);
      if(!f){
        const owners = factors.filter(x=>pasteMatch(r.indicator, fw.factorIndicators[x]));
        if(owners.length===1){ f = owners[0]; if(r.factor) probs.push(`${tl.top} "${r.factor}" changed to "${f}"`); }
      }
      if(!f){ probs.push(`${tl.top} "${r.factor||""}" not recognised`); r.factor = ""; r.indicator = ""; }
      else {
        r.factor = f;
        const i = pasteMatch(r.indicator, fw.factorIndicators[f]);
        if(!i){ probs.push(`${tl.sub} "${r.indicator||""}" not valid under "${f}"`); r.indicator = ""; } else r.indicator = i;
      }
    } else {
      const c = pasteMatch(r.receptorCategory, fw.receptorCategories);
      if(!c){ probs.push(`receptor category "${r.receptorCategory||""}" not recognised`); r.receptorCategory = ""; } else r.receptorCategory = c;
    }
    if(fw.domainsEnabled) r.domains = pasteList(r.domains, domainOpts, "domain", probs); else delete r.domains;
    if(fw.phasesEnabled){
      r.phases = pasteList(r.phases, fw.phaseOptions, phaseLabelOf(fw).toLowerCase(), probs);
      if(!r.phases.length) probs.push("no phase selected");
    } else delete r.phases;

    [["inhCons",fw.consLevels],["inhLike",fw.likeLevels],["resCons",fw.consLevels],["resLike",fw.likeLevels]].forEach(([k,opts])=>{
      const v = pasteMatch(r[k], opts);
      if(v===null){ probs.push(`${names[k].toLowerCase()} "${r[k]}" not in this framework`); r[k] = ""; }
      else { if(!v) probs.push(`${names[k].toLowerCase()} missing`); r[k] = v; }
    });
    ["inh","res"].forEach(p=>{
      const given = r[p+"Rating"];
      const calc = (r[p+"Cons"] && r[p+"Like"]) ? computeRating(fw, r[p+"Cons"], r[p+"Like"]) : "";
      const clean = calc==="\u2014" ? "" : calc;
      if(given && clean && pasteNorm(given)!==pasteNorm(clean)) fixes.push(`#${r.id} ${p==="inh"?"inherent":"residual"}: ${given} \u2192 ${clean}`);
      r[p+"Rating"] = clean;
    });
    if(r.inhRating && r.resRating && cats.indexOf(r.resRating) > cats.indexOf(r.inhRating)) probs.push("residual rating is higher than inherent");

    (fw.extraSelectFields||[]).forEach(f=>{
      const v = pasteMatch(r[f.key], f.options);
      if(v===null){ probs.push(`${f.label.toLowerCase()} "${r[f.key]}" not recognised`); r[f.key] = ""; } else r[f.key] = v;
    });
    (fw.extraTextFields||[]).forEach(f=>{ r[f.key] = pastePlain(r[f.key]); });
    if(fw.offsetsEnabled){
      const v = pasteMatch(r.residualSignificance, fw.significanceOptions || DEFAULT_SIGNIFICANCE_OPTIONS);
      if(v===null){ probs.push(`residual significance "${r.residualSignificance}" not recognised`); r.residualSignificance = ""; } else r.residualSignificance = v;
      r.offsetNotes = pastePlain(r.offsetNotes);
    }
    if(r.comments!=null || fw.showComments!==false) r.comments = pastePlain(r.comments);
    if(fw.outcomesEnabled) r.outcomeCodes = Array.isArray(r.outcomeCodes) ? r.outcomeCodes.map(x=>String(x).trim()).filter(Boolean) : [];

    if(r._flagged===true) agentFlags++;
    r._flagged = r._flagged===true || probs.length>0;
    r._archived = false;
    delete r._needsReview; delete r._transfer;
    r._lastEditedAt = now;
    if(probs.length) issues.push(`#${r.id}: ${probs.join("; ")}`);
    out.push(r);
  });
  out.agentFlags = agentFlags;
  return out;
}

function applyAgentPaste(text, mode){
  const data = parseAgentJson(text);
  const incoming = pasteAssessmentsFrom(data);
  const issues = [], fixes = [];
  const pp = (data && !Array.isArray(data) && data.project && typeof data.project==="object") ? data.project : {};
  const name = typeof pp.name==="string" ? pp.name.trim() : (data && typeof data.project==="string" ? data.project.trim() : "");
  const rdCtx = rdContextFrom(data, pp);
  const rdAll = [];
  let loaded = 0, agentFlags = 0;
  const landed = [];

  if(mode==="replace"){
    const assessments = {};
    incoming.forEach(inc=>{
      const risks = cleanAgentRisks(inc.fw, inc.risks, 1, issues, fixes, false);
      loaded += risks.length; agentFlags += risks.agentFlags; rdAll.push(...risks);
      assessments[inc.key] = { frameworkId: inc.key, customFramework: inc.key==="custom" ? inc.fw : undefined, label: inc.label, risks: [...risks] };
      landed.push(`${shortFwName(inc.fw)} (${risks.length})`);
    });
    const ak = pasteFrameworkKey(data && data.activeFrameworkId);
    const activeKey = (ak && assessments[ak]) ? ak : incoming[0].key;
    applyLoadedData({ formatVersion: 2, activeFrameworkId: activeKey, assessments,
      project: { name, context: rdCtx || undefined, themes: {source:[], pathway:[], receptor:[]}, outcomeLibrary: Array.isArray(pp.outcomeLibrary) ? pp.outcomeLibrary : [] } });
    rdApplyShortThemes(rdAll);
    ensureOutcomeLibrary();
    renderAll();
    renderHeader();
  } else {
    stashActive();
    incoming.forEach(inc=>{
      let fw = inc.fw;
      let target = ASSESSMENTS[inc.key];
      if(inc.key==="custom" && target && target.customFramework){
        if(target.customFramework.name !== fw.name) issues.push(`Custom framework "${fw.name}" differs from the open one ("${target.customFramework.name}"). Risks were checked against the open one.`);
        fw = target.customFramework;
      }
      if(!target) target = ASSESSMENTS[inc.key] = { frameworkId: inc.key, customFramework: inc.key==="custom" ? fw : undefined, label: inc.label, risks: [] };
      if(!Array.isArray(target.risks)) target.risks = [];
      const start = target.risks.reduce((m,r)=>Math.max(m, Number(r.id)||0), 0) + 1;
      const risks = cleanAgentRisks(fw, inc.risks, start, issues, fixes, true);
      loaded += risks.length; agentFlags += risks.agentFlags;
      risks.forEach(r=>target.risks.push(r));
      rdAll.push(...risks);
      landed.push(`${shortFwName(fw)} (${risks.length})`);
    });
    if(!project.name && name){ project.name = name; document.getElementById("project-name").value = name; }
    if(!project.context && rdCtx) project.context = rdCtx;
    rdApplyShortThemes(rdAll);
    activateAssessment(incoming[0].key);
    renderHeader();
  }

  rdLastPaste = { fixes: fixes.length, issues: issues.length, agentFlags };
  rdRenderContext();
  const list = (arr)=> arr.slice(0,15).map(x=>"\u2013 "+x).join("\n") + (arr.length>15 ? `\n\u2026and ${arr.length-15} more` : "");
  let msg = `Loaded ${loaded} risk${loaded===1?"":"s"} into ${landed.join(", ")}.`;
  if(fixes.length) msg += `\n\n${fixes.length} rating${fixes.length===1?"":"s"} corrected to match the matrix:\n` + list(fixes);
  if(issues.length) msg += `\n\n${issues.length} item${issues.length===1?"":"s"} need a look (flagged \ud83d\udea9):\n` + list(issues);
  if(agentFlags) msg += `\n\n${agentFlags===1?"1 risk was":agentFlags+" risks were"} flagged by the agent because ${agentFlags===1?"it rests":"they rest"} on assumptions.`;
  if(fixes.length || issues.length || agentFlags) msg += `\n\nUse "\ud83d\udea9 Flagged only" to review them.`;
  msg += `\n\nClick "Save copy" to keep a copy.`;
  return msg;
}

function openPasteDialog(){
  document.getElementById("paste-error").classList.add("hidden");
  document.getElementById("paste-overlay").classList.add("show");
  document.getElementById("paste-text").focus();
}
function closePasteDialog(){ document.getElementById("paste-overlay").classList.remove("show"); }
document.getElementById("paste-agent-btn").addEventListener("click", openPasteDialog);
document.getElementById("paste-cancel").addEventListener("click", closePasteDialog);
document.getElementById("paste-go").addEventListener("click", ()=>{
  const mode = (document.querySelector('input[name="paste-mode"]:checked')||{}).value || "replace";
  if(mode==="replace" && hasUnsavedChanges() && !confirm("Replacing clears what's open now, and you have unsaved changes. Continue without saving?")) return;
  const errBox = document.getElementById("paste-error");
  try{
    const summary = applyAgentPaste(document.getElementById("paste-text").value, mode);
    closePasteDialog();
    document.getElementById("paste-text").value = "";
    alert(summary);
  }catch(err){
    errBox.textContent = err.message;
    errBox.classList.remove("hidden");
  }
});


/* =========================================================================
   INIT
   ========================================================================= */


/* =========================================================================
   HOSTED DASHBOARD INTEGRATION
   Loads the project data embedded in the HTML file (from the Risk Assessment
   agent or a saved copy), keeps autosave per file, and saves a clean .html copy.
   ========================================================================= */
let rdLastPaste = null;
function rdAutosaveKey(){ return AUTOSAVE_KEY + "|" + location.pathname + "|" + (window.__rdKeyName || ""); }
function rdFullCustom(cf){
  if(!cf || cf.taxonomyType) return cf;
  const phases = Array.isArray(cf.phaseOptions) && cf.phaseOptions.length ? cf.phaseOptions : null;
  return { id:"custom", name: cf.name || "Custom risk matrix", consLevels: cf.consLevels, likeLevels: cf.likeLevels,
    ratingCategories: ["Low","Medium","High","Extreme"], matrix: cf.matrix, trackInherentResidual: true,
    taxonomyType: "receptor-category",
    receptorCategories: Array.isArray(cf.receptorCategories) && cf.receptorCategories.length ? cf.receptorCategories : ["Environment","Public health and amenity"],
    phasesEnabled: !!phases, phaseOptions: phases || undefined, showComments: true, exports: ["flat"] };
}
function rdContextFrom(data, pp){
  if(pp && pp.context && typeof pp.context === "object") return pp.context;
  if(!data || Array.isArray(data)) return null;
  const c = {};
  ["proponent","location","summary"].forEach(k=>{ if(typeof data[k]==="string" && data[k].trim()) c[k] = data[k].trim(); });
  if(Array.isArray(data.assumptions)) c.assumptions = data.assumptions.map(x=>String(x).trim()).filter(Boolean);
  return Object.keys(c).length ? c : null;
}
function rdApplyShortThemes(risks){
  project.themes = project.themes || {};
  ["source","pathway","receptor"].forEach(role=>{
    if(!Array.isArray(project.themes[role])) project.themes[role] = [];
    const list = project.themes[role];
    risks.forEach(r=>{
      const label = String(r[role+"Short"] || "").trim();
      delete r[role+"Short"];
      const n = pasteNorm(label);
      if(!n) return;
      let t = list.find(x=>pasteNorm(x.label)===n);
      if(!t){ t = { id: role[0]+"-a-"+Math.random().toString(36).slice(2,9), label: label.slice(0,60), keywords: [], members: [] }; list.push(t); }
      list.forEach(x=>{ if(x!==t && Array.isArray(x.members)) x.members = x.members.filter(id=>id!==r.linkId); });
      if(!Array.isArray(t.members)) t.members = [];
      if(!t.members.includes(r.linkId)) t.members.push(r.linkId);
    });
  });
}
function rdRenderContext(){
  const el = document.getElementById("rd-context"); if(!el) return;
  const c = project && project.context;
  const as = c && Array.isArray(c.assumptions) ? c.assumptions : [];
  if(!c || (!c.summary && !as.length)){ el.innerHTML = ""; return; }
  const meta = [c.proponent, c.location].filter(Boolean).join(" | ");
  el.innerHTML = `<details class="rd-context" open><summary>Project context${meta ? ` <span class="panel-sub" style="font-weight:400;">${esc(meta)}</span>` : ""}</summary>` +
    (c.summary ? `<p>${esc(c.summary)}</p>` : "") +
    (as.length ? `<h4>Assumptions</h4><ul>${as.map(a=>`<li>${esc(a)}</li>`).join("")}</ul>` : "") + `</details>`;
}
function rdNotice(msg){
  const el = document.getElementById("rd-notice"); if(!el) return;
  if(!msg){ el.innerHTML = ""; return; }
  el.innerHTML = `<div class="rd-notice" role="status"><div style="flex:1;">${esc(msg)}</div><button class="btn" type="button" aria-label="Dismiss">Close</button></div>`;
  el.querySelector("button").onclick = ()=>{ el.innerHTML = ""; };
}
function rdSaveCopy(){
  const json = JSON.stringify(Object.assign(serializeProject(), { savedAt: new Date().toISOString() })).replace(/<\//g, "<\\/");
  let html;
  if(__RD_ME){
    html = '<!DOCTYPE html>\n<html lang="en">\n<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Risk Dashboard</title></head>\n<body>\n' +
      '<p id="boot">Loading the risk dashboard. This file needs an internet connection to open.</p>\n' +
      '<script type="application/json" id="risk-data">' + json + '<\/script>\n<script src="' + __RD_ME + '"><\/script>\n</body>\n</html>\n';
  } else {
    html = "<!DOCTYPE html>\n" + __RD_SRC.replace(/(<script type="application\/json" id="risk-data">)[\s\S]*?(<\/script>)/, (a,b,c)=>b + json + c);
  }
  const blob = new Blob([html], {type:"text/html"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = (project.name || "risks").replace(/[^a-z0-9]+/gi, "_") + "_risk_dashboard.html";
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(()=>URL.revokeObjectURL(url), 2000);
  clearAutosave();
  markSaved();
  renderHeader();
}
document.getElementById("rd-save-copy").addEventListener("click", rdSaveCopy);
const __rdRenderAll = renderAll;
renderAll = function(){ __rdRenderAll.apply(this, arguments); rdRenderContext(); };
const __rdRenderHeader = renderHeader;
renderHeader = function(){ __rdRenderHeader.apply(this, arguments); document.title = (project.name ? project.name + " | " : "") + "Risk Assessment Dashboard"; };
function rdLoadEmbedded(){
  const el = document.getElementById("risk-data");
  const raw = el ? el.textContent.trim() : "";
  if(!raw || (raw.charAt(0) !== "{" && raw.charAt(0) !== "[")) return;
  let data;
  try{ data = JSON.parse(raw); }
  catch(e){ rdNotice("The data in this file has an error (" + e.message + "). Ask the agent to re-issue the dashboard."); return; }
  try{
    if(data && !Array.isArray(data) && (data.assessments || data.formatVersion)){
      applyLoadedData(data);
      ensureOutcomeLibrary();
      renderAll();
    } else {
      const msg = applyAgentPaste(raw, "replace");
      if(rdLastPaste && (rdLastPaste.fixes || rdLastPaste.issues)) rdNotice(msg.replace(/\n\nClick "Save copy" to keep a copy\.$/, ""));
    }
    window.__rdKeyName = project.name || "";
    markSaved();
    renderHeader();
  }catch(e){ rdNotice("Could not load the data in this file: " + e.message); }
}


/* =========================================================================
   SPR MODEL
   The project has ONE source-pathway-receptor model: a short list of
   sources, pathways, receptors and impacts (project.sprModel). Each risk is
   a linkage that points at one item of each (r.sprIds). Items appear once in
   the figure however many risks use them, so nothing is duplicated.
   Older files and agent output that only carry text labels are converted
   into model items on load, matching labels that differ only by case or
   punctuation. Near-duplicates can then be merged in the Model tab.
   ========================================================================= */
const SPR_ALL = ["source","pathway","receptor","impact"];
const SPR_LABEL = {source:"Source", pathway:"Pathway", receptor:"Receptor", impact:"Impact"};
const SPR_PLURAL = {source:"Sources", pathway:"Pathways", receptor:"Receptors", impact:"Impacts"};
const SPR_DESC = {source:"What causes harm", pathway:"How it reaches the receptor", receptor:"What could be harmed", impact:"The adverse effect"};
const SPR_NOTE_HINT = {source:"What is released, and from where", pathway:"Mechanism and medium", receptor:"Value, sensitivity and distance", impact:"What changes for the receptor"};
const SPR_FIELD = {source:"sourceGroup", pathway:"pathwayGroup", receptor:"receptorGroup", impact:"impact"};
const SPR_LIST = {source:"sources", pathway:"pathways", receptor:"receptors", impact:"impacts"};
const SPR_PREFIX = {source:"S", pathway:"P", receptor:"R", impact:"I"};
const SPR_REL = ["Explicit","Derived","Assumed"];
const SPR_CONF = ["High","Medium","Low"];
const SPR_REVIEW = ["Draft","Approved","Rework required"];
const SPR_CONTROL = ["Source","Pathway","Receptor","Several"];
const SPR_COL = {
  source:{band:"#EEF4F8", stroke:"#3C6E8F"}, pathway:{band:"#EFF5EC", stroke:"#4F7942"},
  receptor:{band:"#F8EEEE", stroke:"#A73434"}, impact:{band:"#F8F2E6", stroke:"#8A6A18"}
};
const SPR_RCOL = {Low:"#5C8A5C", Medium:"#C99A2E", High:"#C4652B", Extreme:"#A73434"};
const SPR_GENERIC = new Set(["siteactivity","directexposure","environment","environmentalharm","environmentalvalues","environmentalreceptors",
  "controlfailure","impact","impacts","various","other","general","na","tbc","tbd","unknown","receptor","source","pathway"]);
const SPR_STOP = new Set("the a an of and or to in on at from for with by near via into onto as its their site project area areas".split(" "));
let sprF = {tax:"All", phase:"", review:"all", q:""};
let sprShowImpact = true;
let sprQueueStatus = "all";
let sprSelectedId = null;
let sprSel = null;
let sprDismissed = new Set();
let sprPendingModel = null;
let sprPendingIsAgent = false;
const RISK_REVIEW = ["Needs review","Approved","Rework required"];
function rdReviewer(){
  let v = "";
  try{ v = localStorage.getItem("rdReviewerInitials") || ""; }catch(e){}
  if(!v){
    v = String(prompt("Your initials, for the approval record:") || "").trim().slice(0,12);
    if(v){ try{ localStorage.setItem("rdReviewerInitials", v); }catch(e){} }
  }
  return v;
}
function rdStamp(){ return new Date().toISOString(); }
function rdFmtDate(iso){ if(!iso) return ""; const d = new Date(iso); return isNaN(d.getTime()) ? "" : d.toLocaleDateString(undefined, {day:"numeric", month:"short", year:"numeric"}); }
function rdNeedsApproval(r){ return r.origin==="AI" && r.riskStatus!=="Approved"; }
function sprNeedsApproval(r){ return r.sprOrigin==="AI" && r.reviewStatus!=="Approved"; }
function rdApproveRisk(r, who){ r.riskStatus = "Approved"; r.riskApprovedBy = who; r.riskApprovedAt = rdStamp(); r._lastEditedAt = rdStamp(); }
function rdApproveLink(r, who){ r.reviewStatus = "Approved"; r.sprApprovedBy = who; r.sprApprovedAt = rdStamp(); r._lastEditedAt = rdStamp(); }
function rdAiTag(kind, r){
  const ai = kind==="risk" ? r.origin==="AI" : r.sprOrigin==="AI";
  if(!ai) return "";
  const st = kind==="risk" ? r.riskStatus : r.reviewStatus;
  const by = kind==="risk" ? r.riskApprovedBy : r.sprApprovedBy, at = kind==="risk" ? r.riskApprovedAt : r.sprApprovedAt;
  if(st==="Approved") return `<span class="rd-ai ok" title="AI-generated. Approved${by?" by "+sprX(by):""}${at?" on "+rdFmtDate(at):""}.">AI \u2713</span>`;
  if(st==="Rework required") return `<span class="rd-ai bad" title="AI-generated. Marked for rework.">AI \u00b7 rework</span>`;
  return `<span class="rd-ai" title="AI-generated. Needs review and approval.">AI \u00b7 review</span>`;
}
let rdView = "register";
let rdShowNeedsApproval = false;
pathwayTab = "spr";

function sprX(s){ return String(s==null?"":s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"); }
function sprKey(v){ return pasteNorm(v); }
function sprHighest(list, key){
  return list.map(r=>r[key]).filter(Boolean).sort((a,b)=>RATING_ORDER.indexOf(b)-RATING_ORDER.indexOf(a))[0] || "";
}
function sprBadge(status){
  const cls = status==="Approved" ? "spr-ok" : status==="Rework required" ? "spr-bad" : "spr-draft";
  return `<span class="spr-badge ${cls}">${sprX(status||"Draft")}</span>`;
}
function sprRatingPill(v){ return v ? `<span class="rating ${v}">${v}</span>` : "\u2014"; }
function rdRenderContext(){ const el = document.getElementById("rd-context"); if(el) el.innerHTML = ""; }

/* ---- The model ---- */
function sprModel(){
  if(!project.sprModel || typeof project.sprModel !== "object" || Array.isArray(project.sprModel)) project.sprModel = {};
  const m = project.sprModel;
  ["sources","pathways","receptors","impacts","ruledOut"].forEach(k=>{ if(!Array.isArray(m[k])) m[k] = []; });
  return m;
}
function sprItems(role){ return sprModel()[SPR_LIST[role]]; }
function sprItem(role, id){ return sprItems(role).find(x=>x.id===id); }
function sprNewId(role){
  const n = sprItems(role).reduce((m,x)=>{ const k = parseInt(String(x.id).replace(/^\D+/,""),10); return isNaN(k) ? m : Math.max(m,k); }, 0) + 1;
  return SPR_PREFIX[role] + n;
}
function sprFindOrCreate(role, label){
  const clean = String(label==null?"":label).trim().slice(0,60);
  const k = sprKey(clean); if(!k) return "";
  let it = sprItems(role).find(x=>sprKey(x.label)===k);
  if(!it){ it = {id:sprNewId(role), label:clean, note:""}; sprItems(role).push(it); }
  return it.id;
}
function sprIdOf(r, role){ return (r.sprIds && r.sprIds[role]) || ""; }
function sprGroupOf(r, role){
  const it = sprItem(role, sprIdOf(r, role));
  return it ? it.label : String(r[SPR_FIELD[role]]==null ? "" : r[SPR_FIELD[role]]).trim();
}
function sprAllProjectRisks(){
  stashActive();
  const out = []; const seen = new Set();
  Object.values(ASSESSMENTS).forEach(a=>(a.risks||[]).forEach(r=>{ if(!seen.has(r)){ seen.add(r); out.push(r); } }));
  return out;
}
function sprUsage(role, id){ return sprAllProjectRisks().filter(r=>!r._archived && sprIdOf(r, role)===id).length; }

/* ---- Suggested items when a risk has none (always marked Derived) ---- */
function sprClassify(r){
  const txt = k => richHtmlToPlainText(r[k]||"").toLowerCase();
  const own = {source: txt("source"), pathway: txt("pathway"), receptor: txt("receptor")};
  const spr = [own.source, own.pathway, own.receptor].join(" ");
  const tax = [r.factor, r.indicator, r.receptorCategory].filter(Boolean).join(" ").toLowerCase();
  const pick = (rules, texts, fallback)=>{ for(const t of texts){ if(!t) continue; const hit = rules.find(([re])=>re.test(t)); if(hit) return hit[1]; } return fallback; };
  const SRC = [[/generator|power station|exhaust/, "Power generation"], [/hydrocarbon|fuel|diesel|oil|chemical|reagent|cyanide/, "Chemical or hydrocarbon storage"],
    [/tailings|tsf/, "Tailings storage"], [/dewater|borefield|abstraction|pumping/, "Groundwater abstraction"], [/clearing|vegetation removal/, "Vegetation clearing"],
    [/waste rock|landform|wrl|stockpile/, "Waste rock and stockpiles"], [/pit|excavat|earthwork|ground disturbance/, "Excavation and earthworks"],
    [/vehicle|traffic|haul|road/, "Vehicle movements"], [/storm|flood|rain/, "Stormwater and rainfall"], [/camp|wastewater|sewage|landfill/, "Camp and waste facilities"]];
  const PATH = [[/runoff|stormwater|overland|sediment/, "Surface runoff"], [/seepage|infiltrat|leach/, "Seepage to groundwater"],
    [/drawdown|abstraction|dewater/, "Groundwater drawdown"], [/dust|airborne|emission|exhaust/, "Air emissions and dust"],
    [/strike|collision/, "Vehicle strike"], [/entrap|fall/, "Entrapment"], [/spill|release|leak|loss of containment/, "Spill or loss of containment"],
    [/clearing|removal/, "Direct removal"], [/erosion|gully|rill/, "Erosion"], [/flow|diversion|shadow/, "Altered surface flow"]];
  const REC = [[/groundwater|aquifer|bore/, "Groundwater"], [/surface water|creek|lake|wetland|drainage line|river/, "Surface water"],
    [/fauna|malleefowl|bird|animal|reptile|mammal/, "Native fauna"], [/flora|vegetation|mulga|woodland|plant/, "Native vegetation"],
    [/topsoil|soil|land/, "Soil"], [/people|community|resident|public|homestead|town/, "People and community"]];
  const IMP = [[/contaminat|quality|leach|acid|saline|pollut/, "Contamination"], [/removal|clearing|habitat|loss/, "Habitat or vegetation loss"],
    [/death|injur|strike|entrap/, "Injury or death"], [/drawdown|flow|hydrolog/, "Altered hydrology"], [/erosion|stability|collapse/, "Landform instability"]];
  return {
    source: pick(SRC, [own.source, spr, tax], "Site activity"),
    pathway: pick(PATH, [own.pathway, spr], "Direct exposure"),
    receptor: pick(REC, [own.receptor, tax], "Environment"),
    impact: pick(IMP, [own.receptor + " " + own.pathway, spr, tax], "Environmental harm")
  };
}
function rdEnsureSprRisk(r){
  if(!r.sprIds || typeof r.sprIds !== "object" || Array.isArray(r.sprIds)) r.sprIds = {};
  let suggested = null;
  SPR_ALL.forEach(role=>{
    if(sprItem(role, r.sprIds[role])) return;
    let label = String(r[SPR_FIELD[role]]==null ? "" : r[SPR_FIELD[role]]).trim();
    if(!label && role!=="impact"){
      const t = (((project && project.themes) || {})[role] || []).find(t=>(t.members||[]).includes(r.linkId));
      if(t && t.label) label = t.label;
    }
    if(!label){
      suggested = suggested || sprClassify(r);
      label = suggested[role];
      if(!r.relationshipStatus) r.relationshipStatus = "Derived";
    }
    r.sprIds[role] = sprFindOrCreate(role, label);
  });
  SPR_ALL.forEach(role=>{ const it = sprItem(role, r.sprIds[role]); if(it) r[SPR_FIELD[role]] = it.label; });
  if(!SPR_REL.includes(r.relationshipStatus)) r.relationshipStatus = r._flagged ? "Assumed" : "Derived";
  if(!SPR_CONF.includes(r.confidence)) r.confidence = r._flagged ? "Low" : "Medium";
  if(!SPR_REVIEW.includes(r.reviewStatus)) r.reviewStatus = "Draft";
  if(typeof r.evidenceReference !== "string") r.evidenceReference = "";
  if(r.controlPoint && !SPR_CONTROL.includes(r.controlPoint)){ const m = pasteMatch(r.controlPoint, SPR_CONTROL); r.controlPoint = m || ""; }
  if(r.controlPoint==null) r.controlPoint = "";
  if(r.origin!=="AI" && r.origin!=="Manual") r.origin = "Manual";
  if(r.origin==="AI"){ if(!RISK_REVIEW.includes(r.riskStatus)) r.riskStatus = "Needs review"; }
  else if(r.riskStatus && !RISK_REVIEW.includes(r.riskStatus)) r.riskStatus = "";
  if(r.sprOrigin!=="AI" && r.sprOrigin!=="Manual") r.sprOrigin = r.origin;
}
function rdEnsureSpr(){
  const m = sprModel();
  SPR_ALL.forEach(role=>{
    const seen = new Set();
    m[SPR_LIST[role]] = m[SPR_LIST[role]].filter(it=>it && String(it.label||"").trim()).map(it=>{
      it.label = String(it.label).trim().slice(0,60); it.note = String(it.note||"").trim().slice(0,200);
      if(!it.id || seen.has(it.id)) it.id = SPR_PREFIX[role] + "x" + Math.random().toString(36).slice(2,6);
      seen.add(it.id); return it;
    });
  });
  (RISKS||[]).forEach(rdEnsureSprRisk);
  Object.values(ASSESSMENTS||{}).forEach(a=>(a.risks||[]).forEach(rdEnsureSprRisk));
}
// Agent output: merge its SPR model into the project, then point each risk at the merged items.
const __rdApplyAgentPaste = applyAgentPaste;
applyAgentPaste = function(text, mode){
  try{
    const d = parseAgentJson(text);
    sprPendingModel = (d && !Array.isArray(d) && d.sprModel && typeof d.sprModel==="object") ? d.sprModel : null;
    sprPendingIsAgent = Array.isArray(d) || !(d && (d.formatVersion || d.assessments));
  }catch(e){ sprPendingModel = null; sprPendingIsAgent = false; }
  try{ return __rdApplyAgentPaste.apply(this, arguments); }
  finally{ sprPendingModel = null; sprPendingIsAgent = false; }
};
function rdApplyShortThemes(risks){
  const idMap = {source:{}, pathway:{}, receptor:{}, impact:{}};
  const pm = sprPendingModel;
  if(pm){
    SPR_ALL.forEach(role=>{
      (Array.isArray(pm[SPR_LIST[role]]) ? pm[SPR_LIST[role]] : []).forEach(it=>{
        if(!it || !String(it.label||"").trim()) return;
        const id = sprFindOrCreate(role, it.label);
        const item = sprItem(role, id);
        if(it.note && !item.note) item.note = String(it.note).trim().slice(0,200);
        if(it.id!=null) idMap[role][String(it.id).trim().toUpperCase()] = id;
      });
    });
    (Array.isArray(pm.ruledOut) ? pm.ruledOut : []).forEach(x=>{
      if(!x) return;
      const map = (role, v)=> v==null ? "" : (idMap[role][String(v).trim().toUpperCase()] || "");
      const row = {source: map("source", x.sourceId||x.source), pathway: map("pathway", x.pathwayId||x.pathway), receptor: map("receptor", x.receptorId||x.receptor), reason: String(x.reason||"").trim().slice(0,300)};
      if(row.source || row.receptor) sprModel().ruledOut.push(row);
    });
  }
  (risks||[]).forEach(r=>{
    if(!r.sprIds || typeof r.sprIds!=="object") r.sprIds = {};
    SPR_ALL.forEach(role=>{
      const raw = r[role+"Id"]; delete r[role+"Id"];
      const short = String(r[role+"Short"]==null ? "" : r[role+"Short"]).trim(); delete r[role+"Short"];
      const mapped = raw!=null ? idMap[role][String(raw).trim().toUpperCase()] : "";
      if(mapped) r.sprIds[role] = mapped;
      else if(raw!=null && sprItem(role, String(raw).trim().toUpperCase())) r.sprIds[role] = String(raw).trim().toUpperCase();
      else if(short) r.sprIds[role] = sprFindOrCreate(role, short);
      else if(String(r[SPR_FIELD[role]]||"").trim()) r.sprIds[role] = sprFindOrCreate(role, r[SPR_FIELD[role]]);
    });
    if(!r.relationshipStatus) r.relationshipStatus = r._flagged ? "Assumed" : "Derived";
    if(!r.confidence) r.confidence = r._flagged ? "Low" : "Medium";
    if(!r.reviewStatus) r.reviewStatus = "Draft";
    if(sprPendingIsAgent){
      // Everything the agent writes is a draft until a person approves it.
      r.origin = "AI"; r.riskStatus = "Needs review"; r.sprOrigin = "AI"; r.reviewStatus = "Draft";
      ["riskApprovedBy","riskApprovedAt","sprApprovedBy","sprApprovedAt"].forEach(k=>{ delete r[k]; });
    }
  });
}
function themesForRole(r, role){ const id = sprIdOf(r, role); return id ? [id] : []; }
function explicitThemeFor(r, role){ return sprIdOf(r, role); }
function setExplicitTheme(r, role, value){ if(!r.sprIds) r.sprIds = {}; r.sprIds[role] = value; }
function sprGroups(role, list){
  const m = new Map();
  list.forEach(r=>{
    const id = sprIdOf(r, role); if(!id) return;
    let n = m.get(id);
    if(!n){ const it = sprItem(role, id); n = {id, label: it ? it.label : id, note: it ? it.note : "", risks:[]}; m.set(id, n); }
    n.risks.push(r);
  });
  return [...m.values()];
}
function sprMerge(role, fromId, intoId){
  if(!fromId || !intoId || fromId===intoId) return 0;
  let n = 0; const now = new Date().toISOString();
  sprAllProjectRisks().forEach(r=>{ if(sprIdOf(r, role)===fromId){ r.sprIds[role] = intoId; r._lastEditedAt = now; n++; } });
  sprModel().ruledOut.forEach(x=>{ if(x[role]===fromId) x[role] = intoId; });
  const from = sprItem(role, fromId), into = sprItem(role, intoId);
  if(from && into && from.note && !into.note) into.note = from.note;
  sprModel()[SPR_LIST[role]] = sprItems(role).filter(x=>x.id!==fromId);
  return n;
}
function sprTokens(label){
  return new Set((String(label).toLowerCase().match(/[a-z0-9]+/g)||[]).filter(w=>!SPR_STOP.has(w)).map(w=>w.length>3 ? w.replace(/(ies)$/,"y").replace(/s$/,"") : w));
}
function sprSuggestedMerges(){
  const out = [];
  SPR_ALL.forEach(role=>{
    const items = sprItems(role).map(it=>({it, t:sprTokens(it.label), k:sprKey(it.label), n:sprUsage(role, it.id)}));
    for(let i=0; i<items.length; i++) for(let j=i+1; j<items.length; j++){
      const a = items[i], b = items[j];
      const inter = [...a.t].filter(x=>b.t.has(x)).length, union = new Set([...a.t, ...b.t]).size;
      const small = a.t.size <= b.t.size ? a.t : b.t, big = small===a.t ? b.t : a.t;
      const subset = small.size > 0 && [...small].every(x=>big.has(x));
      if(!(subset || (union && inter/union >= .6))) continue;
      const pairKey = role+":"+[a.it.id, b.it.id].sort().join("|");
      if(sprDismissed.has(pairKey)) continue;
      const [keep, drop] = (b.n > a.n || (b.n===a.n && b.it.label.length < a.it.label.length)) ? [b,a] : [a,b];
      out.push({role, keep:keep.it, drop:drop.it, pairKey});
    }
  });
  return out;
}

/* ---- SPR checks ---- */
function sprChecks(r, all){
  const out = [];
  const g = role=>sprGroupOf(r, role), k = role=>sprKey(g(role)), id = role=>sprIdOf(r, role);
  ["source","pathway","receptor"].forEach(role=>{
    if(!k(role)) out.push({id:"incomplete", lv:"bad", t:`No ${role}. Without all three links there is no risk to rate.`});
    else if(SPR_GENERIC.has(k(role))) out.push({id:"generic", lv:"warn", t:`Generic ${role} ("${g(role)}"). Pick or add a specific ${role} in the model.`});
  });
  if(!k("impact") || SPR_GENERIC.has(k("impact"))) out.push({id:"impact", lv:"warn", t:"Impact is missing or generic. State the adverse effect on the receptor."});
  if(k("receptor") && /\band\b|&|\/|,|\+/i.test(g("receptor"))) out.push({id:"combined", lv:"warn", t:`"${g("receptor")}" may combine several receptors. Use one receptor per linkage.`});
  if(k("receptor") && k("receptor")===k("source")) out.push({id:"selfref", lv:"warn", t:"The receptor repeats the source. The receptor is what gets harmed, not what causes harm."});
  if(k("pathway") && k("source") && (k("pathway")===k("source") || k("source").includes(k("pathway")))) out.push({id:"pathway", lv:"warn", t:"The pathway repeats the source. Say how the effect reaches the receptor (e.g. seepage, runoff, dust, direct removal)."});
  if(/\b(workers?|employees?|contractors?|staff|personnel|operators?)\b/i.test(g("receptor"))) out.push({id:"workers", lv:"warn", t:"Workers are not environmental receptors. Manage them under WHS."});
  if(r.reviewStatus==="Approved" && !String(r.evidenceReference||"").trim()) out.push({id:"evidence", lv:"warn", t:"Approved without an evidence reference."});
  if(r.relationshipStatus==="Assumed" && ["High","Extreme"].includes(r.resRating)) out.push({id:"assumed", lv:"bad", t:`A ${r.resRating} residual risk rests on an assumed link. Confirm it with data.`});
  if(["High","Extreme"].includes(r.resRating) && !r.controlPoint) out.push({id:"control", lv:"warn", t:"Say which link the controls break: source, pathway or receptor."});
  if(id("source") && id("pathway") && id("receptor")){
    const dup = (all||[]).filter(x=>x!==r && !x._archived && sprIdOf(x,"source")===id("source") && sprIdOf(x,"pathway")===id("pathway") && sprIdOf(x,"receptor")===id("receptor"));
    if(dup.length) out.push({id:"duplicate", lv:"warn", t:`Same source, pathway and receptor as ${dup.map(x=>"#"+x.id).join(", ")}. Merge them or make the difference clear.`});
  }
  return out;
}
const SPR_CHECK_LABEL = {incomplete:"Incomplete linkage", generic:"Generic source, pathway or receptor", impact:"Missing or generic impact",
  combined:"Receptor combines several receptors", selfref:"Receptor repeats the source", pathway:"Pathway repeats the source",
  workers:"Workers listed as a receptor", evidence:"Approved without evidence", assumed:"High or Extreme risk on an assumed link",
  control:"High or Extreme risk with no control point", duplicate:"Duplicate linkage"};
function sprChecksHtml(checks){
  if(!checks.length) return `<div class="spr-checkok">\u2714 No SPR issues found.</div>`;
  return `<ul class="spr-checklist">${checks.map(c=>`<li class="${c.lv}">${sprX(c.t)}</li>`).join("")}</ul>`;
}

/* ---- Filters and selection ---- */
function sprActive(){ return RISKS.filter(r=>!r._archived); }
function sprFilteredList(){
  const q = sprF.q.trim().toLowerCase();
  return sprActive().filter(r=>{
    if(sprF.tax!=="All" && topTaxonomyValueOf(r)!==sprF.tax) return false;
    if(sprF.phase && !(r.phases||[]).includes(sprF.phase)) return false;
    if(sprF.review==="Approved" && r.reviewStatus!=="Approved") return false;
    if(sprF.review==="open" && r.reviewStatus==="Approved") return false;
    if(q){
      const hay = [r.id, ...SPR_ALL.map(role=>sprGroupOf(r, role)), ...SPR_ALL.map(role=>sprIdOf(r, role)), richHtmlToPlainText(r.source), richHtmlToPlainText(r.pathway), richHtmlToPlainText(r.receptor)].join(" ").toLowerCase();
      if(!hay.includes(q)) return false;
    }
    return true;
  });
}
function sprFilterText(){
  const bits = [];
  if(sprF.tax!=="All") bits.push(sprF.tax);
  if(sprF.phase) bits.push(sprF.phase);
  if(sprF.review==="Approved") bits.push("approved links only");
  if(sprF.review==="open") bits.push("links not yet approved");
  if(sprF.q.trim()) bits.push(`matching "${sprF.q.trim()}"`);
  return bits.join(", ");
}
function sprSelRisks(list){
  const s = sprSel; if(!s) return [];
  if(s.kind==="group") return list.filter(r=>sprIdOf(r, s.role)===s.key);
  if(s.kind==="edge" || s.kind==="cell") return list.filter(r=>s.ids.includes(r.id));
  return [];
}
function sprDetailHtml(list){
  if(!sprSel) return "";
  const rows = sprSelRisks(list);
  const all = sprActive();
  let html = `<div class="spr-detail-list"><div class="spr-detail-head"><strong>${sprX(sprSel.label)}</strong>
    <span class="panel-sub">${rows.length} risk${rows.length===1?"":"s"}</span><span class="spacer"></span>
    ${rows.length?`<button class="btn" id="spr-to-register" type="button">Show in register</button>`:""}<span class="chip" id="spr-clear-sel">Clear</span></div>`;
  if(!rows.length) html += `<div class="empty-state" style="padding:16px;">No risks match this selection.</div>`;
  else html += `<div class="scroll-x"><table><thead><tr><th>Risk</th><th>Source</th><th>Pathway</th><th>Receptor</th><th>Impact</th><th>Inh.</th><th>Res.</th><th>Review</th><th>Checks</th><th></th></tr></thead><tbody>${rows.map(r=>{
      const n = sprChecks(r, all).length;
      return `<tr><td>#${r.id}</td><td class="spr-s">${sprX(sprGroupOf(r,"source"))}</td><td class="spr-p">${sprX(sprGroupOf(r,"pathway"))}</td><td class="spr-r">${sprX(sprGroupOf(r,"receptor"))}</td>
      <td class="spr-i">${sprX(sprGroupOf(r,"impact"))}</td><td>${sprRatingPill(r.inhRating)}</td><td>${sprRatingPill(r.resRating)}</td><td>${sprBadge(r.reviewStatus)}</td>
      <td>${n?`<span class="spr-warn">\u26a0 ${n}</span>`:`<span class="spr-okmark">\u2714</span>`}</td><td style="white-space:nowrap;"><button class="btn" data-sprreview="${r.id}" type="button">Review</button> <button class="btn" data-spredit="${r.id}" type="button">Edit</button></td></tr>`;
    }).join("")}</tbody></table></div>`;
  return html + `</div>`;
}
function wireSprDetail(list, rerender){
  const clr = document.getElementById("spr-clear-sel");
  if(clr) clr.addEventListener("click", ()=>{ sprSel = null; rerender(); });
  const reg = document.getElementById("spr-to-register");
  if(reg) reg.addEventListener("click", ()=>{
    const ids = sprSelRisks(list).map(r=>r.id);
    themeFilter = {role:"edge", ids, label:"SPR: " + sprSel.label};
    rdSetView("register");
    renderAll();
    document.getElementById("register-body").scrollIntoView({behavior:"smooth", block:"start"});
  });
  document.querySelectorAll("#pathway-analysis-body [data-spredit]").forEach(b=>b.addEventListener("click", ()=>openDrawer(Number(b.dataset.spredit))));
  document.querySelectorAll("#pathway-analysis-body [data-sprreview]").forEach(b=>b.addEventListener("click", ()=>{
    sprSelectedId = Number(b.dataset.sprreview); sprQueueStatus = "all"; pathwayTab = "review"; renderPathwayAnalysis();
  }));
}

/* ---- Register filtering from the SPR tab ---- */
function visibleRisks(){
  let list = ratingFilteredRisks();
  if(activeCell){
    const consKey = viewMode==="inh" ? "inhCons" : "resCons";
    const likeKey = viewMode==="inh" ? "inhLike" : "resLike";
    list = list.filter(r => r[consKey]===activeCell.cons && r[likeKey]===activeCell.like);
  }
  if(themeFilter && themeFilter.role==="edge") list = list.filter(r=>(themeFilter.ids||[]).includes(r.id));
  list = [...list];
  if(sortByRecent) list.sort((a,b) => new Date(b._lastEditedAt||0) - new Date(a._lastEditedAt||0));
  else list.sort((a,b) => a.id - b.id);
  return list;
}
const __rdActiveFiltersBar = renderActiveFiltersBar;
renderActiveFiltersBar = function(){
  __rdActiveFiltersBar.apply(this, arguments);
  if(rdShowNeedsApproval){
    const el0 = document.getElementById("active-filters-bar");
    let bar0 = el0.querySelector(".active-filters");
    if(!bar0){ const n = visibleRisks().length; el0.innerHTML = `<div class="active-filters"><span class="af-label">Filtered \u2014 ${n} risk${n===1?"":"s"}</span><span class="af-clearall" id="af-clear-all">Clear all</span></div>`; bar0 = el0.querySelector(".active-filters"); }
    const c0 = document.createElement("span"); c0.className = "af-chip"; c0.innerHTML = `Needs approval<span class="af-x" id="af-appr-x">\u2715</span>`;
    bar0.querySelector(".af-label").after(c0);
    document.getElementById("af-appr-x").addEventListener("click", ()=>{ rdShowNeedsApproval = false; renderAll(); });
    const ca0 = document.getElementById("af-clear-all"); if(ca0) ca0.addEventListener("click", ()=>{ rdShowNeedsApproval = false; renderAll(); });
  }
  if(!themeFilter || themeFilter.role!=="edge") return;
  const el = document.getElementById("active-filters-bar");
  let bar = el.querySelector(".active-filters");
  if(!bar){ const n = visibleRisks().length; el.innerHTML = `<div class="active-filters"><span class="af-label">Filtered \u2014 ${n} risk${n===1?"":"s"}</span><span class="af-clearall" id="af-clear-all">Clear all</span></div>`; bar = el.querySelector(".active-filters"); }
  const chip = document.createElement("span");
  chip.className = "af-chip";
  chip.innerHTML = `${sprX(themeFilter.label)}<span class="af-x" id="af-spr-x">\u2715</span>`;
  bar.querySelector(".af-label").after(chip);
  document.getElementById("af-spr-x").addEventListener("click", ()=>{ themeFilter = null; renderAll(); });
  const ca = document.getElementById("af-clear-all"); if(ca) ca.addEventListener("click", ()=>{ themeFilter = null; renderAll(); });
};

/* ---- Tabs ---- */
function rdSetView(v){
  rdView = v;
  document.getElementById("rd-view-register").hidden = v!=="register";
  document.getElementById("rd-view-spr").hidden = v!=="spr";
  document.querySelectorAll(".rd-tab").forEach(b=>{ const on = b.dataset.view===v; b.classList.toggle("active", on); b.setAttribute("aria-selected", String(on)); });
  if(v==="spr") renderPathwayAnalysis();
}
document.querySelectorAll(".rd-tab").forEach(b=>b.addEventListener("click", ()=>rdSetView(b.dataset.view)));
const SPR_TABS = ["spr","matrix","review","model","quality","guide"];
function rdSyncSprTabs(){
  SPR_TABS.forEach(t=>{ const el = document.getElementById("tab-"+t); if(el) el.classList.toggle("active", t===pathwayTab); });
  const rb = document.getElementById("rd-tab-reg-count");
  if(rb){ const n = RISKS.filter(r=>!r._archived && rdNeedsApproval(r)).length; rb.textContent = n ? `${n} to approve` : ""; rb.title = n ? `${n} AI-generated risk${n===1?"":"s"} awaiting approval` : ""; rb.hidden = !n; }
  const badge = document.getElementById("rd-tab-spr-count");
  if(badge){ const all = sprActive(); const n = all.filter(r=>sprChecks(r, all).length).length;
    badge.textContent = n ? `\u26a0 ${n}` : ""; badge.title = n ? `${n} risk${n===1?" has":"s have"} SPR issues to check` : ""; badge.hidden = !n; }
}
SPR_TABS.forEach(tab=>{
  const el = document.getElementById("tab-"+tab);
  if(el) el.addEventListener("click", ()=>{ pathwayTab = tab; sprSel = null; renderPathwayAnalysis(); });
});
function renderPathwayAnalysis(){
  rdSyncSprTabs();
  if(pathwayTab==="matrix") renderSprMatrix();
  else if(pathwayTab==="review") renderSprReview();
  else if(pathwayTab==="model") renderSprModelEditor();
  else if(pathwayTab==="quality") renderSprQuality();
  else if(pathwayTab==="guide") renderSprGuide();
  else renderSPRFlow();
}

/* ---- Toolbar ---- */
function sprToolbarHtml(kind){
  const fw = activeFramework;
  const taxOpts = ["All", ...topTaxonomyOptions()];
  return `<div class="spr-toolbar">
    <select id="spr-f-tax" aria-label="${sprX(taxLabels().top)}">${taxOpts.map(t=>`<option value="${sprX(t)}" ${sprF.tax===t?"selected":""}>${t==="All"?sprX(taxLabels().top)+": all":sprX(t)}</option>`).join("")}</select>
    ${fw.phasesEnabled?`<select id="spr-f-phase" aria-label="Phase"><option value="">${sprX(phaseLabelOf())}: all</option>${fw.phaseOptions.map(p=>`<option ${sprF.phase===p?"selected":""}>${sprX(p)}</option>`).join("")}</select>`:""}
    <select id="spr-f-review" aria-label="Review status">
      <option value="all" ${sprF.review==="all"?"selected":""}>All links</option>
      <option value="Approved" ${sprF.review==="Approved"?"selected":""}>Approved links only</option>
      <option value="open" ${sprF.review==="open"?"selected":""}>Links not yet approved</option>
    </select>
    <input type="search" id="spr-f-q" placeholder="Find an item or risk" value="${sprX(sprF.q)}" aria-label="Search the SPR model">
    <span class="chip-row" role="group" aria-label="Rating basis"><span class="chip ${viewMode==="inh"?"active":""}" data-basis="inh">Inherent</span><span class="chip ${viewMode==="res"?"active":""}" data-basis="res">Residual</span></span>
    ${kind==="net"?`<label class="spr-check"><input type="checkbox" id="spr-f-impact" ${sprShowImpact?"checked":""}> Impacts</label>`:""}
    <span class="spacer"></span>
    ${kind==="net"?`<button class="btn" id="spr-export-png" type="button" title="Download the figure as a PNG image">\u2b07 PNG</button><button class="btn" id="spr-export-svg" type="button" title="Download the figure as an SVG you can edit or scale">\u2b07 SVG</button>`:""}
    <button class="btn" id="spr-export-table" type="button" title="Download the SPR model and linkages as Excel">\u2b07 Excel</button>
  </div>`;
}
function wireSprToolbar(rerender){
  const on = (id, ev, fn)=>{ const el = document.getElementById(id); if(el) el.addEventListener(ev, fn); };
  on("spr-f-tax", "change", e=>{ sprF.tax = e.target.value; sprSel = null; rerender(); });
  on("spr-f-phase", "change", e=>{ sprF.phase = e.target.value; sprSel = null; rerender(); });
  on("spr-f-review", "change", e=>{ sprF.review = e.target.value; sprSel = null; rerender(); });
  on("spr-f-q", "input", e=>{
    sprF.q = e.target.value; const pos = e.target.selectionStart; rerender();
    const q = document.getElementById("spr-f-q"); if(q){ q.focus(); q.setSelectionRange(pos, pos); }
  });
  on("spr-f-impact", "change", e=>{ sprShowImpact = e.target.checked; if(sprSel && sprSel.role==="impact") sprSel = null; rerender(); });
  document.querySelectorAll("#pathway-analysis-body [data-basis]").forEach(ch=>ch.addEventListener("click", ()=>{
    if(viewMode!==ch.dataset.basis) document.getElementById(ch.dataset.basis==="inh" ? "view-inh" : "view-res").click();
  }));
  on("spr-export-png", "click", ()=>sprExportFigure("png"));
  on("spr-export-svg", "click", ()=>sprExportFigure("svg"));
  on("spr-export-table", "click", sprExportTable);
  makeChipsFocusable(document.getElementById("pathway-analysis-body"));
}

/* ---- The figure ---- */
function sprWrap(s, n){
  const words = String(s).split(/\s+/).filter(Boolean);
  const lines = [""];
  words.forEach(w=>{
    const cur = lines[lines.length-1];
    if(!cur || (cur+" "+w).length <= n) lines[lines.length-1] = (cur ? cur+" " : "") + w;
    else if(lines.length < 2) lines.push(w);
    else lines[1] += " " + w;
  });
  return lines.map(l=> l.length > n ? l.slice(0, n-1) + "\u2026" : l);
}
function sprNetworkSvg(list, o){
  o = o || {};
  const rk = viewMode==="inh" ? "inhRating" : "resRating";
  const basis = viewMode==="inh" ? "inherent" : "residual";
  const roles = sprShowImpact ? SPR_ALL : ["source","pathway","receptor"];
  const cols = roles.map(role=>sprGroups(role, list));
  const idx = cols.map(c=>new Map(c.map(n=>[n.id, n])));
  const nodeOf = (r, ci)=> idx[ci].get(sprIdOf(r, roles[ci]));
  // Start in model order, then pull linked boxes level with each other to cut crossings.
  cols.forEach((c,ci)=>{ const order = sprItems(roles[ci]).map(x=>x.id); c.sort((a,b)=>order.indexOf(a.id)-order.indexOf(b.id)); c.forEach((n,i)=>{ n.o = i; }); });
  const mean = (n, ci)=> n.risks.reduce((s,r)=>{ const x = nodeOf(r, ci); return s + (x ? x.o : 0); }, 0) / n.risks.length;
  for(let it=0; it<10; it++){
    for(let ci=0; ci<roles.length; ci++){
      cols[ci].forEach(n=>{ const nb = []; if(ci>0) nb.push(mean(n, ci-1)); if(ci<roles.length-1) nb.push(mean(n, ci+1)); n.b = nb.reduce((a,b)=>a+b,0)/nb.length; });
      cols[ci].sort((a,b)=>a.b-b.b || b.risks.length-a.risks.length);
      cols[ci].forEach((n,i)=>{ n.o = i; });
    }
  }
  const PAD = 18, NW = 214, GAP = 12;
  const colGap = roles.length===4 ? 84 : 140;
  const TITLE_H = 62, HEAD_H = 50, LEG_H = 44;
  const TOP = TITLE_H + HEAD_H;
  const X = roles.map((_,i)=>PAD + i*(NW+colGap));
  const W = X[X.length-1] + NW + PAD;
  cols.forEach(c=>c.forEach(n=>{ n.lines = sprWrap(n.label, 27); n.h = Math.max(n.lines.length>1 ? 56 : 44, 20 + n.risks.length*8); }));
  const colH = cols.map(c=>c.reduce((s,n)=>s+n.h,0) + GAP*Math.max(0, c.length-1));
  const bodyH = Math.max(...colH, 60);
  cols.forEach((c,ci)=>{ let y = TOP + (bodyH-colH[ci])/2; c.forEach(n=>{ n.y = y; y += n.h + GAP; }); });
  const H = Math.ceil(TOP + bodyH + 18 + LEG_H);
  const selIds = o.sel ? new Set(sprSelRisks(list).map(r=>r.id)) : null;

  const edges = [];
  for(let ci=0; ci<roles.length-1; ci++){
    const m = new Map();
    list.forEach(r=>{
      const a = nodeOf(r, ci), b = nodeOf(r, ci+1);
      if(!a || !b) return;
      const k = a.id + "|" + b.id;
      if(!m.has(k)) m.set(k, {ci, a, b, risks:[]});
      m.get(k).risks.push(r);
    });
    edges.push(...m.values());
  }
  cols.forEach(c=>c.forEach(n=>{ n.out = []; n.inn = []; }));
  edges.forEach(e=>{ e.a.out.push(e); e.b.inn.push(e); });
  const slot = (n, arr, e, partner)=>{
    const sorted = [...arr].sort((x,y)=>partner(x).o - partner(y).o);
    const total = sorted.reduce((s,x)=>s+x.risks.length, 0);
    let acc = 0;
    for(const x of sorted){ if(x===e) break; acc += x.risks.length; }
    return n.y + 9 + ((acc + e.risks.length/2)/total) * (n.h - 18);
  };
  edges.sort((x,y)=>RATING_ORDER.indexOf(sprHighest(x.risks, rk)) - RATING_ORDER.indexOf(sprHighest(y.risks, rk)));

  let s = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" font-family="Figtree, 'Segoe UI', Arial, sans-serif" role="img" aria-label="Source, pathway, receptor${sprShowImpact?" and impact":""} model">`;
  s += `<rect x="0" y="0" width="${W}" height="${H}" fill="#FFFFFF"/>`;
  const date = new Date().toLocaleDateString(undefined, {day:"numeric", month:"short", year:"numeric"});
  s += `<text x="${PAD}" y="28" font-size="17" font-weight="700" fill="#1E1E1E">${sprX(project.name||"Untitled project")}: source\u2013pathway\u2013receptor model</text>`;
  const approvedN = list.filter(r=>r.reviewStatus==="Approved").length;
  s += `<text x="${PAD}" y="48" font-size="11.5" fill="#565D4F">${sprX([shortFwName(activeFramework), `${list.length} risk${list.length===1?"":"s"}`, `${approvedN} of ${list.length} link${list.length===1?"":"s"} approved`, `${basis} ratings`, sprFilterText(), date].filter(Boolean).join("  \u00b7  "))}</text>`;
  roles.forEach((role, ci)=>{
    const col = SPR_COL[role];
    s += `<rect x="${X[ci]-10}" y="${TITLE_H+2}" width="${NW+20}" height="${HEAD_H+bodyH+8}" rx="12" fill="${col.band}"/>`;
    s += `<text x="${X[ci]+NW/2}" y="${TITLE_H+23}" text-anchor="middle" font-size="12" font-weight="700" fill="${col.stroke}" letter-spacing="1.2">${SPR_PLURAL[role].toUpperCase()}</text>`;
    s += `<text x="${X[ci]+NW/2}" y="${TITLE_H+39}" text-anchor="middle" font-size="10.5" fill="#6B6F63">${SPR_DESC[role]}</text>`;
  });
  edges.forEach(e=>{
    const top = sprHighest(e.risks, rk);
    const ya = slot(e.a, e.a.out, e, x=>x.b), yb = slot(e.b, e.b.inn, e, x=>x.a);
    const xa = X[e.ci] + NW, xb = X[e.ci+1], mx = (xa+xb)/2;
    const dashed = e.risks.some(r=>r.relationshipStatus!=="Explicit");
    const lit = !selIds || e.risks.some(r=>selIds.has(r.id));
    s += `<path class="spr-edge" data-ids="${e.risks.map(r=>r.id).join(",")}" data-label="${sprX(e.a.label+" \u2192 "+e.b.label)}" d="M${xa},${ya.toFixed(1)} C${mx},${ya.toFixed(1)} ${mx},${yb.toFixed(1)} ${xb},${yb.toFixed(1)}" stroke="${SPR_RCOL[top]||"#9A9A8F"}" stroke-width="${Math.min(2.4 + e.risks.length*1.6, 12).toFixed(1)}" fill="none" stroke-linecap="round" opacity="${lit ? (selIds ? .95 : .7) : .07}"${dashed?' stroke-dasharray="7 5"':""}><title>${sprX(`${e.a.label} \u2192 ${e.b.label}: risk${e.risks.length===1?"":"s"} #${e.risks.map(r=>r.id).join(", #")}, highest ${basis} ${top||"not rated"}${dashed?", includes derived or assumed links":""}`)}</title></path>`;
  });
  cols.forEach((c,ci)=>{
    const role = roles[ci], col = SPR_COL[role];
    c.forEach(n=>{
      const top = sprHighest(n.risks, rk);
      const isSel = o.sel && o.sel.kind==="group" && o.sel.role===role && o.sel.key===n.id;
      const lit = !selIds || n.risks.some(r=>selIds.has(r.id));
      s += `<g class="spr-node" data-role="${role}" data-key="${sprX(n.id)}" data-ids="${n.risks.map(r=>r.id).join(",")}" tabindex="0" opacity="${lit?1:.28}">
        <title>${sprX(`${n.id} ${n.label}${n.note?". "+n.note:""}. Risk${n.risks.length===1?"":"s"} #${n.risks.map(r=>r.id).join(", #")}. Highest ${basis}: ${top||"not rated"}.`)}</title>
        <rect x="${X[ci]}" y="${n.y.toFixed(1)}" width="${NW}" height="${n.h}" rx="8" fill="${isSel?"#EAF7C9":"#FFFFFF"}" stroke="${isSel?"#263326":col.stroke}" stroke-width="${isSel?2.4:1.1}"/>
        <rect x="${X[ci]}" y="${n.y.toFixed(1)}" width="6" height="${n.h}" rx="3" fill="${col.stroke}"/>
        ${n.lines.map((l,i)=>`<text x="${X[ci]+15}" y="${(n.y+19+i*14).toFixed(1)}" font-size="12.5" font-weight="600" fill="#1E1E1E">${sprX(l)}</text>`).join("")}
        <text x="${X[ci]+15}" y="${(n.y+n.h-9).toFixed(1)}" font-size="10.5" fill="#6B6F63">${n.id} \u00b7 ${n.risks.length} risk${n.risks.length===1?"":"s"}</text>
        ${top?`<circle cx="${X[ci]+NW-14}" cy="${(n.y+n.h-13).toFixed(1)}" r="6" fill="${SPR_RCOL[top]}"/>`:""}
      </g>`;
    });
  });
  const ly = TOP + bodyH + 30;
  let lx = PAD;
  s += `<line x1="${PAD}" y1="${ly-16}" x2="${W-PAD}" y2="${ly-16}" stroke="#E4E2D8"/>`;
  s += `<text x="${lx}" y="${ly+4}" font-size="11" font-weight="700" fill="#565D4F">Highest ${basis} rating</text>`; lx += 138;
  RATING_ORDER.forEach(rt=>{ s += `<line x1="${lx}" y1="${ly}" x2="${lx+22}" y2="${ly}" stroke="${SPR_RCOL[rt]}" stroke-width="5" stroke-linecap="round"/><text x="${lx+28}" y="${ly+4}" font-size="11" fill="#1E1E1E">${rt}</text>`; lx += 84; });
  lx += 10;
  s += `<line x1="${lx}" y1="${ly}" x2="${lx+26}" y2="${ly}" stroke="#8A8A80" stroke-width="3" stroke-dasharray="7 5"/><text x="${lx+32}" y="${ly+4}" font-size="11" fill="#1E1E1E">Derived or assumed link</text>`; lx += 190;
  s += `<text x="${lx}" y="${ly+4}" font-size="11" fill="#6B6F63">Line width = number of risks</text>`;
  s += `</svg>`;
  return {svg:s, W, H};
}
function sprRuledOutHtml(){
  const rows = sprModel().ruledOut.filter(x=>x.source || x.receptor);
  if(!rows.length) return "";
  const lab = (role, id)=>{ const it = sprItem(role, id); return it ? `${it.id} ${it.label}` : "\u2014"; };
  return `<details class="spr-ruled"><summary>Linkages ruled out (${rows.length})</summary>
    <table><thead><tr><th>Source</th><th>Pathway</th><th>Receptor</th><th>Why there is no complete linkage</th></tr></thead><tbody>
    ${rows.map(x=>`<tr><td class="spr-s">${sprX(lab("source", x.source))}</td><td class="spr-p">${sprX(x.pathway ? lab("pathway", x.pathway) : "Any")}</td><td class="spr-r">${sprX(lab("receptor", x.receptor))}</td><td>${sprX(x.reason||"")}</td></tr>`).join("")}
    </tbody></table></details>`;
}
function renderSPRFlow(){
  const el = document.getElementById("pathway-analysis-body");
  const list = sprFilteredList();
  const rerender = ()=>renderSPRFlow();
  if(!list.length){
    el.innerHTML = sprToolbarHtml("net") + `<div class="empty-state">${sprF.review==="Approved" ? "No approved links yet. Approve them in the Linkages tab." : "No risks match these filters."}</div>`;
    wireSprToolbar(rerender); return;
  }
  const fig = sprNetworkSvg(list, {sel: sprSel});
  const hidden = sprActive().length - list.length;
  el.innerHTML = sprToolbarHtml("net") +
    `<div class="spr-fig scroll-x" id="spr-fig">${fig.svg}</div>
     <div class="panel-sub" style="margin-top:6px;">Each box is one item in the project's SPR model. Hover a box to trace its links, or click a box or line to list its risks.${hidden?` ${hidden} risk${hidden===1?" is":"s are"} hidden by the filters.`:""}</div>` +
    sprDetailHtml(list) + sprRuledOutHtml();
  wireSprToolbar(rerender);
  const svg = el.querySelector("#spr-fig svg");
  const edgesEls = [...svg.querySelectorAll(".spr-edge")];
  svg.querySelectorAll(".spr-node").forEach(g=>{
    const ids = new Set(g.dataset.ids.split(",").map(Number));
    g.addEventListener("mouseenter", ()=>{ if(sprSel) return; svg.classList.add("hovering"); edgesEls.forEach(p=>{ if(p.dataset.ids.split(",").some(x=>ids.has(Number(x)))) p.classList.add("hl"); }); });
    g.addEventListener("mouseleave", ()=>{ svg.classList.remove("hovering"); edgesEls.forEach(p=>p.classList.remove("hl")); });
    const pick = ()=>{
      const role = g.dataset.role, key = g.dataset.key, it = sprItem(role, key);
      sprSel = (sprSel && sprSel.kind==="group" && sprSel.role===role && sprSel.key===key) ? null : {kind:"group", role, key, label:`${SPR_LABEL[role]} ${key}: ${it ? it.label : key}`};
      renderSPRFlow();
    };
    g.addEventListener("click", pick);
    g.addEventListener("keydown", e=>{ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); pick(); } });
  });
  edgesEls.forEach(p=>p.addEventListener("click", ()=>{
    const ids = p.dataset.ids.split(",").map(Number);
    const same = sprSel && sprSel.kind==="edge" && sprSel.label===p.dataset.label;
    sprSel = same ? null : {kind:"edge", ids, label:p.dataset.label};
    renderSPRFlow();
  }));
  wireSprDetail(list, rerender);
}
function sprDownload(blob, name){
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = name;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(()=>URL.revokeObjectURL(url), 2000);
}
function sprFileBase(){ return (project.name || "project").replace(/[^a-z0-9]+/gi, "_") + "_SPR_model"; }
function sprExportFigure(fmt){
  const list = sprFilteredList();
  if(!list.length){ alert("Nothing to export with the current filters."); return; }
  const fig = sprNetworkSvg(list, {sel:null});
  if(fmt==="svg"){ sprDownload(new Blob(['<?xml version="1.0" encoding="UTF-8"?>\n' + fig.svg], {type:"image/svg+xml"}), sprFileBase() + ".svg"); return; }
  const img = new Image();
  img.onload = ()=>{
    const scale = 2, c = document.createElement("canvas");
    c.width = fig.W*scale; c.height = fig.H*scale;
    const ctx = c.getContext("2d");
    ctx.fillStyle = "#FFFFFF"; ctx.fillRect(0, 0, c.width, c.height);
    ctx.drawImage(img, 0, 0, c.width, c.height);
    try{ c.toBlob(b=>{ if(b) sprDownload(b, sprFileBase() + ".png"); else alert("PNG export failed. Try SVG instead."); }, "image/png"); }
    catch(e){ alert("PNG export isn't allowed by this browser. Try SVG instead."); }
  };
  img.onerror = ()=>alert("PNG export failed. Try SVG instead.");
  img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(fig.svg);
}
function sprExportTable(){
  const fw = activeFramework, tl = taxLabels(), all = sprActive();
  const taxH = fw.taxonomyType==="factor-indicator" ? [tl.top, tl.sub] : [tl.top];
  const lh = ["Risk", ...taxH, "Source ID","Source","Pathway ID","Pathway","Receptor ID","Receptor","Impact ID","Impact",
    "Linkage basis","Confidence","Controls act on","Evidence reference","Linkage origin","Linkage review","Approved by","Approved on","Inh. rating","Res. rating","SPR checks"];
  const lrows = [lh];
  sprFilteredList().forEach(r=>{
    const taxV = fw.taxonomyType==="factor-indicator" ? [r.factor||"", r.indicator||""] : [r.receptorCategory||""];
    lrows.push([r.id, ...taxV, ...SPR_ALL.flatMap(role=>[sprIdOf(r, role), sprGroupOf(r, role)]),
      r.relationshipStatus||"", r.confidence||"", r.controlPoint||"", r.evidenceReference||"", r.sprOrigin||"", r.reviewStatus||"", r.reviewStatus==="Approved" ? (r.sprApprovedBy||"") : "", r.reviewStatus==="Approved" ? rdFmtDate(r.sprApprovedAt) : "", r.inhRating||"", r.resRating||"",
      sprChecks(r, all).map(c=>c.t).join("\n")]);
  });
  const inhC = lh.indexOf("Inh. rating"), resC = lh.indexOf("Res. rating");
  const lstyle = (ri,c)=>{ if(ri===0) return 1; if(c===inhC) return ratingStyleId(lrows[ri][inhC]); if(c===resC) return ratingStyleId(lrows[ri][resC]); return 0; };
  const mh = ["Type","ID","Item","Notes","Risks using it"];
  const mrows = [mh];
  SPR_ALL.forEach(role=>sprItems(role).forEach(it=>mrows.push([SPR_LABEL[role], it.id, it.label, it.note||"", sprUsage(role, it.id)])));
  const ro = sprModel().ruledOut.map(x=>[x.source, (sprItem("source",x.source)||{}).label||"", x.pathway||"", (sprItem("pathway",x.pathway)||{}).label||"Any", x.receptor, (sprItem("receptor",x.receptor)||{}).label||"", x.reason||""]);
  const sheets = [{name:"SPR linkages", rows:lrows, styleFor:lstyle, colCount:lh.length},
    {name:"SPR model", rows:mrows, styleFor:(ri)=>ri===0?1:0, colCount:mh.length}];
  if(ro.length) sheets.push({name:"Ruled out", rows:[["Source ID","Source","Pathway ID","Pathway","Receptor ID","Receptor","Reason"], ...ro], styleFor:(ri)=>ri===0?1:0, colCount:7});
  downloadWorkbook(buildWorkbook(sheets), sprFileBase() + ".xlsx");
}

/* ---- Source x receptor matrix ---- */
function renderSprMatrix(){
  const el = document.getElementById("pathway-analysis-body");
  const list = sprFilteredList();
  const rk = viewMode==="inh" ? "inhRating" : "resRating";
  const rerender = ()=>renderSprMatrix();
  if(!list.length){ el.innerHTML = sprToolbarHtml("matrix") + `<div class="empty-state">No risks match these filters.</div>`; wireSprToolbar(rerender); return; }
  const order = role=>{ const ids = sprItems(role).map(x=>x.id); return (a,b)=>ids.indexOf(a.id)-ids.indexOf(b.id); };
  const srcs = sprGroups("source", list).sort(order("source")), recs = sprGroups("receptor", list).sort(order("receptor"));
  let html = `<div class="panel-sub" style="margin-bottom:8px;">Sources down the side, receptors across the top. Each cell lists the pathways that link them, coloured by the highest ${viewMode==="inh"?"inherent":"residual"} rating. A blank cell means no linkage is recorded. Click a pathway to list its risks.</div>
    <div class="scroll-x"><table class="spr-matrix"><thead><tr><th class="corner"><span class="spr-s">Source</span> \u2193 &nbsp; <span class="spr-r">Receptor</span> \u2192</th>
    ${recs.map(r=>`<th title="${sprX(r.note||"")}"><span class="spr-id">${r.id}</span>${sprX(r.label)}</th>`).join("")}</tr></thead><tbody>`;
  srcs.forEach(s=>{
    html += `<tr><th title="${sprX(s.note||"")}"><span class="spr-id">${s.id}</span>${sprX(s.label)}</th>`;
    recs.forEach(rc=>{
      const cell = list.filter(r=>sprIdOf(r,"source")===s.id && sprIdOf(r,"receptor")===rc.id);
      if(!cell.length){ html += `<td class="empty"></td>`; return; }
      const paths = sprGroups("pathway", cell);
      html += `<td>${paths.map(p=>{ const top = sprHighest(p.risks, rk); const ids = p.risks.map(r=>r.id);
        const dashed = p.risks.some(r=>r.relationshipStatus!=="Explicit");
        const on = sprSel && sprSel.kind==="cell" && sprSel.key===`${s.id}|${p.id}|${rc.id}`;
        return `<button type="button" class="spr-mchip${dashed?" dashed":""}${on?" on":""}" style="border-color:${SPR_RCOL[top]||"#9A9A8F"};" data-cell="${s.id}|${p.id}|${rc.id}" data-ids="${ids.join(",")}" data-label="${sprX(`${s.label} \u2192 ${p.label} \u2192 ${rc.label}`)}" title="Risk${ids.length===1?"":"s"} #${ids.join(", #")}"><i style="background:${SPR_RCOL[top]||"#9A9A8F"}"></i>${sprX(p.label)}${ids.length>1?` <b>${ids.length}</b>`:""}</button>`; }).join("")}</td>`;
    });
    html += `</tr>`;
  });
  html += `</tbody></table></div>`;
  el.innerHTML = sprToolbarHtml("matrix") + html + sprDetailHtml(list);
  wireSprToolbar(rerender);
  el.querySelectorAll(".spr-mchip").forEach(b=>b.addEventListener("click", ()=>{
    const key = b.dataset.cell;
    sprSel = (sprSel && sprSel.kind==="cell" && sprSel.key===key) ? null : {kind:"cell", key, ids:b.dataset.ids.split(",").map(Number), label:b.dataset.label};
    renderSprMatrix();
  }));
  wireSprDetail(list, rerender);
}

/* ---- Linkages (one per risk) ---- */
function sprSelectHtml(role, id, current){
  return `<select id="${id}" data-role="${role}" class="spr-item-select">${sprItems(role).map(it=>`<option value="${sprX(it.id)}" ${it.id===current?"selected":""}>${sprX(it.id+"  "+it.label)}</option>`).join("")}
    <option value="__new">+ New ${role}\u2026</option></select>`;
}
function sprWireItemSelects(root){
  root.querySelectorAll(".spr-item-select").forEach(sel=>{
    let last = sel.value;
    sel.addEventListener("focus", ()=>{ last = sel.value; });
    sel.addEventListener("change", ()=>{
      if(sel.value!=="__new"){ last = sel.value; return; }
      const role = sel.dataset.role;
      const label = prompt(`Name the new ${role} (short, e.g. ${role==="source"?"Paddock TSF":role==="pathway"?"Seepage to groundwater":role==="receptor"?"Pastoral bores":"Groundwater contamination"}):`);
      const clean = String(label||"").trim();
      if(!clean){ sel.value = last; return; }
      const id = sprFindOrCreate(role, clean);
      const it = sprItem(role, id);
      if(![...sel.options].some(o=>o.value===id)){ const opt = document.createElement("option"); opt.value = id; opt.textContent = `${id}  ${it.label}`; sel.insertBefore(opt, sel.querySelector('option[value="__new"]')); }
      sel.value = id; last = id;
    });
  });
}
function sprFieldsHtml(r, prefix){
  const sel = (id, opts, v, blank)=>`<select id="${prefix}-${id}">${blank?`<option value="">${blank}</option>`:""}${opts.map(o=>`<option ${o===v?"selected":""}>${sprX(o)}</option>`).join("")}</select>`;
  return `<div class="two-col">${SPR_ALL.map(role=>`<div class="field"><label>${SPR_LABEL[role]} <span class="spr-hint">${SPR_DESC[role].toLowerCase()}</span></label>
      ${sprSelectHtml(role, `${prefix}-${role}`, sprIdOf(r, role))}</div>`).join("")}</div>
    <div class="two-col">
      <div class="field"><label>Linkage basis</label>${sel("rel", SPR_REL, r.relationshipStatus||"Derived")}</div>
      <div class="field"><label>Confidence</label>${sel("conf", SPR_CONF, r.confidence||"Medium")}</div>
    </div>
    <div class="two-col">
      <div class="field"><label>Controls act on</label>${sel("ctrl", SPR_CONTROL, r.controlPoint||"", "Not set")}</div>
      <div class="field"><label>Review status</label>${sel("review", SPR_REVIEW, r.reviewStatus||"Draft")}</div>
    </div>
    <div class="field"><label>Evidence reference</label><input type="text" id="${prefix}-evidence" value="${sprX(r.evidenceReference||"")}" placeholder="e.g. Hydrogeology report (2026) s4.2"></div>`;
}
function sprReadFields(r, prefix){
  let changed = false;
  if(!r.sprIds) r.sprIds = {};
  SPR_ALL.forEach(role=>{ const el = document.getElementById(prefix+"-"+role); if(el && el.value && el.value!=="__new" && r.sprIds[role]!==el.value){ r.sprIds[role] = el.value; changed = true; } });
  const before = r.reviewStatus;
  [["relationshipStatus","rel"],["confidence","conf"],["controlPoint","ctrl"],["reviewStatus","review"],["evidenceReference","evidence"]].forEach(([k,id])=>{
    const el = document.getElementById(prefix+"-"+id); if(!el) return;
    const v = String(el.value||"").trim(); if((r[k]||"")!==v){ r[k] = v; changed = true; }
  });
  if(r.reviewStatus==="Approved" && before!=="Approved"){
    const who = rdReviewer();
    if(who){ r.sprApprovedBy = who; r.sprApprovedAt = rdStamp(); }
    else { r.reviewStatus = before; alert("Linkage not approved: your initials are needed for the approval record."); }
  }
  if(r.reviewStatus!=="Approved"){ delete r.sprApprovedBy; delete r.sprApprovedAt; }
  SPR_ALL.forEach(role=>{ const it = sprItem(role, r.sprIds[role]); if(it) r[SPR_FIELD[role]] = it.label; });
  return changed;
}
function sprGroupingDrawerHtml(r){
  const checks = r.id && RISKS.includes(r) ? sprChecks(r, sprActive()) : [];
  setTimeout(()=>{ const d = document.getElementById("drawer"); if(d) sprWireItemSelects(d); }, 0);
  return `<details class="group-box" open><summary>Source\u2013pathway\u2013receptor linkage</summary>
    <p class="panel-sub">Pick this risk's items from the project's SPR model, or add a new one.</p>
    ${checks.length?sprChecksHtml(checks):""}${sprFieldsHtml(r, "f-spr")}</details>`;
}
function rdReadSprFields(r){
  sprReadFields(r, "f-spr");
  const el = document.getElementById("f-risk-review");
  if(el && el.value && el.value!==r.riskStatus){
    if(el.value==="Approved"){
      const who = rdReviewer();
      if(who) rdApproveRisk(r, who); else alert("Risk not approved: your initials are needed for the approval record.");
    } else { r.riskStatus = el.value; delete r.riskApprovedBy; delete r.riskApprovedAt; }
  }
}
function renderSprReview(){
  const el = document.getElementById("pathway-analysis-body");
  const all = sprActive();
  let list = sprFilteredList();
  if(sprQueueStatus!=="all") list = list.filter(r=>r.reviewStatus===sprQueueStatus);
  const pending = list.filter(r=>r.reviewStatus!=="Approved");
  if(!list.some(r=>r.id===sprSelectedId)) sprSelectedId = list.length ? list[0].id : null;
  const sel = RISKS.find(r=>r.id===sprSelectedId);
  const cellTxt = (r, role)=>`<span class="spr-id">${sprX(sprIdOf(r, role))}</span>${sprX(sprGroupOf(r, role))}`;
  const rows = list.map(r=>{
    const n = sprChecks(r, all).length;
    return `<tr class="spr-row ${r.id===sprSelectedId?"sel":""}" data-rid="${r.id}" tabindex="0">
      <td><strong>#${r.id}</strong></td><td class="spr-s">${cellTxt(r,"source")}</td><td class="spr-p">${cellTxt(r,"pathway")}</td>
      <td class="spr-r">${cellTxt(r,"receptor")}</td><td class="spr-i">${cellTxt(r,"impact")}</td>
      <td class="muted-cell">${sprX(r.relationshipStatus||"")}</td><td>${sprRatingPill(r.resRating)}</td>
      <td>${n?`<span class="spr-warn">\u26a0 ${n}</span>`:`<span class="spr-okmark">\u2714</span>`}</td><td>${sprBadge(r.reviewStatus)} ${rdAiTag("link", r)}</td></tr>`;
  }).join("");
  const detail = sel ? `<div class="spr-detail-top"><h3>Risk #${sel.id}</h3>${sprBadge(sel.reviewStatus)} ${rdAiTag("link", sel)}</div>
      ${sel.sprOrigin==="AI" && sel.reviewStatus!=="Approved" ? `<div class="rd-ai-note">This linkage was generated by the agent. Check the source, pathway, receptor and impact, then approve it.</div>` : ""}
      ${sel.reviewStatus==="Approved" && sel.sprApprovedBy ? `<div class="panel-sub" style="margin-bottom:8px;">Approved by ${sprX(sel.sprApprovedBy)} on ${rdFmtDate(sel.sprApprovedAt)}</div>` : ""}
      <div class="spr-asis" title="As written in the register"><span class="spr-s">${sprX(richHtmlToPlainText(sel.source))}</span> \u2192 <span class="spr-p">${sprX(richHtmlToPlainText(sel.pathway))}</span> \u2192 <span class="spr-r">${sprX(richHtmlToPlainText(sel.receptor))}</span></div>
      ${sprChecksHtml(sprChecks(sel, all))}
      ${sprFieldsHtml(sel, "q-spr")}
      <div class="drawer-actions" style="margin-top:6px;">
        <button class="btn primary" id="q-save" type="button">Save</button>
        <button class="btn" id="q-approve" type="button">Save &amp; approve</button>
        <span class="spacer"></span>
        <button class="btn" id="q-open" type="button">Open full risk</button>
      </div>
      <div class="panel-sub" style="margin-top:8px;">Inherent ${sprRatingPill(sel.inhRating)} \u00b7 Residual ${sprRatingPill(sel.resRating)}</div>`
    : `<div class="empty-state">Nothing to review with these filters.</div>`;
  el.innerHTML = sprToolbarHtml("table") + `<div class="filter-row">
      <select id="q-status" aria-label="Review status">${["all",...SPR_REVIEW].map(s=>`<option value="${s}" ${sprQueueStatus===s?"selected":""}>${s==="all"?"All review states":s}</option>`).join("")}</select>
      <button class="btn" id="q-approve-all" type="button" ${pending.length?"":"disabled"}>Approve all ${pending.length} shown</button>
      <span class="panel-sub">One row per risk. Pick its items from the model, fix any \u26a0 checks, add the evidence, then approve.</span>
    </div>
    <div class="spr-split">
      <div class="scroll-x spr-queue"><table><thead><tr><th>Risk</th><th>Source</th><th>Pathway</th><th>Receptor</th><th>Impact</th><th>Basis</th><th>Res.</th><th>Checks</th><th>Review</th></tr></thead>
        <tbody>${rows || `<tr><td colspan="9" class="empty-state">No risks match.</td></tr>`}</tbody></table></div>
      <div class="spr-detail">${detail}</div>
    </div>`;
  wireSprToolbar(()=>renderSprReview());
  sprWireItemSelects(el);
  document.getElementById("q-status").addEventListener("change", e=>{ sprQueueStatus = e.target.value; renderSprReview(); });
  document.getElementById("q-approve-all").addEventListener("click", ()=>{
    const serious = pending.filter(r=>sprChecks(r, all).some(c=>c.lv==="bad")).length;
    if(!confirm(`Approve ${pending.length} link${pending.length===1?"":"s"}?${serious?`\n\n${serious} of them still ${serious===1?"has":"have"} a serious SPR issue.`:""} Only approve links you have checked.`)) return;
    const who = rdReviewer(); if(!who) return;
    pending.forEach(r=>rdApproveLink(r, who));
    renderAll();
  });
  el.querySelectorAll(".spr-row").forEach(tr=>{
    const pick = ()=>{ sprSelectedId = Number(tr.dataset.rid); renderSprReview(); };
    tr.addEventListener("click", pick);
    tr.addEventListener("keydown", e=>{ if(e.key==="Enter"){ e.preventDefault(); pick(); } });
  });
  if(sel){
    const save = (approve)=>{
      const changed = sprReadFields(sel, "q-spr");
      if(approve && sel.reviewStatus!=="Approved"){ const who = rdReviewer(); if(!who) return; rdApproveLink(sel, who); }
      if(changed) sel._lastEditedAt = new Date().toISOString();
      if(approve){
        const i = list.indexOf(sel);
        const next = list.slice(i+1).find(r=>r.reviewStatus!=="Approved") || list.find(r=>r!==sel && r.reviewStatus!=="Approved");
        if(next) sprSelectedId = next.id;
      }
      renderAll();
    };
    document.getElementById("q-save").addEventListener("click", ()=>save(false));
    document.getElementById("q-approve").addEventListener("click", ()=>save(true));
    document.getElementById("q-open").addEventListener("click", ()=>openDrawer(sel.id));
  }
}

/* ---- Model editor ---- */
function renderSprModelEditor(){
  const el = document.getElementById("pathway-analysis-body");
  const merges = sprSuggestedMerges();
  const m = sprModel();
  const itemRows = role=>sprItems(role).map(it=>{
    const n = sprUsage(role, it.id);
    return `<tr><td class="spr-idcell">${sprX(it.id)}</td>
      <td><input type="text" class="spr-m-label" data-role="${role}" data-id="${sprX(it.id)}" value="${sprX(it.label)}" maxlength="60" aria-label="${SPR_LABEL[role]} ${sprX(it.id)} name"></td>
      <td><input type="text" class="spr-m-note" data-role="${role}" data-id="${sprX(it.id)}" value="${sprX(it.note||"")}" maxlength="200" placeholder="${SPR_NOTE_HINT[role]}" aria-label="${SPR_LABEL[role]} ${sprX(it.id)} notes"></td>
      <td class="spr-num">${n}</td>
      <td class="spr-actions"><select class="spr-m-merge" data-role="${role}" data-id="${sprX(it.id)}" aria-label="Merge ${sprX(it.label)} into"><option value="">Merge into\u2026</option>${sprItems(role).filter(x=>x.id!==it.id).map(x=>`<option value="${sprX(x.id)}">${sprX(x.id+"  "+x.label)}</option>`).join("")}</select>
        ${n?"":`<button class="btn danger spr-m-del" type="button" data-role="${role}" data-id="${sprX(it.id)}">Delete</button>`}</td></tr>`;
  }).join("");
  const lab = (role, id)=>`<select class="spr-ro" data-f="${role}">${role==="pathway"?`<option value="">Any pathway</option>`:""}${sprItems(role).map(it=>`<option value="${sprX(it.id)}" ${it.id===id?"selected":""}>${sprX(it.id+"  "+it.label)}</option>`).join("")}</select>`;
  el.innerHTML = `<p class="panel-sub" style="margin:0 0 12px;">The project's SPR model. Build a short, specific list here and point each risk at it (Linkages tab). Renaming an item updates every risk that uses it. Merge near-duplicates so each source, pathway and receptor appears once.</p>
    ${merges.length?`<div class="spr-merge-box"><strong>Possible duplicates (${merges.length})</strong>
      ${merges.slice(0,10).map((x,i)=>`<div class="spr-merge-row"><span class="spr-${x.role[0]}">${SPR_LABEL[x.role]}</span> Merge <b>${sprX(x.drop.id+" "+x.drop.label)}</b> into <b>${sprX(x.keep.id+" "+x.keep.label)}</b>?
        <button class="btn" type="button" data-merge="${i}">Merge</button> <button class="btn" type="button" data-keep="${i}">Keep both</button></div>`).join("")}</div>`:""}
    <div class="spr-model-grid">${SPR_ALL.map(role=>`<div class="spr-card spr-model-card" style="border-top:4px solid ${SPR_COL[role].stroke};">
      <div class="spr-model-head"><h4 style="color:${SPR_COL[role].stroke};">${SPR_PLURAL[role]} <span class="panel-sub">${SPR_DESC[role].toLowerCase()}</span></h4><button class="btn" type="button" data-add="${role}">+ Add</button></div>
      <table class="spr-model-table"><thead><tr><th>ID</th><th>Name</th><th>Notes</th><th>Risks</th><th></th></tr></thead><tbody>${itemRows(role) || `<tr><td colspan="5" class="panel-sub">None yet.</td></tr>`}</tbody></table></div>`).join("")}</div>
    <div class="spr-card" style="margin-top:14px;"><div class="spr-model-head"><h4>Linkages ruled out <span class="panel-sub">source\u2013receptor pairs with no complete pathway, and why</span></h4><button class="btn" type="button" id="spr-ro-add">+ Add</button></div>
      ${m.ruledOut.length?`<table class="spr-model-table"><thead><tr><th>Source</th><th>Pathway</th><th>Receptor</th><th>Reason</th><th></th></tr></thead><tbody>
        ${m.ruledOut.map((x,i)=>`<tr data-ro="${i}"><td>${lab("source", x.source)}</td><td>${lab("pathway", x.pathway)}</td><td>${lab("receptor", x.receptor)}</td>
          <td><input type="text" class="spr-ro" data-f="reason" value="${sprX(x.reason||"")}" placeholder="e.g. TSF lined, groundwater 35 m, no bores within 5 km"></td>
          <td><button class="btn danger" type="button" data-ro-del="${i}">Remove</button></td></tr>`).join("")}</tbody></table>`
        : `<div class="panel-sub">None recorded. Good practice is to note source\u2013receptor pairs you considered and ruled out, so reviewers can see the model is complete.</div>`}
    </div>`;
  const now = ()=>new Date().toISOString();
  el.querySelectorAll(".spr-m-label").forEach(inp=>inp.addEventListener("change", ()=>{
    const role = inp.dataset.role, it = sprItem(role, inp.dataset.id), v = inp.value.trim().slice(0,60);
    if(!it) return;
    if(!v){ inp.value = it.label; return; }
    const clash = sprItems(role).find(x=>x!==it && sprKey(x.label)===sprKey(v));
    if(clash){
      if(confirm(`"${v}" is already ${clash.id}. Merge ${it.id} into ${clash.id}?`)){ sprMerge(role, it.id, clash.id); renderAll(); }
      else inp.value = it.label;
      return;
    }
    it.label = v; sprAllProjectRisks().forEach(r=>{ if(sprIdOf(r, role)===it.id) r._lastEditedAt = now(); });
    renderAll();
  }));
  el.querySelectorAll(".spr-m-note").forEach(inp=>inp.addEventListener("change", ()=>{ const it = sprItem(inp.dataset.role, inp.dataset.id); if(it){ it.note = inp.value.trim().slice(0,200); renderAll(); } }));
  el.querySelectorAll(".spr-m-merge").forEach(sel=>sel.addEventListener("change", ()=>{
    if(!sel.value) return;
    const role = sel.dataset.role, from = sprItem(role, sel.dataset.id), into = sprItem(role, sel.value);
    if(confirm(`Merge ${from.id} "${from.label}" into ${into.id} "${into.label}"? Every risk using ${from.id} will use ${into.id}.`)){ sprMerge(role, from.id, into.id); renderAll(); }
    else sel.value = "";
  }));
  el.querySelectorAll(".spr-m-del").forEach(b=>b.addEventListener("click", ()=>{ const role = b.dataset.role; sprModel()[SPR_LIST[role]] = sprItems(role).filter(x=>x.id!==b.dataset.id); renderAll(); }));
  el.querySelectorAll("[data-add]").forEach(b=>b.addEventListener("click", ()=>{
    const role = b.dataset.add;
    const label = prompt(`Name the new ${role}:`);
    if(String(label||"").trim()){ sprFindOrCreate(role, label); renderAll(); }
  }));
  el.querySelectorAll("[data-merge]").forEach(b=>b.addEventListener("click", ()=>{ const x = merges[Number(b.dataset.merge)]; sprMerge(x.role, x.drop.id, x.keep.id); renderAll(); }));
  el.querySelectorAll("[data-keep]").forEach(b=>b.addEventListener("click", ()=>{ sprDismissed.add(merges[Number(b.dataset.keep)].pairKey); renderSprModelEditor(); }));
  document.getElementById("spr-ro-add").addEventListener("click", ()=>{
    const s = sprItems("source")[0], r = sprItems("receptor")[0];
    if(!s || !r){ alert("Add a source and a receptor to the model first."); return; }
    sprModel().ruledOut.push({source:s.id, pathway:"", receptor:r.id, reason:""}); renderAll();
  });
  el.querySelectorAll("tr[data-ro]").forEach(tr=>{
    const row = sprModel().ruledOut[Number(tr.dataset.ro)];
    tr.querySelectorAll(".spr-ro").forEach(f=>f.addEventListener("change", ()=>{ row[f.dataset.f] = f.value.trim(); scheduleAutosave(); renderHeader(); }));
  });
  el.querySelectorAll("[data-ro-del]").forEach(b=>b.addEventListener("click", ()=>{ sprModel().ruledOut.splice(Number(b.dataset.roDel),1); renderAll(); }));
}

/* ---- Checks ---- */
function renderSprQuality(){
  const el = document.getElementById("pathway-analysis-body");
  const a = sprActive();
  const n = f=>a.filter(f).length;
  const checks = new Map(a.map(r=>[r, sprChecks(r, a)]));
  const count = id=>a.filter(r=>checks.get(r).some(c=>c.id===id)).length;
  const item = (t, c, cls)=>`<li><span>${sprX(t)}</span><span class="spr-count ${c?cls:"good"}">${c}</span></li>`;
  const unused = SPR_ALL.reduce((t,role)=>t+sprItems(role).filter(it=>!sprUsage(role, it.id)).length, 0);
  const noNote = sprItems("receptor").filter(it=>!it.note).length;
  const merges = sprSuggestedMerges().length;
  const issues = a.filter(r=>checks.get(r).length || r.reviewStatus!=="Approved");
  el.innerHTML = `<div class="panel-sub" style="margin-bottom:10px;">Covers all ${a.length} active risks in this assessment. The Guidance tab explains why each check matters.</div>
    <div class="spr-quality3">
      <div class="spr-card"><h4>The model</h4><ul class="spr-checks">
        ${item("Possible duplicate items", merges, "warn")}
        ${item("Receptors with no sensitivity or distance noted", noNote, "warn")}
        ${item("Items not used by any risk", unused, "warn")}
        ${item("Linkages ruled out (recorded)", sprModel().ruledOut.length, "good")}
      </ul></div>
      <div class="spr-card"><h4>Linkages</h4><ul class="spr-checks">
        ${["incomplete","generic","combined","pathway","selfref","impact","duplicate","workers"].map(id=>item(SPR_CHECK_LABEL[id], count(id), id==="incomplete"?"bad":"warn")).join("")}
      </ul></div>
      <div class="spr-card"><h4>Evidence and review</h4><ul class="spr-checks">
        ${item("AI risks awaiting approval", n(rdNeedsApproval), "warn")}
        ${item("AI linkages awaiting approval", n(sprNeedsApproval), "warn")}
        ${item("Approved linkages", n(r=>r.reviewStatus==="Approved"), "good")}
        ${item("Still draft", n(r=>r.reviewStatus==="Draft"), "warn")}
        ${item("Rework required", n(r=>r.reviewStatus==="Rework required"), "bad")}
        ${item("Derived or assumed links", n(r=>r.relationshipStatus!=="Explicit"), "warn")}
        ${item("Low confidence", n(r=>r.confidence==="Low"), "warn")}
        ${item(SPR_CHECK_LABEL.evidence, count("evidence"), "warn")}
        ${item(SPR_CHECK_LABEL.assumed, count("assumed"), "bad")}
        ${item(SPR_CHECK_LABEL.control, count("control"), "warn")}
      </ul></div>
    </div>
    ${merges||noNote?`<p class="panel-sub" style="margin-top:10px;">Fix model issues in the <a href="#" id="spr-go-model">Model tab</a>.</p>`:""}
    <h4 style="margin:16px 0 8px;">Risks needing attention (${issues.length})</h4>
    ${issues.length ? `<div class="scroll-x"><table><thead><tr><th>Risk</th><th>Linkage</th><th>Res.</th><th>Review</th><th>Issues</th><th></th></tr></thead><tbody>
      ${issues.map(r=>`<tr><td>#${r.id}</td><td><span class="spr-s">${sprX(sprGroupOf(r,"source"))}</span> \u2192 <span class="spr-p">${sprX(sprGroupOf(r,"pathway"))}</span> \u2192 <span class="spr-r">${sprX(sprGroupOf(r,"receptor"))}</span></td>
        <td>${sprRatingPill(r.resRating)}</td><td>${sprBadge(r.reviewStatus)}</td><td class="spr-issues">${checks.get(r).map(c=>`<div class="${c.lv}">${sprX(c.t)}</div>`).join("") || `<div class="warn">Not yet approved.</div>`}</td>
        <td style="white-space:nowrap;"><button class="btn" data-sprreview="${r.id}" type="button">Review</button> <button class="btn" data-spredit="${r.id}" type="button">Edit</button></td></tr>`).join("")}
      </tbody></table></div>` : `<div class="empty-state">No open issues.</div>`}`;
  const go = document.getElementById("spr-go-model");
  if(go) go.addEventListener("click", e=>{ e.preventDefault(); pathwayTab = "model"; renderPathwayAnalysis(); });
  wireSprDetail(a, ()=>renderSprQuality());
}

/* ---- Guidance ---- */
function renderSprGuide(){
  document.getElementById("pathway-analysis-body").innerHTML = `<div class="spr-guide">
    <p class="spr-guide-lead">Build the project's SPR model first: a short list of specific sources, pathways, receptors and impacts. Then each risk is one <strong>linkage</strong> through that model: a source, a pathway that can actually reach the receptor, a receptor that could be harmed, and the adverse effect.</p>
    <div class="spr-guide-grid">
      <div class="spr-card"><h4>1. Complete linkages only</h4><p>A risk needs all three links. If the pathway can't reach the receptor, record it under "Linkages ruled out" with the reason, instead of rating it. A pathway can be completed later, for example by new abstraction, groundwater rebound or a change of land use.</p></div>
      <div class="spr-card"><h4>2. Specific sources</h4><p>Name the activity or emission and where it comes from, not the whole mine. "Paddock TSF" beats "Mining". Consider normal operation, incidents, temporary shutdown, care and maintenance, and closure.</p></div>
      <div class="spr-card"><h4>3. Real pathways</h4><p>Name the mechanism and medium: seepage to groundwater, stormwater runoff, windblown dust, drawdown, direct clearing, vehicle strike. Base it on the site's topography, hydrogeology, weather and separation distances. A pathway is not the source.</p></div>
      <div class="spr-card"><h4>4. One receptor per linkage</h4><p>Split combined receptors ("soil and groundwater"). Note what makes the receptor sensitive and where it is, for example "active Malleefowl mound, 800 m from haul road". Include off-site receptors. Workers are covered by WHS.</p></div>
      <div class="spr-card"><h4>5. State the impact</h4><p>Say what harm happens to that receptor, for example "loss of P3 flora population" or "groundwater no longer fit for stock". The impact drives the consequence rating.</p></div>
      <div class="spr-card"><h4>6. Evidence and uncertainty</h4><p>A linkage stays potential until data confirms it. Record the evidence, the confidence and whether the link is explicit, derived or assumed. High or Extreme risks resting on assumptions should drive further study.</p></div>
      <div class="spr-card"><h4>7. Controls break links</h4><p>Good controls remove or contain the source, interrupt the pathway, or protect the receptor. Recording which link the controls act on shows why the residual rating is lower.</p></div>
      <div class="spr-card"><h4>8. One model, kept tidy</h4><p>Each item should appear once. Merge near-duplicates in the Model tab, keep names short and consistent, and update the model as studies arrive.</p></div>
    </div>
    <p class="panel-sub">Based on: DWER Guideline: Risk assessments (2020); NEPM (Assessment of Site Contamination) Schedule B2; DoH WA Assessment and management of contaminated sites; DMPE MDCP guidance and FAQs; UK Environment Agency Land contamination risk management (LCRM). For MDCPs, pathways directly regulated by another agency can be dealt with in the legislative framework section, and noise, dust and light are assessed through their effects on DMPE's environmental factors.</p>
  </div>`;
}

/* ---- Help ---- */
function rdOpenHelp(){
  document.getElementById("rd-help").innerHTML = `<div class="rd-help">
    <div class="rd-help-head"><h3>How to use this dashboard</h3><button class="btn" id="rd-help-close" type="button">Close</button></div>
    <p>This file holds one project's environmental risk assessment. Your data stays in the file on your computer. It needs an internet connection to open.</p>
    <h4>Risk register tab</h4>
    <ul>
      <li><b>Matrix:</b> click a rating card or a matrix cell to filter the register. <b>Inherent / Residual</b> switches which ratings you see.</li>
      <li><b>Filters:</b> use the factor, phase and domain chips or the search box. The yellow bar shows what's filtered. Click \u2715 to clear.</li>
      <li><b>Edit a risk:</b> click <b>Edit</b> on its row. Ratings update from the consequence and likelihood. You can also change them in the register dropdowns.</li>
      <li><b>Add, flag or archive:</b> use <b>+ Add risk</b>, the flag tick box in the editor, or <b>Archive</b>. Archived risks are hidden until you click <b>Show archived</b>.</li>
    </ul>
    <h4>SPR model tab</h4>
    <ul>
      <li><b>Figure:</b> each box is one item in the project's source\u2013pathway\u2013receptor model. Lines are risks, coloured by their highest rating and dashed where the link is derived or assumed. Hover to trace links, click to list risks. Download as <b>PNG</b> or <b>SVG</b>.</li>
      <li><b>Matrix:</b> sources down the side, receptors across the top, pathways in the cells.</li>
      <li><b>Linkages:</b> one row per risk. Pick its source, pathway, receptor and impact, add the evidence, then approve.</li>
      <li><b>Model:</b> rename, merge or add items, note receptor sensitivity and distance, and record linkages you've ruled out.</li>
      <li><b>Checks:</b> SPR problems to fix. <b>Guidance</b> explains good practice.</li>
    </ul>
    <h4>Reviewing AI content</h4>
    <ul>
      <li>Risks and SPR linkages written by the agent are tagged <span class="rd-ai">AI \u00b7 review</span> until a person approves them.</li>
      <li><b>Risks:</b> click <b>Edit</b>, check it, set <b>Risk review</b> to Approved and save. Or filter with <b>Needs approval</b> and use <b>Approve shown</b> once you've checked them all.</li>
      <li><b>Linkages:</b> SPR model tab, <b>Linkages</b>, then <b>Save &amp; approve</b>.</li>
      <li>Approvals record your initials and the date. They're included in the exports.</li>
    </ul>
    <h4>Saving and sharing</h4>
    <ul>
      <li>Click <b>Save copy</b> to download an updated .html file. Move it to your project folder and share that file. Changes are not saved into the file you opened.</li>
      <li>If you close without saving, your browser keeps a backup and offers to restore it next time you open the same file.</li>
      <li>Files on SharePoint or Teams: download them first, then open.</li>
    </ul>
    <h4>More from the agent</h4>
    <ul><li>Click <b>Paste from agent</b>, paste the agent's code block, then choose <b>Add to what's open</b> for extra risks or <b>Replace what's open</b> for a new version.</li></ul>
    <h4>Exports</h4>
    <ul>
      <li><b>Export \u25be</b> gives the register as Excel (this register or all of them) or as a PNG image, plus the MDCP template (MDCP) or CSM spreadsheet (DWER). Exports only include active risks, in order, with no blank rows.</li>
      <li>The SPR tab exports the figure (PNG, SVG) and the model and linkages (Excel).</li>
    </ul>
    <h4>More than one framework</h4>
    <ul><li>Use <b>\u21c4 Transfer risks to another framework</b> to copy risks into, for example, a DWER assessment. They stay linked and are marked for review.</li></ul>
  </div>`;
  document.getElementById("rd-help-overlay").classList.add("show");
  document.getElementById("rd-help-close").addEventListener("click", rdCloseHelp);
  document.getElementById("rd-help-close").focus();
}
function rdCloseHelp(){ document.getElementById("rd-help-overlay").classList.remove("show"); }
document.getElementById("rd-help-btn").addEventListener("click", rdOpenHelp);
document.getElementById("rd-help-overlay").addEventListener("click", e=>{ if(e.target.id==="rd-help-overlay") rdCloseHelp(); });
document.addEventListener("keydown", e=>{ if(e.key==="Escape" && document.getElementById("rd-help-overlay").classList.contains("show")) rdCloseHelp(); });

const __rdRenderAllSpr = renderAll;
renderAll = function(){ rdEnsureSpr(); __rdRenderAllSpr.apply(this, arguments); };

/* =========================================================================
   AI REVIEW IN THE REGISTER
   Risks written by the agent carry origin "AI" and stay "Needs review" until
   a person approves them. Approvals record initials and date.
   ========================================================================= */
const __rdFlagCell = flagCellHtml;
flagCellHtml = function(r){
  const base = __rdFlagCell.apply(this, arguments);
  const tag = rdAiTag("risk", r);
  return tag ? base.replace('<td class="badge-cell">', '<td class="badge-cell">' + tag + " ") : base;
};
const __rdPassesBase = passesBase;
passesBase = function(r){
  if(!__rdPassesBase.apply(this, arguments)) return false;
  if(rdShowNeedsApproval && !rdNeedsApproval(r)) return false;
  return true;
};
const __rdRenderRegister = renderRegister;
renderRegister = function(){
  __rdRenderRegister.apply(this, arguments);
  const n = RISKS.filter(r=>!r._archived && rdNeedsApproval(r)).length;
  const chip = document.getElementById("rd-approval-chip");
  const btn = document.getElementById("rd-approve-shown");
  if(chip){ chip.textContent = `\ud83e\udd16 Needs approval (${n})`; chip.classList.toggle("hidden", !n && !rdShowNeedsApproval); chip.classList.toggle("active", rdShowNeedsApproval); }
  if(btn){ const shown = visibleRisks().filter(rdNeedsApproval).length; btn.textContent = `Approve ${shown} shown\u2026`; btn.classList.toggle("hidden", !(rdShowNeedsApproval && shown)); }
};
document.getElementById("rd-approval-chip").addEventListener("click", ()=>{ rdShowNeedsApproval = !rdShowNeedsApproval; renderAll(); });
document.getElementById("rd-approve-shown").addEventListener("click", ()=>{
  const list = visibleRisks().filter(rdNeedsApproval);
  if(!list.length) return;
  if(!confirm(`Approve ${list.length} AI-generated risk${list.length===1?"":"s"}?\n\nOnly do this once you've checked each one: the wording, classification, ratings and controls.`)) return;
  const who = rdReviewer(); if(!who) return;
  list.forEach(r=>rdApproveRisk(r, who));
  renderAll();
});
// Review box at the top of the risk editor for AI-generated risks
const __rdOpenDrawer = openDrawer;
openDrawer = function(id){
  __rdOpenDrawer.apply(this, arguments);
  const r = id==null ? null : RISKS.find(x=>x.id===id);
  if(!r || r.origin!=="AI") return;
  const box = document.createElement("div");
  box.className = "rd-review-box" + (r.riskStatus==="Approved" ? " ok" : r.riskStatus==="Rework required" ? " bad" : "");
  box.innerHTML = `<div><strong>\ud83e\udd16 AI-generated risk</strong> ${rdAiTag("risk", r)}</div>
    <div class="panel-sub">${r.riskStatus==="Approved" ? `Approved by ${sprX(r.riskApprovedBy||"")} on ${rdFmtDate(r.riskApprovedAt)}.` : "Check the wording, classification, ratings and controls, then approve it."}</div>
    <div class="field" style="margin:8px 0 0;"><label for="f-risk-review">Risk review</label>
      <select id="f-risk-review">${RISK_REVIEW.map(s=>`<option ${s===r.riskStatus?"selected":""}>${s}</option>`).join("")}</select></div>`;
  const sub = document.querySelector("#drawer .panel-sub");
  if(sub) sub.after(box); else document.getElementById("drawer").prepend(box);
};

/* =========================================================================
   CLEAN EXPORTS
   Exports hold active risks only, sorted by ID, one row each, with no blank
   rows. Excel columns are sized and rows are heighted to fit wrapped text.
   ========================================================================= */
function rdIsEmptyRisk(r){
  const t = k=>richHtmlToPlainText(r[k]||"").trim();
  return !t("source") && !t("pathway") && !t("receptor") && !t("treatment") && !r.inhCons && !r.inhLike && !r.resCons && !r.resLike;
}
function rdExportRisks(list){ return (list || RISKS).filter(r=>!r._archived && !rdIsEmptyRisk(r)).sort((a,b)=>a.id-b.id); }
function sheetXml(rows, styleFor, colCount){
  const text = v=> v==null ? "" : String(v);
  const widths = [];
  for(let c=0; c<colCount; c++){
    let w = 6;
    rows.forEach((row, ri)=>{ text(row[c]).split("\n").forEach(line=>{ w = Math.max(w, Math.min(line.length, ri===0 ? 24 : 60)); }); });
    widths.push(Math.max(8, Math.min(w + 2, 48)));
  }
  let out = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
    + '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">'
    + '<sheetViews><sheetView workbookViewId="0"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>'
    + '<sheetFormatPr defaultRowHeight="15"/><cols>'
    + widths.map((w,i)=>`<col min="${i+1}" max="${i+1}" width="${w}" customWidth="1"/>`).join("") + '</cols><sheetData>';
  rows.forEach((row, r)=>{
    let lines = 1;
    row.forEach((cell, c)=>{
      const per = Math.max(1, widths[c] - 1);
      const n = text(cell).split("\n").reduce((s, line)=>s + Math.max(1, Math.ceil(line.length / per)), 0);
      lines = Math.max(lines, n);
    });
    const ht = Math.min(409, Math.max(r===0 ? 30 : 15, lines*15 + 2));
    out += `<row r="${r+1}" ht="${ht}" customHeight="1">`;
    row.forEach((cell, c)=>{
      if(cell===null || cell===undefined || cell==="") return;
      const ref = colLetter(c+1)+(r+1); const sid = styleFor ? styleFor(r,c) : 0; const sAttr = sid ? ` s="${sid}"` : "";
      if(typeof cell === "number") out += `<c r="${ref}"${sAttr}><v>${cell}</v></c>`;
      else out += `<c r="${ref}"${sAttr} t="inlineStr"><is><t xml:space="preserve">${escXml(cell)}</t></is></c>`;
    });
    out += '</row>';
  });
  out += `</sheetData><autoFilter ref="A1:${colLetter(colCount)}${Math.max(1, rows.length)}"/></worksheet>`;
  return out;
}
function rdFlatSheet(fw, risks, name){
  const tl = taxLabels(fw);
  const taxHeaders = fw.taxonomyType==="factor-indicator" ? [tl.top, tl.sub, ...(fw.domainsEnabled?["Domains"]:[])] : [tl.top];
  const phaseHeader = fw.phasesEnabled ? [phaseLabelOf(fw)] : [];
  const extra = extraColumns(fw);
  const commentsHeader = fw.showComments !== false ? ["Comments"] : [];
  const headers = ["ID", "Flagged", ...taxHeaders, "Source","Pathway","Receptor", ...phaseHeader, "Inh. Consequence","Inh. Likelihood","Inh. Rating",
    "Treatment / Controls","Res. Consequence","Res. Likelihood","Res. Rating", ...commentsHeader, ...extra.map(c=>c.label),
    "SPR source","SPR pathway","SPR receptor","SPR impact","Linkage basis","Confidence","Controls act on","Evidence reference",
    "Origin","Risk review","Risk approved by","Risk approved on","Linkage review","Linkage approved by","Last edited"];
  const rows = [headers];
  rdExportRisks(risks).forEach(r=>{
    const taxVals = fw.taxonomyType==="factor-indicator" ? [r.factor||"", r.indicator||"", ...(fw.domainsEnabled?[(r.domains||[]).join(", ")]:[])] : [r.receptorCategory||""];
    const phaseVals = fw.phasesEnabled ? [(r.phases||[]).join(", ")] : [];
    const extraVals = extra.map(c=> c.kind==="outcomes" ? c.full(r) : c.plain(r));
    const commentsVal = fw.showComments !== false ? [r.comments||""] : [];
    const aiRisk = r.origin==="AI";
    rows.push([r.id, r._flagged ? "Yes" : "", ...taxVals, richHtmlToPlainText(r.source), richHtmlToPlainText(r.pathway), richHtmlToPlainText(r.receptor), ...phaseVals,
      r.inhCons||"", r.inhLike||"", r.inhRating||"", richHtmlToPlainText(r.treatment), r.resCons||"", r.resLike||"", r.resRating||"", ...commentsVal, ...extraVals,
      sprGroupOf(r,"source"), sprGroupOf(r,"pathway"), sprGroupOf(r,"receptor"), sprGroupOf(r,"impact"), r.relationshipStatus||"", r.confidence||"", r.controlPoint||"", r.evidenceReference||"",
      r.origin||"", aiRisk ? (r.riskStatus||"Needs review") : "", r.riskStatus==="Approved" ? (r.riskApprovedBy||"") : "", r.riskStatus==="Approved" ? rdFmtDate(r.riskApprovedAt) : "",
      r.reviewStatus||"", r.reviewStatus==="Approved" ? (r.sprApprovedBy||"") : "", formatTimestamp(r._lastEditedAt)]);
  });
  const inhC = headers.indexOf("Inh. Rating"), resC = headers.indexOf("Res. Rating");
  const styleFor = (ri,c)=>{ if(ri===0) return 1; if(c===inhC) return ratingStyleId(rows[ri][inhC]); if(c===resC) return ratingStyleId(rows[ri][resC]); return 0; };
  return {name, rows, styleFor, colCount: headers.length};
}
function rdSheetName(s, used){
  let n = String(s).replace(/[\\\/\?\*\[\]:]/g, " ").slice(0, 31).trim() || "Register";
  let k = 2; const base = n;
  while(used.has(n)){ n = (base.slice(0, 28) + " " + k++).trim(); }
  used.add(n); return n;
}
function rdExportRegisters(all){
  stashActive();
  const keys = all ? Object.keys(ASSESSMENTS).filter(k=>rdExportRisks(ASSESSMENTS[k].risks).length) : [activeFramework.id];
  const used = new Set();
  const sheets = keys.map(k=>{ const fw = frameworkFor(k); return rdFlatSheet(fw, k===activeFramework.id ? RISKS : ASSESSMENTS[k].risks, rdSheetName(shortFwName(fw) + " register", used)); });
  if(!sheets.length || sheets.every(s=>s.rows.length < 2)){ alert("There are no active risks to export."); return; }
  const base = (project.name || "risk_register").replace(/[^a-z0-9]+/gi, "_");
  downloadWorkbook(buildWorkbook(sheets), all ? `${base}_all_registers.xlsx` : `${base}_${shortFwName(activeFramework).replace(/[^a-z0-9]+/gi,"_")}_register.xlsx`);
}
document.getElementById("export-flat-btn").addEventListener("click", ()=>rdExportRegisters(false));
document.getElementById("rd-export-all-btn").addEventListener("click", ()=>rdExportRegisters(true));

/* ---- Register as a PNG image (drawn on a canvas, wrapped to fit) ---- */
function rdExportRegisterPng(){
  const fw = activeFramework, tl = taxLabels(fw);
  const list = rdExportRisks(visibleRisks());
  if(!list.length){ alert("There are no active risks to export with the current filters."); return; }
  const plain = v=>richHtmlToPlainText(v||"").trim();
  const cols = [
    {h:"ID", w:62, v:r=>String(r.id) + (r._flagged ? "\nFlagged" : "")},
    {h: fw.taxonomyType==="factor-indicator" ? `${tl.top} / ${tl.sub}` : tl.top, w:150, v:r=> fw.taxonomyType==="factor-indicator" ? [r.factor, r.indicator].filter(Boolean).join(" \u203a ") : (r.receptorCategory||"")},
    {h:"Source", w:175, v:r=>plain(r.source)},
    {h:"Pathway", w:175, v:r=>plain(r.pathway)},
    {h:"Receptor", w:175, v:r=>plain(r.receptor)},
    ...(fw.phasesEnabled ? [{h:phaseLabelOf(fw), w:124, v:r=>(r.phases||[]).join(", ")}] : []),
    {h:"Inherent", w:118, rating:"inh"},
    {h:"Treatment / controls", w:262, v:r=>plain(r.treatment)},
    {h:"Residual", w:118, rating:"res"},
    {h:"Review", w:140, review:true}
  ];
  const PAD = 24, LH = 15, CELLPAD = 8, TITLE_H = 74, HEAD_H = 34;
  const W = PAD*2 + cols.reduce((s,c)=>s+c.w, 0);
  const font = "12px Figtree, 'Segoe UI', Arial, sans-serif";
  const probe = document.createElement("canvas").getContext("2d");
  probe.font = font;
  const wrap = (txt, maxW)=>{
    const out = [];
    String(txt||"").split("\n").forEach(par=>{
      let line = "";
      par.split(/\s+/).filter(Boolean).forEach(word=>{
        const test = line ? line + " " + word : word;
        if(probe.measureText(test).width <= maxW){ line = test; return; }
        if(line) out.push(line);
        let w = word;
        while(probe.measureText(w).width > maxW && w.length > 1){ let k = w.length; while(k > 1 && probe.measureText(w.slice(0,k)).width > maxW) k--; out.push(w.slice(0,k)); w = w.slice(k); }
        line = w;
      });
      out.push(line);
    });
    while(out.length && !out[out.length-1]) out.pop();
    return out.length ? out : [""];
  };
  const cells = list.map(r=>cols.map(c=>{
    if(c.rating){ const p = c.rating; return {rating: r[p+"Rating"]||"", lines: wrap([r[p+"Cons"], r[p+"Like"]].filter(Boolean).join(" \u00b7 "), c.w - CELLPAD*2)}; }
    if(c.review){
      if(r.origin!=="AI") return {lines:["Consultant"]};
      if(r.riskStatus==="Approved") return {tag:"ok", lines:["AI \u2713 approved", [r.riskApprovedBy, rdFmtDate(r.riskApprovedAt)].filter(Boolean).join(", ")].filter(Boolean)};
      return {tag: r.riskStatus==="Rework required" ? "bad" : "ai", lines:[r.riskStatus==="Rework required" ? "AI \u00b7 rework" : "AI \u00b7 needs review"]};
    }
    return {lines: wrap(c.v(r), c.w - CELLPAD*2)};
  }));
  const rowH = cells.map(row=>Math.max(...row.map(cell=>cell.lines.length*LH + (cell.rating ? 26 : 0) + (cell.tag ? 8 : 0))) + CELLPAD*2);
  const H = TITLE_H + HEAD_H + rowH.reduce((s,h)=>s+h, 0) + 44;
  const scale = Math.max(1, Math.min(2, Math.floor(30000 / H) || 1));
  const cv = document.createElement("canvas");
  cv.width = W*scale; cv.height = H*scale;
  const ctx = cv.getContext("2d");
  ctx.scale(scale, scale);
  const rr = (x, y, w, h, r)=>{ ctx.beginPath(); ctx.moveTo(x+r, y); ctx.arcTo(x+w, y, x+w, y+h, r); ctx.arcTo(x+w, y+h, x, y+h, r); ctx.arcTo(x, y+h, x, y, r); ctx.arcTo(x, y, x+w, y, r); ctx.closePath(); };
  ctx.fillStyle = "#FFFFFF"; ctx.fillRect(0, 0, W, H);
  ctx.textBaseline = "alphabetic";
  ctx.fillStyle = "#1E1E1E"; ctx.font = "bold 19px Figtree, 'Segoe UI', Arial, sans-serif";
  ctx.fillText(`${project.name || "Untitled project"}: risk register`, PAD, 34);
  ctx.fillStyle = "#565D4F"; ctx.font = "12.5px Figtree, 'Segoe UI', Arial, sans-serif";
  const aiOpen = list.filter(rdNeedsApproval).length;
  const filtered = visibleRisks().length !== rdExportRisks(RISKS).length;
  ctx.fillText([fw.name, `${list.length} risk${list.length===1?"":"s"}${filtered?" (filtered)":""}`, aiOpen ? `${aiOpen} AI-generated risk${aiOpen===1?"":"s"} awaiting approval` : "", rdFmtDate(new Date().toISOString())].filter(Boolean).join("   \u00b7   "), PAD, 56);
  let x = PAD, y = TITLE_H;
  ctx.fillStyle = "#3C533C"; ctx.fillRect(PAD, y, W - PAD*2, HEAD_H);
  ctx.fillStyle = "#FFFFFF"; ctx.font = "bold 12px Figtree, 'Segoe UI', Arial, sans-serif";
  cols.forEach(c=>{ ctx.fillText(c.h, x + CELLPAD, y + 21); x += c.w; });
  y += HEAD_H;
  const accent = {2:"#3C6E8F", 3:"#4F7942", 4:"#A73434"};
  list.forEach((r, ri)=>{
    const h = rowH[ri];
    ctx.fillStyle = ri % 2 ? "#F8F8F4" : "#FFFFFF"; ctx.fillRect(PAD, y, W - PAD*2, h);
    x = PAD;
    cols.forEach((c, ci)=>{
      const cell = cells[ri][ci];
      if(accent[ci]){ ctx.fillStyle = accent[ci]; ctx.fillRect(x, y + 4, 3, h - 8); }
      let ty = y + CELLPAD + 11;
      if(cell.rating){
        ctx.fillStyle = "#565D4F"; ctx.font = font;
        cell.lines.forEach(l=>{ ctx.fillText(l, x + CELLPAD, ty); ty += LH; });
        if(cell.rating){
          ctx.font = "bold 11.5px Figtree, 'Segoe UI', Arial, sans-serif";
          const tw = ctx.measureText(cell.rating).width + 18;
          ctx.fillStyle = SPR_RCOL[cell.rating] || "#8A8A80"; rr(x + CELLPAD, ty - 6, tw, 20, 10); ctx.fill();
          ctx.fillStyle = "#FFFFFF"; ctx.fillText(cell.rating, x + CELLPAD + 9, ty + 8);
        }
      } else if(cell.tag){
        const col = cell.tag==="ok" ? ["#E4EDE0","#3F6B3F"] : cell.tag==="bad" ? ["#F2D4D2","#A73434"] : ["#F6E9C9","#8A6A18"];
        ctx.font = "bold 11.5px Figtree, 'Segoe UI', Arial, sans-serif";
        const tw = Math.min(c.w - CELLPAD*2, ctx.measureText(cell.lines[0]).width + 16);
        ctx.fillStyle = col[0]; rr(x + CELLPAD, ty - 13, tw, 20, 10); ctx.fill();
        ctx.fillStyle = col[1]; ctx.fillText(cell.lines[0], x + CELLPAD + 8, ty + 1);
        ctx.font = font; ctx.fillStyle = "#565D4F";
        cell.lines.slice(1).forEach((l,i)=>ctx.fillText(l, x + CELLPAD, ty + 22 + i*LH));
      } else {
        ctx.fillStyle = ci===0 ? "#1E1E1E" : "#1E1E1E";
        cell.lines.forEach((l, li)=>{
          ctx.font = (ci===0 && li===0) ? "bold 12px Figtree, 'Segoe UI', Arial, sans-serif" : (ci===0 ? "11px Figtree, 'Segoe UI', Arial, sans-serif" : font);
          ctx.fillStyle = (ci===0 && li>0) ? "#8A6A18" : "#1E1E1E";
          ctx.fillText(l, x + CELLPAD, ty); ty += LH;
        });
      }
      x += c.w;
    });
    ctx.strokeStyle = "#DCDACD"; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(PAD, y + h - .5); ctx.lineTo(W - PAD, y + h - .5); ctx.stroke();
    y += h;
  });
  ctx.fillStyle = "#6B6F63"; ctx.font = "11px Figtree, 'Segoe UI', Arial, sans-serif";
  ctx.fillText(`Ratings from the ${fw.name} matrix. "AI" marks content generated by the Risk Assessment agent.`, PAD, y + 26);
  cv.toBlob(b=>{
    if(!b){ alert("PNG export failed. The register may be too long; try filtering it first."); return; }
    sprDownload(b, `${(project.name||"risk_register").replace(/[^a-z0-9]+/gi,"_")}_${shortFwName(fw).replace(/[^a-z0-9]+/gi,"_")}_register.png`);
  }, "image/png");
}
document.getElementById("rd-export-png-btn").addEventListener("click", ()=>{
  if(document.fonts && document.fonts.ready) document.fonts.ready.then(rdExportRegisterPng); else rdExportRegisterPng();
});

/* =========================================================================
   INIT
   ========================================================================= */
ensureOutcomeLibrary();
stashActive();
syncFrameworkSelect();
renderAll();
markSaved();
renderHeader();
rdLoadEmbedded();
checkForAutosaveRecovery();
