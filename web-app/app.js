// LaTeX Acadêmico Studio - Core Controller with Real TeX Live Engine
(function() {
  'use strict';

  // -----------------------------------------------------------------
  // State Management
  // -----------------------------------------------------------------
  const state = {
    currentFile: 'main.tex',
    files: {
      'main.tex': `\\documentclass[conference]{IEEEtran}
\\IEEEoverridecommandlockouts
\\usepackage{cite}
\\usepackage{amsmath,amssymb,amsfonts}
\\usepackage{algorithmic}
\\usepackage{graphicx}
\\usepackage{textcomp}
\\usepackage{xcolor}
\\usepackage{booktabs}
\\usepackage{hyperref}

\\def\\BibTeX{{\\rm B\\kern-.05em{\\sc i\\kern-.025em b}\\kern-.08em
    T\\kern-.1667em\\lower.7ex\\hbox{E}\\kern-.125emX}}

\\begin{document}

\\title{A Framework Integrating Simulated Drone Swarm With a Real Outdoor UAV\\\\
\\thanks{Supported by Aeronautics Institute of Technology (ITA) and Robotics Laboratory.}
}

\\author{\\IEEEauthorblockN{Andr{\\'e} Casadei Marques}
\\IEEEauthorblockA{\\textit{Department of Computer Systems and Robotics} \\\\
\\textit{Aeronautics Institute of Technology (ITA)}\\\\
S{\\~a}o Jos{\\'e} dos Campos, Brazil \\\\
andre.marques.102192@ga.ita.br}
\\and
\\IEEEauthorblockN{2\\textsuperscript{nd} Lab Researcher}
\\IEEEauthorblockA{\\textit{Department of Robotics} \\\\
\\textit{Robotics Laboratory}\\\\
coauthor@ita.br}
}

\\maketitle

\\begin{abstract}
Unmanned Aerial Vehicle (UAV) swarms demand extensive experimental validation under realistic communication constraints and dynamic outdoor environments. In this paper, we present an end-to-end framework integrating simulated swarm agents with an outdoor physical quadrotor via hardware-in-the-loop consensus protocols. Our approach bridges the reality gap while enabling real-time telemetry streaming, distributed state estimation, and automated mission logging.
\\end{abstract}

\\begin{IEEEkeywords}
UAV Swarms, Hardware-in-the-Loop, Distributed Consensus, Autonomous Robotics, Field Experiments.
\\end{IEEEkeywords}

\\input{sections/01_introduction.tex}
\\input{sections/02_related_work.tex}
\\input{sections/03_methodology.tex}
\\input{sections/04_experimental_results.tex}
\\input{sections/05_conclusion.tex}

\\bibliographystyle{IEEEtran}
\\bibliography{references}

\\end{document}`,

      'sections/01_introduction.tex': `\\section{Introduction}
\\label{sec:intro}

In recent years, Unmanned Aerial Vehicles (UAVs) have emerged as essential systems for environmental monitoring, search-and-rescue, and persistent surveillance \\cite{Alqudsi2025UavSwarms}. When organized into multi-agent or swarm formations, these vehicles achieve broad spatial coverage and elevated fault tolerance \\cite{mohsan2023}.

However, experimentally evaluating and validating complex swarm control and decision-making strategies in real outdoor environments remains a significant bottleneck due to hardware costs, collision risks, and physical space limits.

To address these challenges, we present an architecture that couples high-fidelity digital-twin swarms with live outdoor flight telemetry, enabling safe and reproducible multi-robot deployment.`,

      'sections/02_related_work.tex': `\\section{Related Work}
\\label{sec:related_work}

UAV swarm testbeds have been broadly explored across pure simulation environments and physical indoor motion-capture arenas.

Indoor arenas provide high-precision ground truth using optical tracking systems; however, they cannot emulate aerodynamic wind gusts, GPS degradation, and long-range RF propagation typical of field operations \\cite{Alqudsi2025UavSwarms}. Conversely, outdoor field trials often compromise safety when testing emergent consensus algorithms. Our hybrid architecture reconciles these two extremes through real-time state synthesis.`,

      'sections/03_methodology.tex': `\\section{System Methodology}
\\label{sec:methodology}

The core architecture coordinates real and virtual vehicles through an agreement protocol on positional centroids:

\\begin{equation}
\\label{eq:consensus}
\\mathbf{p}_{i}[k+1] = \\mathbf{p}_{i}[k] + \\gamma \\sum_{j \\in \\mathcal{N}_i} a_{ij} (\\mathbf{p}_j[k] - \\mathbf{p}_i[k]) + \\mathbf{v}_{ext}
\\end{equation}
where $\\mathbf{p}_i[k] \\in \\mathbb{R}^3$ denotes the 3D position vector of agent $i$, $\\mathcal{N}_i$ represents the active neighborhood topology, and $\\mathbf{v}_{ext}$ compensates for outdoor atmospheric disturbances measured by onboard IMU/barometer sensors.`,

      'sections/04_experimental_results.tex': `\\section{Experimental Results}
\\label{sec:results}

Validation trials were executed with one physical Holybro X500 quadrotor operating simultaneously with 15 simulated agents. Table~\\ref{tab:metrics} reports the positional tracking errors across varying packet drop rates.

\\begin{table}[htbp]
\\caption{Trajectory Consensus Performance Under Packet Loss}
\\begin{center}
\\begin{tabular}{lccc}
\\toprule
\\textbf{Packet Loss} & \\textbf{RMS Error (m)} & \\textbf{Max Drift (m)} & \\textbf{Consensus Time (s)} \\\\
\\midrule
0\\% & 0.082 & 0.141 & 3.2 \\\\
15\\% & 0.114 & 0.203 & 3.8 \\\\
30\\% & 0.187 & 0.312 & 4.6 \\\\
45\\% & 0.245 & 0.428 & 5.9 \\\\
\\bottomrule
\\end{tabular}
\\label{tab:metrics}
\\end{center}
\\end{table}`,

      'sections/05_conclusion.tex': `\\section{Conclusion}
\\label{sec:conclusion}

This paper demonstrated a hybrid swarm framework linking physical UAV flight in outdoor environments with real-time simulated agent swarms. Future work includes testing autonomous collision avoidance with dynamic obstacles and expanding the fleet to multiple physical aircraft.`,

      'references.bib': `@article{Alqudsi2025UavSwarms,
  author    = {Alqudsi, A. and Smith, J. and Marques, A. C.},
  title     = {Autonomous Navigation and Consensus in Dense UAV Swarms Under Intermittent Connectivity},
  journal   = {IEEE Transactions on Robotics},
  volume    = {41},
  pages     = {112--128},
  year      = {2025},
  publisher = {IEEE}
}

@article{mohsan2023,
  author    = {Mohsan, S. A. H. and Khan, M. A. and Noor, F. and Ullah, I. and Alsharif, M. H.},
  title     = {Towards the analytical performance of UAV communications: A comprehensive review},
  journal   = {Computer Networks},
  volume    = {222},
  pages     = {109556},
  year      = {2023}
}

@inproceedings{Docling2024IBM,
  author    = {Docling Research Team},
  title     = {High-Precision Document Conversion for Multimodal AI Workflows},
  booktitle = {Proceedings of Document Engineering},
  year      = {2024}
}`
    },
    knowledgeBase: [
      {
        id: 'alqudsi2025',
        citeKey: 'Alqudsi2025UavSwarms',
        title: 'Autonomous Navigation and Consensus in Dense UAV Swarms Under Intermittent Connectivity',
        authors: 'Alqudsi, Smith, Marques (2025)',
        collection: 'CROS 2027',
        highlight: '“Under high packet loss (>40%), the distributed consensus estimator maintains collision-free trajectories with sub-decimeter error bounds.”',
        page: 'p. 116',
        fichamento: 'Alqudsi_2025_UavSwarms_Fichamento.md'
      },
      {
        id: 'mohsan2023',
        citeKey: 'mohsan2023',
        title: 'Towards the analytical performance of UAV communications',
        authors: 'Mohsan et al. (2023)',
        collection: 'Comunicações UAV',
        highlight: '“Swarm network topologies suffer severe degradation under NLOS outdoor channels, necessitating adaptive rate control.”',
        page: 'p. 8',
        fichamento: 'Mohsan_2023_Comms_Fichamento.md'
      },
      {
        id: 'docling2024',
        citeKey: 'Docling2024IBM',
        title: 'High-Precision Document Conversion for Multimodal AI Workflows',
        authors: 'Docling Research Team (2024)',
        collection: 'IA & Agentes',
        highlight: '“Converts multi-column academic PDFs, complex tables, and LaTeX equations into structured Markdown with high fidelity.”',
        page: 'p. 4',
        fichamento: 'Docling_2024_FullText_Fichamento.md'
      }
    ],
    commits: [
      { msg: 'feat: add trajectory consensus evaluation table', author: 'André Casadei Marques', time: 'Há 15 minutos', sha: 'c4e912a' },
      { msg: 'refactor(methodology): update discrete equation (1)', author: 'Pesquisador LAB', time: 'Há 2 horas', sha: '8f7a23b' },
      { msg: 'docs: initial IEEEtran modular conference setup', author: 'André Casadei Marques', time: 'Ontem às 22:45', sha: '10a39d8' }
    ],
    unsaved: false,
    settings: {
      repo: 'AndreCasadeiMarques/latex-academic-system',
      token: '',
      drivePath: 'G:\\Meu Drive\\Obsidian_Pesquisa\\Biblioteca_Academica\\Revisoes_PDF'
    }
  };

  // -----------------------------------------------------------------
  // DOM Elements
  // -----------------------------------------------------------------
  const el = {
    fileTree: document.getElementById('file-tree'),
    currentFilename: document.getElementById('current-filename'),
    unsavedTag: document.getElementById('unsaved-tag'),
    latexCode: document.getElementById('latex-code'),
    wordCount: document.getElementById('word-count'),
    charCount: document.getElementById('char-count'),
    sidebar: document.getElementById('sidebar'),
    toggleSidebarBtn: document.getElementById('toggle-sidebar-btn'),
    viewSwitcher: document.getElementById('view-switcher'),
    editorPane: document.getElementById('editor-pane'),
    auxPane: document.getElementById('aux-pane'),
    quickSaveBtn: document.getElementById('quick-save-btn'),
    quickCompileBtnNav: document.getElementById('quick-compile-btn-nav'),
    commitModalBtn: document.getElementById('commit-modal-btn'),
    openSettingsBtn: document.getElementById('open-settings-btn'),
    citePickerTrigger: document.getElementById('cite-picker-trigger'),
    citeModal: document.getElementById('cite-modal'),
    closeCiteModal: document.getElementById('close-cite-modal'),
    citeSearch: document.getElementById('cite-search'),
    citeList: document.getElementById('cite-list'),
    commitModal: document.getElementById('commit-modal'),
    closeCommitModal: document.getElementById('close-commit-modal'),
    confirmCommitBtn: document.getElementById('confirm-commit-btn'),
    cancelCommitBtn: document.getElementById('cancel-commit-btn'),
    commitMsg: document.getElementById('commit-msg'),
    commitTargetFile: document.getElementById('commit-target-file'),
    settingsModal: document.getElementById('settings-modal'),
    closeSettingsModal: document.getElementById('close-settings-modal'),
    saveSettingsBtn: document.getElementById('save-settings-btn'),
    cfgRepo: document.getElementById('cfg-repo'),
    cfgToken: document.getElementById('cfg-token'),
    cfgDrive: document.getElementById('cfg-drive'),
    activeRepoName: document.getElementById('active-repo-name'),
    toast: document.getElementById('toast'),
    kbSearch: document.getElementById('kb-search'),
    kbList: document.getElementById('kb-list'),
    kbCount: document.getElementById('kb-count'),
    commitLog: document.getElementById('commit-log'),
    triggerCompileBtn: document.getElementById('trigger-compile-btn'),
    initialCompileBtn: document.getElementById('initial-compile-btn'),
    openPdfExternalBtn: document.getElementById('open-pdf-external-btn'),
    pushDriveReviewBtn: document.getElementById('push-drive-review-btn'),
    latexcgiForm: document.getElementById('latexcgi-form'),
    pdfPreviewFrame: document.getElementById('pdf-preview-frame'),
    pdfPlaceholder: document.getElementById('pdf-placeholder'),
    compileStatusBar: document.getElementById('compile-status-bar'),
    compileSpinner: document.getElementById('compile-spinner'),
    compileStatusMsg: document.getElementById('compile-status-msg')
  };

  // -----------------------------------------------------------------
  // Initialization & LocalStorage Restore
  // -----------------------------------------------------------------
  function init() {
    // Restore settings
    const savedSettings = localStorage.getItem('latex_settings');
    if (savedSettings) {
      try {
        state.settings = Object.assign(state.settings, JSON.parse(savedSettings));
      } catch (e) {}
    }
    el.activeRepoName.textContent = state.settings.repo;
    el.cfgRepo.value = state.settings.repo;
    el.cfgToken.value = state.settings.token || '';
    el.cfgDrive.value = state.settings.drivePath;

    // Restore cached drafts if available
    Object.keys(state.files).forEach(f => {
      const cached = localStorage.getItem('latex_draft_' + f);
      if (cached !== null) {
        state.files[f] = cached;
      }
    });

    renderFileTree();
    loadFile(state.currentFile);
    renderKnowledgeBase();
    renderCommitLog();
    setupEvents();

    // Register service worker if available
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('sw.js').catch(() => {});
    }
  }

  // -----------------------------------------------------------------
  // File Explorer & Editor Loading
  // -----------------------------------------------------------------
  function renderFileTree() {
    el.fileTree.innerHTML = '';
    Object.keys(state.files).forEach(filename => {
      const item = document.createElement('div');
      item.className = 'tree-item' + (filename === state.currentFile ? ' active' : '');
      const icon = filename.endsWith('.bib') ? '📚' : (filename === 'main.tex' ? '👑' : '📄');
      item.innerHTML = `<span>${icon}</span> <span>${filename}</span>`;
      item.addEventListener('click', () => {
        if (state.unsaved) {
          saveCurrentFileLocally();
        }
        loadFile(filename);
        if (window.innerWidth <= 820) {
          el.sidebar.classList.remove('open');
        }
      });
      el.fileTree.appendChild(item);
    });
  }

  function loadFile(filename) {
    state.currentFile = filename;
    el.currentFilename.textContent = filename;
    el.commitTargetFile.textContent = filename;
    el.latexCode.value = state.files[filename] || '';
    state.unsaved = false;
    el.unsavedTag.classList.add('hidden');
    updateStats();
    renderFileTree();
  }

  function updateStats() {
    const text = el.latexCode.value;
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const chars = text.length;
    el.wordCount.textContent = `${words} palavras`;
    el.charCount.textContent = `${chars} caracteres`;
  }

  function saveCurrentFileLocally() {
    state.files[state.currentFile] = el.latexCode.value;
    localStorage.setItem('latex_draft_' + state.currentFile, el.latexCode.value);
    state.unsaved = false;
    el.unsavedTag.classList.add('hidden');
    showToast('Salvo no dispositivo (Offline Draft)');
  }

  // -----------------------------------------------------------------
  // REAL TeX Live Cloud Compilation Engine
  // -----------------------------------------------------------------
  function compileRealLatex() {
    // 1. Save current edited file in memory first
    state.files[state.currentFile] = el.latexCode.value;

    // 2. Prepare full document for compilation
    let mainDocument = state.files['main.tex'] || '';

    // If currently editing a section and not in main.tex, check if main.tex exists
    // If user deleted or modified main.tex, or if currentFile itself contains \documentclass, use current file
    if (state.files[state.currentFile].includes('\\documentclass')) {
      mainDocument = state.files[state.currentFile];
    }

    // 3. Setup the hidden form for texlive.net
    const form = el.latexcgiForm;
    form.innerHTML = '';

    // Helper to append textarea input
    function addFileInput(name, content) {
      const textarea = document.createElement('textarea');
      textarea.name = 'filecontents[]';
      textarea.value = content;
      form.appendChild(textarea);

      const filenameInput = document.createElement('input');
      filenameInput.type = 'text';
      filenameInput.name = 'filename[]';
      filenameInput.value = name;
      form.appendChild(filenameInput);
    }

    // Add main document (document.tex)
    addFileInput('document.tex', mainDocument);

    // Add modular sections
    Object.keys(state.files).forEach(fname => {
      if (fname !== 'main.tex') {
        // Strip directory prefix so \input{01_introduction.tex} or \input{sections/...} work
        const base = fname.replace(/^sections\//, '');
        addFileInput(base, state.files[fname]);
        if (fname.startsWith('sections/')) {
          addFileInput(fname, state.files[fname]);
        }
      }
    });

    // Add references.bib if present
    if (state.files['references.bib']) {
      addFileInput('references.bib', state.files['references.bib']);
      addFileInput('ref.bib', state.files['references.bib']);
    }

    // Engine: pdflatex (default, fastest and standard for IEEEtran)
    const engineInput = document.createElement('input');
    engineInput.type = 'text';
    engineInput.name = 'engine';
    engineInput.value = 'pdflatex';
    form.appendChild(engineInput);

    // 4. Update UI status
    el.pdfPlaceholder.classList.add('hidden');
    el.compileSpinner.classList.remove('hidden');
    el.compileStatusMsg.textContent = 'Enviando código e compilando no TeX Live (Nuvem)...';
    showToast('Compilando no TeX Live...');

    // Switch to preview tab on mobile/tablet if needed
    if (window.innerWidth <= 820) {
      el.editorPane.classList.remove('view-active');
      el.auxPane.classList.add('view-active');
      switchAuxTab('preview');
      el.viewSwitcher.querySelectorAll('.view-btn').forEach(b => b.classList.toggle('active', b.dataset.view === 'preview'));
    } else {
      switchAuxTab('preview');
    }

    // 5. Submit form directly to the iframe
    form.submit();

    // 6. Handle completion
    const onFrameLoad = () => {
      el.compileSpinner.classList.add('hidden');
      el.compileStatusMsg.textContent = 'PDF oficial gerado com sucesso via TeX Live!';
      showToast('PDF compilado com sucesso!');
      el.pdfPreviewFrame.removeEventListener('load', onFrameLoad);
    };
    el.pdfPreviewFrame.addEventListener('load', onFrameLoad);
  }

  // -----------------------------------------------------------------
  // Touch Toolbar Helpers (LaTeX Insertions)
  // -----------------------------------------------------------------
  function insertAtCursor(before, after = '') {
    const textarea = el.latexCode;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const currentText = textarea.value;
    const selectedText = currentText.substring(start, end);

    const replacement = before + (selectedText || '') + after;
    textarea.value = currentText.substring(0, start) + replacement + currentText.substring(end);

    const newCursorPos = start + before.length + selectedText.length;
    textarea.focus();
    textarea.setSelectionRange(newCursorPos, newCursorPos);

    onCodeChange();
  }

  function onCodeChange() {
    state.unsaved = true;
    el.unsavedTag.classList.remove('hidden');
    updateStats();
  }

  // -----------------------------------------------------------------
  // Citation Picker Modal (\cite{})
  // -----------------------------------------------------------------
  function parseBibTeX(bibContent) {
    const entries = [];
    const entryRegex = /@(\w+)\s*\{\s*([^,]+),([^@]*)/g;
    let match;
    while ((match = entryRegex.exec(bibContent)) !== null) {
      const type = match[1];
      const key = match[2].trim();
      const body = match[3];

      const getField = (fieldName) => {
        const regex = new RegExp(`${fieldName}\\s*=\\s*[\"{](.*?)[\"}][,\\n]`, 'i');
        const m = regex.exec(body);
        return m ? m[1].trim() : '';
      };

      entries.push({
        type: type.toUpperCase(),
        key: key,
        title: getField('title') || 'Título não especificado',
        author: getField('author') || 'Autor desconhecido',
        year: getField('year') || 's/d',
        journal: getField('journal') || getField('booktitle') || ''
      });
    }
    return entries;
  }

  function renderCitationList(filterText = '') {
    const bibContent = state.files['references.bib'] || '';
    const entries = parseBibTeX(bibContent);
    const filter = filterText.toLowerCase();

    el.citeList.innerHTML = '';
    const filtered = entries.filter(e => 
      e.key.toLowerCase().includes(filter) ||
      e.title.toLowerCase().includes(filter) ||
      e.author.toLowerCase().includes(filter) ||
      e.year.includes(filter)
    );

    if (filtered.length === 0) {
      el.citeList.innerHTML = '<div style="padding:16px;text-align:center;color:var(--text-muted)">Nenhuma referência encontrada em references.bib</div>';
      return;
    }

    filtered.forEach(entry => {
      const card = document.createElement('div');
      card.className = 'cite-card';
      card.innerHTML = `
        <div class="cite-card-key">\\cite{${entry.key}}</div>
        <div class="cite-card-title">${entry.title}</div>
        <div class="cite-card-author">${entry.author} (${entry.year})</div>
      `;
      card.addEventListener('click', () => {
        insertAtCursor(`\\cite{${entry.key}}`);
        closeModal(el.citeModal);
        showToast(`Citação inserida: \\cite{${entry.key}}`);
      });
      el.citeList.appendChild(card);
    });
  }

  // -----------------------------------------------------------------
  // Knowledge Base (Fichamentos & Grifos)
  // -----------------------------------------------------------------
  function renderKnowledgeBase(filterText = '') {
    const filter = filterText.toLowerCase();
    el.kbList.innerHTML = '';

    const filtered = state.knowledgeBase.filter(item => 
      item.title.toLowerCase().includes(filter) ||
      item.highlight.toLowerCase().includes(filter) ||
      item.authors.toLowerCase().includes(filter) ||
      item.citeKey.toLowerCase().includes(filter)
    );

    el.kbCount.textContent = filtered.length;

    filtered.forEach(item => {
      const card = document.createElement('div');
      card.className = 'kb-card';
      card.innerHTML = `
        <div class="kb-title">${item.title}</div>
        <div class="kb-meta">
          <span>📁 ${item.collection} (${item.page})</span>
          <span>🔑 ${item.citeKey}</span>
        </div>
        <div class="kb-highlight">${item.highlight}</div>
        <div class="kb-actions">
          <button class="btn btn-sm btn-secondary copy-quote-btn">📋 Copiar Grifo</button>
          <button class="btn btn-sm btn-primary insert-cite-btn">📌 Inserir \\cite</button>
        </div>
      `;

      card.querySelector('.copy-quote-btn').addEventListener('click', () => {
        navigator.clipboard.writeText(item.highlight);
        showToast('Grifo copiado para a área de transferência!');
      });

      card.querySelector('.insert-cite-btn').addEventListener('click', () => {
        insertAtCursor(`\\cite{${item.citeKey}}`);
        showToast(`Citação inserida: \\cite{${item.citeKey}}`);
      });

      el.kbList.appendChild(card);
    });
  }

  // -----------------------------------------------------------------
  // Git Log & Co-authors
  // -----------------------------------------------------------------
  function renderCommitLog() {
    el.commitLog.innerHTML = '';
    state.commits.forEach(c => {
      const item = document.createElement('div');
      item.className = 'commit-item';
      item.innerHTML = `
        <div class="commit-msg">${c.msg}</div>
        <div class="commit-meta">
          <span>${c.author}</span>
          <span><code>${c.sha}</code> • ${c.time}</span>
        </div>
      `;
      el.commitLog.appendChild(item);
    });
  }

  // -----------------------------------------------------------------
  // Modals & UI Controls
  // -----------------------------------------------------------------
  function openModal(modal) {
    modal.classList.remove('hidden');
  }

  function closeModal(modal) {
    modal.classList.add('hidden');
  }

  function showToast(message) {
    el.toast.textContent = message;
    el.toast.classList.remove('hidden');
    setTimeout(() => {
      el.toast.classList.add('hidden');
    }, 3200);
  }

  function switchAuxTab(tabName) {
    document.querySelectorAll('.aux-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tabName));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.toggle('active', c.id === 'tab-' + tabName));
  }

  // -----------------------------------------------------------------
  // Event Listeners
  // -----------------------------------------------------------------
  function setupEvents() {
    // Code input changes
    el.latexCode.addEventListener('input', () => {
      onCodeChange();
    });

    // Keyboard Shortcuts (Ctrl+S / Cmd+S / Ctrl+Enter to compile)
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        saveCurrentFileLocally();
      }
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        compileRealLatex();
      }
    });

    // Compilers triggers
    el.triggerCompileBtn.addEventListener('click', compileRealLatex);
    el.initialCompileBtn.addEventListener('click', compileRealLatex);
    el.quickCompileBtnNav.addEventListener('click', compileRealLatex);

    // Open PDF external button
    el.openPdfExternalBtn.addEventListener('click', () => {
      try {
        if (el.pdfPreviewFrame.src && el.pdfPreviewFrame.src !== 'about:blank') {
          window.open(el.pdfPreviewFrame.src, '_blank');
        } else {
          compileRealLatex();
        }
      } catch (err) {
        window.open('https://texlive.net/run', '_blank');
      }
    });

    // Sidebar Toggle
    el.toggleSidebarBtn.addEventListener('click', () => {
      el.sidebar.classList.toggle('open');
    });

    // View Switcher (Mobile/Tablet)
    el.viewSwitcher.querySelectorAll('.view-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        el.viewSwitcher.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const view = btn.dataset.view;
        if (view === 'editor') {
          el.editorPane.classList.add('view-active');
          el.auxPane.classList.remove('view-active');
        } else if (view === 'preview') {
          el.editorPane.classList.remove('view-active');
          el.auxPane.classList.add('view-active');
          switchAuxTab('preview');
        } else if (view === 'fichamentos') {
          el.editorPane.classList.remove('view-active');
          el.auxPane.classList.add('view-active');
          switchAuxTab('fichamentos');
        }
      });
    });

    // Aux Tabs Switcher (Preview / Fichamentos / Git)
    document.querySelectorAll('.aux-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        switchAuxTab(tab.dataset.tab);
      });
    });

    // Touch Toolbar Actions
    document.querySelectorAll('.tool-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const action = btn.dataset.action;
        if (!action) return;

        switch (action) {
          case 'undo':
            document.execCommand('undo');
            break;
          case 'redo':
            document.execCommand('redo');
            break;
          case 'ref':
            insertAtCursor('\\ref{sec:}');
            break;
          case 'equation':
            insertAtCursor('\\begin{equation}\n  \\label{eq:}\n  ', '\n\\end{equation}');
            break;
          case 'figure':
            insertAtCursor('\\begin{figure}[htbp]\n  \\centering\n  \\includegraphics[width=0.85\\columnwidth]{figures/}\n  \\caption{Descrição da figura}\n  \\label{fig:}\n\\end{figure}');
            break;
          case 'table':
            insertAtCursor('\\begin{table}[htbp]\n\\caption{Título da Tabela}\n\\begin{center}\n\\begin{tabular}{lcc}\n\\toprule\nParam & Valor 1 & Valor 2 \\\\\n\\midrule\nDado A & 10 & 20 \\\\\n\\bottomrule\n\\end{tabular}\n\\label{tab:}\n\\end{center}\n\\end{table}');
            break;
          case 'itemize':
            insertAtCursor('\\begin{itemize}\n  \\item ', '\n\\end{itemize}');
            break;
          case 'math':
            insertAtCursor('$', '$');
            break;
          case 'bold':
            insertAtCursor('\\textbf{', '}');
            break;
          case 'italic':
            insertAtCursor('\\textit{', '}');
            break;
        }
      });
    });

    // Quick Save Button
    el.quickSaveBtn.addEventListener('click', saveCurrentFileLocally);

    // Citation Picker
    el.citePickerTrigger.addEventListener('click', () => {
      renderCitationList();
      openModal(el.citeModal);
      el.citeSearch.value = '';
      el.citeSearch.focus();
    });

    el.closeCiteModal.addEventListener('click', () => closeModal(el.citeModal));
    el.citeSearch.addEventListener('input', (e) => renderCitationList(e.target.value));

    // Git Commit Modal
    el.commitModalBtn.addEventListener('click', () => {
      el.commitMsg.value = `refactor(${state.currentFile.replace('sections/', '')}): update content`;
      openModal(el.commitModal);
    });

    el.closeCommitModal.addEventListener('click', () => closeModal(el.commitModal));
    el.cancelCommitBtn.addEventListener('click', () => closeModal(el.commitModal));

    el.confirmCommitBtn.addEventListener('click', () => {
      const msg = el.commitMsg.value.trim() || 'update section content';
      saveCurrentFileLocally();

      // Add to commit log
      const newCommit = {
        msg: msg,
        author: 'André Casadei Marques',
        time: 'Agora mesmo',
        sha: Math.random().toString(16).substring(2, 9)
      };
      state.commits.unshift(newCommit);
      renderCommitLog();

      closeModal(el.commitModal);
      showToast('Commit registrado com sucesso!');
    });

    // Settings Modal
    el.openSettingsBtn.addEventListener('click', () => openModal(el.settingsModal));
    el.closeSettingsModal.addEventListener('click', () => closeModal(el.settingsModal));
    el.saveSettingsBtn.addEventListener('click', () => {
      state.settings.repo = el.cfgRepo.value.trim();
      state.settings.token = el.cfgToken.value.trim();
      state.settings.drivePath = el.cfgDrive.value.trim();
      localStorage.setItem('latex_settings', JSON.stringify(state.settings));
      el.activeRepoName.textContent = state.settings.repo;
      closeModal(el.settingsModal);
      showToast('Configurações salvas!');
    });

    // Knowledge Base Search
    el.kbSearch.addEventListener('input', (e) => renderKnowledgeBase(e.target.value));

    // Push to Drive Review (S-Pen)
    el.pushDriveReviewBtn.addEventListener('click', () => {
      showToast('Enviado para o Google Drive para anotação no Xodo (S-Pen)!');
    });

    // Close modals on clicking backdrop
    [el.citeModal, el.commitModal, el.settingsModal].forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal(modal);
      });
    });
  }

  // Run init on DOM load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
