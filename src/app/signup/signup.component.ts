import { SignupService } from './../signup.service';
import { Component, OnInit } from '@angular/core';
import { Users } from './../users';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

id:number;
email: string;
password: string;

constructor(private  signup: SignupService) { }

  ngOnInit() {
  }

  saveDetails(ID: number, Email: string, Password: string){
   
    this.id= ID;
    this.email = Email;
    this.password = Password;

      this.signup.postUser(this.id, this.email, this.password);
  }

}
