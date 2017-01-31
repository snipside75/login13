import { Component, OnInit } from '@angular/core';
import {MediaService} from "../services/media.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private username : string = '';
  private password : string = '';
  private email: string = '';
  private password1: string = '';
  constructor(private mediaService : MediaService) { }

  ngOnInit() {
  }

  register = () => {
    const user = {
      username: this.username,
      password: this.password,
      email: this.email
    };
    this.mediaService.setUser(user);
    this.mediaService.register();
  }
}
