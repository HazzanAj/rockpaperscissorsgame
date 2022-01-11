import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'UserInterface';
  author = 'Ajao hazzan';
  appName = {name: 'RockPaperScissor-Game'};

  constructor(
    private router: Router) {
  }

  goToPage(page: string): void {
    console.log('Navigated to:' + page);
    this.router.navigate([page, this.appName])
  }

  ngOnInit() {

  }


}
