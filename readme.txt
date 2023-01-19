Raspakirani zip se pokreće na sljedeći način:
-- npm install
-- npm run serve

Deploy na Renderu:

https://web2-lab5-22iv.onrender.com/

Popis (ne)implementiranih stvari:

    interpolation/one-way binding - Da: components/EuroToHrkConverter.vue, linija 32
    
    two-way binding - Da: components/EuroToHrkConverter.vue, v-model.number u Formu
    
    methods -  Da: components/EuroToHrkConverter.vue pod methods
    
    computed properties -  Da: components/ConversionTitle.vue, computed: titleMessage
    
    barem jedan scoped style - Da: components/ConversionTitle.vue i components/EchangeRate.vue, style scoped na dnu 
    
    koristiti barem jedan lifecycle hook - Da: components/ExchangeRate.vue (mounted) 
    
    routing (više stranica): Da: router/index.js rute Home, Conversion i Exchange Rates; Riješen 404 Not Found
        aplikacija mora biti bookmarkable, tako da rade linkovi (ne samo na root, već i moj-web.com/stranica1, moj-web.com/stranica2) - Da - lokalno
        dinamičko usmjeravanje s 404 stranicom ("catch all") - Da - lokalno
    
    (barem) dvije komponente 
        komponenta bez stanja, koristiti properties -  Da: components/ConversionTitle.vue
        komponenta sa stanjem - Da: components/EuroToHrkConverter.vue
    
    barem jedna komponenta mora emitirati barem jedan event - Da: components/EuroToHrkConverter.vue, linija 13 i linija 26 (keyup)
    
    store (Pinia) - ne
    
    asinkroni dohvat podataka s backenda - Da: components/ExchangeRate.vue (mounted) - asinkroni fetch sa "backenda"(lokalni file)
