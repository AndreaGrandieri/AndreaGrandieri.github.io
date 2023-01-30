---
# Front matter of "classic" page

# Theme to use. Resides in the "_layouts" folder.
layout: default

# Page title. If omitted, the page will not be included in the navbar.
title: Index

#################################################################

# Specifies the order of the current page from the point of view of the navbar. Can have repetition in the numbers, for parent-child hierarchies.
nav_order: 1

# Let exclude the page from the navbar
nav_exclude: false

# Let exclude the page from the built-in search engine
search_exclude: false

#################################################################

# Set "true" if this page has childrens, "false" otherwise.
has_children: true

# If this page is some page's child, specify the parent's name, otherwise comment out the option. If this page is some page's grandchild, specify grandparent's name, otherwise comment out the option.
# # parent: NOME_PAGINA_GENITORE
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

# Index
{: .no_toc }

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

## Projects

Completa lista dei progetti pubblici.

[Vai alla risorsa](/pages/it/Projects){: .btn }

---

## grn::deploy::webstatic

{: .motto-title }
> <p class="blockquote-title-fixer-purple">tl;dr</p>
>
> Motore semplice ed intuitivo di deploy di siti web statici.

[Vai alla risorsa](/pages/it/grn-deploy-webstatic){: .btn }

---

## Legenda delle labels

Tutte le pagine web sotto il dominio `andreagrandieri.github.io` seguono una precisa legenda per l'uso delle __labels__.

Un esempio di label:
{: .d-inline-block }

<div id="index-md-andreagrandieri-github-io-example"></div>

<script type="module">
  selfsustainable_fill_labels_state("index-md-andreagrandieri-github-io-example");
</script>

[Vai alla risorsa](/pages/it/Legenda-labels){: .btn }

---

## Versioning

Protocollo di versioning adottato dalle repository sotto il dominio `andreagrandieri.github.io`.

[Vai alla risorsa](/pages/it/Versioning){: .btn }
