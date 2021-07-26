import request from "request";
import { Repos } from "./Repos";
import { User } from "./User";

const url = 'https://api.github.com/users/';

const options = {
    headers:{
        'User-Agent':'request'
    },
    json:true
}
export class GithubApiService{
    getUserInfo(useName:string,callback:Function){
        request.get(url+useName,options,(error:any,res:any,body:any)=>{
            let user:User = new User(body)
            callback(user)
        })
    }

    getRepos(useName:string,callback:Function){
        request.get(url+useName+'/repos',options,(error:any,res:any,body:any)=>{
            let repo:Repos[] = body.map((repo:any)=>new Repos(repo)) 
            callback(repo)
        })
    }
}