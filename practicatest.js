(() => {
    const cards = document.querySelectorAll('.card[id^="quest_"]');
    cards.forEach((card) => {
        const correctOption = parseInt(card.querySelector('.option_correct')?.textContent.trim());
        const orderAnswer = card.querySelector('.order_answer')?.textContent.trim();
        const listItems = Array.from(card.querySelectorAll('.list-group-item'));
        const position = orderAnswer.indexOf(correctOption);
        listItems[position].classList.add('active')
        
    });

})();