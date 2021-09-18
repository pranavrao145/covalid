
import express from 'express';

import { createQuestionnaire, deleteQuestionnaire, getAllQuestionnaires, getQuestionnaire, updateQuestionnaire } from '../controllers/questionnaires';

const router = express.Router();
router.get("/:uid",getQuestionnaire)
router.get("/",getAllQuestionnaires)
router.post("/", createQuestionnaire)
router.put("/:uid", updateQuestionnaire)
router.delete("/:uid",deleteQuestionnaire)

export default router;

