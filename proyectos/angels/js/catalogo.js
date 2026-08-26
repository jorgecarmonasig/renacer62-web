// Catálogo de fragancias de Angel's Fragrance
// Base: ANGEL'S LISTA & CARACTER BLANCO Y NEGRO.xlsx, depurada para uso comercial en la web
// Splash, Rush Cake y Pwer Mix se excluyen porque pertenecen a la línea de splash corporales.

const fragancias = [
    {
        "nombre": "360",
        "casa": "PERRY ELLIS",
        "genero": "mujer",
        "categoria": "mujer",
        "caracter": "Oriental · Floral",
        "sensaciones": [
            "Sensualidad",
            "Elegancia",
            "Calidez"
        ]
    },
    {
        "nombre": "212 VIP",
        "casa": "CAROLINA HERRERA",
        "genero": "mujer",
        "categoria": "mujer",
        "caracter": "Oriental · Vainilla",
        "sensaciones": [
            "Dulzura",
            "Calidez",
            "Sensualidad"
        ]
    },
    {
        "nombre": "5TH AVENUE",
        "casa": "ELIZABETH ARDEN",
        "genero": "mujer",
        "categoria": "mujer",
        "caracter": "Oriental · Floral",
        "sensaciones": [
            "Sensualidad",
            "Elegancia",
            "Calidez"
        ]
    },
    {
        "nombre": "BOMBSHELL",
        "casa": "VICTORIA'S SECRET",
        "genero": "mujer",
        "categoria": "mujer",
        "caracter": "Floral",
        "sensaciones": [
            "Delicadeza",
            "Elegancia",
            "Armonía"
        ]
    },
    {
        "nombre": "CAN CAN",
        "casa": "PARIS HILTON",
        "genero": "mujer",
        "categoria": "mujer",
        "caracter": "Floral · Frutal",
        "sensaciones": [
            "Alegría",
            "Frescura",
            "Delicadeza"
        ]
    },
    {
        "nombre": "CAROLINA HERRERA",
        "casa": "CAROLINA HERRERA",
        "genero": "mujer",
        "categoria": "mujer",
        "caracter": "Oriental · Floral",
        "sensaciones": [
            "Sensualidad",
            "Elegancia",
            "Calidez"
        ]
    },
    {
        "nombre": "CH GRAND TOUR",
        "casa": "CAROLINA HERRERA",
        "genero": "mujer",
        "categoria": "mujer",
        "caracter": "Floral",
        "sensaciones": [
            "Delicadeza",
            "Elegancia",
            "Armonía"
        ]
    },
    {
        "nombre": "CHANCE",
        "casa": "CHANEL",
        "genero": "mujer",
        "categoria": "mujer",
        "caracter": "Chipre",
        "sensaciones": [
            "Elegancia",
            "Intensidad",
            "Distinción"
        ]
    },
    {
        "nombre": "BORN IN PARADISE",
        "casa": "ESCADA",
        "genero": "mujer",
        "categoria": "mujer",
        "caracter": "Floral · Frutal",
        "sensaciones": [
            "Alegría",
            "Frescura",
            "Delicadeza"
        ]
    },
    {
        "nombre": "DOLCE ROSA EXCELSA",
        "casa": "DOLCE & GABBANA",
        "genero": "mujer",
        "categoria": "mujer",
        "caracter": "Floral",
        "sensaciones": [
            "Delicadeza",
            "Elegancia",
            "Armonía"
        ]
    },
    {
        "nombre": "ETERNITY",
        "casa": "CALVIN KLEIN",
        "genero": "mujer",
        "categoria": "mujer",
        "caracter": "Floral",
        "sensaciones": [
            "Delicadeza",
            "Elegancia",
            "Armonía"
        ]
    },
    {
        "nombre": "FANTASY",
        "casa": "BRITNEY SPEARS",
        "genero": "mujer",
        "categoria": "mujer",
        "caracter": "Oriental · Floral · Frutal",
        "sensaciones": [
            "Sensualidad",
            "Vitalidad",
            "Encanto"
        ]
    },
    {
        "nombre": "LADY MILLION LUCKY",
        "casa": "PACO RABANNE",
        "genero": "mujer",
        "categoria": "mujer",
        "caracter": "Floral · Frutal",
        "sensaciones": [
            "Alegría",
            "Frescura",
            "Delicadeza"
        ]
    },
    {
        "nombre": "HEIRESS",
        "casa": "PARIS HILTON",
        "genero": "mujer",
        "categoria": "mujer",
        "caracter": "Frutal",
        "sensaciones": [
            "Alegría",
            "Vitalidad",
            "Frescura"
        ]
    },
    {
        "nombre": "HUGO BOSS WOMAN",
        "casa": "HUGO BOSS",
        "genero": "mujer",
        "categoria": "mujer",
        "caracter": "Floral · Frutal",
        "sensaciones": [
            "Alegría",
            "Frescura",
            "Delicadeza"
        ]
    },
    {
        "nombre": "ISSEY MIYAKE",
        "casa": "ISSEY MIYAKE",
        "genero": "mujer",
        "categoria": "mujer",
        "caracter": "Marino · Floral",
        "sensaciones": [
            "Frescura",
            "Naturalidad",
            "Suavidad"
        ]
    },
    {
        "nombre": "J'ADORE",
        "casa": "CHRISTIAN DIOR",
        "genero": "mujer",
        "categoria": "mujer",
        "caracter": "Floral · Frutal",
        "sensaciones": [
            "Alegría",
            "Frescura",
            "Delicadeza"
        ]
    },
    {
        "nombre": "LA VIE EST BELLE",
        "casa": "LANCÔME",
        "genero": "mujer",
        "categoria": "mujer",
        "caracter": "Floral · Frutal · Gourmand",
        "sensaciones": [
            "Dulzura",
            "Alegría",
            "Encanto"
        ]
    },
    {
        "nombre": "LACOSTE TOUCH OF PINK",
        "casa": "LACOSTE",
        "genero": "mujer",
        "categoria": "mujer",
        "caracter": "Floral · Frutal",
        "sensaciones": [
            "Alegría",
            "Frescura",
            "Delicadeza"
        ]
    },
    {
        "nombre": "LIGHT BLUE",
        "casa": "DOLCE & GABBANA",
        "genero": "mujer",
        "categoria": "mujer",
        "caracter": "Cítrico · Floral · Frutal",
        "sensaciones": [
            "Frescura",
            "Vitalidad",
            "Luminosidad"
        ]
    },
    {
        "nombre": "MOON SPARKLE",
        "casa": "ESCADA",
        "genero": "mujer",
        "categoria": "mujer",
        "caracter": "Floral · Frutal",
        "sensaciones": [
            "Alegría",
            "Frescura",
            "Delicadeza"
        ]
    },
    {
        "nombre": "OLYMPÉA",
        "casa": "PACO RABANNE",
        "genero": "mujer",
        "categoria": "mujer",
        "caracter": "Oriental",
        "sensaciones": [
            "Sensualidad",
            "Calidez",
            "Misterio"
        ]
    },
    {
        "nombre": "273",
        "casa": "FRED HAYMAN",
        "genero": "mujer",
        "categoria": "mujer",
        "caracter": "Oriental",
        "sensaciones": [
            "Sensualidad",
            "Calidez",
            "Misterio"
        ]
    },
    {
        "nombre": "OMNIA CORAL",
        "casa": "BVLGARI",
        "genero": "mujer",
        "categoria": "mujer",
        "caracter": "Oriental",
        "sensaciones": [
            "Sensualidad",
            "Calidez",
            "Misterio"
        ]
    },
    {
        "nombre": "OMNIA CRYSTALLINE",
        "casa": "BVLGARI",
        "genero": "mujer",
        "categoria": "mujer",
        "caracter": "Marino",
        "sensaciones": [
            "Frescura",
            "Libertad",
            "Naturalidad"
        ]
    },
    {
        "nombre": "PARIS HILTON",
        "casa": "PARIS HILTON",
        "genero": "mujer",
        "categoria": "mujer",
        "caracter": "Floral · Frutal",
        "sensaciones": [
            "Alegría",
            "Frescura",
            "Delicadeza"
        ]
    },
    {
        "nombre": "RALPH",
        "casa": "RALPH LAUREN",
        "genero": "mujer",
        "categoria": "mujer",
        "caracter": "Frutal",
        "sensaciones": [
            "Alegría",
            "Vitalidad",
            "Frescura"
        ]
    },
    {
        "nombre": "QUEEN OF SEDUCTION",
        "casa": "ANTONIO BANDERAS",
        "genero": "mujer",
        "categoria": "mujer",
        "caracter": "Floral · Acuática",
        "sensaciones": [
            "Frescura",
            "Delicadeza",
            "Serenidad"
        ]
    },
    {
        "nombre": "ROCK SHAKIRA",
        "casa": "SHAKIRA",
        "genero": "mujer",
        "categoria": "mujer",
        "caracter": "Frutal",
        "sensaciones": [
            "Alegría",
            "Vitalidad",
            "Frescura"
        ]
    },
    {
        "nombre": "SOFIA",
        "casa": "SOFIA VERGARA",
        "genero": "mujer",
        "categoria": "mujer",
        "caracter": "Floral · Frutal",
        "sensaciones": [
            "Alegría",
            "Frescura",
            "Delicadeza"
        ]
    },
    {
        "nombre": "TOMMY GIRL",
        "casa": "TOMMY HILFIGER",
        "genero": "mujer",
        "categoria": "mujer",
        "caracter": "Floral",
        "sensaciones": [
            "Delicadeza",
            "Elegancia",
            "Armonía"
        ]
    },
    {
        "nombre": "VERSENSE",
        "casa": "VERSACE",
        "genero": "mujer",
        "categoria": "mujer",
        "caracter": "Cítrico · Amaderado",
        "sensaciones": [
            "Frescura",
            "Energía",
            "Elegancia"
        ]
    },
    {
        "nombre": "360",
        "casa": "PERRY ELLIS",
        "genero": "hombre",
        "categoria": "hombre",
        "caracter": "Oriental · Amaderada",
        "sensaciones": [
            "Intensidad",
            "Elegancia",
            "Magnetismo"
        ]
    },
    {
        "nombre": "212",
        "casa": "CAROLINA HERRERA",
        "genero": "hombre",
        "categoria": "hombre",
        "caracter": "Madera · Floral",
        "sensaciones": [
            "Elegancia",
            "Calidez",
            "Equilibrio"
        ]
    },
    {
        "nombre": "212 VIP",
        "casa": "CAROLINA HERRERA",
        "genero": "hombre",
        "categoria": "hombre",
        "caracter": "Oriental · Amaderada",
        "sensaciones": [
            "Intensidad",
            "Elegancia",
            "Magnetismo"
        ]
    },
    {
        "nombre": "ACQUA DI GIÒ",
        "casa": "GIORGIO ARMANI",
        "genero": "hombre",
        "categoria": "hombre",
        "caracter": "Acuático · Dulce · Floral",
        "sensaciones": [
            "Frescura",
            "Dulzura",
            "Sensualidad"
        ]
    },
    {
        "nombre": "BLACK XS",
        "casa": "PACO RABANNE",
        "genero": "hombre",
        "categoria": "hombre",
        "caracter": "Oriental · Amaderada",
        "sensaciones": [
            "Intensidad",
            "Elegancia",
            "Magnetismo"
        ]
    },
    {
        "nombre": "CK ONE",
        "casa": "CALVIN KLEIN",
        "genero": "unisex",
        "categoria": "hombre",
        "caracter": "Cítrica · Aromática",
        "sensaciones": [
            "Frescura",
            "Energía",
            "Dinamismo"
        ]
    },
    {
        "nombre": "BAD DIESEL",
        "casa": "DIESEL",
        "genero": "hombre",
        "categoria": "hombre",
        "caracter": "Oriental · Amaderada",
        "sensaciones": [
            "Intensidad",
            "Elegancia",
            "Magnetismo"
        ]
    },
    {
        "nombre": "HUGO BOSS",
        "casa": "HUGO BOSS",
        "genero": "hombre",
        "categoria": "hombre",
        "caracter": "Amaderada · Especiada",
        "sensaciones": [
            "Fuerza",
            "Elegancia",
            "Magnetismo"
        ]
    },
    {
        "nombre": "ISSEY MIYAKE",
        "casa": "ISSEY MIYAKE",
        "genero": "hombre",
        "categoria": "hombre",
        "caracter": "Amaderada · Aromática",
        "sensaciones": [
            "Elegancia",
            "Equilibrio",
            "Seguridad"
        ]
    },
    {
        "nombre": "INVICTUS",
        "casa": "PACO RABANNE",
        "genero": "hombre",
        "categoria": "hombre",
        "caracter": "Marino · Amaderada",
        "sensaciones": [
            "Frescura",
            "Libertad",
            "Elegancia"
        ]
    },
    {
        "nombre": "LACOSTE ESSENTIAL",
        "casa": "LACOSTE",
        "genero": "hombre",
        "categoria": "hombre",
        "caracter": "Amaderada · Aromática",
        "sensaciones": [
            "Elegancia",
            "Equilibrio",
            "Seguridad"
        ]
    },
    {
        "nombre": "LACOSTE RED",
        "casa": "LACOSTE",
        "genero": "hombre",
        "categoria": "hombre",
        "caracter": "Aromática · Frutal",
        "sensaciones": [
            "Vitalidad",
            "Frescura",
            "Dinamismo"
        ]
    },
    {
        "nombre": "LEGACY",
        "casa": "CRISTIANO RONALDO",
        "genero": "hombre",
        "categoria": "hombre",
        "caracter": "Amaderada · Aromática",
        "sensaciones": [
            "Elegancia",
            "Equilibrio",
            "Seguridad"
        ]
    },
    {
        "nombre": "NAUTICA",
        "casa": "NAUTICA",
        "genero": "hombre",
        "categoria": "hombre",
        "caracter": "Amaderada · Acuática",
        "sensaciones": [
            "Frescura",
            "Equilibrio",
            "Serenidad"
        ]
    },
    {
        "nombre": "ONE MILLION",
        "casa": "PACO RABANNE",
        "genero": "hombre",
        "categoria": "hombre",
        "caracter": "Amaderada · Especiada",
        "sensaciones": [
            "Fuerza",
            "Elegancia",
            "Magnetismo"
        ]
    },
    {
        "nombre": "SWISS ARMY",
        "casa": "VICTORINOX",
        "genero": "hombre",
        "categoria": "hombre",
        "caracter": "Aromática · Amaderada",
        "sensaciones": [
            "Frescura",
            "Elegancia",
            "Presencia"
        ]
    }
];

