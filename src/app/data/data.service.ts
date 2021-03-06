import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserSettings } from './user-settings';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getSubscriptionTypes(): Observable<string[]>{
    return of(['Monthly', 'Annual', 'Lifetime']);
  }

  postUserSettingsForm(userSettings: UserSettings) : Observable<any> {
    /*
      Response builder in putsreq.com:
      Success:
        var parsedBody = JSON.parse(request.body);
        parsedBody.id = '1234';
        response.body = parsedBody;

      Failure:
        response.status = 400;
        response.body = { errorMessage: 'Some error goes here...'};
    */


    return this.http.post('https://putsreq.com/PoaEI8wMsxgKufm7nuoJ', userSettings);
    
    //return of(userSettings);
  }
}
