import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService],
})
export class LoginComponent implements OnInit {
  public form: FormGroup = new FormGroup({});
  public login: boolean = true;
  public usuarioN:string='';
  constructor(private loginService: LoginService, private messageService: MessageService, private router:Router) {}
  
  @Output() log=this.login;

  ngOnInit(): void {
    this.form.addControl(
      'inputName',
      new FormControl('', {
        validators: [Validators.required, Validators.maxLength(20)],
      })
    );
    this.form.addControl(
      'inputPassword',
      new FormControl('', {
        validators: [Validators.required, Validators.maxLength(50)],
      })
    );
  }

  loginUser(): void {
    if (this.form.valid) {
      this.loginService.login(this.form.get('inputName')?.value, this.form.get('inputPassword')?.value).subscribe({
        next: (v) => {this.login=false;
                      this.usuarioN=v.nombre;
                      this.messageService.add({severity:'success', summary:'Success', detail:'Inicio de sesión correcto'}),
                      this.router.navigate(['/index'])} ,
        error: (e) => {switch(e.status){
          case 404:
            this.messageService.add({severity:'error', summary:'Error', detail:'Usuario no encontrado'}); 
          break;
          case 500:
            this.messageService.add({severity:'error', summary:'Error', detail:'Error en el servidor contacta con el Administrador'}); 
            break;
        }},
        complete: () => console.info('Peticion terminada'),
      });
    }
  }
}
