import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from './shared';
import {AuthService} from './auth';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css', 'shared/bootstrap.min.css']
})
export class AppComponent implements OnInit {
  constructor(private user: UserService, private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  logout() {
    var self = this;
    this.authService.logout(function() {
      self.router.navigateByUrl('/');
    })
  }

}
