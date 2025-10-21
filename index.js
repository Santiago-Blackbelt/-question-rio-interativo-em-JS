const texto = window.document.getElementById('texto1');

const botao = window.document.getElementById('botao1');

const input = window.document.getElementById('texto');

botao.addEventListener('click',adicionarTarefa);

function adicionarTarefa(){
    const textodigitado = input.value.trim();
    if(textodigitado === '') return;

    const item = window.document.createElement('li');

    item.textContent = textodigitado;

    texto.appendChild(item);
    input.value = '';
}

/* Aperta o botão com o enter e não só com o cursor */
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault(); // ⛔ impede o reload da página
    adicionarTarefa();
  }
});


