"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const retailerRouter_1 = __importDefault(require("./router/retailerRouter"));
const db_1 = __importDefault(require("./config/db"));
const config_1 = require("./environment/config");
const app = (0, express_1.default)();
const PORT = config_1.Local.Port;
app.use('/uploads', express_1.default.static('uploads'));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/', retailerRouter_1.default);
db_1.default.sync()
    .then(() => {
    console.log('Database synchronized\n\n ');
})
    .catch((err) => {
    console.error('Database synchronization failed:', err);
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
exports.default = app;
