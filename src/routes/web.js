import express from 'express';
import homeController from '../controllers/homeController';

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/books', homeController.getBooksPage);
    router.get('/addbook', homeController.getAddBook);
    router.post('/postbook', homeController.postBook);
    router.get('/editbook', homeController.editBook);
    router.get('/putbook', homeController.putBook);
    router.get('/result', homeController.getResult);
    router.get('/order', homeController.getOrder);

    return app.use('/', router);
}

module.exports = initWebRoutes