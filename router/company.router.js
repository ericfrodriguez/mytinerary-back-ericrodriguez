import express from 'express';
import companyController from '../controllers/company.controller.js';

const router = express.Router();

router.get('/', companyController.getCompany);

router.post('/', companyController.createCompany);

export default router;