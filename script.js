document.addEventListener("DOMContentLoaded", function() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar o header:', error));
});

document.addEventListener("DOMContentLoaded", function() {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar o footer:', error));
});

/*
function ColetarUser()
{
    const NomeUser = prompt('bem vindo novo usuario! Digite seu nome para podermos liberar o acesso ao site!!!')
    console.log('nome: NomeUser salvo!')
    if(NomeUser !==null)
        {
        localStorage.setItem('visitou', true);
        alert('Olá NomeUser !!!');
        }
        if (!localStorage.getItem('visitou')) 
        {
        ColetarUser();
        }
}
*/

