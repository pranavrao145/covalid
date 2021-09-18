import exp from 'constants';
import express from 'express';
import { get } from 'https';
import { createQuestionnaire, deleteQuestionnaire, getAllQuestionnaires, getQuestionnaire, updateQuestionnaire } from '../controllers/questionnaires';

const router = express.Router();
router.get("/questionnaires/:uid",getQuestionnaire)
router.get("/questionnaires",getAllQuestionnaires)
router.post("/questionnaires", createQuestionnaire)
router.put("/questionnaires/:uid", updateQuestionnaire)
router.delete("/questionnaires/:uid",deleteQuestionnaire)

export default router;

