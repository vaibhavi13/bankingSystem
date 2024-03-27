const express = require("express");
const {getOtp,updateProfile,getWithdraws,withdraw,getProfile,deposit,getDeposits} = require("../controllers/customer/customerController");
const {authCustomerProtect,checkPassword} = require("../middlewares/customerMiddleware/authCustomerMiddleware");

const router = express.Router();

router.route("/profile")
    .get(authCustomerProtect, getProfile)
    .put(authCustomerProtect, updateProfile);

router.route("/deposit")
    .post(authCustomerProtect,deposit)
    .get(authCustomerProtect, getDeposits);

router.route("/otp")
    .get(authCustomerProtect, getOtp);

router.route("/withdraw")
    .post(authCustomerProtect, withdraw)
    .get(authCustomerProtect, getWithdraws);

module.exports = router;