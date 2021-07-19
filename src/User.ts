export class User {
    login: string;
    bio: string;
    name: string;
    avatar_url: string;
    constructor(responseUser: any) {
        this.login = responseUser.login;
        this.bio = responseUser.bio;
        this.name = responseUser.name;
        this.avatar_url = responseUser.avatar_url;


    }

}