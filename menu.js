let produtos = [
    {
        id: 0,
        imagem: "mario.jpg",
        produto: "Chaveiro mario word",
        valor: 15.0,
    },
    {
        id: 1,
        imagem: "manga.webp",
        produto: "Mangá Jujutso Vol. 0",
        valor: 42.0,
    },
    {
        id: 2,
        imagem: "inosuke.jpg",
        produto: "Inosuke Demons slayer ",
        valor: 120.0,
    },
    {
        id: 3,
        imagem: "luminaria.webp",
        produto: "Luminaria Pac-MAn",
        valor: 85.0,
    },
    {
        id: 4,
        imagem: "jiraia.webp",
        produto: "Miniatura mestre Jiraya",
        valor: 110.0,
    },
    {
        id: 5,
        imagem: "harry.webp",
        produto: "Miniatura Herry Potter",
        valor: 110.0,
    },
    {
        id: 6,
        imagem: "loki.jpg",
        produto: "Miniatura LOKI Marvel",
        valor: 110.0,
    },
    {
        id: 7,
        imagem: "KIT.webp",
        produto: "Combo Fã Naruto",
        valor: 140.0,
    },
    {
        id: 8,
        imagem: "FLSH.webp",
        produto: "The Flash DC comics", 
        valor: 150.0,
    },
];

// Função para ler os produtos
function lerProdutos() {
    const cards = document.getElementById("cards");
    cards.innerHTML = "";
    produtos.forEach((produto) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="${produto.imagem}" alt="Imagen do produto">
            <div class="card-container--info">
                <p>${produto.produto}</p>
                <div class="card-container--value">
                    <p>R$ ${produto.valor.toFixed(2)}</p>
                    <img class="lixo" src="lixo.png" alt="Ícone do Lixo" onclick="deleteProduto(${produto.id})">
                    <img class="editar" src="lapis.png" alt="Ícone de Edição" onclick="updateProduto(${produto.id})">
                </div>
            </div>
        `;
        cards.appendChild(card);
    });
}

// Função para criar um novo produto
function createProduto() {
    const form = document.getElementById("form-produto");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const nome = document.getElementById("nome").value;
        const valor = parseFloat(document.getElementById("valor").value);
        const imagem = document.getElementById("imagem").value;
        if (nome && valor && imagem) {
            const novoProduto = {
                id: produtos.length,
                imagem,
                produto: nome,
                valor,
            };
            produtos.push(novoProduto);
            lerProdutos();
            form.reset();
        } else {
            alert("Preencha todos os campos!");
        }
    });
}

// Função para deletar um produto
function deleteProduto(id) {
    if (confirm("Tem certeza que deseja excluir o produto?")) {
        produtos = produtos.filter((produto) => produto.id !== id);
        lerProdutos();
        if (produtos.length === 0) {
            alert("Nenhum produto encontrado!");
        }
    }
}

// Função para atualizar um produto
function updateProduto(id) {
    const produto = produtos.find((produto) => produto.id === id);
    if (produto) {
        const nome = prompt("Novo nome do produto:");
        const valor = parseFloat(prompt("Novo valor do produto:"));
        const imagem = prompt("Nova imagem do produto:");
        if (nome && valor && imagem) {
            produto.produto = nome;
            produto.valor = valor;
            produto.imagem = imagem;
            lerProdutos();
            alert("Produto atualizado com sucesso!");
        } else {
            alert("Produto não encontrado!");
        }
    }
}

// Função para editar um produto
function editProduto(id) {
    const produto = produtos.find((produto) => produto.id === id);
    if (produto) {
        const nome = prompt("Novo nome do produto:");
        const valor = parseFloat(prompt("Novo valor do produto:"));
        const imagem = prompt("Nova imagem do produto:");
        if (nome && valor && imagem) {
            produto.produto = nome;
            produto.valor = valor;
            produto.imagem = imagem;
            lerProdutos();
            alert("Produto atualizado com sucesso!");
        } else {
            alert("Produto não encontrado!");
        }
    }
}

// Inicializar a leitura dos produtos
lerProdutos();

// Inicializar a criação de produtos
createProduto();