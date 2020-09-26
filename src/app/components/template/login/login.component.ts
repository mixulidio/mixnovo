import { AccountService } from './../../../services/account.service';
import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: "nfx-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {

  @Input() error: string | null;

  constructor(private accountService: AccountService,
              private router: Router) {}

  form: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(5), Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  ngOnInit(): void {
    this.accountService.logout();
  }

  async submit() {
    if (this.form.valid) {
      //this.submitEM.emit(this.form.value);
      try{
        //const result = await this.accountService.login(this.form.value);
        const result = await this.accountService.retrieveToken(this.form.get('username').value, this.form.get('password').value);
        this.router.navigate(['/']);
      } catch (err){
        this.error = 'Houve um erro tente novamente.'
        if (err instanceof HttpErrorResponse) {
          if (err.status === 400) {
            alert('Login ou senha inválido.');
          }
        }
      }
    }
  }
}
