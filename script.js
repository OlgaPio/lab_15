function mostrarMensaje(seccion) {
    switch (seccion) {
        case "inicio":
            alert("Bienvenido al inicio del Laboratorio 15.");
            break;
        case "acerca":
            alert("Aquí conocerás más sobre este laboratorio.");
            break;
        case "contacto":
            alert("Contáctanos para más información.");
            break;
        default:
            alert("Sección no encontrada.");
    }
}
