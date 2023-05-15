import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TeamComponent } from './team/team.component';
import { TeamService } from './team/team.service';
import { LoginComponent } from './login/login.component';
import { PlayerFormComponent } from './player-form/player-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    TeamComponent,
    LoginComponent,
    PlayerFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [TeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
