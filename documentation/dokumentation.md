# Dokumentation: CV-webbplats

## 1. Syfte och val av plattform
Jag valde att skapa mitt CV som en webbplats eftersom webben är lätt att publicera, enkel att uppdatera och tillgänglig från både mobil och dator. En webbplats gör det också möjligt att kombinera text, design, interaktivitet, bilder och kontaktvägar på ett sätt som en vanlig PDF inte gör.

### Jämförelse med andra alternativ
- **PDF-CV:** bra för utskrift och snabb delning, men begränsat när det gäller interaktivitet, responsivitet och levande portfolio.
- **LinkedIn:** bra för nätverkande, men design och struktur styrs av plattformen och kan inte anpassas lika mycket.
- **Statisk webbplats:** passar bra för detta projekt eftersom innehållet inte ändras ofta, laddar snabbt och fungerar bra med GitHub Pages eller Vercel.
- **Dynamisk webbplats:** hade varit relevant om jag behövde inloggning, databas eller ett avancerat administrationssystem, men det var inte nödvändigt här.

Mitt val blev därför en **statisk CV-webbplats** byggd med HTML, CSS, JavaScript och Bootstrap.

## 2. Projektplan
| Moment | Beskrivning |
| --- | --- |
| Planering | Bestämma innehåll, struktur, målgrupp, sidor och visuell riktning |
| Design | Skapa färgpalett, typografi, navigation och responsiv layout |
| Utveckling | Bygga sidorna `index.html`, `om-mig.html`, `portfolio.html` och `kontakt.html` |
| Interaktivitet | Lägga till filter, modaler, animationer och formulärvalidering |
| Test | Kontrollera responsivitet, länkar, formulär, semantik och tillgänglighet |
| Publicering | Ladda upp projektet till GitHub och publicera via GitHub Pages eller Vercel |

## 3. Kodstandard och teknikval
Jag har separerat projektet i olika delar:

- **HTML** används för struktur och innehåll
- **CSS** används för layout, färg, typografi och responsiv design
- **JavaScript** används för interaktivitet som projektfilter, modaler och formulärlogik

Detta följer god praxis eftersom koden blir lättare att förstå, underhålla och vidareutveckla.

### Ramverk eller bibliotek
Jag använde **Bootstrap 5** via CDN för att uppfylla kravet på minst en funktion från ett ramverk eller klassbibliotek. I webbplatsen används Bootstrap för:

- responsivt grid-system
- navbar med kollapsfunktion på mindre skärmar
- modal för projektinformation
- accordion på sidan "Om mig"

## 4. Media och optimering
Projektbilderna är skapade som SVG-grafik, vilket ger låg filstorlek och bra skärpa på olika skärmstorlekar. Bilderna i portfolion använder `loading="lazy"` för att minska onödig laddning när sidan öppnas.

Jag har också arbetat med:

- tydliga metadata och sidtitlar
- konsekvent rubrikstruktur
- återanvändbar CSS
- lättviktig statisk struktur utan onödiga externa beroenden

## 5. Interaktivitet
För att göra webbplatsen mer levande och visa fler kunskaper har jag lagt till:

- animerad visning av sektioner vid scroll
- filtrering av projekt i portfolion
- Bootstrap modal för projektbeskrivningar
- kontaktformulär med klientvalidering

## 6. Test och kvalitet
Följande bör redovisas i den slutliga inlämningen:

- **Lighthouse**: test av prestanda, SEO, tillgänglighet och best practice
- **W3C Markup Validator**: kontroll av HTML
- **CSS Validator**: kontroll av CSS
- test i minst två olika webbläsare
- test på både mobil och dator

### Att fylla i efter genomförda tester
- Lighthouse-resultat: `[fyll i resultat och skärmdump]`
- HTML-validering: `[fyll i resultat]`
- CSS-validering: `[fyll i resultat]`
- Webbläsare testade: `[t.ex. Chrome, Edge, Safari]`
- Enheter testade: `[t.ex. mobil, laptop]`

## 7. Tillgänglighet
Jag har försökt ta hänsyn till tillgänglighet genom att:

- använda semantiska HTML-element
- lägga in alt-texter på bilder
- skapa tydlig fokusmarkering och skip link
- använda kontrasterad text mot bakgrund
- ha tydliga rubriknivåer
- göra webbplatsen möjlig att använda även utan mus

## 8. GDPR, etik och upphovsrätt
I kontaktformuläret finns ett samtycke där användaren godkänner att uppgifterna används för att besvara meddelandet. Det är viktigt ur ett GDPR-perspektiv att endast samla in den information som behövs och att vara tydlig med varför den samlas in.

Jag har också tänkt på upphovsrätt genom att använda egen grafik i projektet i stället för att hämta bilder utan tillstånd. Om externa bilder eller ikoner används i framtiden behöver deras licenser kontrolleras.

Etiskt är det viktigt att:

- inte dela känslig personlig information offentligt
- inte visa företagsmaterial utan tillstånd
- vara tydlig med vad som är riktiga projekt och vad som är koncept eller skoluppgifter

## 9. Utvärdering
### Det som fungerar bra
- Webbplatsen har en tydlig struktur med flera sidor
- Designen är modern och fungerar bra på olika skärmstorlekar
- Projektsektionen visar både visuell och teknisk kompetens
- Koden är uppdelad på ett sätt som gör projektet lätt att förstå

### Det som kan förbättras
- Kontaktformuläret kan kopplas till en riktig formulärtjänst vid publicering
- Fler riktiga projekt och verkliga länkar kan läggas till
- Resultat från Lighthouse och användartest kan användas för vidare förbättring

### Problem och lösningar
- Ett problem var att skapa en webbplats som känns både personlig och professionell. Jag löste det genom att kombinera en tydlig färgidentitet med enkel navigation och fokuserat innehåll.
- Ett annat problem var att skapa interaktivitet utan att göra sidan rörig. Därför valde jag få men tydliga funktioner: filtrering, modal och formulärvalidering.

## 10. Användartest
Resultatet från användartestet ska redovisas i en separat rapport. Där bör följande sammanfattas:

- vad testpersonerna tyckte fungerade bra
- vilka problem de hittade
- vilka förbättringar som kan göras baserat på deras feedback

Se separat fil: `documentation/anvandartest-rapport.md`
