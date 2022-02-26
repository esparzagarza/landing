import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

import Swal from 'sweetalert2';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  myForm: FormGroup = this.fb.group({
    email: ['mpouros@example.net', [Validators.required, Validators.email]],
    password: ['password', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  login() {
    const { email, password } = this.myForm.value;
    this.authService.login(email, password)
      .subscribe(ok => { ok === true ? this.router.navigateByUrl('/dashboard') : Swal.fire('Opps!', ok, 'error'); });
  }


}
