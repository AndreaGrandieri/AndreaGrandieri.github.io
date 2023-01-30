---
# Front matter of "classic" page

# Theme to use. Resides in the "_layouts" folder.
layout: default

# Page title. If omitted, the page will not be included in the navbar.
title: Versioning

#################################################################

# Specifies the order of the current page from the point of view of the navbar. Can have repetition in the numbers, for parent-child hierarchies.
nav_order: 4

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
<br><br>
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

---

## VERSION: DYNAMIC

Questa particolare versione (`VERSION: DYNAMIC`) viene utilizzata quando non si pianifica un mantenimento _classico_ di versione come sopra descritto. Così facendo, si è essenzialmente autorizzati a non tener traccia della versione della repository trattata. Solitamente questa scelta è rivolta a repository in cui il formalismo di versione non è strettamente necessario, repository a solo uso privato e repository ancora nel primo stadio di assestamento dello sviluppo. In qualsiasi momento è possibile passare al sistema di versioning _classico_, partendo da: `VERSION: A`.
