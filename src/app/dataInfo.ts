//Array de modulos

export const listMenu = [
  {
    namePrincipal: "Home",
    iconMenu: "home",
    path: "home",
    submenu: [{
      nameSubmenu: "Home",
      path: "home"
    }
    ]
  },
  {
    namePrincipal: "Global",
    iconMenu: "public",
    path: "tecnologia",
    submenu: [/* {
      nameSubmenu: "Metodología de proyectos",
      path: "metodproyect"
    }, */
    {
      nameSubmenu: "Tecnología",
      path: "tecnologia"
    },
    /* {
      nameSubmenu: "Uso de Azure DevOps, Scrum",
      path: "usoazure"
    },
    {
      nameSubmenu: "Distribucion de carpetas",
      path: "folderdistribution"
    } */
    ]
  },
  {
    namePrincipal: "Infraestructura",
    iconMenu: "cloud_queue",
    path: "recetas",
    submenu: [{
      nameSubmenu: "Recetas",
      path: "recetas"
    },
    {
      nameSubmenu: "HEALTH",
      path: "health"
    },
    {
      nameSubmenu: "Mapa de desarrollo",
      path: "developmap"
    },
    /* {
      nameSubmenu: "Uso de variables de ambiente Prod/Dev",
      path: "enviromentvariables"
    }, */
    {
      nameSubmenu: "Peticiones HTTP",
      path: "peticioneshttp"
    }
    ]
  },
  {
    namePrincipal: "Backend",
    iconMenu: "backup_table",
    path: "lineamientosGen",
    submenu: [{
      nameSubmenu: "lineamientos generales",
      path: "lineamientosGen"
    },
    {
      nameSubmenu: "APIs",
      path: "apis"
    },
    {
      nameSubmenu: "Buenas Practicas y código limpio",
      path: "backbuenaspracticas"
    },
    /* {
      nameSubmenu: "Azure Functions",
      path: "azurefunctions"
    } */
    ]
  },
  {
    namePrincipal: "Frontend",
    iconMenu: "code",
    path: "bem",
    submenu: [/* {
      nameSubmenu: "Buenas Practicas",
      path: "frontbuenaspracticas"
    }, */
    {
      nameSubmenu: "BEM",
      path: "bem"
    }
    ]
  },
  {
    namePrincipal: "Diseño",
    iconMenu: "brush",
    path: "reglasux",
    submenu: [{
      nameSubmenu: "Reglas UX",
      path: "reglasux"
    },
    {
      nameSubmenu: "Look and feel",
      path: "lookandfeel"
    },
    {
      nameSubmenu: "Paleta de Colores",
      path: "colorpalet"
    },
    {
      nameSubmenu: "Tipografía",
      path: "tipografia"
    },
    {
      nameSubmenu: "Manual de Marca",
      path: "brand"
    }
    ]
  },
];

// Titulos de modulo

export const tecnologyHead =
{
  icon: "developer_board",
  title: "Tecnología",
  subtitle: "Aquí podrá consultar las tecnologías definidas para el desarrollo de las plataforma LOGYCA."
};

export const prescriptions =
{
  icon: "science",
  title: "Recetas",
  subtitle: "Consulte como realizar las recetas para las plataformas LOGYCA."
};

export const healthTokenHead =
{
  icon: "health_and_safety",
  title: "Health Token",
  subtitle: "El health es fundamental en todo desarrollo LOGYCA para realizar el seguimiento y monitoreo de las plataformas"
};

export const developMap =
{
  icon: "schema",
  title: "Mapa de desarrollo",
  subtitle: "En el siguiente mapa mental se define la estructura de todo desarrollo LOGYCA. Se sugiere estructurar las lluvias de ideas de reuniones y actualizarlos constantemente para no perder las sugerencias de los equipos. Estos mapas pueden ser utilizados como actas de reuniones y sirven de insumo para documentos posteriores."
};

export const requests =
{
  icon: "http",
  title: "Objeto genérico de respuestas a peticiones HTTP",
  subtitle: "Especificaciones técnicas respuesta a peticiones HTTP curso y futuros en LOGYCA. Estas del desarrollador de software para la recepción y envío de (Request / Response) a implementar en los desarrollos en se convierten en un marco de referencia para el trabajo para la construcción de APIs y Backends indiferentemente la tecnología en la que estos estén construidos. Los ejemplos presentados durante este documento están en .Net, se deberá hacer el código homologo frameworks . cuando se utilicen otros framewoks."
};

export const guidlines =
{
  icon: "format_list_numbered",
  title: "Lienamientos generales",
  subtitle: "Consulte los lineamientos generales de Backend para las plataformas LOGYCA."
};

export const bestPracticsBack =
{
  icon: "thumb_up",
  title: "Buenas prácticas y código limpio Backend",
  subtitle: "Estándar básico de desarrollo para nuestro equipo LOGYCA que permita hablar un mismo idioma, de manera simple, fácil de entender, fácil de mantener, y con esto garantizar un grado de calidad considerable en nuestras creaciones."
};

export const apis =
{
  icon: "api",
  title: "APIs",
  subtitle: "Aquí podrá consultar el manejo de APIs para el desarrollo de las plataforma LOGYCA."
};

