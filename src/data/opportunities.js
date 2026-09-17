const opportunities = [
    // =====================================================
    // PROGRAMACIÓN - CURSOS GENERALES
    // =====================================================

    {
        id: 1,
        title: "Curso de Python",
        organization: "Píldoras Informáticas",
        description:
            "Curso en video completamente gratuito y en español, con más de 100 lecciones desde cero hasta temas intermedios.",
        topic: "Programación",
        modality: "Online",
        age: "Todas",
        womenOnly: false,
        type: "Curso",
        language: "Español",
        level: "Principiante → Intermedio",
        free: true,
        url: "https://www.pildorasinformaticas.es/curso-python/",
    },

    {
        id: 2,
        title: "Python en español",
        organization: "freeCodeCamp",
        description:
            "Cursos completos de Python en español disponibles gratuitamente en el canal oficial de freeCodeCamp.",
        topic: "Programación",
        modality: "Online",
        age: "Todas",
        womenOnly: false,
        type: "Curso en video",
        language: "Español",
        level: "Principiante → Intermedio",
        free: true,
        url: "https://www.youtube.com/@freecodecampespanol",
    },

    {
        id: 3,
        title: "Tutorial oficial de Python",
        organization: "Python.org",
        description:
            "Documentación oficial de Python traducida al español. Una referencia confiable para aprender y consultar conceptos específicos.",
        topic: "Programación",
        modality: "Online",
        age: "Todas",
        womenOnly: false,
        type: "Documentación",
        language: "Español",
        level: "Principiante → Intermedio",
        free: true,
        url: "https://docs.python.org/es/3/tutorial/",
    },

    {
        id: 4,
        title: "Learn Python 3",
        organization: "Codecademy",
        description:
            "Curso interactivo donde puedes escribir y ejecutar código directamente desde el navegador. El nivel básico está disponible gratuitamente.",
        topic: "Programación",
        modality: "Online",
        age: "Todas",
        womenOnly: false,
        type: "Curso interactivo",
        language: "Español / Inglés",
        level: "Principiante",
        free: true,
        url: "https://www.codecademy.com/learn/learn-python-3",
    },

    {
        id: 5,
        title: "Python Track",
        organization: "Exercism",
        description:
            "Colección gratuita de ejercicios prácticos de Python para aprender resolviendo problemas y recibir apoyo de la comunidad.",
        topic: "Programación",
        modality: "Online",
        age: "Todas",
        womenOnly: false,
        type: "Ejercicios",
        language: "Inglés",
        level: "Principiante → Avanzado",
        free: true,
        url: "https://exercism.org/tracks/python",
    },

    // =====================================================
    // NIÑAS PRO
    // =====================================================

    {
        id: 6,
        title: "Programación, ciencia y tecnología para todas las niñas de Chile",
        organization: "Niñas Pro",
        description:
            "Corporación sin fines de lucro que acerca la programación, la ciencia y la tecnología a niñas y adolescentes de Chile mediante cursos, talleres y actividades.",
        topic: "Programación",
        modality: "Online y presencial",
        age: "Todas",
        womenOnly: true,
        type: "Cursos y talleres",
        language: "Español",
        level: "Principiante → Avanzado",
        free: true,
        url: "https://ninaspro.cl/#actividades",
    },

    // =====================================================
    // SANTANDER OPEN ACADEMY
    // =====================================================

    {
        id: 7,
        title: "Copilot: Fundamentos de IA de Microsoft",
        organization: "Santander Open Academy",
        description:
            "Curso gratuito para conocer los fundamentos de Microsoft Copilot y sus aplicaciones prácticas en productividad y programación asistida por inteligencia artificial.",
        topic: "IA",
        modality: "Online",
        age: "Mayores de 16 años",
        womenOnly: false,
        type: "Curso",
        language: "Español / Inglés / Portugués / Polaco / Alemán",
        level: "Principiante",
        free: true,
        url: "https://share.google/xtrDAdMouLPhQJtKj",
    },

    {
        id: 8,
        title: "Fundamentos de ChatGPT",
        organization: "Santander Open Academy",
        description:
            "Curso gratuito para aprender los fundamentos de ChatGPT, creación de prompts y uso de inteligencia artificial generativa.",
        topic: "IA",
        modality: "Online",
        age: "Mayores de 16 años",
        womenOnly: false,
        type: "Curso",
        language: "Español",
        level: "Principiante",
        free: true,
        url: "https://share.google/wbCD1HZuMqQATPwgy",
    },

    {
        id: 9,
        title: "Introducción a Ciencia de Datos",
        organization: "IE University · Santander Open Academy",
        description:
            "Formación introductoria en ciencia de datos que aborda fundamentos, bases de datos, SQL, Big Data, NoSQL, ETL y una introducción a Python.",
        topic: "Datos",
        modality: "Online",
        age: "Mayores de 16 años",
        womenOnly: false,
        type: "Curso",
        language: "Español",
        level: "Principiante → Intermedio",
        free: true,
        url: "https://share.google/V6PO5W85LIvREK3Em",
    },

    {
        id: 10,
        title: "Power BI Intermedio: Análisis y modelado de datos",
        organization: "Santander Open Academy",
        description:
            "Curso para profundizar en Power BI, incluyendo transformación y modelado de datos, Power Query, DAX y creación de dashboards.",
        topic: "Datos",
        modality: "Online",
        age: "Mayores de 16 años",
        womenOnly: false,
        type: "Curso",
        language: "Español",
        level: "Intermedio",
        free: true,
        url: "https://share.google/yTDtYBJFXCOEtSdvD",
    },

    {
        id: 11,
        title: "Introducción a la programación con Python",
        organization: "Santander Open Academy",
        description:
            "Curso gratuito de 8 horas para aprender Python desde cero, incluyendo lógica de programación, funciones, manejo de errores, módulos y proyectos básicos.",
        topic: "Programación",
        modality: "Online",
        age: "Mayores de 16 años",
        womenOnly: false,
        type: "Curso",
        language: "Español / Inglés / Portugués / Polaco / Alemán",
        level: "Principiante",
        free: true,
        url: "https://www.santanderopenacademy.com/es/courses/introduction_to_python_programming.html/index.html",
    },

    {
        id: 12,
        title: "Google: Inteligencia Artificial y Productividad",
        organization: "Santander Open Academy · Google",
        description:
            "Curso para aprender los conceptos básicos de inteligencia artificial y utilizar herramientas como Gemini para automatizar tareas, generar ideas y mejorar la productividad.",
        topic: "IA",
        modality: "Online",
        age: "Todas",
        womenOnly: false,
        type: "Curso",
        language: "Español",
        level: "Principiante",
        free: true,
        url: "https://www.santanderopenacademy.com/es/courses/google-artificial-intelligence-and-productivity.html",
    },

    {
        id: 13,
        title: "Reglas de la IA: cómo usarla sin correr riesgos legales",
        organization: "Santander Open Academy",
        description:
            "Curso introductorio sobre uso ético y legal de la inteligencia artificial, incluyendo sesgos algorítmicos, desinformación, privacidad y protección de datos.",
        topic: "IA",
        modality: "Online",
        age: "Mayores de 16 años",
        womenOnly: false,
        type: "Curso",
        language: "Español / Inglés / Portugués",
        level: "Principiante",
        free: true,
        url: "https://www.santanderopenacademy.com/es/courses/safe-fair-legal-how-to-use-ai-right.html.html",
    },

    // =====================================================
    // NODO
    // =====================================================

    {
        id: 14,
        title: "Transformación Digital con IA y Automatización",
        organization: "NODO",
        description:
            "Programa de formación gratuita en Chile sobre inteligencia artificial, IA generativa y automatización, con una formación transversal y especializaciones posteriores.",
        topic: "IA",
        modality: "Online",
        age: "Mayores de 18 años",
        womenOnly: false,
        type: "Programa formativo",
        language: "Español",
        level: "Principiante → Intermedio",
        free: true,
        url: "https://somosnodo.cl/postula/",
    },

    // =====================================================
    // SAMSUNG INNOVATION CAMPUS
    // =====================================================

    {
        id: 15,
        title: "Samsung Innovation Campus",
        organization: "Samsung",
        description:
            "Programa gratuito de formación y certificación en Python, Inteligencia Artificial e IA Generativa para jóvenes de Latinoamérica en los países participantes de cada convocatoria.",
        topic: "IA",
        modality: "Online",
        age: "Jóvenes",
        womenOnly: false,
        type: "Programa de certificación",
        language: "Español",
        level: "Principiante → Intermedio",
        free: true,
        url: "https://sicvirtual.org/",
    },

    // =====================================================
    // CHICAS EN TECNOLOGÍA
    // =====================================================

    {
        id: 16,
        title: "Experiencias educativas en tecnología",
        organization: "Chicas en Tecnología",
        description:
            "Experiencias educativas gratuitas para jóvenes de América Latina que abordan programación, datos, inteligencia artificial, tecnología y desarrollo profesional.",
        topic: "Tecnología",
        modality: "Online y presencial",
        age: "13 → 23 años",
        womenOnly: true,
        type: "Cursos y experiencias",
        language: "Español",
        level: "Principiante → Intermedio",
        free: true,
        url: "https://chicasentecnologia.org/es_ar/",
    },

    // =====================================================
    // TECHNOVATION GIRLS
    // =====================================================

    {
        id: 17,
        title: "Technovation Girls Chile",
        organization: "Technovation Girls Chile",
        description:
            "Programa gratuito para niñas y adolescentes que desarrolla habilidades de programación, inteligencia artificial, emprendimiento y liderazgo mediante proyectos tecnológicos.",
        topic: "Tecnología",
        modality: "Presencial",
        age: "8 → 18 años",
        womenOnly: true,
        type: "Programa formativo",
        language: "Español",
        level: "Principiante → Intermedio",
        free: true,
        url: "https://technovation.cl/",
    },

    // =====================================================
    // STANFORD
    // =====================================================

    {
        id: 18,
        title: "Code in Place",
        organization: "Stanford University",
        description:
            "Curso introductorio gratuito de programación basado en CS106A de Stanford, con énfasis en los fundamentos de Python y aprendizaje acompañado por una comunidad internacional.",
        topic: "Programación",
        modality: "Online",
        age: "Todas",
        womenOnly: false,
        type: "Curso",
        language: "Inglés",
        level: "Principiante",
        free: true,
        url: "https://codeinplace.stanford.edu/",
    },

    // =====================================================
    // CÓDIGO FACILITO
    // =====================================================

    {
        id: 19,
        title: "Curso de C Profesional",
        organization: "Código Facilito",
        description:
            "Curso para aprender programación en C y desarrollar fundamentos sólidos de programación y manejo del lenguaje.",
        topic: "Programación",
        modality: "Online",
        age: "Todas",
        womenOnly: false,
        type: "Curso",
        language: "Español",
        level: "Principiante → Intermedio",
        free: true,
        url: "https://codigofacilito.com/cursos/c-profesional",
    },

    {
        id: 20,
        title: "Curso Profesional de Docker",
        organization: "Código Facilito",
        description:
            "Curso introductorio y práctico para aprender a trabajar con Docker y contenedores.",
        topic: "Tecnología",
        modality: "Online",
        age: "Todas",
        womenOnly: false,
        type: "Curso",
        language: "Español",
        level: "Principiante → Intermedio",
        free: true,
        url: "https://codigofacilito.com/cursos/docker",
    },

    {
        id: 21,
        title: "Introducción a DevOps: Bases y Conceptos",
        organization: "Código Facilito",
        description:
            "Curso introductorio a DevOps, sus principios, herramientas y prácticas para integrar desarrollo y operaciones.",
        topic: "Tecnología",
        modality: "Online",
        age: "Todas",
        womenOnly: false,
        type: "Curso",
        language: "Español",
        level: "Principiante",
        free: true,
        url: "https://codigofacilito.com/cursos/introduccion-devops",
    },

    {
        id: 22,
        title: "Curso de Introducción a Machine Learning",
        organization: "Código Facilito",
        description:
            "Introducción a los principales conceptos y fundamentos del Machine Learning.",
        topic: "IA",
        modality: "Online",
        age: "Todas",
        womenOnly: false,
        type: "Curso",
        language: "Español",
        level: "Principiante",
        free: true,
        url: "https://codigofacilito.com/cursos/ml-introduccion",
    },

    {
        id: 23,
        title: "Curso Profesional de Deploy en Servidores",
        organization: "Código Facilito",
        description:
            "Curso enfocado en el despliegue de aplicaciones y proyectos en servidores.",
        topic: "Tecnología",
        modality: "Online",
        age: "Todas",
        womenOnly: false,
        type: "Curso",
        language: "Español",
        level: "Intermedio",
        free: true,
        url: "https://codigofacilito.com/cursos/deploy-profesional",
    },

    {
        id: 24,
        title: "Visual Studio Code y GitHub Copilot",
        organization: "Código Facilito",
        description:
            "Curso para aprender a utilizar Visual Studio Code junto con GitHub Copilot como herramienta de asistencia para programar.",
        topic: "IA",
        modality: "Online",
        age: "Todas",
        womenOnly: false,
        type: "Curso",
        language: "Español",
        level: "Principiante → Intermedio",
        free: true,
        url: "https://codigofacilito.com/cursos/vscode-github-copilot",
    },

    {
        id: 25,
        title: "Ciencia de Datos: Bases y Conceptos",
        organization: "Código Facilito",
        description:
            "Curso introductorio para conocer los principales conceptos y fundamentos de la ciencia de datos.",
        topic: "Datos",
        modality: "Online",
        age: "Todas",
        womenOnly: false,
        type: "Curso",
        language: "Español",
        level: "Principiante",
        free: true,
        url: "https://codigofacilito.com/cursos/ciencia-datos-bases-conceptos",
    },

    {
        id: 26,
        title: "Curso de Java Profesional",
        organization: "Código Facilito",
        description:
            "Curso para aprender y profundizar en programación con Java y sus principales conceptos.",
        topic: "Programación",
        modality: "Online",
        age: "Todas",
        womenOnly: false,
        type: "Curso",
        language: "Español",
        level: "Intermedio → Avanzado",
        free: true,
        url: "https://codigofacilito.com/cursos/java-profesional",
    },

    {
        id: 27,
        title: "Fundamentos de SQL",
        organization: "Código Facilito",
        description:
            "Curso para aprender los fundamentos de SQL y comenzar a trabajar con bases de datos relacionales.",
        topic: "Datos",
        modality: "Online",
        age: "Todas",
        womenOnly: false,
        type: "Curso",
        language: "Español",
        level: "Principiante",
        free: true,
        url: "https://codigofacilito.com/cursos/sql-fundamentos",
    },

    {
        id: 28,
        title: "Programación Reactiva con Java",
        organization: "Código Facilito",
        description:
            "Curso para aprender programación reactiva con Java, gestión de flujos de datos, patrón Observer y operadores.",
        topic: "Programación",
        modality: "Online",
        age: "Todas",
        womenOnly: false,
        type: "Curso",
        language: "Español",
        level: "Intermedio",
        free: true,
        url: "https://codigofacilito.com/cursos/programacion-reactiva-java",
    },

    {
        id: 29,
        title: "Excel para Análisis",
        organization: "Código Facilito",
        description:
            "Curso enfocado en el uso de Excel para análisis y manejo de información.",
        topic: "Datos",
        modality: "Online",
        age: "Todas",
        womenOnly: false,
        type: "Curso",
        language: "Español",
        level: "Principiante → Intermedio",
        free: true,
        url: "https://codigofacilito.com/cursos/excel-analisis",
    },

    {
        id: 30,
        title: "Ingeniería de Datos: Proyecto",
        organization: "Código Facilito",
        description:
            "Curso práctico orientado al desarrollo de un proyecto relacionado con ingeniería de datos.",
        topic: "Datos",
        modality: "Online",
        age: "Todas",
        womenOnly: false,
        type: "Curso práctico",
        language: "Español",
        level: "Intermedio",
        free: true,
        url: "https://codigofacilito.com/cursos/ingenieria-datos-proyecto",
    },

    {
        id: 31,
        title: "Node.js Profesional",
        organization: "Código Facilito",
        description:
            "Curso para desarrollar aplicaciones y servicios utilizando Node.js.",
        topic: "Programación",
        modality: "Online",
        age: "Todas",
        womenOnly: false,
        type: "Curso",
        language: "Español",
        level: "Intermedio",
        free: true,
        url: "https://codigofacilito.com/cursos/nodejs-profesional",
    },

    {
        id: 32,
        title: "Reporte de Datos",
        organization: "Código Facilito",
        description:
            "Curso orientado a la generación y presentación de reportes a partir de datos.",
        topic: "Datos",
        modality: "Online",
        age: "Todas",
        womenOnly: false,
        type: "Curso",
        language: "Español",
        level: "Principiante → Intermedio",
        free: true,
        url: "https://codigofacilito.com/cursos/reporte-datos",
    },

    {
        id: 33,
        title: "Introducción al Desarrollo Móvil",
        organization: "Código Facilito",
        description:
            "Curso introductorio para conocer los fundamentos del desarrollo de aplicaciones móviles.",
        topic: "Programación",
        modality: "Online",
        age: "Todas",
        womenOnly: false,
        type: "Curso",
        language: "Español",
        level: "Principiante",
        free: true,
        url: "https://codigofacilito.com/cursos/introduccion-movil",
    },

    {
        id: 34,
        title: "Primera Página Web",
        organization: "Código Facilito",
        description:
            "Curso introductorio para aprender los fundamentos necesarios para crear una primera página web.",
        topic: "Tecnología",
        modality: "Online",
        age: "Todas",
        womenOnly: false,
        type: "Curso",
        language: "Español",
        level: "Principiante",
        free: true,
        url: "https://codigofacilito.com/cursos/primera-pagina-2019",
    },

    {
        id: 35,
        title: "Consumir APIs con Python",
        organization: "Código Facilito",
        description:
            "Curso para aprender a consumir e integrar APIs utilizando Python.",
        topic: "Programación",
        modality: "Online",
        age: "Todas",
        womenOnly: false,
        type: "Curso",
        language: "Español",
        level: "Intermedio",
        free: true,
        url: "https://codigofacilito.com/cursos/consumir-apis-python",
    },

    {
        id: 36,
        title: "Ejercicios de NumPy y Pandas",
        organization: "Código Facilito",
        description:
            "Curso práctico basado en ejercicios para aprender a trabajar con NumPy y Pandas en Python.",
        topic: "Datos",
        modality: "Online",
        age: "Todas",
        womenOnly: false,
        type: "Ejercicios",
        language: "Español",
        level: "Principiante → Intermedio",
        free: true,
        url: "https://codigofacilito.com/cursos/ejercicios-numpy-pandas",
    },
]

export default opportunities