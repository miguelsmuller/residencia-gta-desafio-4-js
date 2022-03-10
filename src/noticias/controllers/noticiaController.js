const { Router } = require('express');
const authMiddleware = require('../../api/shared/middlewares/authMiddleware');


class NoticiaController {
    constructor(noticiaModel) {
        this.noticiaModel = noticiaModel;
    }

    buildRouter() {
        const router = Router();
        router.get('/search', authMiddleware, this.handleGetNoticias.bind(this));
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
