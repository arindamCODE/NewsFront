import { Users } from './users';
import { SignupComponent } from './signup/signup.component';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()

export class SignupService
{
    constructor(private http: Http){

    }

    private url: string = 'http://localhost:5000/api/user';
    
    news: Users;
    
    postUser(ID: number, Email: string, Password: string) {
        console.log(ID);
        console.log(Email);
        console.log(Password)
        

        this.news = new Users(ID, Email, Password);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        this.http.post(this.url, this.news, options).map(response => response.json())
            .subscribe(
            () => { console.log('Success') }
            );
    }  
}