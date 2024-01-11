import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', userController.store);
router.get('/', loginRequired, userController.index);
router.get('/:id', userController.show);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

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
 *    - PUT   ->  substitui todo o objeto
 */
