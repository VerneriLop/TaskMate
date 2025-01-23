"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 5001;
// Middleware, joka mahdollistaa JSON-rungon käsittelyn
app.use(express_1.default.json());
// Pääsivun reitti
app.get('/', (_, res) => {
    res.send('Hello, world!');
});
// Käynnistetään palvelin
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
