"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GithubApiService = void 0;
var request_1 = __importDefault(require("request"));
var Repos_1 = require("./Repos");
var User_1 = require("./User");
var url = 'https://api.github.com/users/';
var options = {
    headers: {
        'User-Agent': 'request'
    },
    json: true
};
var GithubApiService = /** @class */ (function () {
    function GithubApiService() {
    }
    GithubApiService.prototype.getUserInfo = function (useName, callback) {
        request_1.default.get(url + useName, options, function (error, res, body) {
            var user = new User_1.User(body);
            callback(user);
        });
    };
    GithubApiService.prototype.getRepos = function (useName, callback) {
        request_1.default.get(url + useName + '/repos', options, function (error, res, body) {
            var repo = body.map(function (repo) { return new Repos_1.Repos(repo); });
            callback(repo);
        });
    };
    return GithubApiService;
}());
exports.GithubApiService = GithubApiService;
