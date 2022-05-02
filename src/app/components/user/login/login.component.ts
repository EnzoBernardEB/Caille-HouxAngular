import {Component, ViewChild} from '@angular/core';
import {UserHttpService} from "../../../service/user/user-http.service";
import {NgForm} from "@angular/forms";
import {UserRegister} from "../../../models/UserRegister";

@Component({
  selector: 'chx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @ViewChild("form") form!: NgForm;
  client: UserRegister = {username:"",password:""};

  constructor(private userHttpService: UserHttpService) { }

  authenticateUser() {
    this.userHttpService.authenticateUser(this.client);
  }
}
