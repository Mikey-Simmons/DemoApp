import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {
  playerForm!: FormGroup;
  submitted:boolean= false;
  constructor(private formBuilder: FormBuilder){}
  ngOnInit() {
      this.playerForm = this.formBuilder.group({
        name: ['', Validators.required],
        team: ['', Validators.required]
      })
  }
}
