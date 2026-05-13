# CV-webbplats

Statisk CV-webbplats byggd med HTML, CSS, JavaScript och Bootstrap.

## Sidor
- `index.html` - startsida
- `om-mig.html` - bakgrund, mål och kompetenser
- `portfolio.html` - projekt med filter och modal
- `kontakt.html` - kontaktformulär och länkar

## Struktur
- `assets/css/style.css` - gemensam design
- `assets/js/main.js` - interaktivitet
- `assets/js/supabase-config.js` - Supabase URL, anon key och tabellnamn för kontaktformuläret
- `assets/images/` - SVG-grafik till projektkort
- `supabase/portfolio_mail_submits.sql` - SQL för tabellen som tar emot formulärmeddelanden
- `documentation/` - dokumentation och användartest

## Supabase kontaktformulär
1. Kör SQL-koden i `supabase/portfolio_mail_submits.sql` i Supabase SQL Editor.
2. Gå till Supabase Project Settings > API.
3. Kopiera Project URL och anon/publishable key.
4. Lägg in värdena i `assets/js/supabase-config.js`.
5. Publicera sidan och testa kontaktformuläret.

## Innan publicering
- Byt ut exempeluppgifter som e-post, GitHub och LinkedIn
- Lägg till riktiga projektlänkar om du vill
- Kör Lighthouse, W3C Markup Validator och CSS Validator
- Publicera via GitHub Pages eller Vercel
