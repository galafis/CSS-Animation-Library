document.addEventListener('DOMContentLoaded', () => {
    const animationCards = document.querySelectorAll('.animation-card');

    animationCards.forEach(card => {
        const button = card.querySelector('.btn-small');
        const animationBox = card.querySelector('.animation-box');
        const animationClass = animationBox.classList[1]; // Pega a classe de animação

        button.addEventListener('click', () => {
            // Remove a classe para reiniciar a animação
            animationBox.classList.remove(animationClass);
            // Força o reflow para reiniciar a animação
            void animationBox.offsetWidth;
            // Adiciona a classe novamente
            animationBox.classList.add(animationClass);
        });
    });
});

function applyAnimation(button, animationClass) {
    const box = button.previousElementSibling;
    box.classList.remove(animationClass);
    // Força o reflow para reiniciar a animação
    void box.offsetWidth;
    box.classList.add(animationClass);
}

