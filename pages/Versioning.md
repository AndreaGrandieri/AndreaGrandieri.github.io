---
# Specifies the "filament" HTML page to be used. The HTML page must be located in the "_layouts" folder.
# (should always be this)
layout: default

# Page title
# If omitted, the page will not be included in the navbar
title: Versioning

# Specifies the order of the current page from the point of view of the navbar
# Can have repetition in the numbers, for parent-child hierarchies
nav_order: 4

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

# Versioning
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

La maggior parte delle repository sotto il dominio `andreagrandieri.github.io` segue un ben definito protocollo di __versioning__. Di seguito viene descritto.

Il protocollo è veramente semplice: si inizia dalla versione: `VERSION: A` e si procede alfabeticamente secondo il seguente alfabeto:

```
A – B – C – D – E – F – G – H – I – J – K – L – M – N – O – P – Q – R – S – T – U – V – W – X – Y – Z
```

Una volta arrivati alla versione: `VERSION: Z`? Itera così: `VERSION: ZA` -> `VERSION: ZB`.

---

## Quando si avanza di versione?

L'avanzo di versioni non segue alcuna forte regola. Vengono seguite queste osservazioni:

- Avanza di versione quando ritieni di aver aggiunto una importante / sostanziosa feature
- Avanza di versione quando ritieni di aver rimosso una importante / sostanzionsa feature
- Avanza di versione quando ritieni di aver rivoluzionato il funzionamento di base del tuo progetto / risorsa
- Avanza di versione ogni qualvolta ritieni piuttosto notevole denotare il distacco dalla versione precedente

- Non avanzare di versione quando applichi solo modifiche marginali
- Non avanzare di versione quando non vi è necessità effettiva di distaccarsi dalla attuale versione

__Avanzare di versione è sinomino di presentare una nuova realtà. Una nuova realtà deve essere facilmente ed esplicitamente distinguibile dalla precedente.__

---

## Le modiche marginali non vengono tracciate

Esatto. Personalmente non ritengo necessario tracciarle, in quanto questo produrrebbe un processo molto affollato di release di nuove versioni. E' una scelta personale. Nonostante ciò, è possibile riscontrare progetti che usano altri protocolli di versioning: ve ne sono molti standardizzati approfondibili in Internet. In questi casi, comunque, il mio protocollo di versioning sarà presente affiancando gli altri.

---

## Repository pre-protocollo di versioning

Queste repository partono dalla versione: `VERSION: Z` per convenzione. Questa versione verrà così specificata:
{: .d-inline-block }

Version: Z (pre-versioning protocol)
{: .label .label-blue }

Se una nuova versione viene rilasciata, si avanza a: `VERSION: ZA`, lasciando comunque la specificazione `pre-versioning protocol` per informare che ricercare versioni antecedenti alla `VERSION: Z` è vano in quanto non esistono.
