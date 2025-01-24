"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5001;
// Middleware, joka mahdollistaa JSON-rungon käsittelyn
app.use(express_1.default.json());
// Pääsivun reitti
app.get('/', (_, res) => {
    res.send('Hello, world!');
});
app.use(body_parser_1.default.json()); // JSON-muotoisten pyyntöjen käsittely
app.use('/api/auth', authRoutes_1.default); // Käytetään auth-reittiä
// Käynnistetään palvelin
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
