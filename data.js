const planesEstudio = {
    "2017": {
        nombre: "Plan de Estudios 2017",
        anios: [
            {
                numero: "Primer Año",
                semestres: [
                    {
                        nombre: "Primer Semestre",
                        cursos: [
                            { codigo: "1701102", nombre: "Razonamiento Lógico Matemático", cred: 2, prq: [] },
                            { codigo: "1701105", nombre: "Matemática Básica", cred: 2, prq: [] },
                            { codigo: "1701106", nombre: "Cálculo Diferencial para Telecomunicaciones", cred: 4, prq: [] },
                            { codigo: "1701107", nombre: "Física 1", cred: 3, prq: [] },
                            { codigo: "1701114", nombre: "Metodología del Trabajo Intelectual Universitario", cred: 2, prq: [] },
                            { codigo: "1701115", nombre: "Materiales de Ingeniería", cred: 3, prq: [] },
                            { codigo: "1701116", nombre: "Introducción a la Ingeniería", cred: 2, prq: [] }
                        ]
                    },
                    {
                        nombre: "Segundo Semestre",
                        cursos: [
                            { codigo: "1701210", nombre: "Computación 1", cred: 3, prq: ["1701102"] },
                            { codigo: "1701211", nombre: "Cálculo Integral para Telecomunicaciones", cred: 4, prq: ["1701106"] },
                            { codigo: "1701212", nombre: "Física 2", cred: 3, prq: ["1701107"] },
                            { codigo: "1701213", nombre: "Ingeniería Gráfica y CAD", cred: 3, prq: ["1701116"] },
                            { codigo: "1701217", nombre: "Realidad Nacional", cred: 1, prq: [] },
                            { codigo: "1701218", nombre: "Comunicación Integral", cred: 2, prq: [] }
                        ]
                    }
                ]
            },
            {
                numero: "Segundo Año",
                semestres: [
                    {
                        nombre: "Primer Semestre",
                        cursos: [
                            { codigo: "1702119", nombre: "Ciudadanía e Interculturalidad", cred: 1, prq: [] },
                            { codigo: "1702120", nombre: "Computación 2", cred: 4, prq: ["1701210"] },
                            { codigo: "1702121", nombre: "Análisis de Sistemas y Señales", cred: 3, prq: ["1701211"] },
                            { codigo: "1702122", nombre: "Métodos Matemáticos 1", cred: 3, prq: ["1701211"] },
                            { codigo: "1702123", nombre: "Física 3", cred: 3, prq: ["1701212"] },
                            { codigo: "1702124", nombre: "Electrotecnia 1", cred: 4, prq: ["1701212"] }
                        ]
                    },
                    {
                        nombre: "Segundo Semestre",
                        cursos: [
                            { codigo: "1702225", nombre: "Ecología y Conservación Ambiental", cred: 1, prq: [] },
                            { codigo: "1702226", nombre: "Tecnologías e Infraestructura", cred: 4, prq: ["1702120"] },
                            { codigo: "1702227", nombre: "Métodos Numéricos", cred: 4, prq: ["1702121"] },
                            { codigo: "1702228", nombre: "Métodos Matemáticos 2", cred: 4, prq: ["1702122"] },
                            { codigo: "1702229", nombre: "Dispositivos y Circuitos Electrónicos", cred: 5, prq: ["1702123", "1702124"] },
                            { codigo: "1702230", nombre: "Electrotecnia 2", cred: 5, prq: ["1702124"] },
                            { codigo: "1702231", nombre: "Gerencia Estratégica (E)", cred: 3, prq: [] },
                            { codigo: "1702232", nombre: "Marketing en Telecomunicaciones (E)", cred: 3, prq: [] }
                        ]
                    }
                ]
            },
            {
                numero: "Tercer Año",
                semestres: [
                    {
                        nombre: "Primer Semestre",
                        cursos: [
                            { codigo: "1703133", nombre: "Liderazgo y Comportamiento Organizacional", cred: 1, prq: ["1702225"] },
                            { codigo: "1703134", nombre: "Problemas Actuales de la Sociedad", cred: 1, prq: [] },
                            { codigo: "1703135", nombre: "Telecomunicaciones 1", cred: 3, prq: ["1702227"] },
                            { codigo: "1703137", nombre: "Sistemas Digitales", cred: 3, prq: ["1702229"] },
                            { codigo: "1703138", nombre: "Inglés Básico", cred: 1, prq: [] },
                            { codigo: "1703139", nombre: "Sistemas de Control (E)", cred: 3, prq: ["1702229"] },
                            { codigo: "1703140", nombre: "Electrónica Industrial (E)", cred: 3, prq: ["1702229", "1702230"] },
                            { codigo: "1703178", nombre: "Procesamiento Digital de Señales", cred: 3, prq: ["1702228"] },
                            { codigo: "1703179", nombre: "Laboratorio de Procesamiento Digital de Señales", cred: 1, prq: ["1702228"] }
                        ]
                    },
                    {
                        nombre: "Segundo Semestre",
                        cursos: [
                            { codigo: "1703241", nombre: "Perspectiva y Enfoque de la Investigación Científica", cred: 2, prq: ["1702225"] },
                            { codigo: "1703243", nombre: "Telecomunicaciones 2", cred: 3, prq: ["1703135"] },
                            { codigo: "1703246", nombre: "Dinámica de Sistemas (E)", cred: 3, prq: ["1702229"] },
                            { codigo: "1703247", nombre: "Smart Cities (E)", cred: 3, prq: ["1702123", "1703135"] },
                            { codigo: "1703275", nombre: "Campos Electromagnéticos", cred: 4, prq: ["1703178", "1703179"] },
                            { codigo: "1703280", nombre: "Instrumentación 1", cred: 2, prq: ["1702226"] },
                            { codigo: "1703281", nombre: "Laboratorio de Instrumentación 1", cred: 1, prq: ["1702226"] },
                            { codigo: "1703282", nombre: "Sistemas de Telefonía", cred: 3, prq: ["1702227"] },
                            { codigo: "1703283", nombre: "Laboratorio de Sistemas de Telefonía", cred: 1, prq: ["1702227"] }
                        ]
                    }
                ]
            },
            {
                numero: "Cuarto Año",
                semestres: [
                    {
                        nombre: "Primer Semestre",
                        cursos: [
                            { codigo: "1704148", nombre: "Ética General y Profesional", cred: 1, prq: [] },
                            { codigo: "1704152", nombre: "Ingeniería de Mantenimiento (E)", cred: 3, prq: ["1702124", "1702230"] },
                            { codigo: "1704153", nombre: "Comunicación Industrial (E)", cred: 3, prq: ["1703139"] },
                            { codigo: "1704184", nombre: "Microprocesador y Microcontrolador", cred: 3, prq: ["1703137"] },
                            { codigo: "1704185", nombre: "Laboratorio de Microprocesador y Microcontrolador", cred: 1, prq: ["1703137"] },
                            { codigo: "1704186", nombre: "Líneas de Transmisión", cred: 4, prq: ["1703275"] },
                            { codigo: "1704187", nombre: "Laboratorio de Líneas de Transmisión", cred: 1, prq: ["1703275"] },
                            { codigo: "1704188", nombre: "Internetworking 1", cred: 3, prq: ["1703282", "1703283"] },
                            { codigo: "1704189", nombre: "Laboratorio de Internetworking 1", cred: 1, prq: ["1703282", "1703283"] }
                        ]
                    },
                    {
                        nombre: "Segundo Semestre",
                        cursos: [
                            { codigo: "1704259", nombre: "Control Adaptativo Moderno (E)", cred: 3, prq: ["1703139"] },
                            { codigo: "1704290", nombre: "Software de Telecomunicaciones", cred: 3, prq: ["1704184", "1704185"] },
                            { codigo: "1704291", nombre: "Laboratorio de Software de Telecomunicaciones", cred: 1, prq: ["1704184", "1704185"] },
                            { codigo: "1704292", nombre: "Antenas", cred: 4, prq: ["1704186", "1704187"] },
                            { codigo: "1704293", nombre: "Laboratorio de Antenas", cred: 1, prq: ["1704186", "1704187"] },
                            { codigo: "1704294", nombre: "Microelectrónica en Radiofrecuencia", cred: 3, prq: ["1704184", "1704185"] },
                            { codigo: "1704295", nombre: "Laboratorio de Microelectrónica en Radiofrecuencia", cred: 1, prq: ["1704184", "1704185"] },
                            { codigo: "1704296", nombre: "Internetworking 2", cred: 3, prq: ["1704188", "1704189"] },
                            { codigo: "1704297", nombre: "Laboratorio de Internetworking 2", cred: 1, prq: ["1704188", "1704189"] },
                            { codigo: "1704298", nombre: "Análisis de Circuitos en Alta Frecuencia (E)", cred: 2, prq: ["1702229"] },
                            { codigo: "1704299", nombre: "Laboratorio de Análisis de Circuitos en Alta Frecuencia (E)", cred: 1, prq: ["1702229"] }
                        ]
                    }
                ]
            },
            {
                numero: "Quinto Año",
                semestres: [
                    {
                        nombre: "Primer Semestre",
                        cursos: [
                            { codigo: "1705165", nombre: "Dimensionamiento de Sistemas de Energía (E)", cred: 3, prq: ["1704152"] },
                            { codigo: "1705166", nombre: "Proyecto Final 1", cred: 4, prq: ["1703241"] },
                            { codigo: "1705167", nombre: "Legislación y Regulación en Telecomunicaciones (E)", cred: 3, prq: [] },
                            { codigo: "1705168", nombre: "Instrumentación 2", cred: 2, prq: ["1704290", "1704291", "1703280", "1703281"] },
                            { codigo: "1705169", nombre: "Laboratorio de Instrumentación 2", cred: 1, prq: ["1704290", "1704291", "1703280", "1703281"] },
                            { codigo: "1705170", nombre: "Sistemas de Radio Digital y Microondas", cred: 3, prq: ["1704292", "1704293"] },
                            { codigo: "1705171", nombre: "Laboratorio de Sistemas de Radio Digital y Microondas", cred: 1, prq: ["1704292", "1704293"] },
                            { codigo: "1705172", nombre: "Dispositivos de Fibra Óptica", cred: 3, prq: ["1704186", "1704187", "1704296", "1704297"] },
                            { codigo: "1705173", nombre: "Laboratorio de Dispositivos de Fibra Óptica", cred: 1, prq: ["1704186", "1704187", "1704296", "1704297"] },
                            { codigo: "1705174", nombre: "Ingeniería de Sonido y Video Digital (E)", cred: 2, prq: ["1704294", "1704295"] },
                            { codigo: "1705175", nombre: "Laboratorio de Ingeniería de Sonido y Video Digital (E)", cred: 1, prq: ["1704294", "1704295"] }
                        ]
                    },
                    {
                        nombre: "Segundo Semestre",
                        cursos: [
                            { codigo: "1705273", nombre: "Sistemas de Telecomunicaciones Emergentes (E)", cred: 3, prq: ["1705170", "1705171", "1705172", "1705173"] },
                            { codigo: "1705274", nombre: "Broadcasting para Radio y Televisión Digital (E)", cred: 3, prq: ["1705174", "1705175"] },
                            { codigo: "1705276", nombre: "Economía y Política", cred: 2, prq: ["1701217"] },
                            { codigo: "1705277", nombre: "Prácticas Pre Profesionales", cred: 2, prq: [] },
                            { codigo: "1705278", nombre: "Trabajo de Investigación", cred: 3, prq: ["1703241", "1705166"] },
                            { codigo: "1705279", nombre: "Telefonía Celular", cred: 3, prq: ["1705170", "1705171"] },
                            { codigo: "1705280", nombre: "Laboratorio de Telefonía Celular", cred: 1, prq: ["1705170", "1705171", "1705172", "1705173"] },
                            { codigo: "1705281", nombre: "Comunicación Satelital", cred: 3, prq: ["1705170", "1705171"] },
                            { codigo: "1705282", nombre: "Laboratorio de Comunicación Satelital", cred: 1, prq: ["1705170", "1705171"] },
                            { codigo: "1705283", nombre: "Redes Inalámbricas", cred: 3, prq: ["1705170", "1705171"] },
                            { codigo: "1705284", nombre: "Laboratorio de Redes Inalámbricas", cred: 1, prq: ["1705170", "1705171"] },
                            { codigo: "1705285", nombre: "Redes de Comunicaciones Ópticas", cred: 3, prq: ["1705172", "1705173"] },
                            { codigo: "1705286", nombre: "Laboratorio de Redes de Comunicaciones Ópticas", cred: 1, prq: ["1705172", "1705173"] }
                        ]
                    }
                ]
            }
        ]
    },
    "2025": {
        nombre: "Plan de Estudios 2025",
        anios: [
            // Aquí conservamos la estructura del Plan 2025
        ]
    }
};
