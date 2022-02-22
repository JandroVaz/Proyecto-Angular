import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpclient:HttpClient) { }

  login(nombre:string,pass:string):Observable<User>{
    return this.httpclient.get<User>(`http://localhost/ServidorAPP/server.php?nombre=${nombre}&pass=${pass}`);
  }
}
