![Imgur](https://i.imgur.com/j9JmM4L.png)

# **Trilha Específica - Desafio 3 - JavaScript - Parte 1**

## **Grupo 06**

- [Miguel Müller](https://github.com/devcarlosl)
- [Rodrigo Rios](https://github.com/Rodrigo-Rios)

<br/>

## **Requerimentos do Projeto**
Certifique-se que que você tenha o **[NodeJS](https://nodejs.org/)** e **[NPM](https://www.npmjs.com/)** instalado em seu computador.

- `$ node --version` and `$ npm --version`

<br/>

**Instalar dependências** do projeto com:

- `$ yarn install` ou `$ npm install`

<br/>

## **Banco de Dados**

### Utilizando Docker

É necessário ter um SGBD disponível para utilização desse projeto caso seja necessário poderá ser utilizado o docker seguindo as intruções abaixo para carregar um container com MySQL.

Para o ambiente local onde tenha o docker instalado pode ser utilizado o seguinte comando para criação de um container com MySQL

- `docker run --name NOVONOMEENTRAAQUI-mysqldb -e MYSQL_DATABASE=NOVONOMEENTRAAQUI -e MYSQL_USER=user -e MYSQL_PASSWORD=user -e MYSQL_ROOT_PASSWORD=root -p 3306:3306 -d mysql:8.0.28`


### Schema do Banco de dados

Para manipulação fácil dos dados nesse desafio foi usado o [DBeaver](https://dbeaver.io/download/)

<br/>

Para executar o projeto localmente basta executar o comando:

- `$ yarn run start`
  ou
- `$ npm run start`

<br/>
