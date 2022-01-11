import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {Player1recordComponent} from "./player1record/player1record.component";
import {Player2recordComponent} from "./player2record/player2record.component";
import {GameinprogressComponent} from "./gameinprogress/gameinprogress.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'gameinprogress', component: GameinprogressComponent},
  {path: 'player1record', component: Player1recordComponent},
  {path: 'player2record', component: Player2recordComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
