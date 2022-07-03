# 🚀 Frontend challenge

Esta é a minha solução para o desafio Frontend da Wine!

# 🧠 Contexto

O desafio foi implementar um e-commerce para venda de vinhos com as seguintes funcionalidades:
- [x] Catálogo de produtos com paginação
- [x] Filtragem produtos por preço
- [x] Busca por nome do produto
- [x] Adicionar e remover produtos do carrinho

## 🧰 Tecnologias utilizadas

Para realizar o desafio utilizei as seguintes tecnologias e ferramentas:

- [Next.js](https://nextjs.org/)
- [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) para inicialização do projeto
- [Typescript](https://www.typescriptlang.org/)
- [styled-components](https://styled-components.com/)
- [Context API](https://pt-br.reactjs.org/docs/context.html)
- [Playwright](https://playwright.dev/) para os testes e2e
- [Local Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) para gerenciamento do carrinho
- [Vercel](https://vercel.com/) para deploy
# 📋 Instruções

Clone o projeto:

```bash
git clone git@github.com:israelss/frontend-challenge-wine.git
```

Após clonar o projeto, instale as dependências:

```bash
npm install
# ou
yarn
```

# ⚙️ Rodando o projeto

## Modo de Desenvolvimento

Inicie o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
npx next dev
```

Abra [http://localhost:3000](http://localhost:3000).
Edite os arquivos para ver as mudanças automaticamente refletidas no navegador.

## Modo de Produção

Compile o projeto:

```bash
npm run build
# ou
yarn build
# ou
npx next build
```

### Localmente

Inicie o servidor compilado localmente:

```bash
npm run start
# ou
yarn start
# ou
npx next start
```

### Deploy:

Utilize a [Plataforma Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) dos criadores do Next.js.

Ou veja outras opções na [documentação sobre deploy do Next.js](https://nextjs.org/docs/deployment).
