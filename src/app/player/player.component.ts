import { Component } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {
      player={
        name: "Lebron James",
      number:23,
      team:"Los Angeles Lakers"

      }
      imageUrl:string ="https://cdn.nba.com/teams/uploads/sites/1610612747/2023/04/GettyImages-1252156315-04-24-23.jpg"
      updateNumber(){
        if(this.player.number==23){
          this.player.number= 6;
        }
        
      else{
        this.player.number = 23;
      }
    }
}
  

