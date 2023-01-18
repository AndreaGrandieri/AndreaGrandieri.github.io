---
# Specifies the "filament" HTML page to be used. The HTML page must be located in the "_layouts" folder.
# (should always be this)
layout: default

# Page title
# If omitted, the page will not be included in the navbar
title: Legenda Labels

# Specifies the order of the current page from the point of view of the navbar
# Can have repetition in the numbers, for parent-child hierarchies
nav_order: 3

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

# Legenda Labels
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

## Stati delle Repository

END
{: .label .label-end-color }

- __Label__: `END`
- __Significato__: il progetto / risorsa ha raggiunto il suo stadio finale di development: non è più previsto un mantenimento attivo della repository. Nuovi aggiornamenti, bug analysis e bug fixes, etc... sono __molto improbabili__, ma non _impossibili_. Richieste personali di supporto sono ancora accettate.
- __Antecede__: `ARCHIVED`

---

STABLE
{: .label .label-green }

- __Label__: `STABLE`
- __Significato__: il progetto / risorsa è in mantenimento attivo. Indipendentemente dal fatto che essa si abbia già raggiunto il suo stadio finale di development o meno è garantito che la repository viene mantenuta attivamente: nuovi aggiornamenti, bug analysis e bug fixes, etc... sono molto probabili. Richieste personali di supporto sono fondamentali: vengono accolte e aiutano la crescita del progetto / risorsa.

---

RELAXED
{: .label .label-relax-color }

- __Label__: `RELAXED`
- __Significato__: _una via di mezzo tra `STABLE` e `END`_: indica che il progetto / risorsa si trova nel suo stadio finale di development: tutto ciò previsto è stato implementato, funziona e si è fiduciosi che non sono previsti futuri aggiornamenti _prosperosi_. Solitamente, `RELAXED` viene attribuito a quelle repository contenenti codice "Legacy", ovvero codice oramai esistente, creato, utilizzato e da cui dipendono numerose altre repository e che _non si ha più necessità e nè "voglia"_ di modificare. Essenzialmente è come `END`, ma con ___improbabile senza molto___.
- __Antecede__: `END`

---

ARCHIVED
{: .label .label-archived-color }

- __Label__: `ARCHIVED`
- __Significato__: repository archiviata (non è riferito all'archiviazione su `GitHub`). Ulteriori modifiche __NON__ verranno fatte. Richieste personali di supporto verranno ignorate. I bug sopravvissuti (se ve ne sono) rimarranno: presta attenzione quando usi un sistema labelled così.

---

DEPRECATED
{: .label .label-red }

- __Label__: `DEPRECATED`
- __Significato__: il progetto / risorsa è deprecato. Con questo si indica che la stessa mission (aka: scopo) del progetto / risorsa è trattata da __una altra__ repository, ed è quindi quella che va riferita per uno stato corrente. Una repository classificata come `DEPRECATED` non viene più mantenuta in quanto sostituita. Solitamente vi è un riferimento alla repository sostitutiva. Le repository `DEPRECATED` vengono principalmente __non__ eliminate per motivi di archiviazione storica. E' naturale la possibile presenza di leak di sicurezza: è sconsigliato l'utilizzo degli assets della repository in ambito operativo.

---

MISSING
{: .label .label-missing-color }

- __Label__: `MISSING`
- __Significato__: risorsa non ancora caricata sul sito, nonostante venga riferita con un placeholder.

---
---

## Versioning

VERSION: <version>
{: .label .label-blue }

- __Label__: `VERSION`
- __Significato__: indica la versione.

Vedi sezione su `Versioning` per maggiori informazioni.

---
---

## Uso generico (o non ancora assegnato)

LABEL
{: .label }

<br>

LABEL
{: .label .label-purple }

<br>

LABEL
{: .label .label-yellow }
