"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// New Router instance
const router = (0, express_1.Router)();
// Home routes
router.get('/', (req, res) => {
    res.send('Stellar Crawler master API');
});
exports.default = router;
