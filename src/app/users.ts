
export class Users
{
    ID: number;
    Email: string;
    Password: string;
    
    constructor(id: number, email: string, password: string){
            this.ID = id;
            this.Email = email;
            this.Password = password;
    }
}