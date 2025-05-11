<<<<<<< HEAD
(() => {
    const cards = document.querySelectorAll('.card[id^="quest_"]');
    cards.forEach((card) => {
        const correctOption = parseInt(card.querySelector('.option_correct')?.textContent.trim());
        const orderAnswer = card.querySelector('.order_answer')?.textContent.trim();
        const listItems = Array.from(card.querySelectorAll('.list-group-item'));
        const position = orderAnswer.indexOf(correctOption);
        listItems[position].classList.add('active')
        
    });

=======
(() => {
    const cards = document.querySelectorAll('.card[id^="quest_"]');

    cards.forEach((card, index) => {
        const correctOption = parseInt(card.querySelector('.option_correct')?.textContent.trim());
        const orderAnswer = card.querySelector('.order_answer')?.textContent.trim();
        const listItems = Array.from(card.querySelectorAll('.list-group-item'));

        if (!correctOption || !orderAnswer || listItems.length === 0) {
            console.warn(`No se pudo procesar la pregunta #${index + 1}`);
            return;
        }

        const correctOriginalIndex = parseInt(orderAnswer[correctOption - 1]) - 1;

        listItems.forEach((item, idx) => {
            item.classList.remove('active', 'wrong');
            if (idx === correctOriginalIndex) {
                item.classList.add('active');
            } else {
                item.classList.add('wrong');
            }
        });

        console.log(` #${index + 1}: ${correctOriginalIndex + 1}`);
    });

>>>>>>> 8399efd0777e7dd97e3d451d0d3bbc9929074108
})();