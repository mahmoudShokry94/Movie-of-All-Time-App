"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
var mongoose_1 = __importDefault(require("mongoose"));
var mongodb_manager_1 = require("../adapters/mongodb-manager");
var uuid = __importStar(require("uuid"));
var movieSchema = new mongoose_1.default.Schema({
    movieId: {
        type: String,
        unique: true,
        required: true,
        index: true,
        default: uuid.v7,
    },
    title: {
        type: String,
        required: true,
        index: true,
    },
    genre: {
        type: [String],
        required: true,
        index: true,
    },
    country: {
        type: [String],
        required: true,
    },
    colour: {
        type: [String],
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    isFavourite: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
    additionalDetails: {
        overview: {
            type: String,
        },
        popularity: {
            type: String,
        },
        adult: {
            type: Boolean,
        },
    },
}, { timestamps: true });
var connection = (0, mongodb_manager_1.getMoviesDb)();
exports.default = connection.model("Movie", movieSchema);
//# sourceMappingURL=movies.js.map