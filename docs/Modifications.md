# Modificação

### Modificação feita no **Desafio 3** para executar o **Desafio 4**

1. `npm install express dotenv mysql2`
2. `npm install --save-dev nodemon`
3. `npx eslint --init`
4. No package.json foi incluido um script NPM `lint` e `lint:fix` para fazer a execução do Lint
5. Foi feita a inclusão dos arquivos .env
6. Foi modificiado o .gitIgnore
7. Foi mmodificado o README para incluir processo de inclusão do docker e banco de dados
8. Foi renomeado o arquivo `./src/index.js` para `./src/scrap.js`
9. No package.json foi alterado o script NPM `"start": "node src/index.js"` do  para `exe:scrap`
10. No package.json foi incluido um script NPM `exe:api` para rodar a API usando Express
11. O arquivo `./api/getDataPosts.js` foi movido para a pasta `./utils/`
12. Foi criado na pasta `./api/` os arquivos `app.js` e `server.js` com um esqueleto simples copiado do modelo do professor
13. Foi criada na pasta `./api/` a pasta `./api/shared/middlewares` que será necessária em virtude da exigência do desafio
