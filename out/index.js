"use strict";
// 
Object.defineProperty(exports, "__esModule", { value: true });
// console.log('Hello')
var GithubApiService_1 = require("./GithubApiService");
var api = new GithubApiService_1.GithubApiService();
api.getUserInfo('nickwen', function (user) {
    // console.log(user)
});
api.getRepos('nickwen', function (repo) {
    console.log(repo);
});
