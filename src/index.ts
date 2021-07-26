// 

// console.log('Hello')


import { GithubApiService } from "./GithubApiService";
import { Repos } from "./Repos";
import { User } from "./User";
import * as Lodash from 'lodash';
import express from 'express';
import url from 'url'
const app = express();
let api:GithubApiService = new GithubApiService();

// api.getRepos('nickwen',(repo:Repos[])=>{
//     console.log(repo)
//     if(repo){
//         // Lodash.sortBy(repo,[(repo:Repos)=>repo.size*-1])
//     }
// });

app.get("/github",(req,res)=>{
    let username:any = url.parse(req.url,true).query.username;
    api.getUserInfo(username,(user:User)=>{
        console.log(user)
        res.send(user)
    });
})
app.listen(3000,()=>{
    console.log('serve running port 3000')
})

