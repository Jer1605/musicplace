"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv = __importStar(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const app = express_1.default();
const dotenvRes = dotenv.config({ path: '.env' });
// Environment variables
if (dotenvRes.error)
    console.log(`[ENV FILE ERROR] ${dotenvRes.error}`);
// Database connexions
mongoose_1.default.connect(`${process.env.DB_HOST}`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log('[DATABASE CONNEXION STATUS] SUCCESS'); })
    .catch((e) => { console.log(`[DATABASE CONNEXION STATUS] ${e}`); });
mongoose_1.default.set('useCreateIndex', true);
// Middleware
app.use(helmet_1.default());
app.use(cors_1.default());
if (process.env.NODE_ENV !== 'production')
    app.use(morgan_1.default('dev'));
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
// Routes
app.use('/', (req, res, next) => {
    res.status(200).end("mescouilles");
    next();
});
app.listen(`${process.env.PORT}`, () => { console.log(`Server listening on port ${process.env.PORT}`); });
//# sourceMappingURL=server.js.map