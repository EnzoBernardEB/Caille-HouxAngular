import { Component, OnInit } from '@angular/core';
import {UserHttpService} from "../../../service/user/user-http.service";
import {User} from "../../../models/User";

@Component({
  selector: 'chx-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  get user(): User|null {
    return this.userHttpService.activeUser;
  }
  constructor(private userHttpService: UserHttpService) { }

  ngOnInit(): void {
  }

}
