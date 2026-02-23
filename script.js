const cardList = document.getElementById('card-list');
const addBtn = document.getElementById('add-card');
const qInput = document.getElementById('question');
const aInput = document.getElementById('answer');

function createCard(q, a) {
    const card = document.createElement('div');
    card.className = 'flashcard';
    
    card.innerHTML = `
        <div class="card-inner">
            <div class="card-front"><strong>${q}</strong></div>
            <div class="card-back">${a}</div>
        </div>
    `;

   
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });

    cardList.appendChild(card);
}

addBtn.addEventListener('click', () => {
    if (qInput.value && aInput.value) {
        createCard(qInput.value, aInput.value);
        qInput.value = '';
        aInput.value = '';
    } else {
        alert("Please fill both fields!");
    }
});