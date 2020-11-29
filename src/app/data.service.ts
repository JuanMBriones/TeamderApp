import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
 
@Injectable({
  providedIn: 'root'
})

export class DataService {
  private apiKey = 'http://localhost:8000/api/';
  constructor(private http: HttpClient) { }

  data: any;

  load(key: any): any {
    if (this.data) {
      return of(this.data);
    } else {
      return this.http
        .get(this.apiKey+key)
        .pipe();
    }
  }

  getAll(): Observable<any>{
    return this.http.get<any>(this.apiKey+'equipos');
  }

  allTeams(): Observable<Teams[]> {
    return this.http.get<TeamsList>(this.apiKey+'equipos').pipe(map(myTeams => myTeams.data));
  }


  //this.dataSvc.getAll().subscribe((res) => {console.log('Res', res)});

  /*getAPIObject(campo: any) {
    //this.http.get<any>(this.apiKey+campo).subscribe((res: Response) => { this.data = res;});
    this.http.get(this.apiKey+campo).map(response => response.json()).subscribe(data => {
      this.data = [];

      data.array.forEach(element => {
        this.data.push(element);
      });
    }, err => { });
  } */


  getTeams() {
    return this.load('equipos').pipe(
      map((data: any) => {
        return data.data.sort((a: any, b: any) => {
          const aName = a.attributes.teamName.split(' ').pop();
          const bName = b.attributes.teamName.split(' ').pop();
          return aName.localeCompare(bName);
        });
      })
    );
  }

  /*processData(data: any) {
    // just some good 'ol JS fun with objects and arrays
    // build up the data by linking speakers to sessions
    this.data = data;

    // loop through each day in the schedule
    this.data.schedule.forEach((day: any) => {
      // loop through each timeline group in the day
      day.groups.forEach((group: any) => {
        // loop through each session in the timeline group
        group.sessions.forEach((session: any) => {
          session.speakers = [];
          if (session.speakerNames) {
            session.speakerNames.forEach((speakerName: any) => {
              const speaker = this.data.speakers.find(
                (s: any) => s.name === speakerName
              );
              if (speaker) {
                session.speakers.push(speaker);
                speaker.sessions = speaker.sessions || [];
                speaker.sessions.push(session);
              }
            });
          }
        });
      });
    });

    return this.data;
  }*/
}

interface Teams {
  id: number;
  name: string;
}

interface TeamsList {
  data: Teams[];
}
  

  



  

