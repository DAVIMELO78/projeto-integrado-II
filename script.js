let carrinho = [];
let total = 0;

function adicionarAoCarrinho(elemento) {
    const produto = elemento.parentElement;
    const nome = produto.querySelector('.card-title').textContent;
    const preco = parseFloat(produto.querySelector('.card-text').textContent.replace('Preço: R$', ''));

    carrinho.push({ nome, preco });
    atualizarCarrinho();
}

function removerDoCarrinho(index) {
    carrinho.splice(index, 1);
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const itensCarrinho = document.getElementById('itens-carrinho');
    const totalElement = document.getElementById('total');
    
    // Limpa o carousel antes de adicionar
    itensCarrinho.innerHTML = '';

    total = 0; // Reseta o total

    carrinho.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('carousel-item', 'item-carrinho', 'animate__animated', 'animate__fadeIn');
        itemDiv.innerHTML = `${item.nome} - R$${item.preco.toFixed(2)} <button onclick="removerDoCarrinho(${index})">Remover</button>`;
        itensCarrinho.appendChild(itemDiv);
        total += item.preco;
    });

    if (carrinho.length > 0) {
        const firstItem = itensCarrinho.querySelector('.carousel-item');
        firstItem.classList.add('active');
    }

    totalElement.textContent = total.toFixed(2);
}

function finalizarCompra() {
    const formaPagamento = document.querySelector('input[name="pagamento"]:checked');
    if (!formaPagamento) {
        alert('Selecione uma forma de pagamento!');
        return;
    }

    alert(`Compra finalizada com sucesso!\nTotal: R$${total.toFixed(2)}\nForma de pagamento: ${formaPagamento.nextSibling.textContent.trim()}`);
    carrinho = [];
    atualizarCarrinho();
}
