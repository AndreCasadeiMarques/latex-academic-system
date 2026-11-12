# 🚀 LaTeX Acadêmico Studio: Ecossistema de Escrita & Compilação em Nuvem

Sistema integrado e gratuito para redação acadêmica colaborativa em **LaTeX**, versionamento no **GitHub**, compilação em nuvem via **GitHub Actions**, interface ergonômica para **Tablet (Galaxy Tab S10 FE com S-Pen)** e celular, e conexão com a sua base de pesquisa no **Google Drive / Obsidian (Docling + Zotero)**.

---

## 🌟 O que está incluído no Sistema

1. **Web App PWA (Hospedável no GitHub Pages):**
   - Editor responsivo feito sob medida para Galaxy Tab S10 FE, Celular e PC.
   - **Barra de Ferramentas Touch/S-Pen:** atalhos para equações, figuras, tabelas, `\cite{}`, `\ref{}` e `Desfazer/Refazer`.
   - **Buscador Visual de Citações (`\cite{}` Picker):** pesquisa em tempo real no `references.bib` por autor, ano ou título e insere com um toque.
   - **Painel Lateral de Fichamentos:** visualizador dos resumos, grifos da S-Pen e gráficos da pasta `assets/` da sua `Biblioteca_Academica`.
   - **Offline Draft:** proteção contra perda de dados através do salvamento automático local.

2. **Compilação 100% Gratuita via GitHub Actions:**
   - Compila todo o documento `main.tex` usando a imagem oficial do **TeX Live** com todos os pacotes CTAN.
   - Gera e atualiza automaticamente uma release `latest` com o arquivo `main.pdf` pronto para download.
   - Sem custos de servidor ou limites de coautores do plano gratuito do Overleaf.

3. **Arquitetura Modular por Seções:**
   - Evita conflitos de mesclagem (merge conflicts) no Git entre você e seus colegas do LAB:
     - `sections/00_abstract.tex`
     - `sections/01_introduction.tex`
     - `sections/02_related_work.tex`
     - `sections/03_methodology.tex`
     - `sections/04_experimental_results.tex`
     - `sections/05_conclusion.tex`
     - `references.bib`

4. **Ciclo de Revisão com S-Pen (Xodo + Google Drive):**
   - O PDF compilado é espelhado na pasta de revisão do Drive.
   - Você abre no Xodo do Galaxy Tab S10 FE, faz anotações à mão com a S-Pen.
   - O **Agente Antigravity (`academic-latex-assistant`)** lê suas anotações e atualiza o código `.tex` automaticamente.

---

## 📲 Como Instalar o Web App no Galaxy Tab S10 FE e Celular

1. Publique o repositório no GitHub.
2. No GitHub, acesse **Settings > Pages** e selecione o diretório `/web-app` (ou a raiz).
3. Abra a URL gerada no navegador Chrome/Samsung Internet do seu Galaxy Tab S10 FE ou celular.
4. Toque nos três pontinhos do navegador e selecione **"Adicionar à tela inicial"** ou **"Instalar aplicativo"**.
5. O editor abrirá como um aplicativo nativo em tela cheia!

---

## 🛠️ Como Iniciar um Artigo Novo para o LAB (Passo a Passo)

1. Crie um novo repositório no GitHub para o artigo (ex: `paper-cros2027-uav`).
2. Copie os arquivos da pasta `templates/ieee-conference/` (ou outro template de sua escolha) e a pasta `.github/workflows/compile-latex.yml`.
3. Convide seus colegas do LAB como colaboradores no repositório.
4. Cada colega abre o Web App no seu tablet, PC ou celular, insere seu GitHub Token e edita a sua seção atribuída.
5. A cada commit, o GitHub Actions compila o PDF oficial em menos de 1 minuto!
