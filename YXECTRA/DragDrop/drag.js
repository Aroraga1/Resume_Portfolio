const card = document.querySelector(`.card`);
const Dragen = document.querySelector(`.Dragen`);

card.addEventListener('dragstart', function(event){
    console.log(event);
})
Dragen.addEventListener('dragover', function(event){
    event.preventDefault();
})
Dragen.addEventListener('drop', function(event){
Dragen.prepend(card);   
})
