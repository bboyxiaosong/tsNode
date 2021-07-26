"use strict";
// 
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// console.log('Hello')
var GithubApiService_1 = require("./GithubApiService");
var express_1 = __importDefault(require("express"));
var url_1 = __importDefault(require("url"));
var app = express_1.default();
var api = new GithubApiService_1.GithubApiService();
// api.getRepos('nickwen',(repo:Repos[])=>{
//     console.log(repo)
//     if(repo){
//         // Lodash.sortBy(repo,[(repo:Repos)=>repo.size*-1])
//     }
// });
app.get("/github", function (req, res) {
    var username = url_1.default.parse(req.url, true).query.username;
    api.getUserInfo(username, function (user) {
        console.log(user);
        res.send(user);
    });
});
app.listen(3000, function () {
    console.log('serve running port 3000');
});
