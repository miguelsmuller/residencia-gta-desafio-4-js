require('dotenv/config')
require('dotenv').config()

const fs = require('fs')
const path = require('path')
const dbConnection = require('../../config/dbConnection')
const NoticiaModel = require('../../noticias/models/noticiaModel')

const model = new NoticiaModel(dbConnection)

const file = path.join(__dirname, '../../../public_html/noticiasFromG1.json')

const rawdata = fs.readFileSync(file)
const noticias = JSON.parse(rawdata)

async function inserirNoticia(noticia) {
    console.log("Solicitação iniciada")
    return await model.create({
        title: noticia.title,
        newsUrl: noticia.href,
        subtitle: noticia.subtitle,
        imageUrl: noticia.image,
        relatedNews: JSON.stringify(noticia.linkArticle)
    })
}

async function main() {
    for (let noticia of noticias) {
        await inserirNoticia(noticia).then(() => {
            console.log("Execução da solicitação finalizada")
        })
    }
    dbConnection.end();
    console.log("Fim do laço de repetição");
}

main();