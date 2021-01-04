import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserSettings } from './user-settings';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  postUserSettingsForm(userSettings: UserSettings) : Observable<any> {
    /*
      Response builder in putsreq.com:
        var parsedBody = JSON.parse(request.body);
        parsedBody.id = '1234';
        response.body = parsedBody;
    */


    return this.http.post('https://putsreq.com/PoaEI8wMsxgKufm7nuoJ', userSettings);
    
    //return of(userSettings);
  }
}
