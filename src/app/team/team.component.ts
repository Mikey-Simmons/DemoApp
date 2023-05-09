import { Component, OnInit } from '@angular/core';
import { Team } from './team';
import { TeamService } from './team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  teams!: Team[];
  errorMessage: string="";
  constructor(private teamService: TeamService){}
  getTeams(){
    this.teamService.getTeams().subscribe(
      teams => this.teams = teams,
      error => this.errorMessage = <any>error);
    
  }
  ngOnInit(): void {
    this.getTeams();
  }
  

}
