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
            {
                numero: "Primer Año",
                semestres: [
                    {
                        nombre: "Primer Semestre",
                        cursos: [
                            { codigo: "2501101", nombre: "Metodología del Trabajo Académico", cred: 4, prq: [] },
                            { codigo: "2501102", nombre: "Matemática Básica", cred: 4, prq: [] },
                            { codigo: "2501103", nombre: "Introducción a la Ingeniería", cred: 3, prq: [] },
                            { codigo: "2501104", nombre: "Cálculo en una Variable", cred: 5, prq: [] },
                            { codigo: "2501105", nombre: "Física I", cred: 4, prq: [] },
                            { codigo: "2501106", nombre: "Laboratorio de Física I", cred: 1, prq: [] },
                            { codigo: "2501107", nombre: "Diseño Gráfico para Telecomunicaciones", cred: 2, prq: [] },
                            { codigo: "2501108", nombre: "Laboratorio de Diseño Gráfico para Telecomunicaciones", cred: 1, prq: [] }
                        ]
                    },
                    {
                        nombre: "Segundo Semestre",
                        cursos: [
                            { codigo: "2501209", nombre: "Lingüística, Comprensión y Redacción Académica", cred: 3, prq: [] },
                            { codigo: "2501210", nombre: "Álgebra Lineal", cred: 4, prq: [] },
                            { codigo: "2501211", nombre: "Realidad Nacional", cred: 2, prq: [] },
                            { codigo: "2501212", nombre: "Cálculo en Varias Variables", cred: 5, prq: ["2501104"] },
                            { codigo: "2501213", nombre: "Física II", cred: 4, prq: ["2501105", "2501106"] },
                            { codigo: "2501214", nombre: "Laboratorio de Física II", cred: 1, prq: ["2501105", "2501106"] },
                            { codigo: "2501215", nombre: "Programación I", cred: 3, prq: [] },
                            { codigo: "2501216", nombre: "Laboratorio de Programación I", cred: 1, prq: [] }
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
                            { codigo: "2502117", nombre: "Ecuaciones Diferenciales", cred: 5, prq: ["2501210", "2501212"] },
                            { codigo: "2502118", nombre: "Electrotecnia I", cred: 4, prq: ["2501213", "2501214"] },
                            { codigo: "2502119", nombre: "Laboratorio de Electrotecnia I", cred: 1, prq: ["2501213", "2501214"] },
                            { codigo: "2502120", nombre: "Física III", cred: 4, prq: ["2501213", "2501214"] },
                            { codigo: "2502121", nombre: "Laboratorio de Física III", cred: 1, prq: ["2501213", "2501214"] },
                            { codigo: "2502122", nombre: "Ciudadanía e Interculturalidad", cred: 2, prq: [] },
                            { codigo: "2502123", nombre: "Programación II", cred: 3, prq: ["2501215", "2501216"] },
                            { codigo: "2502124", nombre: "Laboratorio de Programación II", cred: 1, prq: ["2501215", "2501216"] }
                        ]
                    },
                    {
                        nombre: "Segundo Semestre",
                        cursos: [
                            { codigo: "2502225", nombre: "Ecología y Conservación Ambiental", cred: 2, prq: [] },
                            { codigo: "2502226", nombre: "Electrotecnia II", cred: 4, prq: ["2502118", "2502119"] },
                            { codigo: "2502227", nombre: "Laboratorio de Electrotecnia II", cred: 1, prq: ["2502118", "2502119"] },
                            { codigo: "2502228", nombre: "Métodos Numéricos", cred: 4, prq: ["2502123", "2502124"] },
                            { codigo: "2502229", nombre: "Señales y Sistemas", cred: 4, prq: ["2501212", "2502117"] },
                            { codigo: "2502230", nombre: "Teoría de Campos Electromagnéticos", cred: 5, prq: ["2502120", "2502121"] }
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
                            { codigo: "2503131", nombre: "Inglés", cred: 2, prq: [] },
                            { codigo: "2503132", nombre: "Estadística y Probabilidad para Telecomunicaciones", cred: 3, prq: [] },
                            { codigo: "2503133", nombre: "Desarrollo Emocional, Gestión de Conflictos y Liderazgo", cred: 2, prq: [] },
                            { codigo: "2503134", nombre: "Dispositivos Electrónicos", cred: 3, prq: ["2502226", "2502227"] },
                            { codigo: "2503135", nombre: "Sistemas Digitales", cred: 3, prq: ["2502228"] },
                            { codigo: "2503136", nombre: "Laboratorio de Sistemas Digitales", cred: 1, prq: ["2502228"] },
                            { codigo: "2503137", nombre: "Telecomunicaciones I", cred: 4, prq: ["2502229", "2502230"] }
                        ]
                    },
                    {
                        nombre: "Segundo Semestre",
                        cursos: [
                            { codigo: "2503238", nombre: "Políticas Públicas y Anticorrupción", cred: 2, prq: [] },
                            { codigo: "2503239", nombre: "Microprocesador y Microcontrolador", cred: 3, prq: ["2503135", "2503136"] },
                            { codigo: "2503240", nombre: "Laboratorio de Microprocesador y Microcontrolador", cred: 1, prq: ["2503135", "2503136"] },
                            { codigo: "2503241", nombre: "Emprendedurismo e Innovación en Ingeniería", cred: 2, prq: [] },
                            { codigo: "2503242", nombre: "Circuitos Electrónicos", cred: 3, prq: ["2503134"] },
                            { codigo: "2503243", nombre: "Laboratorio de Circuitos Electrónicos", cred: 1, prq: ["2503134"] },
                            { codigo: "2503244", nombre: "Telecomunicaciones II", cred: 3, prq: ["2503137"] },
                            { codigo: "2503245", nombre: "Ingeniería de Mantenimiento (E)", cred: 3, prq: [] },
                            { codigo: "2503246", nombre: "Sistemas Operativos (E)", cred: 2, prq: [] },
                            { codigo: "2503247", nombre: "Laboratorio de Sistemas Operativos (E)", cred: 1, prq: [] },
                            { codigo: "2503248", nombre: "Sistemas Integrados de Gestión (E)", cred: 2, prq: ["2503132"] }
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
                            { codigo: "2504149", nombre: "Ética General y Deontología", cred: 1, prq: [] },
                            { codigo: "2504150", nombre: "Fundamentos de la Ciencia de los Datos", cred: 2, prq: [] },
                            { codigo: "2504151", nombre: "Procesamiento Digital de Señales", cred: 3, prq: ["2503239", "2503240"] },
                            { codigo: "2504152", nombre: "Laboratorio de Procesamiento Digital de Señales", cred: 1, prq: ["2503239", "2503240"] },
                            { codigo: "2504153", nombre: "Internetworking I", cred: 3, prq: ["2503239", "2503240"] },
                            { codigo: "2504154", nombre: "Laboratorio de Internetworking I", cred: 1, prq: ["2503239", "2503240"] },
                            { codigo: "2504155", nombre: "Líneas de Transmisión", cred: 3, prq: ["2503242", "2503243", "2503244"] },
                            { codigo: "2504156", nombre: "Radio Digital (E)", cred: 2, prq: [] },
                            { codigo: "2504157", nombre: "Laboratorio de Radio Digital (E)", cred: 1, prq: [] },
                            { codigo: "2504158", nombre: "Smart Cities (E)", cred: 2, prq: [] },
                            { codigo: "2504159", nombre: "Automatización y Control (E)", cred: 2, prq: [] }
                        ]
                    },
                    {
                        nombre: "Segundo Semestre",
                        cursos: [
                            { codigo: "2504260", nombre: "Machine Learning", cred: 3, prq: ["2504151", "2504152"] },
                            { codigo: "2504261", nombre: "Gestión de Proyectos", cred: 3, prq: ["2503241"] },
                            { codigo: "2504262", nombre: "Ingeniería de Microondas", cred: 3, prq: ["2504155"] },
                            { codigo: "2504263", nombre: "Laboratorio de Ingeniería de Microondas", cred: 1, prq: ["2504155"] },
                            { codigo: "2504264", nombre: "Internetworking II", cred: 3, prq: ["2504153", "2504154"] },
                            { codigo: "2504265", nombre: "Laboratorio de Internetworking II", cred: 1, prq: ["2504153", "2504154"] },
                            { codigo: "2504266", nombre: "Dispositivos de Fibra Óptica", cred: 3, prq: ["2504155"] },
                            { codigo: "2504267", nombre: "Laboratorio de Dispositivos de Fibra Óptica", cred: 1, prq: ["2504155"] },
                            { codigo: "2504268", nombre: "Diseño de Redes Informáticas (E)", cred: 2, prq: [] },
                            { codigo: "2504269", nombre: "Laboratorio de Diseño de Redes Informáticas (E)", cred: 1, prq: [] },
                            { codigo: "2504270", nombre: "Ingeniería de Sonido y Video Digital (E)", cred: 2, prq: [] }
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
                            { codigo: "2505171", nombre: "Antenas y Compatibilidad Electromagnética", cred: 4, prq: ["2504262", "2504263"] },
                            { codigo: "2505172", nombre: "Laboratorio de Antenas y Compatibilidad Electromagnética", cred: 1, prq: ["2504262", "2504263"] },
                            { codigo: "2505173", nombre: "Ciberseguridad para Telecomunicaciones", cred: 3, prq: ["2504264", "2504265"] },
                            { codigo: "2505174", nombre: "Proyecto Final", cred: 4, prq: ["2504261"] },
                            { codigo: "2505175", nombre: "Gestión de Redes", cred: 4, prq: ["2504261"] },
                            { codigo: "2505176", nombre: "Redes de Comunicaciones Ópticas", cred: 3, prq: ["2504266", "2504267"] },
                            { codigo: "2505177", nombre: "Laboratorio de Redes de Comunicaciones Ópticas", cred: 1, prq: ["2504266", "2504267"] },
                            { codigo: "2505178", nombre: "Inteligencia Artificial para Telecomunicaciones (E)", cred: 3, prq: [] },
                            { codigo: "2505179", nombre: "Ingeniería de Radar (E)", cred: 3, prq: [] }
                        ]
                    },
                    {
                        nombre: "Segundo Semestre",
                        cursos: [
                            { codigo: "2505280", nombre: "Comunicaciones Inalámbricas", cred: 3, prq: ["2505171", "2505172"] },
                            { codigo: "2505281", nombre: "Laboratorio de Comunicaciones Inalámbricas", cred: 1, prq: ["2505171", "2505172"] },
                            { codigo: "2505282", nombre: "Comunicación Satelital", cred: 3, prq: ["2505171", "2505172"] },
                            { codigo: "2505283", nombre: "Laboratorio de Comunicación Satelital", cred: 1, prq: ["2505171", "2505172"] },
                            { codigo: "2505284", nombre: "Trabajo de Investigación", cred: 4, prq: ["2505174"] },
                            { codigo: "2505285", nombre: "Prácticas Pre-Profesionales", cred: 2, prq: [] },
                            { codigo: "2505286", nombre: "Legislación y Regulación en Telecomunicaciones (E)", cred: 3, prq: [] },
                            { codigo: "2505287", nombre: "Seminario de Tesis (E)", cred: 3, prq: [] },
                            { codigo: "2505288", nombre: "Tecnologías Emergentes (E)", cred: 3, prq: [] }
                        ]
                    }
                ]
            }
        ]
    }
};
