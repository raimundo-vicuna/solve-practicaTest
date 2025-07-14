(() => {
    console.log('© 2025 rai. Uso y distribución permitidos bajo licencia estándar.')
    const cards = document.querySelectorAll('.card[id^="quest_"]');
    cards.forEach((card) => {
        const correctOption = parseInt(card.querySelector('.option_correct')?.textContent.trim());
        const orderAnswer = card.querySelector('.order_answer')?.textContent.trim();
        const listItems = Array.from(card.querySelectorAll('.list-group-item'));
        const position = orderAnswer.indexOf(correctOption);
        listItems[position].classList.add('active')
        console.log(`Correct Option: ${correctOption}\n Order Answer: ${orderAnswer}\n List Items: ${listItems}\n Position: ${position}`)
        
    });

})();