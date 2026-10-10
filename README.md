# Funerária Pizzaria

Interface web experimental de uma pizzaria temática, desenvolvida com **React**. O projeto apresenta a identidade visual da marca Hydra e reúne um cardápio, um contador de pessoas para reserva e um carrinho de itens selecionados.

> **Status:** protótipo em desenvolvimento. A versão recebida contém a pasta `src/` e os assets da aplicação, mas não inclui os arquivos de configuração do projeto, como `package.json` e `index.html`.

## Funcionalidades

- Exibição do título e do logotipo da Pizzaria Hydra.
- Seção institucional com uma descrição temática.
- Listagem de pratos disponíveis e esgotados.
- Contador de pessoas para uma reserva, com controles para aumentar e diminuir a quantidade.
- Carrinho local com botões para adicionar pizzas.
- Layout responsivo para telas menores.
- Tema visual escuro, com detalhes em vermelho e tons terrosos.

## Tecnologias

- [React](https://react.dev/ )
- [Vite](https://vite.dev/ )
- JavaScript (JSX)
- CSS3
- React Hooks (`useState`)

## Estrutura do projeto

```text
.
├── README.md
└── src/
    ├── App.jsx                 # Componente raiz da aplicação
    ├── App.css                 # Estilos principais da interface
    ├── index.css               # Estilos globais
    ├── main.jsx                # Ponto de entrada do React
    ├── assets/
    │   ├── hero.png
    │   ├── react.svg
    │   └── vite.svg
    ├── components/
    │   ├── card.jsx            # Cardápio de pratos
    │   ├── carrinho.jsx        # Carrinho de reserva
    │   ├── contador.jsx        # Contador de pessoas
    │   └── header.jsx          # Seção “Sobre nós”
    └── img/
        └── hydra_sem_fundo.png # Logotipo da aplicação
