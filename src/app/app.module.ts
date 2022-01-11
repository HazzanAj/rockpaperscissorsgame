import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {Player1recordComponent} from './player1record/player1record.component';
import {Player2recordComponent} from './player2record/player2record.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {Player1recordService} from "./player1record/player1record.service";
import {RouterModule} from "@angular/router";

import {Player2recordService} from "./player2record/player2record.service";
import {FooterComponent} from './footer/footer.component';
import {GameinprogressComponent} from './gameinprogress/gameinprogress.component';
import {GameInProgressServices} from "./gameinprogress/gameinprogressservices";
import {HeaderComponent} from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Player1recordComponent,
    Player2recordComponent,
    FooterComponent,
    GameinprogressComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [Player1recordService, Player2recordService, GameInProgressServices],
  bootstrap: [AppComponent]
})
export class AppModule {
}
