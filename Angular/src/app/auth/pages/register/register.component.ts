import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent {

  myForm: FormGroup = this.fb.group({
    name: ['Pedro Esparza', [Validators.required, Validators.minLength(6)]],
    email: ['isc.pedroesparza@gmail.com', [Validators.required, Validators.email]],
    password: ['password', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  register() {
    const { name, email, password } = this.myForm.value;
    this.authService.register(name, email, password)
      .subscribe(ok => { ok === true ? this.router.navigateByUrl('/dashboard') : Swal.fire('Opps!', ok, 'error'); });
  }
}
