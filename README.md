# De Olympische Goden

Een web-app waarmee brugklassers de Olympische goden leren: hun domeinen, attributen en dieren, via verhalen, koppelopdrachten en oefenvragen. Dit is de **testversie met blok 1** (Zeus, Poseidon, Hades).

De app werkt in de browser van telefoon, tablet en laptop, kan op het beginscherm worden gezet en werkt daarna ook zonder internet.

## Privacy

- De app zelf verzamelt en verstuurt niets. Voortgang en toetsresultaten blijven in de browser van de leerling.
- Er zijn geen accounts, geen analytics en geen externe lettertypen of scripts; alles staat in deze repository.
- De website wordt gehost op GitHub Pages. GitHub registreert bij elk bezoek het IP-adres van de bezoeker voor beveiligingsdoeleinden (zie de documentatie van GitHub Pages).

## Inhoud aanpassen

Alle inhoud staat buiten de programmacode, in de map `content/`:

| Bestand | Wat erin staat |
|---|---|
| `content/handout.json` | De toetsstof: alle 14 goden met domeinen, attributen en dieren, gespeld zoals op het handout. Alle vragen worden hieruit gemaakt. |
| `content/mythen/*.md` | De verhalen, één bestand per mythe. Getoetste woorden staan als `[[code\|woord]]`; onderaan staan de geheugenhaken. |
| `content/olympus.json` | De blokken, de leerdoelen en de vaste plek en kleur van elke god op de Olympus. |

Een mythe aanpassen:

1. Open het bestand in `content/mythen/` en klik op het potloodje (Edit).
2. Pas de tekst aan. Laat de `[[…]]`-codes staan of verplaats ze mee.
3. Gecontroleerd? Zet `status: gecontroleerd` en vul je naam in bij `gecontroleerd_door`.
4. Klik op **Commit changes**. Na ongeveer een minuut staat de nieuwe versie online.

Leerlingen die de app al geopend hebben, krijgen de nieuwe tekst bij hun volgende bezoek.

Audio toevoegen: zet het MP3-bestand in `content/audio/` en vul in de mythe de regel `audio:` in, bijvoorbeeld `audio: audio/01-strijd-om-de-wereld.mp3`. Voeg het bestand daarna ook toe aan de lijst in `sw.js` (of laat de bouwstap dat doen), zodat het offline werkt.

## Bestanden

- `index.html`: de app.
- `sw.js`: zorgt dat de app offline werkt. De cachenaam verandert bij elke nieuwe versie.
- `manifest.webmanifest` en `icons/`: nodig om de app op het beginscherm te zetten.
- `fonts/`: de lettertypen Atkinson Hyperlegible en Baloo 2 (SIL Open Font License, zie de licentiebestanden).
- `img/`: de afbeeldingen van goden, attributen, dieren en de Olympus.
- `.nojekyll`: zorgt dat GitHub de bestanden ongewijzigd publiceert. Niet verwijderen, anders kan de app de verhalen niet meer lezen.
