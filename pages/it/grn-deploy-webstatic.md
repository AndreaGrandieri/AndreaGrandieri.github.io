---
# Front matter of "classic" page

# Theme to use. Resides in the "_layouts" folder.
layout: default

# Page title. If omitted, the page will not be included in the navbar.
title: grn::deploy::webstatic

#################################################################

# Specifies the order of the current page from the point of view of the navbar. Can have repetition in the numbers, for parent-child hierarchies.
nav_order: 2

# Let exclude the page from the navbar
nav_exclude: false

# Let exclude the page from the built-in search engine
search_exclude: false

#################################################################

# Set "true" if this page has childrens, "false" otherwise.
has_children: false

# If this page is some page's child, specify the parent's name, otherwise comment out the option. If this page is some page's grandchild, specify grandparent's name, otherwise comment out the option.
parent: Index
# # grand_parent: NOME_PAGINA_NONNO__GENITORE_DEL_GENITORE

# If this page is a parent page, a Table Of Contents will be automatically generated containing all related child pages. Use the option below to disable this functionality. Should always be set to "false".
has_toc: false

#################################################################

# Specify the current language of this page
lang: it

# Specify all other available languages in which this page is available. If there's no other language in addition to "lang", comment out this option.
# # availableLanguages:
# #   - 
---

# grn::deploy::webstatic
{: .no_toc }
{: .d-inline-block }

<div id="grn-deploy-webstatic-label-1"></div>

<script type="module">
  selfsustainable_fill_labels_state("grn-deploy-webstatic-label-1");
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

## Introduzione

L'intero ecosistema di siti web statici forniti nel dominio `andreagrandieri.github.io` e forniti in eventuali server privati locali (e.g: via Raspberry) si basa sul motore `grn::deploy::webstatic`.
Questo motore implementa un sistema semplice ed intuitivo di deploy di siti web statici.

---

## Componenti

### RepoLink
{: .d-inline-block }

<div id="grn-deploy-webstatic-label-2"></div>
{: .d-inline-block }

<script type="module">
  selfsustainable_fill_labels_state("grn-deploy-webstatic-label-2");
</script>

<div id="grn-deploy-webstatic-label-3"></div>
{: .d-inline-block }

<script type="module">
  selfsustainable_fill_labels_state("grn-deploy-webstatic-label-3");
</script>

<div id="grn-deploy-webstatic-label-10"></div>

<script type="module">
  selfsustainable_fill_labels_state("grn-deploy-webstatic-label-10");
</script>

`RepoLink` è il componente che si occupa di effettuare l'armonizzazione del branch principale (solitamente: main) con il branch dedicato al sito (branch: site), il merge di assets `common` e `personal`, di richiamare eventuali altri script specificati e di pushare i risultati verso le rispettive repository `Git`; questo permette, in un solo click, essenzialmente di fornire siti web statici pronti per essere pubblicati.

---

### Jekyll-Build-N-Push
{: .d-inline-block }

<div id="grn-deploy-webstatic-label-4"></div>
{: .d-inline-block }

<script type="module">
  selfsustainable_fill_labels_state("grn-deploy-webstatic-label-4");
</script>

<div id="grn-deploy-webstatic-label-5"></div>
{: .d-inline-block }

<script type="module">
  selfsustainable_fill_labels_state("grn-deploy-webstatic-label-5");
</script>

<div id="grn-deploy-webstatic-label-11"></div>

<script type="module">
  selfsustainable_fill_labels_state("grn-deploy-webstatic-label-11");
</script>

`Jekyll-Build-N-Push` è il componente che si occupa di compilare un sito web statico Jekyll localmente, prelevare il corrispettivo output (cartella: `_site`) e caricarlo nel rispettivo server (solitamente non su `GitHub`), il quale servirà questo output. Questo script è solitamente invocato da `RepoLink`, anche se è indipendente e può essere invocato a se stante.

---

### Adapter
{: .d-inline-block }

<div id="grn-deploy-webstatic-label-6"></div>
{: .d-inline-block }

<script type="module">
  selfsustainable_fill_labels_state("grn-deploy-webstatic-label-6");
</script>

<div id="grn-deploy-webstatic-label-7"></div>
{: .d-inline-block }

<script type="module">
  selfsustainable_fill_labels_state("grn-deploy-webstatic-label-7");
</script>

<div id="grn-deploy-webstatic-label-12"></div>

<script type="module">
  selfsustainable_fill_labels_state("grn-deploy-webstatic-label-12");
</script>

`Adapter` è il componente che si occupa di adattare un dato file `.md` per visualizzarlo correttamente su `GitHub`, dato che `GitHub` ha un visualizzatore (cioè un render) di file `.md` incorporato. Il processo di adattamento prevede la rimozione di componenti dedicati al motore Jekyll, che non verrebbero correttamente gestiti dal render di `GitHub`.

---

### Engine
{: .d-inline-block }

<div id="grn-deploy-webstatic-label-8"></div>
{: .d-inline-block }

<script type="module">
  selfsustainable_fill_labels_state("grn-deploy-webstatic-label-8");
</script>

<div id="grn-deploy-webstatic-label-9"></div>
{: .d-inline-block }

<script type="module">
  selfsustainable_fill_labels_state("grn-deploy-webstatic-label-9");
</script>

<div id="grn-deploy-webstatic-label-13"></div>

<script type="module">
  selfsustainable_fill_labels_state("grn-deploy-webstatic-label-13");
</script>

Il dominio `andreagrandieri.github.io`, i server hostati localmente e tutti gli altri domini costruiti via `RepoLink` ereditano un insieme di script implementati in linguaggio `Javascript` che formano l'`Engine` di `Javascript`. `Engine` è il componente che implementa tutti i sistemi di automazione, la grafica dinamica e il flusso informativo dinamico presenti nel sito.

---

{: .note-title }
> <p class="blockquote-title-fixer-blue">Note</p>
>
> La documentazione e l'implementazione non sono pubblici.
