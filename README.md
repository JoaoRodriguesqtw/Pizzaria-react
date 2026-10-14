# Funerária Pizzaria

Projeto desenvolvido em **React** com **Vite**, criado como uma interface temática de uma pizzaria inspirada em uma funerária. A aplicação apresenta um cardápio, um contador de pessoas para reservas e um carrinho de itens selecionados.

## Demonstração

A aplicação possui uma interface com:

- Tema escuro;
- Identidade visual em vermelho e tons terrosos;
- Logotipo da Pizzaria Hydra;
- Cardápio temático;
- Contador de pessoas para reserva;
- Carrinho de pizzas;
- Layout responsivo para dispositivos móveis;
- Configuração preparada para publicação no GitHub Pages.

## Funcionalidades

### Cardápio

A aplicação exibe os pratos disponíveis no cardápio:

| Produto | Preço | Disponibilidade |
|---|---:|---|
| Pizza de cérebro | R$ 45,00 | Disponível |
| Pizza de coração humano | R$ 85,00 | Disponível |
| Pizza de fígado humano | R$ 45,00 | Disponível |
| Sorvete de pele humana | R$ 45,00 | Esgotado |

Os produtos são armazenados atualmente em listas estáticas dentro dos componentes React.

### Contador de reserva

O componente de contador permite definir para quantas pessoas será feita a reserva.

É possível:

- Aumentar a quantidade de pessoas;
- Diminuir a quantidade de pessoas;
- Impedir que o valor fique abaixo de 1.

### Carrinho

O carrinho permite adicionar alguns produtos por meio de botões:

- Pizza de cérebro;
- Pizza de coração;
- Pizza de fígado.

Os itens são armazenados utilizando o estado local do React.

> O carrinho ainda está em desenvolvimento e não possui persistência de dados, cálculo de total ou integração com backend.

## Tecnologias utilizadas

- [React](https://react.dev/ ) `19.2.8`
- [React DOM](https://react.dev/reference/react-dom ) `19.2.8`
- [Vite](https://vite.dev/ ) `8.3.0`
- JavaScript
- JSX
- CSS3
- React Hooks
- ESLint
- GitHub Pages
- `gh-pages`

## Pré-requisitos

Antes de executar o projeto, certifique-se de possuir:

- [Node.js](https://nodejs.org/ ) instalado;
- npm instalado junto com o Node.js;
- Git, caso queira versionar ou publicar o projeto;
- Um navegador moderno.

Recomenda-se utilizar uma versão recente do Node.js, como a versão 20 ou superior.

Para verificar as versões instaladas:

```bash
node --version
npm --version
