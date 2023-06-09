import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from './team'
@Injectable()
export class TeamService {

  private teamsUrl = "./assets/teams.json";
  constructor(private http: HttpClient) { }
  getTeams(): Observable<Team[]>{
    return this.http.get<Team[]>(
      this.teamsUrl
    );
  }
}
