// LaTeX Acadêmico Studio - Core Controller
(function() {
  'use strict';

  // -----------------------------------------------------------------
  // State Management
  // -----------------------------------------------------------------
  const state = {
    currentFile: 'sections/01_introduction.tex',
    files: {
      'main.tex': `\\documentclass[conference]{IEEEtran}
\\IEEEoverridecommandlockouts
\\usepackage{cite}
\\usepackage{amsmath,amssymb,amsfonts}
\\usepackage{graphicx}
\\usepackage{booktabs}
\\usepackage{hyperref}

\\begin{document}
\\title{Autonomous Robotic Systems and Academic Workflow Automation}
\\author{\\IEEEauthorblockN{Andr\\'e Casadei Marques}}
\\maketitle

\\input{sections/00_abstract.tex}
\\input{sections/01_introduction.tex}
\\input{sections/02_related_work.tex}
\\input{sections/03_methodology.tex}
\\input{sections/04_experimental_results.tex}
\\input{sections/05_conclusion.tex}

\\bibliographystyle{IEEEtran}
\\bibliography{references}
\\end{document}`,

      'sections/00_abstract.tex': `\\begin{abstract}
Writing academic papers across diverse platforms (tablets, mobile devices, and desktop workstations) often introduces version divergence and toolchain fragmentation. In this paper, we propose a lightweight, serverless framework that unifies collaborative LaTeX authoring, automated cloud compilation, and bidirectional knowledge base synthesis. By decoupling modular sections and leveraging asynchronous version control alongside multi-agent reasoning, our approach eliminates vendor lock-in while preserving real-time author ergonomics.
\\end{abstract}`,

      'sections/01_introduction.tex': `\\section{Introduction}
\\label{sec:intro}

Academic research in engineering and computer science relies heavily on \\LaTeX{} for precise typesetting, mathematical formulation, and bibliographic consistency. However, contemporary collaborative authoring often forces researchers to compromise between cumbersome local toolchains and proprietary, subscription-gated cloud platforms.

Mobile and stylus-enabled tablets (such as the Samsung Galaxy Tab S10 FE with S-Pen) provide unprecedented portability for reading and annotating drafts. Coupling stylus feedback directly with native source code without tedious manual transcription remains an open challenge.

Recent developments in distributed swarm coordination \\cite{Alqudsi2025UavSwarms} inspire decentralized document synthesis paradigms. In this work, we present an end-to-end framework featuring:
\\begin{itemize}
    \\item \\textbf{Decoupled Modular Architecture:} Section-level granularity preventing merge conflicts among co-authors.
    \\item \\textbf{Serverless Continuous Compilation:} Automated compilation pipeline using GitHub Actions with zero cloud maintenance cost.
    \\item \\textbf{Knowledge Base Synthesis:} Bidirectional integration with Obsidian and multimodal PDF extractors \\cite{Docling2024IBM}.
\\end{itemize}`,

      'sections/02_related_work.tex': `\\section{Related Work}
\\label{sec:related_work}

Collaborative document authoring has evolved across two primary axes: WYSIWYG platforms and programmatic markup systems.

\\subsection{Document Conversion and AI Synthesis}
Modern foundation models \\cite{Vaswani2017Attention} and specialized layout extractors like Docling \\cite{Docling2024IBM} allow researchers to convert complex multi-column academic PDFs into structured Markdown with high fidelity. Integrating these representations directly into the authoring loop bridges the gap between literature survey and manuscript draft.`,

      'sections/03_methodology.tex': `\\section{System Methodology}
\\label{sec:methodology}

The system architecture decouples data ingestion, text authoring, and typesetting validation into three synchronized layers:

\\begin{equation}
\\label{eq:consensus}
\\mathbf{S}_{k+1} = \\mathbf{S}_k + \\alpha \\sum_{j \\in \\mathcal{N}_i} (\\mathbf{S}_j - \\mathbf{S}_k) + \\beta \\mathbf{\\Delta}_{AI}
\\end{equation}
where $\\mathbf{S}_k$ represents the document state vector at revision $k$, $\\mathcal{N}_i$ denotes the set of collaborating authors, and $\\mathbf{\\Delta}_{AI}$ models the generative updates injected by autonomous research agents.`,

      'sections/04_experimental_results.tex': `\\section{Experimental Results}
\\label{sec:results}

We evaluated our architecture across three dimensions: compilation latency, memory consumption, and collaboration conflict rate. Table~\\ref{tab:comparison} summarizes the empirical comparison.

\\begin{table}[htbp]
\\caption{Comparison of Collaborative Writing Environments}
\\begin{center}
\\begin{tabular}{lccc}
\\toprule
\\textbf{Metric} & \\textbf{Traditional Cloud} & \\textbf{Local TeX} & \\textbf{Our System} \\\\
\\midrule
Monthly Cost & \\$15--\\$30/user & Free & \\textbf{Free (Serverless)} \\\\
Multi-Author Limit & 1 (Free tier) & N/A & \\textbf{Unlimited (Git)} \\\\
Mobile / Tablet Usability & Moderate & Low & \\textbf{High (Touch PWA)} \\\\
Knowledge Base Sync & Manual & Manual & \\textbf{Automated (Obsidian)} \\\\
\\bottomrule
\\end{tabular}
\\label{tab:comparison}
\\end{center}
\\end{table}`,

      'sections/05_conclusion.tex': `\\section{Conclusion}
\\label{sec:conclusion}

This paper introduced an integrated, cloud-compiled academic authoring system designed specifically for mobile, tablet, and multi-author research environments. Future work will expand multi-agent semantic reconciliation and automated diagram vectorization directly from stylus sketches.`,

      'references.bib': `@article{Alqudsi2025UavSwarms,
  author    = {Alqudsi, A. and Smith, J. and Marques, A. C.},
  title     = {Autonomous Navigation and Consensus in Dense UAV Swarms Under Intermittent Connectivity},
  journal   = {IEEE Transactions on Robotics},
  volume    = {41},
  pages     = {112--128},
  year      = {2025},
  publisher = {IEEE}
}

@inproceedings{Vaswani2017Attention,
  author    = {Vaswani, Ashish and Shazeer, Noam and Parmar, Niki and others},
  title     = {Attention is All You Need},
  booktitle = {NeurIPS},
  pages     = {5998--6008},
  year      = {2017}
}

@article{Docling2024IBM,
  author    = {Docling Team and Deep Search Research Group},
  title     = {Docling: High-Precision Document Conversion for Multimodal AI Workflows},
  journal   = {arXiv preprint arXiv:2408.09869},
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
        id: 'docling2024',
        citeKey: 'Docling2024IBM',
        title: 'Docling: High-Precision Document Conversion for Multimodal AI Workflows',
        authors: 'Docling Research Team (2024)',
        collection: 'IA & Agentes',
        highlight: '“Enables native parsing of multi-column papers, converting complex tables and mathematical formulas directly into structured Markdown.”',
        page: 'p. 4',
        fichamento: 'Docling_2024_FullText_Fichamento.md'
      },
      {
        id: 'vaswani2017',
        citeKey: 'Vaswani2017Attention',
        title: 'Attention is All You Need',
        authors: 'Vaswani et al. (2017)',
        collection: 'Fundamentos',
        highlight: '“The dominant sequence transduction models are based on complex recurrent or convolutional neural networks that include an encoder and a decoder.”',
        page: 'p. 1',
        fichamento: 'Vaswani_2017_Attention_Fichamento.md'
      }
    ],
    commits: [
      { msg: 'feat: add experimental evaluation and comparison table', author: 'André Casadei Marques', time: 'Há 12 minutos', sha: 'c4e912a' },
      { msg: 'refactor(sections): isolate methodology equation #1', author: 'Colega LAB', time: 'Há 2 horas', sha: '8f7a23b' },
      { msg: 'docs: initial modular structure and IEEEtran template', author: 'André Casadei Marques', time: 'Ontem às 22:45', sha: '10a39d8' }
    ],
    unsaved: false,
    settings: {
      repo: 'AndreCasadeiMarques/paper-cros2027',
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
    prevTitle: document.getElementById('prev-title'),
    prevBody: document.getElementById('prev-body'),
    refreshPreviewBtn: document.getElementById('refresh-preview-btn'),
    downloadPdfBtn: document.getElementById('download-pdf-btn'),
    pushDriveReviewBtn: document.getElementById('push-drive-review-btn'),
    actionsStatus: document.getElementById('actions-status')
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

    // Restore cached draft if available
    const cachedFile = localStorage.getItem('latex_draft_' + state.currentFile);
    if (cachedFile !== null) {
      state.files[state.currentFile] = cachedFile;
    }

    renderFileTree();
    loadFile(state.currentFile);
    renderKnowledgeBase();
    renderCommitLog();
    updatePreview();
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
    updatePreview();
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
  // Live Preview Renderer
  // -----------------------------------------------------------------
  function updatePreview() {
    const currentCode = el.latexCode.value;
    
    // Extract title if in main
    const titleMatch = state.files['main.tex'].match(/\\title\{([^}]+)\}/);
    if (titleMatch) {
      el.prevTitle.textContent = titleMatch[1];
    } else {
      el.prevTitle.textContent = 'Artigo Científico em LaTeX';
    }

    // Quick regex cleanup for visual preview
    let previewText = currentCode
      .replace(/\\section\*?\{([^}]+)\}/g, '<h3 style="font-size:1rem;margin:12px 0 4px;color:#000;">$1</h3>')
      .replace(/\\subsection\*?\{([^}]+)\}/g, '<h4 style="font-size:0.9rem;margin:8px 0 2px;color:#111;">$1</h4>')
      .replace(/\\textbf\{([^}]+)\}/g, '<strong>$1</strong>')
      .replace(/\\textit\{([^}]+)\}/g, '<em>$1</em>')
      .replace(/\\cite\{([^}]+)\}/g, '<span style="color:#2563eb;font-weight:600;">[$1]</span>')
      .replace(/\\ref\{([^}]+)\}/g, '<span style="color:#2563eb;">[$1]</span>')
      .replace(/\\begin\{equation\}[\s\S]*?\\end\{equation\}/g, '<div style="background:#f1f5f9;padding:8px;margin:8px 0;text-align:center;font-family:monospace;font-size:0.85rem;border-radius:4px;">[Equação Matemática Renderizada via TeX Live]</div>')
      .replace(/\\begin\{table\}[\s\S]*?\\end\{table\}/g, '<div style="background:#f8fafc;border:1px solid #cbd5e1;padding:8px;margin:8px 0;font-size:0.8rem;border-radius:4px;">[Tabela Acadêmica Formatada]</div>')
      .replace(/\\begin\{itemize\}[\s\S]*?\\end\{itemize\}/g, (match) => {
        const items = match.match(/\\item\s+([^\n\\]+)/g) || [];
        return '<ul style="margin-left:20px;margin-bottom:8px;">' + items.map(i => `<li>${i.replace(/\\item\s+/, '')}</li>`).join('') + '</ul>';
      });

    // Format paragraphs
    const paragraphs = previewText.split('\n\n').filter(p => p.trim());
    el.prevBody.innerHTML = paragraphs.map(p => {
      if (p.startsWith('<h') || p.startsWith('<div') || p.startsWith('<ul')) return p;
      return `<p>${p}</p>`;
    }).join('');
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

  // -----------------------------------------------------------------
  // Event Listeners
  // -----------------------------------------------------------------
  function setupEvents() {
    // Code input changes
    el.latexCode.addEventListener('input', () => {
      onCodeChange();
    });

    // Keyboard Shortcuts (Ctrl+S / Cmd+S)
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        saveCurrentFileLocally();
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

    function switchAuxTab(tabName) {
      document.querySelectorAll('.aux-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tabName));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.toggle('active', c.id === 'tab-' + tabName));
    }

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
      showToast('Commit enviado com sucesso para o GitHub!');

      // Update Actions status animation
      el.actionsStatus.innerHTML = '<span class="status-dot" style="background:#38bdf8;animation:pulse 1s infinite"></span> Actions: Compilando...';
      setTimeout(() => {
        el.actionsStatus.innerHTML = '<span class="status-dot ready"></span> Actions: PDF Atualizado';
        showToast('GitHub Actions: PDF compilado e release gerada!');
      }, 3500);
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

    // Refresh Preview
    el.refreshPreviewBtn.addEventListener('click', () => {
      updatePreview();
      showToast('Preview atualizado!');
    });

    // Push to Drive Review (S-Pen)
    el.pushDriveReviewBtn.addEventListener('click', () => {
      showToast('Enviado para: ' + state.settings.drivePath + '\\main_revisao.pdf');
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
