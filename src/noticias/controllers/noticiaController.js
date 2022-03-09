const { Router } = require('express');

class NoticiaController {
    constructor(noticiaModel) {
        this.noticiaModel = noticiaModel;
    }

    buildRouter() {
        const router = Router();
        router.get('/search', this.handleGetNoticias.bind(this));
        return router;
    }

    async handleGetNoticias(req, res) {
        const { query } = req;

        const news = await this.noticiaModel.search(query);
        res.json({
            news,
        });
    }

}

module.exports = NoticiaController
