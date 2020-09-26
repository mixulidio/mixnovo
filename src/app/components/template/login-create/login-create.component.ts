import { Component, OnInit } from "@angular/core";
import { AccountService } from "src/app/services/account.service";
import { Router } from "@angular/router";
import { NotificationService } from "src/app/services/notification.service";
import { FormGroup, FormControl, Validators, AbstractControl } from "@angular/forms";

@Component({
  selector: "nfx-login-create",
  templateUrl: "./login-create.component.html",
  styleUrls: ["./login-create.component.css"],
})
export class LoginCreateComponent implements OnInit {

  constructor(
    private accountService: AccountService,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  form: FormGroup = new FormGroup({
    nome: new FormControl("",[Validators.required, Validators.minLength(3)]),
    email: new FormControl("",[Validators.required, Validators.minLength(5), Validators.email]),
    password: new FormControl("",[Validators.required, Validators.minLength(6)]),
    repassword: new FormControl("",[Validators.required, Validators.minLength(6)]),
  }, { validators: LoginCreateComponent.equalsTo });

  static equalsTo(group: AbstractControl): {[key:string]:boolean}{
      const password = group.get('password');
      const repassword = group.get('repassword');
      if(!password.valid || !repassword.valid){
        return undefined;
      }
      if(password.value !== repassword.value){
        return {notMatch:true};
      }
      return undefined;
  }

  ngOnInit(): void {}

  async submit(){
    try {
      const result = await this.accountService.createAccount(this.form.value);
      this.notificationService.notify("Conta criada com sucesso");
      this.router.navigate(["'/'"]);
    } catch (error) {
      this.notificationService.notify(error);
    }
  }
}
