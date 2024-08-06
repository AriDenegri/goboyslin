document.addEventListener("DOMContentLoaded", function() {
    // Lista de ids de botones y sus correspondientes contenidos
    const sections = [
        { buttonId: 'newsButton', contentId: 'contenido1' },
        { buttonId: 'sobreLaCuevaButton', contentId: 'contenido2' },
        { buttonId: 'albumesButton', contentId: 'contenido3' },
        { buttonId: 'goblinsShopButton', contentId: 'contenido4' },
        { buttonId: 'individualTracksButton', contentId: 'contenido5' }
    ];

    // Función para manejar el clic en los botones
    sections.forEach(section => {
        const button = document.getElementById(section.buttonId);
        const content = document.getElementById(section.contentId);
        
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevenir la acción predeterminada del enlace

            // Desvanece el contenido actual
            const visibleContent = document.querySelector('.contenido.visible');
            if (visibleContent && visibleContent !== content) {
                visibleContent.classList.remove('visible');
                // Asegúrate de ocultar el contenido después de la transición
                setTimeout(() => {
                    visibleContent.style.display = 'none';
                }, 0.5); // Tiempo igual al de la transición de opacidad
            }

            // Muestra el nuevo contenido con desvanecimiento
            content.style.display = 'block';
            setTimeout(() => {
                content.classList.add('visible');
            }, 50); // Pequeño retraso para activar la transición
        });
    });
});