// Descripciones comerciales de los caracteres olfativos
const caracteresFragancia = {
    "Floral": "Delicado y expresivo, con las flores como protagonistas. Puede ir desde aromas suaves y románticos hasta bouquets más intensos y elegantes.",
    "Frutal": "Alegre y vibrante, con notas frutales que aportan dulzura, frescura y energía.",
    "Oriental": "Cálido, sensual y envolvente. Sus notas profundas crean una fragancia intensa que se hace notar.",
    "Chipre": "Rico, elegante y persistente, con una combinación de maderas, musgos y flores que aporta un carácter muy definido.",
    "Marino": "Fresco, limpio y natural. Evoca el agua, el aire y una agradable sensación de libertad.",
    "Floral · Frutal": "Une la delicadeza de las flores con la alegría y vitalidad de las frutas. Una combinación fresca, femenina y fácil de disfrutar.",
    "Oriental · Floral": "La sensualidad y calidez oriental se combina con la elegancia de las flores para crear un aroma envolvente y refinado.",
    "Oriental · Amaderada": "Cálido, profundo y elegante. Combina la sensualidad oriental con la fuerza y sofisticación de las maderas.",
    "Oriental · Vainilla": "Dulce, cálido y envolvente. La vainilla aporta una sensación reconfortante y seductora al carácter oriental.",
    "Oriental · Floral · Frutal": "Una mezcla envolvente en la que sensualidad, flores y frutas se encuentran para crear un aroma expresivo y lleno de matices.",
    "Floral · Frutal · Gourmand": "Flores y frutas acompañadas por una faceta dulce y apetecible. Una fragancia divertida, envolvente y muy expresiva.",
    "Cítrico · Floral · Frutal": "Fresco y luminoso, combina la energía de los cítricos con flores y frutas para lograr una sensación alegre y dinámica.",
    "Floral · Acuática": "La suavidad floral se encuentra con una sensación acuática limpia y refrescante.",
    "Marino · Floral": "Frescura marina suavizada por matices florales. Limpio, ligero y agradable para el día a día.",
    "Amaderada · Aromática": "La elegancia y profundidad de las maderas se complementa con matices aromáticos frescos.",
    "Aromática · Amaderada": "Fresco y aromático en su salida, con una base amaderada que aporta cuerpo, presencia y elegancia.",
    "Amaderada · Especiada": "Maderas cálidas acompañadas por especias que aportan intensidad y personalidad.",
    "Cítrico · Amaderado": "La energía y frescura cítrica se apoya en una base de maderas que aporta elegancia y permanencia.",
    "Madera · Floral": "La calidez y elegancia de las maderas se suaviza con notas florales, creando un aroma equilibrado y distinguido.",
    "Marino · Amaderada": "La frescura marina se combina con una base amaderada más profunda y elegante.",
    "Amaderada · Acuática": "Una combinación entre la profundidad de las maderas y una sensación acuática fresca y limpia.",
    "Aromática · Frutal": "Matices aromáticos frescos acompañados por frutas que aportan vitalidad y un toque alegre.",
    "Cítrica · Aromática": "Refrescante y energética, con cítricos acompañados por notas aromáticas que aportan carácter.",
    "Acuático · Dulce · Floral": "Frescura acuática combinada con una faceta dulce y floral que suaviza y enriquece el aroma."
};
