Popis (ne)implementiranih stvari:

    interpolation/one-way binding - Da: components/EuroToHrkConverter.vue, linija 32
    two-way binding - Da: components/EuroToHrkConverter.vue, v-model.number u Formu
    methods -  Da: components/EuroToHrkConverter.vue pod methods
    computed properties -  Da: components/ConversionTitle.vue, computed: titleMessage
    barem jedan scoped style - Da: components/ConversionTitle.vue, style scoped na dnu
    koristiti barem jedan lifecycle hook - Da: 
    routing (više stranica): Da: router/index.js
        aplikacija mora biti bookmarkable, tako da rade linkovi (ne samo na root, već i moj-web.com/stranica1, moj-web.com/stranica2)
        dinamičko usmjeravanje s 404 stranicom ("catch all")
    (barem) dvije komponente
        komponenta bez stanja, koristiti properties
        komponenta sa stanjem
    barem jedna komponenta mora emitirati barem jedan event
    store (Pinia)
    asinkroni dohvat podataka s backenda
