---
# Specifies the "filament" HTML page to be used. The HTML page must be located in the "_layouts" folder.
# (should always be this)
layout: default

# Page title
# If omitted, the page will not be included in the navbar
title: grn::deploy::webstatic

# Specifies the order of the current page from the point of view of the navbar
# Can have repetition in the numbers, for parent-child hierarchies
nav_order: 2

# Let exclude the page from the navbar
nav_exclude: false

# If this page represents the parent page of a section that, therefore, has children, specify it in the following way
has_children: false

# If this page represents the child page of a section that, therefore, has ONE parent page, specify it in the following way
parent: Index

# If this page is a parent page, a Table Of Contents will be automatically generated containing all related child pages. Use the option below to disable this functionality.
has_toc: false

# If a child page has more children, add again
# # has_children: true

# To the children page(s) add
# # parent: Projects
# # grand_parent: Index

# Let exclude the page from the search engine (client-side)
search_exclude: false
---

# grn::deploy::webstatic
{: .no_toc }
{: .d-inline-block }

<div id="label-2"></div>

<script type="module">
  selfsustainable_fill_labels_state("label-2");
</script>

---

<!-- Table of contents -->
<details open markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

---

{: .motto-title }
> <p class="blockquote-title-fixer-purple">tl;dr</p>
>
> Motore semplice ed intuitivo di deploy di siti web statici.

---

## In breve

L'intero ecosistema di siti web statici forniti nel dominio `andreagrandieri.github.io` si basa sul motore `grn::deploy::webstatic`.
Questo motore implementa un sistema semplice ed intuitivo di deploy di siti web statici.

---

## Componenti

Di seguito i componenti del motore:

### RepoLink
{: .d-inline-block }

<div id="label-3"></div>

<script type="module">
  selfsustainable_fill_labels_state("label-3");
</script>
{: .d-inline-block }

<div id="label-4"></div>

<script type="module">
  selfsustainable_fill_labels_state("label-4");
</script>

`RepoLink` è il componente che si occupa di effettuare l'armonizzazione del branch principale (solitamente: main) con il branch dedicato al sito (branch: site), il merge di assets `common` e `personal`, di richiamare eventuali altri script specificati e di pushare i risultati verso le rispettive repository `Git`; questo permette, in un solo click, essenzialmente di fornire siti web statici pronti per essere pubblicati.

---

### Jekyll-Build-N-Push
{: .d-inline-block }

<div id="label-5"></div>

<script type="module">
  selfsustainable_fill_labels_state("label-5");
</script>
{: .d-inline-block }

<div id="label-6"></div>

<script type="module">
  selfsustainable_fill_labels_state("label-6");
</script>

`Jekyll-Build-N-Push` è il componente che si occupa di compilare un sito web statico Jekyll localmente, prelevare il corrispettivo output (cartella: `_site`) e caricarlo nel rispettivo server (solitamente non su `GitHub`), il quale servirà questo output. Questo script è solitamente invocato da `RepoLink`, anche se è indipendente e può essere invocato a se stante.

---

### Adapter
{: .d-inline-block }

<div id="label-7"></div>

<script type="module">
  selfsustainable_fill_labels_state("label-7");
</script>
{: .d-inline-block }

<div id="label-8"></div>

<script type="module">
  selfsustainable_fill_labels_state("label-8");
</script>

`Adapter` è il componente che si occupa di adattare un dato file `.md` per visualizzarlo correttamente su `GitHub`, dato che `GitHub` ha un visualizzatore (cioè un render) di file `.md` incorporato. Il processo di adattamento prevede la rimozione di componenti dedicati al motore Jekyll, che non verrebbero correttamente gestiti dal render di `GitHub`.

---

La documentazione e l'implementazione non sono pubblici.
