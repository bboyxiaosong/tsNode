// 

// console.log('Hello')


import { GithubApiService } from "./GithubApiService";
import { Repos } from "./Repos";
import { User } from "./User";

let api:GithubApiService = new GithubApiService();
api.getUserInfo('nickwen',(user:User)=>{
    // console.log(user)
});
api.getRepos('nickwen',(repo:Repos[])=>{
    console.log(repo)
});
