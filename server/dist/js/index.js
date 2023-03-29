"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = __importDefault(require("../routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(routes_1.default);
dotenv_1.default.config();
const URI = process.env.DATABASE_URI;
const PORT = process.env.PORT || 4000;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
mongoose_1.default
    .connect(URI, options)
    .then(() => app.listen(PORT, () => console.log(`Api is running on port ${PORT}.`)))
    .catch((err) => console.log(err));
