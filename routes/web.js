import express from "express";
const router = express.Router();
import userController from "../controllers/userController.js";

router.get('/', userController.getAllDoc)
router.post('/', userController.createDoc)
router.get('/edit/:id', userController.editDoc)
router.post('/update/:id', userController.updateDocById)
router.post('/delete/:id', userController.deleteDocById)

export default router;