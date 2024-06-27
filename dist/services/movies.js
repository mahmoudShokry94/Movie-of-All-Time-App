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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addMovieToFavourites = exports.deleteMovie = exports.updateMovie = exports.getMovieById = exports.insertMovie = exports.getMovies = void 0;
var error_1 = require("../Error/error");
var MovieRepository = __importStar(require("../repositories/movies"));
var tmdb_1 = require("../repositories/tmdb");
var getMovies = function (_a) {
    var pageIndex = _a.pageIndex, pageSize = _a.pageSize, movieGenre = _a.movieGenre, movieName = _a.movieName;
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_b) {
            console.log("Service...getMovies...");
            return [2 /*return*/, MovieRepository.getMovies({
                    filters: { movieGenre: movieGenre, movieName: movieName },
                    pagination: { pageIndex: pageIndex, pageSize: pageSize },
                })];
        });
    });
};
exports.getMovies = getMovies;
var insertMovie = function (payload) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        console.log("Service...insertMovie...");
        return [2 /*return*/, MovieRepository.insertMovie(payload)];
    });
}); };
exports.insertMovie = insertMovie;
var getMovieById = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var movie;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("Service...getMovieById...");
                return [4 /*yield*/, MovieRepository.getMovieById(id)];
            case 1:
                movie = _a.sent();
                if (!movie) {
                    throw new error_1.NotFoundError("Movie not found");
                }
                return [2 /*return*/, movie];
        }
    });
}); };
exports.getMovieById = getMovieById;
var updateMovie = function (id, payload) { return __awaiter(void 0, void 0, void 0, function () {
    var movie;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("Service...updateMovie...");
                return [4 /*yield*/, MovieRepository.getMovieById(id)];
            case 1:
                movie = _a.sent();
                if (!movie) {
                    throw new error_1.NotFoundError("Movie not found");
                }
                return [2 /*return*/, MovieRepository.updateMovie(id, payload)];
        }
    });
}); };
exports.updateMovie = updateMovie;
var deleteMovie = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var movie;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("Service...deleteMovie...");
                return [4 /*yield*/, MovieRepository.getMovieById(id)];
            case 1:
                movie = _a.sent();
                if (!movie) {
                    throw new error_1.NotFoundError("Movie not found");
                }
                return [2 /*return*/, MovieRepository.deleteMovie(id)];
        }
    });
}); };
exports.deleteMovie = deleteMovie;
var addMovieToFavourites = function (movieId) { return __awaiter(void 0, void 0, void 0, function () {
    var movieInfo, _a, adult, overview, popularity;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                console.log("Service...addMovieToFavourites...");
                return [4 /*yield*/, MovieRepository.getMovieById(movieId)];
            case 1:
                movieInfo = _b.sent();
                if (!movieInfo) {
                    throw new error_1.NotFoundError("Movie with ID ".concat(movieId, " not found"));
                }
                if (movieInfo === null || movieInfo === void 0 ? void 0 : movieInfo.isFavourite) {
                    throw new error_1.ValidationError("Movie with ID ".concat(movieId, " is already added to favourites"));
                }
                return [4 /*yield*/, (0, tmdb_1.getMovieInfo)(movieInfo.title, movieInfo.year)];
            case 2:
                _a = _b.sent(), adult = _a.adult, overview = _a.overview, popularity = _a.popularity;
                return [4 /*yield*/, MovieRepository.updateMovie(movieId, {
                        isFavourite: true,
                        additionalDetails: { adult: adult, overview: overview, popularity: popularity },
                    })];
            case 3: return [2 /*return*/, _b.sent()];
        }
    });
}); };
exports.addMovieToFavourites = addMovieToFavourites;
//# sourceMappingURL=movies.js.map