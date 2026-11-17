// =============================================
// EDITA AQUÍ TU TARJETA DIGITAL
// Para añadir enlaces, copia un bloque de la lista.
// Grupos disponibles: "redes", "contacto", "paginas"
// Iconos disponibles: "instagram", "linkedin", "github", "correo", "telefono", "web"
// =============================================
window.TARJETA = {
  nombre: "Hèctor Torres Vicente",
  bio: "Mis redes, proyectos y datos de contacto en un único lugar.",
  url: "https://hectortorresvicente.github.io/enlaces/",

  enlaces: [
    {
      grupo: "redes",
      titulo: "Instagram",
      detalle: "@htr_torresvi",
      url: "https://www.instagram.com/htr_torresvi/",
      icono: "instagram"
    },
    {
      grupo: "redes",
      titulo: "LinkedIn",
      detalle: "Perfil profesional",
      url: "https://es.linkedin.com/in/hector-torres-vicente",
      icono: "linkedin"
    },
    {
      grupo: "redes",
      titulo: "GitHub",
      detalle: "Código y proyectos",
      url: "https://github.com/hectortorresvicente",
      icono: "github"
    },
    {
      grupo: "contacto",
      titulo: "Correo electrónico",
      detalle: "hector.torres.vicente@gmail.com",
      url: "mailto:hector.torres.vicente@gmail.com",
      icono: "correo"
    },
    {
      grupo: "contacto",
      titulo: "Llamar por teléfono",
      detalle: "+34 655 954 002",
      url: "tel:+34655954002",
      icono: "telefono"
    }

    // AÑADIR OTRA PÁGINA: añade una coma tras el último bloque y pega esto:
    // ,{
    //   grupo: "paginas",
    //   titulo: "Mi nueva página",
    //   detalle: "Descripción breve",
    //   url: "https://mi-web.com",
    //   icono: "web"
    // }
  ]
};
