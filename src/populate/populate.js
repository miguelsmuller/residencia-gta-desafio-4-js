const fs = require('fs')
const path = require('path')
const dbConnection = require('../config/dbConnection')
const NoticiaModel = require('../noticias/models/noticiaModel')

const model = new NoticiaModel(dbConnection)

const file = path.join(__dirname, '../../public_html/noticiasFromG1.json')

const rawdata = fs.readFileSync(file)
const noticias = JSON.parse(rawdata)


noticias.forEach((noticia) => {
    const {
        image,
        title,
        href,
        subtitle,
        linkArticle
    } = noticia

    model.create({
        title: title,
        newsUrl: href,
        subtitle: subtitle,
        imageUrl: image,
        relatedNews: linkArticle
    }).then((data) => {
        //console.log(data)
    })
    return true
})

