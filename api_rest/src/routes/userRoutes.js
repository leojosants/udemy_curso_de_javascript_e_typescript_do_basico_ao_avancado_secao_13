import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

router.post('/', userController.store);

export default router;

/**
 * Metodos necessarios em um controller
 * index - lista todos os usuarios
 *  verbo:
 *    - GET
 *
 * store - cria um novo usuario
 *  verbo:
 *    - POST
 *
 * delete - apaga um usuario
 *  verbo:
 *    - DELETE
 *
 * show - mostra um usuario
 *  verbo:
 *    - GET
 *
 * update - atualiza um usuario
 *  verbo:
 *    - PATCH ->  altera somente um valor
 *    - PUT   ->  substitui toto o objeto
 */
