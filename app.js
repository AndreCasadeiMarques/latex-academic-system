// LaTeX Acadêmico Studio v3 - Real TeX Live Cloud Engine & Bundler
(function() {
  'use strict';

  const STORAGE_PREFIX = 'latex_v3_draft_';

  // -----------------------------------------------------------------
  // Default Files (IEEEtran Conference Template + UAV Swarm Paper)
  // -----------------------------------------------------------------
  const DEFAULT_FILES = {
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
\\thanks{Supported by Aeronautics Institute of Technology (ITA) and Autonomous Robotics Lab.}
}

\\author{\\IEEEauthorblockN{Andr{\\'e} Casadei Marques}
\\IEEEauthorblockA{\\textit{dept. name of organization (of Aff.)} \\\\
\\textit{Aeronautics Institute of Technology (ITA)}\\\\
S{\\~a}o Jos{\\'e} dos Campos, Brazil \\\\
andre.marques.102192@ga.ita.br}
\\and
\\IEEEauthorblockN{2\\textsuperscript{nd} Co-Author Name}
\\IEEEauthorblockA{\\textit{Department of Robotics and Control} \\\\
\\textit{Aeronautics Institute of Technology (ITA)}\\\\
S{\\~a}o Jos{\\'e} dos Campos, Brazil \\\\
coauthor@ga.ita.br}
}

\\maketitle

\\begin{abstract}
Unmanned Aerial Vehicle (UAV) swarms demand extensive experimental validation under realistic communication constraints and dynamic outdoor environments. In this paper, we present a hybrid experimental framework integrating simulated drone swarms with a physical outdoor quadrotor via distributed consensus protocols. Our approach bridges the reality gap while preserving hardware safety, real-time telemetry synchronization, and reproducible multi-agent coordination.
\\end{abstract}

\\begin{IEEEkeywords}
UAV Swarms, Mixed Reality Testbed, Hardware-in-the-Loop, Formation Control, Autonomous Robotics.
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

In recent years, Unmanned Aerial Vehicles (UAVs) have become fundamental platforms across a broad spectrum of civilian and defense applications \\cite{mohsan2023, alqudsiUAVSwarmsResearch2025}, ranging from environmental monitoring and search-and-rescue to persistent area surveillance \\cite{horyna2023, saska2014, ricardojuniorFORMATIONGUIDANCEFULLY2021}. When deployed in multi-agent or swarm configurations, these systems offer enhanced spatial coverage, operational flexibility, and fault tolerance compared to single-vehicle architectures \\cite{chung2018, abdelkader2021, javed2024}.

However, experimentally evaluating and validating complex swarm control and decision-making strategies in real outdoor environments remains a major bottleneck due to hardware costs, collision risks, and physical space constraints \\cite{preiss2017, soria2022, cruzIndoorMixedRealityTestbed}. Consequently, there is a growing demand for hybrid experimental testbeds and digital-twin frameworks capable of seamlessly coupling physical outdoor aircraft with virtual swarm agents.`,

    'sections/02_related_work.tex': `\\section{Related Work}
\\label{sec:related_work}

Experimental swarm robotics has traditionally relied on either pure software simulators or indoor motion-capture cages \\cite{preiss2017, cruzIndoorMixedRealityTestbed}. While indoor testbeds provide millimeter-level localization accuracy, they cannot capture real outdoor wind disturbances, GPS multipath degradation, or realistic long-range wireless channel drops \\cite{mohsan2023, soria2022}.

Conversely, full-scale outdoor flight campaigns involving dozens of physical rotorcraft require substantial maintenance logistics and strict airspace safety protocols \\cite{horyna2023, saska2014}. Our proposed mixed-reality architecture combines the physical fidelity of outdoor flight with the scalability of virtualized swarm neighbors.`,

    'sections/03_methodology.tex': `\\section{System Methodology}
\\label{sec:methodology}

The proposed architecture synchronizes the state vector of the real outdoor UAV with $N$ simulated swarm agents through a distributed formation guidance law \\cite{ricardojuniorFORMATIONGUIDANCEFULLY2021}:

\\begin{equation}
\\label{eq:consensus}
\\mathbf{u}_{i}(t) = -k_p \\sum_{j \\in \\mathcal{N}_i} a_{ij} \\left( \\mathbf{p}_i(t) - \\mathbf{p}_j(t) - \\mathbf{d}_{ij} \\right) - k_v \\sum_{j \\in \\mathcal{N}_i} a_{ij} \\left( \\mathbf{v}_i(t) - \\mathbf{v}_j(t) \\right)
\\end{equation}
where $\\mathbf{p}_i, \\mathbf{v}_i \\in \\mathbb{R}^3$ denote the position and velocity of agent $i$, $\\mathbf{d}_{ij}$ specifies the desired inter-agent formation offset, and $a_{ij}$ weights the communication topology between the physical drone and simulated neighbors.`,

    'sections/04_experimental_results.tex': `\\section{Experimental Results}
\\label{sec:results}

Outdoor validation trials were conducted coupling one physical quadrotor with a virtual fleet of 12 simulated UAVs executing dynamic formation maneuvers. Table~\\ref{tab:metrics} summarizes the formation tracking performance under varying telemetry latencies.

\\begin{table}[htbp]
\\caption{Outdoor Mixed-Reality Swarm Tracking Performance}
\\begin{center}
\\begin{tabular}{lccc}
\\toprule
\\textbf{Telemetry Link} & \\textbf{RMS Error (m)} & \\textbf{Max Drift (m)} & \\textbf{Convergence (s)} \\\\
\\midrule
Nominal (20 ms) & 0.14 & 0.29 & 3.4 \\\\
Moderate (80 ms) & 0.22 & 0.45 & 4.1 \\\\
Degraded (200 ms) & 0.38 & 0.76 & 5.8 \\\\
\\bottomrule
\\end{tabular}
\\label{tab:metrics}
\\end{center}
\\end{table}`,

    'sections/05_conclusion.tex': `\\section{Conclusion}
\\label{sec:conclusion}

This paper presented a framework integrating simulated drone swarms with a real outdoor UAV, enabling safe and scalable validation of cooperative guidance and formation control laws. Future work will incorporate vision-based relative localization and decentralized obstacle avoidance in cluttered outdoor scenarios.`,

    'references.bib': `@article{alqudsiUAVSwarmsResearch2025,
  author    = {Alqudsi, A. and Smith, J. and Marques, A. C.},
  title     = {Autonomous Navigation and Consensus in Dense UAV Swarms: Research Trends and Challenges},
  journal   = {IEEE Transactions on Robotics},
  volume    = {41},
  pages     = {112--128},
  year      = {2025},
  publisher = {IEEE}
}

@article{mohsan2023,
  author    = {Mohsan, S. A. H. and Othman, N. Q. H. and Li, Y. and Alsharif, M. H. and Khan, M. A.},
  title     = {Unmanned aerial vehicles (UAVs): Practical aspects, applications, open challenges, security issues, and future trends},
  journal   = {Intelligent Service Robotics},
  volume    = {16},
  number    = {1},
  pages     = {109--137},
  year      = {2023}
}

@article{horyna2023,
  author    = {Horyna, J. and Baca, T. and Walter, V. and Albani, D. and Hert, D. and Ferrante, E. and Saska, M.},
  title     = {Decentralized swarms of unmanned aerial vehicles for search and rescue operations without explicit communication},
  journal   = {Autonomous Robots},
  volume    = {47},
  pages     = {77--93},
  year      = {2023}
}

@article{saska2014,
  author    = {Saska, M. and Vakula, J. and Preucil, L.},
  title     = {Swarms of micro aerial vehicles stabilized under a visual relative localization system},
  journal   = {IEEE International Conference on Robotics and Automation (ICRA)},
  pages     = {3570--3575},
  year      = {2014}
}

@article{ricardojuniorFORMATIONGUIDANCEFULLY2021,
  author    = {Junior, R. and Santos, D. A.},
  title     = {Formation Guidance for Fully Actuated Multirotor Aerial Vehicles},
  journal   = {Aerospace Science and Technology},
  volume    = {118},
  pages     = {107032},
  year      = {2021}
}

@article{chung2018,
  author    = {Chung, S.-J. and Paranjape, A. A. and Dames, P. and Shen, S. and Kumar, V.},
  title     = {A survey on aerial swarm robotics},
  journal   = {IEEE Transactions on Robotics},
  volume    = {34},
  number    = {4},
  pages     = {837--855},
  year      = {2018}
}

@article{abdelkader2021,
  author    = {Abdelkader, M. and Guler, S. and Jaleel, H. and Shamma, J. S.},
  title     = {Aerial swarms: Recent applications and challenges},
  journal   = {Current Robotics Reports},
  volume    = {2},
  pages     = {309--320},
  year      = {2021}
}

@article{javed2024,
  author    = {Javed, S. and Hassan, A. and Ahmad, R.},
  title     = {Cooperative control and mission planning for heterogeneous UAV swarms},
  journal   = {IEEE Access},
  volume    = {12},
  pages     = {14500--14518},
  year      = {2024}
}

@inproceedings{preiss2017,
  author    = {Preiss, J. A. and Honig, W. and Sukhatme, G. S. and Ayanian, N.},
  title     = {Crazyswarm: A large nano-quadcopter swarm},
  booktitle = {IEEE International Conference on Robotics and Automation (ICRA)},
  pages     = {3299--3304},
  year      = {2017}
}

@article{soria2022,
  author    = {Soria, E. and Schiano, F. and Floreano, D.},
  title     = {Predictive control of aerial swarms in cluttered environments},
  journal   = {Nature Machine Intelligence},
  volume    = {3},
  pages     = {545--554},
  year      = {2022}
}

@inproceedings{cruzIndoorMixedRealityTestbed,
  author    = {Cruz, P. J. and Fierro, R.},
  title     = {Indoor Mixed Reality Testbed for Multi-UAV Coordination and Hybrid Swarm Experiments},
  booktitle = {IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)},
  pages     = {2110--2116},
  year      = {2023}
}`
  };

  // -----------------------------------------------------------------
  // State Management
  // -----------------------------------------------------------------
  const state = {
    currentFile: 'main.tex',
    files: JSON.parse(JSON.stringify(DEFAULT_FILES)),
    knowledgeBase: [
      {
        id: 'alqudsi2025',
        citeKey: 'alqudsiUAVSwarmsResearch2025',
        title: 'Autonomous Navigation and Consensus in Dense UAV Swarms',
        authors: 'Alqudsi, Smith, Marques (2025)',
        collection: 'CROS 2027',
        highlight: '“Under high packet loss (>40%), the distributed consensus estimator maintains collision-free trajectories with sub-decimeter error bounds.”',
        page: 'p. 116',
        fichamento: 'Alqudsi_2025_UavSwarms_Fichamento.md'
      },
      {
        id: 'ricardojunior2021',
        citeKey: 'ricardojuniorFORMATIONGUIDANCEFULLY2021',
        title: 'Formation Guidance for Fully Actuated Multirotor Aerial Vehicles',
        authors: 'Ricardo Junior & D. A. Santos (2021)',
        collection: 'ITA / Controle de Formação',
        highlight: '“A lei de guiamento em formação desacopla o controle translacional e atitude, garantindo convergência assintótica mesmo sob perturbações de vento.”',
        page: 'p. 5',
        fichamento: 'RicardoJunior_2021_FormationGuidance_Fichamento.md'
      },
      {
        id: 'cruz2023',
        citeKey: 'cruzIndoorMixedRealityTestbed',
        title: 'Indoor Mixed Reality Testbed for Multi-UAV Coordination',
        authors: 'Cruz & Fierro (2023)',
        collection: 'Mixed Reality UAV',
        highlight: '“Coupling physical rotorcraft with virtual swarm neighbors allows safe validation of collision-avoidance policies before full-fleet deployment.”',
        page: 'p. 2112',
        fichamento: 'Cruz_2023_MixedReality_Fichamento.md'
      }
    ],
    commits: [
      { msg: 'feat: real TeX Live compiler + IEEEtran bundled sections', author: 'André Casadei Marques', time: 'Agora', sha: 'v3.0.0' },
      { msg: 'refactor(methodology): update formation guidance eq (1)', author: 'Pesquisador LAB', time: 'Há 1 hora', sha: '8f7a23b' },
      { msg: 'docs: initial IEEEtran modular conference setup', author: 'André Casadei Marques', time: 'Ontem', sha: '10a39d8' }
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
    downloadRealPdfNav: document.getElementById('download-real-pdf-nav'),
    commitModalBtn: document.getElementById('commit-modal-btn'),
    openSettingsBtn: document.getElementById('open-settings-btn'),
    importFileBtn: document.getElementById('import-file-btn'),
    fileUploadInput: document.getElementById('file-upload-input'),
    newSectionBtn: document.getElementById('new-section-btn'),
    resetWorkspaceBtn: document.getElementById('reset-workspace-btn'),
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
    downloadRealPdfBtn: document.getElementById('download-real-pdf-btn'),
    viewLogBtn: document.getElementById('view-log-btn'),
    latexcgiForm: document.getElementById('latexcgi-form'),
    pdfPreviewFrame: document.getElementById('pdf-preview-frame'),
    pdfPlaceholder: document.getElementById('pdf-placeholder'),
    compileStatusBar: document.getElementById('compile-status-bar'),
    compileSpinner: document.getElementById('compile-spinner'),
    compileStatusMsg: document.getElementById('compile-status-msg')
  };

  // -----------------------------------------------------------------
  // Initialization
  // -----------------------------------------------------------------
  function init() {
    // Clean up old v1 localStorage keys so broken v1 state doesn't interfere
    Object.keys(localStorage).forEach(k => {
      if (k.startsWith('latex_draft_')) {
        localStorage.removeItem(k);
      }
    });

    // Restore settings
    const savedSettings = localStorage.getItem('latex_v3_settings');
    if (savedSettings) {
      try {
        state.settings = Object.assign(state.settings, JSON.parse(savedSettings));
      } catch (e) {}
    }
    el.activeRepoName.textContent = state.settings.repo;
    el.cfgRepo.value = state.settings.repo;
    el.cfgToken.value = state.settings.token || '';
    el.cfgDrive.value = state.settings.drivePath;

    // Restore v3 cached files if available
    const savedFileKeys = localStorage.getItem('latex_v3_filekeys');
    if (savedFileKeys) {
      try {
        const keys = JSON.parse(savedFileKeys);
        keys.forEach(k => {
          const content = localStorage.getItem(STORAGE_PREFIX + k);
          if (content !== null) {
            state.files[k] = content;
          }
        });
      } catch (e) {}
    }

    renderFileTree();
    loadFile(state.currentFile);
    renderKnowledgeBase();
    renderCommitLog();
    setupEvents();

    // Register service worker v3
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('sw.js?v=3').then(reg => {
        reg.update();
      }).catch(() => {});
    }

    // Automatically compile real PDF preview right after startup!
    setTimeout(() => {
      compileRealLatex('pdfjs', false);
    }, 450);
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
      item.innerHTML = `<span>${icon}</span> <span style="overflow:hidden;text-overflow:ellipsis;">${filename}</span>`;
      item.addEventListener('click', () => {
        state.files[state.currentFile] = el.latexCode.value;
        saveAllToLocalStorage();
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

  function saveAllToLocalStorage() {
    state.files[state.currentFile] = el.latexCode.value;
    const keys = Object.keys(state.files);
    localStorage.setItem('latex_v3_filekeys', JSON.stringify(keys));
    keys.forEach(k => {
      localStorage.setItem(STORAGE_PREFIX + k, state.files[k]);
    });
  }

  function saveCurrentFileLocally() {
    saveAllToLocalStorage();
    state.unsaved = false;
    el.unsavedTag.classList.add('hidden');
    showToast('Rascunho salvo no navegador!');
  }

  // -----------------------------------------------------------------
  // Smart LaTeX Bundler & Real TeX Live Cloud Compiler
  // -----------------------------------------------------------------
  function buildBundledLatexAndBib() {
    // 1. Ensure latest editor text is stored in state.files
    state.files[state.currentFile] = el.latexCode.value;

    // 2. Determine root document:
    // If the user pasted a complete LaTeX document (with \documentclass) in the active tab,
    // compile that directly! Otherwise compile main.tex.
    let rootTex = state.files['main.tex'] || '';
    if (state.files[state.currentFile] && state.files[state.currentFile].includes('\\documentclass')) {
      rootTex = state.files[state.currentFile];
    }

    // 3. Resolve all \input{...} and \include{...} in memory so texlive.net never sees subdirectory slashes
    const resolveInputs = (texContent, depth = 0) => {
      if (depth > 5) return texContent;
      return texContent.replace(/\\(?:input|include)\s*\{([^}]+)\}/g, (match, rawPath) => {
        const cleanPath = rawPath.trim();
        const candidates = [
          cleanPath,
          cleanPath + '.tex',
          'sections/' + cleanPath,
          'sections/' + cleanPath + '.tex',
          cleanPath.replace(/^sections\//, ''),
          cleanPath.replace(/^sections\//, '') + '.tex'
        ];
        for (const c of candidates) {
          if (typeof state.files[c] === 'string') {
            return `\n% --- Begin Input: ${c} ---\n` + resolveInputs(state.files[c], depth + 1) + `\n% --- End Input: ${c} ---\n`;
          }
        }
        return `\n% [Aviso: Arquivo ${cleanPath} não encontrado no projeto]\n`;
      });
    };

    let bundledTex = resolveInputs(rootTex);

    // 4. Protect \includegraphics so missing local image files render a clean placeholder box instead of crashing pdflatex!
    const safeGraphicsMacro = `
% --- Safe Includegraphics Wrapper for Cloud Preview ---
\\makeatletter
\\@ifpackageloaded{graphicx}{%
  \\let\\OrigIncludeGraphics\\includegraphics
  \\renewcommand{\\includegraphics}[2][]{%
    \\IfFileExists{#2}{%
      \\OrigIncludeGraphics[#1]{#2}%
    }{%
      \\fbox{\\parbox[c][2.0cm][c]{0.88\\columnwidth}{\\centering \\footnotesize \\textbf{[Figura: \\detokenize{#2}]}\\\\[3pt]\\scriptsize (Imagem local — será incluída na versão final)}}%
    }%
  }%
}{}
\\makeatother
`;
    if (bundledTex.includes('\\begin{document}')) {
      bundledTex = bundledTex.replace('\\begin{document}', safeGraphicsMacro + '\n\\begin{document}');
    }

    // 5. Build complete BibTeX database: combine references.bib + auto-stubs for any \cite{...} key not yet in .bib
    let bibContent = state.files['references.bib'] || '';
    const existingKeys = new Set();
    const keyRegex = /@\w+\s*\{\s*([^,\s]+)/g;
    let m;
    while ((m = keyRegex.exec(bibContent)) !== null) {
      existingKeys.add(m[1].trim());
    }

    // Find all \cite{k1, k2} in bundledTex
    const citeRegex = /\\cite\s*(?:\[[^\]]*\])?\s*\{([^}]+)\}/g;
    let cm;
    const missingKeys = new Set();
    while ((cm = citeRegex.exec(bundledTex)) !== null) {
      cm[1].split(',').forEach(k => {
        const cleanK = k.trim();
        if (cleanK && !existingKeys.has(cleanK)) {
          missingKeys.add(cleanK);
        }
      });
    }

    if (missingKeys.size > 0) {
      bibContent += '\n\n% --- Auto-generated stubs for cited keys not yet in references.bib ---\n';
      missingKeys.forEach(k => {
        bibContent += `@misc{${k},\n  author = {Refer{\\^e}ncia Citada},\n  title  = {[${k}] (Adicione ao references.bib)},\n  year   = {2025}\n}\n`;
      });
    }

    // 6. Detect any custom \bibliography{name} filenames in bundledTex
    const bibNames = new Set(['references.bib']);
    const bibCmdRegex = /\\bibliography\s*\{([^}]+)\}/g;
    let bm;
    while ((bm = bibCmdRegex.exec(bundledTex)) !== null) {
      bm[1].split(',').forEach(bname => {
        let cleanB = bname.trim().replace(/^.*\//, ''); // strip slashes!
        if (cleanB && !cleanB.endsWith('.bib')) {
          cleanB += '.bib';
        }
        if (cleanB) bibNames.add(cleanB);
      });
    }
    // Also normalize \bibliography{path/to/name} to flat name in bundledTex
    bundledTex = bundledTex.replace(/\\bibliography\s*\{([^}]+)\}/g, (full, inner) => {
      const flatNames = inner.split(',').map(s => s.trim().replace(/^.*\//, '').replace(/\.bib$/, '')).join(',');
      return `\\bibliography{${flatNames}}`;
    });

    return { bundledTex, bibContent, bibNames: Array.from(bibNames) };
  }

  /**
   * Compiles via TeXLive.net
   * @param {'pdfjs'|'pdf'|'log'} returnMode
   * @param {boolean} switchViewOnMobile
   */
  function compileRealLatex(returnMode = 'pdfjs', switchViewOnMobile = true) {
    saveAllToLocalStorage();
    const { bundledTex, bibContent, bibNames } = buildBundledLatexAndBib();

    const form = el.latexcgiForm;
    form.innerHTML = '';

    // Set target: _blank if downloading/opening raw PDF, or pdf-preview-frame if previewing in panel
    if (returnMode === 'pdf') {
      form.target = '_blank';
    } else {
      form.target = 'pdf-preview-frame';
    }

    function addTextareaField(name, val) {
      const ta = document.createElement('textarea');
      ta.name = name;
      ta.textContent = val;
      form.appendChild(ta);
    }

    function addInputField(name, val) {
      const inp = document.createElement('input');
      inp.type = 'text';
      inp.name = name;
      inp.value = val;
      form.appendChild(inp);
    }

    // 1. Add bundled main document as document.tex (NEVER any slashes in filename[])
    addTextareaField('filecontents[]', bundledTex);
    addInputField('filename[]', 'document.tex');

    // 2. Add bibliography file(s) with flat filenames
    bibNames.forEach(bname => {
      addTextareaField('filecontents[]', bibContent);
      addInputField('filename[]', bname);
    });

    // 3. Engine and Return Mode
    addInputField('engine', 'pdflatex');
    addInputField('return', returnMode);

    if (returnMode !== 'pdf') {
      el.pdfPlaceholder.classList.add('hidden');
      el.compileSpinner.classList.remove('hidden');
      el.compileStatusMsg.textContent = returnMode === 'log'
        ? 'Buscando log completo do pdflatex/bibtex...'
        : 'Compilando no TeX Live (pdflatex + bibtex)...';

      if (switchViewOnMobile && window.innerWidth <= 820) {
        el.editorPane.classList.remove('view-active');
        el.auxPane.classList.add('view-active');
        switchAuxTab('preview');
        el.viewSwitcher.querySelectorAll('.view-btn').forEach(b => b.classList.toggle('active', b.dataset.view === 'preview'));
      } else {
        switchAuxTab('preview');
      }

      const onFrameLoad = () => {
        el.compileSpinner.classList.add('hidden');
        el.compileStatusMsg.textContent = returnMode === 'log'
          ? 'Log de compilação TeX Live carregado.'
          : 'PDF real compilado via TeX Live! (Use "Baixar / Abrir PDF Oficial" para salvar o .pdf)';
        el.pdfPreviewFrame.removeEventListener('load', onFrameLoad);
      };
      el.pdfPreviewFrame.addEventListener('load', onFrameLoad);
    } else {
      showToast('Gerando e abrindo arquivo PDF oficial...');
    }

    form.submit();
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
  // Git Log & Real GitHub API Commit
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

  async function pushFileToGitHub(filepath, content, message) {
    const repo = state.settings.repo;
    const token = state.settings.token;
    if (!token) {
      return { simulated: true };
    }
    const targetPath = `templates/ieee-conference/${filepath}`;
    const apiUrl = `https://api.github.com/repos/${repo}/contents/${targetPath}`;
    const headers = {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/vnd.github+json',
      'Content-Type': 'application/json'
    };

    // Get existing file SHA if present
    let sha = undefined;
    try {
      const getRes = await fetch(apiUrl, { headers });
      if (getRes.ok) {
        const data = await getRes.json();
        sha = data.sha;
      }
    } catch (e) {}

    const encoded = btoa(unescape(encodeURIComponent(content)));
    const body = { message, content: encoded };
    if (sha) body.sha = sha;

    const putRes = await fetch(apiUrl, {
      method: 'PUT',
      headers,
      body: JSON.stringify(body)
    });

    if (!putRes.ok) {
      throw new Error(`GitHub API Error (${putRes.status})`);
    }
    const result = await putRes.json();
    return { simulated: false, sha: result.commit.sha.substring(0, 7) };
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
    }, 3500);
  }

  function switchAuxTab(tabName) {
    document.querySelectorAll('.aux-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tabName));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.toggle('active', c.id === 'tab-' + tabName));
  }

  // -----------------------------------------------------------------
  // Event Listeners
  // -----------------------------------------------------------------
  function setupEvents() {
    el.latexCode.addEventListener('input', () => {
      onCodeChange();
    });

    // Keyboard Shortcuts (Ctrl+S to save, Ctrl+Enter to compile)
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        saveCurrentFileLocally();
      }
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        compileRealLatex('pdfjs', true);
      }
    });

    // Compile & Download Triggers
    el.triggerCompileBtn.addEventListener('click', () => compileRealLatex('pdfjs', true));
    el.initialCompileBtn.addEventListener('click', () => compileRealLatex('pdfjs', true));
    el.quickCompileBtnNav.addEventListener('click', () => compileRealLatex('pdfjs', true));

    // Real PDF Download / Open in New Tab (return=pdf returns genuine application/pdf)
    el.downloadRealPdfBtn.addEventListener('click', () => compileRealLatex('pdf', false));
    el.downloadRealPdfNav.addEventListener('click', () => compileRealLatex('pdf', false));

    // View pdflatex Log
    el.viewLogBtn.addEventListener('click', () => compileRealLatex('log', true));

    // Import local .tex / .bib files
    el.importFileBtn.addEventListener('click', () => el.fileUploadInput.click());
    el.fileUploadInput.addEventListener('change', (e) => {
      const files = Array.from(e.target.files || []);
      if (!files.length) return;
      files.forEach(file => {
        const reader = new FileReader();
        reader.onload = () => {
          const content = String(reader.result || '');
          let targetName = file.name;
          if (targetName.endsWith('.bib')) {
            // Append or replace references.bib
            state.files['references.bib'] = content;
            targetName = 'references.bib';
          } else {
            state.files[targetName] = content;
          }
          saveAllToLocalStorage();
          loadFile(targetName);
          showToast(`Arquivo importado: ${targetName}`);
          compileRealLatex('pdfjs', false);
        };
        reader.readAsText(file);
      });
      e.target.value = '';
    });

    // Create new section
    el.newSectionBtn.addEventListener('click', () => {
      const name = prompt('Nome do novo arquivo (ex: sections/06_discussion.tex):', 'sections/06_discussion.tex');
      if (!name || !name.trim()) return;
      const clean = name.trim();
      state.files[clean] = `\\section{Nova Seção}\nEscreva o conteúdo aqui...\n`;
      if (state.files['main.tex'] && !state.files['main.tex'].includes(clean)) {
        state.files['main.tex'] = state.files['main.tex'].replace(
          '\\bibliographystyle',
          `\\input{${clean}}\n\n\\bibliographystyle`
        );
      }
      saveAllToLocalStorage();
      loadFile(clean);
      showToast(`Seção criada: ${clean}`);
    });

    // Reset workspace to clean defaults
    el.resetWorkspaceBtn.addEventListener('click', () => {
      if (confirm('Restaurar todos os arquivos para o template IEEEtran original?')) {
        Object.keys(localStorage).forEach(k => {
          if (k.startsWith(STORAGE_PREFIX) || k === 'latex_v3_filekeys') {
            localStorage.removeItem(k);
          }
        });
        state.files = JSON.parse(JSON.stringify(DEFAULT_FILES));
        loadFile('main.tex');
        closeModal(el.settingsModal);
        showToast('Arquivos padrão restaurados!');
        compileRealLatex('pdfjs', false);
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

    // Aux Tabs Switcher
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
            insertAtCursor('\\begin{equation}\n\\label{eq:nova}\n  ', '\n\\end{equation}');
            break;
          case 'figure':
            insertAtCursor('\\begin{figure}[htbp]\n  \\centering\n  \\includegraphics[width=0.85\\columnwidth]{figures/diagrama.png}\n  \\caption{Descrição da figura.}\n  \\label{fig:diagrama}\n\\end{figure}');
            break;
          case 'table':
            insertAtCursor('\\begin{table}[htbp]\n\\caption{Título da Tabela}\n\\begin{center}\n\\begin{tabular}{lcc}\n\\toprule\n\\textbf{Parâmetro} & \\textbf{Valor 1} & \\textbf{Valor 2} \\\\\n\\midrule\nDado A & 10 & 20 \\\\\n\\bottomrule\n\\end{tabular}\n\\label{tab:nova}\n\\end{center}\n\\end{table}');
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
      el.commitMsg.value = `docs(${state.currentFile.replace('sections/', '')}): update section`;
      openModal(el.commitModal);
    });

    el.closeCommitModal.addEventListener('click', () => closeModal(el.commitModal));
    el.cancelCommitBtn.addEventListener('click', () => closeModal(el.commitModal));

    el.confirmCommitBtn.addEventListener('click', async () => {
      const msg = el.commitMsg.value.trim() || 'update section content';
      saveCurrentFileLocally();
      el.confirmCommitBtn.disabled = true;
      el.confirmCommitBtn.textContent = 'Enviando...';

      try {
        const res = await pushFileToGitHub(state.currentFile, state.files[state.currentFile], msg);
        const newCommit = {
          msg: msg,
          author: 'André Casadei Marques',
          time: 'Agora mesmo',
          sha: res.sha || Math.random().toString(16).substring(2, 9)
        };
        state.commits.unshift(newCommit);
        renderCommitLog();
        closeModal(el.commitModal);
        if (res.simulated) {
          showToast('Salvo localmente! (Adicione um PAT em Configurações para push direto ao GitHub)');
        } else {
          showToast(`Commit ${res.sha} enviado ao GitHub Actions!`);
        }
      } catch (err) {
        showToast('Erro no push GitHub: ' + err.message);
      } finally {
        el.confirmCommitBtn.disabled = false;
        el.confirmCommitBtn.textContent = 'Fazer Commit & Push';
      }
    });

    // Settings Modal
    el.openSettingsBtn.addEventListener('click', () => openModal(el.settingsModal));
    el.closeSettingsModal.addEventListener('click', () => closeModal(el.settingsModal));
    el.saveSettingsBtn.addEventListener('click', () => {
      state.settings.repo = el.cfgRepo.value.trim();
      state.settings.token = el.cfgToken.value.trim();
      state.settings.drivePath = el.cfgDrive.value.trim();
      localStorage.setItem('latex_v3_settings', JSON.stringify(state.settings));
      el.activeRepoName.textContent = state.settings.repo;
      closeModal(el.settingsModal);
      showToast('Configurações salvas!');
    });

    // Knowledge Base Search
    el.kbSearch.addEventListener('input', (e) => renderKnowledgeBase(e.target.value));

    // Close modals on clicking backdrop
    [el.citeModal, el.commitModal, el.settingsModal].forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal(modal);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
