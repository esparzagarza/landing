import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/cms/services/tasks.service';
import { AuthService } from '../../../auth/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  get user() { return this.authService.user; }

  constructor(
    public _tasksService: TasksService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void { this.route.params.subscribe(() => { this._tasksService.dataBacklog(); }); }

  logout() {
    this.router.navigateByUrl('auth');
    this.authService.logout();
  }

}