export const bem =
{
  icon: "integration_instructions",
  title: "Metodología BEM",
  subtitle: "Para el desarrollo de aplicaciones LOGYCA, se define la estructura del HTML y del SCSS bajo la metodología BEM."
};

export const ruleUXUI =
{
  icon: "domain_verification",
  title: "Reglas UX",
  subtitle: "A continueación, compartimos las 8 reglas de oro del diseño de interfaces, tomadas del libro Diseño de la interfaz de usuario: estrategias para una interacción humano-ordenador efectiva de Ben Shneiderman."
};

export const lookAndFeelHead =
{
  icon: "preview",
  title: "Look and Feel",
  subtitle: "Aquí podra consultar un ejemplo del diseño de pantallas para las plataformas LOGYCA"
};

export const colorPaletHead =
{
  icon: "palette",
  title: "Paleta de colores",
  subtitle: "Consulte la paleta de colores establecidos"
};

export const tipographicHead =
{
  icon: "spellcheck",
  title: "Tipografiá e iconografía",
  subtitle: "Consulte las tipografías e iconografía colores establecidas"
};

export const brandHead =
{
  icon: "insert_photo",
  title: "Manual de Marca",
  subtitle: "Consulte y descargue el manual de marca y los logos LOGYCA"
};

//infor de tabla de tecnología

export const displayColumns = [
  "module", "language", "framework"
];

export const technologyYTableCell = [
  {
    module: "Backend",
    language: "Python",
    framework: "Fast API"
  },
  {
    module: "Backend",
    language: "Python",
    framework: "Flask"
  },
  {
    module: "Backend",
    language: "Python",
    framework: "Django"
  },
  {
    module: "Backend",
    language: ".Net",
    framework: ".NET 6"
  },
  {
    module: "Frontend",
    language: "TypeScript",
    framework: "Angular o React"
  },
  {
    module: "Frontend",
    language: "Javascript",
    framework: "Angular o React"
  },
  {
    module: "Frontend",
    language: "HTML 5",
    framework: "Uso de metodología BEM para organización de código HTML"
  },
  {
    module: "Frontend",
    language: "SCSS",
    framework: "Uso de metodología BEM para organización de código SCSS"
  },
  {
    module: "BD",
    language: "SQL",
    framework: "Azure Postgress SQL"
  },
  {
    module: "BD",
    language: "SQL",
    framework: "Azure SQL Server"
  },
  {
    module: "Analítica",
    language: "Python",
    framework: "Pandas"
  },
  {
    module: "Analítica",
    language: "SQL",
    framework: "Azure Postgress SQL"
  },
  {
    module: "Analítica",
    language: "SQL",
    framework: "Azure SQL Server"
  },
  {
    module: "Analítica",
    language: "DAX",
    framework: "Power BI / Azure Analysis Services"
  },

];

// Paleta de colores

export const colorPaletInfo = [
  {
    namePalet: "Naranja",
    colors: [{
      nameColor: "Naranja Oscuro",
      code: "#C82E00"
    },
    {
      nameColor: "Naranja Primario",
      code: "#FC4C02"
    },
    {
      nameColor: "Naranja Claro",
      code: "#FF895C"
    }
    ]
  },
  {
    namePalet: "Indigo",
    colors: [{
      nameColor: "Indigo Oscuro",
      code: "#00765B"
    },
    {
      nameColor: "Indigo Primario",
      code: "#00B398"
    },
    {
      nameColor: "Indigo Claro",
      code: "#7ED4C3"
    }
    ]
  },
  {
    namePalet: "Gris",
    colors: [{
      nameColor: "Gris Oscuro",
      code: "#14150B"
    },
    {
      nameColor: "Gris Primario",
      code: "#51534A"
    },
    {
      nameColor: "Gris Claro",
      code: "#E6E6E6"
    }
    ]
  },
  {
    namePalet: "Background",
    colors: [{
      nameColor: "Header",
      code: "#E5E7E9"
    },
    {
      nameColor: "Body",
      code: "#f3f3f3"
    }
    ]
  },
  {
    namePalet: "Warn",
    colors: [{
      nameColor: "Warn Oscuro",
      code: "#D00017"
    },
    {
      nameColor: "Warn Primario",
      code: "#FC0234"
    },
    {
      nameColor: "Warn Claro",
      code: "#F76A75"
    }
    ]
  },
  {
    namePalet: "Caution",
    colors: [{
      nameColor: "Caution Oscuro",
      code: "#FF8D00"
    },
    {
      nameColor: "Caution Primario",
      code: "#FCCA02"
    },
    {
      nameColor: "Caution Claro",
      code: "#FDE07C"
    }
    ]
  },
  {
    namePalet: "Success",
    colors: [{
      nameColor: "Success Oscuro",
      code: "#007000"
    },
    {
      nameColor: "Success Primario",
      code: "#1CC200"
    },
    {
      nameColor: "Success Claro",
      code: "#A1E196"
    }
    ]
  },
  {
    namePalet: "Info",
    colors: [{
      nameColor: "Info Oscuro",
      code: "#007EC5"
    },
    {
      nameColor: "Info Primario",
      code: "#02B1FC"
    },
    {
      nameColor: "Info Claro",
      code: "#B4E8FE"
    }
    ]
  }
  
];

