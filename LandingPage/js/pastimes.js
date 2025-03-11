// Obtener todos los spans de pasatiempos y los popups
const spans = document.querySelectorAll('.testimony__course');
const popups = document.querySelectorAll('.popup');

// Agregar eventos para cada span
spans.forEach((span) => {
    span.addEventListener('click', () => {
        // Ocultar cualquier popup visible
        popups.forEach((popup) => popup.style.display = 'none');

        // Mostrar el popup correspondiente
        const popupId = span.id.replace('student', 'hobbies');
        const popup = document.getElementById(popupId);

        if (popup) {
            const rect = span.getBoundingClientRect();
            popup.style.left = `${rect.left}px`;
            popup.style.top = `${rect.bottom + window.scrollY}px`;
            popup.style.display = 'block';
        }
    });
});

// Ocultar popup al hacer clic fuera de él
document.addEventListener('click', (event) => {
    if (!event.target.classList.contains('testimony__course')) {
        popups.forEach((popup) => popup.style.display = 'none');
    }
});
