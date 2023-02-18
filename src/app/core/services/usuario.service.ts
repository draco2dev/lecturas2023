import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { catchError, map, throwError } from 'rxjs';
import { environment } from 'src/app/environment/environment';
import { EndPoints } from '../constant/ruta';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  // colocar las cookies 
  constructor( private readonly cookiesService: CookieService, private http: HttpClient
    ) { }

  save(data: any){
    const auth: any = this.cookiesService.getObject('auth');
    const headers = new HttpHeaders({'Authorization': 'Bearer ' + auth.token });
    return this.http.post<''>(environment.url.concat(EndPoints.nuevoUsuario), data, {headers: headers}).pipe(
      map((response: '') => {
        return response;
    }),catchError(error => {
      console.log(error)
        return throwError(error);
    })
    )
  }


}
