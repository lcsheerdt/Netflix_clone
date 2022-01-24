function iniciaModal(modalID) {
    const modal = document.getElementById(modalID);

    if(modal) {
        modal.classList.add('mostrar');
        modal.addEventListener('click', (e) => {
            if(e.target.id == modalID || e.target.className == 'fechar') {
                modal.classList.remove('mostrar');
            }
        });
    }
}

const botao2 = document.querySelector('.botao2');
botao2.addEventListener('click', () => iniciaModal('mais-informacoes'));
console.log(botao2);