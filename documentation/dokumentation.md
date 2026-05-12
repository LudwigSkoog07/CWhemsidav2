# Dokumentation: Digital CV-webbplats

## Kriterie 1: Webben som plattform

Innan jag började arbetet valde jag att skapa mitt CV som en webbplats i stället för bara en PDF eller en LinkedIn-profil. En PDF är enkel att skicka, men den är ganska statisk och visar inte lika tydligt vad jag kan inom webbutveckling. LinkedIn är bra för nätverkande, men där styr plattformen utseendet och jag kan inte visa min egen design, kodstruktur och interaktivitet på samma sätt.

En webbplats passar bättre för uppgiften eftersom den kan fungera på både dator och mobil, uppdateras enkelt och innehålla flera typer av innehåll: text, bilder, projekt, länkar och kontaktformulär. Jag jämförde även statisk och dynamisk webbplats. En dynamisk webbplats med databas hade varit användbar om jag behövde inloggning eller ett adminsystem, men för en CV-profil räcker en statisk lösning. Därför valde jag HTML, CSS och JavaScript tillsammans med Bootstrap.

Efter att webbplatsen blev klar tycker jag att valet fungerade bra. Den färdiga sidan visar mer än ett vanligt CV eftersom besökaren kan klicka runt mellan sidor, öppna projekt, filtrera portfolion och använda kontaktformuläret.

## Kriterie 2: Planering, kodstandard och media

Min plan innan arbetet var att först bestämma vilka sidor som behövdes, sedan skapa en tydlig design och därefter bygga funktionerna steg för steg. Jag planerade webbplatsen med fyra huvudsidor: startsida, om mig, portfolio och kontakt. Målet var att sidan skulle kännas personlig men fortfarande professionell.

Arbetet genomfördes ungefär så här:

| Moment | Vad jag gjorde |
| --- | --- |
| Struktur | Bestämde sidor, navigation och innehåll |
| Design | Valde färger, typografi, spacing och responsiv layout |
| Utveckling | Byggde HTML-sidorna och kopplade gemensam CSS och JavaScript |
| Interaktivitet | Lade till projektfilter, modal, scroll-effekter, musikspelare och formulärvalidering |
| Anpassning | Testade layouten i olika skärmstorlekar och justerade mobilvyn |

Koden är uppdelad så att HTML används för struktur och innehåll, CSS för utseende och layout, och JavaScript för interaktivitet. Det gör projektet enklare att förstå och ändra i efterhand. Jag använde också semantiska element som `header`, `main`, `section`, `article` och `footer`.

Bootstrap används som ramverk. Det syns bland annat i navigationen, grid-systemet, knappar, formulärklasser och modalen på portfoliosidan. Jag har även använt Bootstrap Icons för ikoner. Egen CSS används för att ge webbplatsen en personlig design.

Media består främst av projektbilder, SVG-grafik och en ljudfil till musikspelaren. Portfolio-bilderna har `alt`-texter och flera bilder använder `loading="lazy"` för att inte laddas förrän de behövs. En sak som kan förbättras är att komprimera PNG-bilderna mer eller byta till WebP för bättre prestanda.

## Kriterie 4: Dokumentation, utvärdering och etik

Under arbetet har jag dokumenterat hur sidan är uppbyggd, vilka tekniker jag har använt och varför jag har gjort vissa val. Webbplatsen består av flera HTML-filer, en gemensam CSS-fil och en JavaScript-fil. Den strukturen gör att innehåll, design och funktion hålls separerade.

Det som fungerar bra är att webbplatsen har en tydlig uppdelning mellan startsida, information om mig, projekt och kontakt. Portfoliosidan visar flera projekt med bilder och beskrivningar, och modalen gör att mer information kan visas utan att sidan blir för lång. Startsidan känns mer interaktiv genom projektväxlaren, animationerna och musikspelaren. Kontaktformuläret har validering och ett samtycke, vilket gör funktionen tydligare för användaren.

Det som kan förbättras är framför allt prestanda och kontaktlösningen. Bilderna kan optimeras mer för webben, och formuläret använder just nu `mailto:`. Det fungerar som en enkel lösning för en statisk webbplats, men vid publicering skulle jag hellre koppla formuläret till exempelvis Formspree eller FormSubmit så att meddelanden skickas mer pålitligt.

Jag har tagit hänsyn till tillgänglighet genom att använda svenska som sidans språk, tydliga rubriker, alt-texter, formulärlabels, skip-link och kontraster mellan text och bakgrund. Jag har också lagt in stöd för `prefers-reduced-motion`, vilket gör att animationer kan minskas för användare som föredrar det.

Ur ett GDPR-perspektiv samlar webbplatsen bara in den information som behövs i kontaktformuläret: namn, e-post, ämne och meddelande. Användaren behöver också godkänna att uppgifterna används för att besvara meddelandet. Etiskt är det viktigt att inte lägga ut känslig personlig information, privata uppgifter eller företagsmaterial utan tillstånd. Därför har jag hållit kontaktinformationen enkel och varit tydlig med vilka projekt som visas.

När det gäller upphovsrätt har jag utgått från egna projektbilder och egna texter. Externa bibliotek som Bootstrap och Bootstrap Icons används via CDN och är avsedda att användas i webbprojekt. Om jag i framtiden lägger till fler bilder eller externa resurser behöver jag kontrollera licenserna.

Min slutsats efter arbetet är att webbplatsen uppfyller syftet som digital CV-profil. Den visar både tekniska kunskaper och personlig presentation. Nästa steg för att höja kvaliteten skulle vara att köra Lighthouse, W3C Markup Validator och CSS Validator, optimera bilderna och koppla kontaktformuläret till en riktig formulärtjänst.
