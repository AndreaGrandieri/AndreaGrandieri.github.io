---
# Specifies the "filament" HTML page to be used. The HTML page must be located in the "_layouts" folder.
# (should always be this)
layout: default

# Page title
# If omitted, the page will not be included in the navbar
title: grn::deploy::webstatic

# Specifies the order of the current page from the point of view of the navbar
# Can have repetition in the numbers, for parent-child hierarchies
nav_order: 1

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

La documentazione e l'implementazione non sono pubblici.
