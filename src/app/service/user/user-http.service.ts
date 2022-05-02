import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {authentication} from "../../constantes/urls/usesURL";
import {UserRegister} from "../../models/UserRegister";
import {User} from "../../models/User";

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {
  activeUser: User| null = null;
  constructor(private httpClient: HttpClient) { }

  authenticateUser(client: UserRegister) {
    this.httpClient.post(authentication,client).subscribe((client) => console.log(client));
  }
}

