import express, { Router } from 'express';
import { createQuestionnaire, deleteQuestionnaire, getAllQuestionnaires, getQuestionnaire, updateQuestionnaire, getQuestionnaireUser } from '../controllers/questionnaires';

const router: Router = express.Router();

router.get("/:id", getQuestionnaire)
router.get("/", getAllQuestionnaires)
router.post("/", createQuestionnaire)
router.put("/:id", updateQuestionnaire)
router.delete("/:id", deleteQuestionnaire)
router.get("/:id/user", getQuestionnaireUser)

export default router;
