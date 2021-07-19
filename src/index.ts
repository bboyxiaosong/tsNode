// 

// console.log('Hello')


import { GithubApiService } from "./GithubApiService";
import { User } from "./User";

let api:GithubApiService = new GithubApiService();
api.getUserInfo('nickwen',(user:User)=>{
    console.log(user)
});
