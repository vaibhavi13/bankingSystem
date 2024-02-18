// routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const { createAdmin, loginAdmin, getAdminById } = require('../controllers/adminController');
const { validatePassword } = require('../middleware/adminMiddleware');
const { authAdminProtect } = require('../middleware/authAdminMiddleware');

// Middleware to validate password strength on creation and update
router.post('/admins', validatePassword, createAdmin);
router.post('/admins/login', loginAdmin);

// Middleware to protect routes, ensuring only authorized admins can access them
router.use(authAdminProtect);
router.get('/admins/:id', getAdminById);

module.exports = router;