"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repos = void 0;
var Repos = /** @class */ (function () {
    function Repos(repo) {
        this.name = repo.name;
        this.size = repo.size;
        this.language = repo.language;
        this.description = repo.description;
    }
    return Repos;
}());
exports.Repos = Repos;
