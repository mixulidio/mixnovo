import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
//import { environment } from "src/environments/environment";
import { Router } from '@angular/router';
//import * as jwt_decode from 'jwt-decode'; // npm install jwt-decode - acho que não é um jwt 

@Injectable({
  providedIn: "root",
})
export class AccountService {

  baseUrl = "/api/mixnfx-backend/";

  constructor(private router: Router,
              private http: HttpClient) {}

      async retrieveToken(username:string, password:string) {
        let params = new URLSearchParams();   
         params.append('grant_type','password'); // authorization_code
        // params.append('client_id', "mix");
        //params.append('client_secret', '123');
        // params.append('redirect_uri', this.redirectUri);
        // params.append('code',code);
        params.append("username", username);
        params.append("password", password);
      
        let headers = new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
                                       'Authorization': 'Basic bWl4OjEyMw==' });
        //headers.append("Authorization", "Basic bWl4OjEyMw==");
        
        const result =  await this.http
            .post<any>(this.baseUrl + 'oauth/token',
            params.toString(), { headers: headers })
            .toPromise()
            ;
            if (result && result.access_token) {
              this.saveToken(result);
            } else {
              alert('Invalid Credentials');
            }
            // .subscribe(
            //   data => this.saveToken(data),
            //   err => {alert('Invalid Credentials'); console.log(err);}); 
      }

      saveToken(token:any) {
        var expireDate = new Date().getTime() + (1000 * token.expires_in);
        window.localStorage.setItem("access_token", token.access_token);
        window.localStorage.setItem("expireDate", expireDate.toString());
        //Cookie.set("access_token", token.access_token, expireDate);
        //console.log('Obtained Access token');
        //window.location.href = 'http://localhost:8089';
      }

      // getResource(resourceUrl) : Observable<any> {
      //   var headers = new HttpHeaders({
      //     'Content-type': 'application/x-www-form-urlencoded; charset=utf-8', 
      //     'Authorization': 'Bearer '+Cookie.get('access_token')});
      //   return this._http.get(resourceUrl, { headers: headers })
      //                  .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
      // }
      // checkCredentials() {
      //   return Cookie.check('access_token');
      // } 
     
      // logouti() {
      //   Cookie.delete('access_token');
      //   window.location.reload();
      // }
//


  async login(user: any) {
    const result = await this.http
      .post<any>(this.baseUrl + 'oauth/token', user)
      .toPromise();
    if (result && result.access_token) {
      window.localStorage.setItem("access_token", result.access_token);
      return true;
    }
    return false;
  }

  async createAccount(account: any) {
    const result = await this.http
      .post<any>(this.baseUrl + 'user/create', account)
      .toPromise();
    return result;
  }

  getAuthorizationToken() {
    const token = window.localStorage.getItem("access_token");
    return token;
  }

  getTokenExpirationDate(token: string): Date {
    // const decoded: any = jwt_decode(token);
    const decoded: any = window.localStorage.getItem("expireDate");
    if (decoded == null || decoded === undefined) {
      return null;
    }
    const date = new Date(0);
    date.setUTCSeconds(decoded);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if (!token) {
      return true;
    }
    const date = this.getTokenExpirationDate(token);
    if (date === undefined || date == null) {
      return false;
    }
    const exp = !(date.valueOf() > new Date().valueOf());
    if(exp == true){
      console.error('Token expired');
    }
    return exp;
  }

  isUserLoggedIn() {
    const token = this.getAuthorizationToken();
    if (!token) {
      return false;
    } else if (this.isTokenExpired(token)) {
      return false;
    }
    return true;
  }

  // https://github.com/Devstackr/task-manager-mean-stack/blob/master/frontend/src/app/auth.service.ts

/*
  signup(email: string, password: string) {
    return this.webService.signup(email, password).pipe(
      shareReplay(),
      tap((res: HttpResponse<any>) => {
        // the auth tokens will be in the header of this response
        this.setSession(res.body._id, res.headers.get('x-access-token'), res.headers.get('x-refresh-token'));
        console.log("Successfully signed up and now logged in!");
      })
    )
  }
*/


  logout() {
    this.removeSession();
    this.router.navigate(['/login']);
  }

  private removeSession() {
    // localStorage.removeItem('user-id');
    // localStorage.removeItem('x-access-token');
    // localStorage.removeItem('x-refresh-token');
    window.localStorage.removeItem("access_token");
    window.localStorage.removeItem("expireDate");
  }

  // private setSession(userId: string, accessToken: string, refreshToken: string) {
  //   localStorage.setItem('user-id', userId);
  //   localStorage.setItem('x-access-token', accessToken);
  //   localStorage.setItem('x-refresh-token', refreshToken);
  // }
}
